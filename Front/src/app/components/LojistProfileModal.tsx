import { X, Building2, User, Phone, Mail, FileText, TrendingUp, Calendar, DollarSign, ChevronRight, ClipboardList } from "lucide-react";
import type { Lojista } from "../data/comercialData";

interface LojistProfileModalProps {
  lojista: Lojista;
  onClose: () => void;
}

const statusContratoColors: Record<string, string> = {
  Ativo: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  "Em Renovação": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
  Vencendo: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
  Vencido: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
};

const statusPropostaColors: Record<string, string> = {
  Aceita: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  "Em Negociação": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
  "Em Análise": "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400",
  Pendente: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400",
  Recusada: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
  Expirada: "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400",
};

const PISO_CLASS: Record<string, string> = {
  L1: "Piso 1 — Popular",
  L2: "Piso 2 — Classe Média",
  L3: "Piso 3 — Elite",
};

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function LojistProfileModal({ lojista, onClose }: LojistProfileModalProps) {
  const c = lojista.contratoAtivo;
  const salesRevenue = c ? lojista.faturamentoMedio * (c.percentualFaturamento / 100) : 0;
  const totalMensal = c ? c.valorAluguel + salesRevenue : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-[#2E3447]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-5 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{lojista.nome || "Unidade Disponível"}</h2>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-white/80 text-sm">{lojista.unidade}</span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/80 text-sm">{lojista.segmento}</span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/80 text-sm">{PISO_CLASS[lojista.piso] ?? `Piso ${lojista.piso}`} / Corredor {lojista.corredor}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-[#242938] rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4" /> Dados do Responsável
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-[#F1F5F9]">{lojista.responsavel || "—"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-[#94A3B8] break-all">{lojista.email || "—"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-[#94A3B8]">{lojista.telefone || "—"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-[#94A3B8]">CNPJ: {lojista.cnpj || "—"}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-[#242938] rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Localização & Métricas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Piso / Classe</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{PISO_CLASS[lojista.piso] ?? lojista.piso}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Corredor</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{lojista.corredor}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Área</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{lojista.area} m²</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Fat. Médio/Mês</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{fmt(lojista.faturamentoMedio)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contrato Ativo */}
          {c && (
            <div className="border border-gray-200 dark:border-[#2E3447] rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D93030]" /> Contrato Ativo — {c.id}
                </h3>
                <div className="flex items-center gap-2">
                  {c.diasRestantes < 60 && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400">
                      ⚠ {c.diasRestantes} dias restantes
                    </span>
                  )}
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${statusContratoColors[c.status]}`}>
                    {c.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                {/* Desempenho */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-gray-500 dark:text-[#64748B] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Desempenho Contratual (baseado em % de vendas)
                    </span>
                    <span className={`text-sm font-bold ${
                      c.desempenho >= 90 ? "text-green-600 dark:text-green-400" :
                      c.desempenho >= 75 ? "text-blue-600 dark:text-blue-400" :
                      c.desempenho >= 60 ? "text-orange-600 dark:text-orange-400" :
                      "text-red-600 dark:text-red-400"
                    }`}>{c.desempenho}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        c.desempenho >= 90 ? "bg-green-500" :
                        c.desempenho >= 75 ? "bg-blue-500" :
                        c.desempenho >= 60 ? "bg-orange-500" : "bg-red-500"
                      }`}
                      style={{ width: `${c.desempenho}%` }}
                    />
                  </div>
                </div>

                {/* Contract Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Vigência</p>
                    <p className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9]">{c.inicio}</p>
                    <p className="text-xs text-gray-500 dark:text-[#64748B]">até {c.fim}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1 flex items-center gap-1"><DollarSign className="w-3 h-3" /> Aluguel Mensal</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{fmt(c.valorAluguel)}</p>
                    <p className="text-xs text-gray-500 dark:text-[#64748B]">{c.indiceReajuste}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">% Faturamento</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{c.percentualFaturamento}%</p>
                    <p className="text-xs text-gray-500 dark:text-[#64748B]">≈ {fmt(salesRevenue)}/mês</p>
                  </div>
                  <div className="bg-[#D93030]/5 dark:bg-[#D93030]/10 rounded-lg p-3 border border-[#D93030]/20">
                    <p className="text-xs text-[#D93030] dark:text-[#E04444] mb-1 font-medium">Total/Mês</p>
                    <p className="text-sm font-bold text-[#D93030] dark:text-[#E04444]">{fmt(totalMensal)}</p>
                    <p className="text-xs text-gray-500 dark:text-[#64748B]">{c.tipo}</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                  <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Luvas</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{fmt(c.luvas)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Histórico de Propostas */}
          <div className="border border-gray-200 dark:border-[#2E3447] rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-[#D93030]" /> Histórico de Propostas
              </h3>
              <span className="text-xs text-gray-500 dark:text-[#64748B]">{lojista.propostas.length} propostas</span>
            </div>
            <div className="p-4">
              {lojista.propostas.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-[#64748B] text-center py-4">Nenhuma proposta registrada</p>
              ) : (
                <div className="space-y-2">
                  {lojista.propostas.map((p) => (
                    <div key={p.id} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-[#242938] rounded-lg">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">{p.tipo}</span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusPropostaColors[p.status] || ""}`}>{p.status}</span>
                          <span className="text-xs text-gray-400 dark:text-[#475569] ml-auto flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {p.data}
                          </span>
                        </div>
                        {p.observacao && (
                          <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5 truncate">{p.observacao}</p>
                        )}
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(p.valor)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" /> Nova Proposta
            </button>
            <button className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <ChevronRight className="w-4 h-4" /> Ver Contrato Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
