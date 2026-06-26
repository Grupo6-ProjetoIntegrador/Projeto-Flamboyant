import { useEffect, useMemo, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { useComercialAvailability } from "../../viewmodels/useComercialAvailability";
import { PageShell, FilterBar, FilterSeparator, ViewModeToggle } from "../../components/PageShared";
import { DataTable } from "../../components/DataTable";
import { DataCard } from "../../components/DataCard";
import { DisponibilidadeManutencaoModal } from "../../components/DisponibilidadeManutencaoModal";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { PISOS, CORREDORES, ViewMode } from "../../enums";
import type { Piso, Corredor } from "../../enums";

const COLLAPSED_LIMIT = 17;
const SHOW_MORE_THRESHOLD = 18;

const availabilityCardFieldMap = {
  title: "codigo",
  subtitle: {
    fields: ["piso", "corredor"],
    format: ([piso, corredor]: any[]) => `${piso} · ${corredor}`,
  },
  value: { field: "area", format: (v: any) => `${v} m²` },
} as const;

export function ComercialAvailability() {
  const {
    todasUnidades,
    filtered,
    filterPisos,
    setFilterPisos,
    filterCorredores,
    setFilterCorredores,
    viewMode,
    setViewMode,
    showMobileFilters,
    setShowMobileFilters,
    manutencaoUnidade,
    setManutencaoUnidade,
    unidadesComProposta,
    refetch,
  } = useComercialAvailability();

  const [showAllUnits, setShowAllUnits] = useState(false);

  useEffect(() => {
    setShowAllUnits(false);
  }, [filterPisos, filterCorredores, viewMode]);

  const hasHiddenUnits = filtered.length > SHOW_MORE_THRESHOLD && !showAllUnits;
  const visibleUnits = useMemo(
    () => (hasHiddenUnits ? filtered.slice(0, COLLAPSED_LIMIT) : filtered),
    [filtered, hasHiddenUnits],
  );

  const getCardClassName = (u: any) =>
    unidadesComProposta.has(u.id)
      ? "!border-red-400 !bg-red-50 dark:!bg-red-950/30 dark:!border-red-700"
      : "";

  const remainingCount = filtered.length - COLLAPSED_LIMIT;

  return (
    <PageShell>
      <FilterBar
        isOpen={showMobileFilters}
        onToggle={() => setShowMobileFilters(f => !f)}
        hasActiveFilters={filterPisos.length > 0 || filterCorredores.length > 0}
      >
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

      <div className="flex-1 overflow-hidden bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex flex-col">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex-shrink-0 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
            {filtered.length} unidade{filtered.length !== 1 ? "s" : ""}
          </span>
          <ViewModeToggle value={viewMode} onChange={setViewMode} />
        </div>

        {viewMode === ViewMode.Cards && (
          <div className="flex-1 min-h-0 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 p-3 content-start pb-4 sm:pb-0">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-400 dark:text-[#64748B]">
                <p className="text-sm">Nenhuma unidade encontrada</p>
              </div>
            ) : (
              <>
                {visibleUnits.map(u => (
                  <DataCard
                    key={u.id}
                    data={u as any}
                    fieldMap={availabilityCardFieldMap as any}
                    onClick={setManutencaoUnidade as any}
                    className={getCardClassName(u)}
                  />
                ))}
                {hasHiddenUnits && (
                  <button
                    type="button"
                    onClick={() => setShowAllUnits(true)}
                    title="Mostrar mais unidades"
                    className="w-full min-h-[104px] rounded-xl border border-dashed border-gray-300 dark:border-[#3E4557] bg-gray-50/70 dark:bg-[#1A1F2E]/70 hover:border-[#D93030] hover:bg-red-50 dark:hover:bg-[#D93030]/10 transition-colors flex flex-col items-center justify-center gap-2 text-gray-500 dark:text-[#94A3B8] hover:text-[#D93030]"
                  >
                    <MoreHorizontal className="w-7 h-7" />
                    <span className="text-xs font-semibold">{remainingCount} restantes</span>
                  </button>
                )}
              </>
            )}
          </div>
        )}

        {viewMode === ViewMode.Tabela && (
          <div className="overflow-hidden flex-1 flex flex-col">
            <div className="overflow-auto flex-1">
              <DataTable
                data={visibleUnits}
                columnConfig={{
                  id: { _specified: false },
                  criadoEm: { _specified: false },
                  codigo: { label: "Unidade" },
                  piso: { label: "Piso", _allowFilter: false },
                  corredor: { label: "Corredor", _allowFilter: false },
                  area: { label: "Área (m²)", _allowFilter: false, render: (_, v) => `${v} m²` },
                  status: { _specified: false },
                } as any}
                onRowClick={setManutencaoUnidade}
                emptyMessage="Nenhuma unidade encontrada"
              />
            </div>
            {hasHiddenUnits && (
              <div className="flex-shrink-0 px-4 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938] flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllUnits(true)}
                  title="Mostrar mais unidades"
                  className="h-9 px-5 rounded-lg border border-dashed border-gray-300 dark:border-[#3E4557] bg-gray-50 dark:bg-[#1A1F2E] hover:border-[#D93030] hover:bg-red-50 dark:hover:bg-[#D93030]/10 text-gray-500 dark:text-[#94A3B8] hover:text-[#D93030] transition-colors flex items-center gap-2"
                >
                  <MoreHorizontal className="w-5 h-5" />
                  <span className="text-xs font-semibold">{remainingCount} restantes</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {manutencaoUnidade && (
        <DisponibilidadeManutencaoModal
          unidade={manutencaoUnidade}
          allUnidades={showAllUnits ? filtered : visibleUnits}
          onClose={() => { setManutencaoUnidade(null); refetch(); }}
        />
      )}
    </PageShell>
  );
}
