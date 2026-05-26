import { useComercialDashboard } from "../../viewmodels/useComercialDashboard";
import { useNavigate } from "react-router";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { SEGMENTOS, PISOS, STATUS_APROVADO, STATUS_VENCIDA } from "../../enums";
import {
  Store, FileText, AlertCircle, Percent,
  ChevronRight, ChevronDown, BarChart2, Info
} from "lucide-react";
import { PageShell, FilterBar, FilterSeparator, FilterDateRange } from "../../components/PageShared";
import { DataTable } from "../../components/DataTable";
import { MobileCarousel } from "../../components/MobileCarousel";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { fmtCurrency, matchColFilter } from "../../utils/manutencao";
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

const PISO_LABELS: Record<string, string> = { P: "Primeiro Piso", S: "Segundo Piso", T: "Terceiro Piso" };

function getDiasRestantes(fimContrato: string | undefined): number | null {
  if (!fimContrato) return null;
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

export function ComercialDashboard() {
  const navigate = useNavigate();
  const {
    allUnidades, proposals, filteredProposals, kpis, chartSegmentos, chartStatus,
    filterSegmentos, setFilterSegmentos, toggleSegmento,
    filterPisos, setFilterPisos, togglePiso,
    dateFrom, setDateFrom, dateTo, setDateTo, clearFilters,
    showMobileFilters, setShowMobileFilters,
    propColFilters, setPropColFilters,
    ctrColFilters, setCtrColFilters,
    kpiIndex, setKpiIndex,
    chartIndex, setChartIndex,
    mobileSection, setMobileSection, toggleSection,
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

  const propostasRecentes = [...proposals]
    .sort((a, b) => b.dataCriacao.localeCompare(a.dataCriacao))
    .slice(0, 10);

  const contratosVencendo = allLojistas.filter(l => {
    const p = proposals.find(pp => pp.codigoUnidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA));
    if (!p?.fimContrato) return false;
    const dias = Math.ceil((new Date(p.fimContrato).getTime() - Date.now()) / 86400000);
    return dias < 60;
  });

  const STATUS_BADGE: Record<string, string> = {
    "Aprovado": "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/40",
    "Aguardando análise do comitê": "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40",
    "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40",
    "Reprovado": "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/40",
    "Cancelado": "bg-gray-100 dark:bg-gray-500/20 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-500/40",
    "Vencida": "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-500/40",
    "Finalizado": "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40",
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

      {/* KPI Cards */}
      {/* Desktop */}
      <div className="hidden sm:grid sm:grid-cols-4 gap-3 flex-shrink-0">

        {/* Total de Lojas */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <Store className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">Total de Lojas</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.ocupadas}</span>
              <span className="text-xs text-gray-400 dark:text-[#64748B]">/ {stats.total}</span>
            </div>
            <p className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">{stats.disponiveis} disponíveis</p>
          </div>
        </div>

        {/* Contratos Ativos */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <Percent className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">Contratos Ativos</p>
            <p className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9] leading-none mt-0.5">{stats.contratoAtivo}</p>
            <p className="text-[10px] text-green-600 dark:text-green-400 mt-0.5">Aprovado + Vencida</p>
          </div>
        </div>

        {/* Propostas Abertas */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#D93030]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 text-[#D93030]" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">Propostas Abertas</p>
            <p className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9] leading-none mt-0.5">{stats.propostasAbertas}</p>
            <p className="text-[10px] text-[#D93030] mt-0.5">em análise ou reprovadas</p>
          </div>
        </div>

        {/* Contratos <60 dias */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-orange-100 dark:border-orange-700/30 px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-4 h-4 text-orange-500 dark:text-orange-400" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-orange-600 dark:text-orange-400 leading-tight">Contratos &lt;60 dias</p>
            <p className="text-lg font-bold text-orange-600 dark:text-orange-400 leading-none mt-0.5">{stats.vencendo}</p>
            <p className="text-[10px] text-gray-400 dark:text-[#64748B] mt-0.5">vencimento próximo</p>
          </div>
        </div>

      </div>

      {/* Gráficos desktop — 4 colunas */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">

        {/* 1. Ocupação por Segmento (barras) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-3 flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Segmento
          </h3>
          {segmentosChart.length === 0 ? (
            <div className="flex items-center justify-center h-36 text-gray-400 text-xs">Sem dados</div>
          ) : (
            <ResponsiveContainer width="100%" height={144}>
              <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} dy={6} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(217,48,48,0.05)" }} />
                <Bar dataKey="value" fill={DS.primary} radius={[3, 3, 0, 0]} barSize={18} name="Lojas" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* 2. Distribuição por Categoria (pie) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Por Categoria
          </h3>
          {pieData.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={90}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={40} innerRadius={18} dataKey="value" paddingAngle={2}>
                    {pieData.map((item, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
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
            </>
          ) : (
            <div className="text-center py-8 text-gray-400 text-xs">Sem dados</div>
          )}
        </div>

        {/* 3. Ocupação por Piso (pie) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Piso
          </h3>
          <ResponsiveContainer width="100%" height={90}>
            <PieChart>
              <Pie
                data={PISOS.map(p => ({
                  name: PISO_LABELS[p.value],
                  value: allLojistas.filter(l =>
                    l.piso === p.value && l.status === "Ocupado"
                  ).length,
                }))}
                cx="50%" cy="50%" outerRadius={40} innerRadius={18} dataKey="value" paddingAngle={4}
              >
                {PISOS.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1 mt-1">
            {PISOS.map((p, i) => {
              const count = allLojistas.filter(l =>
                l.piso === p.value && l.status === "Ocupado"
              ).length;
              return (
                <div key={p.value} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                    <span className="text-[10px] text-gray-500 dark:text-[#94A3B8]">{PISO_LABELS[p.value]}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 dark:text-[#F1F5F9]">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Status das Propostas (pie) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#D93030]" /> Status das Propostas
          </h3>
          {proposalStatusChart.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={90}>
                <PieChart>
                  <Pie data={proposalStatusChart} cx="50%" cy="50%" outerRadius={40} dataKey="value" paddingAngle={3}>
                    {proposalStatusChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
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
            </>
          ) : (
            <div className="text-center py-8 text-gray-400 text-xs">Sem propostas</div>
          )}
        </div>

      </div>

      {/* Tabelas desktop */}
      <div className="hidden sm:block flex-1 overflow-y-auto space-y-4">

        {/* Propostas Recentes */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
            <button onClick={() => navigate("/comercial/propostas")} className="flex items-center gap-2 group">
              <FileText className="w-4 h-4 text-[#D93030]" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] group-hover:text-[#D93030] transition-colors">Propostas Recentes</h3>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#D93030] transition-colors" />
            </button>
            <span className="text-xs text-gray-400 dark:text-[#64748B]">{propostasRecentes.length} registros</span>
          </div>
          <DataTable
            data={propostasRecentes.map(p => ({
              id:           p.id,
              nomeFantasia: p.nomeFantasia || p.id,
              unidade:      p.codigoUnidade,
              tipo:         p.tipoOperacao,
              criacao:      p.dataCriacao,
              valor:        fmtCurrency(p.valorProposto),
              status:       p.status,
            }))}
            columnConfig={{
              id:           { label: 'Código' },
              nomeFantasia: { label: 'Nome Fantasia' },
              unidade:      { label: 'Unidade' },
              tipo:         { label: 'Tipo' },
              criacao:      { label: 'Criação' },
              valor:        { label: 'Valor', _allowFilter: false },
              status:       { label: 'Status', render: (_, v) => (
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${STATUS_BADGE[v] || 'bg-gray-100 text-gray-600'}`}>{v}</span>
              )},
            }}
            onRowClick={() => navigate('/comercial/propostas')}
            emptyMessage="Nenhuma proposta encontrada"
          />
          <div className="px-5 py-3 border-tx-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E]">
            <button onClick={() => navigate("/comercial/propostas")} className="text-xs text-[#D93030] hover:text-[#b92828] font-medium flex items-center gap-1 transition-colors">
              Ver todas as propostas <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Contratos Vencendo */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-orange-50/50 dark:bg-orange-900/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Contratos Vencendo</h3>
            </div>
            <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
              {contratosVencendo.length} contrato{contratosVencendo.length !== 1 ? "s" : ""} em &lt;60 dias
            </span>
          </div>
          <DataTable
            data={contratosVencendo.map(l => {
              const propAprov = proposals.find((p: any) => p.codigoUnidade === l.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA));
              const dias = getDiasRestantes(propAprov?.fimContrato);
              return {
                nomeFantasia:  l.nome,
                unidade:       l.unidade,
                piso:          PISO_LABELS[l.piso] ?? l.piso,
                vencimento:    propAprov?.fimContrato || '—',
                diasRestantes: dias,
              };
            })}
            columnConfig={{
              nomeFantasia:  { label: 'Nome Fantasia' },
              unidade:       { label: 'Unidade' },
              piso:          { label: 'Piso', _allowFilter: false },
              vencimento:    { label: 'Vencimento' },
              diasRestantes: { label: 'Dias Rest.', _allowFilter: false, render: (_, v) => {
                if (v === null || v === undefined) return <span>—</span>;
                const urgente = Number(v) <= 30;
                const cls = urgente ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
                return <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${cls}`}>{v} dias</span>;
              }},
            }}
            onRowClick={() => navigate('/comercial/disponibilidade')}
            emptyMessage="Nenhum contrato vencendo"
          />
        </div>

      </div>

      {/* ═══════════════════════════════════════ */}
      {/* LAYOUT MOBILE — regiões expansíveis    */}
      {/* ═══════════════════════════════════════ */}
      <div className="sm:hidden flex-1 flex flex-col overflow-hidden gap-2">

        {/* ── REGIÃO 1: Indicadores ── */}
        <div className="flex-shrink-0 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <button
            onClick={() => toggleSection('indicadores')}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Indicadores</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'indicadores' ? '' : '-rotate-90'}`} />
          </button>

          {mobileSection === 'indicadores' && (
            <div className="px-4 pb-4 grid grid-cols-2 gap-2 border-t border-gray-100 dark:border-[#2E3447] pt-3">
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
            </div>
          )}
        </div>

        {/* ── REGIÃO 2: Gráficos ── */}
        <div className="flex-shrink-0 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <button
            onClick={() => toggleSection('graficos')}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#D93030]" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Gráficos</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'graficos' ? '' : '-rotate-90'}`} />
          </button>

          {mobileSection === 'graficos' && (
            <div className="border-t border-gray-100 dark:border-[#2E3447] h-[230px]">
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
                                name: PISO_LABELS[p.value],
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
                                  <span className="text-[10px] text-gray-500 dark:text-[#94A3B8]">{PISO_LABELS[p.value]}</span>
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
            </div>
          )}
        </div>

        {/* ── REGIÃO 3: Propostas Recentes — flex-1 quando aberta ── */}
        <div className={`bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden flex flex-col
          ${mobileSection === 'propostas' ? 'flex-1 min-h-0' : 'flex-shrink-0'}`}>
          <button
            onClick={() => toggleSection('propostas')}
            className="w-full flex items-center justify-between px-4 py-3 text-left flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D93030]" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Propostas Recentes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{propostasRecentes.length}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'propostas' ? '' : '-rotate-90'}`} />
            </div>
          </button>

          {mobileSection === 'propostas' && (
            <div className="flex-1 min-h-0 overflow-y-auto border-t border-gray-100 dark:border-[#2E3447] p-3 space-y-2">
              {propostasRecentes.length === 0 ? (
                <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-4">Nenhuma proposta encontrada</p>
              ) : propostasRecentes.map(p => (
                <div
                  key={p.id}
                  onClick={() => navigate("/comercial/propostas")}
                  className="bg-gray-50 dark:bg-[#1A1F2E] rounded-xl p-3 cursor-pointer active:opacity-80 transition-opacity"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{p.nomeFantasia || p.id}</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B] font-mono">{p.id}</p>
                    </div>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${STATUS_BADGE[p.status] || 'bg-gray-100 text-gray-600'}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-[#64748B]">
                    <span>{p.tipoOperacao}</span>
                    <span className="text-gray-300 dark:text-[#2E3447]">·</span>
                    <span className="font-semibold text-gray-800 dark:text-[#F1F5F9]">{fmtCurrency(p.valorProposto)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── REGIÃO 4: Contratos Vencendo — flex-1 quando aberta ── */}
        <div className={`bg-white dark:bg-[#242938] rounded-xl border border-orange-100 dark:border-orange-700/20 overflow-hidden flex flex-col
          ${mobileSection === 'contratos' ? 'flex-1 min-h-0' : 'flex-shrink-0'}`}>
          <button
            onClick={() => toggleSection('contratos')}
            className="w-full flex items-center justify-between px-4 py-3 text-left flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Contratos Vencendo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-orange-500 font-medium">{contratosVencendo.length} &lt;60d</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'contratos' ? '' : '-rotate-90'}`} />
            </div>
          </button>

          {mobileSection === 'contratos' && (
            <div className="flex-1 min-h-0 overflow-y-auto border-t border-orange-100 dark:border-orange-700/20 p-3 space-y-2">
              {contratosVencendo.length === 0 ? (
                <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-4">Nenhum contrato vencendo</p>
              ) : contratosVencendo.map(l => {
                const propVenc = proposals.find(p => p.codigoUnidade === l.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA));
                const diasVenc = getDiasRestantes(propVenc?.fimContrato);
                const urgent = (diasVenc ?? 999) <= 30;
                return (
                  <div
                    key={l.id}
                    onClick={() => navigate("/comercial/disponibilidade")}
                    className="bg-orange-50/50 dark:bg-orange-900/10 rounded-xl p-3 cursor-pointer active:opacity-80 transition-opacity border border-orange-100 dark:border-orange-700/20"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{l.nome}</p>
                        <p className="text-xs text-gray-500 dark:text-[#64748B] font-mono">{l.unidade}</p>
                      </div>
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 ${
                        urgent
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                      }`}>
                        {diasVenc ?? '—'}d
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-[#64748B]">
                      <span>Vence {propVenc?.fimContrato || '—'}</span>
                      <span className="text-gray-300 dark:text-[#2E3447]">·</span>

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
      {/* ═══════════════════════════════════════ */}
      {/* FIM LAYOUT MOBILE                      */}
      {/* ═══════════════════════════════════════ */}
      {/* Fim da área com scroll interno */}
    </PageShell>
  );
}
