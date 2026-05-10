import { useState, useMemo, useEffect } from "react";
import {
  Search, Clock, CheckCircle, FileText,
  RefreshCw, Calendar, ChevronDown, ChevronUp, Eye, Building2
} from "lucide-react";
import { allLojistas, propostasAtivas } from "../../data/comercialData";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import { subscribe } from "../../data/comercialStore";
import type { Lojista } from "../../data/comercialData";

interface HistoricoEvent {
  id: string;
  data: string;
  sortKey: string;
  tipo: "Proposta" | "Contrato" | "Renovação" | "Readequação";
  titulo: string;
  descricao: string;
  lojista: string;
  unidade: string;
  valor?: number;
  status: string;
  lojistaObj?: Lojista;
}

const TIPO_CFG: Record<string, { color: string; bg: string }> = {
  Proposta:    { color: "text-blue-600 dark:text-blue-400",   bg: "bg-blue-100 dark:bg-blue-900/30" },
  Contrato:    { color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  Renovação:   { color: "text-teal-600 dark:text-teal-400",   bg: "bg-teal-100 dark:bg-teal-900/30" },
  Readequação: { color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
};

const STATUS_COLORS: Record<string, string> = {
  Aceita:         "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  Ativo:          "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  Pendente:       "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400",
  "Em Negociação":"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
  "Em Análise":   "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400",
  Recusada:       "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
  Expirada:       "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400",
  Vencendo:       "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
  Vencido:        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
};

function fmtCurrency(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function toSortKey(dateStr: string): string {
  const [d, m, y] = dateStr.split("/");
  if (!d || !m || !y) return "0000-00-00";
  return `${y}-${m}-${d}`;
}

const TIPO_ICON: Record<string, any> = {
  Contrato: CheckCircle,
  Proposta: FileText,
  Renovação: RefreshCw,
  Readequação: Clock,
};

export function ComercialHistory() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const u = subscribe(() => setTick(t => t + 1)); return u; }, []);

  const [search, setSearch] = useState("");
  const [filterTipo, setFilterTipo] = useState("Todos");
  const [filterPiso, setFilterPiso] = useState("Todos");
  const [dateFrom, setDateFrom] = useState("2019-01-01");
  const [dateTo, setDateTo] = useState("2026-04-30");
  const [showCount, setShowCount] = useState(40);
  const [selectedLojista, setSelectedLojista] = useState<Lojista | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allEvents = useMemo<HistoricoEvent[]>(() => {
    const events: HistoricoEvent[] = [];

    allLojistas.forEach(lojista => {
      if (lojista.status !== "Ocupado") return;

      if (lojista.contratoAtivo) {
        const c = lojista.contratoAtivo;
        events.push({
          id: `ctr-${c.id}`,
          data: c.inicio,
          sortKey: toSortKey(c.inicio),
          tipo: "Contrato",
          titulo: `Contrato iniciado — ${lojista.nome}`,
          descricao: `${c.id} · ${c.tipo} · Aluguel: ${fmtCurrency(c.valorAluguel)}/mês · ${c.indiceReajuste} · Vigência: ${c.inicio} a ${c.fim}`,
          lojista: lojista.nome,
          unidade: lojista.unidade,
          valor: c.valorAluguel,
          status: c.status,
          lojistaObj: lojista,
        });
      }

      lojista.propostas.forEach(p => {
        const tipo: HistoricoEvent["tipo"] =
          p.tipo === "Renovação" ? "Renovação" :
          p.tipo === "Readequação" ? "Readequação" : "Proposta";
        events.push({
          id: `proph-${p.id}`,
          data: p.data,
          sortKey: toSortKey(p.data),
          tipo,
          titulo: `${p.tipo} — ${lojista.nome}`,
          descricao: p.observacao || `Proposta de ${p.tipo.toLowerCase()} para ${lojista.unidade}.`,
          lojista: lojista.nome,
          unidade: lojista.unidade,
          valor: p.valor,
          status: p.status,
          lojistaObj: lojista,
        });
      });
    });

    propostasAtivas
      .filter(p => !p.lojistaId)
      .forEach(p => {
        const tipo: HistoricoEvent["tipo"] =
          p.tipo === "Renovação" ? "Renovação" :
          p.tipo === "Readequação" ? "Readequação" : "Proposta";
        events.push({
          id: `prop-${p.id}`,
          data: p.dataCriacao,
          sortKey: toSortKey(p.dataCriacao),
          tipo,
          titulo: `${p.tipo} — ${p.lojista}`,
          descricao: p.observacoes || `Nova proposta para unidade ${p.unidade}.`,
          lojista: p.lojista,
          unidade: p.unidade,
          valor: p.valorProposto,
          status: p.status,
        });
      });

    return events.sort((a, b) => b.sortKey.localeCompare(a.sortKey));
  }, [tick]);

  const filtered = useMemo(() => {
    const from = new Date(dateFrom + "T00:00:00");
    const to = new Date(dateTo + "T23:59:59");
    return allEvents.filter(e => {
      const parts = e.data.split("/");
      let inPeriod = true;
      if (parts.length === 3) {
        const eDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T12:00:00`);
        if (!isNaN(eDate.getTime())) inPeriod = eDate >= from && eDate <= to;
      }
      const matchSearch =
        e.lojista.toLowerCase().includes(search.toLowerCase()) ||
        e.titulo.toLowerCase().includes(search.toLowerCase()) ||
        e.unidade.toLowerCase().includes(search.toLowerCase());
      const matchTipo = filterTipo === "Todos" || e.tipo === filterTipo;
      const matchPiso = filterPiso === "Todos" || e.unidade.startsWith(filterPiso);
      return inPeriod && matchSearch && matchTipo && matchPiso;
    });
  }, [allEvents, search, filterTipo, filterPiso, dateFrom, dateTo]);

  const counts = useMemo(() => ({
    Contrato: allEvents.filter(e => e.tipo === "Contrato").length,
    Proposta: allEvents.filter(e => e.tipo === "Proposta").length,
    Renovação: allEvents.filter(e => e.tipo === "Renovação").length,
    Readequação: allEvents.filter(e => e.tipo === "Readequação").length,
  }), [allEvents]);

  const MONTH_NAMES: Record<string, string> = {
    "01": "Janeiro", "02": "Fevereiro", "03": "Março", "04": "Abril",
    "05": "Maio", "06": "Junho", "07": "Julho", "08": "Agosto",
    "09": "Setembro", "10": "Outubro", "11": "Novembro", "12": "Dezembro",
  };

  const groupedByMonth = useMemo(() => {
    const map: Record<string, HistoricoEvent[]> = {};
    filtered.slice(0, showCount).forEach(e => {
      const [, m, y] = e.data.split("/");
      if (!y || !m) return;
      const key = `${y}-${m}`;
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return Object.entries(map).sort(([a], [b]) => b.localeCompare(a));
  }, [filtered, showCount]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Histórico Comercial</h1>
        <p className="text-gray-500 dark:text-[#94A3B8] mt-1">
          Linha do tempo completa — contratos, propostas e renovações.
        </p>
      </div>

      {/* Period Selector */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-[#D93030]" />
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">Filtro por Período</span>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 dark:text-[#64748B]">De</label>
            <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 dark:text-[#64748B]">Até</label>
            <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {[
              { label: "1 mês", from: "2026-03-23" },
              { label: "3 meses", from: "2026-01-23" },
              { label: "6 meses", from: "2025-10-23" },
              { label: "1 ano", from: "2025-04-23" },
              { label: "2 anos", from: "2024-04-23" },
              { label: "Tudo", from: "2019-01-01" },
            ].map(q => (
              <button key={q.label}
                onClick={() => { setDateFrom(q.from); setDateTo("2026-04-30"); }}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${dateFrom === q.from ? "bg-[#D93030] text-white border-[#D93030]" : "border-gray-200 dark:border-[#2E3447] text-gray-600 dark:text-[#94A3B8] hover:border-[#D93030]"}`}>
                {q.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar lojista, unidade..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-900 dark:text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:border-[#D93030]" />
        </div>
        <select value={filterTipo} onChange={e => setFilterTipo(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Tipos ({allEvents.length})</option>
          <option value="Contrato">Contratos ({counts.Contrato})</option>
          <option value="Proposta">Propostas ({counts.Proposta})</option>
          <option value="Renovação">Renovações ({counts.Renovação})</option>
          <option value="Readequação">Readequações ({counts.Readequação})</option>
        </select>
        <select value={filterPiso} onChange={e => setFilterPiso(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Pisos</option>
          <option value="L1">Piso L1</option>
          <option value="L2">Piso L2</option>
          <option value="L3">Piso L3</option>
        </select>
        <button onClick={() => { setSearch(""); setFilterTipo("Todos"); setFilterPiso("Todos"); setDateFrom("2019-01-01"); setDateTo("2026-04-30"); }}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <RefreshCw className="w-4 h-4" /> Limpar
        </button>
      </div>

      <p className="text-xs text-gray-400 dark:text-[#64748B]">
        {filtered.length} evento{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""} no período
      </p>

      {/* Timeline */}
      <div className="space-y-8">
        {groupedByMonth.length === 0 && (
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-12 text-center">
            <Search className="w-10 h-10 mx-auto mb-3 text-gray-300 dark:text-[#3E4557]" />
            <p className="text-sm text-gray-500 dark:text-[#64748B]">Nenhum evento encontrado no período ou filtros selecionados</p>
          </div>
        )}
        {groupedByMonth.map(([yearMonth, events]) => {
          const [year, month] = yearMonth.split("-");
          return (
            <div key={yearMonth}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-[#8B1A1A]/10 dark:bg-[#8B1A1A]/30 px-3 py-1.5 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-[#D93030]" />
                  <span className="text-sm font-semibold text-[#8B1A1A] dark:text-[#E04444]">
                    {MONTH_NAMES[month] || month} {year}
                  </span>
                </div>
                <div className="flex-1 h-px bg-gray-200 dark:bg-[#2E3447]" />
                <span className="text-xs text-gray-400 dark:text-[#64748B]">{events.length} evento{events.length !== 1 ? "s" : ""}</span>
              </div>
              <div className="relative ml-4">
                <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-200 dark:bg-[#2E3447]" />
                <div className="space-y-3">
                  {events.map(event => {
                    const cfg = TIPO_CFG[event.tipo] || TIPO_CFG.Proposta;
                    const Icon = TIPO_ICON[event.tipo] || FileText;
                    const isExpanded = expandedId === event.id;
                    return (
                      <div key={event.id} className="relative pl-10">
                        <div className={`absolute left-0 top-3 w-7 h-7 rounded-full ${cfg.bg} flex items-center justify-center border-2 border-white dark:border-[#1E2435]`}>
                          <Icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                        </div>
                        <div className="bg-white dark:bg-[#242938] border border-gray-100 dark:border-[#2E3447] rounded-xl overflow-hidden">
                          <button
                            className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors"
                            onClick={() => setExpandedId(isExpanded ? null : event.id)}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{event.titulo}</span>
                                  {event.status && (
                                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${STATUS_COLORS[event.status] || "bg-gray-100 text-gray-600"}`}>
                                      {event.status}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 mt-1 flex-wrap text-xs text-gray-500 dark:text-[#64748B]">
                                  <Building2 className="w-3 h-3" />
                                  <span>{event.lojista}</span>
                                  <span>·</span>
                                  <span>{event.unidade}</span>
                                  {event.valor !== undefined && (
                                    <>
                                      <span>·</span>
                                      <span className="font-semibold text-gray-700 dark:text-[#F1F5F9]">{fmtCurrency(event.valor)}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-xs text-gray-400 dark:text-[#64748B]">{event.data}</span>
                                {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                              </div>
                            </div>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 border-t border-gray-100 dark:border-[#2E3447] pt-3">
                              <p className="text-sm text-gray-600 dark:text-[#94A3B8] leading-relaxed mb-3">{event.descricao}</p>
                              {event.lojistaObj && (
                                <button
                                  onClick={() => setSelectedLojista(event.lojistaObj!)}
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D93030] hover:text-[#b92828] transition-colors"
                                >
                                  <Eye className="w-3.5 h-3.5" /> Ver perfil completo do lojista
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showCount < filtered.length && (
        <div className="text-center pt-2">
          <button onClick={() => setShowCount(c => c + 40)}
            className="inline-flex items-center gap-2 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] rounded-xl px-6 py-2.5 text-sm font-medium transition-colors">
            <ChevronDown className="w-4 h-4" /> Carregar mais ({filtered.length - showCount} restantes)
          </button>
        </div>
      )}

      {selectedLojista && <LojistProfileModal lojista={selectedLojista} onClose={() => setSelectedLojista(null)} />}
    </div>
  );
}
