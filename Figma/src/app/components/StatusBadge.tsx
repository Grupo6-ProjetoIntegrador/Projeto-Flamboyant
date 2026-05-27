import type { StatusProposta, StatusLoja } from '../enums';
import {
  STATUS_AGUARDANDO_FIN, STATUS_AGUARDANDO_COMITE,
  STATUS_APROVADO, STATUS_REPROVADO, STATUS_CANCELADO,
  STATUS_VENCIDA, STATUS_FINALIZADO,
  STATUS_OCUPADO, STATUS_DISPONIVEL,
} from '../enums';

// -------------------------------------------------------------------------
// Mapeamentos centralizados de cor — alterar aqui propaga para todo o app
// -------------------------------------------------------------------------
const STATUS_PROPOSTA_CLASSES: Record<StatusProposta, string> = {
  [STATUS_AGUARDANDO_FIN]:    'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40',
  [STATUS_AGUARDANDO_COMITE]: 'bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40',
  [STATUS_APROVADO]:          'bg-green-100  dark:bg-green-500/20  text-green-800  dark:text-green-300  border border-green-200  dark:border-green-500/40',
  [STATUS_REPROVADO]:         'bg-red-100    dark:bg-red-500/20    text-red-800    dark:text-red-300    border border-red-200    dark:border-red-500/40',
  [STATUS_CANCELADO]:         'bg-gray-100   dark:bg-gray-700/50   text-gray-600   dark:text-gray-300   border border-gray-200   dark:border-gray-600/30',
  [STATUS_VENCIDA]:           'bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-500/40',
  [STATUS_FINALIZADO]:        'bg-blue-100   dark:bg-blue-500/20   text-blue-800   dark:text-blue-300   border border-blue-200   dark:border-blue-500/40',
};

const STATUS_LOJA_CLASSES: Record<StatusLoja, string> = {
  [STATUS_OCUPADO]:    'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40',
  [STATUS_DISPONIVEL]: 'bg-green-100  dark:bg-green-500/20  text-green-700  dark:text-green-300  border border-green-200  dark:border-green-500/40',
};

const TIPO_OPERACAO_CLASSES: Record<string, string> = {
  'Nova Instalação': 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
  'Renovação':       'bg-teal-50   dark:bg-teal-900/20   text-teal-700   dark:text-teal-400',
  'Readequação':     'bg-amber-50  dark:bg-amber-900/20  text-amber-700  dark:text-amber-400',
  'Transferência':   'bg-pink-50   dark:bg-pink-900/20   text-pink-700   dark:text-pink-400',
  'Cessão':          'bg-cyan-50   dark:bg-cyan-900/20   text-cyan-700   dark:text-cyan-400',
};

// -------------------------------------------------------------------------
// Componentes
// -------------------------------------------------------------------------
interface StatusPropostaBadgeProps {
  status: StatusProposta;
  className?: string;
}

export function StatusPropostaBadge({ status, className = '' }: StatusPropostaBadgeProps) {
  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${STATUS_PROPOSTA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-700/50 dark:text-gray-300'} ${className}`}>
      {status}
    </span>
  );
}

interface StatusLojaBadgeProps {
  status: StatusLoja;
  className?: string;
}

export function StatusLojaBadge({ status, className = '' }: StatusLojaBadgeProps) {
  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${STATUS_LOJA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-700/50 dark:text-gray-300'} ${className}`}>
      {status}
    </span>
  );
}

interface TipoOperacaoBadgeProps {
  tipo: string;
  className?: string;
}

export function TipoOperacaoBadge({ tipo, className = '' }: TipoOperacaoBadgeProps) {
  return (
    <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap flex-shrink-0 ${TIPO_OPERACAO_CLASSES[tipo] ?? 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300'} ${className}`}>
      {tipo}
    </span>
  );
}

// Utilitários para quem precisar das classes sem renderizar o badge
export function getStatusPropostaClasses(status: StatusProposta): string {
  return STATUS_PROPOSTA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-700/50 dark:text-gray-300';
}

export function getStatusLojaClasses(status: StatusLoja): string {
  return STATUS_LOJA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-700/50 dark:text-gray-300';
}

export function getTipoOperacaoClasses(tipo: string): string {
  return TIPO_OPERACAO_CLASSES[tipo] ?? 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300';
}
