/**
 * ComercialProposals.tsx — View de Propostas Comerciais.
 *
 * Papel na arquitetura MVVM: camada VIEW.
 * Toda lógica está em useComercialProposals (ViewModel).
 *
 * O que exibe:
 *  - Contador de propostas por status (pills clicáveis como filtro)
 *  - Filtro de data de criação
 *  - Toggle de visualização: cards | tabela
 *  - Cards: cada proposta em card com status, valor, unidade
 *  - Tabela: colunas ordenáveis com filtro por célula (matchColFilter)
 *  - Modal PropostaManutencaoModal: edição/visualização de proposta
 *  - Modal de nova proposta: formulário rápido inline
 *  - FAB (mobile): botão flutuante "+" para nova proposta
 *
 * Aliases locais:
 *  setSortDir/setSortCol → toggleSort (do ViewModel)
 *  abrirNovaPropostaViaModal → abrirNovaProposta
 *  showNewModal, newProp, handleNewProposal → estado local do formulário rápido
 *
 * Nota: handleNewProposal ainda não persiste na API — chama refresh()
 * para re-buscar as propostas após criar. Integrar com
 * PropostasService.criar() quando disponível.
 */
import React from 'react';
import { useComercialProposals } from "../../viewmodels/useComercialProposals";
import {
  Plus, XCircle,
  Send
} from "lucide-react";
import { PageShell, FilterBar, FilterSeparator, FilterDateRange, ViewModeToggle } from "../../components/PageShared";
import { ViewMode } from "../../enums";
import { PropostaManutencaoModal } from "../../components/PropostaManutencaoModal";
import { DataTable } from "../../components/DataTable";
import { DataCard } from "../../components/DataCard";
import { StatusPropostaBadge, TipoOperacaoBadge } from "../../components/StatusBadge";
import type { StatusProposta } from "../../data/comercialData";

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
}

function matchColFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = cellValue.toLowerCase();
  const p = pattern.toLowerCase();

  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    // "*T*" → contém T no meio (não no início nem no fim)
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) {
    // "*T" → termina com T
    return val.endsWith(p.slice(1));
  }
  if (p.endsWith('*') && p.length > 1) {
    // "T*" → começa com T
    return val.startsWith(p.slice(0, -1));
  }
  // "T" → contém T em qualquer posição
  return val.includes(p);
}

export function ComercialProposals() {
  const {
    proposals, filtered, counts, tableRows, colDefs,
    filterStatuses, setFilterStatuses, toggleStatus,
    dateFrom, setDateFrom, dateTo, setDateTo,
    colFilters, setColFilters,
    sortCol, sortDir, toggleSort,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    modalPropostaAberta, setModalPropostaAberta,
    abrirNovaProposta, fecharModal, refresh,
  } = useComercialProposals();

  const propostasData = proposals;

  // ── Aliases e estado local ──────────────────────────────
  // setSortDir/setSortCol → toggleSort (do ViewModel)
  const setSortDir = (fn: ((d: 'asc' | 'desc') => 'asc' | 'desc') | 'asc' | 'desc') => {
    if (typeof fn === 'function') toggleSort(sortCol); // toggle inverte
  };
  const setSortCol = (col: string) => { toggleSort(col); };

  // abrirNovaPropostaViaModal → abrirNovaProposta (do ViewModel)
  const abrirNovaPropostaViaModal = abrirNovaProposta;

  // Modal simples de nova proposta (estado local — não persiste)
  const [showNewModal, setShowNewModal] = React.useState(false);
  const [newProp, setNewProp] = React.useState({
    nomeFantasia: '', unidade: '', tipo: 'Nova Instalação' as any,
    segmento: 'Moda' as any, valor: '', area: '', vencimento: '', observacoes: '',
  });

  const handleNewProposal = () => {
    if (!newProp.unidade || !newProp.valor) return;
    propostasData; // referência mantida para compatibilidade
    setShowNewModal(false);
    setNewProp({ nomeFantasia: '', unidade: '', tipo: 'Nova Instalação', segmento: 'Moda', valor: '', area: '', vencimento: '', observacoes: '' });
    refresh();
  };

  return (
    <PageShell>
      {/* Header — altura fixa */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button onClick={abrirNovaPropostaViaModal}
          className="hidden sm:inline-flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Nova Proposta
        </button>
      </div>

      <FilterBar
        isOpen={showMobileFilters}
        onToggle={() => setShowMobileFilters(f => !f)}
        hasActiveFilters={!!(dateFrom || dateTo || filterStatuses.length > 0)}
      >
        <FilterDateRange label="Data da proposta" from={dateFrom} to={dateTo} onFromChange={setDateFrom} onToChange={setDateTo} />
        <FilterSeparator />
        <div className="flex flex-col gap-1 w-full sm:flex-1 sm:px-6 pb-2 sm:pb-0">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Status da proposta</span>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-2 sm:gap-4 sm:items-center sm:min-h-[36px]">
            {(["Aguardando análise financeira","Aguardando análise do comitê","Aprovado","Reprovado","Cancelado","Vencida","Finalizado"] as StatusProposta[]).map(s => (
              <label key={s} className="flex items-center gap-1.5 cursor-pointer select-none">
                <div
                  onClick={() => {
                    setFilterStatuses(prev =>
                      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
                    );
                  }}
                  className={`w-4 h-4 border border-gray-400 dark:border-[#64748B] flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                    ${filterStatuses.includes(s)
                      ? 'bg-white dark:bg-[#1A1F2E] text-gray-900 dark:text-[#F1F5F9]'
                      : 'bg-white dark:bg-[#1A1F2E]'}`}
                >
                  {filterStatuses.includes(s) && 'X'}
                </div>
                <span className="text-xs text-gray-700 dark:text-[#CBD5E1] leading-tight">
                  {s} ({counts[s] || 0})
                </span>
              </label>
            ))}
          </div>
        </div>
      </FilterBar>

      {/* Área de listagem — cresce para preencher o restante, scroll interno */}
      <div className="flex-1 overflow-hidden bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447]">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex-shrink-0 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
            {viewMode === ViewMode.Cards ? filtered.length : tableRows.length} proposta{(viewMode === ViewMode.Cards ? filtered.length : tableRows.length) !== 1 ? 's' : ''}
          </span>
          <ViewModeToggle value={viewMode} onChange={setViewMode} />
        </div>

        {/* Modo Card */}
        {viewMode === ViewMode.Cards && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 p-3 overflow-y-auto pb-4 sm:pb-0"
            style={{
              maxHeight: window.innerWidth < 640
                ? 'calc(100vh - 280px - 64px)'  // desconta bottom nav
                : 'calc(100vh - 280px)'
            }}>
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-400 dark:text-[#64748B]">
                <p className="text-sm">Nenhuma proposta encontrada</p>
              </div>
            ) : (
              filtered.map(p => (
                <DataCard
                  key={p.id}
                  data={p}
                  fieldMap={{
                    title:       { field: 'nomeFantasia', format: (v, row) => v || row.id },
                    titleBadge:  'tipoOperacao',
                    subtitle:    ['id', 'codigoUnidade', 'segmento'],
                    value:       { field: 'valorProposto', format: v => fmtCurrency(v) },
                    valueSub:    { field: 'area', format: v => `${v} m²` },
                    statusBadge: 'status',
                    footer:      'dataVencimento',
                  }}
                  onClick={row => setModalPropostaAberta(row)}
                />
              ))
            )}
          </div>
        )}

        {/* Modo Tabela */}
        {viewMode === ViewMode.Tabela && (
          <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
            <DataTable
              data={tableRows.map(p => ({
                nomeFantasia: p.nomeFantasia || p.id,
                tipo:         p.tipoOperacao,
                id:           p.id,
                unidade:      p.codigoUnidade,
                segmento:     p.segmento,
                valor:        p.valorProposto,
                area:         p.area,
                criacao:      p.dataCriacao,
                vencimento:   p.dataVencimento ?? '—',
                status:       p.status,
                _raw:         p,
              }))}
              columnConfig={{
                nomeFantasia: { label: 'Nome Fantasia' },
                tipo:         { label: 'Tipo', render: (_, v) => <TipoOperacaoBadge tipo={v} /> },
                id:           { label: 'Código' },
                unidade:      { label: 'Unidade' },
                segmento:     { label: 'Segmento' },
                valor:        { label: 'Valor', render: (_, v) => fmtCurrency(v) },
                area:         { label: 'Área', render: (_, v) => `${v} m²` },
                criacao:      { label: 'Criado em' },
                vencimento:   { label: 'Vencimento' },
                status:       { label: 'Status', render: (_, v) => <StatusPropostaBadge status={v as any} /> },
                _raw:         { _specified: false },
              }}
              onRowClick={row => setModalPropostaAberta(row._raw)}
              emptyMessage="Nenhuma proposta encontrada"
            />
          </div>
        )}
      </div>

      {/* New Proposal Modal — RF-01 */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowNewModal(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-lg border border-gray-100 dark:border-[#2E3447]"
            onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-5 rounded-t-2xl flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Nova Proposta Comercial (RF-01)</h2>
              <button onClick={() => setShowNewModal(false)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center">
                <XCircle className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Nome Fantasia *</label>
                  <input value={newProp.nomeFantasia || ''} onChange={e => setNewProp(p => ({...p, nomeFantasia: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="Nome fantasia da loja" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Unidade *</label>
                  <input value={newProp.unidade} onChange={e => setNewProp(p => ({...p, unidade: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="Ex: L2-015" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Tipo de Proposta</label>
                  <select value={newProp.tipo} onChange={e => setNewProp(p => ({...p, tipo: e.target.value as any}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]">
                    <option>Nova Instalação</option><option>Renovação</option><option>Readequação</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Segmento</label>
                  <select value={newProp.segmento} onChange={e => setNewProp(p => ({...p, segmento: e.target.value as any}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]">
                    {["Moda","Alimentação","Serviços","Eletrônicos","Esportes","Entretenimento","Outros"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Valor Proposto (R$) *</label>
                  <input type="number" value={newProp.valor} onChange={e => setNewProp(p => ({...p, valor: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="0" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Área (m²)</label>
                  <input type="number" value={newProp.area} onChange={e => setNewProp(p => ({...p, area: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="0" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Data de Vencimento (RN-03)</label>
                <input type="date" value={newProp.vencimento} onChange={e => setNewProp(p => ({...p, vencimento: e.target.value}))}
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Observações</label>
                <textarea rows={3} value={newProp.observacoes} onChange={e => setNewProp(p => ({...p, observacoes: e.target.value}))}
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] resize-none"
                  placeholder="Detalhes e condições..." />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowNewModal(false)}
                  className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  Cancelar
                </button>
                <button onClick={handleNewProposal}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  <Send className="w-4 h-4" /> Criar Proposta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Proposta Manutencao Modal */}
      {modalPropostaAberta && (
        <PropostaManutencaoModal
          proposta={modalPropostaAberta}
          allPropostas={viewMode === ViewMode.Cards ? filtered : tableRows}
          onClose={() => {
            setModalPropostaAberta(null);
            refresh();
          }}
        />
      )}

      {/* FAB Nova Proposta — mobile only */}
      <button
        onClick={abrirNovaPropostaViaModal}
        className="block sm:hidden fixed bottom-20 right-4 z-40 w-14 h-14 bg-[#D93030] hover:bg-[#c02828] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Nova Proposta"
      >
        <Plus className="w-6 h-6" />
      </button>
    </PageShell>
  );
}
