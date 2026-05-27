import type { PropostaResumo } from "../../data/apiClient";
import { fmtCurrency } from "../../utils/manutencao";
import { TipoOperacaoBadge, StatusPropostaBadge } from "../StatusBadge";
import { TableProposta } from "../TableProposta";

interface Props {
  propostaAtual: PropostaResumo | null;
  onAbrirProposta: (p: PropostaResumo) => void;
}

export function PropostaAtualTab({ propostaAtual, onAbrirProposta }: Props) {
  if (!propostaAtual) {
    return (
      <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
        <p className="text-sm">Nenhuma proposta ativa para esta unidade</p>
        <p className="text-xs mt-1 opacity-70">Use o botão "Novo" na toolbar para criar uma proposta</p>
      </div>
    );
  }

  return (
    <>
      {/* Card — mobile */}
      <button
        onClick={() => onAbrirProposta(propostaAtual)}
        className="sm:hidden w-full text-left p-4 rounded-xl border border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{propostaAtual.nomeFantasia || '—'}</span>
          <TipoOperacaoBadge tipo={propostaAtual.tipoOperacao} />
        </div>
        <p className="text-xs text-gray-500 dark:text-[#64748B] mb-3 font-mono">{propostaAtual.id}</p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {[
            { label: 'Valor proposto', value: fmtCurrency(propostaAtual.valorProposto) },
            { label: 'Área',           value: `${propostaAtual.area} m²` },
            { label: 'Criado em',      value: propostaAtual.dataCriacao },
            { label: 'Vencimento',     value: propostaAtual.dataVencimento },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-2.5">
              <p className="text-[10px] text-gray-400 dark:text-[#64748B] mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{item.value}</p>
            </div>
          ))}
        </div>
        <StatusPropostaBadge status={propostaAtual.status as any} />
      </button>

      {/* Tabela — desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <TableProposta
          data={[propostaAtual]}
          onRowClick={() => onAbrirProposta(propostaAtual)}
        />
      </div>
    </>
  );
}
