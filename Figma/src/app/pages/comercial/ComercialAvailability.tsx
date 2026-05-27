import type { Unidade } from "../../data/apiClient";
import { useComercialAvailability } from "../../viewmodels/useComercialAvailability";
import {
  MapPin, Layers
} from "lucide-react";
import { PageShell, FilterBar, FilterSeparator, ViewModeToggle } from "../../components/PageShared";
import { DataTable } from "../../components/DataTable";
import { DisponibilidadeManutencaoModal } from "../../components/DisponibilidadeManutencaoModal";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { PISOS, CORREDORES, CORREDOR_LABEL, ViewMode } from "../../enums";
import type { Piso, Corredor } from "../../enums";

function UnitBlock({
  unidade,
  onSelect,
}: {
  unidade: Unidade;
  onSelect: (l: Unidade) => void;
}) {
  return (
    <button
      onClick={() => onSelect(unidade)}
      className="group relative text-left rounded-xl border-2 p-3 transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.99] min-w-0 bg-white dark:bg-[#1A1F2E] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]/50"
    >
      <div className="flex items-start justify-between gap-1">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9] truncate leading-tight">{unidade.codigo}</p>
          <p className="text-xs text-gray-400 dark:text-[#475569] mt-0.5">{unidade.area} m²</p>
        </div>
      </div>
    </button>
  );
}

export function ComercialAvailability() {
  const {
    allUnidades, filtered, mapaData,
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
          getCount={p => allUnidades.filter(l => l.piso === p).length}
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
          getCount={c => allUnidades.filter(l => l.corredor === c).length}
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
                    <h2 className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{pisoLabel}</h2>
                  </div>
                  {CORREDORES.map(({ value: corredor }) => {
                    const units = mapaData[piso][corredor];
                    if (units.length === 0) return null;
                    return (
                      <div key={corredor} className="mb-5">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#8B1A1A] dark:text-[#C8A882]" />
                          <h3 className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">
                            {CORREDOR_LABEL[corredor]}
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2.5">
                          {units.map(unidade => (
                            <UnitBlock
                              key={unidade.id}
                              unidade={unidade}
                              onSelect={l => setManutencaoLojista(l)}
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
              data={filtered}
              columnConfig={{
                id:       { _specified: false },
                criadoEm: { _specified: false },
                codigo:   { label: 'Unidade' },
                piso:     { label: 'Piso', _allowFilter: false },
                corredor: { label: 'Corredor' },
                area:     { label: 'Área (m²)', _allowFilter: false, render: (_, v) => `${v} m²` },
                segmento: { label: 'Segmento' },
                nome:     { label: 'Nome Fantasia' },
                status:   { _specified: false },
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
