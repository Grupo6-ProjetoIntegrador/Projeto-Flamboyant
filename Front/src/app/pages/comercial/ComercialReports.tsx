import { useState, useMemo } from "react";
import {
  Download, Filter, Calendar, CheckSquare, Square, BarChart3,
  FileText, TrendingUp, RefreshCw, Check, ChevronDown,
  Printer, Table, FileSpreadsheet, Activity
} from "lucide-react";
import { allLojistas, propostasAtivas } from "../../data/comercialData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ReportField {
  id: string;
  label: string;
  category: string;
  selected: boolean;
}

const DEFAULT_FIELDS: ReportField[] = [
  // Lojista
  { id: "nome", label: "Nome do Lojista", category: "Lojista", selected: true },
  { id: "cnpj", label: "CNPJ", category: "Lojista", selected: false },
  { id: "segmento", label: "Segmento", category: "Lojista", selected: true },
  { id: "responsavel", label: "Responsável", category: "Lojista", selected: false },
  { id: "email", label: "E-mail", category: "Lojista", selected: false },
  { id: "telefone", label: "Telefone", category: "Lojista", selected: false },
  // Unidade
  { id: "unidade", label: "Unidade", category: "Unidade", selected: true },
  { id: "piso", label: "Piso", category: "Unidade", selected: true },
  { id: "corredor", label: "Corredor", category: "Unidade", selected: false },
  { id: "area", label: "Área (m²)", category: "Unidade", selected: false },
  { id: "status", label: "Status da Unidade", category: "Unidade", selected: true },
  // Contrato
  { id: "contratoId", label: "Código do Contrato", category: "Contrato", selected: false },
  { id: "contratoInicio", label: "Início do Contrato", category: "Contrato", selected: false },
  { id: "contratoFim", label: "Fim do Contrato", category: "Contrato", selected: true },
  { id: "contratoStatus", label: "Status do Contrato", category: "Contrato", selected: true },
  { id: "valorAluguel", label: "Valor do Aluguel", category: "Contrato", selected: true },
  { id: "luvas", label: "Valor das Luvas", category: "Contrato", selected: false },
  { id: "percentualFaturamento", label: "% Faturamento", category: "Contrato", selected: false },
  { id: "indiceReajuste", label: "Índice de Reajuste", category: "Contrato", selected: false },
  { id: "desempenho", label: "Desempenho (%)", category: "Contrato", selected: false },
  { id: "diasRestantes", label: "Dias Restantes", category: "Contrato", selected: false },
  // Financeiro
  { id: "faturamentoMedio", label: "Faturamento Médio", category: "Financeiro", selected: false },
  { id: "receitaPercentual", label: "Receita % Vendas/Mês", category: "Financeiro", selected: false },
  // Relacionamento — removido
];

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${checked ? 'bg-[#D93030] border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557] hover:border-[#D93030]'}`}
    >
      {checked && <Check className="w-3 h-3 text-white" />}
    </button>
  );
}

const CHART_COLORS = ['#D93030', '#C8A882', '#8B1A1A', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'];

export function ComercialReports() {
  const [fields, setFields] = useState<ReportField[]>(DEFAULT_FIELDS);
  const [dateFrom, setDateFrom] = useState("2024-01-01");
  const [dateTo, setDateTo] = useState("2026-04-30");
  const [filterPiso, setFilterPiso] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [filterSegmento, setFilterSegmento] = useState("Todos");
  const [reportType, setReportType] = useState<"contratos" | "multas" | "propostas" | "ocupacao" | "desempenho">("contratos");
  const [showPreview, setShowPreview] = useState(false);
  const [exportFormat, setExportFormat] = useState<"csv" | "pdf" | "xlsx">("xlsx");
  const [showExportMenu, setShowExportMenu] = useState(false);

  const toggleField = (id: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, selected: !f.selected } : f));
  };

  const toggleCategory = (category: string) => {
    const catFields = fields.filter(f => f.category === category);
    const allSelected = catFields.every(f => f.selected);
    setFields(prev => prev.map(f => f.category === category ? { ...f, selected: !allSelected } : f));
  };

  const selectAll = () => setFields(prev => prev.map(f => ({ ...f, selected: true })));
  const clearAll = () => setFields(prev => prev.map(f => ({ ...f, selected: false })));

  const categories = useMemo(() => {
    const cats: Record<string, ReportField[]> = {};
    fields.forEach(f => { if (!cats[f.category]) cats[f.category] = []; cats[f.category].push(f); });
    return cats;
  }, [fields]);

  const selectedFields = fields.filter(f => f.selected);

  // Report data based on filters
  const reportData = useMemo(() => {
    return allLojistas.filter(l => {
      const matchPiso = filterPiso === "Todos" || l.piso === filterPiso;
      const matchStatus = filterStatus === "Todos" || l.status === filterStatus;
      const matchSeg = filterSegmento === "Todos" || l.segmento === filterSegmento;
      return matchPiso && matchStatus && matchSeg;
    });
  }, [filterPiso, filterStatus, filterSegmento]);

  // Charts data
  const segmentosChart = useMemo(() => {
    const map: Record<string, number> = {};
    reportData.filter(l => l.status === 'Ocupado').forEach(l => { map[l.segmento] = (map[l.segmento] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);
  }, [reportData]);

  const multasChart = useMemo(() => {
    const map: Record<string, number> = {};
    reportData.forEach(l => l.multas.forEach(m => { map[m.tipo] = (map[m.tipo] || 0) + 1; }));
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value).slice(0, 6);
  }, [reportData]);

  const totalReceita = useMemo(() =>
    reportData.filter(l => l.contratoAtivo).reduce((s, l) => s + l.contratoAtivo!.valorAluguel, 0),
  [reportData]);

  const totalSalesRevenue = useMemo(() =>
    reportData.filter(l => l.contratoAtivo).reduce((s, l) => s + l.faturamentoMedio * (l.contratoAtivo!.percentualFaturamento / 100), 0),
  [reportData]);

  const vencendo = useMemo(() =>
    reportData.filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes <= 90).length,
  [reportData]);

  // Preview table data
  const previewRows = useMemo(() => {
    return reportData.slice(0, 15).map(l => {
      const row: Record<string, string> = {};
      selectedFields.forEach(f => {
        switch (f.id) {
          case "nome": row[f.label] = l.nome || "—"; break;
          case "cnpj": row[f.label] = l.cnpj || "—"; break;
          case "segmento": row[f.label] = l.segmento; break;
          case "responsavel": row[f.label] = l.responsavel || "—"; break;
          case "email": row[f.label] = l.email || "—"; break;
          case "telefone": row[f.label] = l.telefone || "—"; break;
          case "unidade": row[f.label] = l.unidade; break;
          case "piso": row[f.label] = l.piso; break;
          case "corredor": row[f.label] = l.corredor; break;
          case "area": row[f.label] = `${l.area} m²`; break;
          case "status": row[f.label] = l.status; break;
          case "contratoId": row[f.label] = l.contratoAtivo?.id || "—"; break;
          case "contratoInicio": row[f.label] = l.contratoAtivo?.inicio || "—"; break;
          case "contratoFim": row[f.label] = l.contratoAtivo?.fim || "—"; break;
          case "contratoStatus": row[f.label] = l.contratoAtivo?.status || "—"; break;
          case "valorAluguel": row[f.label] = l.contratoAtivo ? fmt(l.contratoAtivo.valorAluguel) : "—"; break;
          case "luvas": row[f.label] = l.contratoAtivo ? fmt(l.contratoAtivo.luvas) : "—"; break;
          case "percentualFaturamento": row[f.label] = l.contratoAtivo ? `${l.contratoAtivo.percentualFaturamento}%` : "—"; break;
          case "indiceReajuste": row[f.label] = l.contratoAtivo?.indiceReajuste || "—"; break;
          case "desempenho": row[f.label] = l.contratoAtivo ? `${l.contratoAtivo.desempenho}%` : "—"; break;
          case "diasRestantes": row[f.label] = l.contratoAtivo ? `${l.contratoAtivo.diasRestantes} dias` : "—"; break;
          case "faturamentoMedio": row[f.label] = fmt(l.faturamentoMedio); break;
          case "receitaPercentual": row[f.label] = l.contratoAtivo ? fmt(l.faturamentoMedio * l.contratoAtivo.percentualFaturamento / 100) : "—"; break;
          default: row[f.label] = "—";
        }
      });
      return row;
    });
  }, [reportData, selectedFields]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Relatórios Comerciais</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Selecione campos, aplique filtros e exporte relatórios.</p>
        </div>
        {/* Export button */}
        <div className="relative">
          <div className="flex gap-2">
            <div className="flex border border-gray-200 dark:border-[#2E3447] rounded-xl overflow-hidden">
              {(["xlsx", "csv", "pdf"] as const).map(fmt2 => (
                <button
                  key={fmt2}
                  onClick={() => setExportFormat(fmt2)}
                  className={`px-3 py-2 text-xs font-medium transition-colors ${exportFormat === fmt2 ? 'bg-[#D93030] text-white' : 'text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E]'}`}
                >
                  {fmt2.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm">
              <Download className="w-4 h-4" /> Exportar Relatório
            </button>
          </div>
        </div>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Registros no Relatório</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{reportData.length}</p>
          <p className="text-xs text-gray-400 mt-1">unidades / lojistas</p>
        </div>
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Receita Mensal Total</p>
          <p className="text-xl font-bold text-green-600 dark:text-green-400">{fmt(totalReceita)}</p>
          <p className="text-xs text-gray-400 mt-1">contratos ativos</p>
        </div>
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Receita % Vendas/Mês</p>
          <p className="text-xl font-bold text-[#D93030]">{fmt(totalSalesRevenue)}</p>
          <p className="text-xs text-gray-400 mt-1">contribuição de % faturamento</p>
        </div>
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Contratos Vencendo</p>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{vencendo}</p>
          <p className="text-xs text-gray-400 mt-1">próximos 90 dias</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Filters + Field selector */}
        <div className="lg:col-span-1 space-y-4">
          {/* Date Range */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D93030]" /> Filtro por Período
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500 dark:text-[#64748B] mb-1 block">Data Inicial</label>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={e => setDateFrom(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 dark:text-[#64748B] mb-1 block">Data Final</label>
                <input
                  type="date"
                  value={dateTo}
                  onChange={e => setDateTo(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]"
                />
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: "1 mês", from: "2026-03-17" },
                  { label: "3 meses", from: "2026-01-17" },
                  { label: "6 meses", from: "2025-10-17" },
                  { label: "1 ano", from: "2025-04-17" },
                  { label: "2 anos", from: "2024-04-17" },
                  { label: "Tudo", from: "2019-01-01" },
                ].map(q => (
                  <button
                    key={q.label}
                    onClick={() => { setDateFrom(q.from); setDateTo("2026-04-17"); }}
                    className="px-2 py-1.5 text-xs border border-gray-200 dark:border-[#2E3447] rounded-lg text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] hover:border-[#D93030] transition-colors"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#D93030]" /> Filtros do Relatório
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500 dark:text-[#64748B] mb-1 block">Piso</label>
                <select
                  value={filterPiso}
                  onChange={e => setFilterPiso(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer"
                >
                  <option value="Todos">Todos os Pisos</option>
                  <option value="L1">Piso L1</option>
                  <option value="L2">Piso L2</option>
                  <option value="L3">Piso L3</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 dark:text-[#64748B] mb-1 block">Status</label>
                <select
                  value={filterStatus}
                  onChange={e => setFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer"
                >
                  <option value="Todos">Todos</option>
                  <option value="Ocupado">Ocupados</option>
                  <option value="Disponível">Disponíveis</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 dark:text-[#64748B] mb-1 block">Segmento</label>
                <select
                  value={filterSegmento}
                  onChange={e => setFilterSegmento(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer"
                >
                  <option value="Todos">Todos</option>
                  {["Moda", "Alimentação", "Serviços", "Eletrônicos", "Esportes", "Entretenimento", "Outros"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => { setFilterPiso("Todos"); setFilterStatus("Todos"); setFilterSegmento("Todos"); }}
                className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-[#2E3447] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] rounded-lg py-2 text-sm transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Limpar Filtros
              </button>
            </div>
          </div>

          {/* Field selector */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#D93030]" /> Campos a Exportar
              </h3>
              <div className="flex gap-2">
                <button onClick={selectAll} className="text-xs text-[#D93030] hover:underline">Todos</button>
                <span className="text-gray-300 dark:text-[#3E4557]">|</span>
                <button onClick={clearAll} className="text-xs text-gray-500 hover:underline">Nenhum</button>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-[#64748B] mb-4">{selectedFields.length} de {fields.length} campos selecionados</p>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {Object.entries(categories).map(([category, catFields]) => {
                const allSel = catFields.every(f => f.selected);
                const someSel = catFields.some(f => f.selected);
                return (
                  <div key={category}>
                    <button
                      onClick={() => toggleCategory(category)}
                      className="flex items-center gap-2 mb-2 w-full text-left group"
                    >
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${allSel ? 'bg-[#D93030] border-[#D93030]' : someSel ? 'bg-[#D93030]/30 border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557]'}`}>
                        {allSel && <Check className="w-2.5 h-2.5 text-white" />}
                        {someSel && !allSel && <div className="w-2 h-0.5 bg-[#D93030] rounded" />}
                      </div>
                      <span className="text-xs font-semibold text-gray-700 dark:text-[#94A3B8] uppercase tracking-wider">{category}</span>
                    </button>
                    <div className="ml-2 space-y-1.5">
                      {catFields.map(field => (
                        <label key={field.id} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox checked={field.selected} onChange={() => toggleField(field.id)} />
                          <span className="text-sm text-gray-700 dark:text-[#F1F5F9] group-hover:text-[#D93030] transition-colors">{field.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Charts + Preview */}
        <div className="lg:col-span-2 space-y-5">
          {/* Report type tabs */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-1 flex gap-1">
            {[
              { id: "contratos", label: "Contratos", icon: FileText },
              { id: "ocupacao", label: "Ocupação", icon: BarChart3 },
              { id: "propostas", label: "Propostas", icon: TrendingUp },
              { id: "desempenho", label: "Desempenho", icon: Activity },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setReportType(id as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${reportType === id ? 'bg-[#D93030] text-white shadow-sm' : 'text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E]'}`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:block">{label}</span>
              </button>
            ))}
          </div>

          {/* Charts */}
          {reportType === "contratos" && (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Distribuição por Segmento</h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 11 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 11 }} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }} />
                    <Bar dataKey="value" fill="#D93030" radius={[4, 4, 0, 0]} barSize={36} name="Lojas" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {reportType === "ocupacao" && (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Ocupação por Piso</h3>
              <div className="h-56 flex items-center justify-center">
                <ResponsiveContainer width="60%" height="100%">
                  <PieChart>
                    <Pie
                      data={["L1", "L2", "L3"].map(p => ({
                        name: p,
                        value: allLojistas.filter(l => l.piso === p && l.status === "Ocupado").length,
                      }))}
                      cx="50%" cy="50%" outerRadius={80} innerRadius={45}
                      dataKey="value" paddingAngle={4}
                    >
                      {["L1", "L2", "L3"].map((_, i) => (
                        <Cell key={i} fill={CHART_COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }} formatter={(v, n) => [`${v} lojas`, n]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {["L1", "L2", "L3"].map((p, i) => {
                    const count = allLojistas.filter(l => l.piso === p && l.status === "Ocupado").length;
                    return (
                      <div key={p} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                        <span className="text-sm text-gray-600 dark:text-[#94A3B8]">{p}</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{count} lojas</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {reportType === "propostas" && (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Status das Propostas</h3>
              <div className="h-56 flex items-center justify-center">
                <ResponsiveContainer width="60%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Aceita", value: propostasAtivas.filter(p => p.status === "Aceita").length },
                        { name: "Em Negociação", value: propostasAtivas.filter(p => p.status === "Em Negociação").length },
                        { name: "Em Análise", value: propostasAtivas.filter(p => p.status === "Em Análise").length },
                        { name: "Pendente", value: propostasAtivas.filter(p => p.status === "Pendente").length },
                        { name: "Recusada", value: propostasAtivas.filter(p => p.status === "Recusada").length },
                        { name: "Expirada", value: propostasAtivas.filter(p => p.status === "Expirada").length },
                      ]}
                      cx="50%" cy="50%" outerRadius={80} dataKey="value" paddingAngle={3}
                    >
                      {CHART_COLORS.map((c, i) => <Cell key={i} fill={c} />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2">
                  {["Aceita", "Em Negociação", "Em Análise", "Pendente", "Recusada", "Expirada"].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                      <span className="text-xs text-gray-600 dark:text-[#94A3B8]">{s}</span>
                      <span className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9] ml-auto">{propostasAtivas.filter(p => p.status === s).length}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {reportType === "desempenho" && (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Desempenho dos Contratos</h3>
              <div className="h-56 flex items-center justify-center">
                <ResponsiveContainer width="60%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Excelente", value: reportData.filter(l => l.contratoAtivo && l.contratoAtivo.desempenho >= 80).length },
                        { name: "Bom", value: reportData.filter(l => l.contratoAtivo && l.contratoAtivo.desempenho >= 60 && l.contratoAtivo.desempenho < 80).length },
                        { name: "Regular", value: reportData.filter(l => l.contratoAtivo && l.contratoAtivo.desempenho >= 40 && l.contratoAtivo.desempenho < 60).length },
                        { name: "Baixo", value: reportData.filter(l => l.contratoAtivo && l.contratoAtivo.desempenho < 40).length },
                      ]}
                      cx="50%" cy="50%" outerRadius={80} dataKey="value" paddingAngle={3}
                    >
                      {CHART_COLORS.map((c, i) => <Cell key={i} fill={c} />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2">
                  {["Excelente", "Bom", "Regular", "Baixo"].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                      <span className="text-xs text-gray-600 dark:text-[#94A3B8]">{s}</span>
                      <span className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9] ml-auto">{reportData.filter(l => l.contratoAtivo && l.contratoAtivo.desempenho >= (i * 20) && l.contratoAtivo.desempenho < ((i + 1) * 20)).length}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Preview toggle */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
            <button
              onClick={() => setShowPreview(p => !p)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-[#D93030]" />
                <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">
                  Pré-visualização da Tabela ({selectedFields.length} colunas · {reportData.length} linhas)
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showPreview ? 'rotate-180' : ''}`} />
            </button>

            {showPreview && selectedFields.length > 0 && (
              <div className="border-t border-gray-100 dark:border-[#2E3447] overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447] text-xs">
                  <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
                    <tr>
                      {selectedFields.map(f => (
                        <th key={f.id} className="px-4 py-2.5 text-left font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider whitespace-nowrap">
                          {f.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
                    {previewRows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
                        {selectedFields.map(f => (
                          <td key={f.id} className="px-4 py-2.5 whitespace-nowrap text-gray-700 dark:text-[#94A3B8]">
                            {row[f.label]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-3 bg-gray-50/50 dark:bg-[#1A1F2E] border-t border-gray-100 dark:border-[#2E3447] flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">
                    Exibindo prévia de 15 de {reportData.length} registros
                  </p>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 bg-[#D93030] hover:bg-[#c02828] text-white rounded-lg px-4 py-2 text-xs font-medium transition-colors">
                      <Download className="w-3.5 h-3.5" /> Exportar {exportFormat.toUpperCase()} ({reportData.length} registros)
                    </button>
                    <button className="flex items-center gap-1.5 border border-gray-200 dark:border-[#2E3447] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] rounded-lg px-3 py-2 text-xs font-medium transition-colors">
                      <Printer className="w-3.5 h-3.5" /> Imprimir
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showPreview && selectedFields.length === 0 && (
              <div className="border-t border-gray-100 dark:border-[#2E3447] p-8 text-center text-gray-400 dark:text-[#64748B]">
                <CheckSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Selecione ao menos um campo para pré-visualizar</p>
              </div>
            )}
          </div>

          {/* Export actions */}
          <div className="bg-gradient-to-r from-[#8B1A1A]/5 to-[#D93030]/5 dark:from-[#8B1A1A]/20 dark:to-[#D93030]/20 border border-[#D93030]/20 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-[#D93030]" /> Opções de Exportação
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#242938] rounded-xl border border-gray-200 dark:border-[#2E3447] hover:border-[#D93030] transition-all hover:shadow-sm group">
                <FileSpreadsheet className="w-6 h-6 text-green-600 group-hover:text-[#D93030] transition-colors" />
                <span className="text-xs font-medium text-gray-700 dark:text-[#F1F5F9]">Excel (.xlsx)</span>
                <span className="text-xs text-gray-400">{selectedFields.length} campos</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#242938] rounded-xl border border-gray-200 dark:border-[#2E3447] hover:border-[#D93030] transition-all hover:shadow-sm group">
                <Table className="w-6 h-6 text-blue-600 group-hover:text-[#D93030] transition-colors" />
                <span className="text-xs font-medium text-gray-700 dark:text-[#F1F5F9]">CSV (.csv)</span>
                <span className="text-xs text-gray-400">{reportData.length} linhas</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#242938] rounded-xl border border-gray-200 dark:border-[#2E3447] hover:border-[#D93030] transition-all hover:shadow-sm group">
                <Printer className="w-6 h-6 text-red-600 group-hover:text-[#D93030] transition-colors" />
                <span className="text-xs font-medium text-gray-700 dark:text-[#F1F5F9]">PDF</span>
                <span className="text-xs text-gray-400">com gráficos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}