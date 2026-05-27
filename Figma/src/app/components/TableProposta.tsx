import type { PropostaResumo } from "../data/apiClient";
import { fmtCurrency } from "../utils/manutencao";
import { TipoOperacaoBadge, StatusPropostaBadge } from "./StatusBadge";
import { DataTable } from "./DataTable";

interface Props {
  data: PropostaResumo[];
  onRowClick?: (row: PropostaResumo) => void;
  emptyMessage?: string;
  className?: string;
}

const COLUMN_CONFIG = {
  id:            { _specified: false },
  idUnidade:     { _specified: false },
  unidade:       { _specified: false },
  tipo:          { _specified: false },
  codigoUnidade: { label: 'Unidade' },
  piso:          { label: 'Piso' },
  corredor:      { label: 'Corredor' },
  nomeFantasia:  { label: 'Nome Fantasia' },
  segmento:      { label: 'Segmento' },
  tipoOperacao:  { label: 'Tipo de Operação', render: (_: any, v: string) => <TipoOperacaoBadge tipo={v} /> },
  valorProposto: { label: 'Valor',            _allowFilter: false, render: (_: any, v: number) => fmtCurrency(v) },
  area:          { label: 'Área (m²)',        _allowFilter: false, sortable: false },
  abl:           { label: 'ABL',              _allowFilter: false, sortable: false },
  status:        { label: 'Status',           _allowFilter: false, render: (_: any, v: string) => <StatusPropostaBadge status={v as any} /> },
  responsavel:   { label: 'Responsável' },
  dataCriacao:   { label: 'Criado em',        _allowFilter: false },
  dataVencimento:{ label: 'Vencimento',       _allowFilter: false },
  fimContrato:   { label: 'Fim do Contrato',  _allowFilter: false },
  atualizadoEm:  { label: 'Atualizado em',    _allowFilter: false },
} as const;

export function TableProposta({ data, onRowClick, emptyMessage, className }: Props) {
  return (
    <DataTable<PropostaResumo>
      data={data}
      columnConfig={COLUMN_CONFIG as any}
      onRowClick={onRowClick}
      emptyMessage={emptyMessage}
      className={className}
    />
  );
}
