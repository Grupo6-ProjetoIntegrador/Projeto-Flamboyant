import type { Proposta } from "../../data/comercialData";

export interface TabSharedProps {
  draft: Proposta;
  setDraft: React.Dispatch<React.SetStateAction<Proposta>>;
  editMode: boolean;
  readOnly: boolean;
}

export interface Calculados {
  resSperataPropostaPorM2: number;
  percentSinalResSperata: number;
  saldoResSperata: number;
  valorParcelaResSperata: number;
  diferencaTT: number;
  percentDescontoTT: number;
  percentSinalTT: number;
  saldoTT: number;
  totalResSperata: number;
  totalTT: number;
  totalOperacao: number;
  dividaTotal: number;
}
