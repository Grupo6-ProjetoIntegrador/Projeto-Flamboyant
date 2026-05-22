// Fonte única de verdade para todos os enumeradores de domínio do projeto.
// Adicionar novos valores aqui propaga automaticamente para filtros e selects.

// ---------------------------------------------------------------------------
// Segmento
// ---------------------------------------------------------------------------
export const SEGMENTOS = [
  'Moda', 'Alimentação', 'Serviços', 'Eletrônicos', 'Esportes', 'Entretenimento', 'Outros',
] as const;
export type Segmento = typeof SEGMENTOS[number];

// ---------------------------------------------------------------------------
// Piso — value usado internamente, label para formulários, labelShort para filtros
// ---------------------------------------------------------------------------
export const PISOS = [
  { value: 'P' as const, label: 'Primeiro Piso', labelShort: 'Primeiro' },
  { value: 'S' as const, label: 'Segundo Piso',  labelShort: 'Segundo'  },
  { value: 'T' as const, label: 'Terceiro Piso', labelShort: 'Terceiro' },
] as const;
export type Piso = typeof PISOS[number]['value'];

// Mapas auxiliares derivados do enum — não duplicar manualmente
export const PISO_LABEL:       Record<Piso, string> = Object.fromEntries(PISOS.map(p => [p.value, p.label]))       as Record<Piso, string>;
export const PISO_LABEL_SHORT: Record<Piso, string> = Object.fromEntries(PISOS.map(p => [p.value, p.labelShort])) as Record<Piso, string>;

// ---------------------------------------------------------------------------
// Corredor
// ---------------------------------------------------------------------------
export const CORREDORES = [
  { value: 'A' as const, label: 'Corredor A' },
  { value: 'B' as const, label: 'Corredor B' },
  { value: 'C' as const, label: 'Corredor C' },
] as const;
export type Corredor = typeof CORREDORES[number]['value'];

export const CORREDOR_LABEL: Record<Corredor, string> = Object.fromEntries(CORREDORES.map(c => [c.value, c.label])) as Record<Corredor, string>;

// ---------------------------------------------------------------------------
// Cores para selects com estilo badge/pill
// ---------------------------------------------------------------------------
export interface BadgeColors { bg: string; text: string; border: string; }

// ---------------------------------------------------------------------------
// Status da Proposta
// ---------------------------------------------------------------------------
export const STATUS_PROPOSTA = [
  'Aguardando análise financeira',
  'Aguardando análise do comitê',
  'Aprovado',
  'Reprovado',
  'Cancelado',
  'Vencida',
  'Finalizado',
] as const;
export type StatusProposta = typeof STATUS_PROPOSTA[number];

export const STATUS_AGUARDANDO_FIN    = STATUS_PROPOSTA[0];
export const STATUS_AGUARDANDO_COMITE = STATUS_PROPOSTA[1];
export const STATUS_APROVADO          = STATUS_PROPOSTA[2];
export const STATUS_REPROVADO         = STATUS_PROPOSTA[3];
export const STATUS_CANCELADO         = STATUS_PROPOSTA[4];
export const STATUS_VENCIDA           = STATUS_PROPOSTA[5];
export const STATUS_FINALIZADO        = STATUS_PROPOSTA[6];

export const STATUS_PROPOSTA_COLORS: Record<StatusProposta, BadgeColors> = {
  'Aguardando análise financeira': { bg: 'bg-yellow-100 dark:bg-yellow-500/20', text: 'text-yellow-800 dark:text-yellow-300', border: 'border-yellow-300 dark:border-yellow-500/50' },
  'Aguardando análise do comitê':  { bg: 'bg-purple-100 dark:bg-purple-500/20', text: 'text-purple-800 dark:text-purple-300', border: 'border-purple-300 dark:border-purple-500/50' },
  Aprovado:   { bg: 'bg-green-100  dark:bg-green-500/20',  text: 'text-green-800  dark:text-green-300',  border: 'border-green-300  dark:border-green-500/50'  },
  Reprovado:  { bg: 'bg-red-100    dark:bg-red-500/20',    text: 'text-red-800    dark:text-red-300',    border: 'border-red-300    dark:border-red-500/50'    },
  Cancelado:  { bg: 'bg-gray-100   dark:bg-gray-500/20',   text: 'text-gray-600   dark:text-gray-300',   border: 'border-gray-300   dark:border-gray-500/50'   },
  Vencida:    { bg: 'bg-orange-100 dark:bg-orange-500/20', text: 'text-orange-800 dark:text-orange-300', border: 'border-orange-300 dark:border-orange-500/50' },
  Finalizado: { bg: 'bg-blue-100   dark:bg-blue-500/20',   text: 'text-blue-800   dark:text-blue-300',   border: 'border-blue-300   dark:border-blue-500/50'   },
};

// ---------------------------------------------------------------------------
// Status da Loja (Unidade)
// ---------------------------------------------------------------------------
export const STATUS_LOJA = ['Ocupado', 'Disponível'] as const;
export type StatusLoja = typeof STATUS_LOJA[number];

export const STATUS_OCUPADO    = STATUS_LOJA[0];
export const STATUS_DISPONIVEL = STATUS_LOJA[1];

// ---------------------------------------------------------------------------
// Tipo de Proposta — campo legado `tipo` na interface Proposta
// ---------------------------------------------------------------------------
export const TIPOS_PROPOSTA = [
  'Nova Instalação', 'Renovação', 'Readequação', 'Transferência', 'Cessão',
] as const;
export type TipoProposta = typeof TIPOS_PROPOSTA[number];

export const TIPO_NOVA_INSTALACAO = TIPOS_PROPOSTA[0];

// ---------------------------------------------------------------------------
// Tipo de Operação — campo `tipoOperacao`, mais granular
// ---------------------------------------------------------------------------
export const TIPOS_OPERACAO = [
  'Transferência', 'Cessão', 'Nova Locação', 'Renovação', 'Readequação',
] as const;
export type TipoOperacao = typeof TIPOS_OPERACAO[number];

export const TIPO_TRANSFERENCIA = TIPOS_OPERACAO[0];
export const TIPO_CESSAO        = TIPOS_OPERACAO[1];
export const TIPO_NOVA_LOCACAO  = TIPOS_OPERACAO[2];
export const TIPO_RENOVACAO     = TIPOS_OPERACAO[3];
export const TIPO_READEQUACAO   = TIPOS_OPERACAO[4];

export const TIPOS_OPERACAO_COLORS: Record<TipoOperacao, BadgeColors> = {
  'Transferência': { bg: 'bg-blue-50   dark:bg-blue-900/20',   text: 'text-blue-700   dark:text-blue-400',   border: 'border-blue-200   dark:border-blue-700/40'   },
  'Cessão':        { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-700 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-700/40' },
  'Nova Locação':  { bg: 'bg-indigo-50 dark:bg-indigo-900/20', text: 'text-indigo-700 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-700/40' },
  'Renovação':     { bg: 'bg-teal-50   dark:bg-teal-900/20',   text: 'text-teal-700   dark:text-teal-400',   border: 'border-teal-200   dark:border-teal-700/40'   },
  'Readequação':   { bg: 'bg-amber-50  dark:bg-amber-900/20',  text: 'text-amber-700  dark:text-amber-400',  border: 'border-amber-200  dark:border-amber-700/40'  },
};

// ---------------------------------------------------------------------------
// Formas de Pagamento
// ---------------------------------------------------------------------------
export const FORMAS_PAGAMENTO = ['À vista', 'Parcelado', 'Compensação com TT'] as const;
export type FormaPagamento = typeof FORMAS_PAGAMENTO[number];

export const FORMAS_PAGAMENTO_SALDO = [
  'À vista', 'Parcelado', 'Permuta', 'Retenção de aluguel',
] as const;
export type FormaPagamentoSaldo = typeof FORMAS_PAGAMENTO_SALDO[number];

export const FORMAS_PAGAMENTO_TT = [
  'À vista', 'Parcelado', 'Retenção de comissão', 'Compensação',
] as const;
export type FormaPagamentoTT = typeof FORMAS_PAGAMENTO_TT[number];

// ---------------------------------------------------------------------------
// Necessidades Técnicas
// ---------------------------------------------------------------------------
export const TENSOES_NECESSARIAS = ['110V', '220V', '380V', 'Bifásico', 'Trifásico'] as const;
export type TensaoNecessaria = typeof TENSOES_NECESSARIAS[number];

export const TIPOS_GAS = ['GLP', 'GN', 'Não se aplica'] as const;
export type TipoGas = typeof TIPOS_GAS[number];

export const TIPOS_FACHADA = ['Aberta', 'Fechada', 'Mista'] as const;
export type TipoFachada = typeof TIPOS_FACHADA[number];

// ---------------------------------------------------------------------------
// Status de controle / aprovação
// ---------------------------------------------------------------------------
export const STATUS_LAUDO = ['Rascunho', 'Enviado', 'Compatibilizado', 'Aprovado'] as const;
export type StatusLaudo = typeof STATUS_LAUDO[number];

export const STATUS_RES_SPERATA = [
  'Em análise', 'Aprovada', 'Rejeitada', 'Pendente documentação',
] as const;
export type StatusResSperata = typeof STATUS_RES_SPERATA[number];

export const STATUS_ANALISE = ['Em análise', 'Aprovada', 'Rejeitada'] as const;
export type StatusAnalise = typeof STATUS_ANALISE[number];

// ---------------------------------------------------------------------------
// Utilitário: converte arrays simples ou com label para {value, label}
// Usado internamente pelos componentes de filtro e select.
// ---------------------------------------------------------------------------
export type EnumOption = string | { value: string; label: string };

export function toOptionItems(
  options: readonly EnumOption[],
): { value: string; label: string }[] {
  return options.map(o =>
    typeof o === 'string' ? { value: o, label: o } : o,
  );
}
