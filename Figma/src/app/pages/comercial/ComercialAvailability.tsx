/**
 * ComercialAvailability.tsx — View de Disponibilidade de Unidades.
 *
 * Papel na arquitetura MVVM: camada VIEW.
 * Toda lógica está em useComercialAvailability (ViewModel).
 *
 * O que exibe:
 *  - Contadores: total, disponíveis, ocupadas, vencendo em breve
 *  - Filtros: status, piso, intervalo de fim de contrato, vencendo <60 dias
 *  - Toggle: Cards visual | Tabela
 *
 * MODO MAPA:
 *  - Grade organizada por Piso (P/S/T) e Corredor (A/B/C)
 *  - Cada célula é um UnitBlock (sub-componente interno)
 *  - Unidades disponíveis: borda tracejada vermelha
 *  - Unidades ocupadas: fundo avermelhado com nome da loja
 *  - Badge laranja: contrato vencendo em <60 dias
 *  - Clique: abre DisponibilidadeManutencaoModal
 *
 * MODO TABELA:
 *  - Colunas: unidade, piso, corredor, área, segmento, status,
 *    nome fantasia, fim do contrato, dias restantes
 *  - Filtro por célula e ordenação por clique no cabeçalho
 *
 * UnitBlock: sub-componente local (não exportado) que renderiza
 * uma única célula do mapa. Recebe unidade e todasPropostas para
 * calcular localmente o vencimento sem precisar voltar ao ViewModel.
 */
import type { Unidade } from "../../data/apiClient";
import { useComercialAvailability } from "../../viewmodels/useComercialAvailability";
import {
  MapPin, Layers
} from "lucide-react";
import { PageShell, FilterBar, FilterSeparator, ViewModeToggle } from "../../components/PageShared";
import { DataTable } from "../../components/DataTable";
import { DisponibilidadeManutencaoModal } from "../../components/DisponibilidadeManutencaoModal";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { PISOS, CORREDORES, CORREDOR_LABEL, STATUS_OCUPADO, STATUS_DISPONIVEL, STATUS_APROVADO, STATUS_VENCIDA, ViewMode } from "../../enums";
import type { Piso, Corredor } from "../../enums";
function UnitBlock({
  unidade,
  onSelect,
  todasPropostas,
}: {
  unidade: Unidade;
  onSelect: (l: Unidade) => void;
  todasPropostas: any[];
}) {
  const isDisponivel = unidade.status === "Disponível";
  // Buscar proposta aprovada vinculada para obter fim do contrato
  const propostaAprovada = todasPropostas?.find(p =>
    p.codigoUnidade === unidade.codigo && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA)
  );
  const diasRestantes = propostaAprovada ? getDiasRestantes(propostaAprovada.fimContrato) : null;
  const isVencendoBreve = diasRestantes !== null && diasRestantes < 60;

  return (
    <button
      onClick={() => onSelect(unidade)}
      className={`
        group relative text-left rounded-xl border-2 p-3 transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.99] min-w-0
        ${isDisponivel
          ? "bg-white dark:bg-[#1A1F2E] border-dashed border-[#D93030]/40 dark:border-[#D93030]/40 hover:border-[#D93030]"
          : "bg-[#D93030]/10 dark:bg-[#D93030]/15 border-[#D93030]/25 dark:border-[#D93030]/30 hover:bg-[#D93030]/15 dark:hover:bg-[#D93030]/20 hover:border-[#D93030]/50"
        }
      `}
    >
      {isVencendoBreve && !isDisponivel && (
        <div
          className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-[#1E2435] z-10"
          title={`Contrato vence em ${diasRestantes} dias`}
        />
      )}

      <div className="flex items-start justify-between gap-1">
        <div className="min-w-0 flex-1">
          {isDisponivel ? (
            <>
              <p className="text-xs font-bold text-[#D93030]">DISPONÍVEL</p>
              <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5">{unidade.codigo}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{unidade.area} m²</p>
            </>
          ) : (
            <>
              <p className="text-xs font-bold text-[#8B1A1A] dark:text-[#F87171] truncate leading-tight">{unidade.nome || unidade.codigo}</p>
              <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-0.5">{unidade.codigo}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{unidade.area} m²</p>
            </>
          )}
        </div>

      </div>
    </button>
  );
}
// Calcula dias restantes até o fim do contrato de uma proposta aprovada vinculada à unidade
function getDiasRestantes(fimContrato: string | undefined): number | null {
  if (!fimContrato) return null;
  // Suporta dd/mm/yyyy ou yyyy-mm-dd
  let date: Date;
  if (fimContrato.includes('/')) {
    const [d, m, y] = fimContrato.split('/');
    date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  } else {
    date = new Date(fimContrato);
  }
  if (isNaN(date.getTime())) return null;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return Math.ceil((date.getTime() - hoje.getTime()) / 86400000);
}



export function ComercialAvailability() {
  const {
    allLojistas, filtered, mapaData, tableRows, todasPropostas,
    filterPisos, setFilterPisos,
    filterCorredores, setFilterCorredores,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    manutencaoLojista, setManutencaoLojista,
    refetch,
  } = useComercialAvailability();

  return (
    <PageShell>
      <FilterBar isOpen={showMobileFilters} onToggle={() => setShowMobileFilters(f => !f)} hasActiveFilters={filterPisos.length > 0 || filterCorredores.length > 0}>
        <EnumCheckboxFilter
          label="Piso"
          options={PISOS.map(p => ({ value: p.value, label: p.labelShort }))}
          selected={filterPisos}
          onToggle={p => setFilterPisos(prev =>
            prev.includes(p as Piso) ? prev.filter(x => x !== p) : [...prev, p as Piso]
          )}
          getCount={p => allLojistas.filter(l => l.piso === p).length}
          mobileGrid="grid-cols-3"
        />
        <FilterSeparator />
        <EnumCheckboxFilter
          label="Corredor"
          options={CORREDORES.map(c => ({ value: c.value, label: c.label }))}
          selected={filterCorredores}
          onToggle={c => setFilterCorredores(prev =>
            prev.includes(c as Corredor) ? prev.filter(x => x !== c) : [...prev, c as Corredor]
          )}
          getCount={c => allLojistas.filter(l => l.corredor === c).length}
          mobileGrid="grid-cols-3"
        />
      </FilterBar>

      {/* Área de listagem */}
      <div className="flex-1 overflow-hidden bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex flex-col">

        {/* Contador */}
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex-shrink-0 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
            {filtered.length} unidade{filtered.length !== 1 ? 's' : ''}
          </span>
          <ViewModeToggle value={viewMode} onChange={setViewMode} />
        </div>

        {/* Modo Cards */}
        {viewMode === ViewMode.Cards && (
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {PISOS.map(({ value: piso, label: pisoLabel }) => {
              const pisoUnidades: Unidade[][] = Object.values(mapaData[piso]);
              const hasUnits = pisoUnidades.some(arr => arr.length > 0);
              if (!hasUnits) return null;
              return (
                <div key={piso}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#D93030] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{pisoLabel}</h2>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">
                        {pisoUnidades.flat().filter(l => l.status === STATUS_OCUPADO).length} ocupadas ·{' '}
                        {pisoUnidades.flat().filter(l => l.status === STATUS_DISPONIVEL).length} disponíveis
                      </p>
                    </div>
                  </div>
                  {CORREDORES.map(({ value: corredor }) => {
                    const units = mapaData[piso][corredor];
                    if (units.length === 0) return null;
                    const expiring = units.filter(l => { const p = todasPropostas.find(pp => pp.codigoUnidade === l.codigo && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA)); return p ? (getDiasRestantes(p.fimContrato) ?? Infinity) < 60 : false; }).length;
                    return (
                      <div key={corredor} className="mb-5">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#8B1A1A] dark:text-[#C8A882]" />
                          <h3 className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">
                            {CORREDOR_LABEL[corredor]}
                          </h3>
                          <span className="text-xs text-gray-400 dark:text-[#64748B]">
                            · {units.filter(l => l.status === STATUS_OCUPADO).length} ocupadas
                            · {units.filter(l => l.status === STATUS_DISPONIVEL).length} disponíveis
                            {expiring > 0 && <span className="text-orange-500 ml-1">· {expiring} &lt;60d</span>}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2.5">
                          {units.map(unidade => (
                            <UnitBlock
                              key={unidade.id}
                              unidade={unidade}
                              onSelect={l => setManutencaoLojista(l)}
                              todasPropostas={todasPropostas}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                <p className="text-sm">Nenhuma unidade encontrada</p>
              </div>
            )}
          </div>
        )}

        {/* Modo Tabela */}
        {viewMode === ViewMode.Tabela && (
          <div className="overflow-auto flex-1">
            <DataTable
              data={tableRows}
              columnConfig={{
                id:       { _specified: false },
                criadoEm: { _specified: false },
                codigo:   { label: 'Unidade' },
                piso:     { label: 'Piso', _allowFilter: false },
                corredor: { label: 'Corredor' },
                area:     { label: 'Área (m²)', _allowFilter: false, render: (_, v) => `${v} m²` },
                segmento: { label: 'Segmento' },
                nome:     { label: 'Nome Fantasia' },
                status:   { label: 'Status', _allowFilter: false, render: (_, v) => (
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${v === 'Disponível' ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300'}`}>{v}</span>
                )},
              } as any}
              onRowClick={setManutencaoLojista}
              emptyMessage="Nenhuma unidade encontrada"
            />
          </div>
        )}
      </div>

      {/* Modals */}
      {manutencaoLojista && (
        <DisponibilidadeManutencaoModal
          unidade={manutencaoLojista}
          allUnidades={filtered}
          onClose={() => { setManutencaoLojista(null); refetch(); }}
        />
      )}
    </PageShell>
  );
}
