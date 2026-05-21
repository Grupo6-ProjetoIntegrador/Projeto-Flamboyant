// ============================================================
// viewmodels/useComercialReports.ts — ViewModel de Relatórios
// ============================================================
//
// Papel na arquitetura MVVM: camada VIEWMODEL para a tela de Relatórios.
//
// Responsabilidades:
//  1. DADOS: busca unidades e propostas da API
//  2. CAMPOS: gerencia quais colunas estão selecionadas para exportar
//     (DEFAULT_FIELDS define o conjunto inicial com seleção padrão)
//  3. FILTROS: piso, status, segmento e intervalo de datas
//  4. GRÁFICOS: calcula os 3 datasets para os charts da tela
//      - segmentosChart: distribuição de lojas por segmento (barras)
//      - pisoChart: ocupação por piso (donut)
//      - propostasChart: propostas por status (donut)
//  5. EXPORTAÇÃO: gera arquivos .xlsx (via SheetJS) e .pdf (via jsPDF)
//     com estrutura hierárquica Disponibilidade → Proposta → Histórico
//
// DEFAULT_FIELDS: define os campos disponíveis para seleção.
// Categorias: 'Disponibilidade', 'Proposta', 'Histórico'
// (categoria 'Dados da Loja' foi removida — dados virão da API futuramente)
//
// buildExportRows(): monta as linhas achatadas para exportação.
// Para cada unidade, gera 1 linha de disponibilidade + N linhas
// de propostas vinculadas + M linhas de histórico de cada proposta.
// ============================================================
import { useState, useMemo } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { getEdicoesByProposal } from '../data/comercialStore';
import type { StatusProposta, Piso } from '../data/comercialData';
import { STATUS_OCUPADO, STATUS_APROVADO } from '../enums';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const NS = 'relatorios';

export interface ReportField {
  id: string;
  label: string;
  category: 'Disponibilidade' | 'Proposta' | 'Dados da Loja' | 'Histórico';
  selected: boolean;
}

export const DEFAULT_FIELDS: ReportField[] = [
  { id: 'unidade',        label: 'Unidade',            category: 'Disponibilidade', selected: true },
  { id: 'piso',           label: 'Piso',               category: 'Disponibilidade', selected: true },
  { id: 'corredor',       label: 'Corredor',           category: 'Disponibilidade', selected: false },
  { id: 'area',           label: 'Área (m²)',          category: 'Disponibilidade', selected: true },
  { id: 'statusUnidade',  label: 'Status da Unidade',  category: 'Disponibilidade', selected: true },
  { id: 'propCodigo',     label: 'Código',             category: 'Proposta',        selected: true },
  { id: 'propTipo',       label: 'Tipo',               category: 'Proposta',        selected: true },
  { id: 'propValor',      label: 'Valor Proposto',     category: 'Proposta',        selected: true },
  { id: 'propStatus',     label: 'Status da Proposta', category: 'Proposta',        selected: true },
  { id: 'propCriacao',    label: 'Data de Criação',    category: 'Proposta',        selected: false },
  { id: 'propVencimento', label: 'Data de Vencimento', category: 'Proposta',        selected: true },
  { id: 'propResponsavel',label: 'Responsável',        category: 'Proposta',        selected: false },
  { id: 'histData',       label: 'Data da Edição',     category: 'Histórico',       selected: false },
  { id: 'histEditor',     label: 'Editado por',        category: 'Histórico',       selected: false },
  { id: 'histStatusAnt',  label: 'Status Anterior',    category: 'Histórico',       selected: false },
  { id: 'histStatusNovo', label: 'Status Novo',        category: 'Histórico',       selected: false },
];

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
}

export function useComercialReports() {
  // ── Model ────────────────────────────────────────────────
  const { data: todasUnidadesData } = useApi(() => UnidadesService.listar(), []);
  const { data: propostasData }     = useApi(() => PropostasService.listar(), []);

  // ── Estado persistido ────────────────────────────────────
  const [fields, setFields] = usePersistedState<ReportField[]>(
    `${NS}.fields`,
    DEFAULT_FIELDS,
    JSON.stringify,
    (s) => {
      const saved: ReportField[] = JSON.parse(s);
      return DEFAULT_FIELDS.map(def => {
        const found = saved.find(f => f.id === def.id);
        return found ? { ...def, selected: found.selected } : def;
      });
    },
  );
  const [dateFrom,       setDateFrom]       = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,         setDateTo]         = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [filterPisos,    setFilterPisos]    = usePersistedState<string[]>(`${NS}.filterPisos`, []);
  const [filterStatuses, setFilterStatuses] = usePersistedState<string[]>(`${NS}.filterStatuses`, []);
  const [filterSegmentos,setFilterSegmentos]= usePersistedState<string[]>(`${NS}.filterSegmentos`, []);
  const [exportFormat,   setExportFormat]   = usePersistedState<'xlsx' | 'pdf'>(`${NS}.exportFormat`, 'xlsx', v => v, v => v as 'xlsx' | 'pdf');
  const [expandedCategories, setExpandedCategories] = usePersistedState<string[]>(
    `${NS}.expandedCategories`,
    ['Disponibilidade', 'Proposta', 'Dados da Loja', 'Histórico'],
  );

  // ── Estado de UI ─────────────────────────────────────────
  const [showMobileFilters,    setShowMobileFilters]    = useState(false);
  const [reportChartIndex,     setReportChartIndex]     = useState(0);
  const [showPreviewModal,     setShowPreviewModal]      = useState(false);
  const [mobileReportSection,  setMobileReportSection]  = useState<'graficos' | 'campos' | null>('campos');

  // ── Dados derivados ──────────────────────────────────────
  const allPropostas = useMemo(() => propostasData || [], [propostasData]);

  const allLojistas = useMemo(() => {
    if (!todasUnidadesData) return [];
    return todasUnidadesData.map(un => ({
      id: un.id,
      nome: un.status === STATUS_OCUPADO ? STATUS_OCUPADO : 'Disponível',
      segmento: (allPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.segmento || 'Outros'),
      responsavel: '',
      email: '',
      unidade: un.codigo,
      piso: un.piso as Piso,
      corredor: un.corredor,
      area: un.area,
      status: un.status,
    }));
  }, [todasUnidadesData, allPropostas]);

  const filteredLojistas = useMemo(() =>
    allLojistas.filter(l => {
      const matchPiso    = filterPisos.length === 0    || filterPisos.includes(l.piso);
      const matchStatus  = filterStatuses.length === 0 || filterStatuses.includes(l.status);
      const matchSeg     = filterSegmentos.length === 0 || filterSegmentos.includes(l.segmento);
      return matchPiso && matchStatus && matchSeg;
    }),
  [allLojistas, filterPisos, filterStatuses, filterSegmentos]);

  const filteredPropostas = useMemo(() =>
    allPropostas.filter(p => {
      if (!dateFrom && !dateTo) return true;
      const iso = p.dataCriacao.includes('/') ? p.dataCriacao.split('/').reverse().join('-') : p.dataCriacao;
      if (dateFrom && iso < dateFrom) return false;
      if (dateTo   && iso > dateTo)   return false;
      return true;
    }),
  [allPropostas, dateFrom, dateTo]);

  const segmentosChart = useMemo(() => {
    const map: Record<string, number> = {};
    filteredLojistas.filter(l => l.status === STATUS_OCUPADO).forEach(l => {
      map[l.segmento] = (map[l.segmento] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [filteredLojistas]);

  const pisoChart = useMemo(() => [
    { name: 'Primeiro Piso', value: filteredLojistas.filter(l => l.piso === 'P' && l.status === STATUS_OCUPADO).length },
    { name: 'Segundo Piso',  value: filteredLojistas.filter(l => l.piso === 'S' && l.status === STATUS_OCUPADO).length },
    { name: 'Terceiro Piso', value: filteredLojistas.filter(l => l.piso === 'T' && l.status === STATUS_OCUPADO).length },
  ], [filteredLojistas]);

  const propostasChart = useMemo(() => {
    const statuses: StatusProposta[] = [
      'Aguardando análise financeira', 'Aguardando análise do comitê',
      'Aprovado', 'Reprovado', 'Cancelado', 'Vencida', 'Finalizado',
    ];
    return statuses
      .map(s => ({ name: s, value: filteredPropostas.filter(p => p.status === s).length }))
      .filter(d => d.value > 0);
  }, [filteredPropostas]);

  // Campos selecionados agrupados
  const selectedFields   = fields.filter(f => f.selected);
  const dispFields       = selectedFields.filter(f => f.category === 'Disponibilidade');
  const propFields       = selectedFields.filter(f => f.category === 'Proposta');
  const lojFields        = selectedFields.filter(f => f.category === 'Dados da Loja');
  const histFields       = selectedFields.filter(f => f.category === 'Histórico');

  // ── Handlers de campos ───────────────────────────────────
  const toggleField = (id: string) =>
    setFields(prev => prev.map(f => f.id === id ? { ...f, selected: !f.selected } : f));

  const toggleCategory = (category: string) => {
    const catFields = fields.filter(f => f.category === category);
    const allSel    = catFields.every(f => f.selected);
    setFields(prev => prev.map(f => f.category === category ? { ...f, selected: !allSel } : f));
  };

  const toggleExpanded = (category: string) =>
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );

  const toggleReportSection = (section: 'graficos' | 'campos') =>
    setMobileReportSection(prev => prev === section ? null : section);

  // ── Exportação ───────────────────────────────────────────
  const buildExportRows = () => {
    const rows: Record<string, string>[] = [];
    filteredLojistas.forEach(l => {
      const dispRow: Record<string, string> = {};
      dispFields.forEach(f => {
        dispRow[f.label] =
          f.id === 'unidade'       ? l.unidade :
          f.id === 'piso'          ? (l.piso === 'P' ? 'Primeiro Piso' : l.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso') :
          f.id === 'corredor'      ? l.corredor :
          f.id === 'area'          ? `${l.area} m²` :
          f.id === 'statusUnidade' ? l.status : '—';
      });
      propFields.forEach(f => { dispRow[`[Proposta] ${f.label}`]  = ''; });
      lojFields.forEach(f  => { dispRow[`[Dados da Loja] ${f.label}`]   = ''; });
      histFields.forEach(f => { dispRow[`[Histórico] ${f.label}`] = ''; });
      rows.push(dispRow);

      const props = allPropostas.filter(p => p.codigoUnidade === l.unidade);
      props.forEach(p => {
        const edicoes = histFields.length > 0 ? getEdicoesByProposal(p.id) : [];
        const propRow: Record<string, string> = {};
        dispFields.forEach(f => { propRow[f.label] = ''; });
        propFields.forEach(f => {
          propRow[`[Proposta] ${f.label}`] =
            f.id === 'propCodigo'      ? p.id :
            f.id === 'propTipo'        ? p.tipoOperacao :
            f.id === 'propValor'       ? fmtCurrency(p.valorProposto) :
            f.id === 'propStatus'      ? p.status :
            f.id === 'propCriacao'     ? p.dataCriacao :
            f.id === 'propVencimento'  ? (p.dataVencimento || '—') :
            f.id === 'propResponsavel' ? (p.responsavel || '—') : '—';
        });
        lojFields.forEach(f => {
          propRow[`[Dados da Loja] ${f.label}`] =
            f.id === 'lojistaNome'      ? (p.nomeFantasia || '—') :
            f.id === 'lojistaSegmento'  ? p.segmento :
            f.id === 'lojistaResp'      ? (p.responsavel || '—') :
            f.id === 'lojistaEmail'     ? '—' : '—';
        });
        histFields.forEach(f => { propRow[`[Histórico] ${f.label}`] = ''; });
        rows.push(propRow);

        edicoes.forEach(e => {
          const histRow: Record<string, string> = {};
          dispFields.forEach(f => { histRow[f.label] = ''; });
          propFields.forEach(f => { histRow[`[Proposta] ${f.label}`] = ''; });
          lojFields.forEach(f  => { histRow[`[Dados da Loja] ${f.label}`]  = ''; });
          histFields.forEach(f => {
            histRow[`[Histórico] ${f.label}`] =
              f.id === 'histData'       ? new Date(e.editadoEm).toLocaleString('pt-BR') :
              f.id === 'histEditor'     ? e.editadoPorNome :
              f.id === 'histStatusAnt'  ? e.snapshot.status :
              f.id === 'histStatusNovo' ? p.status : '—';
          });
          rows.push(histRow);
        });
      });
    });
    return rows;
  };

  const handleExportXLSX = () => {
    const rows = buildExportRows();
    if (!rows.length) return;
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Relatório Comercial');
    ws['!cols'] = Object.keys(rows[0]).map(key => ({
      wch: Math.max(key.length, ...rows.map(r => (r[key] || '').length)) + 2,
    }));
    XLSX.writeFile(wb, `relatorio-comercial-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const handleExportPDF = () => {
    const rows = buildExportRows();
    if (!rows.length) return;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    doc.setFontSize(14);
    doc.setTextColor(139, 26, 26);
    doc.text('Relatório Comercial — JP Mall', 14, 16);
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Gerado em ${new Date().toLocaleString('pt-BR')} · ${filteredLojistas.length} unidades`, 14, 22);
    const headers = Object.keys(rows[0]);
    autoTable(doc, {
      head: [headers],
      body: rows.map(r => headers.map(h => r[h] || '')),
      startY: 27,
      styles: { fontSize: 7, cellPadding: 2, overflow: 'linebreak' },
      headStyles: { fillColor: [139, 26, 26], textColor: 255, fontStyle: 'bold', fontSize: 7 },
      alternateRowStyles: { fillColor: [249, 250, 251] },
      margin: { left: 14, right: 14 },
    });
    doc.save(`relatorio-comercial-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const handleExport = () =>
    exportFormat === 'xlsx' ? handleExportXLSX() : handleExportPDF();

  return {
    // dados
    allLojistas, allPropostas, filteredLojistas, filteredPropostas,
    segmentosChart, pisoChart, propostasChart,
    // campos
    fields, setFields, selectedFields, dispFields, propFields, lojFields, histFields,
    expandedCategories,
    // filtros
    dateFrom, setDateFrom, dateTo, setDateTo,
    filterPisos, setFilterPisos,
    filterStatuses, setFilterStatuses,
    filterSegmentos, setFilterSegmentos,
    // ui
    showMobileFilters, setShowMobileFilters,
    exportFormat, setExportFormat,
    reportChartIndex, setReportChartIndex,
    showPreviewModal, setShowPreviewModal,
    mobileReportSection,
    // ações
    toggleField, toggleCategory, toggleExpanded, toggleReportSection,
    handleExport,
  };
}
