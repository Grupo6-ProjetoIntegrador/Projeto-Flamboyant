/**
 * ComercialProposals.tsx — View de Propostas Comerciais.
 *
 * Papel na arquitetura MVVM: camada VIEW.
 * Toda lógica está em useComercialProposals (ViewModel).
 *
 * O que exibe:
 *  - Filtros: status da proposta e intervalo de data de criação
 *  - Toggle de visualização: cards | tabela
 *  - Cards: cada proposta via DataCard (mobile-first)
 *  - Tabela: TableProposta com todos os campos de PropostaResumo
 *  - Modal PropostaManutencaoModal: edição/visualização de proposta
 *  - FAB (mobile): botão flutuante "+" para nova proposta
 */
import { useComercialProposals } from "../../viewmodels/useComercialProposals";
import { Plus } from "lucide-react";
import { PageShell, FilterBar, FilterSeparator, FilterDateRange, ViewModeToggle, DesktopRender } from "../../components/PageShared";
import { ViewMode, STATUS_PROPOSTA } from "../../enums";
import type { StatusProposta } from "../../enums";
import { PropostaManutencaoModal } from "../../components/PropostaManutencaoModal";
import { DataCardContainer } from "../../components/DataCardContainer";
import { TableProposta } from "../../components/TableProposta";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { fmtCurrency } from "../../utils/manutencao";

export function ComercialProposals() {
  const {
    filtered, counts, tableRows,
    filterStatuses, setFilterStatuses,
    dateFrom, setDateFrom, dateTo, setDateTo,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    modalPropostaAberta, setModalPropostaAberta,
    abrirNovaProposta, refresh,
  } = useComercialProposals();

  return (
    <PageShell>
      {/* Header — altura fixa */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <DesktopRender>
          <button onClick={abrirNovaProposta}
            className="flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm">
            <Plus className="w-4 h-4" /> Nova Proposta
          </button>
        </DesktopRender>
      </div>

      <FilterBar
        isOpen={showMobileFilters}
        onToggle={() => setShowMobileFilters(f => !f)}
        hasActiveFilters={!!(dateFrom || dateTo || filterStatuses.length > 0)}
      >
        <FilterDateRange label="Data da proposta" from={dateFrom} to={dateTo} onFromChange={setDateFrom} onToChange={setDateTo} />
        <FilterSeparator />
        <EnumCheckboxFilter
          label="Status da proposta"
          options={STATUS_PROPOSTA}
          selected={filterStatuses}
          onToggle={s => setFilterStatuses(prev =>
            prev.includes(s as StatusProposta)
              ? prev.filter(x => x !== s)
              : [...prev, s as StatusProposta]
          )}
          getCount={s => counts[s] || 0}
          mobileGrid="grid-cols-2"
        />
      </FilterBar>

      {/* Área de listagem — cresce para preencher o restante, scroll interno */}
      <div className="flex-1 overflow-hidden bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex flex-col">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex-shrink-0 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
            {viewMode === ViewMode.Cards ? filtered.length : tableRows.length} proposta{(viewMode === ViewMode.Cards ? filtered.length : tableRows.length) !== 1 ? 's' : ''}
          </span>
          <ViewModeToggle value={viewMode} onChange={setViewMode} />
        </div>

        {/* Modo Card */}
        {viewMode === ViewMode.Cards && (
          <DataCardContainer
            cols={4}
            data={filtered}
            keyField="id"
            fieldMap={{
              title:       { field: 'nomeFantasia', format: (v: any, row: any) => v || row.id },
              titleBadge:  'tipoOperacao',
              subtitle:    ['id', 'codigoUnidade', 'segmento'],
              value:       { field: 'valorProposto', format: (v: any) => fmtCurrency(v) },
              valueSub:    { field: 'area', format: (v: any) => `${v} m²` },
              statusBadge: 'status',
              footer:      'dataVencimento',
            }}
            onClick={row => setModalPropostaAberta(row)}
            emptyMessage="Nenhuma proposta encontrada"
          />
        )}

        {/* Modo Tabela */}
        {viewMode === ViewMode.Tabela && (
          <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
            <TableProposta
              data={tableRows}
              onRowClick={p => setModalPropostaAberta(p)}
              emptyMessage="Nenhuma proposta encontrada"
            />
          </div>
        )}
      </div>

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
        onClick={abrirNovaProposta}
        className="block sm:hidden fixed bottom-20 right-4 z-40 w-14 h-14 bg-[#D93030] hover:bg-[#c02828] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Nova Proposta"
      >
        <Plus className="w-6 h-6" />
      </button>
    </PageShell>
  );
}
