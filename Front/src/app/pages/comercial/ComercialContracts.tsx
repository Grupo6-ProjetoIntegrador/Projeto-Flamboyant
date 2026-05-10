import { useState, useMemo, useEffect } from "react";
import {
  Search, Filter, ChevronRight, CheckCircle,
  Clock, RefreshCw, Eye, Download, Building2, TrendingUp,
  ArrowUpRight, ArrowDownRight, Sparkles
} from "lucide-react";
import { allLojistas } from "../../data/comercialData";
import { getGeneratedContracts, subscribe } from "../../data/comercialStore";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista, StatusContrato } from "../../data/comercialData";

const STATUS_COLORS: Record<StatusContrato, string> = {
  Ativo: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  "Em Renovação": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
  Vencendo: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
  Vencido: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
};

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function ComercialContracts() {
  const [tick, setTick] = useState(0);
  const refresh = () => setTick(t => t + 1);

  useEffect(() => {
    const unsub = subscribe(refresh);
    return unsub;
  }, []);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("Todos");
  const [filterPiso, setFilterPiso] = useState<string>("Todos");
  const [filterSegmento, setFilterSegmento] = useState<string>("Todos");
  const [sortField, setSortField] = useState<"nome" | "valorAluguel" | "diasRestantes" | "desempenho">("nome");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selectedLojista, setSelectedLojista] = useState<Lojista | null>(null);

  const lojistasComContrato = useMemo(
    () => allLojistas.filter(l => l.status === 'Ocupado' && l.contratoAtivo),
    []
  );

  // Include generated contracts as extra "virtual" lojistas
  const generatedContracts = useMemo(() => getGeneratedContracts(), [tick]);

  // Merge into a unified view
  const allContracts = useMemo(() => {
    // Map generated contracts back to lojista format for display
    const genItems = generatedContracts.map(gc => {
      const base = gc.lojistaId ? allLojistas.find(l => l.id === gc.lojistaId) : null;
      return {
        id: gc.id,
        nome: gc.lojista,
        unidade: gc.unidade,
        segmento: gc.segmento,
        piso: (gc.unidade.startsWith('L1') ? 'L1' : gc.unidade.startsWith('L2') ? 'L2' : 'L3') as 'L1'|'L2'|'L3',
        corredor: 'A' as 'A'|'B'|'C',
        area: gc.area,
        contratoAtivo: {
          id: gc.id,
          inicio: gc.inicio,
          fim: gc.fim,
          valorAluguel: gc.valorAluguel,
          luvas: gc.luvas,
          percentualFaturamento: gc.percentualFaturamento,
          indiceReajuste: gc.indiceReajuste,
          tipo: gc.tipo,
          desempenho: gc.desempenho,
          diasRestantes: gc.diasRestantes,
          status: gc.status,
        },
        isGenerated: true,
        lojistaRef: base,
      };
    });
    return { lojistasList: lojistasComContrato, genList: genItems };
  }, [lojistasComContrato, generatedContracts, tick]);

  const filtered = useMemo(() => {
    return allContracts.lojistasList.filter(l => {
      const matchSearch =
        l.nome.toLowerCase().includes(search.toLowerCase()) ||
        l.unidade.toLowerCase().includes(search.toLowerCase()) ||
        l.contratoAtivo!.id.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "Todos" || l.contratoAtivo!.status === filterStatus;
      const matchPiso = filterPiso === "Todos" || l.piso === filterPiso;
      const matchSeg = filterSegmento === "Todos" || l.segmento === filterSegmento;
      return matchSearch && matchStatus && matchPiso && matchSeg;
    }).sort((a, b) => {
      let av: number | string, bv: number | string;
      if (sortField === "nome") { av = a.nome; bv = b.nome; }
      else if (sortField === "valorAluguel") { av = a.contratoAtivo!.valorAluguel; bv = b.contratoAtivo!.valorAluguel; }
      else if (sortField === "diasRestantes") { av = a.contratoAtivo!.diasRestantes; bv = b.contratoAtivo!.diasRestantes; }
      else { av = a.contratoAtivo!.desempenho; bv = b.contratoAtivo!.desempenho; }
      if (typeof av === 'string') return sortDir === "asc" ? av.localeCompare(bv as string) : (bv as string).localeCompare(av);
      return sortDir === "asc" ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
  }, [allContracts, search, filterStatus, filterPiso, filterSegmento, sortField, sortDir]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { Ativo: 0, "Em Renovação": 0, Vencendo: 0, Vencido: 0 };
    allContracts.lojistasList.forEach(l => { map[l.contratoAtivo!.status] = (map[l.contratoAtivo!.status] || 0) + 1; });
    return map;
  }, [allContracts]);

  const totalReceita = useMemo(
    () => allContracts.lojistasList.reduce((s, l) => s + l.contratoAtivo!.valorAluguel, 0),
    [allContracts]
  );

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const SortIcon = ({ field }: { field: typeof sortField }) => (
    sortField === field ? (
      sortDir === "asc" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
    ) : null
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Contratos Ativos</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Gestão e monitoramento de contratos.</p>
        </div>
        <button className="inline-flex items-center gap-2 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <Download className="w-4 h-4" /> Exportar Lista
        </button>
      </div>

      {/* Generated contracts banner */}
      {generatedContracts.length > 0 && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-xl p-4 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-green-800 dark:text-green-400">
              {generatedContracts.length} contrato{generatedContracts.length > 1 ? 's' : ''} gerado{generatedContracts.length > 1 ? 's' : ''} automaticamente (RF-03)
            </p>
            <p className="text-xs text-green-700 dark:text-green-500">
              {generatedContracts.map(c => `${c.lojista} (${c.unidade})`).join(' · ')}
            </p>
          </div>
        </div>
      )}

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Ativos", value: counts["Ativo"], color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
          { label: "Em Renovação", value: counts["Em Renovação"], color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Vencendo <60d", value: counts["Vencendo"], color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/20" },
          { label: "Vencidos", value: counts["Vencido"], color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/20" },
        ].map(({ label, value, color, bg }) => (
          <div key={label} className={`${bg} rounded-xl p-4`}>
            <p className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">{label}</p>
            <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
          </div>
        ))}
        <div className="bg-[#8B1A1A]/10 dark:bg-[#8B1A1A]/20 rounded-xl p-4">
          <p className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Receita Mensal</p>
          <p className="text-base font-bold text-[#D93030] mt-1">{fmt(totalReceita)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar lojista, unidade ou contrato..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-900 dark:text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:border-[#D93030]" />
        </div>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Em Renovação">Em Renovação</option>
          <option value="Vencendo">Vencendo</option>
          <option value="Vencido">Vencido</option>
        </select>
        <select value={filterPiso} onChange={e => setFilterPiso(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Pisos</option>
          <option value="L1">Piso L1</option>
          <option value="L2">Piso L2</option>
          <option value="L3">Piso L3</option>
        </select>
        <select value={filterSegmento} onChange={e => setFilterSegmento(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Segmentos</option>
          {["Moda","Alimentação","Serviços","Eletrônicos","Esportes","Entretenimento","Outros"].map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={() => { setSearch(""); setFilterStatus("Todos"); setFilterPiso("Todos"); setFilterSegmento("Todos"); }}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <RefreshCw className="w-4 h-4" /> Limpar
        </button>
      </div>

      {/* Contracts Table — RF-04, RF-07 */}
      <div className="bg-white dark:bg-[#242938] rounded-xl shadow-sm border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">{filtered.length} contratos exibidos</span>
          <Filter className="w-4 h-4 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("nome")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Lojista <SortIcon field="nome" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Contrato</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Segmento</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("valorAluguel")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Aluguel <SortIcon field="valorAluguel" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("diasRestantes")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Vencimento <SortIcon field="diasRestantes" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("desempenho")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Desempenho <SortIcon field="desempenho" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Ação</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {filtered.slice(0, 50).map((lojista) => {
                const c = lojista.contratoAtivo!;
                const STATUS_COLORS_MAP: Record<string, string> = {
                  Ativo: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
                  "Em Renovação": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
                  Vencendo: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
                  Vencido: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
                };
                return (
                  <tr key={lojista.id}
                    className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                    onClick={() => setSelectedLojista(lojista as any)}>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#D93030]/10 dark:bg-[#D93030]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-4 h-4 text-[#D93030]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{lojista.nome}</p>
                          <p className="text-xs text-gray-500 dark:text-[#64748B]">{lojista.unidade} · {lojista.piso}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-xs text-gray-500 dark:text-[#94A3B8]">{c.id}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-xs text-gray-600 dark:text-[#94A3B8]">{lojista.segmento}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{fmt(c.valorAluguel)}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <p className="text-xs text-gray-500 dark:text-[#94A3B8]">{c.fim}</p>
                      <p className={`text-xs font-medium ${c.diasRestantes<=30?'text-red-500':c.diasRestantes<=60?'text-orange-500':'text-gray-400 dark:text-[#475569]'}`}>
                        {c.diasRestantes} dias — RF-10
                      </p>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 dark:bg-[#2E3447] rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full ${c.desempenho>=90?'bg-green-500':c.desempenho>=75?'bg-blue-500':c.desempenho>=60?'bg-orange-500':'bg-red-500'}`}
                            style={{ width: `${c.desempenho}%` }} />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-[#94A3B8]">{c.desempenho}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS_MAP[c.status] || ''}`}>{c.status}</span>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-right">
                      <button onClick={e => { e.stopPropagation(); setSelectedLojista(lojista as any); }}
                        className="inline-flex items-center gap-1 text-[#D93030] hover:text-[#b92828] text-sm font-medium">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length > 50 && (
          <div className="px-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] text-center">
            <p className="text-xs text-gray-500 dark:text-[#64748B]">Exibindo 50 de {filtered.length} contratos.</p>
          </div>
        )}
      </div>

      {selectedLojista && <LojistProfileModal lojista={selectedLojista} onClose={() => setSelectedLojista(null)} />}
    </div>
  );
}