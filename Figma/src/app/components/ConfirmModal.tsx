import type { ReactNode } from 'react';

export type ConfirmModalVariant = 'ok' | 'sim-nao' | 'sim-nao-cancelar';

interface ConfirmModalProps {
  title: string;
  subtitle?: string;
  message?: ReactNode;
  variant?: ConfirmModalVariant;
  labelConfirm?: ReactNode;
  labelCancel?: ReactNode;
  labelDismiss?: ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
  zIndex?: number;
}

export function ConfirmModal({
  title,
  subtitle,
  message,
  variant = 'sim-nao',
  labelConfirm,
  labelCancel,
  labelDismiss,
  onConfirm,
  onCancel,
  onDismiss,
  zIndex = 85,
}: ConfirmModalProps) {
  const confirmLabel = labelConfirm ?? (variant === 'ok' ? 'Ok' : 'Sim');
  const cancelLabel  = labelCancel  ?? 'Não';
  const dismissLabel = labelDismiss ?? 'Cancelar';

  const handleBackdropClick = () => {
    if (variant === 'sim-nao-cancelar') onDismiss?.();
    else onCancel?.();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleBackdropClick} />
      <div
        className="relative z-10 bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full max-w-sm"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4 rounded-t-2xl">
          <h3 className="text-base font-bold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-white/80 mt-0.5">{subtitle}</p>}
        </div>

        <div className="p-5">
          {message && (
            <div className="text-sm text-gray-600 dark:text-[#94A3B8] mb-5">{message}</div>
          )}

          <div className="flex flex-col gap-2">
            <button
              onClick={onConfirm}
              className="w-full flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
            >
              {confirmLabel}
            </button>

            {(variant === 'sim-nao' || variant === 'sim-nao-cancelar') && (
              <button
                onClick={onCancel}
                className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {cancelLabel}
              </button>
            )}

            {variant === 'sim-nao-cancelar' && (
              <button
                onClick={onDismiss}
                className="w-full text-gray-400 dark:text-[#64748B] hover:text-gray-600 dark:hover:text-[#94A3B8] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {dismissLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
