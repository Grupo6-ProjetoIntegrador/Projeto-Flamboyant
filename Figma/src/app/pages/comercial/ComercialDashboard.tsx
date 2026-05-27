import { useComercialDashboard } from "../../viewmodels/useComercialDashboard";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { SEGMENTOS, PISOS, PISO_LABEL, STATUS_APROVADO, STATUS_VENCIDA } from "../../enums";
import { Store, FileText, AlertCircle, Percent, BarChart2, Info } from "lucide-react";
import { PageShell, FilterBar, FilterSeparator, FilterDateRange, MobileExpandableSection, TableLayoutContainer, TableLayoutItem } from "../../components/PageShared";
import { KpiContainer } from "../../components/KpiContainer";
import { ChartsContainer } from "../../components/ChartsContainer";
import type { ChartStats } from "../../components/ChartsContainer";
import { MobileCarousel } from "../../components/MobileCarousel";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { ChartTooltip } from "../../components/ChartTooltip";

const DS = {
  primary: "#D93030",
  dark:    "#8B1A1A",
  blue:    "#3B82F6",
  green:   "#10B981",
  amber:   "#F59E0B",
  gold:    "#C8A882",
  grid:    "#e5e7eb",
} as const;

const PIE_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];
const CHART_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];


export function ComercialDashboard() {
  const {
    allUnidades, proposals, kpis, chartSegmentos, chartStatus,
    filterSegmentos, setFilterSegmentos, toggleSegmento,
    filterPisos, setFilterPisos,
    dateFrom, setDateFrom, dateTo, setDateTo,
    showMobileFilters, setShowMobileFilters,
    chartIndex, setChartIndex,
    mobileSection, toggleSection,
  } = useComercialDashboard();

  // ── Aliases e dados derivados locais ──────────────────────
  const stats = {
    total:           kpis.total,
    ocupadas:        kpis.ocupadas,
    disponiveis:     kpis.livres,
    contratoAtivo:   kpis.ocupadas,
    propostasAbertas: kpis.emAnalise,
    vencendo:        allUnidades.filter(u => {
      const p = proposals.find(pp => pp.codigoUnidade === u.codigo && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA));
      if (!p?.fimContrato) return false;
      const dias = Math.ceil((new Date(p.fimContrato).getTime() - Date.now()) / 86400000);
      return dias < 60;
    }).length,
  };

  const segmentosChart = chartSegmentos;
  const pieData        = chartSegmentos;
  const proposalStatusChart = chartStatus;
  const allLojistas    = allUnidades.map(u => {
    const propAprov = proposals.find(p => p.codigoUnidade === u.codigo && p.status === STATUS_APROVADO);
    return {
      ...u,
      unidade: u.codigo,
      nome: propAprov?.nomeFantasia || '',
      piso: u.piso,
      segmento: propAprov?.segmento || '',
    };
  });

  const chartStats: ChartStats = {
    segmentos:       segmentosChart,
    pisos:           PISOS.map(p => ({
      name:  PISO_LABEL[p.value],
      value: allLojistas.filter(l => l.piso === p.value && l.status === "Ocupado").length,
    })),
    statusPropostas: proposalStatusChart,
  };

  return (
    <PageShell>

      <FilterBar
        isOpen={showMobileFilters}
        onToggle={() => setShowMobileFilters(prev => !prev)}
        hasActiveFilters={!!(dateFrom || dateTo || filterSegmentos.length > 0 || filterPisos.length > 0)}
      >
        <FilterDateRange label="Data de criação" from={dateFrom} to={dateTo} onFromChange={setDateFrom} onToChange={setDateTo} />
        <FilterSeparator />
        <EnumCheckboxFilter
          label="Segmento"
          options={SEGMENTOS}
          selected={filterSegmentos}
          onToggle={s => setFilterSegmentos(prev =>
            prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
          )}
        />
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
      </FilterBar>

      {/* KPIs + Gráficos lado a lado — Desktop */}
      <TableLayoutContainer cols={1} gap={4} rows={6}>
        <TableLayoutItem>
          <KpiContainer stats={stats} cols={4}/>
        </TableLayoutItem>
        <TableLayoutItem colSpan={1} rowSpan={1}>
          <ChartsContainer stats={chartStats} cols={4} />
        </TableLayoutItem>
      </TableLayoutContainer>

      {/* ═══════════════════════════════════════ */}
      {/* LAYOUT MOBILE — regiões expansíveis    */}
      {/* ═══════════════════════════════════════ */}
      <div className="sm:hidden flex-1 flex flex-col overflow-hidden gap-2">

        {/* ── REGIÃO 1: Indicadores ── */}
        <MobileExpandableSection
          icon={Store}
          iconClassName="text-blue-500"
          title="Indicadores"
          isOpen={mobileSection === 'indicadores'}
          onToggle={() => toggleSection('indicadores')}
          grow={false}
          hiddenOnDesktop={false}
          contentClassName="px-4 pb-4 pt-3 grid grid-cols-2 gap-2"
        >
              <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Store className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 dark:text-[#94A3B8] leading-tight">Total de Lojas</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.ocupadas}</span>
                    <span className="text-[10px] text-gray-400">/{stats.total}</span>
                  </div>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400">{stats.disponiveis} disp.</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Percent className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 dark:text-[#94A3B8] leading-tight">Contratos Ativos</p>
                  <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.contratoAtivo}</p>
                  <p className="text-[10px] text-green-600 dark:text-green-400">Aprovado+Vencida</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-[#D93030]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-3.5 h-3.5 text-[#D93030]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 dark:text-[#94A3B8] leading-tight">Propostas Abertas</p>
                  <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.propostasAbertas}</p>
                  <p className="text-[10px] text-[#D93030]">em análise</p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-3 flex items-center gap-2 border border-orange-100 dark:border-orange-700/20">
                <div className="w-7 h-7 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-orange-600 dark:text-orange-400 leading-tight">Contr. &lt;60 dias</p>
                  <p className="text-base font-bold text-orange-600 dark:text-orange-400 leading-none">{stats.vencendo}</p>
                  <p className="text-[10px] text-gray-400">venc. próximo</p>
                </div>
              </div>
        </MobileExpandableSection>

        {/* ── REGIÃO 2: Gráficos ── */}
        <MobileExpandableSection
          icon={BarChart2}
          title="Gráficos"
          isOpen={mobileSection === 'graficos'}
          onToggle={() => toggleSection('graficos')}
          grow={false}
          hiddenOnDesktop={false}
          contentClassName="h-[230px]"
        >

          <MobileCarousel
                index={chartIndex}
                total={4}
                onPrev={() => setChartIndex(i => Math.max(0, i - 1))}
                onNext={() => setChartIndex(i => Math.min(3, i + 1))}
              >
                <div className="h-full p-2">
                  {chartIndex === 0 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Segmento
                      </h3>
                      {segmentosChart.length === 0 ? (
                        <div className="flex items-center justify-center h-[170px] text-gray-400 text-xs">Sem dados</div>
                      ) : (
                        <ResponsiveContainer width="100%" height={170}>
                          <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} dy={6} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} />
                            <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(217,48,48,0.05)" }} />
                            <Bar dataKey="value" fill={DS.primary} radius={[3, 3, 0, 0]} barSize={18} name="Lojas" />
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </>
                  )}
                  {chartIndex === 1 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Por Categoria
                      </h3>
                      {pieData.length > 0 ? (
                        <div className="flex items-center h-[170px]">
                          <ResponsiveContainer width="55%" height="100%">
                            <PieChart>
                              <Pie data={pieData} cx="50%" cy="50%" outerRadius={50} innerRadius={22}
                                dataKey="value" paddingAngle={2}>
                                {pieData.map((item, i) => (
                                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip content={<ChartTooltip />} />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="flex-1 space-y-1 pl-2">
                            {pieData.slice(0, 5).map((item, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                                  <span className="text-[10px] text-gray-500 dark:text-[#94A3B8] truncate">{item.name}</span>
                                </div>
                                <span className="text-[10px] font-semibold text-gray-800 dark:text-[#F1F5F9]">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-16 text-gray-400 text-xs">Sem dados</div>
                      )}
                    </>
                  )}
                  {chartIndex === 2 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <Info className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Piso
                      </h3>
                      <div className="flex items-center h-[170px]">
                        <ResponsiveContainer width="55%" height="100%">
                          <PieChart>
                            <Pie
                              data={PISOS.map(p => ({
                                name: PISO_LABEL[p.value],
                                value: allLojistas.filter(l =>
                                  l.piso === p.value && l.status === "Ocupado"
                                ).length,
                              }))}
                              cx="50%" cy="50%" outerRadius={50} innerRadius={22}
                              dataKey="value" paddingAngle={4}
                            >
                              {PISOS.map((_, i) => (
                                <Cell key={i} fill={CHART_COLORS[i]} />
                              ))}
                            </Pie>
                            <Tooltip content={<ChartTooltip />} />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="flex-1 space-y-1 pl-2">
                          {PISOS.map((p, i) => {
                            const count = allLojistas.filter(l =>
                              l.piso === p.value && l.status === "Ocupado"
                            ).length;
                            return (
                              <div key={p.value} className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                                  <span className="text-[10px] text-gray-500 dark:text-[#94A3B8]">{PISO_LABEL[p.value]}</span>
                                </div>
                                <span className="text-[10px] font-bold text-gray-800 dark:text-[#F1F5F9]">{count}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                  {chartIndex === 3 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <FileText className="w-3.5 h-3.5 text-[#D93030]" /> Status das Propostas
                      </h3>
                      {proposalStatusChart.length > 0 ? (
                        <div className="flex items-center h-[170px]">
                          <ResponsiveContainer width="55%" height="100%">
                            <PieChart>
                              <Pie data={proposalStatusChart} cx="50%" cy="50%" outerRadius={50}
                                dataKey="value" paddingAngle={3}>
                                {proposalStatusChart.map((_, i) => (
                                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip content={<ChartTooltip />} />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="flex-1 space-y-1 pl-2 overflow-hidden">
                            {proposalStatusChart.map((item, i) => (
                              <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                                  <span className="text-[10px] text-gray-500 dark:text-[#94A3B8] truncate leading-tight">{item.name}</span>
                                </div>
                                <span className="text-[10px] font-bold text-gray-800 dark:text-[#F1F5F9] ml-1 flex-shrink-0">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-16 text-gray-400 text-xs">Sem propostas</div>
                      )}
                    </>
                  )}
                </div>
              </MobileCarousel>
        </MobileExpandableSection>

      </div>
      {/* ═══════════════════════════════════════ */}
      {/* FIM LAYOUT MOBILE                      */}
      {/* ═══════════════════════════════════════ */}
      {/* Fim da área com scroll interno */}
    </PageShell>
  );
}
