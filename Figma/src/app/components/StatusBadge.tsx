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
  [STATUS_AGUARDANDO_FIN]:    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  [STATUS_AGUARDANDO_COMITE]: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  [STATUS_APROVADO]:          'bg-green-100  text-green-800  dark:bg-green-900/30  dark:text-green-400',
  [STATUS_REPROVADO]:         'bg-red-100    text-red-800    dark:bg-red-900/30    dark:text-red-400',
  [STATUS_CANCELADO]:         'bg-gray-100   text-gray-600   dark:bg-gray-800/50   dark:text-gray-400',
  [STATUS_VENCIDA]:           'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  [STATUS_FINALIZADO]:        'bg-blue-100   text-blue-800   dark:bg-blue-900/30   dark:text-blue-400',
};

const STATUS_LOJA_CLASSES: Record<StatusLoja, string> = {
  [STATUS_OCUPADO]:    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  [STATUS_DISPONIVEL]: 'bg-green-100  text-green-700  dark:bg-green-900/30  dark:text-green-400',
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
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${STATUS_PROPOSTA_CLASSES[status] ?? 'bg-gray-100 text-gray-600'} ${className}`}>
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
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${STATUS_LOJA_CLASSES[status] ?? 'bg-gray-100 text-gray-600'} ${className}`}>
      {status}
    </span>
  );
}

// Utilitário para quem ainda precisar das classes sem renderizar o badge
export function getStatusPropostaClasses(status: StatusProposta): string {
  return STATUS_PROPOSTA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400';
}

export function getStatusLojaClasses(status: StatusLoja): string {
  return STATUS_LOJA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400';
}
