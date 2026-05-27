import type { ReactNode, ComponentType } from "react";
import { Filter, ChevronDown, LayoutGrid, Table2 } from "lucide-react";
import { DatePickerInput } from "./DatePickerInput";

// ── TableLayoutContainer + TableLayoutItem ─────────────────

const TL_GAP: Record<number, string> = {
  2: 'gap-2', 3: 'gap-3', 4: 'gap-4', 6: 'gap-6', 8: 'gap-8',
};

const TL_COLS: Record<number, string> = {
  1: 'grid-cols-1',  2: 'grid-cols-2',  3: 'grid-cols-3',  4: 'grid-cols-4',
  5: 'grid-cols-5',  6: 'grid-cols-6',  7: 'grid-cols-7',  8: 'grid-cols-8',
  9: 'grid-cols-9',  10: 'grid-cols-10',
};

const TL_ROWS: Record<number, string> = {
  1: 'grid-rows-1',  2: 'grid-rows-2',  3: 'grid-rows-3',  4: 'grid-rows-4',
  5: 'grid-rows-5',  6: 'grid-rows-6',  7: 'grid-rows-7',  8: 'grid-rows-8',
  9: 'grid-rows-9',  10: 'grid-rows-10',
};

const TL_COL_SPAN: Record<number, string> = {
  1: 'col-span-1',  2: 'col-span-2',  3: 'col-span-3',  4: 'col-span-4',
  5: 'col-span-5',  6: 'col-span-6',  7: 'col-span-7',  8: 'col-span-8',
  9: 'col-span-9',  10: 'col-span-10',
};

const TL_ROW_SPAN: Record<number, string> = {
  1: 'row-span-1',  2: 'row-span-2',  3: 'row-span-3',  4: 'row-span-4',
  5: 'row-span-5',  6: 'row-span-6',  7: 'row-span-7',  8: 'row-span-8',
  9: 'row-span-9',  10: 'row-span-10',
};

interface TableLayoutContainerProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gap?: 2 | 3 | 4 | 6 | 8;
  className?: string;
}

export function TableLayoutContainer({
  children,
  cols,
  rows,
  gap = 4,
  className = '',
}: TableLayoutContainerProps) {
  const colsClass = cols ? TL_COLS[cols] : 'grid-flow-col auto-cols-fr';
  const rowsClass = rows ? TL_ROWS[rows] : '';
  return (
    <div className={`hidden sm:grid flex-1 min-h-0 w-full content-stretch ${colsClass} ${rowsClass} ${TL_GAP[gap] ?? 'gap-4'} ${className}`}>
      {children}
    </div>
  );
}

interface TableLayoutItemProps {
  children: ReactNode;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  className?: string;
}

export function TableLayoutItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  className = '',
}: TableLayoutItemProps) {
  return (
    <div className={`${TL_COL_SPAN[colSpan] ?? 'col-span-1'} ${TL_ROW_SPAN[rowSpan] ?? 'row-span-1'} flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
}

// ── DesktopRender / MobileRender ───────────────────────────

type DisplayValue = 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline';

const SM_DISPLAY: Record<DisplayValue, string> = {
  block:        'sm:block',
  flex:         'sm:flex',
  'inline-flex':'sm:inline-flex',
  grid:         'sm:grid',
  inline:       'sm:inline',
};

interface ResponsiveRenderProps {
  children: ReactNode;
  className?: string;
  display?: DisplayValue;
}

export function DesktopRender({ children, className = '', display = 'block' }: ResponsiveRenderProps) {
  return <div className={`hidden ${SM_DISPLAY[display]} ${className}`}>{children}</div>;
}

export function MobileRender({ children, className = '' }: Omit<ResponsiveRenderProps, 'display'>) {
  return <div className={`sm:hidden ${className}`}>{children}</div>;
}

// ── PageShell ──────────────────────────────────────────────
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full overflow-hidden gap-4 p-6">
      {children}
    </div>
  );
}

// ── FilterBar ──────────────────────────────────────────────
interface FilterBarProps {
  isOpen: boolean;
  onToggle: () => void;
  hasActiveFilters?: boolean;
  children: ReactNode;
}

export function FilterBar({ isOpen, onToggle, hasActiveFilters, children }: FilterBarProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="sm:hidden flex-shrink-0 w-full flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447]"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#D93030]" />
          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Filtros</span>
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-[#D93030]" />
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`}
        />
      </button>
      <div className={`flex-shrink-0 flex-col sm:flex-row sm:items-stretch sm:justify-start gap-0
        ${isOpen ? 'flex' : 'hidden sm:flex'}
        bg-white dark:bg-[#242938] sm:bg-transparent sm:dark:bg-transparent
        rounded-xl sm:rounded-none
        border border-gray-100 dark:border-[#2E3447] sm:border-0
        p-3 sm:p-0`}>
        {children}
      </div>
    </>
  );
}

// ── FilterSeparator ────────────────────────────────────────
export function FilterSeparator() {
  return (
    <>
      <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
      <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />
    </>
  );
}

// ── FilterDateRange ────────────────────────────────────────
interface FilterDateRangeProps {
  label: string;
  from: string;
  to: string;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
}

export function FilterDateRange({ label, from, to, onFromChange, onToChange }: FilterDateRangeProps) {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto sm:pr-6 pb-2 sm:pb-0">
      <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">{label}</span>
      <div className="flex items-center gap-1.5 h-9">
        <DatePickerInput value={from} onChange={onFromChange} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
        <span className="text-xs text-gray-400 dark:text-[#64748B] whitespace-nowrap flex-shrink-0">até</span>
        <DatePickerInput value={to} onChange={onToChange} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
      </div>
    </div>
  );
}

// ── MobileExpandableSection ────────────────────────────────
interface MobileExpandableSectionProps {
  icon: ComponentType<{ className?: string }>;
  iconClassName?: string;
  title: string;
  badge?: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  grow?: boolean;
  hiddenOnDesktop?: boolean;
  borderClassName?: string;
  contentClassName?: string;
}

export function MobileExpandableSection({
  icon: Icon,
  iconClassName = 'text-[#D93030]',
  title,
  badge,
  isOpen,
  onToggle,
  children,
  grow = true,
  hiddenOnDesktop = true,
  borderClassName = 'border-gray-100 dark:border-[#2E3447]',
  contentClassName = 'flex-1 overflow-y-auto px-4 pb-4',
}: MobileExpandableSectionProps) {
  return (
    <div className={`${hiddenOnDesktop ? 'sm:hidden ' : ''}bg-white dark:bg-[#242938] rounded-xl border ${borderClassName} overflow-hidden flex flex-col ${grow && isOpen ? 'flex-1 min-h-0' : 'flex-shrink-0'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left flex-shrink-0"
      >
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${iconClassName}`} />
          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{title}</span>
          {badge}
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
      </button>
      {isOpen && (
        <div className={`border-t ${borderClassName} ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}

// ── ViewModeToggle ─────────────────────────────────────────
import { ViewMode } from "../enums";

interface ViewModeToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export function ViewModeToggle({ value, onChange }: ViewModeToggleProps) {
  return (
    <div className="hidden sm:flex items-center gap-1">
      <button
        onClick={() => onChange(ViewMode.Cards)}
        className={`h-8 px-2.5 rounded-l-lg border text-xs font-medium flex items-center gap-1.5 transition-colors
          ${value === ViewMode.Cards ? 'bg-[#D93030] text-white border-[#D93030]' : 'bg-white dark:bg-[#1A1F2E] text-gray-600 dark:text-[#94A3B8] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]'}`}
      >
        <LayoutGrid className="w-3.5 h-3.5" /> Cards
      </button>
      <button
        onClick={() => onChange(ViewMode.Tabela)}
        className={`h-8 px-2.5 rounded-r-lg border-t border-r border-b text-xs font-medium flex items-center gap-1.5 transition-colors
          ${value === ViewMode.Tabela ? 'bg-[#D93030] text-white border-[#D93030]' : 'bg-white dark:bg-[#1A1F2E] text-gray-600 dark:text-[#94A3B8] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]'}`}
      >
        <Table2 className="w-3.5 h-3.5" /> Tabela
      </button>
    </div>
  );
}
