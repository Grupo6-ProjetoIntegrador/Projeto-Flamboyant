import { useState, useMemo, useEffect } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import type { Unidade } from '../data/apiClient';
import { STATUS_OCUPADO, STATUS_DISPONIVEL, STATUS_APROVADO, ViewMode } from '../enums';
import type { Piso, Corredor } from '../enums';

const NS = 'disponibilidade';

export function useComercialAvailability() {
  // ── Model ────────────────────────────────────────────────
  const { data: todasUnidades, loading: loadingUnidades, refetch: refetchUnidades } =
    useApi(() => UnidadesService.listar(), []);
  const { data: todasPropostasData, refetch: refetchPropostas } =
    useApi(() => PropostasService.listar(), []);
  const todasPropostas = useMemo(() => todasPropostasData || [], [todasPropostasData]);

  // Adapter: nome e segmento calculados via join com Proposta aprovada
  const allLojistas = useMemo<Unidade[]>(() => {
    if (!todasUnidades) return [];
    return todasUnidades.map(un => ({
      ...un,
      nome: un.status === STATUS_OCUPADO
        ? (todasPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.nomeFantasia || STATUS_OCUPADO)
        : STATUS_DISPONIVEL,
      segmento: todasPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.segmento || 'Outros',
    }));
  }, [todasUnidades, todasPropostas]);

  // ── Estado persistido ────────────────────────────────────
  const [filterPisos,      setFilterPisos]      = usePersistedState<Piso[]>(`${NS}.filterPisos`, []);
  const [filterCorredores, setFilterCorredores] = usePersistedState<Corredor[]>(`${NS}.filterCorredores`, []);
  const [viewMode,         setViewMode]         = usePersistedState<ViewMode>(`${NS}.viewMode`, ViewMode.Cards, v => v, v => v as ViewMode);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // ── Estado de UI ─────────────────────────────────────────
  const [manutencaoLojista, setManutencaoLojista] = useState<Unidade | null>(null);

  // Forçar mapa em mobile
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth < 640) setViewMode(ViewMode.Cards); };
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
  const filtered = useMemo<Unidade[]>(() => {
    return allLojistas.filter(l => {
      const matchPiso     = filterPisos.length === 0      || filterPisos.includes(l.piso as Piso);
      const matchCorredor = filterCorredores.length === 0 || filterCorredores.includes(l.corredor as Corredor);
      return matchPiso && matchCorredor;
    });
  }, [allLojistas, filterPisos, filterCorredores]);

  const mapaData = useMemo(() => {
    const result: Record<Piso, Record<Corredor, Unidade[]>> = {
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

  // ── Handlers ─────────────────────────────────────────────
  const refetch = () => { refetchUnidades(); refetchPropostas(); };

  return {
    allLojistas, filtered, mapaData, tableRows: filtered, todasPropostas,
    loadingUnidades,
    filterPisos, setFilterPisos,
    filterCorredores, setFilterCorredores,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    manutencaoLojista, setManutencaoLojista,
    refetch,
  };
}
