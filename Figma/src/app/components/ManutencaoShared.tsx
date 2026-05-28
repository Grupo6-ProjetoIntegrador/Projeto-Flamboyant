import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { BadgeColors } from '../enums';
import { DesktopRender, MobileRender } from './PageShared';

// ---------------------------------------------------------------------------
// TabDef — definição de uma aba usada em TabBar e SubTabBar
// ---------------------------------------------------------------------------
export interface TabDef {
  id: string;
  label: string;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// TabBar — abas principais com estilo underline
// Props:
//   tabs          — lista de abas; adicionar/remover aqui reflete automaticamente
//   activeTab     — id da aba ativa
//   onChange      — callback ao clicar em uma aba
//   mobileFallback — se true, exibe <select> em mobile e botões a partir de sm:
// ---------------------------------------------------------------------------
export function TabBar({
  tabs,
  activeTab,
  onChange,
  mobileFallback = false,
}: {
  tabs: TabDef[];
  activeTab: string;
  onChange: (id: string) => void;
  mobileFallback?: boolean;
}) {
  const buttons = (
    <div className="flex px-4 gap-1 overflow-x-auto">
      {tabs.map(aba => (
        <button
          key={aba.id}
          onClick={() => !aba.disabled && onChange(aba.id)}
          className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors
            ${aba.disabled
              ? 'opacity-40 cursor-not-allowed text-gray-400 dark:text-[#64748B] border-transparent'
              : activeTab === aba.id
                ? 'text-[#D93030] dark:text-[#E04444] border-[#D93030] dark:border-[#E04444]'
                : 'text-gray-500 dark:text-[#94A3B8] border-transparent hover:text-gray-800 dark:hover:text-[#F1F5F9]'}`}
        >
          {aba.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex-shrink-0 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
      {mobileFallback && (
        <MobileRender className="px-4 py-2">
          <select
            value={activeTab}
            onChange={e => {
              const aba = tabs.find(a => a.id === e.target.value);
              if (aba && !aba.disabled) onChange(e.target.value);
            }}
            className="w-full h-9 px-3 text-sm font-medium bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]"
          >
            {tabs.map(aba => (
              <option key={aba.id} value={aba.id} disabled={aba.disabled}>
                {aba.label}{aba.disabled ? ' (indisponível)' : ''}
              </option>
            ))}
          </select>
        </MobileRender>
      )}
      {mobileFallback ? <DesktopRender>{buttons}</DesktopRender> : buttons}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SubTabBar — sub-abas com estilo pill/chip
// Props: mesmas de TabBar, sem mobileFallback
// ---------------------------------------------------------------------------
export function SubTabBar({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: TabDef[];
  activeTab: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
      {tabs.map(st => (
        <button
          key={st.id}
          onClick={() => onChange(st.id)}
          className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
            ${activeTab === st.id
              ? 'bg-[#D93030] text-white'
              : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
        >
          {st.label}
        </button>
      ))}
    </div>
  );
}

const BADGE_DEFAULT_COLORS: BadgeColors = {
  bg: 'bg-gray-100 dark:bg-gray-700',
  text: 'text-gray-600 dark:text-gray-400',
  border: 'border-gray-300 dark:border-gray-600',
};

/**
 * Select unificado para valores de enum.
 * - Sem colorMap → select padrão (h-8, bordas arredondadas, estilo Field).
 * - Com colorMap → pill colorida dinamicamente pelo valor selecionado.
 * - allowFilter=true → exibe input de filtro acima do select (requer filterableOptions).
 */
export function EnumSelect({
  label,
  value,
  onChange,
  disabled = false,
  options,
  colorMap,
  placeholder = 'Selecione...',
  className = '',
  allowFilter = false,
  filterableOptions,
  children,
}: {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  options?: readonly string[];
  colorMap?: Record<string, BadgeColors>;
  placeholder?: string;
  className?: string;
  allowFilter?: boolean;
  filterableOptions?: { value: string; label: string }[];
  children?: ReactNode;
}) {
  const [filterText, setFilterText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
        setFilterText('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Combobox com filtro dentro do painel
  if (allowFilter && filterableOptions) {
    const filtered = filterText
      ? filterableOptions.filter(o =>
          o.label.toLowerCase().includes(filterText.toLowerCase()) ||
          o.value.toLowerCase().includes(filterText.toLowerCase())
        )
      : filterableOptions;

    const currentLabel = filterableOptions.find(o => o.value === value)?.label ?? value;

    const combobox = (
      <div ref={containerRef} className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(prev => !prev)}
          className={`h-8 px-2 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg
            ${disabled ? 'bg-gray-50 dark:bg-[#1A1F2E] cursor-not-allowed' : 'bg-white dark:bg-[#242938] cursor-pointer'}
            text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]
            flex items-center gap-2 ${className}`}
        >
          <span className={`flex-1 text-left truncate ${!value ? 'text-gray-400 dark:text-[#64748B]' : ''}`}>
            {value ? currentLabel : placeholder}
          </span>
          <svg className="w-3 h-3 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 z-50 min-w-full w-max max-w-xs bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg shadow-xl overflow-hidden">
            <div className="p-1.5 border-b border-gray-100 dark:border-[#2E3447]">
              <input
                type="text"
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                placeholder="Filtrar..."
                autoFocus
                className="w-full text-xs px-2 py-1 rounded border
                  border-gray-200 dark:border-[#2E3447]
                  bg-gray-50 dark:bg-[#1A1F2E]
                  text-gray-700 dark:text-[#F1F5F9]
                  placeholder:text-gray-300 dark:placeholder:text-[#3E4557]
                  focus:outline-none focus:ring-1 focus:ring-[#D93030] focus:border-[#D93030] transition-colors"
              />
            </div>
            <div className="max-h-52 overflow-y-auto">
              {placeholder && (
                <button
                  type="button"
                  onClick={() => { onChange(''); setIsOpen(false); setFilterText(''); }}
                  className={`w-full text-left px-3 py-1.5 text-sm transition-colors
                    ${!value ? 'bg-red-50 dark:bg-[#D93030]/10 text-[#D93030] font-medium' : 'text-gray-400 dark:text-[#64748B] hover:bg-gray-50 dark:hover:bg-[#2E3447]'}`}
                >
                  {placeholder}
                </button>
              )}
              {filtered.length === 0 ? (
                <p className="text-xs text-gray-400 dark:text-[#64748B] px-3 py-2">Nenhum resultado</p>
              ) : (
                filtered.map(o => (
                  <button
                    key={o.value}
                    type="button"
                    onClick={() => { onChange(o.value); setIsOpen(false); setFilterText(''); }}
                    className={`w-full text-left px-3 py-1.5 text-sm transition-colors
                      ${value === o.value
                        ? 'bg-red-50 dark:bg-[#D93030]/10 text-[#D93030] font-medium'
                        : 'text-gray-800 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#2E3447]'}`}
                  >
                    {o.label}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    );

    if (!label) return combobox;
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">{label}</label>
        {combobox}
      </div>
    );
  }

  // Select nativo (sem filtro)
  const selectContent = children ?? options?.map(o => <option key={o} value={o}>{o}</option>);

  const el = colorMap ? (
    (() => {
      const colors = colorMap[value] ?? BADGE_DEFAULT_COLORS;
      return (
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          className={`text-xs font-semibold px-2.5 py-1.5 rounded-full border focus:outline-none transition-colors
            [&>option]:bg-white [&>option]:dark:bg-[#1E2435] [&>option]:text-gray-900 [&>option]:dark:text-[#F1F5F9]
            disabled:cursor-not-allowed ${colors.bg} ${colors.text} ${colors.border} ${className}`}
        >
          {selectContent}
        </select>
      );
    })()
  ) : (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
      className={`h-8 px-2 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg
        ${disabled ? 'bg-gray-50 dark:bg-[#1A1F2E]' : 'bg-white dark:bg-[#242938]'}
        text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] disabled:cursor-not-allowed
        ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {selectContent}
    </select>
  );

  if (!label) return el;
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">{label}</label>
      {el}
    </div>
  );
}

export function ToolbarBtn({
  icon,
  label,
  onClick,
  disabled = false,
}: {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      title={label}
      className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-lg gap-0.5 transition-colors min-w-0
        ${disabled
          ? 'opacity-40 cursor-not-allowed text-white/40'
          : 'text-white hover:bg-white/15 cursor-pointer'}`}
    >
      <div className="w-4 h-4">{icon}</div>
      <span className="text-[10px] font-medium leading-tight">{label}</span>
    </button>
  );
}

export function ToolbarDivider() {
  return <div className="w-px h-6 bg-white/20 mx-1" />;
}

// ---------------------------------------------------------------------------
// InfoHeaderBar — faixa de metadados abaixo da toolbar
// ---------------------------------------------------------------------------
export function InfoHeaderBar({ children }: { children: ReactNode }) {
  return (
    <div className="flex-shrink-0 grid grid-cols-2 sm:flex sm:items-center sm:gap-6 gap-x-3 gap-y-2 px-4 sm:px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
      {children}
    </div>
  );
}

export function HeaderField({
  label,
  value,
  mono = false,
  colSpanFull = false,
  children,
}: {
  label: string;
  value?: ReactNode;
  mono?: boolean;
  colSpanFull?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-0.5 ${colSpanFull ? 'col-span-2 sm:col-span-1' : ''}`}>
      <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">{label}</span>
      {children ?? (
        <span className={`text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] ${mono ? 'font-mono' : ''}`}>
          {value}
        </span>
      )}
    </div>
  );
}

export function HeaderDivider() {
  return (
    <DesktopRender>
      <div className="w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />
    </DesktopRender>
  );
}

export function ManutencaoToolbar({ children }: { children: ReactNode }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] rounded-t-2xl">
      {children}
    </div>
  );
}

export function ManutencaoModalShell({
  zIndex = 80,
  maxWidth = 'sm:max-w-3xl',
  height = 'min(90vh, 100dvh - 80px)',
  children,
  onBackdropClick,
}: {
  zIndex?: number;
  maxWidth?: string;
  height?: string;
  children: ReactNode;
  onBackdropClick?: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4" style={{ zIndex }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onBackdropClick} />
      <div
        className={`relative z-10 flex flex-col bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full ${maxWidth} overflow-hidden`}
        style={height ? { height } : undefined}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
