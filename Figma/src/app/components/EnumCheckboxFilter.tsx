import type { EnumOption } from '../enums';
import { toOptionItems } from '../enums';

interface EnumCheckboxFilterProps {
  label: string;
  options: readonly EnumOption[];
  selected: string[];
  onToggle: (value: string) => void;
  /** Função opcional que retorna a contagem a ser exibida ao lado do label */
  getCount?: (value: string) => number;
  /** Classes tailwind para o grid mobile. Padrão: "grid-cols-2" */
  mobileGrid?: string;
}

/**
 * Grupo de checkboxes gerado automaticamente a partir de um enumerador.
 *
 * Uso:
 *   <EnumCheckboxFilter
 *     label="Segmento"
 *     options={SEGMENTOS}
 *     selected={filtroSegmentos}
 *     onToggle={v => toggle(v)}
 *   />
 *
 * Para enums com labels separados (ex: Piso), passe objetos {value, label}:
 *   options={PISOS.map(p => ({ value: p.value, label: p.labelShort }))}
 */
export function EnumCheckboxFilter({
  label,
  options,
  selected,
  onToggle,
  getCount,
  mobileGrid = 'grid-cols-2',
}: EnumCheckboxFilterProps) {
  const items = toOptionItems(options);

  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto sm:px-6 pb-2 sm:pb-0">
      <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">{label}</span>
      <div className={`grid ${mobileGrid} sm:flex sm:flex-wrap sm:items-center gap-x-4 gap-y-2 sm:gap-3 sm:min-h-[36px]`}>
        {items.map(({ value, label: itemLabel }) => (
          <label key={value} className="flex items-center gap-1.5 cursor-pointer select-none">
            <div
              onClick={() => onToggle(value)}
              className={`w-4 h-4 border border-gray-400 dark:border-[#64748B] flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                ${selected.includes(value)
                  ? 'bg-white dark:bg-[#1A1F2E] text-gray-900 dark:text-[#F1F5F9]'
                  : 'bg-white dark:bg-[#1A1F2E]'
                }`}
            >
              {selected.includes(value) && 'X'}
            </div>
            <span className="text-xs text-gray-700 dark:text-[#CBD5E1] leading-tight">
              {itemLabel}{getCount !== undefined && ` (${getCount(value)})`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
