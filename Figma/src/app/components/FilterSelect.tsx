import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  className?: string;
  placeholder?: string;
}

export function FilterSelect({ value, onChange, options, className = "", placeholder }: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find(o => o.value === value)?.label ?? placeholder ?? value;

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`h-9 w-full flex items-center justify-between gap-2 px-3 bg-white dark:bg-[#1A1F2E] border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#B82025]/20 ${
          open
            ? "border-[#B82025] ring-2 ring-[#B82025]/15"
            : "border-[#B82025] hover:border-[#D93030]"
        }`}
      >
        <span className="truncate text-[#333333] dark:text-[#CBD5E1]">{selectedLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#B82025] flex-shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+5px)] left-0 z-[200] min-w-full w-max max-w-[260px] bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg shadow-md overflow-hidden">
          {options.map(option => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => { onChange(option.value); setOpen(false); }}
                className={`w-full text-left flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors ${
                  isSelected
                    ? "text-[#B82025] font-semibold bg-[#B82025]/6 dark:bg-[#B82025]/10"
                    : "text-[#333333] dark:text-[#CBD5E1] hover:bg-[#D93030] hover:text-white"
                }`}
              >
                <span className="truncate">{option.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#B82025]" strokeWidth={2.5} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
