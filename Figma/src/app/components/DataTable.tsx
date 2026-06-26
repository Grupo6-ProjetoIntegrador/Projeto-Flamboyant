/**
 * DataTable.tsx — Tabela genérica e auto-configurável.
 *
 * Aceita qualquer array de objetos e infere as colunas automaticamente
 * a partir das chaves do primeiro item.
 *
 * Para cada coluna inferida, o componente cria internamente:
 *   _specified  {boolean} — se true, a coluna é exibida na tabela
 *   _allowFilter {boolean} — se true, exibe input de filtro nessa coluna
 *
 * Ambas as propriedades são controláveis individualmente via columnConfig.
 *
 * Props:
 *   data          — array de objetos (qualquer formato)
 *   columnConfig  — configuração opcional por chave:
 *                     label       : texto do cabeçalho (padrão: nome da chave)
 *                     _specified  : exibir coluna (padrão: true)
 *                     _allowFilter: exibir filtro (padrão: true)
 *                     render      : função customizada (row, value) => ReactNode
 *                     sortable    : permite ordenação (padrão: true)
 *   onRowClick    — callback ao clicar em uma linha
 *   emptyMessage  — mensagem quando data está vazio
 *   className     — classe extra no wrapper
 *   rowClassName  — classe extra por linha
 *
 * Uso mínimo (sem configuração — exibe todas as colunas):
 *   <DataTable data={minhaLista} />
 *
 * Uso com configuração parcial (só as chaves que precisam de ajuste):
 *   <DataTable
 *     data={propostas}
 *     columnConfig={{
 *       id:            { label: 'Código', _allowFilter: false },
 *       valorProposto: { label: 'Valor', render: (_, v) => fmt(v) },
 *       observacoes:   { _specified: false },
 *     }}
 *     onRowClick={p => setModalAberto(p)}
 *   />
 */

import { useState, useMemo } from 'react';
import { ArrowUp, ArrowDown, ChevronsUpDown } from 'lucide-react';

// ── Tipos ────────────────────────────────────────────────────

/** Configuração de uma coluna específica. Todos os campos são opcionais. */
export interface ColumnConfig<T = any> {
  /** Texto exibido no cabeçalho. Padrão: nome da chave. */
  label?: string;
  /**
   * Se true, a coluna é exibida na tabela.
   * Padrão: true. Passe false para ocultar.
   */
  _specified?: boolean;
  /**
   * Se true, exibe input de filtro por célula nessa coluna.
   * Padrão: true. Passe false para desabilitar o filtro.
   */
  _allowFilter?: boolean;
  /**
   * Função de renderização customizada da célula.
   * Se não informado, exibe o valor bruto como string.
   * @param row   — objeto completo da linha
   * @param value — valor da célula (row[key])
   */
  render?: (row: T, value: any) => React.ReactNode;
  /**
   * Se false, desabilita ordenação nesta coluna.
   * Padrão: true.
   */
  sortable?: boolean;
}

/** Mapa de configuração: chave do objeto → ColumnConfig */
export type ColumnsConfig<T> = {
  [K in keyof T]?: ColumnConfig<T>;
};

interface DataTableProps<T extends Record<string, any>> {
  data: T[];
  columnConfig?: ColumnsConfig<T>;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  className?: string;
  rowClassName?: (row: T) => string;
}

// ── Helpers ──────────────────────────────────────────────────

/**
 * Converte o nome de uma chave camelCase para label legível.
 * Ex: "nomeFantasia" → "Nome Fantasia", "idUnidade" → "Id Unidade"
 */
function keyToLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, s => s.toUpperCase())
    .trim();
}

/**
 * matchFilter — filtragem com suporte a wildcards.
 *   "texto"   → contém "texto"
 *   "texto*"  → começa com "texto"
 *   "*texto"  → termina com "texto"
 *   "*texto*" → contém "texto" estritamente no meio
 */
function matchFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = String(cellValue ?? '').toLowerCase();
  const p = pattern.toLowerCase();
  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) return val.endsWith(p.slice(1));
  if (p.endsWith('*') && p.length > 1) return val.startsWith(p.slice(0, -1));
  return val.includes(p);
}

// ── Componente ───────────────────────────────────────────────

export function DataTable<T extends Record<string, any>>({
  data,
  columnConfig = {},
  onRowClick,
  emptyMessage = 'Nenhum resultado encontrado.',
  className = '',
  rowClassName,
}: DataTableProps<T>) {

  // ── Inferir colunas a partir do primeiro item ─────────────
  const inferredKeys = useMemo<string[]>(() => {
    if (!data.length) return [];
    return Object.keys(data[0]);
  }, [data]);

  /**
   * Colunas resolvidas: combina as chaves inferidas com o columnConfig.
   * Para cada chave, aplica os defaults:
   *   _specified  = true  (exibida por padrão)
   *   _allowFilter = true  (filtro habilitado por padrão)
   *   sortable    = true  (ordenável por padrão)
   *   label       = keyToLabel(key)
   */
  const resolvedColumns = useMemo(() => {
    return inferredKeys.map(key => {
      const cfg = (columnConfig as any)[key] ?? {};
      return {
        key,
        label:        cfg.label        ?? keyToLabel(key),
        _specified:   cfg._specified   ?? true,
        _allowFilter: cfg._allowFilter ?? true,
        sortable:     cfg.sortable     ?? true,
        render:       cfg.render       ?? null,
      };
    });
  }, [inferredKeys, columnConfig]);

  // Apenas colunas visíveis (_specified = true)
  const visibleColumns = useMemo(
    () => resolvedColumns.filter(c => c._specified),
    [resolvedColumns]
  );

  // ── Estado interno ────────────────────────────────────────
  const [sortCol,    setSortCol]    = useState<string>('');
  const [sortDir,    setSortDir]    = useState<'asc' | 'desc'>('asc');
  const [colFilters, setColFilters] = useState<Record<string, string>>({});

  // ── Pipeline: filter → sort ───────────────────────────────
  const processedRows = useMemo<T[]>(() => {
    let rows = [...data];

    // 1. Filtro por coluna (só colunas com _allowFilter = true)
    visibleColumns.forEach(col => {
      if (!col._allowFilter) return;
      const pattern = colFilters[col.key] ?? '';
      if (!pattern) return;
      rows = rows.filter(row =>
        matchFilter(String(row[col.key] ?? ''), pattern)
      );
    });

    // 2. Ordenação
    if (sortCol) {
      rows.sort((a, b) => {
        const av = String(a[sortCol] ?? '').toLowerCase();
        const bv = String(b[sortCol] ?? '').toLowerCase();
        const cmp = av.localeCompare(bv, 'pt-BR', { numeric: true });
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }

    return rows;
  }, [data, visibleColumns, colFilters, sortCol, sortDir]);

  // ── Handlers ──────────────────────────────────────────────
  const handleSort = (key: string) => {
    if (sortCol === key) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(key);
      setSortDir('asc');
    }
  };

  const handleFilter = (key: string, value: string) => {
    setColFilters(prev => ({ ...prev, [key]: value }));
  };

  // ── Ícone de ordenação ────────────────────────────────────
  const SortIcon = ({ colKey }: { colKey: string }) => {
    if (sortCol !== colKey) return <ChevronsUpDown className="w-3 h-3 opacity-30" />;
    return sortDir === 'asc'
      ? <ArrowUp   className="w-3 h-3 text-[#D93030]" />
      : <ArrowDown className="w-3 h-3 text-[#D93030]" />;
  };

  // ── Render ────────────────────────────────────────────────
  if (!data.length) {
    return (
      <div className={`flex items-center justify-center py-12 text-sm text-gray-400 dark:text-[#64748B] ${className}`}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full text-sm border-collapse">

        {/* Cabeçalho */}
        <thead>
          <tr className="border-b border-gray-200 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E]">
            {visibleColumns.map(col => (
              <th
                key={col.key}
                className={`
                  px-4 py-3 text-left text-xs font-semibold text-gray-500
                  dark:text-[#94A3B8] uppercase tracking-wider whitespace-nowrap
                  ${col.sortable ? 'cursor-pointer select-none hover:text-gray-700 dark:hover:text-[#F1F5F9]' : ''}
                `}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <div className="flex items-center gap-1.5">
                  {col.label}
                  {col.sortable && <SortIcon colKey={col.key} />}
                </div>
              </th>
            ))}
          </tr>

          {/* Linha de filtros — só aparece se ao menos 1 coluna tem _allowFilter */}
          {visibleColumns.some(c => c._allowFilter) && (
            <tr className="border-b border-gray-200 dark:border-[#2E3447] bg-white dark:bg-[#242938]">
              {visibleColumns.map(col => (
                <th key={col.key} className="px-2 py-1.5">
                  {col._allowFilter ? (
                    <input
                      type="text"
                      value={colFilters[col.key] ?? ''}
                      onChange={e => handleFilter(col.key, e.target.value)}
                      placeholder="Filtrar..."
                      className="
                        w-full text-xs px-2 py-1 rounded border
                        border-gray-200 dark:border-[#2E3447]
                        bg-gray-50 dark:bg-[#1A1F2E]
                        text-gray-700 dark:text-[#F1F5F9]
                        placeholder:text-gray-300 dark:placeholder:text-[#3E4557]
                        focus:outline-none focus:ring-1 focus:ring-[#D93030]
                        focus:border-[#D93030] transition-colors
                      "
                    />
                  ) : (
                    <div className="h-6" /> /* espaçador para alinhar */
                  )}
                </th>
              ))}
            </tr>
          )}
        </thead>

        {/* Corpo */}
        <tbody className="divide-y divide-gray-100 dark:divide-[#2E3447]">
          {processedRows.length === 0 ? (
            <tr>
              <td
                colSpan={visibleColumns.length}
                className="px-4 py-8 text-center text-sm text-gray-400 dark:text-[#64748B]"
              >
                Nenhum resultado para os filtros aplicados.
              </td>
            </tr>
          ) : (
            processedRows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                className={`
                  bg-white dark:bg-[#242938]
                  hover:bg-gray-50 dark:hover:bg-[#1E2435]
                  transition-colors
                  ${onRowClick ? 'cursor-pointer' : ''}
                  ${rowClassName?.(row) ?? ''}
                `}
              >
                {visibleColumns.map(col => (
                  <td
                    key={col.key}
                    className="px-4 py-3 text-gray-700 dark:text-[#CBD5E1] whitespace-nowrap"
                  >
                    {col.render
                      ? col.render(row, row[col.key])
                      : String(row[col.key] ?? '—')
                    }
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>

      </table>

      {/* Rodapé com contagem */}
      <div className="px-4 py-2 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E]">
        <span className="text-xs text-gray-400 dark:text-[#64748B]">
          {processedRows.length === data.length
            ? `${data.length} ${data.length === 1 ? 'registro' : 'registros'}`
            : `${processedRows.length} de ${data.length} registros`
          }
        </span>
      </div>
    </div>
  );
}
