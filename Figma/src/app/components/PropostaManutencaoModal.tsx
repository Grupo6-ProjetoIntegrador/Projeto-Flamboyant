/**
 * PropostaManutencaoModal.tsx — Modal completo de edição/visualização de proposta.
 *
 * O modal mais complexo do sistema (2218 linhas). Exibe e permite editar
 * todos os dados de uma proposta em abas organizadas por contexto.
 *
 * Abas disponíveis (variam conforme o tipo de operação):
 *  - Loja Proposta:          dados principais (unidade, tipo, valor, segmento)
 *  - Loja Anterior:          dados do inquilino anterior (se substituição)
 *  - Necessidades Técnicas:  elétrica, hidráulica, gás, ventilação, estrutura
 *  - Cessão de Direitos:     res sperata (quando aplicável)
 *  - Taxa de Transferência:  TT (quando aplicável)
 *  - Parecer do Comitê:      aprovações por cargo (presidente, diretoria, etc.)
 *  - Documentos:             upload/download de arquivos vinculados
 *  - Histórico:              log de edições com snapshot do estado anterior
 *
 * Modos de operação:
 *  - Visualização (readOnly=true): campos desabilitados, sem botão Salvar
 *  - Edição (forceEditMode=true ou clique em Editar): campos ativos
 *  - Nova proposta: id começa com 'PROP-NOVO-', abre em modo edição
 *
 * Estado interno:
 *  draft          — cópia editável da proposta (modificada pelo usuário)
 *  propostaOld    — snapshot salvo antes de editar (para cancelar)
 *  historicoEdicoes — lista de edições anteriores (buscada da API)
 *
 * Seleção de unidade: ao editar o campo "Loja Proposta", o modal
 * abre o DisponibilidadeManutencaoModal em modo picker para selecionar
 * a unidade via mapa, preenchendo automaticamente os campos derivados.
 *
 * Props aceitas: PropostaInput = Proposta (tipo local) | PropostaResumo (API)
 * O cast 'as Proposta' em structuredClone é necessário para compatibilidade
 * do estado interno draft, que usa a interface Proposta local mais rica.
 */
import { useState, useEffect, useRef, Fragment } from "react";
import { FilePlus, Pencil, Save, X, ChevronLeft, ChevronRight, LogOut, Paperclip, Upload, Trash2, FileText } from "lucide-react";
import { DatePickerInput } from "./DatePickerInput";
import { propostas as propostasApi, documentos as documentosApi } from "../data/apiClient";
import { unidades } from "../data/apiClient";
import { useApi } from "../data/useApi";
import type { Proposta, StatusProposta, Segmento } from "../data/comercialData";
import type { Unidade } from "../data/apiClient";
import {
  SEGMENTOS, TIPOS_PROPOSTA, TIPOS_OPERACAO, FORMAS_PAGAMENTO, FORMAS_PAGAMENTO_SALDO, FORMAS_PAGAMENTO_TT,
  TENSOES_NECESSARIAS, TIPOS_GAS, TIPOS_FACHADA, STATUS_LAUDO, STATUS_RES_SPERATA, STATUS_ANALISE,
  STATUS_PROPOSTA,
  STATUS_AGUARDANDO_FIN, STATUS_AGUARDANDO_COMITE, STATUS_APROVADO,
  STATUS_REPROVADO, STATUS_CANCELADO, STATUS_VENCIDA, STATUS_FINALIZADO,
  STATUS_OCUPADO, STATUS_DISPONIVEL,
  TIPO_TRANSFERENCIA, TIPO_CESSAO, TIPO_NOVA_LOCACAO, TIPO_RENOVACAO, TIPO_READEQUACAO, TIPO_NOVA_INSTALACAO,
} from "../enums";
import type { PropostaResumo, Documento } from "../data/apiClient";
import type { PropostaEdicao } from "../data/comercialStore";
import { StatusPropostaBadge } from "./StatusBadge";
import { ConfirmModal } from "./ConfirmModal";

const STATUS_COLORS_SELECT: Record<string, { bg: string; text: string; border: string }> = {
  [STATUS_AGUARDANDO_FIN]: {
    bg: 'bg-yellow-100 dark:bg-yellow-500/20',
    text: 'text-yellow-800 dark:text-yellow-300',
    border: 'border-yellow-300 dark:border-yellow-500/50',
  },
  [STATUS_AGUARDANDO_COMITE]: {
    bg: 'bg-purple-100 dark:bg-purple-500/20',
    text: 'text-purple-800 dark:text-purple-300',
    border: 'border-purple-300 dark:border-purple-500/50',
  },
  [STATUS_APROVADO]: {
    bg: 'bg-green-100 dark:bg-green-500/20',
    text: 'text-green-800 dark:text-green-300',
    border: 'border-green-300 dark:border-green-500/50',
  },
  [STATUS_REPROVADO]: {
    bg: 'bg-red-100 dark:bg-red-500/20',
    text: 'text-red-800 dark:text-red-300',
    border: 'border-red-300 dark:border-red-500/50',
  },
  [STATUS_CANCELADO]: {
    bg: 'bg-gray-100 dark:bg-gray-500/20',
    text: 'text-gray-600 dark:text-gray-300',
    border: 'border-gray-300 dark:border-gray-500/50',
  },
  [STATUS_VENCIDA]: {
    bg: 'bg-orange-100 dark:bg-orange-500/20',
    text: 'text-orange-800 dark:text-orange-300',
    border: 'border-orange-300 dark:border-orange-500/50',
  },
  [STATUS_FINALIZADO]: {
    bg: 'bg-blue-100 dark:bg-blue-500/20',
    text: 'text-blue-800 dark:text-blue-300',
    border: 'border-blue-300 dark:border-blue-500/50',
  },
};

const TIPO_COLORS_SELECT: Record<string, { bg: string; text: string; border: string }> = {
  [TIPO_NOVA_LOCACAO]: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    text: 'text-indigo-700 dark:text-indigo-400',
    border: 'border-indigo-200 dark:border-indigo-700/40',
  },
  [TIPO_RENOVACAO]: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    text: 'text-teal-700 dark:text-teal-400',
    border: 'border-teal-200 dark:border-teal-700/40',
  },
  [TIPO_READEQUACAO]: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    text: 'text-amber-700 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-700/40',
  },
  [TIPO_TRANSFERENCIA]: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-700/40',
  },
  [TIPO_CESSAO]: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-700 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-700/40',
  },
};

function DisponibilidadePickerModal({
  onSelect,
  onClose,
}: {
  onSelect: (unidade: Unidade) => void;
  onClose: () => void;
}) {
  const [searchUnidade, setSearchUnidade] = useState('');
  const [searchPiso, setSearchPiso] = useState('');
  const [searchCorreidor, setSearchCorreidor] = useState('');
  const [filterStatus, setFilterStatus] = useState<'Todos' | 'Ocupado' | 'Disponível'>('Todos');

  // Busca todas as unidades — status filtrado pela UI
  const { data: unidadesData } = useApi(() => unidades.listar(), []);
  const allUnidades = unidadesData || [];
  const disponibilidades = allUnidades.filter((l: Unidade) => {
    const matchUnidade = !searchUnidade || l.codigo.toLowerCase().includes(searchUnidade.toLowerCase());
    const matchPiso = !searchPiso || l.piso.toLowerCase().includes(searchPiso.toLowerCase());
    const matchCorreidor = !searchCorreidor || l.corredor.toLowerCase().includes(searchCorreidor.toLowerCase());
    const matchStatus = filterStatus === 'Todos' || l.status === filterStatus;
    return matchUnidade && matchPiso && matchCorreidor && matchStatus;
  });

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative z-10 flex flex-col bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full sm:max-w-2xl overflow-hidden"
        style={{ height: 'min(80vh, 100dvh - 80px)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Selecionar Disponibilidade</h3>
            <p className="text-sm text-white/70 mt-0.5">
              {disponibilidades.length} unidade{disponibilidades.length !== 1 ? 's' : ''} encontrada{disponibilidades.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Filtros */}
        <div className="flex-shrink-0 p-4 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E] space-y-3">
          {/* Status */}
          <div className="flex items-center gap-4">
            {(['Todos', 'Disponível', 'Ocupado'] as const).map(s => (
              <label key={s} className="flex items-center gap-1.5 cursor-pointer select-none">
                <div
                  onClick={() => setFilterStatus(s)}
                  className={`w-4 h-4 border flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                    ${filterStatus === s
                      ? 'border-[#D93030] bg-white dark:bg-[#1A1F2E] text-[#D93030]'
                      : 'border-gray-400 dark:border-[#64748B] bg-white dark:bg-[#1A1F2E]'}`}
                >
                  {filterStatus === s && 'X'}
                </div>
                <span className="text-xs text-gray-700 dark:text-[#CBD5E1]">{s}</span>
              </label>
            ))}
          </div>

          {/* Filtros de texto */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { placeholder: 'Unidade (ex: L1-002)', value: searchUnidade, onChange: setSearchUnidade },
              { placeholder: 'Piso (P, S, T)', value: searchPiso, onChange: setSearchPiso },
              { placeholder: 'Corredor (A, B, C)', value: searchCorreidor, onChange: setSearchCorreidor },
            ].map((f, i) => (
              <input
                key={i}
                type="text"
                placeholder={f.placeholder}
                value={f.value}
                onChange={e => f.onChange(e.target.value)}
                className="h-8 px-2.5 text-xs border border-gray-200 dark:border-[#2E3447] rounded-lg bg-white dark:bg-[#242938] text-gray-700 dark:text-[#CBD5E1] placeholder-gray-300 dark:placeholder-[#3E4557] focus:outline-none focus:border-[#D93030] transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Lista */}
        <div className="flex-1 overflow-y-auto">
          {disponibilidades.length === 0 ? (
            <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
              <p className="text-sm">Nenhuma unidade encontrada</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100 dark:divide-[#2E3447]">
              {disponibilidades.map(l => (
                <button
                  key={l.id}
                  onClick={() => onSelect(l)}
                  className="w-full text-left px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9] font-mono">{l.codigo}</span>
                    <div className="text-xs text-gray-400 dark:text-[#64748B] mt-0.5">
                      Piso {l.piso} · Corredor {l.corredor} · {l.area} m²
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full flex-shrink-0
                    ${l.status === STATUS_DISPONIVEL
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'}`}
                  >
                    {l.status}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type PropostaInput = Proposta | PropostaResumo;

interface PropostaManutencaoModalProps {
  proposta: PropostaInput;
  allPropostas: PropostaInput[];
  onClose: () => void;
  readOnly?: boolean;
  forceEditMode?: boolean;
  onNavigate?: (p: PropostaInput) => void;
  initialIndex?: number;
}

// ============================================================
// Field e ToolbarBtn definidos FORA do modal — evita re-mount a cada render
// ============================================================
interface FieldProps {
  label: string;
  value?: string | number;
  onChange?: (v: string) => void;
  type?: string;
  calculated?: boolean;
  disabled?: boolean;
  options?: string[];
  textarea?: boolean;
  className?: string;
  editMode: boolean;
  readOnly: boolean;
}

function Field({
  label, value, onChange, type = 'text', calculated = false,
  disabled = false, options, textarea = false, className = '',
  editMode, readOnly,
}: FieldProps) {
  const isDisabled = disabled || calculated || (!editMode && !readOnly) || readOnly;
  const bg = calculated
    ? 'bg-blue-50 dark:bg-blue-900/20'
    : isDisabled ? 'bg-gray-50 dark:bg-[#1A1F2E]' : 'bg-white dark:bg-[#242938]';
  const displayValue = calculated && typeof value === 'number'
    ? value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : value ?? '';
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">
        {label}{calculated && <span className="ml-1 text-[10px] text-blue-400">(calc.)</span>}
      </label>
      {options ? (
        <select value={value ?? ''} onChange={e => onChange?.(e.target.value)} disabled={isDisabled}
          className={`h-8 px-2 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg ${bg} text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] disabled:cursor-not-allowed`}>
          <option value="">Selecione...</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea value={displayValue} onChange={e => onChange?.(e.target.value)} disabled={isDisabled} rows={3}
          className={`px-2 py-1.5 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg ${bg} text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] disabled:cursor-not-allowed resize-none`} />
      ) : (
        <input type={type} value={displayValue} onChange={e => onChange?.(e.target.value)} disabled={isDisabled}
          className={`h-8 px-2 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg ${bg} text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] disabled:cursor-not-allowed`} />
      )}
    </div>
  );
}

function ToolbarBtn({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className="flex flex-col items-center justify-center px-3 py-1.5 rounded-lg gap-0.5 transition-colors text-white hover:bg-white/15 cursor-pointer">
      <div className="w-4 h-4">{icon}</div>
      <span className="text-[10px] font-medium leading-tight">{label}</span>
    </button>
  );
}

export function PropostaManutencaoModal({
  proposta,
  allPropostas,
  onClose,
  readOnly = false,
  forceEditMode = false,
  onNavigate,
  initialIndex,
}: PropostaManutencaoModalProps) {
  const [editMode, setEditMode] = useState(false);
  // propostaOld — snapshot do estado ANTES da edição, nunca alterado durante a sessão
  // draft — cópia de trabalho onde todas as alterações são feitas
  const [propostaOld, setPropostaOld] = useState<Proposta>(structuredClone(proposta as Proposta));
  const [draft, setDraft] = useState<Proposta>(structuredClone(proposta as Proposta));
  const [activeTab, setActiveTab] = useState<string>('loja-proposta');
  const [activeSubTab, setActiveSubTab] = useState<Record<string, string>>({
    'loja-proposta': 'identificacao',
    'necessidades-tecnicas': 'eletrica',
    'cessao': 'avaliacao',
    'taxa-transferencia': 'valores',
  });
  const [historicoEdicoes, setHistoricoEdicoes] = useState<PropostaEdicao[]>([]);
  const [modalHistoricoSnapshot, setModalHistoricoSnapshot] = useState<Proposta | null>(null);
  const [alertaAprovacao, setAlertaAprovacao] = useState<string[]>([]);
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [tick, setTick] = useState(0);
  const [showSairModal, setShowSairModal] = useState(false);
  const [showDisponibilidadePicker, setShowDisponibilidadePicker] = useState(false);

  // Se initialIndex for fornecido (modo histórico), usar diretamente
  // pois todos os snapshots têm o mesmo ID e findIndex retornaria sempre 0
  const currentIndex = initialIndex !== undefined
    ? initialIndex
    : allPropostas.findIndex(p => p.id === proposta.id);

  useEffect(() => {
    // Buscar histórico e documentos da API
    propostasApi.historico.listar(proposta.id).then(hist => setHistoricoEdicoes(hist || [])).catch(() => {});
    documentosApi.listar(proposta.id).then(docs => setDocumentos(docs || [])).catch(() => {});
    // Sincronizar ambos os objetos ao trocar de proposta (navegação)
    setPropostaOld(structuredClone(proposta as Proposta));
    setDraft(structuredClone(proposta as Proposta));
    if (!proposta.unidade) {
      // Proposta sem unidade = aberta pelo botão "Nova Proposta" da tela principal
      // → abrir picker para selecionar disponibilidade
      setEditMode(true);
      setShowDisponibilidadePicker(true);
    } else if (forceEditMode) {
      // Proposta com unidade já definida + forceEditMode = aberta pelo botão "Novo"
      // da manutenção de disponibilidade → entrar em editMode direto, sem abrir picker
      setEditMode(true);
    }
  }, [proposta.id, proposta, tick]);

  // Derivar dados do cabeçalho
  function derivePiso(unidade: string): string {
    if (unidade.startsWith('L1')) return 'Primeiro Piso';
    if (unidade.startsWith('L2')) return 'Segundo Piso';
    if (unidade.startsWith('L3')) return 'Terceiro Piso';
    return '-';
  }

  function deriveCorreidor(unidade: string): string {
    const num = parseInt(unidade.split('-')[1] || '0');
    if (num <= 30) return 'A';
    if (num <= 60) return 'B';
    return 'C';
  }

  // Campos calculados
  const calculados = {
    resSperataPropostaPorM2: draft.resSperataProposta && draft.area ? draft.resSperataProposta / draft.area : 0,
    percentSinalResSperata: draft.sinalResSperata && draft.resSperataProposta ? (draft.sinalResSperata / draft.resSperataProposta) * 100 : 0,
    saldoResSperata: (draft.resSperataProposta || 0) - (draft.sinalResSperata || 0),
    valorParcelaResSperata: draft.numParcelasResSperata && draft.sinalResSperata && draft.resSperataProposta
      ? ((draft.resSperataProposta - draft.sinalResSperata) / draft.numParcelasResSperata)
      : 0,
    diferencaTT: (draft.ttProposta || 0) - (draft.ttContratual || 0),
    percentDescontoTT: draft.ttContratual && draft.ttProposta ? ((draft.ttProposta - draft.ttContratual) / draft.ttContratual) * 100 : 0,
    percentSinalTT: draft.sinalTT && draft.ttProposta ? (draft.sinalTT / draft.ttProposta) * 100 : 0,
    saldoTT: (draft.ttProposta || 0) - (draft.sinalTT || 0),
    totalResSperata: draft.resSperataProposta || 0,
    totalTT: draft.ttProposta || 0,
    totalOperacao: (draft.resSperataProposta || 0) + (draft.ttProposta || 0),
    dividaTotal: (draft.lojaAnteriorDividaAMM || 0) + (draft.lojaAnteriorDividaNegociada || 0) +
      (draft.lojaAnteriorDividaCondominio || 0) + (draft.lojaAnteriorDividaFPP || 0),
  };

  // Handlers
  const handleNovo = () => {
    const propostaEmBranco: Proposta = {
      id: `PROP-NOVO-${Date.now()}`,
      lojista: '',
      unidade: proposta.unidade,
      segmento: SEGMENTOS[0],
      tipo: TIPOS_PROPOSTA[0],
      valorProposto: 0,
      area: proposta.area,
      status: STATUS_AGUARDANDO_FIN,
      responsavel: '',
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
      dataVencimento: '',
      // Preservar campos da Loja Anterior
      lojaAnteriorNomeFantasia: draft.lojaAnteriorNomeFantasia,
      lojaAnteriorSegmento: draft.lojaAnteriorSegmento,
      lojaAnteriorTipoOperacao: draft.lojaAnteriorTipoOperacao,
      lojaAnteriorCTO: draft.lojaAnteriorCTO,
      lojaAnteriorABL: draft.lojaAnteriorABL,
      lojaAnteriorAMM: draft.lojaAnteriorAMM,
      lojaAnteriorDividaAMM: draft.lojaAnteriorDividaAMM,
      lojaAnteriorDividaNegociada: draft.lojaAnteriorDividaNegociada,
      lojaAnteriorDividaCondominio: draft.lojaAnteriorDividaCondominio,
      lojaAnteriorDividaFPP: draft.lojaAnteriorDividaFPP,
      lojaAnteriorFormaPagamento: draft.lojaAnteriorFormaPagamento,
    };
    setDraft(propostaEmBranco);
    setEditMode(true);
  };

  const handleGravar = async () => {
    // Validação ao tentar aprovar
    if (draft.status === STATUS_APROVADO) {
      const pendencias: string[] = [];

      // 1. Verificar se passou por análise financeira e análise do comitê
      const edicoes = historicoEdicoes; // já carregado do backend no useEffect
      const statusHistorico = edicoes.map(e => e.snapshot.status);
      const teveFin = statusHistorico.includes(STATUS_AGUARDANDO_FIN)
        || proposta.status === STATUS_AGUARDANDO_FIN;
      const tevelComite = statusHistorico.includes(STATUS_AGUARDANDO_COMITE)
        || proposta.status === STATUS_AGUARDANDO_COMITE;

      // Verificar também o status atual (propostaOld) pois pode ser um dos estágios necessários
      const statusAtual = propostaOld.status;
      if (!teveFin
          && statusAtual !== STATUS_AGUARDANDO_FIN
          && !statusHistorico.some(s => s === STATUS_AGUARDANDO_FIN)) {
        pendencias.push(`A proposta não passou pela etapa de ${STATUS_AGUARDANDO_FIN}`);
      }
      if (!tevelComite
          && statusAtual !== STATUS_AGUARDANDO_COMITE
          && !statusHistorico.some(s => s === STATUS_AGUARDANDO_COMITE)) {
        pendencias.push(`A proposta não passou pela etapa de ${STATUS_AGUARDANDO_COMITE}`);
      }

      // 2. Verificar se todos os campos do comitê estão assinados
      const aprovadores = [
        { nome: 'Presidente', campo: 'parecerPresidente' },
        { nome: 'Diretoria Compartilhada (1)', campo: 'parecerDiretoriaComp1' },
        { nome: 'Diretoria Compartilhada (2)', campo: 'parecerDiretoriaComp2' },
        { nome: 'Superintendente Comercial', campo: 'parecerSuperintendente' },
        { nome: 'In Networking', campo: 'parecerInNetworking' },
      ];
      const naoAssinados = aprovadores.filter(a => (draft as any)[a.campo] !== 'Assinado');
      if (naoAssinados.length > 0) {
        pendencias.push(`Parecer do Comitê pendente para: ${naoAssinados.map(a => a.nome).join(', ')}`);
      }

      if (pendencias.length > 0) {
        setAlertaAprovacao(pendencias);
        return; // Não grava
      }
    }

    setAlertaAprovacao([]);
    const isNovaProposta = draft.id.startsWith('PROP-NOVO-');
    if (isNovaProposta) {
      // Nova proposta — criar via API
      const { id: _tempId, ...resto } = draft;
      await propostasApi.criar(resto as any);
    } else {
      // Salvar via API
      await propostasApi.atualizar(draft.id, draft as any);

      // Se o status mudou, atualizar via endpoint dedicado
      if (draft.status !== propostaOld.status) {
        await propostasApi.atualizarStatus(draft.id, draft.status as any);
      }

      // Recarregar histórico
      const hist = await propostasApi.historico.listar(draft.id).catch(() => []);
      setHistoricoEdicoes(hist || []);
      // Atualizar propostaOld para refletir o novo estado gravado
      setPropostaOld(structuredClone(draft));
    }
    setEditMode(false);
  };

  const handleCancelar = () => {
    // Restaurar draft com cópia independente de propostaOld — sem referência compartilhada
    setDraft(structuredClone(propostaOld));
    setEditMode(false);
  };

  const handleAnterior = () => {
    if (currentIndex > 0) {
      const prev = allPropostas[currentIndex - 1];
      if (onNavigate) {
        onNavigate(prev);
      } else {
        window.dispatchEvent(new CustomEvent('navigate-proposta', { detail: prev }));
      }
    }
  };

  const handleProximo = () => {
    if (currentIndex < allPropostas.length - 1) {
      const next = allPropostas[currentIndex + 1];
      if (onNavigate) {
        onNavigate(next);
      } else {
        window.dispatchEvent(new CustomEvent('navigate-proposta', { detail: next }));
      }
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnexarDocumento = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
      const ext = file.name.split('.').pop()?.toUpperCase() || 'PDF';
      const tipoValido = ['PDF', 'DOCX', 'XLSX', 'JPG', 'PNG'].includes(ext)
        ? ext as 'PDF' | 'DOCX' | 'XLSX' | 'JPG' | 'PNG'
        : 'PDF';

      // Gerar código Anexo[NºProposta][NºAnexo]
      const docsAtuais = documentos; // estado local já sincronizado com API
      const nrAnexo = (docsAtuais.length + 1).toString().padStart(3, '0');
      const propId = proposta.id.replace('PROP-', '');
      const codigo = `Anexo${propId}${nrAnexo}`;

      // Tamanho legível
      const tamanho = file.size < 1024
        ? `${file.size} B`
        : file.size < 1024 * 1024
        ? `${(file.size / 1024).toFixed(0)} KB`
        : `${(file.size / (1024 * 1024)).toFixed(1)} MB`;

      documentosApi.upload(proposta.id, file, codigo)
        .then(doc => setDocumentos(prev => [...prev, doc as any]))
        .catch(() => {});
    });

    // Limpar o input para permitir selecionar o mesmo arquivo novamente
    e.target.value = '';
    setTick(t => t + 1);
  };

  const handleRemoverDocumento = (docId: string) => {
    documentosApi.remover(docId)
      .then(() => setDocumentos(prev => prev.filter(d => d.id !== docId)))
      .catch(() => {});
  };

  const handleSair = () => {
    if (editMode) {
      // Há edição em andamento — perguntar antes de fechar
      setShowSairModal(true);
    } else {
      // Sem edição — fechar diretamente
      onClose();
    }
  };

  const handleSelecionarDisponibilidade = async (unidade: Unidade) => {
    // Campos básicos da unidade selecionada
    setDraft(prev => ({
      ...prev,
      unidade: unidade.codigo,
      area: unidade.area,
      lojistaId: unidade.id,
    }));

    // Se ocupada, busca a proposta aprovada vinculada e preenche Loja Anterior
    if (unidade.status === STATUS_OCUPADO) {
      const vinculadas = await propostasApi.listar({ idUnidade: unidade.id, status: STATUS_APROVADO }).catch(() => []);
      const propostaAtual = vinculadas?.[0];
      if (propostaAtual) {
        setDraft(prev => ({
          ...prev,
          lojaAnteriorNomeFantasia: propostaAtual.nomeFantasia ?? '',
          lojaAnteriorSegmento: propostaAtual.segmento,
          lojaAnteriorABL: propostaAtual.area,
          lojaAnteriorTipoOperacao: propostaAtual.tipoOperacao,
          lojaAnteriorDividaAMM: 0,
          lojaAnteriorDividaNegociada: 0,
          lojaAnteriorDividaCondominio: 0,
          lojaAnteriorDividaFPP: 0,
        }));
      }
    }

    setShowDisponibilidadePicker(false);
  };

  // Controle de abas condicionais
  const isCessaoAtiva = draft.tipoOperacao === TIPO_CESSAO || draft.tipoOperacao === TIPO_TRANSFERENCIA;
  const isTTAtiva = draft.tipoOperacao === TIPO_TRANSFERENCIA;

  const ABAS_PRINCIPAIS = [
    { id: 'loja-proposta', label: 'Loja Proposta', disabled: false },
    { id: 'loja-anterior', label: 'Loja Anterior', disabled: false },
    { id: 'necessidades-tecnicas', label: 'Necessidades Técnicas', disabled: false },
    { id: 'cessao', label: 'Cessão de Direitos', disabled: !isCessaoAtiva },
    { id: 'taxa-transferencia', label: 'Taxa de Transferência', disabled: !isTTAtiva },
    { id: 'parecer-comite', label: 'Parecer do Comitê', disabled: false },
    // Ocultar Histórico quando visualizando um snapshot (readOnly) — evita histórico dentro de histórico
    ...(!readOnly ? [{ id: 'historico', label: 'Histórico', disabled: false }] : []),
    { id: 'anexos', label: 'Anexos', disabled: false },
  ];

  // Componente de campo reutilizável
  // Renderizar conteúdo de cada aba
  // Field e ToolbarBtn definidos fora do componente para evitar re-mount
  function renderTabContent() {
    const disabled = !editMode || readOnly;

    if (activeTab === 'loja-proposta') {
      const subTab = activeSubTab['loja-proposta'];
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Sub-abas */}
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['identificacao', 'contrato', 'encargos'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'loja-proposta': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'identificacao' ? 'Identificação' : st === 'contrato' ? 'Contrato' : 'Encargos e Datas'}
              </button>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'identificacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Nome Fantasia"
                  value={draft.nomeFantasia || ''}
                  onChange={v => setDraft(prev => ({ ...prev, nomeFantasia: v }))}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Segmento"
                  value={draft.segmento}
                  onChange={v => setDraft(prev => ({ ...prev, segmento: v as Segmento }))}
                  options={[...SEGMENTOS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Tipo de Operação</label>
                  <select
                    value={draft.tipoOperacao ?? ''}
                    onChange={e => setDraft(prev => ({ ...prev, tipoOperacao: e.target.value as any }))}
                    disabled={!editMode || readOnly}
                    className={`text-xs font-semibold px-2.5 py-1.5 rounded-full border cursor-pointer focus:outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-60
                      ${TIPO_COLORS_SELECT[draft.tipoOperacao ?? '']?.bg ?? 'bg-gray-50 dark:bg-[#1A1F2E]'}
                      ${TIPO_COLORS_SELECT[draft.tipoOperacao ?? '']?.text ?? 'text-gray-600 dark:text-[#94A3B8]'}
                      ${TIPO_COLORS_SELECT[draft.tipoOperacao ?? '']?.border ?? 'border-gray-200 dark:border-[#2E3447]'}`}
                  >
                    <option value="">Selecione...</option>
                    {TIPOS_OPERACAO.map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {subTab === 'contrato' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Aluguel %"
                  value={draft.aluguelPercent}
                  onChange={v => setDraft(prev => ({ ...prev, aluguelPercent: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Prazo de Locação (meses)"
                  value={draft.prazoLocacaoMeses}
                  onChange={v => setDraft(prev => ({ ...prev, prazoLocacaoMeses: parseInt(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="AR - Aluguel por m²"
                  value={draft.aluguelPorM2}
                  onChange={v => setDraft(prev => ({ ...prev, aluguelPorM2: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="ABL (m²)"
                  value={draft.area}
                  onChange={v => setDraft(prev => ({ ...prev, area: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'encargos' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Condomínio (Aprox.)"
                  value={draft.condominioAprox}
                  onChange={v => setDraft(prev => ({ ...prev, condominioAprox: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="FPP (Aprox.)"
                  value={draft.fppAprox}
                  onChange={v => setDraft(prev => ({ ...prev, fppAprox: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Início Contrato"
                  value={draft.inicioContrato}
                  onChange={v => setDraft(prev => ({ ...prev, inicioContrato: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Fim Contrato"
                  value={draft.fimContrato}
                  onChange={v => setDraft(prev => ({ ...prev, fimContrato: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Inauguração"
                  value={draft.dataInauguracao}
                  onChange={v => setDraft(prev => ({ ...prev, dataInauguracao: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Vencimento Proposta"
                  value={draft.dataVencimento}
                  onChange={v => setDraft(prev => ({ ...prev, dataVencimento: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />

              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'loja-anterior') {
      const subTab = activeSubTab['loja-anterior'] || 'identificacao';
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Sub-abas */}
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['identificacao', 'debitos'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'loja-anterior': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'identificacao' ? 'Identificação' : 'Débitos'}
              </button>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'identificacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Nome Fantasia"
                  value={draft.lojaAnteriorNomeFantasia}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorNomeFantasia: v }))}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Segmento"
                  value={draft.lojaAnteriorSegmento}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorSegmento: v }))}
                  options={[...SEGMENTOS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tipo de Operação"
                  value={draft.lojaAnteriorTipoOperacao}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorTipoOperacao: v }))}
                  options={[...TIPOS_OPERACAO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="CTO (R$)"
                  value={draft.lojaAnteriorCTO}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorCTO: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="ABL (m²)"
                  value={draft.lojaAnteriorABL}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorABL: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="AMM (R$/m²)"
                  value={draft.lojaAnteriorAMM}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorAMM: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'debitos' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Dívida AMM (R$)"
                  value={draft.lojaAnteriorDividaAMM}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaAMM: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida Negociada (R$)"
                  value={draft.lojaAnteriorDividaNegociada}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaNegociada: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida Condomínio (R$)"
                  value={draft.lojaAnteriorDividaCondominio}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaCondominio: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida FPP (R$)"
                  value={draft.lojaAnteriorDividaFPP}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaFPP: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida Total (R$)"
                  value={calculados.dividaTotal}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Forma de Pagamento"
                  value={draft.lojaAnteriorFormaPagamento}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorFormaPagamento: v }))}
                  options={[...FORMAS_PAGAMENTO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'necessidades-tecnicas') {
      const subTab = activeSubTab['necessidades-tecnicas'] || 'eletrica';
      const subTabLabels: Record<string, string> = {
        eletrica: 'Elétrica',
        hidraulica: 'Hidráulica',
        gas: 'Gás',
        ventilacao: 'Ventilação e Exaustão',
        estrutura: 'Estrutura',
        fachada: 'Fachada e Visual',
        telecom: 'TI e Telecom',
        controle: 'Controle',
        observacoes: 'Observações',
      };
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {Object.entries(subTabLabels).map(([st, label]) => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'necessidades-tecnicas': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">

            {/* Elétrica */}
            {subTab === 'eletrica' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Demanda Elétrica (kVA)"
                  value={draft.demandaEletricaKva}
                  onChange={v => setDraft(prev => ({ ...prev, demandaEletricaKva: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tensão Necessária"
                  value={draft.tensaoNecessaria}
                  onChange={v => setDraft(prev => ({ ...prev, tensaoNecessaria: v }))}
                  options={[...TENSOES_NECESSARIAS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Circuitos Especiais"
                  value={draft.circuitosEspeciais ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, circuitosEspeciais: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações Elétricas"
                  value={draft.obsEletrica}
                  onChange={v => setDraft(prev => ({ ...prev, obsEletrica: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Hidráulica */}
            {subTab === 'hidraulica' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Ponto de Água"
                  value={draft.pontoAgua ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, pontoAgua: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Quantidade de Pontos de Água"
                  value={draft.quantidadePontosAgua}
                  onChange={v => setDraft(prev => ({ ...prev, quantidadePontosAgua: parseInt(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Ponto de Esgoto"
                  value={draft.pontoEsgoto ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, pontoEsgoto: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Vazão Necessária (l/min)"
                  value={draft.vazaoNecessariaLmin}
                  onChange={v => setDraft(prev => ({ ...prev, vazaoNecessariaLmin: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Caixa de Gordura"
                  value={draft.caixaGordura ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, caixaGordura: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações Hidráulicas"
                  value={draft.obsHidraulica}
                  onChange={v => setDraft(prev => ({ ...prev, obsHidraulica: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Gás */}
            {subTab === 'gas' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Necessita Gás"
                  value={draft.necessitaGas ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaGas: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tipo de Gás"
                  value={draft.tipoGas}
                  onChange={v => setDraft(prev => ({ ...prev, tipoGas: v }))}
                  options={[...TIPOS_GAS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Consumo (m³/h)"
                  value={draft.consumoGasM3h}
                  onChange={v => setDraft(prev => ({ ...prev, consumoGasM3h: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Gás"
                  value={draft.obsGas}
                  onChange={v => setDraft(prev => ({ ...prev, obsGas: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Ventilação e Exaustão */}
            {subTab === 'ventilacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Necessita Exaustão"
                  value={draft.necessitaExaustao ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaExaustao: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Vazão de Exaustão (m³/h)"
                  value={draft.vazaoExaustaoM3h}
                  onChange={v => setDraft(prev => ({ ...prev, vazaoExaustaoM3h: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Make-up de Ar (Reposição)"
                  value={draft.necessitaMakeUpAr ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaMakeUpAr: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Ventilação"
                  value={draft.obsVentilacao}
                  onChange={v => setDraft(prev => ({ ...prev, obsVentilacao: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Estrutura */}
            {subTab === 'estrutura' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Área Mínima (m²)"
                  value={draft.areaMinimaM2}
                  onChange={v => setDraft(prev => ({ ...prev, areaMinimaM2: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Área Máxima (m²)"
                  value={draft.areaMaximaM2}
                  onChange={v => setDraft(prev => ({ ...prev, areaMaximaM2: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Pé Direito Mínimo (m)"
                  value={draft.peDireitoMinimoM}
                  onChange={v => setDraft(prev => ({ ...prev, peDireitoMinimoM: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Carga no Piso (kg/m²)"
                  value={draft.cargaPisoKgm2}
                  onChange={v => setDraft(prev => ({ ...prev, cargaPisoKgm2: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Necessita Mezanino"
                  value={draft.necessitaMezanino ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaMezanino: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações Estruturais"
                  value={draft.obsEstrutura}
                  onChange={v => setDraft(prev => ({ ...prev, obsEstrutura: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Fachada e Visual */}
            {subTab === 'fachada' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Frente Mínima (m)"
                  value={draft.frenteMinimaM}
                  onChange={v => setDraft(prev => ({ ...prev, frenteMinimaM: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tipo de Fachada"
                  value={draft.tipoFachada}
                  onChange={v => setDraft(prev => ({ ...prev, tipoFachada: v }))}
                  options={[...TIPOS_FACHADA]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Comunicação Visual com LED"
                  value={draft.comunicacaoVisualLed ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, comunicacaoVisualLed: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Fachada"
                  value={draft.obsFachada}
                  onChange={v => setDraft(prev => ({ ...prev, obsFachada: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* TI e Telecom */}
            {subTab === 'telecom' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Pontos de Dados (rede)"
                  value={draft.pontosDados}
                  onChange={v => setDraft(prev => ({ ...prev, pontosDados: parseInt(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Necessita Fibra Óptica"
                  value={draft.necessitaFibra ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaFibra: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Telecom"
                  value={draft.obsTelecom}
                  onChange={v => setDraft(prev => ({ ...prev, obsTelecom: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Controle */}
            {subTab === 'controle' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Status do Laudo"
                  value={draft.statusNecessidadesTecnicas}
                  onChange={v => setDraft(prev => ({ ...prev, statusNecessidadesTecnicas: v }))}
                  options={[...STATUS_LAUDO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Responsável Técnico"
                  value={draft.responsavelTecnico}
                  onChange={v => setDraft(prev => ({ ...prev, responsavelTecnico: v }))}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Data da Vistoria"
                  value={draft.dataVistoria}
                  onChange={v => setDraft(prev => ({ ...prev, dataVistoria: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Observações */}
            {subTab === 'observacoes' && (
              <div className="grid grid-cols-1 gap-4">
                <Field
                  label="Observações Gerais"
                  value={draft.observacoes}
                  onChange={v => setDraft(prev => ({ ...prev, observacoes: v }))}
                  textarea
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'cessao') {
      const subTab = activeSubTab['cessao'];
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['avaliacao', 'pagamento'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'cessao': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'avaliacao' ? 'Avaliação do Ponto' : 'Condições de Pagamento'}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'avaliacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Res Sperata Proposta (R$)"
                  value={draft.resSperataProposta}
                  onChange={v => setDraft(prev => ({ ...prev, resSperataProposta: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Res Sperata Proposta (R$/m²)"
                  value={calculados.resSperataPropostaPorM2}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Referência de Mercado (R$/m²)"
                  value={draft.referenciadeMercadoPorM2}
                  disabled
                  type="number"
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Status Res Sperata"
                  value={draft.statusResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, statusResSperata: v }))}
                  options={[...STATUS_RES_SPERATA]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações"
                  value={draft.observacoesResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, observacoesResSperata: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'pagamento' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Sinal (R$)"
                  value={draft.sinalResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, sinalResSperata: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="% Sinal"
                  value={calculados.percentSinalResSperata}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Saldo (R$)"
                  value={calculados.saldoResSperata}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Forma de Pagamento do Saldo"
                  value={draft.formaPagamentoSaldoResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, formaPagamentoSaldoResSperata: v }))}
                  options={[...FORMAS_PAGAMENTO_SALDO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Número de Parcelas"
                  value={draft.numParcelasResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, numParcelasResSperata: parseInt(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Valor da Parcela (R$)"
                  value={calculados.valorParcelaResSperata}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'taxa-transferencia') {
      const subTab = activeSubTab['taxa-transferencia'];
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['valores', 'resumo'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'taxa-transferencia': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'valores' ? 'Valores da TT' : 'Resumo Financeiro'}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'valores' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="TT Contratual (R$)"
                  value={draft.ttContratual}
                  disabled
                  type="number"
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="TT Proposta (R$)"
                  value={draft.ttProposta}
                  onChange={v => setDraft(prev => ({ ...prev, ttProposta: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="TT Proposta (Nº de AMM)"
                  value={draft.ttPropostaNumAMM}
                  onChange={v => setDraft(prev => ({ ...prev, ttPropostaNumAMM: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Diferença (R$)"
                  value={calculados.diferencaTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="% Desconto/Acréscimo"
                  value={calculados.percentDescontoTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Sinal TT (R$)"
                  value={draft.sinalTT}
                  onChange={v => setDraft(prev => ({ ...prev, sinalTT: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="% Sinal TT"
                  value={calculados.percentSinalTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Saldo TT (R$)"
                  value={calculados.saldoTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Forma de Pagamento TT"
                  value={draft.formaPagamentoTT}
                  onChange={v => setDraft(prev => ({ ...prev, formaPagamentoTT: v }))}
                  options={[...FORMAS_PAGAMENTO_TT]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Status TT"
                  value={draft.statusTT}
                  onChange={v => setDraft(prev => ({ ...prev, statusTT: v }))}
                  options={[...STATUS_ANALISE]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Justificativa da Proposta"
                  value={draft.justificativaTT}
                  onChange={v => setDraft(prev => ({ ...prev, justificativaTT: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'resumo' && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9] mb-3">Resumo Financeiro</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Total Res Sperata (R$)"
                    value={calculados.totalResSperata}
                    calculated
                  
                  editMode={editMode}
                  readOnly={readOnly}
                />
                  <Field
                    label="Total TT (R$)"
                    value={calculados.totalTT}
                    calculated
                  
                  editMode={editMode}
                  readOnly={readOnly}
                />
                  <div className="col-span-2">
                    <Field
                      label="Total da Operação (R$)"
                      value={calculados.totalOperacao}
                      calculated
                    
                  editMode={editMode}
                  readOnly={readOnly}
                />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'parecer-comite') {
      const aprovadores = [
        { nome: 'Presidente', campoAprovado: 'parecerPresidente', campoData: 'parecerPresidenteData' },
        { nome: 'Diretoria Compartilhada (1)', campoAprovado: 'parecerDiretoriaComp1', campoData: 'parecerDiretoriaComp1Data' },
        { nome: 'Diretoria Compartilhada (2)', campoAprovado: 'parecerDiretoriaComp2', campoData: 'parecerDiretoriaComp2Data' },
        { nome: 'Superintendente Comercial', campoAprovado: 'parecerSuperintendente', campoData: 'parecerSuperintendenteData' },
        { nome: 'In Networking', campoAprovado: 'parecerInNetworking', campoData: 'parecerInNetworkingData' },
      ];
      const podeAssinar = draft.status === STATUS_AGUARDANDO_COMITE;

      return (
        <div className="flex-1 overflow-y-auto p-6">
          {/* Aviso quando status não permite assinatura */}
          {!podeAssinar && (
            <div className="mb-4 flex items-start gap-2.5 px-4 py-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl">
              <span className="text-amber-500 text-base flex-shrink-0 mt-0.5">ⓘ</span>
              <p className="text-xs text-amber-700 dark:text-amber-400">
                As assinaturas do comitê só podem ser registradas quando a proposta estiver com o status <strong>Aguardando análise do comitê</strong>. Status atual: <strong>{draft.status}</strong>.
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aprovadores.map(apr => {
              const assinado = (draft as any)[apr.campoAprovado] === 'Assinado';
              return (
                <div key={apr.nome} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-[#2E3447]">
                  {/* Nome do aprovador */}
                  <p className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">
                    {apr.nome}
                  </p>

                  {/* Checkbox assinatura */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={assinado}
                      onChange={e => {
                        setDraft(prev => ({
                          ...prev,
                          [apr.campoAprovado]: e.target.checked ? 'Assinado' : '',
                          [apr.campoData]: e.target.checked ? new Date().toISOString().slice(0, 10) : '',
                        }));
                      }}
                      disabled={disabled || !podeAssinar}
                      className="w-4 h-4 text-[#D93030] border-gray-300 dark:border-[#2E3447] rounded focus:ring-[#D93030] disabled:cursor-not-allowed"
                    />
                    <label className="text-xs text-gray-600 dark:text-[#94A3B8]">Assinado</label>
                    {assinado && (
                      <span className="ml-auto text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">✓ OK</span>
                    )}
                  </div>

                  {/* Data da assinatura — só visível se assinado e em modo edição */}
                  {assinado && editMode && (
                    <div>
                      <p className="text-xs text-gray-500 dark:text-[#94A3B8] mb-1">Data da assinatura</p>
                      <DatePickerInput
                        value={(draft as any)[apr.campoData] || ''}
                        onChange={v => setDraft(prev => ({ ...prev, [apr.campoData]: v }))}
                        placeholder="DD/MM/AAAA"
                      />
                    </div>
                  )}
                  {/* Exibir data somente leitura se assinado e fora do modo edição */}
                  {assinado && !editMode && (draft as any)[apr.campoData] && (
                    <p className="text-xs text-gray-500 dark:text-[#94A3B8]">
                      Assinado em <span className="font-semibold text-gray-700 dark:text-[#F1F5F9]">{(draft as any)[apr.campoData]}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    if (activeTab === 'historico') {
      return (
        <div className="flex-1 overflow-y-auto p-6">
          {editMode && (
            <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Salve ou cancele a edição atual antes de consultar o histórico.
              </p>
            </div>
          )}

          {historicoEdicoes.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-[#64748B]">
              Nenhuma edição registrada
            </div>
          ) : (
            <>
              {/* Cards — mobile only */}
              <div className="flex flex-col gap-3 sm:hidden">
                {historicoEdicoes.map(ed => (
                  <button
                    key={ed.id}
                    onClick={() => !editMode && setModalHistoricoSnapshot(ed.snapshot)}
                    disabled={editMode}
                    className={`text-left p-3 rounded-xl border transition-colors w-full
                      ${editMode
                        ? 'opacity-50 cursor-not-allowed border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938]'
                        : 'border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{ed.snapshot.nomeFantasia || '—'}</span>
                      <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0
                        ${ed.snapshot.tipo === TIPO_NOVA_INSTALACAO ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400'
                          : ed.snapshot.tipo === TIPO_RENOVACAO ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400'
                          : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'}`}>
                        {ed.snapshot.tipo}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-[#64748B] mb-2">
                      {ed.snapshot.id} · {ed.editadoPorNome}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">
                        {ed.snapshot.valorProposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <StatusPropostaBadge status={ed.snapshot.status} />
                      <span className="text-xs text-gray-400">{new Date(ed.editadoEm).toLocaleString('pt-BR')}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Tabela — desktop only */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-gray-200 dark:border-[#2E3447]">
                    <tr className="text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wide">
                      <th className="pb-2">Data da edição</th>
                      <th className="pb-2">Editado por</th>
                      <th className="pb-2">Loja</th>
                      <th className="pb-2">Tipo</th>
                      <th className="pb-2">Código</th>
                      <th className="pb-2">Valor</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-[#2E3447]">
                    {historicoEdicoes.map(ed => (
                      <tr
                        key={ed.id}
                        onClick={() => !editMode && setModalHistoricoSnapshot(ed.snapshot)}
                        className={`transition-colors
                          ${editMode
                            ? 'opacity-50 cursor-not-allowed'
                            : 'cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1A1F2E]'}`}
                      >
                        <td className="py-3 text-gray-700 dark:text-[#F1F5F9]">
                          {new Date(ed.editadoEm).toLocaleString('pt-BR')}
                        </td>
                        <td className="py-3 text-gray-700 dark:text-[#F1F5F9]">{ed.editadoPorNome}</td>
                        <td className="py-3 text-gray-700 dark:text-[#F1F5F9]">{ed.snapshot.nomeFantasia || '—'}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {ed.snapshot.tipo}
                          </span>
                        </td>
                        <td className="py-3 font-mono text-xs text-gray-500 dark:text-[#94A3B8]">
                          {ed.snapshot.id}
                        </td>
                        <td className="py-3 font-semibold text-gray-800 dark:text-[#F1F5F9]">
                          {ed.snapshot.valorProposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}
                        </td>
                        <td className="py-3">
                          <StatusPropostaBadge status={ed.snapshot.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      );
    }

    if (activeTab === 'anexos') {
      return (
        <div className="flex-1 overflow-y-auto p-6">

          {/* Cabeçalho da aba com botão de upload */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Paperclip className="w-4 h-4 text-gray-400 dark:text-[#64748B]" />
              <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
                Documentos anexados — {documentos.length}
              </span>
            </div>

            {/* Botão de upload — visível somente em modo edição */}
            {editMode && !readOnly && (
              <button
                onClick={handleAnexarDocumento}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#D93030] hover:bg-[#c02828] text-white rounded-lg transition-colors"
              >
                <Upload className="w-3.5 h-3.5" /> Anexar Documento
              </button>
            )}
          </div>

          {/* Mensagem quando não está em modo edição */}
          {!editMode && !readOnly && (
            <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Para anexar ou remover documentos, clique em <strong>Editar</strong> na toolbar.
              </p>
            </div>
          )}

          {/* Lista de documentos */}
          {documentos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-[#64748B]">
              <Paperclip className="w-10 h-10 mb-3 opacity-30" />
              <p className="text-sm">Nenhum documento anexado</p>
              {editMode && (
                <p className="text-xs mt-1 opacity-70">Clique em "Anexar Documento" para adicionar</p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {documentos.map(doc => (
                <div
                  key={doc.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-[#1A1F2E] rounded-xl border border-gray-100 dark:border-[#2E3447] hover:border-gray-200 dark:hover:border-[#3E4557] transition-colors"
                >
                  {/* Ícone de tipo */}
                  <div className="w-9 h-9 rounded-lg bg-[#D93030]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-[#D93030]" />
                  </div>

                  {/* info + badge em mobile ficam empilhados */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-gray-800 dark:text-[#F1F5F9] truncate">{doc.nomeOriginal}</p>
                      {/* badge — no topo direito em mobile, inline em desktop */}
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-200 dark:bg-[#2E3447] text-gray-500 dark:text-[#94A3B8] flex-shrink-0">
                        {doc.tipo}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-[#64748B] mt-0.5 leading-relaxed">
                      {doc.tamanho} · {doc.dataUpload} · {doc.idUsuario}
                    </p>
                  </div>

                  {/* Botão remover — somente em modo edição */}
                  {editMode && !readOnly && (
                    <button
                      onClick={() => handleRemoverDocumento(doc.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex-shrink-0 mt-0.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  }

  return (
    <>
      {/* Overlay com fundo borrado */}
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Janela do modal */}
        <div
          className="relative z-10 flex flex-col bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full max-w-4xl overflow-hidden"
          style={{ height: 'min(90vh, 100dvh - 80px)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] rounded-t-2xl">

          {/* MODO VISUALIZAÇÃO: Novo, Editar, navegação, Sair */}
          {!editMode && !readOnly && (
            <>
              <ToolbarBtn
                icon={<FilePlus className="w-4 h-4" />}
                label="Novo"
                onClick={handleNovo}
              />
              <div className="w-px h-6 bg-white/20 mx-1" />
              <ToolbarBtn
                icon={<Pencil className="w-4 h-4" />}
                label="Editar"
                onClick={() => { setDraft(structuredClone(propostaOld)); setEditMode(true); }}
              />
              {/* Anterior e Próximo — ocultos quando é nova proposta */}
              {!forceEditMode && proposta.unidade && (
                <>
                  <div className="w-px h-6 bg-white/20 mx-1" />
                  <ToolbarBtn
                    icon={<ChevronLeft className="w-4 h-4" />}
                    label="Anterior"
                    onClick={handleAnterior}
                  />
                  <ToolbarBtn
                    icon={<ChevronRight className="w-4 h-4" />}
                    label="Próximo"
                    onClick={handleProximo}
                  />
                </>
              )}
            </>
          )}

          {/* MODO EDIÇÃO: Gravar, Cancelar, Sair */}
          {editMode && (
            <>
              <ToolbarBtn
                icon={<Save className="w-4 h-4" />}
                label="Gravar"
                onClick={handleGravar}
              />
              <div className="w-px h-6 bg-white/20 mx-1" />
              <ToolbarBtn
                icon={<X className="w-4 h-4" />}
                label="Cancelar"
                onClick={handleCancelar}
              />
            </>
          )}

          {/* MODO SOMENTE LEITURA: navegação */}
          {readOnly && !forceEditMode && proposta.unidade && (
            <>
              <ToolbarBtn
                icon={<ChevronLeft className="w-4 h-4" />}
                label="Anterior"
                onClick={handleAnterior}
              />
              <ToolbarBtn
                icon={<ChevronRight className="w-4 h-4" />}
                label="Próximo"
                onClick={handleProximo}
              />
            </>
          )}

          {/* SAIR — sempre visível em todos os modos */}
          <div className="w-px h-6 bg-white/20 mx-1" />
          <ToolbarBtn
            icon={<LogOut className="w-4 h-4" />}
            label="Sair"
            onClick={handleSair}
          />

          {/* Identificação — lado direito */}
          <div className="ml-auto flex items-center gap-3 pr-2">
            {editMode && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-white/20 text-white rounded-full">
                Em edição
              </span>
            )}
            {readOnly && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-white/10 text-white/70 rounded-full">
                Somente leitura
              </span>
            )}
          </div>

        </div>

        {/* Cabeçalho de disponibilidade */}
        <div className="flex-shrink-0 grid grid-cols-2 sm:flex sm:items-center sm:gap-6 gap-x-3 gap-y-2 px-4 sm:px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">

          {/* Código */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Código</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] font-mono">{draft.id}</span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Nº da Loja — clicável em modo edição */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Nº da Loja</span>
            {editMode && !proposta.unidade ? (
              // Nova proposta: clicável para selecionar disponibilidade
              <button
                onClick={() => setShowDisponibilidadePicker(true)}
                className="text-sm font-semibold text-[#D93030] dark:text-[#E04444] font-mono underline decoration-dotted underline-offset-2 hover:text-[#b92828] transition-colors text-left"
              >
                {draft.unidade || 'Selecionar...'}
              </button>
            ) : (
              // Proposta existente ou modo visualização: estático
              <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] font-mono">
                {draft.unidade || '—'}
              </span>
            )}
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Piso */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Piso</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {draft.unidade ? derivePiso(draft.unidade) : '—'}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Área */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Área (m²)</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {draft.area ? `${draft.area} m²` : '—'}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Corredor */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Corredor</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {draft.unidade ? deriveCorreidor(draft.unidade) : '—'}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Status da Proposta — col-span-2 em mobile */}
          <div className="flex flex-col gap-0.5 col-span-2 sm:col-span-1">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Status da Proposta</span>
            <select
              value={draft.status}
              disabled={!editMode || readOnly}
              onChange={e => {
                const novoStatus = e.target.value as StatusProposta;
                // Não chamar updateProposalStatus aqui — aplicar só no Gravar
                // para garantir que o snapshot do histórico capture o estado ANTERIOR
                setDraft(prev => ({ ...prev, status: novoStatus }));
              }}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border focus:outline-none transition-colors w-auto
                ${!editMode || readOnly ? 'cursor-default' : 'cursor-pointer'}
                ${STATUS_COLORS_SELECT[draft.status]?.bg ?? 'bg-gray-100 dark:bg-gray-700'}
                ${STATUS_COLORS_SELECT[draft.status]?.text ?? 'text-gray-600 dark:text-gray-400'}
                ${STATUS_COLORS_SELECT[draft.status]?.border ?? 'border-gray-300 dark:border-gray-600'}
                [&>option]:bg-white [&>option]:dark:bg-[#1E2435] [&>option]:text-gray-900 [&>option]:dark:text-[#F1F5F9]`}
            >
              {(STATUS_PROPOSTA.filter(s => s !== STATUS_VENCIDA) as StatusProposta[])
                // Incluir Vencida na lista SOMENTE se o status atual já for Vencida
                .concat(draft.status === STATUS_VENCIDA ? [STATUS_VENCIDA] : [])
                .map(s => (
                  <option key={s} value={s} disabled={s === STATUS_VENCIDA}>
                    {s === STATUS_VENCIDA ? `${STATUS_VENCIDA} (automático)` : s}
                  </option>
                ))
              }
            </select>
          </div>

        </div>

        {/* Abas principais */}
        <div className="flex-shrink-0 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">

          {/* Mobile: select dropdown */}
          <div className="block sm:hidden px-4 py-2">
            <select
              value={activeTab}
              onChange={e => {
                const aba = ABAS_PRINCIPAIS.find(a => a.id === e.target.value);
                if (aba && !aba.disabled) setActiveTab(e.target.value);
              }}
              className="w-full h-9 px-3 text-sm font-medium bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]"
            >
              {ABAS_PRINCIPAIS.map(aba => (
                <option
                  key={aba.id}
                  value={aba.id}
                  disabled={aba.disabled}
                >
                  {aba.label}{aba.disabled ? ' (indisponível)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: botões em linha */}
          <div className="hidden sm:flex px-4 gap-1 overflow-x-auto">
            {ABAS_PRINCIPAIS.map(aba => (
              <button
                key={aba.id}
                onClick={() => !aba.disabled && setActiveTab(aba.id)}
                className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors
                  ${aba.disabled
                    ? 'opacity-40 cursor-not-allowed text-gray-400 dark:text-[#64748B] border-transparent'
                    : activeTab === aba.id
                      ? 'text-[#D93030] dark:text-[#E04444] border-[#D93030] dark:border-[#E04444]'
                      : 'text-gray-500 dark:text-[#94A3B8] border-transparent hover:text-gray-800 dark:hover:text-[#F1F5F9]'}`}
              >
                {aba.label}
              </button>
            ))}
          </div>

        </div>

        {/* Conteúdo */}
        {renderTabContent()}
        </div>{/* fim da janela */}
      </div>{/* fim do overlay */}

      {/* Modal de histórico empilhado */}
      {/* Modal de alerta — validação para aprovar proposta */}
      {alertaAprovacao.length > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setAlertaAprovacao([])} />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-md border border-red-200 dark:border-red-900/40 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Não é possível aprovar a proposta</h3>
                <p className="text-xs text-white/70 mt-0.5">Há etapas pendentes que precisam ser concluídas</p>
              </div>
            </div>
            {/* Pendências */}
            <div className="p-6">
              <ul className="space-y-2">
                {alertaAprovacao.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-[#CBD5E1]">
                    <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setAlertaAprovacao([])}
                className="mt-6 w-full bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              >
                Voltar e corrigir
              </button>
            </div>
          </div>
        </div>
      )}

      {modalHistoricoSnapshot && (() => {
        const snapshots = historicoEdicoes.map(e => e.snapshot);
        const idxAtual = snapshots.findIndex(s => s === modalHistoricoSnapshot);
        return (
          <PropostaManutencaoModal
            proposta={modalHistoricoSnapshot}
            allPropostas={snapshots}
            initialIndex={idxAtual >= 0 ? idxAtual : 0}
            onClose={() => setModalHistoricoSnapshot(null)}
            readOnly={true}
            onNavigate={(p) => setModalHistoricoSnapshot(p as Proposta)}
          />
        );
      })()}

      {/* Modal de confirmação ao sair com edição em andamento */}
      {showSairModal && (
        <ConfirmModal
          title="Alterações não salvas"
          subtitle="Deseja salvar antes de sair?"
          message={
            <>
              Você tem alterações em andamento na proposta{' '}
              <span className="font-semibold text-gray-800 dark:text-[#F1F5F9]">{proposta.id}</span>.
              O que deseja fazer?
            </>
          }
          variant="sim-nao-cancelar"
          labelConfirm={<><Save className="w-4 h-4" /> Sim, salvar e sair</>}
          labelCancel="Não, descartar alterações"
          labelDismiss="Cancelar, continuar editando"
          onConfirm={() => {
            const isNovaProposta = proposta.id.startsWith('PROP-NOVO-');
            if (isNovaProposta) {
              const { id: _tempId, ...resto } = draft;
              propostasApi.criar(resto as any).then(() => {});
            } else {
              propostasApi.atualizar(proposta.id, draft as any).then(() => {});
            }
            setEditMode(false);
            setShowSairModal(false);
            onClose();
          }}
          onCancel={() => {
            setDraft(structuredClone(propostaOld));
            setEditMode(false);
            setShowSairModal(false);
            onClose();
          }}
          onDismiss={() => setShowSairModal(false)}
        />
      )}

      {/* Modal de seleção de disponibilidade */}
      {showDisponibilidadePicker && (
        <DisponibilidadePickerModal
          onSelect={handleSelecionarDisponibilidade}
          onClose={() => {
            setShowDisponibilidadePicker(false);
            // Se fechou sem selecionar e a proposta ainda não tem disponibilidade → fechar modal
            if (!draft.unidade) {
              onClose();
            }
          }}
        />
      )}

      {/* Input file hidden para upload de anexos */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
        className="hidden"
        onChange={handleFileSelected}
      />
    </>
  );
}
