/**
 * ComercialReports.tsx — View de Relatórios Comerciais.
 *
 * Papel na arquitetura MVVM: camada VIEW.
 * Toda lógica está em useComercialReports (ViewModel).
 *
 * O que exibe:
 *  Desktop (2 colunas):
 *   Esquerda: seleção de campos (árvore por categoria) + filtros
 *   Direita:  gráficos (segmento, piso, status) + pré-visualização
 *
 *  Mobile: accordion separado para gráficos e campos + modal de preview
 *
 * Seleção de campos (árvore):
 *  - Categorias: Disponibilidade, Proposta, Histórico
 *  - Cada categoria é expansível/retrátil (isCategoryExpanded)
 *  - Checkbox de categoria seleciona/deseleciona todos os campos filhos
 *  - Histórico tem recuo visual (ml-4) indicando que é filho de Proposta
 *
 * Pré-visualização:
 *  - Exibe até 8 unidades em estrutura hierárquica:
 *    Unidade → Proposta → Histórico
 *  - Blocos coloridos por categoria: vermelho (disp.), roxo (prop.), âmbar (hist.)
 *
 * Exportação:
 *  - XLSX: usa SheetJS para gerar planilha com colunas achatadas
 *  - PDF: usa jsPDF + autoTable com cabeçalho da marca JP Mall
 *  - handleExportXLSX/PDF: aliases do handleExport do ViewModel,
 *    que setam o formato antes de chamar a função de exportação
 *
 * Aliases locais:
 *  isCategoryExpanded(cat) — função derivada de expandedCategories (string[])
 *  isExpandedCat           — calculado por .map() de categoria, booleano local
 *  fmtCurrency             — formata número como R$ para exibição
 *  getEdicoesByProposal    — retorna [] (histórico via API futuramente)
 *  hasDisp/hasProp/hasHist — booleanos de categoria com campo selecionado
 */
import React from "react";
import {
  Download, CheckSquare,
  FileText, Check, ChevronDown, X, BarChart2
} from "lucide-react";
import { PageShell, FilterBar, FilterSeparator, FilterDateRange, MobileExpandableSection } from "../../components/PageShared";
import { MobileCarousel } from "../../components/MobileCarousel";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { SEGMENTOS, PISOS, STATUS_LOJA } from "../../enums";
import { useComercialReports, type ReportField } from "../../viewmodels/useComercialReports";
import { DataTable } from "../../components/DataTable";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

import { ChartTooltip } from "../../components/ChartTooltip";

const CHART_COLORS = ['#D93030', '#C8A882', '#8B1A1A', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'];

// Ordem de renderização das categorias
const CATEGORY_ORDER = ['Disponibilidade', 'Proposta', 'Dados da Loja', 'Histórico'] as const;

// Cores por categoria
const CATEGORY_COLORS: Record<string, string> = {
  Disponibilidade: 'bg-[#D93030]/10 text-[#D93030] dark:bg-[#D93030]/20',
  Proposta:        'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Dados da Loja': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  Histórico:       'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
};

const CATEGORY_BORDER: Record<string, string> = {
  Disponibilidade: 'border-l-4 border-[#D93030]',
  Proposta:        'border-l-4 border-purple-500',
  'Dados da Loja': 'border-l-4 border-teal-500',
  Histórico:       'border-l-4 border-amber-500 ml-4',
};

export function ComercialReports() {
  const {
    allLojistas, allPropostas, filteredLojistas, filteredPropostas,
    segmentosChart, pisoChart, propostasChart,
    fields, setFields, selectedFields, dispFields, propFields, lojFields, histFields,
    expandedCategories,
    dateFrom, setDateFrom, dateTo, setDateTo,
    filterPisos, setFilterPisos,
    filterStatuses, setFilterStatuses,
    filterSegmentos, setFilterSegmentos,
    showMobileFilters, setShowMobileFilters,
    exportFormat, setExportFormat,
    reportChartIndex, setReportChartIndex,
    showPreviewModal, setShowPreviewModal,
    mobileReportSection,
    toggleField, toggleCategory, toggleExpanded, toggleReportSection,
    handleExport,
  } = useComercialReports();

  // ── Aliases e variáveis locais ──────────────────────────
  // expandedCategories era Set — agora é string[] — adaptar .has()
  const isCategoryExpanded = (cat: string) => expandedCategories.includes(cat);

  // Booleanos de categoria selecionada
  const hasDisp = dispFields.length > 0;
  const hasProp = propFields.length > 0;
  const hasHist = histFields.length > 0;
  // hasLoj removido — categoria "Dados da Loja" removida

  // fmtCurrency local
  const fmtCurrency = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });

  // getEdicoesByProposal — retorna [] pois histórico vem da API
  const getEdicoesByProposal = (_id: string): Array<{ editadoEm: string; editadoPorNome: string; snapshot: { status: string } }> => [];

  // Aliases para compatibilidade com o JSX existente
  const handleExportXLSX = () => { const prev = exportFormat; setExportFormat('xlsx'); handleExport(); setExportFormat(prev); };
  const handleExportPDF  = () => { const prev = exportFormat; setExportFormat('pdf');  handleExport(); setExportFormat(prev); };

  return (
    <PageShell>
      <FilterBar isOpen={showMobileFilters} onToggle={() => setShowMobileFilters(f => !f)} hasActiveFilters={!!(dateFrom || dateTo || filterPisos.length > 0 || filterStatuses.length > 0 || filterSegmentos.length > 0)}>
        <FilterDateRange label="Data de criação da proposta" from={dateFrom} to={dateTo} onFromChange={setDateFrom} onToChange={setDateTo} />
        <FilterSeparator />
        <EnumCheckboxFilter
          label="Piso"
          options={PISOS.map(p => ({ value: p.value, label: p.labelShort }))}
          selected={filterPisos}
          onToggle={p => setFilterPisos(prev =>
            prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
          )}
          mobileGrid="grid-cols-3"
        />
        <FilterSeparator />
        <EnumCheckboxFilter
          label="Status da unidade"
          options={STATUS_LOJA}
          selected={filterStatuses}
          onToggle={s => setFilterStatuses(prev =>
            prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
          )}
        />
        <FilterSeparator />
        <EnumCheckboxFilter
          label="Segmento"
          options={SEGMENTOS}
          selected={filterSegmentos}
          onToggle={s => setFilterSegmentos(prev =>
            prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
          )}
        />
      </FilterBar>

      {/* Área principal — flex-1 com scroll */}
      <div className="flex-1 overflow-hidden flex flex-col gap-4">

        {/* Grid Campos + Preview */}
        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 flex-1 overflow-hidden min-h-0">

          {/* Campos a Exportar — 1/3 */}
          <div className="lg:col-span-1 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4 flex flex-col overflow-hidden">
            <div className="flex items-center mb-3 flex-shrink-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#D93030]" /> Campos a Exportar
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1 pr-1">
              {/* Linha de controle — dentro do scroll */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-[#2E3447] mb-2 mt-3">
                <span className="text-[10px] text-gray-400 dark:text-[#64748B]">{selectedFields.length} de {fields.length} selecionados</span>
                <div className="flex gap-2">
                  <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: true })))} className="text-[10px] text-[#D93030] hover:underline">Todos</button>
                  <span className="text-[10px] text-gray-300 dark:text-[#3E4557]">|</span>
                  <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: false })))} className="text-[10px] text-gray-500 hover:underline">Nenhum</button>
                </div>
              </div>

              {CATEGORY_ORDER.map(category => {
                const catFields = fields.filter(f => f.category === category);
                const allSel = catFields.every(f => f.selected);
                const someSel = catFields.some(f => f.selected);
                const isHistorico = category === 'Histórico';
                const isExpandedCat = isCategoryExpanded(category);

                return (
                  <div key={category} className={isHistorico ? 'ml-4' : ''}>
                    {/* Linha do nó pai (categoria) — clique no chevron expande, clique no checkbox seleciona */}
                    <div className={`flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors
                      ${isHistorico ? 'border-l-2 border-amber-400 pl-3' : ''}`}>

                      {/* Chevron de expand/collapse */}
                      <button
                        onClick={() => toggleExpanded(category)}
                        className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-[#F1F5F9] transition-colors"
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isExpandedCat ? '' : '-rotate-90'}`} />
                      </button>

                      {/* Checkbox da categoria */}
                      <button
                        onClick={() => toggleCategory(category)}
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all
                          ${allSel ? 'bg-[#D93030] border-[#D93030]' : someSel ? 'bg-[#D93030]/30 border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557] hover:border-[#D93030]'}`}
                      >
                        {allSel && <Check className="w-2.5 h-2.5 text-white" />}
                        {someSel && !allSel && <div className="w-2 h-0.5 bg-[#D93030] rounded" />}
                      </button>

                      {/* Badge da categoria + indicação filho */}
                      <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${CATEGORY_COLORS[category]}`}>
                          {category}
                        </span>
                        {isHistorico && (
                          <span className="text-[9px] text-amber-500/70 whitespace-nowrap">↳ Proposta</span>
                        )}
                        <span className="text-[10px] text-gray-400 dark:text-[#64748B] ml-auto flex-shrink-0">
                          {catFields.filter(f => f.selected).length}/{catFields.length}
                        </span>
                      </div>
                    </div>

                    {/* Filhos — colapsáveis */}
                    {isExpandedCat && (
                      <div className="ml-7 mt-0.5 space-y-0.5">
                        {catFields.map(field => (
                          <label
                            key={field.id}
                            className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors group"
                          >
                            <button
                              onClick={() => toggleField(field.id)}
                              className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all
                                ${field.selected ? 'bg-[#D93030] border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557] hover:border-[#D93030]'}`}
                            >
                              {field.selected && <Check className="w-2 h-2 text-white" />}
                            </button>
                            <span className="text-xs text-gray-700 dark:text-[#CBD5E1] group-hover:text-[#D93030] transition-colors leading-tight">
                              {field.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preview hierárquico — 2/3 */}
          <div className="lg:col-span-2 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-[#2E3447] flex-shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#D93030]" />
                <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">
                  Pré-visualização ({filteredLojistas.length} unidades)
                </span>
              </div>
              <div className="flex gap-2">
                {/* Legenda de categorias */}
                {CATEGORY_ORDER.filter(c => selectedFields.some(f => f.category === c)).map(c => (
                  <span key={c} className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${CATEGORY_COLORS[c]}`}>{c}</span>
                ))}
              </div>
            </div>

            {selectedFields.length === 0 ? (
              <div className="flex-1 flex items-center justify-center text-gray-400 dark:text-[#64748B]">
                <div className="text-center">
                  <CheckSquare className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Selecione ao menos um campo para pré-visualizar</p>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredLojistas.slice(0, 8).map(l => {
                  const props = allPropostas.filter(p => p.unidade === l.unidade);
                  const dispExpanded = true;

                  return (
                    <div key={l.id} className="border border-red-200 dark:border-red-900/30 rounded-xl overflow-hidden">

                      {/* ══ CABEÇALHO DISPONIBILIDADE ══ */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-900/20">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                          Disponibilidade
                        </span>
                      </div>

                      {/* ══ TABELA DISPONIBILIDADE ══ */}
                      {dispFields.length > 0 && (
                        <DataTable
                          data={[{
                            ...Object.fromEntries(dispFields.map(f => [f.id, 
                              f.id === 'unidade' ? l.unidade :
                              f.id === 'piso' ? (l.piso === 'P' ? 'Primeiro Piso' : l.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso') :
                              f.id === 'corredor' ? l.corredor :
                              f.id === 'area' ? `${l.area} m²` :
                              f.id === 'statusUnidade' ? l.status : '—'
                            ]))
                          }]}
                          columnConfig={Object.fromEntries(dispFields.map(f => [f.id, { label: f.label, _allowFilter: false, sortable: false }]))}
                        />
                      )}

                      {/* ══ SUB-RELATÓRIOS DE PROPOSTA (só quando expandido) ══ */}
                      {dispExpanded && (
                        <div className="p-3 space-y-2 bg-white dark:bg-[#1A1F2E]">
                          {props.length === 0 ? (
                            <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-2">
                              Nenhuma proposta vinculada
                            </p>
                          ) : props.map(p => {
                            const propExpanded = true;
                            // Buscar lojista pelo lojistaId da proposta (não pela unidade)
                            // Dados da loja vêm de nomeFantasia/segmento/responsavel da Proposta
                            const edicoes = histFields.length > 0
                              ? getEdicoesByProposal(p.id)
                              : [];
                            const hasChildren =
                              (false) ||
                              edicoes.length > 0;

                            return (
                              <div key={p.id} className="border border-purple-200 dark:border-purple-800/40 rounded-lg overflow-hidden">

                                {/* — CABEÇALHO PROPOSTA — */}
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-800/30">
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                                    Proposta
                                  </span>
                                </div>

                                {/* — TABELA PROPOSTA — */}
                                {propFields.length > 0 && (
                                  <DataTable
                                    data={[{
                                      ...Object.fromEntries(propFields.map(f => [f.id,
                                        f.id === 'propCodigo' ? p.id :
                                        f.id === 'propTipo' ? p.tipo :
                                        f.id === 'propValor' ? fmtCurrency(p.valorProposto) :
                                        f.id === 'propStatus' ? p.status :
                                        f.id === 'propCriacao' ? p.dataCriacao :
                                        f.id === 'propVencimento' ? (p.dataVencimento || '—') :
                                        f.id === 'propResponsavel' ? (p.responsavel || '—') : '—'
                                      ]))
                                    }]}
                                    columnConfig={Object.fromEntries(propFields.map(f => [f.id, { label: f.label, _allowFilter: false, sortable: false }]))}
                                  />
                                )}

                                {/* — SUB-BLOCOS LOJISTA E HISTÓRICO (só quando proposta expandida) — */}
                                {propExpanded && (
                                  <div className="p-2 space-y-2 bg-white dark:bg-[#1A1F2E]">

                                    {/* LOJISTA — só renderiza se p.nomeFantasia || '—'Id existir e lojista for encontrado */}
                                    {false && (
                                      <div className="border border-teal-200 dark:border-teal-800/40 rounded-lg overflow-hidden">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-teal-50 dark:bg-teal-900/20 border-b border-teal-100 dark:border-teal-800/30">
                                          <span className="text-[9px] font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                                            Dados da Loja
                                          </span>
                                        </div>

                                      </div>
                                    )}

                                    {/* HISTÓRICO — só renderiza se houver edições e campos selecionados */}
                                    {edicoes.length > 0 && histFields.length > 0 && (
                                      <div className="border border-amber-200 dark:border-amber-800/40 rounded-lg overflow-hidden">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-800/30">
                                          <span className="text-[9px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                                            Histórico
                                          </span>
                                        </div>
                                        <DataTable
                                          data={edicoes.slice(0, 5).map(e => ({
                                            ...Object.fromEntries(histFields.map(f => [f.id,
                                              f.id === 'histData'       ? new Date(e.editadoEm).toLocaleString('pt-BR') :
                                              f.id === 'histEditor'     ? e.editadoPorNome :
                                              f.id === 'histStatusAnt'  ? e.snapshot.status :
                                              f.id === 'histStatusNovo' ? p.status : '—'
                                            ]))
                                          }))}
                                          columnConfig={Object.fromEntries(histFields.map(f => [f.id, { label: f.label, _allowFilter: false, sortable: false }]))}
                                        />
                                      </div>
                                    )}

                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex-shrink-0 px-5 py-3 bg-gray-50/50 dark:bg-[#1A1F2E] border-t border-gray-100 dark:border-[#2E3447] flex items-center justify-between">
              <p className="text-xs text-gray-500 dark:text-[#64748B]">
                Exibindo prévia de {Math.min(8, filteredLojistas.length)} de {filteredLojistas.length} unidades
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => exportFormat === 'xlsx' ? handleExportXLSX() : handleExportPDF()}
                  disabled={selectedFields.length === 0}
                  className="flex items-center gap-1.5 bg-[#D93030] hover:bg-[#c02828] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Exportar
                </button>
              </div>
            </div>
          </div>

        </div>

        <MobileExpandableSection
          icon={CheckSquare}
          title="Campos a Exportar"
          badge={<span className="text-[10px] text-gray-400 dark:text-[#64748B] font-normal">({selectedFields.length}/{fields.length})</span>}
          isOpen={mobileReportSection === 'campos'}
          onToggle={() => toggleReportSection('campos')}
          contentClassName="flex-1 overflow-y-auto space-y-1 px-4 pb-4"
        >
          {/* Linha de controle */}
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-[#2E3447] mb-2 mt-3">
            <span className="text-[10px] text-gray-400 dark:text-[#64748B]">{selectedFields.length} de {fields.length} selecionados</span>
            <div className="flex gap-2">
              <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: true })))} className="text-[10px] text-[#D93030] hover:underline">Todos</button>
              <span className="text-[10px] text-gray-300 dark:text-[#3E4557]">|</span>
              <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: false })))} className="text-[10px] text-gray-500 hover:underline">Nenhum</button>
            </div>
          </div>

          {CATEGORY_ORDER.map(category => {
            const catFields = fields.filter(f => f.category === category);
            const allSel = catFields.every(f => f.selected);
            const someSel = catFields.some(f => f.selected);
            const isHistorico = category === 'Histórico';
            const isExpandedCat = isCategoryExpanded(category);

            return (
              <div key={category} className={isHistorico ? 'ml-4' : ''}>
                <div className={`flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors
                  ${isHistorico ? 'border-l-2 border-amber-400 pl-3' : ''}`}>
                  <button onClick={() => toggleExpanded(category)} className="flex-shrink-0">
                    <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isExpandedCat ? '' : '-rotate-90'}`} />
                  </button>
                  <div
                    onClick={() => toggleCategory(category)}
                    className={`w-3.5 h-3.5 border rounded flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors
                      ${allSel ? 'bg-[#D93030] border-[#D93030]' : someSel ? 'bg-gray-300 dark:bg-[#3E4557] border-gray-400 dark:border-[#64748B]' : 'border-gray-400 dark:border-[#64748B]'}`}
                  >
                    {allSel && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                    {someSel && !allSel && <div className="w-1.5 h-0.5 bg-gray-700 dark:bg-[#CBD5E1]" />}
                  </div>
                  <span className={`text-xs font-semibold flex-1 ${CATEGORY_COLORS[category]}`}>{category}</span>
                  <span className="text-[10px] text-gray-400 dark:text-[#64748B] font-mono">{catFields.filter(f => f.selected).length}/{catFields.length}</span>
                </div>
                {isExpandedCat && (
                  <div className="ml-6 space-y-0.5 mt-0.5">
                    {catFields.map(field => (
                      <div key={field.id}
                        onClick={() => toggleField(field.id)}
                        className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-50 dark:hover:bg-[#1A1F2E] cursor-pointer transition-colors">
                        <div className={`w-3 h-3 border rounded flex items-center justify-center flex-shrink-0
                          ${field.selected ? 'bg-[#D93030] border-[#D93030]' : 'border-gray-300 dark:border-[#64748B]'}`}>
                          {field.selected && <Check className="w-2 h-2 text-white" strokeWidth={3} />}
                        </div>
                        <span className="text-xs text-gray-700 dark:text-[#CBD5E1] flex-1">{field.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </MobileExpandableSection>

      </div>

      {/* FAB — mobile only */}
      <button
        onClick={() => setShowPreviewModal(true)}
        className="sm:hidden fixed bottom-20 right-4 z-[70] w-14 h-14 bg-[#D93030] hover:bg-[#c02828] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        title="Pré-visualizar relatório"
      >
        <FileText className="w-6 h-6" />
      </button>

      {/* Modal Preview — mobile only */}
      {showPreviewModal && (
        <div className="sm:hidden fixed inset-0 z-[80] flex flex-col bg-white dark:bg-[#1E2435]">
          <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8B1A1A] to-[#D93030]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Pré-visualização ({filteredLojistas.length} unidades)
              </span>
            </div>
            <button
              onClick={() => setShowPreviewModal(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {selectedFields.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-[#64748B]">
                <CheckSquare className="w-8 h-8 mb-2 opacity-40" />
                <p className="text-sm">Selecione ao menos um campo</p>
              </div>
            ) : (
              filteredLojistas.slice(0, 8).map(l => {
                const props = allPropostas.filter(p => p.unidade === l.unidade);
                return (
                  <div key={l.id} className={`flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#242938] border ${CATEGORY_BORDER.Disponibilidade}`}>
                    {hasDisp && (
                      <div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-900/20">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                            Disponibilidade
                          </span>
                        </div>
                        <div className="p-3 space-y-1.5">
                          {dispFields.map(f => (
                            <div key={f.id} className="flex items-center justify-between text-xs">
                              <span className="text-gray-500 dark:text-[#94A3B8]">{f.label}:</span>
                              <span className="font-medium text-gray-900 dark:text-[#F1F5F9]">
                                {f.id === 'unidade' ? l.unidade : f.id === 'piso' ? (l.piso === 'P' ? 'Primeiro' : l.piso === 'S' ? 'Segundo' : 'Terceiro') : f.id === 'corredor' ? l.corredor : f.id === 'area' ? `${l.area} m²` : l.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {props.map(p => {
                      const lojista: { nome: string; cnpj: string; segmento: string; responsavel: string; email: string; telefone: string } | undefined = undefined; // lojistaId não disponível na API
                      const edicoes = histFields.length > 0 ? getEdicoesByProposal(p.id) : [];
                      return (
                        <div key={p.id}>
                          {hasProp && (
                            <div className={`ml-3 rounded-lg overflow-hidden ${CATEGORY_BORDER.Proposta}`}>
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-800/30">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                                  Proposta
                                </span>
                              </div>
                              <div className="p-3 space-y-1.5">
                                {propFields.map(f => (
                                  <div key={f.id} className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500 dark:text-[#94A3B8]">{f.label}:</span>
                                    <span className="font-medium text-gray-900 dark:text-[#F1F5F9]">
                                      {f.id === 'propCodigo' ? p.id : f.id === 'propTipo' ? p.tipo : f.id === 'propValor' ? fmtCurrency(p.valorProposto) : f.id === 'propStatus' ? p.status : f.id === 'propCriacao' ? p.dataCriacao : f.id === 'propVencimento' ? p.dataVencimento : p.responsavel}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>

          <div className="flex-shrink-0 px-4 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E] flex items-center justify-between gap-3">
            <div className="flex border border-gray-200 dark:border-[#2E3447] rounded-lg overflow-hidden">
              {(['xlsx', 'pdf'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setExportFormat(f)}
                  className={`px-3 py-2 text-xs font-medium transition-colors
                    ${exportFormat === f ? 'bg-[#D93030] text-white' : 'text-gray-600 dark:text-[#94A3B8]'}`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => { exportFormat === 'xlsx' ? handleExportXLSX() : handleExportPDF(); setShowPreviewModal(false); }}
              disabled={selectedFields.length === 0}
              className="flex-1 flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] disabled:opacity-50 text-white rounded-lg px-4 py-2 text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Exportar
            </button>
          </div>
        </div>
      )}
    </PageShell>
  );
}
