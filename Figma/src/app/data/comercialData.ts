import type { PropostaResumo } from './apiClient';
import type { Segmento, StatusProposta } from '../enums';

export type { Segmento, StatusProposta };

export interface Proposta extends PropostaResumo {
  lojista?: string;
  lojistaId?: string;

  lojaAnteriorNomeFantasia?: string | null;
  lojaAnteriorSegmento?: string | null;
  lojaAnteriorTipoOperacao?: string | null;
  lojaAnteriorCTO?: number | null;
  lojaAnteriorABL?: number | null;
  lojaAnteriorAMM?: number | null;
  lojaAnteriorDividaAMM?: number | null;
  lojaAnteriorDividaNegociada?: number | null;
  lojaAnteriorDividaCondominio?: number | null;
  lojaAnteriorDividaFPP?: number | null;
  lojaAnteriorFormaPagamento?: string | null;

  demandaEletricaKva?: number | null;
  tensaoNecessaria?: string | null;
  circuitosEspeciais?: boolean;
  obsEletrica?: string | null;
  pontoAgua?: boolean;
  quantidadePontosAgua?: number | null;
  pontoEsgoto?: boolean;
  vazaoNecessariaLmin?: number | null;
  caixaGordura?: boolean;
  obsHidraulica?: string | null;
  necessitaGas?: boolean;
  tipoGas?: string | null;
  consumoGasM3h?: number | null;
  obsGas?: string | null;
  necessitaExaustao?: boolean;
  vazaoExaustaoM3h?: number | null;
  necessitaMakeUpAr?: boolean;
  obsVentilacao?: string | null;
  areaMinimaM2?: number | null;
  areaMaximaM2?: number | null;
  peDireitoMinimoM?: number | null;
  cargaPisoKgm2?: number | null;
  necessitaMezanino?: boolean;
  obsEstrutura?: string | null;
  frenteMinimaM?: number | null;
  tipoFachada?: string | null;
  comunicacaoVisualLed?: boolean;
  obsFachada?: string | null;
  pontosDados?: number | null;
  necessitaFibra?: boolean;
  obsTelecom?: string | null;
  statusNecessidadesTecnicas?: string | null;
  responsavelTecnico?: string | null;
  dataVistoria?: string | null;

  resSperataProposta?: number | null;
  referenciaMercadoPorM2?: number | null;
  referenciadeMercadoPorM2?: number | null;
  sinalResSperata?: number | null;
  formaPagamentoSaldoResSperata?: string | null;
  numParcelasResSperata?: number | null;
  statusResSperata?: string | null;
  observacoesResSperata?: string | null;

  ttContratual?: number | null;
  ttProposta?: number | null;
  ttPropostaNumAMM?: number | null;
  sinalTT?: number | null;
  formaPagamentoTT?: string | null;
  justificativaTT?: string | null;
  statusTT?: string | null;

  parecerPresidente?: string | null;
  parecerPresidenteData?: string | null;
  parecerDiretoriaComp1?: string | null;
  parecerDiretoriaComp1Data?: string | null;
  parecerDiretoriaComp2?: string | null;
  parecerDiretoriaComp2Data?: string | null;
  parecerSuperintendente?: string | null;
  parecerSuperintendenteData?: string | null;
  parecerInNetworking?: string | null;
  parecerInNetworkingData?: string | null;
}
