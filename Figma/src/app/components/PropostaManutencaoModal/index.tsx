import { useState, useEffect, useRef, useMemo } from "react";
import { FilePlus, Pencil, Save, X, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { propostas as propostasApi, documentos as documentosApi } from "../../data/apiClient";
import { unidades } from "../../data/apiClient";
import { useApi } from "../../data/useApi";
import type { Proposta, StatusProposta } from "../../data/comercialData";
import type { Unidade } from "../../data/apiClient";
import {
  SEGMENTOS, TIPOS_PROPOSTA,
  STATUS_PROPOSTA,
  STATUS_AGUARDANDO_FIN, STATUS_AGUARDANDO_COMITE, STATUS_APROVADO,
  STATUS_VENCIDA, STATUS_OCUPADO,
  TIPO_CESSAO, TIPO_TRANSFERENCIA,
  STATUS_PROPOSTA_COLORS,
  PISO_LABEL, CORREDOR_LABEL,
} from "../../enums";
import type { PropostaResumo, Documento } from "../../data/apiClient";
import type { PropostaHistorico } from "../../entities/proposta_historico";
import { ConfirmModal } from "../ConfirmModal";
import { ToolbarBtn, ToolbarDivider, ManutencaoToolbar, ManutencaoModalShell, EnumSelect, TabBar, InfoHeaderBar, HeaderField, HeaderDivider } from "../ManutencaoShared";
import type { TabDef } from "../ManutencaoShared";
import type { Calculados } from "./types";
import { LojaPropostaTab } from "./LojaPropostaTab";
import { LojaAnteriorTab } from "./LojaAnteriorTab";
import { NecessidadesTecnicasTab } from "./NecessidadesTecnicasTab";
import { CessaoTab } from "./CessaoTab";
import { TaxaTransferenciaTab } from "./TaxaTransferenciaTab";
import { ParecerComiteTab } from "./ParecerComiteTab";
import { HistoricoTab } from "./HistoricoTab";
import { AnexosTab } from "./AnexosTab";

// ── IDs de aba — fonte única de verdade para ABAS_PRINCIPAIS e renderTabContent ──
const TAB = {
  LOJA_PROPOSTA:          'loja-proposta',
  LOJA_ANTERIOR:          'loja-anterior',
  NECESSIDADES_TECNICAS:  'necessidades-tecnicas',
  CESSAO:                 'cessao',
  TAXA_TRANSFERENCIA:     'taxa-transferencia',
  PARECER_COMITE:         'parecer-comite',
  HISTORICO:              'historico',
  ANEXOS:                 'anexos',
} as const;

// ── Sub-aba inicial de cada aba (usada no useState e como fallback no switch) ──
const SUBTAB_DEFAULT = {
  [TAB.LOJA_PROPOSTA]:         'identificacao',
  [TAB.LOJA_ANTERIOR]:         'identificacao',
  [TAB.NECESSIDADES_TECNICAS]: 'eletrica',
  [TAB.CESSAO]:                'avaliacao',
  [TAB.TAXA_TRANSFERENCIA]:    'valores',
} as const;

// ── Aprovadores do comitê — definido fora do componente para não recriar a cada render ──
const APROVADORES = [
  { nome: 'Presidente',                  campo: 'parecerPresidente' },
  { nome: 'Diretoria Compartilhada (1)', campo: 'parecerDiretoriaComp1' },
  { nome: 'Diretoria Compartilhada (2)', campo: 'parecerDiretoriaComp2' },
  { nome: 'Superintendente Comercial',   campo: 'parecerSuperintendente' },
  { nome: 'In Networking',               campo: 'parecerInNetworking' },
] as const;

// ── Abas estáticas (as condicionais disabled são calculadas em runtime) ──
const ABAS_BASE: TabDef[] = [
  { id: TAB.LOJA_PROPOSTA,         label: 'Loja Proposta' },
  { id: TAB.LOJA_ANTERIOR,         label: 'Loja Anterior' },
  { id: TAB.NECESSIDADES_TECNICAS, label: 'Necessidades Técnicas' },
  { id: TAB.CESSAO,                label: 'Cessão de Direitos' },
  { id: TAB.TAXA_TRANSFERENCIA,    label: 'Taxa de Transferência' },
  { id: TAB.PARECER_COMITE,        label: 'Parecer do Comitê' },
  { id: TAB.HISTORICO,             label: 'Histórico' },
  { id: TAB.ANEXOS,                label: 'Anexos' },
];

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
  const [propostaOld, setPropostaOld] = useState<Proposta>(structuredClone(proposta as Proposta));
  const [draft, setDraft] = useState<Proposta>(structuredClone(proposta as Proposta));
  const [activeTab, setActiveTab] = useState<string>(TAB.LOJA_PROPOSTA);
  const [activeSubTab, setActiveSubTab] = useState<Record<string, string>>({
    [TAB.LOJA_PROPOSTA]:         SUBTAB_DEFAULT[TAB.LOJA_PROPOSTA],
    [TAB.LOJA_ANTERIOR]:         SUBTAB_DEFAULT[TAB.LOJA_ANTERIOR],
    [TAB.NECESSIDADES_TECNICAS]: SUBTAB_DEFAULT[TAB.NECESSIDADES_TECNICAS],
    [TAB.CESSAO]:                SUBTAB_DEFAULT[TAB.CESSAO],
    [TAB.TAXA_TRANSFERENCIA]:    SUBTAB_DEFAULT[TAB.TAXA_TRANSFERENCIA],
  });
  const [historicoEdicoes, setHistoricoEdicoes] = useState<PropostaHistorico[]>([]);
  const [alertaAprovacao, setAlertaAprovacao] = useState<string[]>([]);
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [tick, setTick] = useState(0);
  const [showSairModal, setShowSairModal] = useState(false);

  const { data: unidadesData } = useApi(() => unidades.listar(), []);
  const allUnidades = (unidadesData || []) as Unidade[];

  const currentIndex = initialIndex !== undefined
    ? initialIndex
    : allPropostas.findIndex(p => p.id === proposta.id);

  useEffect(() => {
  const isNova = proposta.id.startsWith('PROP-NOVO-');

  if (!isNova) {
    propostasApi.historico.listar(proposta.id).then(hist => setHistoricoEdicoes(hist || [])).catch(() => {});
    documentosApi.listar(proposta.id).then(docs => setDocumentos(Array.isArray(docs) ? docs : [])).catch(() => {});
  } else {
    setHistoricoEdicoes([]);
    setDocumentos([]);
  }

  setPropostaOld(structuredClone(proposta as Proposta));
  setDraft(structuredClone(proposta as Proposta));
  if (!proposta.unidade) {
    setEditMode(true);
  } else if (forceEditMode) {
    setEditMode(true);
  }
}, [proposta.id, proposta, tick]);

  function derivePiso(unidade: string): string {
    if (unidade.startsWith('P')) return PISO_LABEL['P'];
    if (unidade.startsWith('S')) return PISO_LABEL['S'];
    if (unidade.startsWith('T')) return PISO_LABEL['T'];
    return '-';
  }

  function deriveCorreidor(unidade: string): string {
    const num = parseInt(unidade.split('-')[1] || '0');
    if (num <= 30) return CORREDOR_LABEL['A'];
    if (num <= 60) return CORREDOR_LABEL['B'];
    return CORREDOR_LABEL['C'];
  }

  const calculados: Calculados = {
    resSperataPropostaPorM2:  draft.resSperataProposta && draft.area ? draft.resSperataProposta / draft.area : 0,
    percentSinalResSperata:   draft.sinalResSperata && draft.resSperataProposta ? (draft.sinalResSperata / draft.resSperataProposta) * 100 : 0,
    saldoResSperata:          (draft.resSperataProposta || 0) - (draft.sinalResSperata || 0),
    valorParcelaResSperata:   draft.numParcelasResSperata && draft.sinalResSperata && draft.resSperataProposta
      ? ((draft.resSperataProposta - draft.sinalResSperata) / draft.numParcelasResSperata) : 0,
    diferencaTT:              (draft.ttProposta || 0) - (draft.ttContratual || 0),
    percentDescontoTT:        draft.ttContratual && draft.ttProposta ? ((draft.ttProposta - draft.ttContratual) / draft.ttContratual) * 100 : 0,
    percentSinalTT:           draft.sinalTT && draft.ttProposta ? (draft.sinalTT / draft.ttProposta) * 100 : 0,
    saldoTT:                  (draft.ttProposta || 0) - (draft.sinalTT || 0),
    totalResSperata:          draft.resSperataProposta || 0,
    totalTT:                  draft.ttProposta || 0,
    totalOperacao:            (draft.resSperataProposta || 0) + (draft.ttProposta || 0),
    dividaTotal:              (draft.lojaAnteriorDividaAMM || 0) + (draft.lojaAnteriorDividaNegociada || 0) +
                              (draft.lojaAnteriorDividaCondominio || 0) + (draft.lojaAnteriorDividaFPP || 0),
  };

  const handleNovo = () => {
    const propostaEmBranco: Proposta = {
      id: `PROP-NOVO-${Date.now()}`,
      idUnidade: proposta.idUnidade,
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
    if (draft.status === STATUS_APROVADO) {
      const pendencias: string[] = [];
      const statusHistorico = historicoEdicoes.map(e => e.status);
      const teveFin = statusHistorico.includes(STATUS_AGUARDANDO_FIN) || proposta.status === STATUS_AGUARDANDO_FIN;
      const tevelComite = statusHistorico.includes(STATUS_AGUARDANDO_COMITE) || proposta.status === STATUS_AGUARDANDO_COMITE;
      const statusAtual = propostaOld.status;
      if (!teveFin && statusAtual !== STATUS_AGUARDANDO_FIN && !statusHistorico.some(s => s === STATUS_AGUARDANDO_FIN)) {
        pendencias.push(`A proposta não passou pela etapa de ${STATUS_AGUARDANDO_FIN}`);
      }
      if (!tevelComite && statusAtual !== STATUS_AGUARDANDO_COMITE && !statusHistorico.some(s => s === STATUS_AGUARDANDO_COMITE)) {
        pendencias.push(`A proposta não passou pela etapa de ${STATUS_AGUARDANDO_COMITE}`);
      }
      const naoAssinados = APROVADORES.filter(a => (draft as any)[a.campo] !== 'Assinado');
      if (naoAssinados.length > 0) {
        pendencias.push(`Parecer do Comitê pendente para: ${naoAssinados.map(a => a.nome).join(', ')}`);
      }
      if (pendencias.length > 0) {
        setAlertaAprovacao(pendencias);
        return;
      }
    }

    setAlertaAprovacao([]);
    const isNovaProposta = draft.id.startsWith('PROP-NOVO-');
    if (isNovaProposta) {
      const { id: _tempId, ...resto } = draft;
      await propostasApi.criar(resto as any);
    } else {
      await propostasApi.atualizar(draft.id, draft as any);
      if (draft.status !== propostaOld.status) {
        await propostasApi.atualizarStatus(draft.id, draft.status as any);
      }
      const hist = await propostasApi.historico.listar(draft.id).catch(() => []);
      setHistoricoEdicoes(hist || []);
      setPropostaOld(structuredClone(draft));
    }
    setEditMode(false);
  };

  const handleCancelar = () => {
    setDraft(structuredClone(propostaOld));
    setEditMode(false);
  };

  const handleAnterior = () => {
    if (currentIndex > 0) {
      const prev = allPropostas[currentIndex - 1];
      if (onNavigate) { onNavigate(prev); }
      else { window.dispatchEvent(new CustomEvent('navigate-proposta', { detail: prev })); }
    }
  };

  const handleProximo = () => {
    if (currentIndex < allPropostas.length - 1) {
      const next = allPropostas[currentIndex + 1];
      if (onNavigate) { onNavigate(next); }
      else { window.dispatchEvent(new CustomEvent('navigate-proposta', { detail: next })); }
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnexarDocumento = () => fileInputRef.current?.click();

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    Array.from(files).forEach(file => {
      const nrAnexo = (documentos.length + 1).toString().padStart(3, '0');
      const propId = proposta.id.replace('PROP-', '');
      const codigo = `Anexo${propId}${nrAnexo}`;
      documentosApi.upload(proposta.id, file, codigo)
        .then(doc => setDocumentos(prev => [...prev, doc as any]))
        .catch(() => {});
    });
    e.target.value = '';
    setTick(t => t + 1);
  };

  const handleRemoverDocumento = (docId: string) => {
    documentosApi.remover(docId)
      .then(() => setDocumentos(prev => prev.filter(d => d.id !== docId)))
      .catch(() => {});
  };

  const handleSair = () => {
    if (editMode) { setShowSairModal(true); }
    else { onClose(); }
  };

  const handleSelecionarDisponibilidade = async (unidade: Unidade) => {
    setDraft(prev => ({ ...prev, idUnidade: unidade.id, unidade: unidade.codigo, area: unidade.area, lojistaId: unidade.id }));
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
  };

  const isCessaoAtiva = draft.tipoOperacao === TIPO_CESSAO || draft.tipoOperacao === TIPO_TRANSFERENCIA;
  const isTTAtiva = draft.tipoOperacao === TIPO_TRANSFERENCIA;

  const ABAS_PRINCIPAIS = useMemo<TabDef[]>(() =>
    ABAS_BASE
      .filter(a => a.id !== TAB.HISTORICO || !readOnly)
      .map(a => {
        if (a.id === TAB.CESSAO)           return { ...a, disabled: !isCessaoAtiva };
        if (a.id === TAB.TAXA_TRANSFERENCIA) return { ...a, disabled: !isTTAtiva };
        return a;
      })
  , [isCessaoAtiva, isTTAtiva, readOnly]);

  const tabProps = { draft, setDraft, editMode, readOnly };

  const subTabChange = (tab: string) => (st: string) =>
    setActiveSubTab((prev: Record<string, string>) => ({ ...prev, [tab]: st }));

  function renderTabContent() {
    switch (activeTab) {
      case TAB.LOJA_PROPOSTA:
        return <LojaPropostaTab {...tabProps} activeSubTab={activeSubTab[TAB.LOJA_PROPOSTA]} onSubTabChange={subTabChange(TAB.LOJA_PROPOSTA)} />;
      case TAB.LOJA_ANTERIOR:
        return <LojaAnteriorTab {...tabProps} activeSubTab={activeSubTab[TAB.LOJA_ANTERIOR] || SUBTAB_DEFAULT[TAB.LOJA_ANTERIOR]} onSubTabChange={subTabChange(TAB.LOJA_ANTERIOR)} calculados={calculados} />;
      case TAB.NECESSIDADES_TECNICAS:
        return <NecessidadesTecnicasTab {...tabProps} activeSubTab={activeSubTab[TAB.NECESSIDADES_TECNICAS] || SUBTAB_DEFAULT[TAB.NECESSIDADES_TECNICAS]} onSubTabChange={subTabChange(TAB.NECESSIDADES_TECNICAS)} />;
      case TAB.CESSAO:
        return <CessaoTab {...tabProps} activeSubTab={activeSubTab[TAB.CESSAO]} onSubTabChange={subTabChange(TAB.CESSAO)} calculados={calculados} />;
      case TAB.TAXA_TRANSFERENCIA:
        return <TaxaTransferenciaTab {...tabProps} activeSubTab={activeSubTab[TAB.TAXA_TRANSFERENCIA]} onSubTabChange={subTabChange(TAB.TAXA_TRANSFERENCIA)} calculados={calculados} />;
      case TAB.PARECER_COMITE:
        return <ParecerComiteTab {...tabProps} />;
      case TAB.HISTORICO:
        return <HistoricoTab historico={historicoEdicoes} editMode={editMode} />;
      case TAB.ANEXOS:
        return <AnexosTab documentos={documentos} editMode={editMode} readOnly={readOnly} onAnexar={handleAnexarDocumento} onRemover={handleRemoverDocumento} />;
      default:
        return null;
    }
  }

  return (
    <>
      <ManutencaoModalShell maxWidth="max-w-4xl">
        <ManutencaoToolbar>
          {!editMode && !readOnly && (
            <>
              <ToolbarBtn icon={<FilePlus className="w-4 h-4" />} label="Novo" onClick={handleNovo} />
              <ToolbarDivider />
              <ToolbarBtn icon={<Pencil className="w-4 h-4" />} label="Editar" onClick={() => { setDraft(structuredClone(propostaOld)); setEditMode(true); }} />
              {!forceEditMode && proposta.unidade && (
                <>
                  <ToolbarDivider />
                  <ToolbarBtn icon={<ChevronLeft className="w-4 h-4" />} label="Anterior" onClick={handleAnterior} />
                  <ToolbarBtn icon={<ChevronRight className="w-4 h-4" />} label="Próximo" onClick={handleProximo} />
                </>
              )}
            </>
          )}
          {editMode && (
            <>
              <ToolbarBtn icon={<Save className="w-4 h-4" />} label="Gravar" onClick={handleGravar} />
              <ToolbarDivider />
              <ToolbarBtn icon={<X className="w-4 h-4" />} label="Cancelar" onClick={handleCancelar} />
            </>
          )}
          {readOnly && !forceEditMode && proposta.unidade && (
            <>
              <ToolbarBtn icon={<ChevronLeft className="w-4 h-4" />} label="Anterior" onClick={handleAnterior} />
              <ToolbarBtn icon={<ChevronRight className="w-4 h-4" />} label="Próximo" onClick={handleProximo} />
            </>
          )}
          <div className="w-px h-6 bg-white/20 mx-1" />
          <ToolbarBtn icon={<LogOut className="w-4 h-4" />} label="Sair" onClick={handleSair} />
          <div className="ml-auto flex items-center gap-3 pr-2">
            {editMode && <span className="px-2 py-0.5 text-xs font-semibold bg-white/20 text-white rounded-full">Em edição</span>}
            {readOnly && <span className="px-2 py-0.5 text-xs font-semibold bg-white/10 text-white/70 rounded-full">Somente leitura</span>}
          </div>
        </ManutencaoToolbar>

        <InfoHeaderBar>
          <HeaderField label="Código" value={draft.id} mono />
          <HeaderDivider />
          <HeaderField label="Nº da Loja">
            {editMode && !proposta.unidade ? (
              <EnumSelect
                value={draft.unidade || ''}
                onChange={v => {
                  const u = allUnidades.find(u => u.codigo === v);
                  if (u) handleSelecionarDisponibilidade(u);
                }}
                placeholder="Selecionar..."
                className="font-mono"
                allowFilter
                filterableOptions={allUnidades.map(u => ({ value: u.codigo, label: `${u.codigo} — ${u.status}` }))}
              />
            ) : (
              <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] font-mono">{draft.unidade || '—'}</span>
            )}
          </HeaderField>
          <HeaderDivider />
          <HeaderField label="Piso"      value={draft.unidade ? derivePiso(draft.unidade) : '—'} />
          <HeaderDivider />
          <HeaderField label="Área (m²)" value={draft.area ? `${draft.area} m²` : '—'} />
          <HeaderDivider />
          <HeaderField label="Corredor"  value={draft.unidade ? deriveCorreidor(draft.unidade) : '—'} />
          <HeaderDivider />
          <HeaderField label="Status da Proposta" colSpanFull>
            <EnumSelect
              value={draft.status}
              disabled={!editMode || readOnly}
              onChange={v => setDraft(prev => ({ ...prev, status: v as StatusProposta }))}
              colorMap={STATUS_PROPOSTA_COLORS}
              className="w-auto py-1"
            >
              {(STATUS_PROPOSTA.filter(s => s !== STATUS_VENCIDA) as StatusProposta[])
                .concat(draft.status === STATUS_VENCIDA ? [STATUS_VENCIDA] : [])
                .map(s => (
                  <option key={s} value={s} disabled={s === STATUS_VENCIDA}>
                    {s === STATUS_VENCIDA ? `${STATUS_VENCIDA} (automático)` : s}
                  </option>
                ))}
            </EnumSelect>
          </HeaderField>
        </InfoHeaderBar>

        <TabBar tabs={ABAS_PRINCIPAIS} activeTab={activeTab} onChange={setActiveTab} mobileFallback />
        {renderTabContent()}
      </ManutencaoModalShell>

      {alertaAprovacao.length > 0 && (
        <ConfirmModal
          title="Não é possível aprovar a proposta"
          subtitle="Há etapas pendentes que precisam ser concluídas"
          message={
            <ul className="space-y-2">
              {alertaAprovacao.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  {p}
                </li>
              ))}
            </ul>
          }
          variant="ok"
          labelConfirm="Voltar e corrigir"
          onConfirm={() => setAlertaAprovacao([])}
          onCancel={() => setAlertaAprovacao([])}
          zIndex={100}
        />
      )}


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
