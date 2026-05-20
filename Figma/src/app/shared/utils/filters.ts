// ============================================================
// shared/utils/filters.ts — Utilitários de filtragem reutilizáveis
// ============================================================
//
// Funções puras de filtragem usadas pelos ViewModels.
// Por serem funções puras (sem estado), são fáceis de testar
// e reutilizáveis em qualquer parte do sistema.
// ============================================================

// ============================================================
// shared/utils/filters.ts — Utilitários de filtragem reutilizáveis
// ============================================================

/**
 * matchColFilter — Filtragem de texto com suporte a wildcards.
 *
 * Sintaxe dos padrões:
 *   "texto"   → qualquer célula que CONTENHA "texto"
 *   "texto*"  → qualquer célula que COMECE com "texto"
 *   "*texto"  → qualquer célula que TERMINE com "texto"
 *   "*texto*" → qualquer célula que contenha "texto" estritamente no MEIO
 *               (não no início nem no fim)
 *   ""        → sem filtro, todas as linhas passam
 *
 * Usado nas tabelas de Propostas, Disponibilidade e Relatórios
 * para os filtros de coluna linha a linha.
 */
export function matchColFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = (cellValue || '').toLowerCase();
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

/** Converte data pt-BR (dd/mm/yyyy) para ISO (yyyy-mm-dd) para comparação */
export function ptBRToISO(date: string): string {
  const parts = date.split('/');
  if (parts.length === 3) return `${parts[2]}-${parts[1]}-${parts[0]}`;
  return date;
}
