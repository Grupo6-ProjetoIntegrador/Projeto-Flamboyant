import { useState, useRef, useEffect } from "react";
import type { ComponentType } from "react";
import { Settings, Check, BarChart2, FileText, Info } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import { usePersistedState } from "../shared/hooks/usePersistedState";
import { ChartTooltip } from "./ChartTooltip";
import { TableLayoutContainer, TableLayoutItem } from "./PageShared";

// ── Paleta ─────────────────────────────────────────────────

const PRIMARY = "#D93030";
const GRID    = "#e5e7eb";
const COLORS  = [PRIMARY, "#C8A882", "#8B1A1A", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

// ── Enums ───────────────────────────────────────────────────

export enum ChartId {
  OcupacaoPorSegmento      = 'ocupacaoPorSegmento',
  DistribuicaoPorCategoria = 'distribuicaoPorCategoria',
  OcupacaoPorPiso          = 'ocupacaoPorPiso',
  StatusPropostas          = 'statusPropostas',
}

export enum ChartType {
  Bar = 'bar',
  Pie = 'pie',
}

export enum PieDisplayMode {
  Units      = 'units',
  Percentage = 'percentage',
}

// ── Tipos ───────────────────────────────────────────────────

export interface ChartStats {
  segmentos:      { name: string; value: number }[];
  pisos:          { name: string; value: number }[];
  statusPropostas: { name: string; value: number }[];
}

type DataPoint = { name: string; value: number };

interface ChartRegistryEntry {
  label:          string;
  icon:           ComponentType<{ className?: string }>;
  defaultType:    ChartType;
  supportedTypes: ChartType[];
  getData:        (s: ChartStats) => DataPoint[];
}

// ── Registro ────────────────────────────────────────────────

const CHART_REGISTRY: Record<ChartId, ChartRegistryEntry> = {
  [ChartId.OcupacaoPorSegmento]: {
    label:          'Ocup. por Segmento',
    icon:           BarChart2,
    defaultType:    ChartType.Bar,
    supportedTypes: [ChartType.Bar, ChartType.Pie],
    getData:        (s) => s.segmentos,
  },
  [ChartId.DistribuicaoPorCategoria]: {
    label:          'Dist. por Categoria',
    icon:           BarChart2,
    defaultType:    ChartType.Pie,
    supportedTypes: [ChartType.Bar, ChartType.Pie],
    getData:        (s) => s.segmentos,
  },
  [ChartId.OcupacaoPorPiso]: {
    label:          'Ocup. por Piso',
    icon:           Info,
    defaultType:    ChartType.Pie,
    supportedTypes: [ChartType.Bar, ChartType.Pie],
    getData:        (s) => s.pisos,
  },
  [ChartId.StatusPropostas]: {
    label:          'Status das Propostas',
    icon:           FileText,
    defaultType:    ChartType.Pie,
    supportedTypes: [ChartType.Bar, ChartType.Pie],
    getData:        (s) => s.statusPropostas,
  },
};

const CHART_TYPE_LABELS: Record<ChartType, string> = {
  [ChartType.Bar]: 'Barras',
  [ChartType.Pie]: 'Pizza',
};

const PIE_DISPLAY_LABELS: Record<PieDisplayMode, string> = {
  [PieDisplayMode.Units]:      'Unidade',
  [PieDisplayMode.Percentage]: 'Porcentagem',
};

const ALL_CHART_IDS = Object.values(ChartId);

const COLS_CLASS_AUTO: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

const COLS_CLASS_FIXED: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

const ROWS_CLASS: Record<number, string> = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
};

// ── Renderizadores ──────────────────────────────────────────

function BarView({ data }: { data: DataPoint[] }) {
  if (data.length === 0)
    return <div className="flex items-center justify-center flex-1 min-h-0 text-gray-400 text-xs">Sem dados</div>;
  return (
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={GRID} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} dy={6} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(217,48,48,0.05)" }} />
          <Bar dataKey="value" fill={PRIMARY} radius={[3, 3, 0, 0]} barSize={18} name="Lojas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function PieView({ data, displayMode }: { data: DataPoint[]; displayMode: PieDisplayMode }) {
  if (data.length === 0)
    return <div className="flex items-center justify-center flex-1 min-h-0 text-gray-400 text-xs">Sem dados</div>;

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const fmt = (v: number) =>
    displayMode === PieDisplayMode.Percentage
      ? `${total > 0 ? Math.round((v / total) * 100) : 0}%`
      : String(v);

  return (
    <TableLayoutContainer>
      <TableLayoutItem>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" outerRadius="100%" innerRadius="50%" dataKey="value" paddingAngle={2}>
              {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip content={<ChartTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </TableLayoutItem>
      <TableLayoutItem>
        <div className="flex flex-col justify-center gap-1 h-full overflow-hidden">
          {data.slice(0, 5).map((item, i) => (
            <div key={i} className="flex items-center justify-between gap-1 min-w-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: COLORS[i % COLORS.length] }} />
                <span className="text-[10px] text-gray-500 dark:text-[#94A3B8] truncate">{item.name}</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-800 dark:text-[#F1F5F9] flex-shrink-0">{fmt(item.value)}</span>
            </div>
          ))}
        </div>
      </TableLayoutItem>
    </TableLayoutContainer>
  );
}

// ── ChartsItem ──────────────────────────────────────────────

function ChartsItem({ id, stats }: { id: ChartId; stats: ChartStats }) {
  const entry = CHART_REGISTRY[id];

  const [chartType, setChartType] = usePersistedState<ChartType>(
    `dashboard.charts.type.${id}`,
    entry.defaultType,
    (v) => v,
    (s) => (Object.values(ChartType) as string[]).includes(s) ? s as ChartType : entry.defaultType,
  );

  const [pieDisplayMode, setPieDisplayMode] = usePersistedState<PieDisplayMode>(
    `dashboard.charts.piemode.${id}`,
    PieDisplayMode.Units,
    (v) => v,
    (s) => (Object.values(PieDisplayMode) as string[]).includes(s) ? s as PieDisplayMode : PieDisplayMode.Units,
  );

  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!popoverRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const Icon = entry.icon;
  const data = entry.getData(stats);

  return (
    <div className={`bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4 relative h-full flex flex-col ${open ? 'z-20' : ''}`}>

      {/* Seletor de tipo de gráfico */}
      <div ref={popoverRef} className="absolute top-3 right-3 z-30">
        <button
          onClick={() => setOpen(o => !o)}
          className={`flex items-center gap-1 px-1.5 py-1 rounded-lg text-xs transition-colors
            ${open
              ? 'bg-gray-100 dark:bg-[#1A1F2E] text-gray-700 dark:text-[#F1F5F9]'
              : 'text-gray-400 dark:text-[#64748B] hover:text-gray-600 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E]'
            }`}
          title="Tipo de gráfico"
        >
          <Settings className="w-3 h-3" />
        </button>

        {open && (
          <div className="absolute top-full right-0 mt-1 w-40 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] shadow-xl p-2 space-y-0.5">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-[#64748B] uppercase tracking-wider px-1 pb-1">
              Tipo de gráfico
            </p>
            {entry.supportedTypes.map(type => {
              const isSelected = chartType === type;
              return (
                <button
                  key={type}
                  onClick={() => { setChartType(type); setOpen(false); }}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors text-left"
                >
                  <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                    ${isSelected ? 'border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557]'}`}>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#D93030]" />}
                  </div>
                  <span className="text-xs text-gray-700 dark:text-[#CBD5E1]">{CHART_TYPE_LABELS[type]}</span>
                </button>
              );
            })}
            {chartType === ChartType.Pie && (
              <>
                <div className="h-px bg-gray-100 dark:bg-[#2E3447] my-1 mx-1" />
                <p className="text-[10px] font-semibold text-gray-400 dark:text-[#64748B] uppercase tracking-wider px-1 pb-1">
                  Exibir como
                </p>
                {Object.values(PieDisplayMode).map(mode => {
                  const isSelected = pieDisplayMode === mode;
                  return (
                    <button
                      key={mode}
                      onClick={() => setPieDisplayMode(mode)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors text-left"
                    >
                      <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                        ${isSelected ? 'border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557]'}`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#D93030]" />}
                      </div>
                      <span className="text-xs text-gray-700 dark:text-[#CBD5E1]">{PIE_DISPLAY_LABELS[mode]}</span>
                    </button>
                  );
                })}
              </>
            )}
          </div>
        )}
      </div>

      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-3 flex items-center gap-1.5 pr-7">
        <Icon className="w-3.5 h-3.5 text-[#D93030] flex-shrink-0" />
        {entry.label}
      </h3>

      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
        {chartType === ChartType.Bar ? <BarView data={data} /> : <PieView data={data} displayMode={pieDisplayMode} />}
      </div>
    </div>
  );
}

// ── ChartsContainer ─────────────────────────────────────────

interface ChartsContainerProps {
  stats: ChartStats;
  cols?: 1 | 2 | 3 | 4;
  rows?: 1 | 2 | 3 | 4;
  className?: string;
}

export function ChartsContainer({ stats, cols, rows, className = '' }: ChartsContainerProps) {
  const [selected, setSelected] = usePersistedState<ChartId[]>(
    'dashboard.charts.selected',
    ALL_CHART_IDS,
    (v) => JSON.stringify(v),
    (s) => {
      try {
        const parsed: ChartId[] = JSON.parse(s);
        return parsed.filter(id => (ALL_CHART_IDS as string[]).includes(id));
      } catch {
        return ALL_CHART_IDS;
      }
    },
  );

  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!popoverRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const toggle = (id: ChartId) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const visibleIds    = ALL_CHART_IDS.filter(id => selected.includes(id));
  const effectiveCols = cols ?? Math.min(4, Math.max(1, visibleIds.length));
  const colsClass     = cols
    ? (COLS_CLASS_FIXED[effectiveCols] ?? 'grid-cols-4')
    : (COLS_CLASS_AUTO[effectiveCols] ?? 'sm:grid-cols-2 lg:grid-cols-4');
  const rowsClass     = rows ? (ROWS_CLASS[rows] ?? '') : '';

  return (
    <div className={`hidden sm:flex sm:flex-col sm:flex-1 relative ${className}`}>

      {/* Botão de configuração */}
      <div ref={popoverRef} className="absolute -top-7 right-0 z-20">
        <button
          onClick={() => setOpen(o => !o)}
          className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs transition-colors
            ${open
              ? 'bg-gray-100 dark:bg-[#1A1F2E] text-gray-700 dark:text-[#F1F5F9]'
              : 'text-gray-400 dark:text-[#64748B] hover:text-gray-600 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E]'
            }`}
          title="Configurar gráficos visíveis"
        >
          <Settings className="w-3.5 h-3.5" />
          <span className="hidden lg:inline font-medium">Gráficos</span>
        </button>

        {open && (
          <div className="absolute top-full right-0 mt-1 w-56 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] shadow-xl p-3 space-y-1">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-[#64748B] uppercase tracking-wider px-1 pb-1">
              Gráficos visíveis
            </p>
            {ALL_CHART_IDS.map(id => {
              const isOn = selected.includes(id);
              return (
                <button
                  key={id}
                  onClick={() => toggle(id)}
                  className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors text-left"
                >
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all
                    ${isOn ? 'bg-[#D93030] border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557]'}`}>
                    {isOn && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-xs text-gray-700 dark:text-[#CBD5E1]">
                    {CHART_REGISTRY[id].label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Grid de gráficos */}
      {visibleIds.length > 0 ? (
        <div className={`grid ${colsClass}${rowsClass ? ` ${rowsClass}` : ''} gap-4 flex-1 min-h-0 auto-rows-fr`}>
          {visibleIds.map(id => (
            <ChartsItem key={id} id={id} stats={stats} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-16 rounded-xl border border-dashed border-gray-200 dark:border-[#2E3447] text-xs text-gray-400 dark:text-[#64748B]">
          Nenhum gráfico selecionado — clique em Gráficos para configurar
        </div>
      )}
    </div>
  );
}
