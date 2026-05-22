/**
 * DisponibilidadeManutencaoModal.tsx — Modal de manutenção de uma unidade.
 *
 * Abre quando o usuário clica em uma unidade no mapa de Disponibilidade.
 * Exibe as propostas vinculadas àquela unidade em duas abas:
 *
 * ABA "Proposta Atual":
 *  - A proposta com maior prioridade: Vencida > Aprovada > Finalizada
 *  - Exibe: nome fantasia, tipo de operação, valor, datas, status
 *  - Clique na linha abre PropostaManutencaoModal para edição completa
 *
 * ABA "Propostas Vinculadas":
 *  - Todas as outras propostas da unidade (em análise, reprovadas, etc.)
 *  - Tabela com filtro por coluna (matchColFilter)
 *  - Clique em qualquer linha abre PropostaManutencaoModal
 *
 * Toolbar:
 *  - Novo: abre PropostaManutencaoModal em modo criação, pré-preenchendo
 *    a aba "Loja Anterior" com dados da proposta atual (se ocupada)
 *  - Anterior/Próximo: navega entre unidades sem fechar o modal,
 *    disparando o evento 'navigate-disponibilidade' que o ViewModel escuta
 *  - Sair: fecha o modal
 *
 * Props:
 *  unidade     — UnidadeInfo da unidade selecionada
 *  allUnidades — lista completa filtrada (para navegação Anterior/Próximo)
 *  onClose     — callback ao fechar
 *
 * Nota: propostaModalAberta é tipada como 'any' para aceitar tanto
 * PropostaResumo (da API) quanto o objeto de nova proposta criado localmente.
 */
import { useState, useMemo } from "react";
import { FilePlus, ChevronLeft, ChevronRight, LogOut, Calendar } from "lucide-react";
import { propostas as propostasApi } from "../data/apiClient";
import { useApi } from "../data/useApi";
import { PropostaManutencaoModal } from "./PropostaManutencaoModal";
import type { UnidadeInfo, Proposta, StatusProposta } from "../data/comercialData";
import { STATUS_VENCIDA, STATUS_APROVADO, STATUS_FINALIZADO, STATUS_DISPONIVEL, PISO_LABEL } from "../enums";
import type { Piso } from "../enums";
import { DataTable } from "./DataTable";
import { DataCard } from "./DataCard";
import { ToolbarBtn, ToolbarDivider, ManutencaoToolbar, ManutencaoModalShell, TabBar, InfoHeaderBar, HeaderField } from "./ManutencaoShared";
import { fmtCurrency, matchColFilter } from "../utils/manutencao";

const STATUS_COLORS: Record<StatusProposta, string> = {
  "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40",
  "Aguardando análise do comitê": "bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40",
  Aprovado: "bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-500/40",
  Reprovado: "bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-500/40",
  Cancelado: "bg-gray-100 dark:bg-gray-500/20 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-500/40",
  Vencida: "bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-500/40",
  Finalizado: "bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40",
};

const TIPO_COLORS: Record<string, string> = {
  "Nova Instalação": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400",
  Renovação: "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400",
  Readequação: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
};


interface DisponibilidadeManutencaoModalProps {
  unidade: UnidadeInfo;
  allUnidades: UnidadeInfo[];
  onClose: () => void;
}

export function DisponibilidadeManutencaoModal({ unidade: lojista, allUnidades: allLojistas, onClose }: DisponibilidadeManutencaoModalProps) {

  const [activeTab, setActiveTab] = useState<'proposta-atual' | 'propostas-vinculadas'>('proposta-atual');
  const [propostaModalAberta, setPropostaModalAberta] = useState<any>(null);
  const [novaPropostaEditMode, setNovaPropostaEditMode] = useState(false);
  const [vinculadasColFilters, setVinculadasColFilters] = useState<Record<string, string>>({});

  const currentIndex = allLojistas.findIndex(l => l.id === lojista.id);

  const { data: propostasData } = useApi(() => propostasApi.listar({ idUnidade: lojista.id }), [lojista.id]);
  const todasPropostas = propostasData || [];

  // Proposta ativa: prioridade Vencida > Aprovado > Finalizado
  const propostaAtual = useMemo(() => {
    return (
      todasPropostas.find(p => p.status === STATUS_VENCIDA) ??
      todasPropostas.find(p => p.status === STATUS_APROVADO) ??
      todasPropostas.find(p => p.status === STATUS_FINALIZADO) ??
      null
    );
  }, [todasPropostas]);

  // Propostas vinculadas: todas as outras (incluindo em análise, reprovadas, canceladas)
  const propostasVinculadas = useMemo(() =>
    todasPropostas.filter(p => p.id !== propostaAtual?.id),
  [todasPropostas, propostaAtual]);

  const vinculadasFiltradas = useMemo(() =>
    propostasVinculadas.filter(p =>
      matchColFilter(p.nomeFantasia || '', vinculadasColFilters['lojista'] || '') &&
      matchColFilter(p.tipo, vinculadasColFilters['tipo'] || '') &&
      matchColFilter(p.id, vinculadasColFilters['codigo'] || '') &&
      matchColFilter(String(p.valorProposto), vinculadasColFilters['valor'] || '') &&
      matchColFilter(p.dataCriacao, vinculadasColFilters['criado'] || '') &&
      matchColFilter(p.dataVencimento || '', vinculadasColFilters['vencimento'] || '') &&
      matchColFilter(p.status, vinculadasColFilters['status'] || '')
    ),
  [propostasVinculadas, vinculadasColFilters]);

  const handleAnterior = () => {
    if (currentIndex > 0) {
      window.dispatchEvent(new CustomEvent('navigate-disponibilidade', { detail: allLojistas[currentIndex - 1] }));
    }
  };

  const handleProximo = () => {
    if (currentIndex < allLojistas.length - 1) {
      window.dispatchEvent(new CustomEvent('navigate-disponibilidade', { detail: allLojistas[currentIndex + 1] }));
    }
  };

  const abrirNovaProposta = () => {
    const novaProposta: any = {
      id: `PROP-NOVO-${Date.now()}`,
      
      
      unidade: lojista.unidade,
      segmento: lojista.segmento,
      tipoOperacao: 'Nova Instalação',
      tipo: 'Nova Instalação',
      valorProposto: 0,
      area: lojista.area,
      status: 'Aguardando análise financeira',
      responsavel: '',
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
      dataVencimento: '',
      observacoes: '',

      // Aba Loja Anterior — pré-preenchida com dados da proposta atual
      ...(propostaAtual ? {
        lojaAnteriorNomeFantasia: propostaAtual.nomeFantasia || '',
        lojaAnteriorSegmento: propostaAtual.segmento,
        lojaAnteriorTipoOperacao: propostaAtual.tipoOperacao,
        lojaAnteriorCTO: propostaAtual.valorProposto,
        lojaAnteriorABL: propostaAtual.area,
        lojaAnteriorAMM: propostaAtual.area > 0
          ? parseFloat((propostaAtual.valorProposto / propostaAtual.area).toFixed(2))
          : 0,
        lojaAnteriorDividaAMM: 0,
        lojaAnteriorDividaNegociada: 0,
        lojaAnteriorDividaCondominio: 0,
        lojaAnteriorDividaFPP: 0,
      } : {}),
    };
    setNovaPropostaEditMode(true);
    setPropostaModalAberta(novaProposta);
  };

  // Vencimento agora vem da proposta aprovada via fimContrato

  return (
    <>
      <ManutencaoModalShell maxWidth="sm:max-w-3xl">
          {/* Toolbar */}
          <ManutencaoToolbar>

            <ToolbarBtn icon={<FilePlus className="w-4 h-4" />} label="Novo" onClick={abrirNovaProposta} />

            <ToolbarDivider />

            <ToolbarBtn
              icon={<ChevronLeft className="w-4 h-4" />}
              label="Anterior"
              onClick={handleAnterior}
              disabled={currentIndex === 0}
            />
            <ToolbarBtn
              icon={<ChevronRight className="w-4 h-4" />}
              label="Próximo"
              onClick={handleProximo}
              disabled={currentIndex >= allLojistas.length - 1}
            />

            <ToolbarDivider />

            <ToolbarBtn icon={<LogOut className="w-4 h-4" />} label="Sair" onClick={onClose} />

            {false && (
              <div className="ml-auto flex items-center pr-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-orange-500/30 text-orange-200 rounded-full">
                  ⚠ &lt;60 dias
                </span>
              </div>
            )}
          </ManutencaoToolbar>

          {/* Cabeçalho de disponibilidade */}
          <InfoHeaderBar>
            <HeaderField label="Nº da Loja" value={lojista.unidade} mono />
            <HeaderField label="Piso"        value={PISO_LABEL[lojista.piso as Piso] ?? '-'} />
            <HeaderField label="Área (m²)"   value={`${lojista.area} m²`} />
            <HeaderField label="Corredor"    value={lojista.corredor} />
            <HeaderField label="Segmento"    value={lojista.segmento} />
            <HeaderField label="Status" colSpanFull>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border w-auto inline-flex items-center gap-1.5
                ${lojista.status === STATUS_DISPONIVEL
                  ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/40'
                  : 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-500/40'}`}>
                {lojista.status}
              </span>
            </HeaderField>
          </InfoHeaderBar>

          {/* Abas */}
          <TabBar
            tabs={[
              { id: 'proposta-atual', label: 'Proposta Atual' },
              { id: 'propostas-vinculadas', label: `Propostas Vinculadas (${propostasVinculadas.length})` },
            ]}
            activeTab={activeTab}
            onChange={id => setActiveTab(id as 'proposta-atual' | 'propostas-vinculadas')}
          />

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto p-5">

            {/* ABA: Proposta Atual */}
            {activeTab === 'proposta-atual' && (
              <>
                {!propostaAtual ? (
                  <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                    <p className="text-sm">Nenhuma proposta ativa para esta unidade</p>
                    <p className="text-xs mt-1 opacity-70">Use o botão "Novo" na toolbar para criar uma proposta</p>
                  </div>
                ) : (
                  <>
                    {/* Card — mobile */}
                    <button
                      onClick={() => setPropostaModalAberta(propostaAtual)}
                      className="sm:hidden w-full text-left p-4 rounded-xl border border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{propostaAtual.nomeFantasia || '—'}</span>
                        <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${TIPO_COLORS[propostaAtual.tipoOperacao] || ''}`}>{propostaAtual.tipoOperacao}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-[#64748B] mb-3 font-mono">{propostaAtual.id}</p>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {[
                          { label: 'Valor proposto', value: fmtCurrency(propostaAtual.valorProposto) },
                          { label: 'Área', value: `${propostaAtual.area} m²` },
                          { label: 'Criado em', value: propostaAtual.dataCriacao },
                          { label: 'Vencimento', value: propostaAtual.dataVencimento },
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-2.5">
                            <p className="text-[10px] text-gray-400 dark:text-[#64748B] mb-0.5">{item.label}</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{item.value}</p>
                          </div>
                        ))}
                      </div>
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[propostaAtual.status as StatusProposta]}`}>
                        {propostaAtual.status}
                      </span>
                    </button>

                    {/* Tabela — desktop */}
                    <div className="hidden sm:block overflow-x-auto">
                      <DataTable
                        data={[{
                          nomeFantasia: propostaAtual.nomeFantasia || '—',
                          tipo:         propostaAtual.tipoOperacao,
                          id:           propostaAtual.id,
                          valor:        propostaAtual.valorProposto,
                          criacao:      propostaAtual.dataCriacao,
                          vencimento:   propostaAtual.dataVencimento || '—',
                          status:       propostaAtual.status,
                        }]}
                        columnConfig={{
                          nomeFantasia: { label: 'Nome Fantasia' },
                          tipo:         { label: 'Tipo', _allowFilter: false, render: (_, v) => (
                            <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${TIPO_COLORS[v] || ''}`}>{v}</span>
                          )},
                          id:           { label: 'Código', _allowFilter: false },
                          valor:        { label: 'Valor', _allowFilter: false, render: (_, v) => fmtCurrency(v) },
                          criacao:      { label: 'Criado em', _allowFilter: false },
                          vencimento:   { label: 'Vencimento', _allowFilter: false },
                          status:       { label: 'Status', _allowFilter: false, render: (_, v) => (
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${STATUS_COLORS[v as StatusProposta]}`}>{v}</span>
                          )},
                        }}
                        onRowClick={() => setPropostaModalAberta(propostaAtual)}
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {/* ABA: Propostas Vinculadas */}
            {activeTab === 'propostas-vinculadas' && (
              <>
                {propostasVinculadas.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                    <p className="text-sm">Nenhuma outra proposta vinculada a esta unidade</p>
                  </div>
                ) : vinculadasFiltradas.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                    <p className="text-sm">Nenhum resultado para os filtros aplicados</p>
                  </div>
                ) : (
                  <>
                    {/* Cards — mobile */}
                    <div className="flex flex-col gap-3 sm:hidden">
                      {vinculadasFiltradas.map(p => (
                        <DataCard
                          key={p.id}
                          data={p}
                          fieldMap={{
                            title:       { field: 'nomeFantasia', format: v => v || '—' },
                            titleBadge:  'tipoOperacao',
                            subtitle:    ['id', 'codigoUnidade', 'segmento'],
                            value:       { field: 'valorProposto', format: v => fmtCurrency(v) },
                            valueSub:    { field: 'area', format: v => `${v} m²` },
                            statusBadge: 'status',
                            footer:      'dataVencimento',
                          }}
                          onClick={row => setPropostaModalAberta(row)}
                        />
                      ))}
                    </div>

                    {/* Tabela — desktop */}
                    <div className="hidden sm:block overflow-x-auto">
                      <DataTable
                        data={vinculadasFiltradas.map(p => ({
                          nomeFantasia: p.nomeFantasia || '—',
                          tipo:         p.tipoOperacao,
                          id:           p.id,
                          valor:        p.valorProposto,
                          criacao:      p.dataCriacao,
                          vencimento:   p.dataVencimento || '—',
                          status:       p.status,
                          _raw:         p,
                        }))}
                        columnConfig={{
                          nomeFantasia: { label: 'Nome Fantasia' },
                          tipo:         { label: 'Tipo', render: (_, v) => (
                            <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${TIPO_COLORS[v] || ''}`}>{v}</span>
                          )},
                          id:           { label: 'Código' },
                          valor:        { label: 'Valor', render: (_, v) => fmtCurrency(v) },
                          criacao:      { label: 'Criado em' },
                          vencimento:   { label: 'Vencimento' },
                          status:       { label: 'Status', render: (_, v) => (
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${STATUS_COLORS[v as StatusProposta]}`}>{v}</span>
                          )},
                          _raw:         { _specified: false },
                        }}
                        onRowClick={row => setPropostaModalAberta(row._raw)}
                        emptyMessage="Nenhuma proposta vinculada"
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
      </ManutencaoModalShell>

      {/* Modal de manutenção de proposta — abre por cima */}
      {propostaModalAberta && (
        <PropostaManutencaoModal
          proposta={propostaModalAberta}
          allPropostas={todasPropostas}
          forceEditMode={novaPropostaEditMode}
          onClose={() => {
            setPropostaModalAberta(null);
            setNovaPropostaEditMode(false);
          }}
        />
      )}
    </>
  );
}
