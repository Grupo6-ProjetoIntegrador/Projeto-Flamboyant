import { useEffect, useMemo, useState } from "react";
import { PISO_LABEL } from "../enums";
import type { Piso } from "../enums";
import type { Unidade } from "../data/apiClient";

type UnidadePlanta = Unidade & {
  status?: string;
};

type SlotPosition = {
  x: number;
  y: number;
  w: number;
  h: number;
};

const FLOOR_CONFIG: Array<{ value: Piso; label: string; slots: number }> = [
  { value: "P", label: PISO_LABEL.P, slots: 70 },
  { value: "S", label: PISO_LABEL.S, slots: 70 },
  { value: "T", label: PISO_LABEL.T, slots: 60 },
];

const THIRD_FLOOR_OMITTED_SLOTS = new Set([5, 13, 22, 30, 39, 47, 51, 56, 63, 68]);

interface DisponibilidadePlantaViewProps {
  unidades: UnidadePlanta[];
  unidadesComProposta: Set<string>;
  onSelectUnidade: (unidade: UnidadePlanta) => void;
}

function sortUnidades(a: UnidadePlanta, b: UnidadePlanta) {
  return a.codigo.localeCompare(b.codigo, "pt-BR", { numeric: true, sensitivity: "base" });
}

function addRowBetween(
  slots: SlotPosition[],
  count: number,
  xStart: number,
  xEnd: number,
  y: number,
  h: number,
  gap = 0.65,
) {
  const width = (xEnd - xStart - gap * (count - 1)) / count;
  for (let i = 0; i < count; i += 1) {
    slots.push({ x: xStart + i * (width + gap), y, w: width, h });
  }
}

function addColumnBetween(
  slots: SlotPosition[],
  count: number,
  x: number,
  yStart: number,
  yEnd: number,
  w: number,
  gap = 0.9,
) {
  const height = (yEnd - yStart - gap * (count - 1)) / count;
  for (let i = 0; i < count; i += 1) {
    slots.push({ x, y: yStart + i * (height + gap), w, h: height });
  }
}

function buildSlots(): SlotPosition[] {
  const slots: SlotPosition[] = [];

  addRowBetween(slots, 8, 18, 36, 8, 9);
  addRowBetween(slots, 8, 41, 59, 8, 9);
  addRowBetween(slots, 8, 64, 82, 8, 9);

  addRowBetween(slots, 8, 18, 36, 83, 9);
  addRowBetween(slots, 8, 41, 59, 83, 9);
  addRowBetween(slots, 8, 64, 82, 83, 9);

  addColumnBetween(slots, 5, 21, 29, 71, 4.4);
  addColumnBetween(slots, 5, 74.6, 29, 71, 4.4);

  addRowBetween(slots, 3, 30, 43, 30, 9);
  addRowBetween(slots, 3, 57, 70, 30, 9);
  addRowBetween(slots, 3, 30, 43, 61, 9);
  addRowBetween(slots, 3, 57, 70, 61, 9);

  return slots;
}

const SLOT_POSITIONS = buildSlots();

function slotsForFloor(slots: number) {
  if (slots >= SLOT_POSITIONS.length) return SLOT_POSITIONS;
  return SLOT_POSITIONS.filter((_, index) => !THIRD_FLOOR_OMITTED_SLOTS.has(index));
}

export function DisponibilidadePlantaView({
  unidades,
  unidadesComProposta,
  onSelectUnidade,
}: DisponibilidadePlantaViewProps) {
  const availableFloors = useMemo(() => {
    const floorsWithUnits = FLOOR_CONFIG.filter(floor =>
      unidades.some(unidade => unidade.piso === floor.value),
    );
    return floorsWithUnits.length > 0 ? floorsWithUnits : FLOOR_CONFIG;
  }, [unidades]);

  const [selectedFloor, setSelectedFloor] = useState<Piso>(availableFloors[0]?.value ?? "P");

  useEffect(() => {
    if (!availableFloors.some(floor => floor.value === selectedFloor)) {
      setSelectedFloor(availableFloors[0]?.value ?? "P");
    }
  }, [availableFloors, selectedFloor]);

  const floorConfig = FLOOR_CONFIG.find(floor => floor.value === selectedFloor) ?? FLOOR_CONFIG[0];
  const floorSlots = useMemo(() => slotsForFloor(floorConfig.slots), [floorConfig.slots]);

  const unidadesDoPiso = useMemo(
    () => unidades.filter(unidade => unidade.piso === selectedFloor).sort(sortUnidades),
    [unidades, selectedFloor],
  );

  const unidadesPorSlot = useMemo(() => {
    const map = new Map<number, UnidadePlanta>();
    unidadesDoPiso.slice(0, floorSlots.length).forEach((unidade, index) => {
      map.set(index, unidade);
    });
    return map;
  }, [floorSlots.length, unidadesDoPiso]);

  return (
    <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
      <div className="flex-shrink-0 px-4 sm:px-5 py-3 border-b border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {availableFloors.map(floor => (
            <button
              key={floor.value}
              type="button"
              onClick={() => setSelectedFloor(floor.value)}
              className={`h-8 px-3 rounded-lg text-xs font-semibold border transition-colors
                ${selectedFloor === floor.value
                  ? "bg-[#D93030] text-white border-[#D93030]"
                  : "bg-gray-50 dark:bg-[#1A1F2E] text-gray-600 dark:text-[#94A3B8] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]"
                }`}
            >
              {floor.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 dark:text-[#94A3B8]">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-100 border border-emerald-300 dark:bg-emerald-900/30 dark:border-emerald-700" /> Disponivel</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-100 border border-red-400 dark:bg-red-950/40 dark:border-red-700" /> Com proposta</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-white border border-dashed border-gray-300 dark:bg-[#1A1F2E] dark:border-[#3E4557]" /> Fora do filtro</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-auto p-3 sm:p-5 bg-gray-100 dark:bg-[#1A1F2E]">
        <div className="min-w-[1460px] max-w-[1720px] mx-auto">
          <div className="relative aspect-[3.05/1] rounded-xl border border-gray-300 dark:border-[#2E3447] bg-[#FDFBF8] dark:bg-[#242938] shadow-sm overflow-hidden">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M4 18 H16 V12 H35 V18 H44 V14 H56 V18 H65 V12 H84 V18 H96 V35 H91 V66 H96 V82 H84 V89 H66 V82 H56 V88 H44 V82 H34 V89 H16 V82 H4 V66 H9 V35 H4 Z"
                className="fill-[#F0E8DD] stroke-[#8F96A3] dark:fill-[#1A1F2E] dark:stroke-[#1A1F2E]"
                strokeWidth="0.45"
              />
              <path
                d="M12 43 H25 L29 35 H37 L40 43 H60 L63 35 H71 L75 43 H88 V58 H75 L71 66 H63 L60 58 H40 L37 66 H29 L25 58 H12 Z"
                className="fill-[#FFFDF8] stroke-[#AEB4BF] dark:fill-[#242938] dark:stroke-[#242938]"
                strokeWidth="0.25"
              />
              <path
                d="M18 46 H82 M18 54 H82 M50 18 V82"
                stroke="currentColor"
                className="text-gray-400 dark:text-[#2E3447]"
                strokeWidth="0.38"
                strokeDasharray="1 1.6"
              />
              <circle cx="33" cy="75" r="7" fill="none" stroke="currentColor" className="text-gray-400 dark:text-[#3E4557]" strokeWidth="0.55" />
              <circle cx="67" cy="75" r="7" fill="none" stroke="currentColor" className="text-gray-400 dark:text-[#3E4557]" strokeWidth="0.55" />
            </svg>

            <div className="absolute left-[5%] top-[24%] w-[11%] h-[42%] rounded-lg border-2 border-gray-400 dark:border-[#3E4557] bg-[#F4F1EA] dark:bg-[#1A1F2E] flex items-center justify-center">
              <span className="text-sm font-bold text-gray-500 dark:text-[#64748B]">ANCORA</span>
            </div>
            <div className="absolute left-[43%] top-[42%] w-[14%] h-[16%] rounded-lg border-2 border-gray-400 dark:border-[#3E4557] bg-[#F4F1EA] dark:bg-[#1A1F2E] flex items-center justify-center">
              <span className="text-sm font-bold text-gray-500 dark:text-[#64748B]">ANCORA</span>
            </div>
            <div className="absolute right-[5%] top-[24%] w-[11%] h-[42%] rounded-lg border-2 border-gray-400 dark:border-[#3E4557] bg-[#F4F1EA] dark:bg-[#1A1F2E] flex items-center justify-center">
              <span className="text-sm font-bold text-gray-500 dark:text-[#64748B]">ANCORA</span>
            </div>

            {floorSlots.map((slot, index) => {
              const unidade = unidadesPorSlot.get(index);
              const comProposta = !!unidade && unidadesComProposta.has(unidade.id);

              if (!unidade) {
                return (
                  <div
                    key={`placeholder-${index}`}
                    className="absolute rounded-sm border border-dashed border-gray-400 dark:border-[#3E4557] bg-white/90 dark:bg-[#1A1F2E]/70"
                    style={{ left: `${slot.x}%`, top: `${slot.y}%`, width: `${slot.w}%`, height: `${slot.h}%` }}
                  />
                );
              }

              return (
                <button
                  key={unidade.id}
                  type="button"
                  onClick={() => onSelectUnidade(unidade)}
                  title={`${unidade.codigo} - ${unidade.area} m2`}
                  className={`absolute rounded-sm border px-1 text-center transition-all hover:z-20 hover:scale-105 hover:shadow-lg focus-visible:z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D93030]/35
                    ${comProposta
                      ? "border-red-500 bg-red-100 text-red-900 dark:border-red-700 dark:bg-red-950/50 dark:text-red-100"
                      : "border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-100"
                    }`}
                  style={{ left: `${slot.x}%`, top: `${slot.y}%`, width: `${slot.w}%`, height: `${slot.h}%` }}
                >
                  <span className="block truncate text-[10px] font-bold leading-tight font-mono">{unidade.codigo}</span>
                  <span className="hidden 2xl:block truncate text-[8px] leading-tight opacity-70">{unidade.area} m2</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
