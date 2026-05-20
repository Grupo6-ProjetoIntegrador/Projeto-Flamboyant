import { ChevronLeft, ChevronRight } from "lucide-react";

export function MobileCarousel({
  index,
  total,
  onPrev,
  onNext,
  children,
  title,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex flex-col h-full">
      {(title || total > 1) && (
        <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
          {title && (
            <span className="text-xs font-semibold text-gray-500 dark:text-[#94A3B8] uppercase tracking-wide">
              {title}
            </span>
          )}
          {total > 1 && (
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={onPrev}
                disabled={index === 0}
                className="w-7 h-7 rounded-full border border-gray-200 dark:border-[#2E3447] flex items-center justify-center disabled:opacity-30 hover:border-[#D93030] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-gray-500 dark:text-[#94A3B8]" />
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: total }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all ${
                      i === index
                        ? 'w-4 h-1.5 bg-[#D93030]'
                        : 'w-1.5 h-1.5 bg-gray-300 dark:bg-[#2E3447]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={onNext}
                disabled={index === total - 1}
                className="w-7 h-7 rounded-full border border-gray-200 dark:border-[#2E3447] flex items-center justify-center disabled:opacity-30 hover:border-[#D93030] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 dark:text-[#94A3B8]" />
              </button>
            </div>
          )}
        </div>
      )}
      <div className="flex-1 px-4 pb-4 min-h-0">
        {children}
      </div>
    </div>
  );
}
