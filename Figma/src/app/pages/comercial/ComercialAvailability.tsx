import { useComercialAvailability } from "../../viewmodels/useComercialAvailability";
import { PageShell, FilterBar, FilterSeparator, ViewModeToggle } from "../../components/PageShared";
import { DataTable } from "../../components/DataTable";
import { DataCardContainer } from "../../components/DataCardContainer";
import { DisponibilidadeManutencaoModal } from "../../components/DisponibilidadeManutencaoModal";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { PISOS, CORREDORES, ViewMode } from "../../enums";
import type { Piso, Corredor } from "../../enums";

export function ComercialAvailability() {
  const {
    todasUnidades, filtered,
    filterPisos, setFilterPisos,
    filterCorredores, setFilterCorredores,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    manutencaoUnidade, setManutencaoUnidade,
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
          getCount={p => todasUnidades === null ? 0 : todasUnidades?.filter(l => l.piso === p).length}
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
          getCount={c => todasUnidades === null ? 0 : todasUnidades?.filter(l => l.corredor === c).length}
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
          <DataCardContainer
            cols={6}
            data={filtered}
            keyField="id"
            fieldMap={{
              title:    'codigo',
              subtitle: { fields: ['piso', 'corredor'], format: ([piso, corredor]: any[]) => `${piso} · ${corredor}` },
              value:    { field: 'area', format: (v: any) => `${v} m²` },
            }}
            onClick={u => setManutencaoUnidade(u)}
            emptyMessage="Nenhuma unidade encontrada"
          />
        )}

        {/* Modo Tabela */}
        {viewMode === ViewMode.Tabela && (
          <div className="overflow-auto flex-1">
            <DataTable
              data={filtered}
              columnConfig={{
                id:       { _specified: false },
                criadoEm: { _specified: false },
                codigo:   { label: 'Unidade' },
                piso:     { label: 'Piso', _allowFilter: false },
                corredor: { label: 'Corredor', _allowFilter: false },
                area:     { label: 'Área (m²)', _allowFilter: false, render: (_, v) => `${v} m²` },
                status:   { _specified: false },
              } as any}
              onRowClick={setManutencaoUnidade}
              emptyMessage="Nenhuma unidade encontrada"
            />
          </div>
        )}
      </div>

      {/* Modals */}
      {manutencaoUnidade && (
        <DisponibilidadeManutencaoModal
          unidade={manutencaoUnidade}
          allUnidades={filtered}
          onClose={() => { setManutencaoUnidade(null); refetch(); }}
        />
      )}
    </PageShell>
  );
}
