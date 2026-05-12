import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Store, FileText, AlertCircle, Percent,
  ChevronRight, BarChart2, RefreshCw, Calendar, Info
} from "lucide-react";
import { FilterSelect } from "../../components/FilterSelect";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
//import { lojistasAPI } from "../../data/comercialData";
import { getProposals, subscribe } from "../../data/comercialStore";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista } from "../../data/comercialData";

const DS = {
  primary: "#D93030",
  dark:    "#8B1A1A",
  blue:    "#3B82F6",
  green:   "#10B981",
  amber:   "#F59E0B",
  gold:    "#C8A882",
  tick:    "#94A3B8",
  grid:    "#e5e7eb",
} as const;

const PIE_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];
const CHART_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];

const SEGMENTOS = ["Moda", "Alimentação", "Serviços", "Eletrônicos", "Esportes", "Entretenimento", "Outros"];
const PISOS = ["P", "S", "T"] as const;
const PISO_LABELS: Record<string, string> = { P: "Primeiro Piso", S: "Segundo Piso", T: "Terceiro Piso" };

const TODAY = new Date("2026-04-23");

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function PieTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="bg-[#1E2435] text-[#F1F5F9] rounded-xl p-3 text-xs shadow-2xl border border-[#2E3447]">
      <p className="font-semibold mb-1" style={{ color: item.payload?.fill }}>{item.name}</p>
      <p className="text-[#94A3B8]">{item.value} loja{item.value !== 1 ? "s" : ""}</p>
    </div>
  );
}

function BarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1E2435] text-[#F1F5F9] rounded-xl p-3 text-xs shadow-2xl border border-[#2E3447] min-w-[120px]">
      <p className="font-semibold mb-2 pb-1.5 border-b border-[#2E3447]" style={{ color: DS.gold }}>{label}</p>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center justify-between gap-4">
          <span style={{ color: entry.color }}>{entry.name}</span>
          <span className="font-semibold">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}


export function ComercialDashboard() {
  const navigate = useNavigate();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const u = subscribe(() => setTick(t => t + 1));
    return u;
  }, []);

  // --- ADICIONE ESTE BLOCO AQUI ---
  const [lojistasAPI, setLojistasAPI] = useState<Lojista[]>([]);

  useEffect(() => {
    fetch("http://localhost:8082/lojistas")
      .then(res => res.json())
      .then(data => {
        const formatado = data.map((l: any) => {
          let contratoFormatado = undefined;
          if (l.contratoAtivo && l.contratoAtivo.id) {
            contratoFormatado = {
              id: l.contratoAtivo.id,
              inicio: l.contratoAtivo.inicio,
              fim: l.contratoAtivo.fim,
              valorAluguel: l.contratoAtivo.valor_aluguel,
              luvas: l.contratoAtivo.luvas,
              percentualFaturamento: l.contratoAtivo.percentual_faturamento,
              indiceReajuste: l.contratoAtivo.indice_reajuste,
              tipo: l.contratoAtivo.tipo,
              desempenho: l.contratoAtivo.desempenho,
              diasRestantes: l.contratoAtivo.dias_restantes,
              status: l.contratoAtivo.status
            };
          }
          return {
            ...l,
            nome: l.nome?.String ?? "-",
            cnpj: l.cnpj?.String ?? "-",
            responsavel: l.responsavel?.String ?? "-",
            email: l.email?.String ?? "-",
            telefone: l.telefone?.String ?? "-",
            status_relacionamento: l.status_relacionamento?.String ?? "-",
            contratoAtivo: contratoFormatado
          };
        });
        setLojistasAPI(formatado);
      })
      .catch(err => console.error("Erro ao buscar lojistas:", err));
  }, [tick]);
  // ---------------------------------

  const [filterSegmento, setFilterSegmento] = useState<string>("Todos");
  const [filterPiso, setFilterPiso] = useState<string>("Todos");
  const [profileLojista, setProfileLojista] = useState<Lojista | null>(null);

  const proposals = useMemo(() => getProposals(), [tick]);

  const filteredLojistas = useMemo(() =>
    lojistasAPI.filter(l => {
      if (l.status !== "Ocupado" || !l.contratoAtivo) return false;
      const mS = filterSegmento === "Todos" || l.segmento === filterSegmento;
      const mP = filterPiso === "Todos" || l.piso === filterPiso;
      return mS && mP;
    }), [filterSegmento, filterPiso]);

  const stats = useMemo(() => {
    const total = lojistasAPI.length;
    const ocupadas = lojistasAPI.filter(l => l.status === "Ocupado").length;
    const disponiveis = total - ocupadas;
    const taxa = Math.round((ocupadas / total) * 100);
    const vencendo = lojistasAPI.filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes < 60).length;
    const propostasAtv = proposals.filter(p =>
      ["Aguardando análise financeira", "Aguardando análise do comitê"].includes(p.status)
    ).length;
    return { total, ocupadas, disponiveis, taxa, vencendo, propostasAtv };
  }, [filteredLojistas, proposals, tick]);

  const segmentosChart = useMemo(() => {
    const map: Record<string, number> = {};
    filteredLojistas.forEach(l => { map[l.segmento] = (map[l.segmento] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [filteredLojistas]);

  const pieData = useMemo(() => {
    const map: Record<string, number> = {};
    filteredLojistas.forEach(l => { map[l.segmento] = (map[l.segmento] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [filteredLojistas]);

  const proposalStatusChart = useMemo(() => {
    const STATUS_LIST = [
      { key: "Aguardando análise financeira", label: "Ag. Financeiro" },
      { key: "Aguardando análise do comitê",  label: "Ag. Comitê" },
      { key: "Aprovado",  label: "Aprovado" },
      { key: "Reprovado", label: "Reprovado" },
      { key: "Cancelado", label: "Cancelado" },
    ];
    return STATUS_LIST.map(({ key, label }) => ({
      name: label,
      fullName: key,
      value: proposals.filter(p => p.status === key).length,
    })).filter(d => d.value > 0);
  }, [proposals, tick]);

  const propostasRecentes = useMemo(() => {
    let ps = proposals;
    if (filterSegmento !== "Todos") ps = ps.filter(p => p.segmento === filterSegmento);
    return ps.slice(0, 6);
  }, [proposals, filterSegmento, tick]);

  const contratosVencendo = useMemo(() =>
    lojistasAPI.filter(l => {
      if (!l.contratoAtivo || l.contratoAtivo.diasRestantes >= 60 || l.status !== "Ocupado") return false;
      const mP = filterPiso === "Todos" || l.piso === filterPiso;
      const mS = filterSegmento === "Todos" || l.segmento === filterSegmento;
      return mP && mS;
    }).sort((a, b) => a.contratoAtivo!.diasRestantes - b.contratoAtivo!.diasRestantes).slice(0, 8),
    [filterPiso, filterSegmento]);

  const resetFilters = () => { setFilterSegmento("Todos"); setFilterPiso("Todos"); };
  const hasFilters = filterSegmento !== "Todos" || filterPiso !== "Todos";

  const STATUS_BADGE: Record<string, string> = {
    "Aprovado": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    "Aguardando análise do comitê": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
    "Reprovado": "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
    "Cancelado": "bg-gray-100 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400",
  };

  return (
    <div className="space-y-6">

      {/* Cabeçalho + Filtros */}
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-[#F1F5F9] mr-auto">
          Dashboard Comercial
        </h1>

        <div className="flex items-center gap-2 flex-wrap">
          <FilterSelect
            value={filterSegmento}
            onChange={setFilterSegmento}
            options={[
              { value: "Todos", label: "Todas as Categorias" },
              ...SEGMENTOS.map(s => ({ value: s, label: s })),
            ]}
          />
          <FilterSelect
            value={filterPiso}
            onChange={setFilterPiso}
            options={[
              { value: "Todos", label: "Todos os Pisos" },
              { value: "P", label: "Primeiro Piso" },
              { value: "S", label: "Segundo Piso" },
              { value: "T", label: "Terceiro Piso" },
            ]}
          />
          {hasFilters && (
            <button onClick={resetFilters}
              className="h-9 inline-flex items-center gap-1.5 px-3 text-[#B82025] border border-[#B82025]/30 bg-[#B82025]/5 rounded-xl text-sm font-medium hover:bg-[#B82025]/10 transition-colors">
              <RefreshCw className="w-3.5 h-3.5" /> Limpar
            </button>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
            <Store className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Total de Lojas</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.ocupadas}</span>
            <span className="text-sm text-gray-400">/ {stats.total}</span>
          </div>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{stats.disponiveis} disponíveis</p>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-9 h-9 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
            <Percent className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Taxa de Ocupação</p>
          <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.taxa}%</span>
          <div className="mt-2 w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-1">
            <div className="bg-green-500 h-1 rounded-full transition-all" style={{ width: `${stats.taxa}%` }} />
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-9 h-9 bg-[#D93030]/10 rounded-lg flex items-center justify-center mb-3">
            <FileText className="w-4 h-4 text-[#D93030]" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Propostas Abertas</p>
          <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.propostasAtv}</span>
          <p className="text-xs text-[#D93030] mt-1">aguardando análise</p>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-orange-100 dark:border-orange-700/30 p-5">
          <div className="w-9 h-9 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-3">
            <AlertCircle className="w-4 h-4 text-orange-500 dark:text-orange-400" />
          </div>
          <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">Contratos &lt;60 dias</p>
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.vencendo}</span>
          <p className="text-xs text-gray-400 mt-1">vencimento próximo</p>
        </div>
      </div>

      {/* Gráficos — linha 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[#D93030]" />
            Ocupação por Segmento
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-4">Lojas ocupadas por categoria</p>
          {segmentosChart.length === 0 ? (
            <div className="flex items-center justify-center h-52 text-gray-400 text-xs">
              Sem dados para os filtros selecionados
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: DS.tick, fontSize: 11 }} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: DS.tick, fontSize: 11 }} />
                <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(217,48,48,0.05)" }} />
                <Bar dataKey="value" fill={DS.primary} radius={[4, 4, 0, 0]} barSize={32} name="Lojas" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[#D93030]" />
            Distribuição por Categoria
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-3">Fatia de cada segmento</p>
          {pieData.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={52} innerRadius={24}
                    dataKey="value" paddingAngle={2}>
                    {pieData.map((_, i) => (
                      <Cell key={`pie-cell-${i}`} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-3">
                {pieData.slice(0, 6).map((item, i) => (
                  <div key={`pie-leg-${item.name}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-sm flex-shrink-0"
                        style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                      <span className="text-xs text-gray-500 dark:text-[#94A3B8]">{item.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-800 dark:text-[#F1F5F9]">{item.value}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-gray-400 dark:text-[#64748B] text-xs">
              Sem dados para os filtros
            </div>
          )}
        </div>
      </div>

      {/* Gráficos — linha 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <Info className="w-4 h-4 text-[#D93030]" />
            Ocupação por Piso
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-4">Lojas ocupadas em cada piso</p>
          <div className="h-48 flex items-center justify-center gap-8">
            <ResponsiveContainer width="55%" height="100%">
              <PieChart>
                <Pie
                  data={PISOS.map(p => ({
                    name: PISO_LABELS[p],
                    value: lojistasAPI.filter(l => l.piso === p && l.status === "Ocupado" &&
                      (filterSegmento === "Todos" || l.segmento === filterSegmento)).length,
                  }))}
                  cx="50%" cy="50%" outerRadius={72} innerRadius={38}
                  dataKey="value" paddingAngle={4}
                >
                  {PISOS.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }}
                  formatter={(v: any, n: any) => [`${v} lojas`, n]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2.5">
              {PISOS.map((p, i) => {
                const count = lojistasAPI.filter(l => l.piso === p && l.status === "Ocupado" &&
                  (filterSegmento === "Todos" || l.segmento === filterSegmento)).length;
                return (
                  <div key={p} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                    <span className="text-xs text-gray-500 dark:text-[#94A3B8]">{PISO_LABELS[p]}</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-[#F1F5F9] ml-1">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#D93030]" />
            Status das Propostas
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-4">Distribuição por status atual</p>
          {proposalStatusChart.length > 0 ? (
            <div className="h-48 flex items-center justify-center gap-6">
              <ResponsiveContainer width="50%" height="100%">
                <PieChart>
                  <Pie data={proposalStatusChart} cx="50%" cy="50%" outerRadius={72} dataKey="value" paddingAngle={3}>
                    {proposalStatusChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }}
                    formatter={(v: any, _: any, p: any) => [v, p.payload.fullName]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {proposalStatusChart.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                    <span className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">{item.name}</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-[#F1F5F9] ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-gray-400 dark:text-[#64748B] text-xs">Sem propostas</div>
          )}
        </div>
      </div>

      {/* Propostas de Contratos */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
          <button onClick={() => navigate("/comercial/propostas")} className="flex items-center gap-2 group">
            <FileText className="w-4 h-4 text-[#D93030]" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] group-hover:text-[#D93030] transition-colors">
              Propostas de Contratos
            </h3>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#D93030] transition-colors" />
          </button>
          <span className="text-xs text-gray-400 dark:text-[#64748B]">{proposals.length} no total</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                {["Código", "Lojista", "Unidade", "Tipo", "Criação", "Valor", "Status"].map(h => (
                  <th key={h} className="px-5 py-2.5 text-left text-xs font-medium text-gray-400 dark:text-[#94A3B8] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {propostasRecentes.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-6 text-gray-400 text-sm">Nenhuma proposta encontrada</td></tr>
              ) : propostasRecentes.map(p => (
                <tr key={`prop-${p.id}`}
                  className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                  onClick={() => navigate("/comercial/propostas")}>
                  <td className="px-5 py-3 text-xs font-medium text-gray-700 dark:text-[#F1F5F9] whitespace-nowrap">{p.id}</td>
                  <td className="px-5 py-3 text-sm text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{p.lojista}</td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{p.unidade}</td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{p.tipo}</td>
                  <td className="px-5 py-3 text-xs text-gray-400 whitespace-nowrap">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.dataCriacao}</span>
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(p.valorProposto)}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 inline-flex text-xs font-medium rounded-full ${STATUS_BADGE[p.status] || "bg-gray-100 text-gray-600"}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E]">
          <button onClick={() => navigate("/comercial/propostas")}
            className="text-xs text-[#D93030] hover:text-[#b92828] font-medium flex items-center gap-1 transition-colors">
            Ver todas as propostas <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Contratos Vencendo */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-orange-50/50 dark:bg-orange-900/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Contratos Vencendo</h3>
          </div>
          <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
            {contratosVencendo.length} contrato{contratosVencendo.length !== 1 ? "s" : ""} em &lt;60 dias
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                {["Lojista", "Unidade", "Piso", "Vencimento", "Dias Rest.", "Aluguel"].map(h => (
                  <th key={h} className="px-5 py-2.5 text-left text-xs font-medium text-gray-400 dark:text-[#94A3B8] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {contratosVencendo.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-6 text-gray-400 text-sm">Nenhum contrato vencendo no período filtrado</td></tr>
              ) : contratosVencendo.map(l => (
                <tr key={`ctr-${l.id}`}
                  className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                  onClick={() => setProfileLojista(l)}>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{l.nome}</td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{l.unidade}</td>
                  <td className="px-5 py-3 text-xs whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded-full font-medium ${
                      l.piso === "T" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" :
                      l.piso === "S" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" :
                      "bg-gray-100 dark:bg-[#2E3447] text-gray-600 dark:text-[#94A3B8]"
                    }`}>{PISO_LABELS[l.piso] ?? l.piso}</span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{l.contratoAtivo!.fim}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                      l.contratoAtivo!.diasRestantes <= 30
                        ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
                    }`}>{l.contratoAtivo!.diasRestantes} dias</span>
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(l.contratoAtivo!.valorAluguel)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {profileLojista && (
        <LojistProfileModal lojista={profileLojista} onClose={() => setProfileLojista(null)} />
      )}
    </div>
  );
}
