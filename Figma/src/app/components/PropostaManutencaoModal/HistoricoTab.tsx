import type { PropostaHistorico } from "../../entities/proposta_historico";
import { StatusPropostaBadge } from "../StatusBadge";
import { DataTable } from "../DataTable";

interface Props {
  historico: PropostaHistorico[];
  editMode: boolean;
}

const COLUMN_CONFIG = {
  id:                   { _specified: false },
  idProposta:           { _specified: false },
  idUsuario:            { label: 'Editado por' },
  editadoEm:            { label: 'Data da edição' },
  codigoUnidade:        { label: 'Unidade', _allowFilter: false },
  nomeFantasia:         { label: 'Nome Fantasia' },
  segmento:             { label: 'Segmento' },
  tipoOperacao:         { label: 'Tipo de Operação' },
  valorProposto:        { label: 'Valor Proposto', _allowFilter: false, sortable: false },
  area:                 { label: 'Área (m²)', _allowFilter: false, sortable: false },
  abl:                  { label: 'ABL', _allowFilter: false, sortable: false },
  status:               {
    label: 'Status',
    _allowFilter: false,
    sortable: false,
    render: (row: PropostaHistorico) => <StatusPropostaBadge status={row.status as any} />,
  },
  dataCriacao:          { label: 'Data de Criação', _allowFilter: false },
  dataVencimento:       { label: 'Data de Vencimento', _allowFilter: false },
  aluguelPercent:       { label: 'Aluguel (%)', _allowFilter: false, sortable: false },
  prazoLocacaoMeses:    { label: 'Prazo Locação (meses)', _allowFilter: false, sortable: false },
  aluguelPorM2:         { label: 'Aluguel/m²', _allowFilter: false, sortable: false },
  condominioAprox:      { label: 'Condomínio Aprox.', _allowFilter: false, sortable: false },
  fppAprox:             { label: 'FPP Aprox.', _allowFilter: false, sortable: false },
  inicioContrato:       { label: 'Início do Contrato', _allowFilter: false },
  fimContrato:          { label: 'Fim do Contrato', _allowFilter: false },
  dataInauguracao:      { label: 'Data de Inauguração', _allowFilter: false },
  observacoes:          { label: 'Observações' },
  atualizadoEmSnapshot: { label: 'Atualizado em (Snapshot)', _allowFilter: false },
} as const;

export function HistoricoTab({ historico, editMode }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {editMode && (
        <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
          <p className="text-xs text-amber-700 dark:text-amber-400">
            Salve ou cancele a edição atual antes de consultar o histórico.
          </p>
        </div>
      )}
      <DataTable<PropostaHistorico>
        data={historico}
        columnConfig={COLUMN_CONFIG as any}
        emptyMessage="Nenhuma edição registrada."
        className={editMode ? 'opacity-50 pointer-events-none' : ''}
      />
    </div>
  );
}
