import type { Segmento } from "../../data/comercialData";
import { SEGMENTOS, TIPOS_OPERACAO, TIPOS_OPERACAO_COLORS } from "../../enums";
import { EnumSelect, SubTabBar } from "../ManutencaoShared";
import type { TabDef } from "../ManutencaoShared";
import { Field } from "./Field";
import type { TabSharedProps } from "./types";

const SUBTAB = {
  IDENTIFICACAO: 'identificacao',
  CONTRATO:      'contrato',
  ENCARGOS:      'encargos',
} as const;

const SUBTABS: TabDef[] = [
  { id: SUBTAB.IDENTIFICACAO, label: 'Identificação' },
  { id: SUBTAB.CONTRATO,      label: 'Contrato' },
  { id: SUBTAB.ENCARGOS,      label: 'Encargos e Datas' },
];

interface Props extends TabSharedProps {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export function LojaPropostaTab({ draft, setDraft, editMode, readOnly, activeSubTab, onSubTabChange }: Props) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <SubTabBar tabs={SUBTABS} activeTab={activeSubTab} onChange={onSubTabChange} />
      <div className="flex-1 overflow-y-auto p-6">
        {activeSubTab === SUBTAB.IDENTIFICACAO && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Nome Fantasia" value={draft.nomeFantasia || ''} onChange={v => setDraft(prev => ({ ...prev, nomeFantasia: v }))} editMode={editMode} readOnly={readOnly} />
            <EnumSelect label="Segmento" value={draft.segmento ?? ''} onChange={v => setDraft(prev => ({ ...prev, segmento: v as Segmento }))} options={SEGMENTOS} disabled={!editMode || readOnly} />
            <EnumSelect label="Tipo de Operação" value={draft.tipoOperacao ?? ''} onChange={v => setDraft(prev => ({ ...prev, tipoOperacao: v as any }))} disabled={!editMode || readOnly} options={TIPOS_OPERACAO} colorMap={TIPOS_OPERACAO_COLORS} />
          </div>
        )}
        {activeSubTab === SUBTAB.CONTRATO && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Aluguel %" value={draft.aluguelPercent} onChange={v => setDraft(prev => ({ ...prev, aluguelPercent: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Prazo de Locação (meses)" value={draft.prazoLocacaoMeses} onChange={v => setDraft(prev => ({ ...prev, prazoLocacaoMeses: parseInt(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="AR - Aluguel por m²" value={draft.aluguelPorM2} onChange={v => setDraft(prev => ({ ...prev, aluguelPorM2: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="ABL (m²)" value={draft.area} onChange={v => setDraft(prev => ({ ...prev, area: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.ENCARGOS && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Condomínio (Aprox.)" value={draft.condominioAprox} onChange={v => setDraft(prev => ({ ...prev, condominioAprox: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="FPP (Aprox.)" value={draft.fppAprox} onChange={v => setDraft(prev => ({ ...prev, fppAprox: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Início Contrato" value={draft.inicioContrato} onChange={v => setDraft(prev => ({ ...prev, inicioContrato: v }))} type="date" editMode={editMode} readOnly={readOnly} />
            <Field label="Fim Contrato" value={draft.fimContrato} onChange={v => setDraft(prev => ({ ...prev, fimContrato: v }))} type="date" editMode={editMode} readOnly={readOnly} />
            <Field label="Inauguração" value={draft.dataInauguracao} onChange={v => setDraft(prev => ({ ...prev, dataInauguracao: v }))} type="date" editMode={editMode} readOnly={readOnly} />
            <Field label="Vencimento Proposta" value={draft.dataVencimento} onChange={v => setDraft(prev => ({ ...prev, dataVencimento: v }))} type="date" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
      </div>
    </div>
  );
}
