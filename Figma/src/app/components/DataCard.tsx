/**
 * DataCard.tsx — Card genérico orientado a objeto.
 *
 * Recebe qualquer objeto e um fieldMap que define qual propriedade
 * do objeto vai para cada slot visual do card.
 *
 * Slots disponíveis:
 *   title       — nome principal (linha 1, destaque)
 *   titleBadge  — badge ao lado do título (ex: tipoOperacao)
 *   subtitle    — metadados secundários (linha 2, texto muted)
 *                 aceita string (campo único) ou string[] (junta com ' · ')
 *   value       — valor principal (linha 3, negrito)
 *   valueSub    — complemento do valor (ex: área em m²)
 *   statusBadge — badge de status com cor semântica (linha 4, esquerda)
 *   footer      — informação de rodapé (linha 4, direita — ex: data)
 *
 * Cada slot aceita:
 *   - string          → nome do campo no objeto (usa valor direto)
 *   - string[]        → múltiplos campos, unidos por ' · '
 *   - { field, format } → campo + função de formatação
 *   - { fields, format } → múltiplos campos + formatação conjunta
 *
 * Props:
 *   data        — objeto de dados (qualquer tipo)
 *   fieldMap    — mapeamento slot → campo(s) do objeto
 *   onClick     — callback ao clicar no card
 *   className   — classe extra no wrapper
 *
 * Uso:
 *   <DataCard
 *     data={proposta}
 *     fieldMap={{
 *       title:       'nomeFantasia',
 *       titleBadge:  'tipoOperacao',
 *       subtitle:    ['id', 'codigoUnidade', 'segmento'],
 *       value:       { field: 'valorProposto', format: v => fmtCurrency(v) },
 *       valueSub:    { field: 'area', format: v => `${v} m²` },
 *       statusBadge: 'status',
 *       footer:      'dataVencimento',
 *     }}
 *     onClick={() => abrirModal(proposta)}
 *   />
 */

import type { ReactNode } from 'react';
import { Calendar } from 'lucide-react';

// ── Tipos ────────────────────────────────────────────────────

/** Definição de um slot simples: campo direto ou com formatação */
type SlotSingle<T> =
  | keyof T
  | { field: keyof T; format: (value: any, row: T) => ReactNode };

/** Definição de um slot múltiplo: vários campos unidos por ' · ' */
type SlotMulti<T> =
  | (keyof T)[]
  | { fields: (keyof T)[]; format: (values: any[], row: T) => ReactNode };

/** Um slot aceita definição simples ou múltipla */
type Slot<T> = SlotSingle<T> | SlotMulti<T>;

export interface DataCardFieldMap<T> {
  /** Nome principal (linha 1) */
  title?: Slot<T>;
  /** Badge ao lado do título */
  titleBadge?: SlotSingle<T>;
  /** Metadados secundários (linha 2) */
  subtitle?: Slot<T>;
  /** Valor principal (linha 3) */
  value?: SlotSingle<T>;
  /** Complemento do valor */
  valueSub?: SlotSingle<T>;
  /** Badge de status (linha 4, esquerda) */
  statusBadge?: SlotSingle<T>;
  /** Rodapé — data ou info complementar (linha 4, direita) */
  footer?: SlotSingle<T>;
}

interface DataCardProps<T extends Record<string, any>> {
  data: T;
  fieldMap: DataCardFieldMap<T>;
  onClick?: (row: T) => void;
  className?: string;
}

// ── Cores de status ──────────────────────────────────────────
// Mapeamento de status conhecidos para classes Tailwind
const STATUS_COLORS: Record<string, string> = {
  'Aprovado':                        'bg-green-100  dark:bg-green-500/20  text-green-700  dark:text-green-300  border border-green-200  dark:border-green-500/40',
  'Aguardando análise financeira':   'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40',
  'Aguardando análise do comitê':    'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40',
  'Reprovado':                       'bg-red-100    dark:bg-red-500/20    text-red-700    dark:text-red-300    border border-red-200    dark:border-red-500/40',
  'Cancelado':                       'bg-gray-100   dark:bg-gray-700/50   text-gray-600   dark:text-gray-400   border border-gray-200   dark:border-gray-600/30',
  'Vencida':                         'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-500/40',
  'Finalizado':                      'bg-blue-100   dark:bg-blue-500/20   text-blue-700   dark:text-blue-300   border border-blue-200   dark:border-blue-500/40',
};

const TIPO_COLORS: Record<string, string> = {
  'Nova Instalação': 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
  'Renovação':       'bg-teal-50   dark:bg-teal-900/20   text-teal-700   dark:text-teal-400',
  'Readequação':     'bg-amber-50  dark:bg-amber-900/20  text-amber-700  dark:text-amber-400',
  'Transferência':   'bg-pink-50   dark:bg-pink-900/20   text-pink-700   dark:text-pink-400',
  'Cessão':          'bg-cyan-50   dark:bg-cyan-900/20   text-cyan-700   dark:text-cyan-400',
};

// ── Helpers ──────────────────────────────────────────────────

/** Resolve o valor de um slot simples */
function resolveSlotSingle<T extends Record<string, any>>(
  slot: SlotSingle<T>,
  row: T,
): ReactNode {
  if (typeof slot === 'string' || typeof slot === 'symbol' || typeof slot === 'number') {
    const val = row[slot as keyof T];
    return val !== null && val !== undefined ? String(val) : '—';
  }
  const { field, format } = slot as { field: keyof T; format: (v: any, r: T) => ReactNode };
  const val = row[field];
  return format(val, row);
}

/** Resolve o valor de um slot (simples ou múltiplo) */
function resolveSlot<T extends Record<string, any>>(
  slot: Slot<T>,
  row: T,
): ReactNode {
  // Array de chaves → join com ' · '
  if (Array.isArray(slot)) {
    return (slot as (keyof T)[])
      .map(k => {
        const v = row[k];
        return v !== null && v !== undefined && v !== '' ? String(v) : null;
      })
      .filter(Boolean)
      .join(' · ');
  }
  // { fields, format }
  if (typeof slot === 'object' && 'fields' in (slot as any)) {
    const { fields, format } = slot as { fields: (keyof T)[]; format: (v: any[], r: T) => ReactNode };
    return format(fields.map(k => row[k]), row);
  }
  // Slot simples
  return resolveSlotSingle(slot as SlotSingle<T>, row);
}

// ── Componente ───────────────────────────────────────────────

export function DataCard<T extends Record<string, any>>({
  data,
  fieldMap,
  onClick,
  className = '',
}: DataCardProps<T>) {
  const {
    title,
    titleBadge,
    subtitle,
    value,
    valueSub,
    statusBadge,
    footer,
  } = fieldMap;

  const titleVal       = title       ? resolveSlot(title, data)              : null;
  const titleBadgeVal  = titleBadge  ? resolveSlotSingle(titleBadge, data)   : null;
  const subtitleVal    = subtitle    ? resolveSlot(subtitle, data)            : null;
  const valueVal       = value       ? resolveSlotSingle(value, data)         : null;
  const valueSubVal    = valueSub    ? resolveSlotSingle(valueSub, data)      : null;
  const statusVal      = statusBadge ? String(resolveSlotSingle(statusBadge, data)) : null;
  const footerVal      = footer      ? resolveSlotSingle(footer, data)        : null;

  const titleBadgeStr = titleBadgeVal ? String(titleBadgeVal) : null;
  const tipoCls = titleBadgeStr ? (TIPO_COLORS[titleBadgeStr] || 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300') : '';
  const statusCls = statusVal ? (STATUS_COLORS[statusVal] || 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400') : '';

  const hasFooterRow = statusVal || footerVal;

  return (
    <button
      type="button"
      onClick={() => onClick?.(data)}
      className={`
        w-full text-left p-3 rounded-xl border transition-colors
        bg-white dark:bg-[#242938]
        border-gray-100 dark:border-[#2E3447]
        hover:bg-gray-50 dark:hover:bg-[#1A1F2E]
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
        ${className}
      `}
    >
      {/* Linha 1: título + badge de tipo */}
      {(titleVal || titleBadgeStr) && (
        <div className="flex items-center gap-2 mb-1">
          {titleVal && (
            <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate flex-1">
              {titleVal}
            </span>
          )}
          {titleBadgeStr && (
            <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${tipoCls}`}>
              {titleBadgeStr}
            </span>
          )}
        </div>
      )}

      {/* Linha 2: subtitle — metadados */}
      {subtitleVal && (
        <div className="text-xs text-gray-500 dark:text-[#64748B] mb-2 truncate">
          {subtitleVal}
        </div>
      )}

      {/* Linha 3: valor principal + complemento */}
      {(valueVal || valueSubVal) && (
        <div className="flex items-center gap-2 mb-2">
          {valueVal && (
            <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">
              {valueVal}
            </span>
          )}
          {valueSubVal && (
            <span className="text-xs text-gray-400 dark:text-[#64748B]">
              {valueSubVal}
            </span>
          )}
        </div>
      )}

      {/* Linha 4: status + rodapé */}
      {hasFooterRow && (
        <div className="flex items-center justify-between gap-2">
          {statusVal && (
            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${statusCls}`}>
              {statusVal}
            </span>
          )}
          {footerVal && (
            <span className="text-xs text-gray-400 dark:text-[#64748B] flex items-center gap-1 flex-shrink-0 ml-auto">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {footerVal}
            </span>
          )}
        </div>
      )}
    </button>
  );
}
