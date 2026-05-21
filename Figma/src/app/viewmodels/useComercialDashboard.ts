// ============================================================
// viewmodels/useComercialDashboard.ts — ViewModel do Dashboard
// ============================================================
//
// Papel na arquitetura MVVM: esta é a camada VIEWMODEL.
// Concentra toda a lógica de estado e computação do Dashboard,
// deixando o ComercialDashboard.tsx com apenas JSX.
//
// Responsabilidades:
//  1. DADOS: busca unidades e propostas da API via useApi
//  2. FILTROS: piso, segmento e intervalo de datas, todos
//     persistidos no sessionStorage via usePersistedState
//  3. COMPUTED: calcula KPIs, dados dos gráficos e propostas
//     filtradas via useMemo (recalcula só quando deps mudam)
//  4. HANDLERS: toggles de filtro, seção mobile e limpeza
//
// KPIs calculados:
//  total      — total de unidades físicas
//  ocupadas   — unidades com proposta Aprovada
//  livres     — unidades sem proposta Aprovada
//  ocupacao   — percentual de ocupação (0-100)
//  emAnalise  — propostas aguardando análise financeira ou comitê
//  receita    — soma dos valores das propostas Aprovadas
//
// Namespace 'dashboard' no sessionStorage evita colisão com
// outros ViewModels que usam chaves como 'propostas.*'.
// ============================================================
import { useMemo, useRef } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { ptBRToISO } from '../shared/utils/filters';
import type { PropostaResumo } from '../services/propostas.service';
import { STATUS_OCUPADO, STATUS_APROVADO, STATUS_AGUARDANDO_FIN, STATUS_AGUARDANDO_COMITE } from '../enums';

const NS = 'dashboard';

export function useComercialDashboard() {
  // ── Model: dados da API ──────────────────────────────────
  const { data: todasUnidadesData } = useApi(() => UnidadesService.listar(), []);
  const { data: propostasData }     = useApi(() => PropostasService.listar(), []);

  // ── Estado persistido no sessionStorage ─────────────────
  const [filterSegmentos, setFilterSegmentos] = usePersistedState<string[]>(`${NS}.filterSegmentos`, []);
  const [filterPisos,     setFilterPisos]     = usePersistedState<string[]>(`${NS}.filterPisos`, []);
  const [dateFrom,        setDateFrom]        = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,          setDateTo]          = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [showMobileFilters, setShowMobileFilters] = usePersistedState<boolean>(`${NS}.showMobileFilters`, false);
  const [propColFilters,  setPropColFilters]  = usePersistedState<Record<string, string>>(`${NS}.propColFilters`, {});
  const [ctrColFilters,   setCtrColFilters]   = usePersistedState<Record<string, string>>(`${NS}.ctrColFilters`, {});
  const [kpiIndex,        setKpiIndex]        = usePersistedState<number>(`${NS}.kpiIndex`, 0);
  const [chartIndex,      setChartIndex]      = usePersistedState<number>(`${NS}.chartIndex`, 0);
  const [mobileSection,   setMobileSection]   = usePersistedState<string>(`${NS}.mobileSection`, 'indicadores', v => v, v => v);

  // ── Dados derivados (computed) ───────────────────────────
  const allUnidades = useMemo(() => todasUnidadesData || [], [todasUnidadesData]);
  const proposals   = useMemo(() => propostasData || [], [propostasData]);

  const filteredProposals = useMemo<PropostaResumo[]>(() => {
    return proposals.filter(p => {
      const matchSegmento = filterSegmentos.length === 0 || filterSegmentos.includes(p.segmento);
      const matchPiso     = filterPisos.length === 0     || filterPisos.includes(p.piso);
      let matchDate = true;
      if (dateFrom || dateTo) {
        const iso = ptBRToISO(p.dataCriacao);
        if (dateFrom && iso < dateFrom) matchDate = false;
        if (dateTo   && iso > dateTo)   matchDate = false;
      }
      return matchSegmento && matchPiso && matchDate;
    });
  }, [proposals, filterSegmentos, filterPisos, dateFrom, dateTo]);

  const kpis = useMemo(() => {
    const total      = allUnidades.length;
    const ocupadas   = allUnidades.filter(u => u.status === STATUS_OCUPADO).length;
    const livres     = total - ocupadas;
    const ocupacao   = total > 0 ? Math.round((ocupadas / total) * 100) : 0;
    const emAnalise  = proposals.filter(p =>
      p.status === STATUS_AGUARDANDO_FIN || p.status === STATUS_AGUARDANDO_COMITE
    ).length;
    const receita    = proposals
      .filter(p => p.status === STATUS_APROVADO)
      .reduce((acc, p) => acc + p.valorProposto, 0);
    return { total, ocupadas, livres, ocupacao, emAnalise, receita };
  }, [allUnidades, proposals]);

  const chartSegmentos = useMemo(() => {
    const map: Record<string, number> = {};
    proposals.filter(p => p.status === STATUS_APROVADO).forEach(p => {
      map[p.segmento] = (map[p.segmento] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [proposals]);

  const chartStatus = useMemo(() => {
    const map: Record<string, number> = {};
    proposals.forEach(p => { map[p.status] = (map[p.status] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [proposals]);

  // ── Handlers ─────────────────────────────────────────────
  const toggleSection = (section: string) =>
    setMobileSection(prev => prev === section ? '' : section);

  const toggleSegmento = (seg: string) =>
    setFilterSegmentos(prev => prev.includes(seg) ? prev.filter(s => s !== seg) : [...prev, seg]);

  const togglePiso = (piso: string) =>
    setFilterPisos(prev => prev.includes(piso) ? prev.filter(p => p !== piso) : [...prev, piso]);

  const clearFilters = () => {
    setFilterSegmentos([]);
    setFilterPisos([]);
    setDateFrom('');
    setDateTo('');
  };

  return {
    // dados
    allUnidades, proposals, filteredProposals, kpis, chartSegmentos, chartStatus,
    // filtros
    filterSegmentos, setFilterSegmentos, toggleSegmento,
    filterPisos, setFilterPisos, togglePiso,
    dateFrom, setDateFrom, dateTo, setDateTo, clearFilters,
    // ui state
    showMobileFilters, setShowMobileFilters,
    propColFilters, setPropColFilters,
    ctrColFilters, setCtrColFilters,
    kpiIndex, setKpiIndex,
    chartIndex, setChartIndex,
    mobileSection, setMobileSection, toggleSection,
  };
}
