import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Store, TrendingUp, TrendingDown, FileText, AlertCircle, DollarSign,
  Percent, ChevronRight, BarChart2, Award, RefreshCw, Calendar,
  ArrowUpRight, ArrowDownRight, Layers, Info
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, ComposedChart, Line, ReferenceLine
} from "recharts";
import { allLojistas } from "../../data/comercialData";
import { getProposals, subscribe } from "../../data/comercialStore";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista } from "../../data/comercialData";

// ── Design System Palette ─────────────────────────────────────
// Mirrors theme.css: jp-primary #D93030 | jp-primary-dark #8B1A1A | jp-accent #C8A882
// chart-1 #D93030 | chart-2 #3B82F6 | chart-3 #10B981 | chart-4 #F59E0B | chart-5 #C8A882
const DS = {
  primary:    "#D93030",  // Aluguel Fixo — jp-primary / chart-1
  light:      "#F87171",  // % Vendas — tom fraco (red-400), substitui o marrom
  dark:       "#8B1A1A",  // Linha de total — jp-primary-dark
  blue:       "#3B82F6",  // chart-2
  green:      "#10B981",  // chart-3
  amber:      "#F59E0B",  // chart-4
  gold:       "#C8A882",  // jp-accent (usado apenas no pie e em detalhes)
  grid:       "#e5e7eb",
  tick:       "#94A3B8",
} as const;

// Pie chart usa sequência variada para distinguir os 7 segmentos
const PIE_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];

const SEGMENTOS = ["Moda", "Alimentação", "Serviços", "Eletrônicos", "Esportes", "Entretenimento", "Outros"];
const PISOS = ["L1", "L2", "L3"] as const;
const PISO_LABELS: Record<string, string> = { L1: "Piso 1 — Popular", L2: "Piso 2 — Classe Média", L3: "Piso 3 — Elite" };
const PISO_SHORT: Record<string, string> = { L1: "Piso 1", L2: "Piso 2", L3: "Piso 3" };

// ── Últimos 12 meses fixos (referência: Abr/2026) ─────────────
const TODAY = new Date("2026-04-23");
const MONTHS_12 = Array.from({ length: 12 }, (_, i) => {
  const d = new Date(TODAY);
  d.setMonth(d.getMonth() - (11 - i));
  return {
    key: `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`,
    label: d.toLocaleDateString("pt-BR", { month: "short", year: "2-digit" })
      .replace(". ", "/").replace(".", ""),
    monthIndex: d.getMonth(),
    yearIndex: d.getFullYear(),
    monthNum: d.getMonth(),
  };
});

// ── Helpers ───────────────────────────────────────────────────
function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}
function fmtK(v: number) {
  if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000)     return `R$ ${(v / 1_000).toFixed(0)}K`;
  return fmt(v);
}
function seeded(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}
function hashStr(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h += s.charCodeAt(i);
  return h;
}

/** Aluguel fixo com variação sazonal determinística por mês */
function monthlyAluguel(l: Lojista, monthKey: string): number {
  if (!l.contratoAtivo) return 0;
  const seed = hashStr(l.id + monthKey + "a");
  // Leve variação ±5% (atrasos, descontos, acréscimos)
  const factor = 0.95 + seeded(seed) * 0.10;
  return l.contratoAtivo.valorAluguel * factor;
}

/** Receita de % vendas com variação sazonal determinística por mês */
function monthlyVendas(l: Lojista, monthKey: string): number {
  if (!l.contratoAtivo) return 0;
  // Sazonalidade: fev/mar fraco, jul/ago médio, nov/dez forte
  const m = MONTHS_12.find(x => x.key === monthKey);
  const monthNum = m?.monthNum ?? new Date().getMonth();
  const seasonalBase = [0.78, 0.72, 0.82, 0.88, 0.92, 0.95, 0.85, 0.90, 0.95, 1.00, 1.10, 1.25][monthNum];
  const seed = hashStr(l.id + monthKey + "v");
  const noise = 0.92 + seeded(seed) * 0.16; // ±8% de ruído
  const base = l.faturamentoMedio * (l.contratoAtivo.percentualFaturamento / 100);
  return base * seasonalBase * noise;
}

function baseAluguel(l: Lojista) { return l.contratoAtivo?.valorAluguel ?? 0; }
function baseVendas(l: Lojista) {
  if (!l.contratoAtivo) return 0;
  return l.faturamentoMedio * (l.contratoAtivo.percentualFaturamento / 100);
}
function totalRevenue(l: Lojista) { return baseAluguel(l) + baseVendas(l); }

function monthlyPerf(l: Lojista, monthKey: string): number {
  if (!l.contratoAtivo) return 0;
  const base = l.contratoAtivo.desempenho;
  const seed = hashStr(l.id + monthKey + "p");
  return Math.max(30, Math.min(100, Math.round(base + (seeded(seed) - 0.5) * 16)));
}

// ── Tooltips ─────────────────────────────────────────────────
function RevenueTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const sum = payload.reduce((s: number, e: any) => s + (typeof e.value === "number" ? e.value : 0), 0);
  const labelMap: Record<string, string> = {
    aluguel: "Aluguel Fixo",
    vendas: "% Vendas",
    total: "Total",
  };
  return (
    <div className="bg-[#1E2435] text-[#F1F5F9] rounded-xl p-3 text-xs shadow-2xl border border-[#2E3447] min-w-[160px]">
      <p className="font-semibold mb-2 pb-1.5 border-b border-[#2E3447]" style={{ color: DS.gold }}>{label}</p>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center justify-between gap-4 mb-1">
          <span className="flex items-center gap-1.5" style={{ color: entry.color }}>
            <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: entry.color }} />
            {labelMap[entry.dataKey] ?? entry.name}
          </span>
          <span className="font-semibold tabular-nums">{fmtK(entry.value)}</span>
        </div>
      ))}
      {payload.length > 1 && (
        <div className="flex items-center justify-between gap-4 mt-2 pt-1.5 border-t border-[#2E3447]">
          <span className="text-[#94A3B8]">Total</span>
          <span className="font-bold text-white tabular-nums">{fmtK(sum)}</span>
        </div>
      )}
    </div>
  );
}

function PieTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="bg-[#1E2435] text-[#F1F5F9] rounded-xl p-3 text-xs shadow-2xl border border-[#2E3447]">
      <p className="font-semibold mb-1" style={{ color: item.payload?.fill }}>{item.name}</p>
      <p className="text-[#94A3B8]">{item.value} loja{item.value !== 1 ? "s" : ""}</p>
    </div>
  );
}

// ── Legenda compartilhada ─────────────────────────────────────
function ChartLegend({ items }: { items: { color: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
      {items.map(it => (
        <div key={it.label} className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: it.color }} />
          <span className="text-xs text-gray-500 dark:text-[#94A3B8]">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Component ────────────────────────────────────────────────
export function ComercialDashboard() {
  const navigate = useNavigate();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const u = subscribe(() => setTick(t => t + 1));
    return u;
  }, []);

  // Filtros globais
  const [filterPeriodo, setFilterPeriodo] = useState<string>("6m");
  const [filterSegmento, setFilterSegmento] = useState<string>("Todos");
  const [filterPiso, setFilterPiso] = useState<string>("Todos");
  const [profileLojista, setProfileLojista] = useState<Lojista | null>(null);

  const proposals = useMemo(() => getProposals(), [tick]);

  // Período para KPIs
  const periodRange = useMemo(() => {
    const end = new Date(TODAY);
    let start = new Date(TODAY);
    switch (filterPeriodo) {
      case "30d": start.setDate(start.getDate() - 30); break;
      case "6m":  start.setMonth(start.getMonth() - 6); break;
      case "1y":  start.setFullYear(start.getFullYear() - 1); break;
      case "2y":  start.setFullYear(start.getFullYear() - 2); break;
      default:    start.setMonth(start.getMonth() - 6);
    }
    return { start, end };
  }, [filterPeriodo]);

  const monthsInPeriod = useMemo(() =>
    MONTHS_12.filter(m => {
      const d = new Date(m.yearIndex, m.monthIndex, 1);
      return d >= periodRange.start && d <= periodRange.end;
    }), [periodRange]);

  const activeMes = useMemo(() =>
    monthsInPeriod.length > 0
      ? monthsInPeriod[monthsInPeriod.length - 1].key
      : MONTHS_12[MONTHS_12.length - 1].key,
    [monthsInPeriod]);

  // Lojistas filtrados (por segmento + piso)
  const filteredLojistas = useMemo(() =>
    allLojistas.filter(l => {
      if (l.status !== "Ocupado" || !l.contratoAtivo) return false;
      const mS = filterSegmento === "Todos" || l.segmento === filterSegmento;
      const mP = filterPiso === "Todos" || l.piso === filterPiso;
      return mS && mP;
    }), [filterSegmento, filterPiso]);

  // ── KPIs ────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total = allLojistas.length;
    const ocupadas = allLojistas.filter(l => l.status === "Ocupado").length;
    const disponiveis = total - ocupadas;
    const taxa = Math.round((ocupadas / total) * 100);
    const vencendo = allLojistas.filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes < 60).length;
    const propostasAtv = proposals.filter(p =>
      ["Em Negociação", "Em Análise", "Pendente"].includes(p.status)
    ).length;
    const receitaMensal = filteredLojistas.reduce((s, l) => s + totalRevenue(l), 0);
    const receitaAluguel = filteredLojistas.reduce((s, l) => s + baseAluguel(l), 0);
    const receitaVendas = receitaMensal - receitaAluguel;
    return { total, ocupadas, disponiveis, taxa, vencendo, propostasAtv, receitaMensal, receitaAluguel, receitaVendas };
  }, [filteredLojistas, proposals, tick]);

  // ── Gráfico 1: Evolução Receita — 12 meses fixos ────────────
  // Responde a Segmento e Piso. Período é irrelevante (mostra sempre 12 meses).
  const revenueEvolution = useMemo(() =>
    MONTHS_12.map(m => {
      let aluguel = 0;
      let vendas = 0;
      filteredLojistas.forEach(l => {
        aluguel += monthlyAluguel(l, m.key);
        vendas  += monthlyVendas(l, m.key);
      });
      return {
        mes: m.label,
        aluguel: Math.round(aluguel),
        vendas:  Math.round(vendas),
        total:   Math.round(aluguel + vendas),
      };
    }), [filteredLojistas]);

  // ── Gráfico 2: Receita por Categoria ────────────────────────
  const receitaBySegmento = useMemo(() =>
    SEGMENTOS.map(seg => {
      const ljs = filteredLojistas.filter(l => l.segmento === seg);
      if (!ljs.length) return null;
      const aluguel = ljs.reduce((s, l) => s + baseAluguel(l), 0);
      const vendas  = ljs.reduce((s, l) => s + baseVendas(l), 0);
      return { segmento: seg, aluguel, vendas, total: aluguel + vendas, lojas: ljs.length };
    }).filter(Boolean) as { segmento: string; aluguel: number; vendas: number; total: number; lojas: number }[],
    [filteredLojistas]);

  // ── Gráfico 3: Receita por Piso ─────────────────────────────
  const receitaByPiso = useMemo(() =>
    PISOS.map(p => {
      // Piso sempre exibe todos os pisos; categoria filtra dentro de cada piso
      const ljs = allLojistas.filter(l =>
        l.status === "Ocupado" && l.contratoAtivo && l.piso === p &&
        (filterSegmento === "Todos" || l.segmento === filterSegmento)
      );
      const aluguel = ljs.reduce((s, l) => s + baseAluguel(l), 0);
      const vendas  = ljs.reduce((s, l) => s + baseVendas(l), 0);
      return { piso: PISO_SHORT[p], aluguel, vendas, total: aluguel + vendas, lojas: ljs.length };
    }), [filteredLojistas, filterSegmento]);

  // ── Gráfico 4: Pie — Lojas por Categoria ───────────────────
  const pieData = useMemo(() => {
    const map: Record<string, number> = {};
    filteredLojistas.forEach(l => { map[l.segmento] = (map[l.segmento] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [filteredLojistas]);

  // ── Top / Bottom 5 ─────────────────────────────────────────
  const topPerformers = useMemo(() =>
    [...filteredLojistas]
      .map(l => ({ l, perf: monthlyPerf(l, activeMes), rev: totalRevenue(l) }))
      .sort((a, b) => b.perf - a.perf).slice(0, 5),
    [filteredLojistas, activeMes]);

  const bottomPerformers = useMemo(() =>
    [...filteredLojistas]
      .map(l => ({ l, perf: monthlyPerf(l, activeMes), rev: totalRevenue(l) }))
      .sort((a, b) => a.perf - b.perf).slice(0, 5),
    [filteredLojistas, activeMes]);

  // ── Tabelas ─────────────────────────────────────────────────
  const propostasRecentes = useMemo(() => {
    let ps = proposals;
    if (filterSegmento !== "Todos") ps = ps.filter(p => p.segmento === filterSegmento);
    return ps.slice(0, 6);
  }, [proposals, filterSegmento, tick]);

  const contratosVencendo = useMemo(() =>
    allLojistas.filter(l => {
      if (!l.contratoAtivo || l.contratoAtivo.diasRestantes >= 60 || l.status !== "Ocupado") return false;
      const mP = filterPiso === "Todos" || l.piso === filterPiso;
      const mS = filterSegmento === "Todos" || l.segmento === filterSegmento;
      return mP && mS;
    }).sort((a, b) => a.contratoAtivo!.diasRestantes - b.contratoAtivo!.diasRestantes).slice(0, 8),
    [filterPiso, filterSegmento]);

  const resetFilters = () => { setFilterPeriodo("6m"); setFilterSegmento("Todos"); setFilterPiso("Todos"); };
  const hasFilters = filterPeriodo !== "6m" || filterSegmento !== "Todos" || filterPiso !== "Todos";

  return (
    <div className="space-y-6">

      {/* ── Cabeçalho + Filtros inline ── */}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9] mr-auto">
          Dashboard Comercial
        </h1>

        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <select value={filterPeriodo} onChange={e => setFilterPeriodo(e.target.value)}
            className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg px-2.5 py-1.5 text-xs text-gray-700 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
            <option value="30d">Últimos 30 dias</option>
            <option value="6m">Último Semestre</option>
            <option value="1y">Último Ano</option>
            <option value="2y">Últimos 2 Anos</option>
          </select>
        </div>

        <select value={filterSegmento} onChange={e => setFilterSegmento(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg px-2.5 py-1.5 text-xs text-gray-700 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todas as Categorias</option>
          {SEGMENTOS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={filterPiso} onChange={e => setFilterPiso(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg px-2.5 py-1.5 text-xs text-gray-700 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Pisos</option>
          <option value="L1">Piso 1 — Popular</option>
          <option value="L2">Piso 2 — Classe Média</option>
          <option value="L3">Piso 3 — Elite</option>
        </select>

        {hasFilters && (
          <button onClick={resetFilters}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D93030]/10 text-[#D93030] border border-[#D93030]/20 rounded-lg text-xs font-medium hover:bg-[#D93030]/20 transition-colors">
            <RefreshCw className="w-3 h-3" /> Limpar
          </button>
        )}
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
            <Store className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Total de Lojas</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.ocupadas}</span>
            <span className="text-sm text-gray-400">/ {stats.total}</span>
          </div>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{stats.disponiveis} disponíveis</p>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
            <Percent className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Taxa de Ocupação</p>
          <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.taxa}%</span>
          <div className="mt-2 w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full transition-all" style={{ width: `${stats.taxa}%` }} />
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-10 h-10 bg-[#D93030]/10 rounded-lg flex items-center justify-center mb-3">
            <DollarSign className="w-5 h-5 text-[#D93030]" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Receita Total / Mês</p>
          <span className="text-xl font-bold text-gray-900 dark:text-[#F1F5F9]">{fmtK(stats.receitaMensal)}</span>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-sm bg-[#D93030] flex-shrink-0" /> {fmtK(stats.receitaAluguel)}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-sm bg-[#F87171] flex-shrink-0" /> {fmtK(stats.receitaVendas)}
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-orange-100 dark:border-orange-700/30 p-5">
          <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-3">
            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">Contratos &lt;60 dias</p>
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.vencendo}</span>
          <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">{stats.propostasAtv} propostas abertas</p>
        </div>
      </div>

      {/* ── Gráfico 1: Evolução 12 meses + Pie ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Evolução da Receita — 12 meses fixos, barras agrupadas */}
        <div className="lg:col-span-2 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-6">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
              <TrendingUp className="w-4 h-4" style={{ color: DS.primary }} />
              Evolução da Receita Mensal
            </h3>
          </div>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-1">
            Últimos 12 meses · Aluguel fixo vs % de vendas · Filtrado por Categoria e Piso
          </p>

          {revenueEvolution.every(d => d.total === 0) ? (
            <div className="flex items-center justify-center h-52 text-gray-400 text-xs">
              Sem dados para os filtros selecionados
            </div>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={230}>
                <ComposedChart data={revenueEvolution} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} strokeOpacity={0.6} />
                  <XAxis dataKey="mes" axisLine={false} tickLine={false}
                    tick={{ fill: DS.tick, fontSize: 11 }} dy={6} />
                  <YAxis axisLine={false} tickLine={false}
                    tick={{ fill: DS.tick, fontSize: 10 }} tickFormatter={v => fmtK(v)} width={68} />
                  <Tooltip content={<RevenueTooltip />} cursor={{ fill: "rgba(217,48,48,0.06)" }} />
                  {/* Barras agrupadas (sem stackId) — lado a lado */}
                  <Bar dataKey="aluguel" name="Aluguel Fixo" fill={DS.primary}
                    radius={[3, 3, 0, 0]} barSize={14} />
                  <Bar dataKey="vendas" name="% Vendas" fill={DS.light}
                    radius={[3, 3, 0, 0]} barSize={14} />
                  {/* Linha de total */}
                  <Line dataKey="total" name="Total" type="monotone"
                    stroke={DS.dark} strokeWidth={2}
                    dot={{ r: 3, fill: DS.dark, strokeWidth: 0 }}
                    activeDot={{ r: 5, fill: DS.dark }} />
                </ComposedChart>
              </ResponsiveContainer>
              <ChartLegend items={[
                { color: DS.primary, label: "Aluguel Fixo" },
                { color: DS.light,   label: "% Vendas" },
                { color: DS.dark,    label: "Total (linha)" },
              ]} />
            </>
          )}
        </div>

        {/* Pie — Lojas por Categoria (inalterado) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-6">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1 flex items-center gap-2">
            <BarChart2 className="w-4 h-4" style={{ color: DS.primary }} />
            Lojas por Categoria
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-4">Distribuição por segmento</p>

          {pieData.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={130}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={58} innerRadius={28}
                    dataKey="value" paddingAngle={2}>
                    {pieData.map((_, i) => (
                      <Cell key={`pie-cell-${i}`} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-3">
                {pieData.slice(0, 6).map((item, i) => (
                  <div key={`pie-leg-${item.name}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                        style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                      <span className="text-xs text-gray-600 dark:text-[#94A3B8]">{item.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9]">{item.value}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-gray-400 dark:text-[#64748B] text-xs">
              Sem dados para os filtros
            </div>
          )}
        </div>
      </div>

      {/* ── Gráfico 2 + Gráfico 3 ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Receita por Categoria — barras horizontais agrupadas */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-6">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1 flex items-center gap-2">
            <DollarSign className="w-4 h-4" style={{ color: DS.primary }} />
            Receita por Categoria
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-2">
            Aluguel fixo e % de vendas por segmento · Mês base
          </p>

          {receitaBySegmento.length === 0 ? (
            <div className="flex items-center justify-center h-52 text-gray-400 text-xs">
              Nenhum segmento com dados para os filtros
            </div>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={230}>
                <BarChart data={receitaBySegmento} layout="vertical"
                  margin={{ top: 0, right: 12, left: 6, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={DS.grid} strokeOpacity={0.6} />
                  <XAxis type="number" axisLine={false} tickLine={false}
                    tick={{ fill: DS.tick, fontSize: 10 }} tickFormatter={v => fmtK(v)} />
                  <YAxis type="category" dataKey="segmento" axisLine={false} tickLine={false}
                    tick={{ fill: DS.tick, fontSize: 11 }} width={82} />
                  <Tooltip content={<RevenueTooltip />} cursor={{ fill: "rgba(217,48,48,0.06)" }} />
                  {/* Barras agrupadas horizontais */}
                  <Bar dataKey="aluguel" name="Aluguel Fixo" fill={DS.primary}
                    radius={[0, 3, 3, 0]} barSize={11} />
                  <Bar dataKey="vendas" name="% Vendas" fill={DS.light}
                    radius={[0, 3, 3, 0]} barSize={11} />
                </BarChart>
              </ResponsiveContainer>
              <ChartLegend items={[
                { color: DS.primary, label: "Aluguel Fixo" },
                { color: DS.light,   label: "% Vendas" },
              ]} />
            </>
          )}
        </div>

        {/* Receita por Piso — barras verticais agrupadas */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-6">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1 flex items-center gap-2">
            <Layers className="w-4 h-4" style={{ color: DS.primary }} />
            Receita por Piso
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-2">
            Comparativo entre pisos · Aluguel fixo vs % de vendas · Mês base
          </p>
          <>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={receitaByPiso} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} strokeOpacity={0.6} />
                <XAxis dataKey="piso" axisLine={false} tickLine={false}
                  tick={{ fill: DS.tick, fontSize: 12 }} dy={6} />
                <YAxis axisLine={false} tickLine={false}
                  tick={{ fill: DS.tick, fontSize: 11 }} tickFormatter={v => fmtK(v)} width={68} />
                <Tooltip content={<RevenueTooltip />} cursor={{ fill: "rgba(217,48,48,0.06)" }} />
                {/* Barras agrupadas verticais */}
                <Bar dataKey="aluguel" name="Aluguel Fixo" fill={DS.primary}
                  radius={[3, 3, 0, 0]} barSize={40} />
                <Bar dataKey="vendas" name="% Vendas" fill={DS.light}
                  radius={[3, 3, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
            <ChartLegend items={[
              { color: DS.primary, label: "Aluguel Fixo" },
              { color: DS.light,   label: "% Vendas" },
            ]} />
          </>
        </div>
      </div>

      {/* ── Top & Bottom Performers ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 5 */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/10 flex items-center gap-2">
            <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Top 5 Desempenhos</h3>
            <span className="ml-auto text-xs text-gray-400">por desempenho + receita</span>
          </div>
          <div className="divide-y divide-gray-50 dark:divide-[#2E3447]">
            {topPerformers.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-xs">Sem dados</div>
            ) : topPerformers.map(({ l, perf, rev }, idx) => (
              <div key={`top-${l.id}`}
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                onClick={() => setProfileLojista(l)}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  idx === 0 ? "bg-yellow-400 text-yellow-900" :
                  idx === 1 ? "bg-gray-300 text-gray-700" :
                  idx === 2 ? "bg-amber-600 text-white" :
                  "bg-gray-100 dark:bg-[#2E3447] text-gray-600 dark:text-[#94A3B8]"
                }`}>{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{l.nome}</p>
                  <p className="text-xs text-gray-400">{l.unidade} · {l.segmento} · {PISO_LABELS[l.piso]?.split("—")[0].trim()}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-1 justify-end">
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">{perf}%</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <p className="text-xs text-gray-400">{fmtK(rev)}/mês</p>
                </div>
                <div className="w-14 ml-1">
                  <div className="w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${perf}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 5 */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gradient-to-r from-red-50 to-transparent dark:from-red-900/10 flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-[#D93030]" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Menores Desempenhos</h3>
            <span className="ml-auto text-xs text-gray-400">atenção necessária</span>
          </div>
          <div className="divide-y divide-gray-50 dark:divide-[#2E3447]">
            {bottomPerformers.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-xs">Sem dados</div>
            ) : bottomPerformers.map(({ l, perf, rev }, idx) => (
              <div key={`bot-${l.id}`}
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                onClick={() => setProfileLojista(l)}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  perf < 60
                    ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                    : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                }`}>{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{l.nome}</p>
                  <p className="text-xs text-gray-400">{l.unidade} · {l.segmento} · {PISO_LABELS[l.piso]?.split("—")[0].trim()}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-1 justify-end">
                    <span className={`text-sm font-bold ${perf < 60 ? "text-red-500" : "text-orange-500"}`}>{perf}%</span>
                    <ArrowDownRight className={`w-3.5 h-3.5 ${perf < 60 ? "text-red-500" : "text-orange-500"}`} />
                  </div>
                  <p className="text-xs text-gray-400">{fmtK(rev)}/mês</p>
                </div>
                <div className="w-14 ml-1">
                  <div className="w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${perf < 60 ? "bg-red-500" : "bg-orange-400"}`}
                      style={{ width: `${perf}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Propostas de Contratos ── */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
          <button onClick={() => navigate("/comercial/propostas")} className="flex items-center gap-2 group">
            <FileText className="w-4 h-4 text-[#D93030]" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] group-hover:text-[#D93030] transition-colors">
              Propostas de Contratos
            </h3>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D93030] transition-colors" />
          </button>
          <span className="text-xs text-gray-500 dark:text-[#64748B]">{proposals.length} no total · clique no título para gerenciar</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                {["Código", "Lojista", "Unidade", "Tipo", "Criação", "Valor", "Status"].map(h => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {propostasRecentes.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-6 text-gray-400 text-sm">Nenhuma proposta encontrada</td></tr>
              ) : propostasRecentes.map(p => (
                <tr key={`prop-${p.id}`}
                  className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                  onClick={() => navigate("/comercial/propostas")}>
                  <td className="px-5 py-3.5 text-xs font-medium text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{p.id}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{p.lojista}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{p.unidade}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{p.tipo}</td>
                  <td className="px-5 py-3.5 text-xs text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.dataCriacao}</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(p.valorProposto)}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className={`px-2 py-0.5 inline-flex text-xs font-semibold rounded-full ${
                      p.status === "Aceita" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400" :
                      p.status === "Em Negociação" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400" :
                      p.status === "Pendente" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400" :
                      p.status === "Em Análise" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400" :
                      p.status === "Recusada" ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400" :
                      "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400"
                    }`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E]">
          <button onClick={() => navigate("/comercial/propostas")}
            className="text-xs text-[#D93030] hover:text-[#b92828] font-medium flex items-center gap-1 transition-colors">
            Ver todas as propostas <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Contratos Vencendo ── */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-[#2E3447] bg-orange-50/50 dark:bg-orange-900/10 flex items-center justify-between">
          <button onClick={() => navigate("/comercial/contratos")} className="flex items-center gap-2 group">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] group-hover:text-orange-500 transition-colors">
              Contratos Vencendo
            </h3>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
          </button>
          <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
            {contratosVencendo.length} contrato{contratosVencendo.length !== 1 ? "s" : ""} vencendo em &lt;60 dias
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                {["Lojista", "Unidade", "Piso", "Vencimento", "Dias Rest.", "Aluguel", "% Vendas", "Ação"].map(h => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {contratosVencendo.length === 0 ? (
                <tr><td colSpan={8} className="text-center py-6 text-gray-400 text-sm">Nenhum contrato vencendo no período filtrado</td></tr>
              ) : contratosVencendo.map(l => (
                <tr key={`ctr-${l.id}`}
                  className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                  onClick={() => setProfileLojista(l)}>
                  <td className="px-5 py-3.5 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{l.nome}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{l.unidade}</td>
                  <td className="px-5 py-3.5 text-xs whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded-full font-medium ${
                      l.piso === "L3" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" :
                      l.piso === "L2" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" :
                      "bg-gray-100 dark:bg-[#2E3447] text-gray-600 dark:text-[#94A3B8]"
                    }`}>{PISO_LABELS[l.piso]?.split("—")[0].trim()}</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{l.contratoAtivo!.fim}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                      l.contratoAtivo!.diasRestantes <= 30
                        ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400"
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400"
                    }`}>{l.contratoAtivo!.diasRestantes} dias</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(l.contratoAtivo!.valorAluguel)}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{l.contratoAtivo!.percentualFaturamento}%</td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <button onClick={e => { e.stopPropagation(); navigate("/comercial/contratos"); }}
                      className="text-[#D93030] dark:text-[#E04444] hover:text-[#b92828] text-xs font-medium inline-flex items-center gap-1">
                      Renovar <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E]">
          <button onClick={() => navigate("/comercial/contratos")}
            className="text-xs text-[#D93030] hover:text-[#b92828] font-medium flex items-center gap-1 transition-colors">
            Gerenciar todos os contratos <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {profileLojista && (
        <LojistProfileModal lojista={profileLojista} onClose={() => setProfileLojista(null)} />
      )}
    </div>
  );
}
