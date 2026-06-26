import { Check, Minus } from 'lucide-react';

interface StyledCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md';
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'w-3.5 h-3.5 rounded',
  md: 'w-4 h-4 rounded-md',
};

const ICON_CLASSES = {
  sm: 'w-2.5 h-2.5',
  md: 'w-3 h-3',
};

export function StyledCheckbox({
  checked,
  indeterminate = false,
  disabled = false,
  size = 'md',
  ariaLabel,
  onClick,
  className = '',
}: StyledCheckboxProps) {
  const active = checked || indeterminate;

  return (
    <button
      type="button"
      role="checkbox"
      aria-label={ariaLabel}
      aria-checked={indeterminate ? 'mixed' : checked}
      disabled={disabled}
      onClick={disabled ? undefined : (event) => {
        event.stopPropagation();
        onClick?.();
      }}
      className={`${SIZE_CLASSES[size]} inline-flex flex-shrink-0 items-center justify-center border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D93030]/35 focus-visible:ring-offset-1 dark:focus-visible:ring-offset-[#1E2435]
        ${disabled ? 'cursor-not-allowed opacity-45' : 'cursor-pointer'}
        ${checked
          ? 'border-[#D93030] bg-[#D93030] text-white shadow-sm shadow-[#D93030]/20'
          : indeterminate
            ? 'border-[#D93030] bg-[#D93030]/10 text-[#D93030] dark:bg-[#D93030]/20'
            : 'border-gray-300 bg-white text-transparent hover:border-[#D93030] hover:bg-red-50 dark:border-[#3E4557] dark:bg-[#1A1F2E] dark:hover:border-[#E04444] dark:hover:bg-[#D93030]/10'
        } ${className}`}
    >
      {checked && <Check className={ICON_CLASSES[size]} strokeWidth={3} />}
      {!checked && indeterminate && <Minus className={ICON_CLASSES[size]} strokeWidth={3} />}
      {!active && <span className="block w-1.5 h-1.5 rounded-full bg-current opacity-0" />}
    </button>
  );
}
