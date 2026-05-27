import { FORMAS_PAGAMENTO_TT, STATUS_ANALISE } from "../../enums";
import { SubTabBar } from "../ManutencaoShared";
import type { TabDef } from "../ManutencaoShared";
import { Field } from "./Field";
import type { TabSharedProps, Calculados } from "./types";

const SUBTAB = {
  VALORES: 'valores',
  RESUMO:  'resumo',
} as const;

const SUBTABS: TabDef[] = [
  { id: SUBTAB.VALORES, label: 'Valores da TT' },
  { id: SUBTAB.RESUMO,  label: 'Resumo Financeiro' },
];

interface Props extends TabSharedProps {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
  calculados: Pick<Calculados, 'diferencaTT' | 'percentDescontoTT' | 'percentSinalTT' | 'saldoTT' | 'totalResSperata' | 'totalTT' | 'totalOperacao'>;
}

export function TaxaTransferenciaTab({ draft, setDraft, editMode, readOnly, activeSubTab, onSubTabChange, calculados }: Props) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <SubTabBar tabs={SUBTABS} activeTab={activeSubTab} onChange={onSubTabChange} />
      <div className="flex-1 overflow-y-auto p-6">
        {activeSubTab === SUBTAB.VALORES && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="TT Contratual (R$)" value={draft.ttContratual} disabled type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="TT Proposta (R$)" value={draft.ttProposta} onChange={v => setDraft(prev => ({ ...prev, ttProposta: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="TT Proposta (Nº de AMM)" value={draft.ttPropostaNumAMM} onChange={v => setDraft(prev => ({ ...prev, ttPropostaNumAMM: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Diferença (R$)" value={calculados.diferencaTT} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="% Desconto/Acréscimo" value={calculados.percentDescontoTT} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="Sinal TT (R$)" value={draft.sinalTT} onChange={v => setDraft(prev => ({ ...prev, sinalTT: parseFloat(v) || 0 }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="% Sinal TT" value={calculados.percentSinalTT} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="Saldo TT (R$)" value={calculados.saldoTT} calculated editMode={editMode} readOnly={readOnly} />
            <Field label="Forma de Pagamento TT" value={draft.formaPagamentoTT} onChange={v => setDraft(prev => ({ ...prev, formaPagamentoTT: v }))} options={[...FORMAS_PAGAMENTO_TT]} editMode={editMode} readOnly={readOnly} />
            <Field label="Status TT" value={draft.statusTT} onChange={v => setDraft(prev => ({ ...prev, statusTT: v }))} options={[...STATUS_ANALISE]} editMode={editMode} readOnly={readOnly} />
            <Field label="Justificativa da Proposta" value={draft.justificativaTT} onChange={v => setDraft(prev => ({ ...prev, justificativaTT: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.RESUMO && (
          <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9] mb-3">Resumo Financeiro</h3>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Total Res Sperata (R$)" value={calculados.totalResSperata} calculated editMode={editMode} readOnly={readOnly} />
              <Field label="Total TT (R$)" value={calculados.totalTT} calculated editMode={editMode} readOnly={readOnly} />
              <div className="col-span-2">
                <Field label="Total da Operação (R$)" value={calculados.totalOperacao} calculated editMode={editMode} readOnly={readOnly} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
