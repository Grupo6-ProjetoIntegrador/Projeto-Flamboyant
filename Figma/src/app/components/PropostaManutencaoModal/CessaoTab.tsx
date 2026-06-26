import { STATUS_RES_SPERATA, FORMAS_PAGAMENTO_SALDO } from "../../enums";
import { SubTabBar } from "../ManutencaoShared";
import type { TabDef } from "../ManutencaoShared";
import { Field } from "./Field";
import type { TabSharedProps, Calculados } from "./types";

const SUBTAB = {
  AVALIACAO: 'avaliacao',
  PAGAMENTO: 'pagamento',
} as const;

const SUBTABS: TabDef[] = [
  { id: SUBTAB.AVALIACAO, label: 'Avaliação do Ponto' },
  { id: SUBTAB.PAGAMENTO, label: 'Condições de Pagamento' },
];

interface Props extends TabSharedProps {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
  calculados: Pick<Calculados, 'resSperataPropostaPorM2' | 'percentSinalResSperata' | 'saldoResSperata' | 'valorParcelaResSperata'>;
}

export function CessaoTab({ draft, setDraft, editMode, readOnly, activeSubTab, onSubTabChange, calculados }: Props) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <SubTabBar tabs={SUBTABS} activeTab={activeSubTab} onChange={onSubTabChange} />
      <div className="flex-1 overflow-y-auto p-6">
        {activeSubTab === SUBTAB.AVALIACAO && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Res Sperata Proposta (R$)" value={draft.resSperataProposta} onChange={v => setDraft(prev => ({ ...prev, resSperataProposta: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Res Sperata Proposta (R$/m²)" value={calculados.resSperataPropostaPorM2} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="Referência de Mercado (R$/m²)" value={draft.referenciaMercadoPorM2} disabled type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Status Res Sperata" value={draft.statusResSperata} onChange={v => setDraft(prev => ({ ...prev, statusResSperata: v }))} options={[...STATUS_RES_SPERATA]} editMode={editMode} readOnly={readOnly} />
            <Field label="Observações" value={draft.observacoesResSperata} onChange={v => setDraft(prev => ({ ...prev, observacoesResSperata: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.PAGAMENTO && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Sinal (R$)" value={draft.sinalResSperata} onChange={v => setDraft(prev => ({ ...prev, sinalResSperata: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="% Sinal" value={calculados.percentSinalResSperata} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="Saldo (R$)" value={calculados.saldoResSperata} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="Forma de Pagamento do Saldo" value={draft.formaPagamentoSaldoResSperata} onChange={v => setDraft(prev => ({ ...prev, formaPagamentoSaldoResSperata: v }))} options={[...FORMAS_PAGAMENTO_SALDO]} editMode={editMode} readOnly={readOnly} />
            <Field label="Número de Parcelas" value={draft.numParcelasResSperata} onChange={v => setDraft(prev => ({ ...prev, numParcelasResSperata: parseInt(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Valor da Parcela (R$)" value={calculados.valorParcelaResSperata} calculated editMode={editMode} readOnly={readOnly} />
          </div>
        )}
      </div>
    </div>
  );
}
