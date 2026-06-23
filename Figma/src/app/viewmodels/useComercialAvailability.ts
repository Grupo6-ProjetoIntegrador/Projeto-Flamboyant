import { useState, useMemo, useEffect } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { ViewMode } from '../enums';
import type { Piso, Corredor } from '../enums';
import type { Unidade as UnidadeEntity } from '../entities/unidade';

const NS = 'disponibilidade';

export function useComercialAvailability() {
  // ── Model ────────────────────────────────────────────────
  const { data: todasUnidades, loading: loadingUnidades, refetch: refetchUnidades } =
    useApi(() => UnidadesService.listar(), []);
  const { data: todasPropostasData, refetch: refetchPropostas } =
    useApi(() => PropostasService.listar(), []);

  // ── Estado persistido ────────────────────────────────────
  const [filterPisos,      setFilterPisos]      = usePersistedState<Piso[]>(`${NS}.filterPisos`, []);
  const [filterCorredores, setFilterCorredores] = usePersistedState<Corredor[]>(`${NS}.filterCorredores`, []);
  const [viewMode,         setViewMode]         = usePersistedState<ViewMode>(`${NS}.viewMode`, ViewMode.Cards, v => v, v => v as ViewMode);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // ── Estado de UI ─────────────────────────────────────────
  const [manutencaoUnidade, setManutencaoUnidade] = useState<UnidadeEntity | null>(null);

  // Forçar mapa em mobile
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth < 640) setViewMode(ViewMode.Cards); };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navegação entre unidades via evento
  useEffect(() => {
    const handler = (e: any) => setManutencaoUnidade(e.detail);
    window.addEventListener('navigate-disponibilidade', handler);
    return () => window.removeEventListener('navigate-disponibilidade', handler);
  }, []);

  // ── Dados derivados ──────────────────────────────────────
  const filtered = useMemo<UnidadeEntity[]>(() => {
    return todasUnidades === null ? [] : todasUnidades?.filter(l => {
      const matchPiso     = filterPisos.length === 0      || filterPisos.includes(l.piso as Piso);
      const matchCorredor = filterCorredores.length === 0 || filterCorredores.includes(l.corredor as Corredor);
      return matchPiso && matchCorredor;
    });
  }, [todasUnidades, filterPisos, filterCorredores]);

  const mapaData = useMemo(() => {
    const result: Record<Piso, Record<Corredor, UnidadeEntity[]>> = {
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

  // ── Unidades com proposta vinculada ──────────────────────
  const unidadesComProposta = useMemo<Set<string>>(() => {
    if (!todasPropostasData) return new Set();
    return new Set(
      (todasPropostasData as any[])
        .map(p => p.idUnidade)
        .filter(Boolean)
    );
  }, [todasPropostasData]);

  // ── Handlers ─────────────────────────────────────────────
  const refetch = () => { refetchUnidades(); refetchPropostas(); };

  return {
    todasUnidades, filtered, mapaData, tableRows: filtered,
    loadingUnidades,
    unidadesComProposta,
    filterPisos, setFilterPisos,
    filterCorredores, setFilterCorredores,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    manutencaoUnidade, setManutencaoUnidade,
    refetch,
  };
}