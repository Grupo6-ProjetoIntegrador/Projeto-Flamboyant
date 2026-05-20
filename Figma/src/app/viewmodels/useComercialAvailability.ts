// ============================================================
// viewmodels/useComercialAvailability.ts — ViewModel de Disponibilidade
// ============================================================
//
// Papel na arquitetura MVVM: camada VIEWMODEL para a tela de
// Disponibilidade (mapa de unidades do mall).
//
// Responsabilidades:
//  1. DADOS: busca unidades e propostas da API
//  2. ADAPTER: converte Unidade (banco) + Proposta aprovada → UnidadeInfo
//     (formato interno usado pela View). Isso é necessário porque a View
//     precisa de um objeto unificado com nome (nomeFantasia da proposta),
//     segmento e status calculado.
//  3. FILTROS: status, piso, intervalo de fim de contrato, vencendo em <60 dias
//  4. MAPA: organiza unidades filtradas em estrutura
//     { Piso → { Corredor → UnidadeInfo[] } } para o UnitBlock
//  5. TABELA: filtragem e ordenação de colunas para o modo tabela
//  6. RESPONSIVIDADE: força modo 'mapa' em telas < 640px
//
// getDiasRestantes(): calcula dias até fim do contrato, suportando
// formatos dd/mm/yyyy e yyyy-mm-dd. Retorna null se sem contrato.
//
// Listener 'navigate-disponibilidade': permite navegar entre unidades
// dentro do DisponibilidadeManutencaoModal sem fechar e reabrir.
// ============================================================
import { useState, useMemo, useEffect } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { matchColFilter } from '../shared/utils/filters';
import type { UnidadeInfo, Piso } from '../data/comercialData';
import { STATUS_OCUPADO, STATUS_DISPONIVEL, STATUS_APROVADO, STATUS_VENCIDA } from '../enums';
import type { Corredor } from '../enums';


const NS = 'disponibilidade';

function getDiasRestantes(fimContrato?: string | null): number | null {
  if (!fimContrato) return null;
  const date = new Date(fimContrato.includes('/') ? fimContrato.split('/').reverse().join('-') : fimContrato);
  if (isNaN(date.getTime())) return null;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return Math.ceil((date.getTime() - hoje.getTime()) / 86400000);
}

export function useComercialAvailability() {
  // ── Model ────────────────────────────────────────────────
  const { data: todasUnidades, loading: loadingUnidades, refetch: refetchUnidades } =
    useApi(() => UnidadesService.listar(), []);
  const { data: todasPropostasData, refetch: refetchPropostas } =
    useApi(() => PropostasService.listar(), []);
  const todasPropostas = useMemo(() => todasPropostasData || [], [todasPropostasData]);

  // Adapter: transforma Unidade (entidade do banco, sem nome da loja) em UnidadeInfo
  // (objeto de UI com nome, segmento e status calculados via join com Proposta).
  // O nome vem do nomeFantasia da proposta Aprovada vinculada à unidade.
  // Se não houver proposta Aprovada, o nome é 'Disponível' e status é 'Disponível'.
  const allLojistas = useMemo<UnidadeInfo[]>(() => {
    if (!todasUnidades) return [];
    return todasUnidades.map(un => ({
      id: un.id,
      nome: un.status === STATUS_OCUPADO
        ? (todasPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.nomeFantasia || STATUS_OCUPADO)
        : STATUS_DISPONIVEL,
      segmento: (todasPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.segmento || 'Outros') as any,
      responsavel: '',
      email: '',
      unidade: un.codigo,
      piso: un.piso as Piso,
      corredor: un.corredor as Corredor,
      area: un.area,
      status: un.status as any,
    }));
  }, [todasUnidades, todasPropostas]);

  // ── Estado persistido ────────────────────────────────────
  const [filterStatuses, setFilterStatuses] = usePersistedState<string[]>(`${NS}.filterStatuses`, []);
  const [filterPisos,    setFilterPisos]    = usePersistedState<Piso[]>(`${NS}.filterPisos`, []);
  const [dateFrom,       setDateFrom]       = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,         setDateTo]         = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [viewMode,       setViewMode]       = usePersistedState<'mapa' | 'tabela'>(`${NS}.viewMode`, 'mapa', v => v, v => v as 'mapa' | 'tabela');
  const [sortCol,        setSortCol]        = usePersistedState<string>(`${NS}.sortCol`, 'unidade', v => v, v => v);
  const [sortDir,        setSortDir]        = usePersistedState<'asc' | 'desc'>(`${NS}.sortDir`, 'asc', v => v, v => v as 'asc' | 'desc');
  const [colFilters,     setColFilters]     = usePersistedState<Record<string, string>>(`${NS}.colFilters`, {});
  const [filterVencendo, setFilterVencendo] = usePersistedState<boolean>(`${NS}.filterVencendo`, false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // ── Estado de UI ─────────────────────────────────────────
  const [manutencaoLojista, setManutencaoLojista] = useState<UnidadeInfo | null>(null);

  // Forçar mapa em mobile
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth < 640) setViewMode('mapa'); };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navegação entre unidades via evento
  useEffect(() => {
    const handler = (e: any) => setManutencaoLojista(e.detail);
    window.addEventListener('navigate-disponibilidade', handler);
    return () => window.removeEventListener('navigate-disponibilidade', handler);
  }, []);

  // ── Dados derivados ──────────────────────────────────────
  const filtered = useMemo<UnidadeInfo[]>(() => {
    return allLojistas.filter(l => {
      const matchStatus   = filterStatuses.length === 0 || filterStatuses.includes(l.status);
      const matchPiso     = filterPisos.length === 0    || filterPisos.includes(l.piso);
      let matchDate = true;
      if (dateFrom || dateTo) {
        const propFim = todasPropostas.find(pp =>
          pp.codigoUnidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA)
        );
        const fim = propFim?.fimContrato;
        if (fim) {
          const fimISO = fim.includes('/') ? fim.split('/').reverse().join('-') : fim;
          if (dateFrom && fimISO < dateFrom) matchDate = false;
          if (dateTo   && fimISO > dateTo)   matchDate = false;
        } else {
          matchDate = false;
        }
      }
      const propAprov = todasPropostas.find(p =>
        p.codigoUnidade === l.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA)
      );
      const dias = propAprov ? getDiasRestantes(propAprov.fimContrato) : null;
      const matchVencendo = !filterVencendo || (dias !== null && dias < 60);
      return matchStatus && matchPiso && matchDate && matchVencendo;
    });
  }, [allLojistas, filterStatuses, filterPisos, dateFrom, dateTo, filterVencendo, todasPropostas]);

  const counts = useMemo(() => ({
    total:        allLojistas.length,
    disponiveis:  allLojistas.filter(l => l.status === STATUS_DISPONIVEL).length,
    ocupadas:     allLojistas.filter(l => l.status === STATUS_OCUPADO).length,
    vencendoBreve: allLojistas.filter(l => {
      const p = todasPropostas.find(pp =>
        pp.codigoUnidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA)
      );
      return p ? (getDiasRestantes(p.fimContrato) ?? Infinity) < 60 : false;
    }).length,
  }), [allLojistas, todasPropostas]);

  const mapaData = useMemo(() => {
    const result: Record<Piso, Record<Corredor, UnidadeInfo[]>> = {
      P: { A: [], B: [], C: [] },
      S: { A: [], B: [], C: [] },
      T: { A: [], B: [], C: [] },
    };
    filtered.forEach(l => {
      const piso = l.piso as Piso;
      const corredor = l.corredor as Corredor;
      if (result[piso] && result[piso][corredor]) {
        result[piso][corredor].push(l);
      }
    });
    return result;
  }, [filtered]);

  const getPropostaAtual = (lojista: UnidadeInfo) =>
    todasPropostas.find(p =>
      p.codigoUnidade === lojista.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA)
    );

  const tableRows = useMemo<UnidadeInfo[]>(() => {
    const colDefs: { key: string; getValue: (l: UnidadeInfo) => string }[] = [
      { key: 'unidade',       getValue: l => l.unidade },
      { key: 'piso',          getValue: l => l.piso === 'P' ? 'Primeiro Piso' : l.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso' },
      { key: 'corredor',      getValue: l => l.corredor },
      { key: 'area',          getValue: l => String(l.area) },
      { key: 'segmento',      getValue: l => l.segmento },
      { key: 'status',        getValue: l => l.status },
      { key: 'lojista',       getValue: l => l.nome || '—' },
      { key: 'fim',           getValue: l => getPropostaAtual(l)?.fimContrato || '—' },
      { key: 'diasRestantes', getValue: l => { const p = getPropostaAtual(l); const d = p ? getDiasRestantes(p.fimContrato) : null; return d !== null ? String(d) : '—'; } },
    ];
    let rows = [...filtered];
    colDefs.forEach(({ key, getValue }) => {
      const pattern = colFilters[key] || '';
      if (pattern) rows = rows.filter(l => matchColFilter(getValue(l), pattern));
    });
    const colDef = colDefs.find(c => c.key === sortCol);
    if (colDef) {
      rows.sort((a, b) => {
        const av = colDef.getValue(a).toLowerCase();
        const bv = colDef.getValue(b).toLowerCase();
        return sortDir === 'asc' ? av.localeCompare(bv, 'pt-BR') : bv.localeCompare(av, 'pt-BR');
      });
    }
    return rows;
  }, [filtered, colFilters, sortCol, sortDir, todasPropostas]);

  // ── Handlers ─────────────────────────────────────────────
  const refetch = () => { refetchUnidades(); refetchPropostas(); };

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };

  return {
    // dados
    allLojistas, filtered, counts, mapaData, tableRows, todasPropostas,
    loadingUnidades,
    // filtros
    filterStatuses, setFilterStatuses,
    filterPisos, setFilterPisos,
    dateFrom, setDateFrom, dateTo, setDateTo,
    filterVencendo, setFilterVencendo,
    colFilters, setColFilters,
    // ordenação
    sortCol, sortDir, toggleSort,
    // ui
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    // modais
    manutencaoLojista, setManutencaoLojista,
    // utilitários
    getDiasRestantes, getPropostaAtual, refetch,
  };
}
