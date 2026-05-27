import { useState, useMemo } from "react";
import { fmtCurrency, matchColFilter } from "../../utils/manutencao";
import { DataCard } from "../DataCard";
import { TableProposta } from "../TableProposta";
import { DesktopRender, MobileRender } from "../PageShared";
import { Proposta } from "../../entities";

interface Props {
  propostasVinculadas: Proposta[];
  onAbrirProposta: (p: Proposta) => void;
}

export function PropostasVinculadasTab({ propostasVinculadas, onAbrirProposta }: Props) {
  const [colFilters] = useState<Record<string, string>>({});

  const filtradas = useMemo(() =>
    propostasVinculadas.filter(p =>
      matchColFilter(p.nomeFantasia || '', colFilters['nomeFantasia']     || '') &&
      matchColFilter(p.idUnidade,     colFilters['codigoUnidade']    || '') &&
      matchColFilter(p.segmento,          colFilters['segmento']         || '') &&
      matchColFilter(p.tipoOperacao,      colFilters['tipoOperacao']     || '') &&
      matchColFilter(p.id,                colFilters['id']               || '') &&
      matchColFilter(String(p.valorProposto), colFilters['valorProposto']|| '') &&
      matchColFilter(p.dataCriacao,       colFilters['dataCriacao']      || '') &&
      matchColFilter(p.dataVencimento || '', colFilters['dataVencimento']|| '') &&
      matchColFilter(p.status,            colFilters['status']           || '')
    ),
  [propostasVinculadas, colFilters]);

  if (propostasVinculadas.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
        <p className="text-sm">Nenhuma outra proposta vinculada a esta unidade</p>
      </div>
    );
  }

  if (filtradas.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
        <p className="text-sm">Nenhum resultado para os filtros aplicados</p>
      </div>
    );
  }

  return (
    <>
      <MobileRender className="flex flex-col gap-3">
        {filtradas.map(p => (
          <DataCard
            key={p.id}
            data={p}
            fieldMap={{
              title:       { field: 'nomeFantasia', format: (v: string) => v || '—' },
              titleBadge:  'tipoOperacao',
              subtitle:    ['id', 'idUnidade', 'segmento'],
              value:       { field: 'valorProposto', format: (v: number) => fmtCurrency(v) },
              valueSub:    { field: 'area', format: (v: number) => `${v} m²` },
              statusBadge: 'status',
              footer:      'dataVencimento',
            }}
            onClick={row => onAbrirProposta(row)}
          />
        ))}
      </MobileRender>

      <DesktopRender className="overflow-x-auto">
        <TableProposta
          data={filtradas}
          onRowClick={row => onAbrirProposta(row)}
          emptyMessage="Nenhuma proposta vinculada"
        />
      </DesktopRender>
    </>
  );
}
