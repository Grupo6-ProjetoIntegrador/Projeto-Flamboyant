import { useState, useMemo, useEffect } from "react";
import {
  Search, Filter, Plus, ChevronRight, Calendar, Eye, CheckCircle,
  XCircle, Clock, MessageSquare, RefreshCw, Send, Edit3,
  FileText, Paperclip, Upload, Trash2, Shield, History
} from "lucide-react";
import {
  getProposals, updateProposalStatus, addProposal, getGeneratedContracts,
  addDocument, getDocumentsByEntity, removeDocument, getAuditByEntity,
  subscribe
} from "../../data/comercialStore";
import { allLojistas } from "../../data/comercialData";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista, StatusProposta } from "../../data/comercialData";

const STATUS_COLORS: Record<StatusProposta, string> = {
  Pendente:       "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700/30",
  "Em Análise":   "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-700/30",
  "Em Negociação":"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-700/30",
  Aceita:         "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-700/30",
  Recusada:       "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-700/30",
  Expirada:       "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600/30",
};

const TIPO_COLORS: Record<string, string> = {
  "Nova Instalação": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400",
  Renovação:         "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400",
  Readequação:       "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
};

function StatusIcon({ status }: { status: StatusProposta }) {
  switch (status) {
    case "Aceita":         return <CheckCircle className="w-4 h-4 text-green-500" />;
    case "Recusada":       return <XCircle className="w-4 h-4 text-red-500" />;
    case "Expirada":       return <XCircle className="w-4 h-4 text-gray-400" />;
    case "Pendente":       return <Clock className="w-4 h-4 text-yellow-500" />;
    case "Em Análise":     return <Eye className="w-4 h-4 text-purple-500" />;
    case "Em Negociação":  return <MessageSquare className="w-4 h-4 text-blue-500" />;
    default: return null;
  }
}

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
}

export function ComercialProposals() {
  const [tick, setTick] = useState(0);
  const refresh = () => setTick(t => t + 1);

  // Subscribe to store changes
  useEffect(() => {
    const unsub = subscribe(refresh);
    return unsub;
  }, []);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("Todos");
  const [filterTipo, setFilterTipo] = useState<string>("Todos");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [profileLojista, setProfileLojista] = useState<Lojista | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [newStatusTarget, setNewStatusTarget] = useState<StatusProposta>("Em Negociação");
  const [statusObs, setStatusObs] = useState("");
  const [showAuditPanel, setShowAuditPanel] = useState(false);

  // New proposal form state
  const [newProp, setNewProp] = useState({
    lojista: '', unidade: '', tipo: 'Nova Instalação' as any, segmento: 'Moda' as any,
    valor: '', area: '', vencimento: '', observacoes: '',
  });

  const proposals = useMemo(() => getProposals(), [tick]);
  const generatedContracts = useMemo(() => getGeneratedContracts(), [tick]);

  const filtered = useMemo(() => {
    return proposals.filter(p => {
      const matchSearch = p.lojista.toLowerCase().includes(search.toLowerCase()) ||
        p.unidade.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "Todos" || p.status === filterStatus;
      const matchTipo = filterTipo === "Todos" || p.tipo === filterTipo;
      return matchSearch && matchStatus && matchTipo;
    });
  }, [proposals, search, filterStatus, filterTipo, tick]);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    proposals.forEach(p => { map[p.status] = (map[p.status] || 0) + 1; });
    return map;
  }, [proposals, tick]);

  const selected = useMemo(() => proposals.find(p => p.id === selectedId), [proposals, selectedId, tick]);
  const lojistaMapped = selected?.lojistaId ? allLojistas.find(l => l.id === selected.lojistaId) : null;
  const selectedDocs = useMemo(() => selected ? getDocumentsByEntity(selected.id) : [], [selected, tick]);
  const selectedAudit = useMemo(() => selected ? getAuditByEntity(selected.id) : [], [selected, tick]);

  // Check if selected proposal has a generated contract (RF-04)
  const generatedContract = useMemo(() =>
    selected ? generatedContracts.find(c => c.proposalId === selected.id) : null,
  [selected, generatedContracts, tick]);

  const handleChangeStatus = (status: StatusProposta) => {
    if (!selected) return;
    setNewStatusTarget(status);
    setStatusObs("");
    setShowStatusModal(true);
  };

  const confirmStatusChange = () => {
    if (!selected) return;
    updateProposalStatus(selected.id, newStatusTarget, statusObs);
    setShowStatusModal(false);
    refresh();
  };

  const handleFileUpload = () => {
    if (!selected) return;
    const fakeFiles = ['Proposta_Assinada.pdf', 'Laudo_Avaliacao.pdf', 'Contrato_Minuta.docx', 'RG_Responsavel.jpg', 'CNPJ_Comprovante.pdf'];
    const randomFile = fakeFiles[Math.floor(Math.random() * fakeFiles.length)];
    const ext = randomFile.split('.').pop() as any;
    addDocument({
      entityId: selected.id,
      entityType: 'Proposta',
      nome: randomFile,
      tamanho: `${Math.floor(Math.random() * 900 + 100)} KB`,
      tipo: ext === 'jpg' ? 'JPG' : ext === 'docx' ? 'DOCX' : 'PDF',
    });
    refresh();
  };

  const handleNewProposal = () => {
    if (!newProp.lojista || !newProp.unidade || !newProp.valor) return;
    addProposal({
      lojistaId: undefined,
      lojista: newProp.lojista,
      unidade: newProp.unidade,
      segmento: newProp.segmento,
      tipo: newProp.tipo,
      valorProposto: parseFloat(newProp.valor) || 0,
      area: parseFloat(newProp.area) || 0,
      status: 'Pendente',
      responsavel: 'Gerência Comercial',
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
      dataVencimento: newProp.vencimento || '30/06/2026',
      observacoes: newProp.observacoes,
    });
    setShowNewModal(false);
    setNewProp({ lojista:'', unidade:'', tipo:'Nova Instalação', segmento:'Moda', valor:'', area:'', vencimento:'', observacoes:'' });
    refresh();
  };

  const canChangeStatus = selected && !['Aceita', 'Recusada', 'Expirada'].includes(selected.status);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Propostas Comerciais</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Cadastro, acompanhamento e gestão de propostas.</p>
        </div>
        <button onClick={() => setShowNewModal(true)}
          className="inline-flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Nova Proposta
        </button>
      </div>

      {/* Status counters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {(["Em Negociação","Em Análise","Pendente","Aceita","Recusada","Expirada"] as StatusProposta[]).map(s => (
          <button key={s} onClick={() => setFilterStatus(filterStatus === s ? "Todos" : s)}
            className={`rounded-xl p-3 text-center border transition-all ${filterStatus === s ? STATUS_COLORS[s] + ' ring-2 ring-offset-1 ring-current' : 'bg-white dark:bg-[#242938] border-gray-100 dark:border-[#2E3447] hover:border-gray-300 dark:hover:border-[#3E4557]'}`}>
            <p className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9]">{counts[s] || 0}</p>
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-0.5 leading-tight">{s}</p>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar por lojista, unidade ou código..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-900 dark:text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:border-[#D93030]" />
        </div>
        <select value={filterTipo} onChange={e => setFilterTipo(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Tipos</option>
          <option value="Nova Instalação">Nova Instalação</option>
          <option value="Renovação">Renovação</option>
          <option value="Readequação">Readequação</option>
        </select>
        <button onClick={() => { setSearch(""); setFilterStatus("Todos"); setFilterTipo("Todos"); }}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <RefreshCw className="w-4 h-4" /> Limpar
        </button>
      </div>

      {/* Content: list + detail */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Proposals list */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">{filtered.length} proposta{filtered.length !== 1 ? 's' : ''}</span>
              <Filter className="w-4 h-4 text-gray-400" />
            </div>
            <div className="divide-y divide-gray-100 dark:divide-[#2E3447] max-h-[600px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                  <Search className="w-10 h-10 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Nenhuma proposta encontrada</p>
                </div>
              ) : (
                filtered.map(p => (
                  <button key={p.id} onClick={() => setSelectedId(selectedId === p.id ? null : p.id)}
                    className={`w-full text-left px-5 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-[#1A1F2E] ${selectedId === p.id ? 'bg-[#D93030]/5 dark:bg-[#D93030]/10 border-l-2 border-[#D93030]' : ''}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{p.lojista}</span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${TIPO_COLORS[p.tipo] || ''}`}>{p.tipo}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-[#64748B] flex-wrap">
                          <span>{p.id}</span><span>·</span><span>{p.unidade}</span><span>·</span><span>{p.segmento}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{fmtCurrency(p.valorProposto)}</span>
                          <span className="text-xs text-gray-400">{p.area} m²</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Criada: {p.dataCriacao}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1.5">
                          <StatusIcon status={p.status as StatusProposta} />
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[p.status as StatusProposta]}`}>{p.status}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" /><span>Vence {p.dataVencimento}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-2">
          {selected ? (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden sticky top-6">
              <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/70">{selected.id}</span>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/20 text-white">{selected.status}</span>
                </div>
                <h3 className="text-base font-bold text-white">{selected.lojista}</h3>
                <p className="text-sm text-white/80">{selected.unidade} · {selected.segmento}</p>
              </div>
              <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Valor Proposto</p>
                    <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9]">{fmtCurrency(selected.valorProposto)}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Área</p>
                    <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9]">{selected.area} m²</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Criação</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{selected.dataCriacao}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Vencimento</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{selected.dataVencimento}</p>
                  </div>
                </div>
                {selected.observacoes && (
                  <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-lg p-3">
                    <p className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">Observações</p>
                    <p className="text-xs text-gray-600 dark:text-[#94A3B8] leading-relaxed">{selected.observacoes}</p>
                  </div>
                )}

                {/* Contrato gerado (RF-03) */}
                {generatedContract && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-xs font-semibold text-green-700 dark:text-green-400">Contrato Gerado — RF-03</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-[#94A3B8]">
                      {generatedContract.id} · Vigência: {generatedContract.inicio} a {generatedContract.fim}
                    </p>
                    <p className="text-xs font-semibold text-gray-800 dark:text-[#F1F5F9] mt-1">
                      {fmtCurrency(generatedContract.valorAluguel)}/mês · Criado por {generatedContract.createdBy}
                    </p>
                  </div>
                )}

                {/* Action Buttons — RF-02 */}
                <div className="border-t border-gray-100 dark:border-[#2E3447] pt-4 space-y-2">
                  {canChangeStatus && (
                    <>
                      <button onClick={() => handleChangeStatus('Aceita')}
                        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                        <CheckCircle className="w-4 h-4" /> Aceitar Proposta
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => handleChangeStatus('Em Negociação')}
                          className="flex items-center justify-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors">
                          <MessageSquare className="w-3.5 h-3.5" /> Em Negociação
                        </button>
                        <button onClick={() => handleChangeStatus('Em Análise')}
                          className="flex items-center justify-center gap-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors">
                          <Eye className="w-3.5 h-3.5" /> Em Análise
                        </button>
                      </div>
                      <button onClick={() => handleChangeStatus('Recusada')}
                        className="w-full flex items-center justify-center gap-2 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                        <XCircle className="w-4 h-4" /> Recusar Proposta
                      </button>
                    </>
                  )}

                  {/* Document attachment — RF-08 */}
                  <div className="border-t border-gray-100 dark:border-[#2E3447] pt-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-gray-600 dark:text-[#94A3B8] flex items-center gap-1">
                        <Paperclip className="w-3.5 h-3.5" /> Documentos (RF-08) — {selectedDocs.length}
                      </p>
                      <button onClick={handleFileUpload}
                        className="flex items-center gap-1 text-xs text-[#D93030] hover:text-[#b92828] font-medium">
                        <Upload className="w-3 h-3" /> Anexar
                      </button>
                    </div>
                    {selectedDocs.length === 0 ? (
                      <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-2">Nenhum documento anexado</p>
                    ) : (
                      <div className="space-y-1.5">
                        {selectedDocs.map(doc => (
                          <div key={doc.id} className="flex items-center gap-2 bg-gray-50 dark:bg-[#1A1F2E] rounded-lg px-3 py-2">
                            <FileText className="w-3.5 h-3.5 text-[#D93030] flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-800 dark:text-[#F1F5F9] truncate">{doc.nome}</p>
                              <p className="text-xs text-gray-400">{doc.tamanho} · {doc.dataUpload} · {doc.uploadedBy}</p>
                            </div>
                            <button onClick={() => { removeDocument(doc.id); refresh(); }} className="text-gray-400 hover:text-red-500">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Audit log toggle — RNF-04, RNF-05 */}
                  <div className="border-t border-gray-100 dark:border-[#2E3447] pt-3">
                    <button onClick={() => setShowAuditPanel(p => !p)}
                      className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-[#94A3B8] hover:text-[#D93030] transition-colors">
                      <Shield className="w-3.5 h-3.5" /> Trilha de Auditoria (RNF-04/05) — {selectedAudit.length} registro{selectedAudit.length !== 1 ? 's' : ''}
                    </button>
                    {showAuditPanel && selectedAudit.length > 0 && (
                      <div className="mt-2 space-y-1.5 max-h-40 overflow-y-auto">
                        {selectedAudit.map(a => (
                          <div key={a.id} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg px-3 py-2">
                            <p className="text-xs font-medium text-gray-800 dark:text-[#F1F5F9]">{a.action}</p>
                            <p className="text-xs text-gray-500 dark:text-[#64748B]">
                              {a.userName} · {a.sector} · {new Date(a.timestamp).toLocaleString('pt-BR')}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {lojistaMapped && (
                    <button onClick={() => setProfileLojista(lojistaMapped)}
                      className="w-full flex items-center justify-center gap-2 border border-[#D93030]/30 text-[#D93030] hover:bg-[#D93030]/5 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                      <Eye className="w-4 h-4" /> Ver Perfil do Lojista
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex items-center justify-center min-h-64">
              <div className="text-center p-8">
                <ChevronRight className="w-8 h-8 text-gray-300 dark:text-[#3E4557] mx-auto mb-3" />
                <p className="text-sm text-gray-400 dark:text-[#64748B]">Selecione uma proposta para ver detalhes e ações</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status change modal */}
      {showStatusModal && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowStatusModal(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-[#2E3447]"
            onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-4 rounded-t-2xl">
              <h3 className="text-base font-bold text-white">Alterar Status da Proposta</h3>
              <p className="text-sm text-white/80">{selected.id} — {selected.lojista}</p>
            </div>
            <div className="p-5 space-y-4">
              <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                <p className="text-xs text-gray-500 dark:text-[#64748B]">Status atual: <span className="font-semibold text-gray-800 dark:text-[#F1F5F9]">{selected.status}</span></p>
                <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5">Novo status: <span className={`font-semibold ${newStatusTarget === 'Aceita' ? 'text-green-600' : newStatusTarget === 'Recusada' ? 'text-red-600' : 'text-blue-600'}`}>{newStatusTarget}</span></p>
              </div>
              {newStatusTarget === 'Aceita' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-3 text-xs text-green-700 dark:text-green-400">
                  <strong>RN-01:</strong> Ao aceitar, um contrato será gerado automaticamente.
                </div>
              )}
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Observação (opcional)</label>
                <textarea rows={3} value={statusObs} onChange={e => setStatusObs(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] resize-none"
                  placeholder="Motivo da alteração, condições acordadas..." />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowStatusModal(false)}
                  className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  Cancelar
                </button>
                <button onClick={confirmStatusChange}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  <Send className="w-4 h-4" /> Confirmar Alteração
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Proposal Modal — RF-01 */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowNewModal(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-lg border border-gray-100 dark:border-[#2E3447]"
            onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-5 rounded-t-2xl flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Nova Proposta Comercial (RF-01)</h2>
              <button onClick={() => setShowNewModal(false)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center">
                <XCircle className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Lojista / Empresa *</label>
                  <input value={newProp.lojista} onChange={e => setNewProp(p => ({...p, lojista: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="Nome do lojista" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Unidade *</label>
                  <input value={newProp.unidade} onChange={e => setNewProp(p => ({...p, unidade: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="Ex: L2-015" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Tipo de Proposta</label>
                  <select value={newProp.tipo} onChange={e => setNewProp(p => ({...p, tipo: e.target.value as any}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]">
                    <option>Nova Instalação</option><option>Renovação</option><option>Readequação</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Segmento</label>
                  <select value={newProp.segmento} onChange={e => setNewProp(p => ({...p, segmento: e.target.value as any}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]">
                    {["Moda","Alimentação","Serviços","Eletrônicos","Esportes","Entretenimento","Outros"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Valor Proposto (R$) *</label>
                  <input type="number" value={newProp.valor} onChange={e => setNewProp(p => ({...p, valor: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="0" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Área (m²)</label>
                  <input type="number" value={newProp.area} onChange={e => setNewProp(p => ({...p, area: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="0" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Data de Vencimento (RN-03)</label>
                <input type="date" value={newProp.vencimento} onChange={e => setNewProp(p => ({...p, vencimento: e.target.value}))}
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Observações</label>
                <textarea rows={3} value={newProp.observacoes} onChange={e => setNewProp(p => ({...p, observacoes: e.target.value}))}
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] resize-none"
                  placeholder="Detalhes e condições..." />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowNewModal(false)}
                  className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  Cancelar
                </button>
                <button onClick={handleNewProposal}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  <Send className="w-4 h-4" /> Criar Proposta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {profileLojista && <LojistProfileModal lojista={profileLojista} onClose={() => setProfileLojista(null)} />}
    </div>
  );
}