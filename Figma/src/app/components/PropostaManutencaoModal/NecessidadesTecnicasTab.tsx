import { TENSOES_NECESSARIAS, TIPOS_GAS, TIPOS_FACHADA, STATUS_LAUDO } from "../../enums";
import { SubTabBar } from "../ManutencaoShared";
import type { TabDef } from "../ManutencaoShared";
import { Field } from "./Field";
import type { TabSharedProps } from "./types";

const SUBTAB = {
  ELETRICA:    'eletrica',
  HIDRAULICA:  'hidraulica',
  GAS:         'gas',
  VENTILACAO:  'ventilacao',
  ESTRUTURA:   'estrutura',
  FACHADA:     'fachada',
  TELECOM:     'telecom',
  CONTROLE:    'controle',
  OBSERVACOES: 'observacoes',
} as const;

const SUBTABS: TabDef[] = [
  { id: SUBTAB.ELETRICA,    label: 'Elétrica' },
  { id: SUBTAB.HIDRAULICA,  label: 'Hidráulica' },
  { id: SUBTAB.GAS,         label: 'Gás' },
  { id: SUBTAB.VENTILACAO,  label: 'Ventilação e Exaustão' },
  { id: SUBTAB.ESTRUTURA,   label: 'Estrutura' },
  { id: SUBTAB.FACHADA,     label: 'Fachada e Visual' },
  { id: SUBTAB.TELECOM,     label: 'TI e Telecom' },
  { id: SUBTAB.CONTROLE,    label: 'Controle' },
  { id: SUBTAB.OBSERVACOES, label: 'Observações' },
];

interface Props extends TabSharedProps {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export function NecessidadesTecnicasTab({ draft, setDraft, editMode, readOnly, activeSubTab, onSubTabChange }: Props) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <SubTabBar tabs={SUBTABS} activeTab={activeSubTab} onChange={onSubTabChange} />
      <div className="flex-1 overflow-y-auto p-6">
        {activeSubTab === SUBTAB.ELETRICA && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Demanda Elétrica (kVA)" value={draft.demandaEletricaKva} onChange={v => setDraft(prev => ({ ...prev, demandaEletricaKva: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Tensão Necessária" value={draft.tensaoNecessaria} onChange={v => setDraft(prev => ({ ...prev, tensaoNecessaria: v }))} options={[...TENSOES_NECESSARIAS]} editMode={editMode} readOnly={readOnly} />
            <Field label="Circuitos Especiais" value={draft.circuitosEspeciais ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, circuitosEspeciais: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Observações Elétricas" value={draft.obsEletrica} onChange={v => setDraft(prev => ({ ...prev, obsEletrica: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.HIDRAULICA && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Ponto de Água" value={draft.pontoAgua ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, pontoAgua: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Quantidade de Pontos de Água" value={draft.quantidadePontosAgua} onChange={v => setDraft(prev => ({ ...prev, quantidadePontosAgua: parseInt(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Ponto de Esgoto" value={draft.pontoEsgoto ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, pontoEsgoto: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Vazão Necessária (l/min)" value={draft.vazaoNecessariaLmin} onChange={v => setDraft(prev => ({ ...prev, vazaoNecessariaLmin: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Caixa de Gordura" value={draft.caixaGordura ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, caixaGordura: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Observações Hidráulicas" value={draft.obsHidraulica} onChange={v => setDraft(prev => ({ ...prev, obsHidraulica: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.GAS && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Necessita Gás" value={draft.necessitaGas ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, necessitaGas: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Tipo de Gás" value={draft.tipoGas} onChange={v => setDraft(prev => ({ ...prev, tipoGas: v }))} options={[...TIPOS_GAS]} editMode={editMode} readOnly={readOnly} />
            <Field label="Consumo (m³/h)" value={draft.consumoGasM3h} onChange={v => setDraft(prev => ({ ...prev, consumoGasM3h: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Observações de Gás" value={draft.obsGas} onChange={v => setDraft(prev => ({ ...prev, obsGas: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.VENTILACAO && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Necessita Exaustão" value={draft.necessitaExaustao ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, necessitaExaustao: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Vazão de Exaustão (m³/h)" value={draft.vazaoExaustaoM3h} onChange={v => setDraft(prev => ({ ...prev, vazaoExaustaoM3h: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Make-up de Ar (Reposição)" value={draft.necessitaMakeUpAr ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, necessitaMakeUpAr: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Observações de Ventilação" value={draft.obsVentilacao} onChange={v => setDraft(prev => ({ ...prev, obsVentilacao: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.ESTRUTURA && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Área Mínima (m²)" value={draft.areaMinimaM2} onChange={v => setDraft(prev => ({ ...prev, areaMinimaM2: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Área Máxima (m²)" value={draft.areaMaximaM2} onChange={v => setDraft(prev => ({ ...prev, areaMaximaM2: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Pé Direito Mínimo (m)" value={draft.peDireitoMinimoM} onChange={v => setDraft(prev => ({ ...prev, peDireitoMinimoM: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Carga no Piso (kg/m²)" value={draft.cargaPisoKgm2} onChange={v => setDraft(prev => ({ ...prev, cargaPisoKgm2: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Necessita Mezanino" value={draft.necessitaMezanino ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, necessitaMezanino: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Observações Estruturais" value={draft.obsEstrutura} onChange={v => setDraft(prev => ({ ...prev, obsEstrutura: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.FACHADA && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Frente Mínima (m)" value={draft.frenteMinimaM} onChange={v => setDraft(prev => ({ ...prev, frenteMinimaM: parseFloat(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Tipo de Fachada" value={draft.tipoFachada} onChange={v => setDraft(prev => ({ ...prev, tipoFachada: v }))} options={[...TIPOS_FACHADA]} editMode={editMode} readOnly={readOnly} />
            <Field label="Comunicação Visual com LED" value={draft.comunicacaoVisualLed ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, comunicacaoVisualLed: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Observações de Fachada" value={draft.obsFachada} onChange={v => setDraft(prev => ({ ...prev, obsFachada: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.TELECOM && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Pontos de Dados (rede)" value={draft.pontosDados} onChange={v => setDraft(prev => ({ ...prev, pontosDados: parseInt(v) || undefined }))} type="number" editMode={editMode} readOnly={readOnly} />
            <Field label="Necessita Fibra Óptica" value={draft.necessitaFibra ? 'Sim' : 'Não'} onChange={v => setDraft(prev => ({ ...prev, necessitaFibra: v === 'Sim' }))} options={['Sim', 'Não']} editMode={editMode} readOnly={readOnly} />
            <Field label="Observações de Telecom" value={draft.obsTelecom} onChange={v => setDraft(prev => ({ ...prev, obsTelecom: v }))} textarea className="col-span-2" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.CONTROLE && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Status do Laudo" value={draft.statusNecessidadesTecnicas} onChange={v => setDraft(prev => ({ ...prev, statusNecessidadesTecnicas: v }))} options={[...STATUS_LAUDO]} editMode={editMode} readOnly={readOnly} />
            <Field label="Responsável Técnico" value={draft.responsavelTecnico} onChange={v => setDraft(prev => ({ ...prev, responsavelTecnico: v }))} editMode={editMode} readOnly={readOnly} />
            <Field label="Data da Vistoria" value={draft.dataVistoria} onChange={v => setDraft(prev => ({ ...prev, dataVistoria: v }))} type="date" editMode={editMode} readOnly={readOnly} />
          </div>
        )}
        {activeSubTab === SUBTAB.OBSERVACOES && (
          <div className="grid grid-cols-1 gap-4">
            <Field label="Observações Gerais" value={draft.observacoes} onChange={v => setDraft(prev => ({ ...prev, observacoes: v }))} textarea editMode={editMode} readOnly={readOnly} />
          </div>
        )}
      </div>
    </div>
  );
}
