import { SEGMENTOS, TIPOS_OPERACAO, FORMAS_PAGAMENTO } from "../../enums";
import { EnumSelect, SubTabBar } from "../ManutencaoShared";
import type { TabDef } from "../ManutencaoShared";
import { Field } from "./Field";
import type { TabSharedProps, Calculados } from "./types";

const SUBTAB = {
  IDENTIFICACAO: 'identificacao',
  DEBITOS:       'debitos',
} as const;

const SUBTABS: TabDef[] = [
  { id: SUBTAB.IDENTIFICACAO, label: 'Identificação' },
  { id: SUBTAB.DEBITOS,       label: 'Débitos' },
];

interface Props extends TabSharedProps {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
  calculados: Pick<Calculados, 'dividaTotal'>;
}

export function LojaAnteriorTab({ draft, setDraft, editMode, readOnly, activeSubTab, onSubTabChange, calculados }: Props) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <SubTabBar tabs={SUBTABS} activeTab={activeSubTab} onChange={onSubTabChange} />
      <div className="flex-1 overflow-y-auto p-6">
        {activeSubTab === SUBTAB.IDENTIFICACAO && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Nome Fantasia" value={draft.lojaAnteriorNomeFantasia} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorNomeFantasia: v }))} editMode={editMode} readOnly={readOnly} />
            <EnumSelect label="Segmento" value={draft.lojaAnteriorSegmento ?? ''} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorSegmento: v }))} options={SEGMENTOS} disabled={!editMode || readOnly} />
            <Field label="Tipo de Operação" value={draft.lojaAnteriorTipoOperacao} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorTipoOperacao: v }))} options={[...TIPOS_OPERACAO]} editMode={editMode} readOnly={readOnly} />
            <Field label="CTO (R$)" value={draft.lojaAnteriorCTO} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorCTO: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="ABL (m²)" value={draft.lojaAnteriorABL} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorABL: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="AMM (R$/m²)" value={draft.lojaAnteriorAMM} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorAMM: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.DEBITOS && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Dívida AMM (R$)" value={draft.lojaAnteriorDividaAMM} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaAMM: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Dívida Negociada (R$)" value={draft.lojaAnteriorDividaNegociada} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaNegociada: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Dívida Condomínio (R$)" value={draft.lojaAnteriorDividaCondominio} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaCondominio: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Dívida FPP (R$)" value={draft.lojaAnteriorDividaFPP} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaFPP: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Dívida Total (R$)" value={calculados.dividaTotal} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="Forma de Pagamento" value={draft.lojaAnteriorFormaPagamento} onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorFormaPagamento: v }))} options={[...FORMAS_PAGAMENTO]} editMode={editMode} readOnly={readOnly} />
          </div>
        )}
      </div>
    </div>
  );
}
