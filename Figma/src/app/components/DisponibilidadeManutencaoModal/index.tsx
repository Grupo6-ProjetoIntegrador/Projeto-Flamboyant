import { useState, useMemo } from "react";
import { FilePlus, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { propostas as propostasApi } from "../../data/apiClient";
import { useApi } from "../../data/useApi";
import { PropostaManutencaoModal } from "../PropostaManutencaoModal";
import type { Proposta, Unidade } from "../../data/apiClient";
import { STATUS_VENCIDA, STATUS_APROVADO, STATUS_FINALIZADO, STATUS_DISPONIVEL, PISO_LABEL } from "../../enums";
import type { Piso } from "../../enums";
import { ToolbarBtn, ToolbarDivider, ManutencaoToolbar, ManutencaoModalShell, TabBar, InfoHeaderBar, HeaderField, HeaderDivider } from "../ManutencaoShared";
import type { TabDef } from "../ManutencaoShared";
import { PropostaAtualTab } from "./PropostaAtualTab";
import { PropostasVinculadasTab } from "./PropostasVinculadasTab";

// ── IDs de aba — fonte única de verdade para TABS e renderTabContent ──
const TAB = {
  PROPOSTA_ATUAL:       'proposta-atual',
  PROPOSTAS_VINCULADAS: 'propostas-vinculadas',
} as const;

type TabId = typeof TAB[keyof typeof TAB];

interface DisponibilidadeManutencaoModalProps {
  unidade: Unidade;
  allUnidades: Unidade[];
  onClose: () => void;
}

export function DisponibilidadeManutencaoModal({ unidade, allUnidades, onClose }: DisponibilidadeManutencaoModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>(TAB.PROPOSTA_ATUAL);
  const [propostaModalAberta, setPropostaModalAberta] = useState<any>(null);
  const [novaPropostaEditMode, setNovaPropostaEditMode] = useState(false);

  const currentIndex = allUnidades.findIndex(l => l.id === unidade.id);

  const { data: propostasData } = useApi(() => propostasApi.listar({ idUnidade: unidade.id }), [unidade.id]);
  const todasPropostas = (propostasData || []) as Proposta[];

  const propostaAtual = useMemo(() =>
    todasPropostas.find(p => p.status === STATUS_VENCIDA) ??
    todasPropostas.find(p => p.status === STATUS_APROVADO) ??
    todasPropostas.find(p => p.status === STATUS_FINALIZADO) ??
    null,
  [todasPropostas]);

  const propostasVinculadas = useMemo(() =>
    todasPropostas.filter(p => p.id !== propostaAtual?.id),
  [todasPropostas, propostaAtual]);

  const TABS = useMemo<TabDef[]>(() => [
    { id: TAB.PROPOSTA_ATUAL,       label: 'Proposta Atual' },
    { id: TAB.PROPOSTAS_VINCULADAS, label: `Propostas Vinculadas (${propostasVinculadas.length})` },
  ], [propostasVinculadas.length]);

  const handleAnterior = () => {
    if (currentIndex > 0) {
      window.dispatchEvent(new CustomEvent('navigate-disponibilidade', { detail: allUnidades[currentIndex - 1] }));
    }
  };

  const handleProximo = () => {
    if (currentIndex < allUnidades.length - 1) {
      window.dispatchEvent(new CustomEvent('navigate-disponibilidade', { detail: allUnidades[currentIndex + 1] }));
    }
  };

  const abrirNovaProposta = () => {
    const novaProposta: any = {
      id: `PROP-NOVO-${Date.now()}`,
      idUnidade: unidade.id,
      unidade: unidade.codigo,
      tipoOperacao: 'Nova Instalação',
      tipo: 'Nova Instalação',
      valorProposto: 0,
      area: unidade.area,
      status: 'Aguardando análise financeira',
      responsavel: '',
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
      dataVencimento: '',
      observacoes: '',
      ...(propostaAtual ? {
        lojaAnteriorNomeFantasia:    propostaAtual.nomeFantasia || '',
        lojaAnteriorSegmento:        propostaAtual.segmento,
        lojaAnteriorTipoOperacao:    propostaAtual.tipoOperacao,
        lojaAnteriorCTO:             propostaAtual.valorProposto,
        lojaAnteriorABL:             propostaAtual.area,
        lojaAnteriorAMM:             propostaAtual.area > 0
          ? parseFloat((propostaAtual.valorProposto / propostaAtual.area).toFixed(2))
          : 0,
        lojaAnteriorDividaAMM:       0,
        lojaAnteriorDividaNegociada: 0,
        lojaAnteriorDividaCondominio:0,
        lojaAnteriorDividaFPP:       0,
      } : {}),
    };
    setNovaPropostaEditMode(true);
    setPropostaModalAberta(novaProposta);
  };

  function renderTabContent() {
    switch (activeTab) {
      case TAB.PROPOSTA_ATUAL:
        return <PropostaAtualTab propostaAtual={propostaAtual} onAbrirProposta={setPropostaModalAberta} />;
      case TAB.PROPOSTAS_VINCULADAS:
        return <PropostasVinculadasTab propostasVinculadas={propostasVinculadas} onAbrirProposta={setPropostaModalAberta} />;
      default:
        return null;
    }
  }

  return (
    <>
      <ManutencaoModalShell maxWidth="sm:max-w-3xl">
        <ManutencaoToolbar>
          <ToolbarBtn icon={<FilePlus className="w-4 h-4" />} label="Novo" onClick={abrirNovaProposta} />
          <ToolbarDivider />
          <ToolbarBtn
            icon={<ChevronLeft className="w-4 h-4" />}
            label="Anterior"
            onClick={handleAnterior}
            disabled={currentIndex === 0}
          />
          <ToolbarBtn
            icon={<ChevronRight className="w-4 h-4" />}
            label="Próximo"
            onClick={handleProximo}
            disabled={currentIndex >= allUnidades.length - 1}
          />
          <ToolbarDivider />
          <ToolbarBtn icon={<LogOut className="w-4 h-4" />} label="Sair" onClick={onClose} />
        </ManutencaoToolbar>

        <InfoHeaderBar>
          <HeaderField label="Nº da Loja" value={unidade.codigo} mono />
          <HeaderDivider />
          <HeaderField label="Piso"      value={PISO_LABEL[unidade  .piso as Piso] ?? '-'} />
          <HeaderDivider />
          <HeaderField label="Área (m²)" value={`${unidade.area} m²`} />
          <HeaderDivider />
          <HeaderField label="Corredor"  value={unidade.corredor} />
        </InfoHeaderBar>

        <TabBar
          tabs={TABS}
          activeTab={activeTab}
          onChange={id => setActiveTab(id as TabId)}
          mobileFallback
        />

        <div className="flex-1 overflow-y-auto p-5">
          {renderTabContent()}
        </div>
      </ManutencaoModalShell>

      {propostaModalAberta && (
        <PropostaManutencaoModal
          proposta={propostaModalAberta}
          allPropostas={todasPropostas}
          forceEditMode={novaPropostaEditMode}
          onClose={() => {
            setPropostaModalAberta(null);
            setNovaPropostaEditMode(false);
          }}
        />
      )}
    </>
  );
}
