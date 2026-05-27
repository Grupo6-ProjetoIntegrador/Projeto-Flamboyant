// ============================================================
// viewmodels/useComercialProposals.ts — ViewModel de Propostas
// ============================================================
//
// Papel na arquitetura MVVM: camada VIEWMODEL para a tela de Propostas.
//
// Responsabilidades:
//  1. DADOS: busca propostas da API; re-busca após criar/atualizar (refresh)
//  2. FILTROS: por status e por intervalo de datas de criação
//  3. TABELA: filtragem por coluna, ordenação, e construção de tableRows
//     (lista filtrada + ordenada pronta para renderizar)
//  4. MODAIS: controla qual proposta está aberta para edição
//  5. NOVA PROPOSTA: monta o objeto inicial vazio para o modal de criação
//
// Pipeline de dados:
//   proposals (API)
//     → filtered (status + data)
//       → tableRows (colFilters + sort)
//
// colDefs define COMO cada coluna extrai seu valor de texto de um
// PropostaResumo. Isso centraliza a lógica de exibição/ordenação
// em um único lugar, evitando duplicação nas células da tabela.
//
// Listener 'navigate-proposta': permite que o DisponibilidadeManutencaoModal
// abra o modal de proposta nesta tela sem acoplamento direto.
// ============================================================
import { useState, useMemo, useEffect } from 'react';
import { useApi } from '../data/useApi';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { matchColFilter, ptBRToISO } from '../shared/utils/filters';
import type { PropostaResumo } from '../services/propostas.service';
import type { StatusProposta } from '../enums';
import { ViewMode } from '../enums';

const NS = 'propostas';

export function useComercialProposals() {
  // ── Model ────────────────────────────────────────────────
  const { data: propostasData, refetch: refresh } = useApi(() => PropostasService.listar(), []);

  // ── Estado persistido ────────────────────────────────────
  const [filterStatuses, setFilterStatuses] = usePersistedState<StatusProposta[]>(`${NS}.filterStatuses`, []);
  const [dateFrom,       setDateFrom]       = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,         setDateTo]         = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [viewMode,       setViewMode]       = usePersistedState<ViewMode>(`${NS}.viewMode`, ViewMode.Cards, v => v, v => v as ViewMode);
  const [sortCol,        setSortCol]        = usePersistedState<string>(`${NS}.sortCol`, 'lojista', v => v, v => v);
  const [sortDir,        setSortDir]        = usePersistedState<'asc' | 'desc'>(`${NS}.sortDir`, 'asc', v => v, v => v as 'asc' | 'desc');
  const [colFilters,     setColFilters]     = usePersistedState<Record<string, string>>(`${NS}.colFilters`, {});
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // ── Estado de UI (não persistido) ────────────────────────
  const [modalPropostaAberta, setModalPropostaAberta] = useState<PropostaResumo | null>(null);

  // ── Listener de navegação externa ───────────────────────
  useEffect(() => {
    const handler = (e: any) => setModalPropostaAberta(e.detail);
    window.addEventListener('navigate-proposta', handler);
    return () => window.removeEventListener('navigate-proposta', handler);
  }, []);

  // ── Dados derivados ──────────────────────────────────────
  const proposals = useMemo(() => propostasData || [], [propostasData]);

  const filtered = useMemo<PropostaResumo[]>(() => {
    return proposals.filter(p => {
      const matchStatus = filterStatuses.length === 0 || filterStatuses.includes(p.status as StatusProposta);
      let matchDate = true;
      if (dateFrom || dateTo) {
        const iso = ptBRToISO(p.dataCriacao);
        if (dateFrom && iso < dateFrom) matchDate = false;
        if (dateTo   && iso > dateTo)   matchDate = false;
      }
      return matchStatus && matchDate;
    });
  }, [proposals, filterStatuses, dateFrom, dateTo]);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    proposals.forEach(p => { map[p.status] = (map[p.status] || 0) + 1; });
    return map;
  }, [proposals]);

  const colDefs = [
    { key: 'lojista',    getValue: (p: PropostaResumo) => p.nomeFantasia || '' },
    { key: 'tipo',       getValue: (p: PropostaResumo) => p.tipoOperacao },
    { key: 'id',         getValue: (p: PropostaResumo) => p.id },
    { key: 'unidade',    getValue: (p: PropostaResumo) => p.codigoUnidade },
    { key: 'segmento',   getValue: (p: PropostaResumo) => p.segmento },
    { key: 'valor',      getValue: (p: PropostaResumo) => String(p.valorProposto) },
    { key: 'area',       getValue: (p: PropostaResumo) => String(p.area) },
    { key: 'criado',     getValue: (p: PropostaResumo) => p.dataCriacao },
    { key: 'vencimento', getValue: (p: PropostaResumo) => p.dataVencimento || '' },
    { key: 'status',     getValue: (p: PropostaResumo) => p.status },
  ];

  const tableRows = useMemo<PropostaResumo[]>(() => {
    let rows = [...filtered];
    colDefs.forEach(({ key, getValue }) => {
      const pattern = colFilters[key] || '';
      if (pattern) rows = rows.filter(p => matchColFilter(getValue(p), pattern));
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
  }, [filtered, colFilters, sortCol, sortDir]);

  // ── Handlers ─────────────────────────────────────────────
  const toggleStatus = (s: StatusProposta) =>
    setFilterStatuses(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };

  const abrirNovaProposta = () => {
    setModalPropostaAberta({
      id: `PROP-NOVO-${Date.now()}`,
      idUnidade: '',
      codigoUnidade: '',
      unidade: '',
      piso: '',
      corredor: '',
      segmento: 'Moda',
      tipoOperacao: 'Nova Instalação',
      tipo: 'Nova Instalação',
      valorProposto: 0,
      area: 0,
      status: 'Aguardando análise financeira',
      responsavel: '',
      nomeFantasia: '',
      dataCriacao: new Date().toISOString().split('T')[0],
      atualizadoEm: new Date().toISOString(),
      dataVencimento: null,
      fimContrato: null,
    });
  };

  const fecharModal = () => { setModalPropostaAberta(null); refresh(); };

  return {
    // dados
    proposals, filtered, counts, tableRows, colDefs,
    // filtros
    filterStatuses, setFilterStatuses, toggleStatus,
    dateFrom, setDateFrom, dateTo, setDateTo,
    colFilters, setColFilters,
    // ordenação
    sortCol, setSortCol, sortDir, setSortDir, toggleSort,
    // ui
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    // modais
    modalPropostaAberta, setModalPropostaAberta,
    // ações
    abrirNovaProposta, fecharModal, refresh,
  };
}
