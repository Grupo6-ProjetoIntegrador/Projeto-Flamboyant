import { useState, useRef, useEffect } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerInputProps {
  value: string; // YYYY-MM-DD or ""
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const WEEKDAYS_PT = ["D", "S", "T", "Q", "Q", "S", "S"];

function parseISO(iso: string): Date | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function toISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDisplay(iso: string): string {
  const d = parseISO(iso);
  if (!d) return "";
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekday(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function parseBR(text: string): string | null {
  // Aceita DD/MM/AAAA ou DD/MM/AA
  const clean = text.replace(/\D/g, '');
  if (clean.length < 8) return null;
  const d = parseInt(clean.slice(0, 2));
  const m = parseInt(clean.slice(2, 4));
  let y = parseInt(clean.slice(4, 8));
  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2100) return null;
  const date = new Date(y, m - 1, d);
  if (date.getMonth() !== m - 1) return null; // dia inválido (ex: 31/02)
  return toISO(date);
}

function maskBR(text: string): string {
  // Aplica máscara DD/MM/AAAA enquanto o usuário digita
  const digits = text.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export function DatePickerInput({ value, onChange, placeholder = "DD/MM/AAAA", className = "" }: DatePickerInputProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = parseISO(value);
  const today = new Date();

  const [viewYear, setViewYear] = useState(() => selected?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => selected?.getMonth() ?? today.getMonth());
  const [inputText, setInputText] = useState(() => value ? formatDisplay(value) : '');

  // Sync view to selected date when value changes externally
  useEffect(() => {
    if (selected) {
      setViewYear(selected.getFullYear());
      setViewMonth(selected.getMonth());
      setInputText(formatDisplay(value));
    } else {
      setInputText('');
    }
  }, [value]);

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

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function selectDay(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    onChange(toISO(d));
    setOpen(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const masked = maskBR(e.target.value);
    setInputText(masked);
    // Se atingiu 10 chars (DD/MM/AAAA), tentar converter
    if (masked.length === 10) {
      const iso = parseBR(masked);
      if (iso) {
        onChange(iso);
        setOpen(false);
      }
    }
  }

  function handleInputBlur() {
    if (inputText.length === 10) {
      const iso = parseBR(inputText);
      if (iso) {
        onChange(iso);
      } else {
        // Data inválida — resetar para o valor atual
        setInputText(value ? formatDisplay(value) : '');
      }
    } else if (inputText === '') {
      onChange('');
    } else {
      // Incompleto — resetar
      setInputText(value ? formatDisplay(value) : '');
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const iso = parseBR(inputText);
      if (iso) {
        onChange(iso);
        setOpen(false);
      }
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstWeekday = getFirstWeekday(viewYear, viewMonth);
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  const isToday = (day: number) =>
    today.getDate() === day && today.getMonth() === viewMonth && today.getFullYear() === viewYear;

  const isSelected = (day: number) =>
    selected?.getDate() === day && selected?.getMonth() === viewMonth && selected?.getFullYear() === viewYear;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Input trigger */}
      <div className={`h-9 flex items-center gap-2 px-3 bg-white dark:bg-[#1A1F2E] border rounded-xl transition-all ${
        open
          ? "border-[#D93030] ring-2 ring-[#D93030]/15"
          : "border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]/50"
      }`}>
        <input
          type="text"
          value={inputText}
          placeholder={placeholder}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          onFocus={() => setOpen(false)}
          maxLength={10}
          className="flex-1 text-xs bg-transparent outline-none text-gray-800 dark:text-[#CBD5E1] placeholder-gray-400 dark:placeholder-[#475569] min-w-0"
        />
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <CalendarDays
            className={`w-3.5 h-3.5 transition-colors ${open ? "text-[#D93030]" : "text-gray-400 dark:text-[#64748B]"}`}
            strokeWidth={1.8}
          />
        </button>
      </div>

      {/* Calendar panel */}
      {open && (
        <div
          className="absolute top-[calc(100%+6px)] left-0 z-[300] w-64 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-gray-100 dark:border-[#2E3447] bg-[#D93030]/5 dark:bg-[#D93030]/10">
            <button
              onClick={prevMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#D93030]/10 dark:hover:bg-[#D93030]/20 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-[#D93030]" strokeWidth={2} />
            </button>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {MONTHS_PT[viewMonth]} {viewYear}
            </span>
            <button
              onClick={nextMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#D93030]/10 dark:hover:bg-[#D93030]/20 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-[#D93030]" strokeWidth={2} />
            </button>
          </div>

          <div className="p-2">
            {/* Weekday labels */}
            <div className="grid grid-cols-7 mb-1">
              {WEEKDAYS_PT.map((d, i) => (
                <div key={i} className="h-7 flex items-center justify-center text-xs font-semibold text-gray-400 dark:text-[#64748B]">
                  {d}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-y-0.5">
              {Array.from({ length: totalCells }, (_, i) => {
                const day = i - firstWeekday + 1;
                const valid = day >= 1 && day <= daysInMonth;

                if (!valid) {
                  return <div key={i} />;
                }

                const sel = isSelected(day);
                const tod = isToday(day);

                return (
                  <button
                    key={i}
                    onClick={() => selectDay(day)}
                    className={`h-8 w-full flex items-center justify-center rounded-lg text-xs font-medium transition-colors ${
                      sel
                        ? "bg-[#D93030] text-white"
                        : tod
                        ? "border border-[#D93030] text-[#D93030] hover:bg-[#D93030]/10"
                        : "text-gray-700 dark:text-[#CBD5E1] hover:bg-[#D93030]/10 hover:text-[#D93030]"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clear action */}
          {value && (
            <div className="px-3 pb-2.5 pt-0">
              <button
                onClick={() => { onChange(""); setOpen(false); }}
                className="w-full text-xs text-gray-400 dark:text-[#64748B] hover:text-[#D93030] transition-colors text-center py-1"
              >
                Limpar data
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
