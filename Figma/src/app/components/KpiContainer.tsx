import { useState, useRef, useEffect } from "react";
import type { ComponentType } from "react";
import { Store, Percent, FileText, AlertCircle, Settings, Check } from "lucide-react";
import { usePersistedState } from "../shared/hooks/usePersistedState";

// ── Enum ───────────────────────────────────────────────────

export enum KpiCardId {
  TotalLojas        = 'totalLojas',
  ContratosAtivos   = 'contratosAtivos',
  PropostasAbertas  = 'propostasAbertas',
  ContratosVencendo = 'contratosVencendo',
}

// ── Tipos ──────────────────────────────────────────────────

export interface KpiStats {
  total: number;
  ocupadas: number;
  disponiveis: number;
  contratoAtivo: number;
  propostasAbertas: number;
  vencendo: number;
}

interface KpiCardData {
  label: string;
  value: number | string;
  valueSub?: string;
  sub: string;
  subColor?: string;
  icon: ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  valueColor: string;
  labelColor: string;
  borderClassName: string;
}

// ── Registro ───────────────────────────────────────────────

const KPI_REGISTRY: Record<KpiCardId, {
  label: string;
  resolve: (stats: KpiStats) => Omit<KpiCardData, 'label'>;
}> = {
  [KpiCardId.TotalLojas]: {
    label: 'Total de Lojas',
    resolve: (s) => ({
      value:           s.ocupadas,
      valueSub:        `/ ${s.total}`,
      sub:             `${s.disponiveis} disponíveis`,
      icon:            Store,
      iconBg:          'bg-blue-50 dark:bg-blue-900/30',
      iconColor:       'text-blue-600 dark:text-blue-400',
      valueColor:      'text-gray-900 dark:text-[#F1F5F9]',
      labelColor:      'text-gray-500 dark:text-[#94A3B8]',
      borderClassName: 'border-gray-100 dark:border-[#2E3447]',
    }),
  },
  [KpiCardId.ContratosAtivos]: {
    label: 'Contratos Ativos',
    resolve: (s) => ({
      value:           s.contratoAtivo,
      sub:             'Aprovado + Vencida',
      icon:            Percent,
      iconBg:          'bg-green-50 dark:bg-green-900/30',
      iconColor:       'text-green-600 dark:text-green-400',
      valueColor:      'text-gray-900 dark:text-[#F1F5F9]',
      labelColor:      'text-gray-500 dark:text-[#94A3B8]',
      borderClassName: 'border-gray-100 dark:border-[#2E3447]',
    }),
  },
  [KpiCardId.PropostasAbertas]: {
    label: 'Propostas Abertas',
    resolve: (s) => ({
      value:           s.propostasAbertas,
      sub:             'em análise ou reprovadas',
      icon:            FileText,
      iconBg:          'bg-[#D93030]/10',
      iconColor:       'text-[#D93030]',
      valueColor:      'text-gray-900 dark:text-[#F1F5F9]',
      labelColor:      'text-gray-500 dark:text-[#94A3B8]',
      borderClassName: 'border-gray-100 dark:border-[#2E3447]',
    }),
  },
  [KpiCardId.ContratosVencendo]: {
    label: 'Contratos <60 dias',
    resolve: (s) => ({
      value:           s.vencendo,
      sub:             'vencimento próximo',
      subColor:        'text-gray-400 dark:text-[#64748B]',
      icon:            AlertCircle,
      iconBg:          'bg-orange-50 dark:bg-orange-900/30',
      iconColor:       'text-orange-500 dark:text-orange-400',
      valueColor:      'text-orange-600 dark:text-orange-400',
      labelColor:      'text-orange-600 dark:text-orange-400',
      borderClassName: 'border-orange-100 dark:border-orange-700/30',
    }),
  },
};

const ALL_KPI_IDS = Object.values(KpiCardId);

const COLS_CLASS: Record<number, string> = {
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

// ── KpiCard ────────────────────────────────────────────────

function KpiCard({ data }: { data: KpiCardData }) {
  const Icon = data.icon;
  return (
    <div className={`h-full bg-white dark:bg-[#242938] rounded-xl border ${data.borderClassName} px-4 py-3 flex items-center gap-3`}>
      <div className={`w-8 h-8 ${data.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-4 h-4 ${data.iconColor}`} />
      </div>
      <div className="min-w-0">
        <p className={`text-xs ${data.labelColor} leading-tight`}>{data.label}</p>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className={`text-lg font-bold ${data.valueColor} leading-none`}>{data.value}</span>
          {data.valueSub && (
            <span className="text-xs text-gray-400 dark:text-[#64748B]">{data.valueSub}</span>
          )}
        </div>
        <p className={`text-[10px] ${data.subColor ?? data.iconColor} mt-0.5`}>{data.sub}</p>
      </div>
    </div>
  );
}

// ── KpiContainer ───────────────────────────────────────────

interface KpiContainerProps {
  stats: KpiStats;
  cols?: 1 | 2 | 3 | 4;
  rows?: 1 | 2 | 3 | 4;
  className?: string;
}

export function KpiContainer({ stats, cols, rows, className = '' }: KpiContainerProps) {
  const [selected, setSelected] = usePersistedState<KpiCardId[]>(
    'dashboard.kpi.selected',
    ALL_KPI_IDS,
    (v) => JSON.stringify(v),
    (s) => {
      try {
        const parsed: KpiCardId[] = JSON.parse(s);
        return parsed.filter(id => (ALL_KPI_IDS as string[]).includes(id));
      } catch {
        return ALL_KPI_IDS;
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

  const toggle = (id: KpiCardId) =>
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );

  const visibleIds    = ALL_KPI_IDS.filter(id => selected.includes(id));
  const effectiveCols = cols ?? Math.min(4, Math.max(1, visibleIds.length));
  const colsClass     = COLS_CLASS[effectiveCols] ?? 'grid-cols-4';
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
          title="Configurar KPIs visíveis"
        >
          <Settings className="w-3.5 h-3.5" />
          <span className="hidden lg:inline font-medium">KPIs</span>
        </button>

        {/* Popover */}
        {open && (
          <div className="absolute top-full right-0 mt-1 w-52 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] shadow-xl p-3 space-y-1">
            <p className="text-[10px] font-semibold text-gray-400 dark:text-[#64748B] uppercase tracking-wider px-1 pb-1">
              KPIs visíveis
            </p>
            {ALL_KPI_IDS.map(id => {
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
                    {KPI_REGISTRY[id].label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Grid de cards */}
      {visibleIds.length > 0 ? (
        <div className={`grid ${colsClass}${rowsClass ? ` ${rowsClass}` : ''} gap-3 flex-1 min-h-0 auto-rows-fr`}>
          {visibleIds.map(id => {
            const entry = KPI_REGISTRY[id];
            const data: KpiCardData = { label: entry.label, ...entry.resolve(stats) };
            return <KpiCard key={id} data={data} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-14 rounded-xl border border-dashed border-gray-200 dark:border-[#2E3447] text-xs text-gray-400 dark:text-[#64748B]">
          Nenhum KPI selecionado — clique em KPIs para configurar
        </div>
      )}
    </div>
  );
}
