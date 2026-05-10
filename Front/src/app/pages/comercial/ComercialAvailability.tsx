import { useState, useMemo } from "react";
import {
  Building2, MapPin, Search, Eye, CheckCircle, XCircle,
  ChevronRight, Info, Layers, RefreshCw, Clock, History
} from "lucide-react";
import { allLojistas } from "../../data/comercialData";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista } from "../../data/comercialData";

type Piso = "L1" | "L2" | "L3";
type Corredor = "A" | "B" | "C";

const PISO_LABELS: Record<Piso, string> = {
  L1: "Piso 1 — Lojas Populares",
  L2: "Piso 2 — Lojas Classe Média",
  L3: "Piso 3 — Lojas Elite & Luxo",
};

const PISO_CLASS_BADGE: Record<Piso, { label: string; className: string }> = {
  L1: { label: "Popular", className: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
  L2: { label: "Classe Média", className: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
  L3: { label: "Elite & Luxo", className: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" },
};

const PISO_DESCRIPTIONS: Record<Piso, string> = {
  L1: "Marcas acessíveis, fast fashion, esportes e serviços essenciais — para o público geral.",
  L2: "Marcas intermediárias premium, eletrônicos, beleza e entretenimento — experiência elevada.",
  L3: "Marcas de alto padrão e luxo como Apple, Rolex, Tiffany — segmento VIP do shopping.",
};

const CORREDOR_LABELS: Record<Piso, Record<Corredor, string>> = {
  L1: { A: "Corredor A — Moda Popular & Fast Fashion", B: "Corredor B — Esportes & Fitness", C: "Corredor C — Serviços & Bancos" },
  L2: { A: "Corredor A — Eletrônicos & Tech", B: "Corredor B — Moda Premium & Beleza", C: "Corredor C — Entretenimento & Lazer" },
  L3: { A: "Corredor A — Gastronomia Premium", B: "Corredor B — Moda Luxo & Joalheria", C: "Corredor C — Varejo Exclusivo" },
};

// RF-09: History of unit occupations
function UnitHistoryPanel({ lojista, onClose }: { lojista: Lojista; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-lg border border-gray-100 dark:border-[#2E3447] max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70">Histórico de Ocupações</p>
            <h3 className="text-base font-bold text-white">{lojista.unidade}</h3>
            <p className="text-sm text-white/80">Piso {lojista.piso} · Corredor {lojista.corredor} · {lojista.area} m²</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center">
            <XCircle className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          {lojista.status === 'Disponível' && (
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/30 rounded-lg p-3 text-sm text-orange-700 dark:text-orange-400">
              Esta unidade está atualmente <strong>disponível para locação</strong>.
            </div>
          )}
          {lojista.status === 'Ocupado' && lojista.contratoAtivo && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2">Contrato Atual</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-gray-500 dark:text-[#64748B]">Lojista: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.nome}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Contrato: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.contratoAtivo.id}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Início: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.contratoAtivo.inicio}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Fim: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.contratoAtivo.fim}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Aluguel: </span><span className="font-semibold text-[#D93030]">{lojista.contratoAtivo.valorAluguel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Desempenho: </span><span className="font-semibold text-gray-900 dark:text-[#F1F5F9]">{lojista.contratoAtivo.desempenho}%</span></div>
              </div>
            </div>
          )}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-[#64748B] uppercase tracking-wider mb-3">Propostas Históricas desta Unidade</p>
            {lojista.propostas.length === 0 ? (
              <p className="text-sm text-gray-400 dark:text-[#64748B] text-center py-4">Nenhuma proposta registrada</p>
            ) : (
              <div className="space-y-2">
                {lojista.propostas.map(p => (
                  <div key={p.id} className="flex items-center justify-between bg-gray-50 dark:bg-[#242938] rounded-lg px-3 py-2.5">
                    <div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-[#F1F5F9]">{p.tipo}</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">{p.data} · {p.observacao || '—'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{p.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === 'Aceita' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : p.status === 'Recusada' || p.status === 'Expirada' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function UnitBlock({
  lojista,
  onSelect,
  onProfile,
}: {
  lojista: Lojista;
  onSelect: (l: Lojista) => void;
  onProfile: (l: Lojista) => void;
}) {
  const isDisponivel = lojista.status === "Disponível";
  const contrato = lojista.contratoAtivo;
  // Orange dot: < 60 days to expire (not 90)
  const isVencendoBreve = contrato && contrato.diasRestantes < 60;

  return (
    <button
      onClick={() => onSelect(lojista)}
      className={`
        group relative text-left rounded-xl border-2 p-3 transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.99] min-w-0
        ${isDisponivel
          ? "bg-white dark:bg-[#1A1F2E] border-dashed border-[#D93030]/40 dark:border-[#D93030]/40 hover:border-[#D93030]"
          : "bg-[#D93030]/10 dark:bg-[#D93030]/15 border-[#D93030]/25 dark:border-[#D93030]/30 hover:bg-[#D93030]/15 dark:hover:bg-[#D93030]/20 hover:border-[#D93030]/50"
        }
      `}
    >
      {/* Orange alert dot: < 60 days */}
      {isVencendoBreve && !isDisponivel && (
        <div
          className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-[#1E2435] z-10"
          title={`Contrato vence em ${contrato!.diasRestantes} dias`}
        />
      )}

      <div className="flex items-start justify-between gap-1">
        <div className="min-w-0 flex-1">
          {isDisponivel ? (
            <>
              <p className="text-xs font-bold text-[#D93030]">DISPONÍVEL</p>
              <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5">{lojista.unidade}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{lojista.area} m²</p>
            </>
          ) : (
            <>
              <p className="text-xs font-bold text-[#8B1A1A] dark:text-[#F87171] truncate leading-tight">{lojista.nome || lojista.unidade}</p>
              <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-0.5">{lojista.unidade}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{lojista.area} m²</p>
            </>
          )}
        </div>
        {!isDisponivel && (
          <button
            onClick={e => { e.stopPropagation(); onProfile(lojista); }}
            className="w-6 h-6 rounded-md bg-white/80 dark:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-white dark:hover:bg-black/50 transition-all flex-shrink-0"
            title="Ver perfil completo"
          >
            <Eye className="w-3 h-3 text-[#D93030]" />
          </button>
        )}
      </div>
    </button>
  );
}

export function ComercialAvailability() {
  const [activePiso, setActivePiso] = useState<Piso>("L1");
  const [filterSegmento, setFilterSegmento] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [search, setSearch] = useState("");
  const [selectedLojista, setSelectedLojista] = useState<Lojista | null>(null);
  const [profileLojista, setProfileLojista] = useState<Lojista | null>(null);
  const [historyLojista, setHistoryLojista] = useState<Lojista | null>(null);

  const pisoData = useMemo(() => {
    const corridores: Record<Corredor, Lojista[]> = { A: [], B: [], C: [] };
    allLojistas.filter(l => l.piso === activePiso).forEach(l => { corridores[l.corredor].push(l); });
    return corridores;
  }, [activePiso]);

  const filteredPisoData = useMemo(() => {
    const filter = (list: Lojista[]) => list.filter(l => {
      const matchSeg = filterSegmento === "Todos" || l.segmento === filterSegmento;
      const matchStatus = filterStatus === "Todos" || l.status === filterStatus;
      const matchSearch = !search || l.nome.toLowerCase().includes(search.toLowerCase()) || l.unidade.toLowerCase().includes(search.toLowerCase());
      return matchSeg && matchStatus && matchSearch;
    });
    return { A: filter(pisoData.A), B: filter(pisoData.B), C: filter(pisoData.C) };
  }, [pisoData, filterSegmento, filterStatus, search]);

  const globalStats = useMemo(() => {
    const total = allLojistas.length;
    const disponiveis = allLojistas.filter(l => l.status === "Disponível").length;
    const ocupadas = total - disponiveis;
    // RF-10: < 60 days
    const vencendoBreve = allLojistas.filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes < 60).length;
    return { total, disponiveis, ocupadas, vencendoBreve };
  }, []);

  const pisoStats = useMemo(() => {
    const s = (piso: Piso) => {
      const arr = allLojistas.filter(l => l.piso === piso);
      return { total: arr.length, ocupadas: arr.filter(l => l.status === "Ocupado").length, disponiveis: arr.filter(l => l.status === "Disponível").length };
    };
    return { L1: s("L1"), L2: s("L2"), L3: s("L3") };
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Disponibilidade de Unidades</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Planta do shopping por pisos e corredores.</p>
        </div>
        <div className="flex items-center gap-4 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#D93030]/10 border-2 border-dashed border-[#D93030]/50" />
            <span className="text-gray-600 dark:text-[#94A3B8]">Disponível ({globalStats.disponiveis})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#D93030]/10 border border-[#D93030]/25" />
            <span className="text-gray-600 dark:text-[#94A3B8]">Ocupado ({globalStats.ocupadas})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-gray-600 dark:text-[#94A3B8]">&lt;60 dias ({globalStats.vencendoBreve}) — RF-10</span>
          </div>
        </div>
      </div>

      {/* Piso summary cards */}
      <div className="grid grid-cols-3 gap-4">
        {(["L1", "L2", "L3"] as Piso[]).map(piso => {
          const s = pisoStats[piso];
          const taxa = Math.round((s.ocupadas / s.total) * 100);
          return (
            <button
              key={piso}
              onClick={() => setActivePiso(piso)}
              className={`rounded-xl p-4 border-2 transition-all text-left ${activePiso === piso ? 'border-[#D93030] bg-[#D93030]/5 dark:bg-[#D93030]/10' : 'border-transparent bg-white dark:bg-[#242938] hover:border-gray-300 dark:hover:border-[#3E4557]'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-lg font-bold ${activePiso === piso ? 'text-[#D93030]' : 'text-gray-900 dark:text-[#F1F5F9]'}`}>{piso}</span>
                <Layers className={`w-4 h-4 ${activePiso === piso ? 'text-[#D93030]' : 'text-gray-400'}`} />
              </div>
              <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">{s.ocupadas} / {s.total} ocupadas</p>
              <div className="w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-1.5">
                <div className="bg-[#D93030] h-1.5 rounded-full" style={{ width: `${taxa}%` }} />
              </div>
              <p className="text-xs font-semibold text-gray-700 dark:text-[#94A3B8] mt-1">{taxa}% ocupado · {s.disponiveis} livres</p>
              <span className={`mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium ${PISO_CLASS_BADGE[piso].className}`}>
                {PISO_CLASS_BADGE[piso].label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-40 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar lojista ou unidade..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-900 dark:text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:border-[#D93030]"
          />
        </div>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos</option>
          <option value="Disponível">Disponíveis</option>
          <option value="Ocupado">Ocupadas</option>
        </select>
        <select value={filterSegmento} onChange={e => setFilterSegmento(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Segmentos</option>
          {["Moda", "Alimentação", "Serviços", "Eletrônicos", "Esportes", "Entretenimento", "Outros"].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <button onClick={() => { setSearch(""); setFilterStatus("Todos"); setFilterSegmento("Todos"); }}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <RefreshCw className="w-4 h-4" /> Limpar
        </button>
      </div>

      {/* Floor plan */}
      <div className="bg-white dark:bg-[#242938] rounded-2xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-[#8B1A1A]/10 to-[#D93030]/10 dark:from-[#8B1A1A]/20 dark:to-[#D93030]/20 border-b border-gray-100 dark:border-[#2E3447]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D93030] rounded-lg flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900 dark:text-[#F1F5F9]">{PISO_LABELS[activePiso]}</h2>
                <p className="text-xs text-gray-500 dark:text-[#94A3B8]">
                  {pisoStats[activePiso].ocupadas} ocupadas · {pisoStats[activePiso].disponiveis} disponíveis
                </p>
              </div>
            </div>
            <div className="flex gap-1 bg-gray-100 dark:bg-[#1A1F2E] rounded-lg p-1">
              {(["L1", "L2", "L3"] as Piso[]).map(p => (
                <button key={p} onClick={() => setActivePiso(p)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activePiso === p ? 'bg-[#D93030] text-white shadow-sm' : 'text-gray-600 dark:text-[#94A3B8] hover:bg-gray-200 dark:hover:bg-[#2E3447]'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Class description banner */}
          <div className={`rounded-xl p-4 border flex items-start gap-3 ${
            activePiso === 'L1' ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-700/30' :
            activePiso === 'L2' ? 'bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-700/30' :
            'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-700/30'
          }`}>
            <span className={`text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0 ${PISO_CLASS_BADGE[activePiso].className}`}>
              {PISO_CLASS_BADGE[activePiso].label}
            </span>
            <p className={`text-xs leading-relaxed ${
              activePiso === 'L1' ? 'text-blue-700 dark:text-blue-400' :
              activePiso === 'L2' ? 'text-purple-700 dark:text-purple-400' :
              'text-yellow-700 dark:text-yellow-400'
            }`}>{PISO_DESCRIPTIONS[activePiso]}</p>
          </div>
          {(["A", "B", "C"] as Corredor[]).map(corredor => {
            const units = filteredPisoData[corredor];
            const totalCorredor = pisoData[corredor].length;
            const availableCount = pisoData[corredor].filter(l => l.status === "Disponível").length;
            const expiringCount = pisoData[corredor].filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes < 60).length;

            return (
              <div key={corredor}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#C8A882]/30 dark:bg-[#C8A882]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#8B1A1A] dark:text-[#C8A882]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
                        {CORREDOR_LABELS[activePiso][corredor]}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-[#64748B] flex-wrap">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />{totalCorredor - availableCount} ocupadas
                        </span>
                        <span className="flex items-center gap-1">
                          <XCircle className="w-3 h-3 text-[#D93030]" />{availableCount} disponíveis
                        </span>
                        {expiringCount > 0 && (
                          <span className="flex items-center gap-1 text-orange-500">
                            <Clock className="w-3 h-3" />{expiringCount} vencendo &lt;60d
                          </span>
                        )}
                        <span>({units.length} exibidas)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {units.length === 0 ? (
                  <div className="text-center py-6 text-gray-400 dark:text-[#64748B] text-sm bg-gray-50 dark:bg-[#1A1F2E] rounded-xl">
                    Nenhuma unidade encontrada com os filtros atuais
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2.5">
                    {units.map(lojista => (
                      <UnitBlock
                        key={lojista.id}
                        lojista={lojista}
                        onSelect={setSelectedLojista}
                        onProfile={setProfileLojista}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
        <p className="text-xs font-semibold text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider mb-3 flex items-center gap-2">
          <Info className="w-3.5 h-3.5" /> Legenda
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-600 dark:text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#D93030]/10 border-2 border-[#D93030]/25" />
            <span>Unidade Ocupada</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-white dark:bg-[#1A1F2E] border-2 border-dashed border-[#D93030]/40" />
            <span>Disponível (RF-11)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-lg bg-[#D93030]/10 border-2 border-[#D93030]/25">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border border-white dark:border-[#242938]" />
            </div>
            <span>Contrato vencendo em &lt;60 dias (RF-10)</span>
          </div>
        </div>
      </div>

      {/* Unit detail modal */}
      {selectedLojista && !profileLojista && (
        <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-4 sm:p-6" onClick={() => setSelectedLojista(null)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-[#2E3447]"
            onClick={e => e.stopPropagation()}>
            <div className={`px-5 py-4 rounded-t-2xl ${selectedLojista.status === 'Disponível' ? 'bg-gradient-to-r from-gray-600 to-gray-700' : 'bg-gradient-to-r from-[#8B1A1A] to-[#D93030]'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                    {selectedLojista.status === 'Disponível' ? 'DISPONÍVEL' : 'OCUPADO'}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {selectedLojista.status === 'Disponível' ? `Unidade ${selectedLojista.unidade}` : selectedLojista.nome}
                  </h3>
                  <p className="text-sm text-white/80">{selectedLojista.unidade} · {selectedLojista.piso} / Corredor {selectedLojista.corredor}</p>
                </div>
                <button onClick={() => setSelectedLojista(null)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Segmento</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{selectedLojista.segmento}</p>
                </div>
                <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Área</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{selectedLojista.area} m²</p>
                </div>
                <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Corredor</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{selectedLojista.corredor}</p>
                </div>
              </div>
              {selectedLojista.contratoAtivo && (
                <div className={`${selectedLojista.contratoAtivo.diasRestantes < 60 ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700/30' : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700/30'} border rounded-lg p-3 mb-4`}>
                  <p className={`text-xs font-medium mb-1 ${selectedLojista.contratoAtivo.diasRestantes < 60 ? 'text-orange-700 dark:text-orange-400' : 'text-green-700 dark:text-green-400'}`}>
                    {selectedLojista.contratoAtivo.diasRestantes < 60 ? `⚠ Contrato vence em ${selectedLojista.contratoAtivo.diasRestantes} dias` : 'Contrato Ativo'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">
                      {selectedLojista.contratoAtivo.valorAluguel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}/mês
                    </span>
                    <span className="text-xs text-gray-500 dark:text-[#94A3B8]">até {selectedLojista.contratoAtivo.fim}</span>
                  </div>
                </div>
              )}
              {selectedLojista.status === 'Disponível' && (
                <div className="bg-[#D93030]/10 border border-[#D93030]/30 rounded-lg p-3 mb-4">
                  <p className="text-xs font-medium text-[#D93030] mb-1">Unidade Livre para Locação (RF-11)</p>
                  <p className="text-xs text-gray-600 dark:text-[#94A3B8]">Unidade de {selectedLojista.area} m² disponível para novas propostas.</p>
                </div>
              )}
              <div className="flex gap-2">
                <button onClick={() => { setHistoryLojista(selectedLojista); setSelectedLojista(null); }}
                  className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-3 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <History className="w-4 h-4" /> Histórico
                </button>
                {selectedLojista.status === 'Ocupado' && (
                  <button onClick={() => { setProfileLojista(selectedLojista); setSelectedLojista(null); }}
                    className="flex-1 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" /> Ver Perfil
                  </button>
                )}
                {selectedLojista.status === 'Disponível' && (
                  <button className="flex-1 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <ChevronRight className="w-4 h-4" /> Criar Proposta
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {historyLojista && <UnitHistoryPanel lojista={historyLojista} onClose={() => setHistoryLojista(null)} />}
      {profileLojista && <LojistProfileModal lojista={profileLojista} onClose={() => setProfileLojista(null)} />}
    </div>
  );
}