// ============================================================
// comercialData.ts — Tipos, interfaces e dados estáticos locais
// ============================================================
//
// Este arquivo tem dois papéis distintos:
//
// 1. TIPOS E INTERFACES (exportados, usados em todo o frontend):
//    Segmento, StatusLoja, StatusProposta, Piso — tipos union para
//    valores de domínio. Garantem que só strings válidas sejam usadas.
//
//    UnidadeInfo — DTO de conveniência que representa uma unidade física
//    combinada com dados da proposta aprovada (nome fantasia, segmento).
//    NÃO é uma entidade do banco — é montada pelo ViewModel de Disponibilidade.
//
//    Proposta — interface local com todos os campos de uma proposta,
//    incluindo campos das sub-tabelas (lojaAnterior*, necessidades*, etc.).
//    Usada pelo PropostaManutencaoModal internamente. Os dados reais vêm
//    da API via PropostaResumo/PropostaDetalhe do apiClient.
//
// 2. DADOS MOCK ESTÁTICOS (propostasAtivas, allUnidadesInfo):
//    Gerados localmente para protótipo. NÃO são usados nas telas principais
//    (que buscam dados da API via useApi). Usados apenas pelo comercialStore.
//
// ATENÇÃO: os campos flat de sub-tabelas em Proposta (lojaAnterior*,
// demandaEletrica*, resSperata*, tt*, parecer*) existem como achatamento
// para o PropostaManutencaoModal. Na API, cada grupo é uma tabela separada
// (PropostaLojaAnterior, PropostaNecessidadesTecnicas, etc.).
// ============================================================
// ============================================================
// TIPOS E INTERFACES
// Os tipos de domínio vivem em enums/index.ts — importados para uso
// interno e re-exportados para manter compatibilidade com os imports existentes.
// ============================================================
import type { Segmento, StatusLoja, StatusProposta, Piso, TipoProposta, Corredor } from '../enums';
import { STATUS_OCUPADO, STATUS_DISPONIVEL, STATUS_APROVADO } from '../enums';
export type { Segmento, StatusLoja, StatusProposta, Piso, TipoProposta, Corredor };
export interface PropostaHistoricoItem {
  id: string;
  data: string;
  tipo: string;
  valor: number;
  status: string;
  observacao?: string;
}

export interface UnidadeInfo {
  id: string;
  nome: string;
  cnpj?: string;
  segmento: Segmento;
  responsavel: string;
  email: string;
  telefone?: string;
  unidade: string;
  piso: 'P' | 'S' | 'T';
  corredor: Corredor;
  area: number;
  status: StatusLoja;
  faturamentoMedio?: number;
  propostas?: PropostaHistoricoItem[];
}

export interface Proposta {
  id: string;
  lojista?: string;
  lojistaId?: string;
  unidade: string;
  segmento: Segmento;
  tipo: TipoProposta;
  valorProposto: number;
  area: number;
  status: StatusProposta;
  responsavel: string;
  dataCriacao: string;
  dataVencimento: string;
  observacoes?: string;

  // NOVOS campos — aba Loja Proposta
  nomeFantasia?: string;
  tipoOperacao?: 'Transferência' | 'Cessão' | 'Nova Locação' | 'Renovação' | 'Readequação';
  aluguelPercent?: number;
  prazoLocacaoMeses?: number;
  aluguelPorM2?: number;
  condominioAprox?: number;
  fppAprox?: number;
  inicioContrato?: string;
  fimContrato?: string;
  dataInauguracao?: string;

  // Loja Anterior
  lojaAnteriorNomeFantasia?: string;
  lojaAnteriorSegmento?: string;
  lojaAnteriorTipoOperacao?: string;
  lojaAnteriorCTO?: number;
  lojaAnteriorABL?: number;
  lojaAnteriorAMM?: number;
  lojaAnteriorDividaAMM?: number;
  lojaAnteriorDividaNegociada?: number;
  lojaAnteriorDividaCondominio?: number;
  lojaAnteriorDividaFPP?: number;
  lojaAnteriorFormaPagamento?: string;

  // Necessidades Técnicas — Elétrica
  demandaEletricaKva?: number;
  tensaoNecessaria?: string;
  circuitosEspeciais?: boolean;
  obsEletrica?: string;

  // Necessidades Técnicas — Hidráulica
  pontoAgua?: boolean;
  quantidadePontosAgua?: number;
  pontoEsgoto?: boolean;
  vazaoNecessariaLmin?: number;
  caixaGordura?: boolean;
  obsHidraulica?: string;

  // Necessidades Técnicas — Gás
  necessitaGas?: boolean;
  tipoGas?: string;
  consumoGasM3h?: number;
  obsGas?: string;

  // Necessidades Técnicas — Ventilação e Exaustão
  necessitaExaustao?: boolean;
  vazaoExaustaoM3h?: number;
  necessitaMakeUpAr?: boolean;
  obsVentilacao?: string;

  // Necessidades Técnicas — Estrutura
  areaMinimaM2?: number;
  areaMaximaM2?: number;
  peDireitoMinimoM?: number;
  cargaPisoKgm2?: number;
  necessitaMezanino?: boolean;
  obsEstrutura?: string;

  // Necessidades Técnicas — Fachada e Visual
  frenteMinimaM?: number;
  tipoFachada?: string;
  comunicacaoVisualLed?: boolean;
  obsFachada?: string;

  // Necessidades Técnicas — TI e Telecom
  pontosDados?: number;
  necessitaFibra?: boolean;
  obsTelecom?: string;

  // Necessidades Técnicas — Controle
  statusNecessidadesTecnicas?: string;
  responsavelTecnico?: string;
  dataVistoria?: string;

  // NOVOS campos — aba Cessão de Direitos (ativa somente se tipoOperacao = 'Cessão' | 'Transferência')
  resSperataProposta?: number;                // valor total proposto (input)
  resSperataPropostaPorM2?: number;           // calculado
  referenciadeMercadoPorM2?: number;          // referência de mercado (consultado)
  sinalResSperata?: number;
  percentSinalResSperata?: number;            // calculado
  saldoResSperata?: number;                   // calculado
  numParcelasResSperata?: number;
  valorParcelaResSperata?: number;            // calculado
  formaPagamentoSaldoResSperata?: string;
  statusResSperata?: string;
  observacoesResSperata?: string;

  // NOVOS campos — aba Taxa de Transferência (ativa somente se tipoOperacao = 'Transferência')
  ttContratual?: number;
  ttProposta?: number;
  ttPropostaNumAMM?: number;
  diferencaTT?: number;                       // calculado
  percentDescontoTT?: number;                 // calculado
  sinalTT?: number;
  percentSinalTT?: number;                    // calculado
  saldoTT?: number;                           // calculado
  formaPagamentoTT?: string;
  statusTT?: string;
  justificativaTT?: string;
  totalResSperata?: number;                   // calculado
  totalTT?: number;                           // calculado
  totalOperacao?: number;                     // calculado

  // NOVOS campos — aba Parecer do Comitê
  parecerPresidente?: string;
  parecerPresidenteData?: string;
  parecerDiretoriaComp1?: string;
  parecerDiretoriaComp1Data?: string;
  parecerDiretoriaComp2?: string;
  parecerDiretoriaComp2Data?: string;
  parecerSuperintendente?: string;
  parecerSuperintendenteData?: string;
  parecerInNetworking?: string;
  parecerInNetworkingData?: string;
}

// ============================================================
// LOJAS CHAVE COM DADOS COMPLETOS (50 lojas)
// ============================================================
const keyStores: UnidadeInfo[] = [
  // ──── P CORREDOR A — MODA ÂNCORA ────
  {
    id: 'P-001', nome: 'Renner', cnpj: '92.754.738/0001-62', segmento: 'Moda',
    responsavel: 'Marcela Fontana', email: 'marcela.fontana@renner.com.br', telefone: '(62) 3344-5566',
    unidade: 'P-001', piso: 'P', corredor: 'A', area: 800,
    status: 'Ocupado', faturamentoMedio: 1850000,
    propostas: [
      { id: 'PROP-H-001', data: '10/01/2024', tipo: 'Renovação', valor: 72000, status: 'Aceita', observacao: 'Renovação com reajuste de 8% pelo IGPM' },
      { id: 'PROP-H-002', data: '05/02/2021', tipo: 'Nova Proposta', valor: 62000, status: 'Aceita', observacao: 'Expansão com área adicional de 200m²' },
    ],
  },
  {
    id: 'P-002', nome: 'C&A', cnpj: '45.242.914/0001-05', segmento: 'Moda',
    responsavel: 'Roberto Siqueira', email: 'roberto.siqueira@cea.com.br', telefone: '(62) 3210-9988',
    unidade: 'P-002', piso: 'P', corredor: 'A', area: 700,
    status: 'Ocupado', faturamentoMedio: 1420000,
    propostas: [
      { id: 'PROP-H-003', data: '10/04/2026', tipo: 'Renovação', valor: 66000, status: 'Em Negociação', observacao: 'Proposta de renovação com reajuste de 8%' },
      { id: 'PROP-H-004', data: '15/04/2023', tipo: 'Renovação', valor: 61000, status: 'Aceita', observacao: 'Renovação com readequação de área' },
    ],
  },
  {
    id: 'P-003', nome: 'Riachuelo', cnpj: '33.200.056/0001-28', segmento: 'Moda',
    responsavel: 'Fernanda Leite', email: 'f.leite@riachuelo.com.br', telefone: '(62) 3344-7788',
    unidade: 'P-003', piso: 'P', corredor: 'A', area: 650,
    status: 'Ocupado', faturamentoMedio: 1280000,
    propostas: [
      { id: 'PROP-H-005', data: '15/11/2023', tipo: 'Renovação', valor: 55000, status: 'Aceita', observacao: 'Negociação rápida, sem pendências' },
    ],
  },
  {
    id: 'P-004', nome: 'Zara', cnpj: '72.700.786/0001-99', segmento: 'Moda',
    responsavel: 'Ana Paula Rocha', email: 'ana.rocha@zara.com.br', telefone: '(62) 3512-3344',
    unidade: 'P-004', piso: 'P', corredor: 'A', area: 450,
    status: 'Ocupado', faturamentoMedio: 2100000,
    propostas: [
      { id: 'PROP-H-006', data: '20/01/2025', tipo: 'Nova Proposta', valor: 98000, status: 'Aceita', observacao: 'Nova instalação, ponto premium' },
    ],
  },
  {
    id: 'P-005', nome: 'H&M', cnpj: '23.613.404/0001-58', segmento: 'Moda',
    responsavel: 'Carlos Matos', email: 'c.matos@hm.com', telefone: '(62) 3212-1100',
    unidade: 'P-005', piso: 'P', corredor: 'A', area: 500,
    status: 'Ocupado', faturamentoMedio: 1950000,
    propostas: [
      { id: 'PROP-H-007', data: '01/05/2024', tipo: 'Nova Proposta', valor: 88000, status: 'Aceita' },
    ],
  },
  {
    id: 'P-006', nome: 'Arezzo', cnpj: '16.590.234/0001-76', segmento: 'Moda',
    responsavel: 'Beatriz Cardoso', email: 'beatriz.c@arezzo.com.br', telefone: '(62) 3321-5544',
    unidade: 'P-006', piso: 'P', corredor: 'A', area: 180,
    status: 'Ocupado', faturamentoMedio: 780000,
    propostas: [
      { id: 'PROP-H-008', data: '01/07/2023', tipo: 'Renovação', valor: 32000, status: 'Aceita', observacao: 'Reajuste de 7% acordado' },
    ],
  },
  {
    id: 'P-007', nome: 'Chilli Beans', cnpj: '04.392.000/0001-22', segmento: 'Moda',
    responsavel: 'Thiago Assunção', email: 'thiago.a@chillibeans.com.br', telefone: '(62) 3301-2200',
    unidade: 'P-007', piso: 'P', corredor: 'A', area: 80,
    status: 'Ocupado', faturamentoMedio: 390000,
    propostas: [
      { id: 'PROP-H-009', data: '05/04/2026', tipo: 'Renovação', valor: 20000, status: 'Em Negociação', observacao: 'Reajuste proposto de 11%' },
      { id: 'PROP-H-010', data: '28/11/2023', tipo: 'Renovação', valor: 18000, status: 'Aceita' },
    ],
  },
  {
    id: 'P-008', nome: 'Farm', cnpj: '03.799.255/0001-81', segmento: 'Moda',
    responsavel: 'Juliana Prado', email: 'j.prado@farm.com.br', telefone: '(62) 3456-7890',
    unidade: 'P-008', piso: 'P', corredor: 'A', area: 190,
    status: 'Ocupado', faturamentoMedio: 920000,
    propostas: [
      { id: 'PROP-H-011', data: '10/12/2024', tipo: 'Nova Proposta', valor: 41000, status: 'Aceita', observacao: 'Transferência de outra unidade' },
    ],
  },

  // ──── P CORREDOR B — ESPORTES ────
  {
    id: 'P-031', nome: 'Decathlon', cnpj: '03.471.761/0001-68', segmento: 'Esportes',
    responsavel: 'Pierre Dubois', email: 'pierre.dubois@decathlon.com.br', telefone: '(62) 3600-1200',
    unidade: 'P-031', piso: 'P', corredor: 'B', area: 1200,
    status: 'Ocupado', faturamentoMedio: 3200000,
    propostas: [
      { id: 'PROP-H-012', data: '01/06/2022', tipo: 'Nova Proposta', valor: 95000, status: 'Aceita', observacao: 'Âncora esportiva exclusiva para o piso 1' },
    ],
  },
  {
    id: 'P-032', nome: 'Centauro', cnpj: '42.830.506/0001-65', segmento: 'Esportes',
    responsavel: 'Márcio Silveira', email: 'm.silveira@centauro.com.br', telefone: '(62) 3412-3344',
    unidade: 'P-032', piso: 'P', corredor: 'B', area: 400,
    status: 'Ocupado', faturamentoMedio: 1350000,
    propostas: [
      { id: 'PROP-H-013', data: '10/02/2024', tipo: 'Renovação', valor: 52000, status: 'Aceita' },
    ],
  },
  {
    id: 'P-033', nome: 'Nike Store', cnpj: '56.998.476/0001-10', segmento: 'Esportes',
    responsavel: 'Lucas Andrade', email: 'lucas.a@nike.com', telefone: '(62) 3400-1122',
    unidade: 'P-033', piso: 'P', corredor: 'B', area: 250,
    status: 'Ocupado', faturamentoMedio: 1100000,
    propostas: [
      { id: 'PROP-H-014', data: '01/08/2023', tipo: 'Renovação', valor: 68000, status: 'Aceita', observacao: 'Reajuste de 9% negociado' },
    ],
  },
  {
    id: 'P-034', nome: 'Adidas', cnpj: '61.088.094/0001-57', segmento: 'Esportes',
    responsavel: 'Claudia Becker', email: 'claudia.b@adidas.com', telefone: '(62) 3501-4455',
    unidade: 'P-034', piso: 'P', corredor: 'B', area: 230,
    status: 'Ocupado', faturamentoMedio: 890000,
    propostas: [
      { id: 'PROP-H-015', data: '15/03/2024', tipo: 'Nova Proposta', valor: 58000, status: 'Aceita' },
    ],
  },

  // ──── P CORREDOR C — SERVIÇOS ────
  {
    id: 'P-061', nome: 'Bradesco', cnpj: '60.746.948/0001-12', segmento: 'Serviços',
    responsavel: 'Rafael Monteiro', email: 'rafael.monteiro@bradesco.com.br', telefone: '(62) 3100-5000',
    unidade: 'P-061', piso: 'P', corredor: 'C', area: 120,
    status: 'Ocupado', faturamentoMedio: 0,
    propostas: [
      { id: 'PROP-H-016', data: '02/04/2026', tipo: 'Renovação', valor: 31000, status: 'Em Análise', observacao: 'Banco solicita prazo de análise interna de 30 dias' },
      { id: 'PROP-H-017', data: '20/11/2020', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'P-062', nome: 'Itaú Uniclass', cnpj: '60.872.504/0001-23', segmento: 'Serviços',
    responsavel: 'Vanessa Torres', email: 'vanessa.torres@itau.com.br', telefone: '(62) 3300-7788',
    unidade: 'P-062', piso: 'P', corredor: 'C', area: 100,
    status: 'Ocupado', faturamentoMedio: 0,
    propostas: [
      { id: 'PROP-H-018', data: '01/06/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita', observacao: 'Renovação antecipada com ajuste' },
    ],
  },
  {
    id: 'P-063', nome: 'Claro', cnpj: '40.432.544/0001-47', segmento: 'Serviços',
    responsavel: 'Diego Nascimento', email: 'd.nascimento@claro.com.br', telefone: '(62) 3400-2020',
    unidade: 'P-063', piso: 'P', corredor: 'C', area: 70,
    status: 'Ocupado', faturamentoMedio: 420000,
    propostas: [
      { id: 'PROP-H-019', data: '05/04/2026', tipo: 'Renovação', valor: 20500, status: 'Pendente', observacao: 'Aguardando aprovação interna da operadora' },
      { id: 'PROP-H-020', data: '01/01/2023', tipo: 'Nova Proposta', valor: 19000, status: 'Aceita' },
    ],
  },

  // ──── S CORREDOR A — ELETRÔNICOS ────
  {
    id: 'S-001', nome: 'Fast Shop', cnpj: '61.797.924/0001-67', segmento: 'Eletrônicos',
    responsavel: 'Marcus Ribeiro', email: 'marcus.ribeiro@fastshop.com.br', telefone: '(62) 3600-3344',
    unidade: 'S-001', piso: 'S', corredor: 'A', area: 350,
    status: 'Ocupado', faturamentoMedio: 2800000,
    propostas: [
      { id: 'PROP-H-021', data: '01/04/2024', tipo: 'Renovação', valor: 75000, status: 'Aceita', observacao: 'Fidelização de lojista âncora' },
    ],
  },
  {
    id: 'S-002', nome: 'Apple Store', cnpj: '00.015.477/0001-00', segmento: 'Eletrônicos',
    responsavel: 'Jennifer Kim', email: 'jennifer.kim@apple.com', telefone: '(62) 3700-7777',
    unidade: 'S-002', piso: 'S', corredor: 'A', area: 280,
    status: 'Ocupado', faturamentoMedio: 5500000,
    propostas: [
      { id: 'PROP-H-022', data: '20/06/2023', tipo: 'Nova Proposta', valor: 150000, status: 'Aceita', observacao: 'Negociação estratégica com selo de loja certificada Apple' },
    ],
  },
  {
    id: 'S-003', nome: 'Samsung Experience', cnpj: '17.901.255/0001-49', segmento: 'Eletrônicos',
    responsavel: 'Min Jun Park', email: 'minjun.park@samsung.com', telefone: '(62) 3500-5500',
    unidade: 'S-003', piso: 'S', corredor: 'A', area: 200,
    status: 'Ocupado', faturamentoMedio: 2200000,
    propostas: [
      { id: 'PROP-H-023', data: '01/11/2024', tipo: 'Nova Proposta', valor: 82000, status: 'Aceita' },
    ],
  },
  {
    id: 'S-004', nome: 'Magazine Luiza', cnpj: '47.960.950/0001-21', segmento: 'Eletrônicos',
    responsavel: 'Priscila Madureira', email: 'p.madureira@magazineluiza.com.br', telefone: '(62) 3800-1234',
    unidade: 'S-004', piso: 'S', corredor: 'A', area: 500,
    status: 'Ocupado', faturamentoMedio: 3100000,
    propostas: [
      { id: 'PROP-H-024', data: '01/11/2021', tipo: 'Nova Proposta', valor: 68000, status: 'Aceita' },
    ],
  },

  // ──── S CORREDOR B — BELEZA / MODA ────
  {
    id: 'S-031', nome: 'O Boticário', cnpj: '75.659.658/0001-83', segmento: 'Outros',
    responsavel: 'Ana Lima', email: 'ana.lima@boticario.com.br', telefone: '(62) 3233-4455',
    unidade: 'S-031', piso: 'S', corredor: 'B', area: 150,
    status: 'Ocupado', faturamentoMedio: 680000,
    propostas: [
      { id: 'PROP-H-025', data: '10/01/2024', tipo: 'Renovação', valor: 34000, status: 'Aceita' },
    ],
  },
  {
    id: 'S-032', nome: 'Natura', cnpj: '71.673.990/0001-77', segmento: 'Outros',
    responsavel: 'Carla Soares', email: 'carla.soares@natura.net', telefone: '(62) 3301-4488',
    unidade: 'S-032', piso: 'S', corredor: 'B', area: 140,
    status: 'Ocupado', faturamentoMedio: 620000,
    propostas: [
      { id: 'PROP-H-026', data: '01/04/2025', tipo: 'Renovação', valor: 31000, status: 'Aceita' },
    ],
  },
  {
    id: 'S-033', nome: 'Starbucks Reserve', cnpj: '08.164.083/0001-48', segmento: 'Alimentação',
    responsavel: 'Rodrigo Campos', email: 'r.campos@starbucks.com.br', telefone: '(62) 3441-2200',
    unidade: 'S-033', piso: 'S', corredor: 'B', area: 200,
    status: 'Ocupado', faturamentoMedio: 1100000,
    propostas: [
      { id: 'PROP-H-027', data: '10/04/2026', tipo: 'Readequação', valor: 48000, status: 'Em Negociação', observacao: 'Proposta de aumento de área com novo contrato' },
      { id: 'PROP-H-028', data: '01/07/2024', tipo: 'Nova Proposta', valor: 45000, status: 'Aceita', observacao: 'Primeiro Starbucks Reserve de Goiânia' },
    ],
  },
  {
    id: 'S-034', nome: 'Uniqlo', cnpj: '32.521.444/0001-39', segmento: 'Moda',
    responsavel: 'Yuki Tanaka', email: 'y.tanaka@uniqlo.com', telefone: '(62) 3600-4400',
    unidade: 'S-034', piso: 'S', corredor: 'B', area: 600,
    status: 'Ocupado', faturamentoMedio: 2800000,
    propostas: [
      { id: 'PROP-H-029', data: '01/12/2024', tipo: 'Nova Proposta', valor: 110000, status: 'Aceita', observacao: 'Primeira loja em Goiânia — exclusividade por 5 anos' },
    ],
  },

  // ──── S CORREDOR C — SERVIÇOS / ENTRETENIMENTO ────
  {
    id: 'S-061', nome: 'Smart Fit', cnpj: '21.386.077/0001-27', segmento: 'Serviços',
    responsavel: 'Felipe Gomes', email: 'felipe.gomes@smartfit.com.br', telefone: '(62) 3800-9900',
    unidade: 'S-061', piso: 'S', corredor: 'C', area: 800,
    status: 'Ocupado', faturamentoMedio: 580000,
    propostas: [
      { id: 'PROP-H-030', data: '01/04/2023', tipo: 'Nova Proposta', valor: 48000, status: 'Aceita', observacao: 'Contrato longo prazo 5 anos com reajuste anual IGPM' },
    ],
  },
  {
    id: 'S-063', nome: 'Cinemark', cnpj: '62.578.458/0001-60', segmento: 'Entretenimento',
    responsavel: 'Sandra Almeida', email: 's.almeida@cinemark.com.br', telefone: '(62) 3900-1100',
    unidade: 'S-063', piso: 'S', corredor: 'C', area: 2500,
    status: 'Ocupado', faturamentoMedio: 4200000,
    propostas: [
      { id: 'PROP-H-031', data: '01/10/2018', tipo: 'Nova Proposta', valor: 180000, status: 'Aceita', observacao: 'Contrato âncora de entretenimento 10 anos' },
    ],
  },

  // ──── T CORREDOR A — PRAÇA DE ALIMENTAÇÃO ────
  {
    id: 'T-001', nome: "McDonald's", cnpj: '47.079.633/0001-01', segmento: 'Alimentação',
    responsavel: 'Renata Freitas', email: 'renata.freitas@mcdonalds.com.br', telefone: '(62) 3312-5500',
    unidade: 'T-001', piso: 'T', corredor: 'A', area: 320,
    status: 'Ocupado', faturamentoMedio: 2900000,
    propostas: [
      { id: 'PROP-H-032', data: '01/02/2022', tipo: 'Renovação', valor: 90000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-002', nome: 'Outback Steakhouse', cnpj: '15.110.258/0001-45', segmento: 'Alimentação',
    responsavel: 'George Mitchell', email: 'george.mitchell@outback.com.br', telefone: '(62) 3500-2200',
    unidade: 'T-002', piso: 'T', corredor: 'A', area: 400,
    status: 'Ocupado', faturamentoMedio: 3500000,
    propostas: [
      { id: 'PROP-H-033', data: '01/06/2024', tipo: 'Renovação', valor: 105000, status: 'Aceita', observacao: 'Expansão de área de 350 para 400m²' },
      { id: 'PROP-H-034', data: '15/04/2026', tipo: 'Readequação', valor: 115000, status: 'Em Negociação', observacao: 'Proposta de nova expansão + reforma da cozinha' },
    ],
  },
  {
    id: 'T-003', nome: 'Subway', cnpj: '11.080.473/0001-35', segmento: 'Alimentação',
    responsavel: 'Carlos Junior', email: 'carlosjr@subway.com.br', telefone: '(62) 3212-8899',
    unidade: 'T-003', piso: 'T', corredor: 'A', area: 120,
    status: 'Ocupado', faturamentoMedio: 480000,
    propostas: [
      { id: 'PROP-H-035', data: '20/11/2023', tipo: 'Nova Proposta', valor: 22000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-004', nome: 'Burger King', cnpj: '13.574.594/0001-96', segmento: 'Alimentação',
    responsavel: 'Marcos Tavares', email: 'marcos.tavares@burgerking.com.br', telefone: '(62) 3444-5566',
    unidade: 'T-004', piso: 'T', corredor: 'A', area: 280,
    status: 'Ocupado', faturamentoMedio: 1800000,
    propostas: [
      { id: 'PROP-H-036', data: '08/04/2026', tipo: 'Renovação', valor: 82000, status: 'Em Negociação', observacao: 'Negociação com pedido de desconto pela inflação do setor' },
      { id: 'PROP-H-037', data: '01/05/2023', tipo: 'Nova Proposta', valor: 75000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-005', nome: 'Fogo de Chão', cnpj: '09.386.049/0001-27', segmento: 'Alimentação',
    responsavel: 'Alessandro Moura', email: 'a.moura@fogodechao.com.br', telefone: '(62) 3600-8800',
    unidade: 'T-005', piso: 'T', corredor: 'A', area: 500,
    status: 'Ocupado', faturamentoMedio: 4800000,
    propostas: [
      { id: 'PROP-H-038', data: '01/09/2023', tipo: 'Nova Proposta', valor: 135000, status: 'Aceita', observacao: 'Âncora premium da praça de alimentação' },
    ],
  },
  {
    id: 'T-006', nome: "Bob's", cnpj: '14.982.647/0001-52', segmento: 'Alimentação',
    responsavel: 'Samir Couto', email: 'samir.couto@bobs.com.br', telefone: '(62) 3200-9900',
    unidade: 'T-006', piso: 'T', corredor: 'A', area: 140,
    status: 'Ocupado', faturamentoMedio: 560000,
    propostas: [
      { id: 'PROP-H-039', data: '01/12/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-007', nome: 'Giraffas', cnpj: '52.148.007/0001-73', segmento: 'Alimentação',
    responsavel: 'Vanessa Rezende', email: 'v.rezende@giraffas.com.br', telefone: '(62) 3400-7711',
    unidade: 'T-007', piso: 'T', corredor: 'A', area: 160,
    status: 'Ocupado', faturamentoMedio: 490000,
    propostas: [
      { id: 'PROP-H-040', data: '01/02/2023', tipo: 'Nova Proposta', valor: 20000, status: 'Aceita' },
    ],
  },

  // ──── T CORREDOR B — ALIMENTAÇÃO / VARIEDADES ────
  {
    id: 'T-028', nome: 'Pizza Hut', cnpj: '10.490.715/0001-01', segmento: 'Alimentação',
    responsavel: 'Paulo Mendes', email: 'paulo.mendes@pizzahut.com.br', telefone: '(62) 3512-9900',
    unidade: 'T-028', piso: 'T', corredor: 'B', area: 200,
    status: 'Ocupado', faturamentoMedio: 820000,
    propostas: [
      { id: 'PROP-H-041', data: '01/03/2024', tipo: 'Nova Proposta', valor: 38000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-029', nome: 'KFC', cnpj: '17.311.723/0001-92', segmento: 'Alimentação',
    responsavel: 'Anderson Rocha', email: 'anderson.rocha@kfc.com.br', telefone: '(62) 3312-4455',
    unidade: 'T-029', piso: 'T', corredor: 'B', area: 180,
    status: 'Ocupado', faturamentoMedio: 750000,
    propostas: [
      { id: 'PROP-H-042', data: '01/11/2024', tipo: 'Nova Proposta', valor: 35000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-030', nome: 'Spoleto', cnpj: '05.351.939/0001-18', segmento: 'Alimentação',
    responsavel: 'Rita Cardoso', email: 'rita.cardoso@spoleto.com.br', telefone: '(62) 3400-5544',
    unidade: 'T-030', piso: 'T', corredor: 'B', area: 130,
    status: 'Ocupado', faturamentoMedio: 540000,
    propostas: [
      { id: 'PROP-H-043', data: '01/05/2024', tipo: 'Renovação', valor: 24000, status: 'Aceita' },
    ],
  },

  // ──── T CORREDOR C — VAREJO DIVERSO ────
  {
    id: 'T-055', nome: 'Tok&Stok', cnpj: '07.620.072/0001-61', segmento: 'Outros',
    responsavel: 'Isabella Ferreira', email: 'isabella.ferreira@tokstok.com.br', telefone: '(62) 3600-7766',
    unidade: 'T-055', piso: 'T', corredor: 'C', area: 400,
    status: 'Ocupado', faturamentoMedio: 980000,
    propostas: [
      { id: 'PROP-H-044', data: '01/02/2024', tipo: 'Nova Proposta', valor: 42000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-056', nome: 'Livraria Cultura', cnpj: '60.665.981/0001-93', segmento: 'Outros',
    responsavel: 'Eduardo Braga', email: 'e.braga@livrariacultura.com.br', telefone: '(62) 3301-9988',
    unidade: 'T-056', piso: 'T', corredor: 'C', area: 350,
    status: 'Ocupado', faturamentoMedio: 620000,
    propostas: [
      { id: 'PROP-H-045', data: '05/04/2026', tipo: 'Renovação', valor: 29000, status: 'Pendente', observacao: 'Aguardando definição interna sobre fechamento de filiais' },
      { id: 'PROP-H-046', data: '01/04/2022', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'T-057', nome: 'CVC Viagens', cnpj: '10.760.260/0001-19', segmento: 'Serviços',
    responsavel: 'Tatiane Moreira', email: 'tatiane.moreira@cvc.com.br', telefone: '(62) 3312-3344',
    unidade: 'T-057', piso: 'T', corredor: 'C', area: 80,
    status: 'Ocupado', faturamentoMedio: 350000,
    propostas: [
      { id: 'PROP-H-047', data: '01/01/2025', tipo: 'Renovação', valor: 16000, status: 'Aceita' },
    ],
  },

  // UNIDADES DISPONÍVEIS
  {
    id: 'P-023', nome: '', cnpj: '', segmento: 'Moda', responsavel: '', email: '', telefone: '',
    unidade: 'P-023', piso: 'P', corredor: 'A', area: 85,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'P-047', nome: '', cnpj: '', segmento: 'Esportes', responsavel: '', email: '', telefone: '',
    unidade: 'P-047', piso: 'P', corredor: 'B', area: 120,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'P-068', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'P-068', piso: 'P', corredor: 'C', area: 70,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'S-015', nome: '', cnpj: '', segmento: 'Eletrônicos', responsavel: '', email: '', telefone: '',
    unidade: 'S-015', piso: 'S', corredor: 'A', area: 100,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'S-039', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'S-039', piso: 'S', corredor: 'B', area: 90,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'S-062', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'S-062', piso: 'S', corredor: 'C', area: 95,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'T-008', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'T-008', piso: 'T', corredor: 'A', area: 100,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'T-031', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'T-031', piso: 'T', corredor: 'B', area: 90,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'T-054', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'T-054', piso: 'T', corredor: 'B', area: 80,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'T-072', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'T-072', piso: 'T', corredor: 'C', area: 85,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
];

// ============================================================
// GERADOR DE LOJAS GENÉRICAS (para completar 260 total)
// ============================================================
const brandsBySegment: Record<string, string[]> = {
  Moda: ['Marisa', 'Pernambucanas', 'GAP', 'Calvin Klein', 'Tommy Hilfiger', 'Lacoste', 'Guess', 'Lupo', 'Anacapri', 'Shoulder', 'Dudalina', 'Richards', 'Aeropostale', 'Levi\'s', 'Diesel', 'Ellus', 'Colcci', 'Cia Marítima', 'Morena Rosa', 'Damyller', 'Malwee', 'Hering Kids', 'Puket', 'Lilica Ripilica', 'Tip Top', 'Vert', 'Quem Disse Berenice', 'MMartan', 'Lojas Renner Infantil', 'Brooksfield'],
  Alimentação: ['Habibs', 'Ragazzo', 'China in Box', "Domino's", "Bob's Express", 'Frango Assado', 'The Fifties', 'Galeto Brasil', 'Vivenda do Camarão', 'Camarão & Cia', 'Bendito Hamburger', 'Coco Bambu', 'Madero', 'Montana Grill', 'Jerônimo', 'Mania de Churrasco', 'Frango Frito Brasil', 'Super Frango', 'Gendai', 'Oriental Mix'],
  Serviços: ['Localiza Rent a Car', 'Kalunga', 'Claro Mais', 'Tim Store', 'Oi Store', 'Óticas Carol', 'Óticas Diniz', 'Lensovision', 'Ortopé', 'Hair Brasil', 'Bio Ritmo', 'Salão Premium', 'Lavanderia 5àSec', 'Photo Studio', 'CVC Express', 'Caixa Econômica Federal'],
  Eletrônicos: ['Kabum', 'Dell', 'Lenovo Store', 'Mundo Conectado', 'Phone Lab', 'iPlace', 'TIM Store Tech', 'Positivo'],
  Esportes: ['Asics', 'New Balance', 'Penalty', 'Speedo', 'Track&Field', 'Olympikus', 'Under Armour', 'Mizuno', 'Fila', 'Umbro'],
  Entretenimento: ['Wizard Idiomas', 'Camelot Games', 'PlayShop', 'Game Over'],
  Outros: ['FNAC', 'Kalunga Express', 'Lojas Americanas Express', 'Papelaria Brasil', 'Presentes & Cia', 'Casa das Flores', 'Biju Mania', 'Mundo dos Acessórios', 'Relógios Brasil', 'Joalheria Prata'],
};

const responsaveis = ['João Alves', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira', 'Carlos Lima', 'Fernanda Melo', 'Rafael Sousa', 'Juliana Neves', 'Marcos Rocha', 'Camila Dias', 'Bruno Pires', 'Larissa Figueiredo', 'Diego Castro', 'Patricia Cunha', 'Rodrigo Borges'];
const segmentos: Segmento[] = ['Moda', 'Alimentação', 'Serviços', 'Eletrônicos', 'Esportes', 'Entretenimento', 'Outros'];

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateStore(piso: Piso, corredor: Corredor, num: number, seed: number): UnidadeInfo {
  const r = (offset = 0) => seededRandom(seed * 17 + offset);
  const seg: Segmento = piso === 'T' ? 'Alimentação' : segmentos[Math.floor(r(1) * segmentos.length)];
  const brands = brandsBySegment[seg] || brandsBySegment['Outros'];
  const nome = brands[Math.floor(r(2) * brands.length)];
  const area = Math.floor(r(3) * 300) + 60;
  const aluguel = Math.floor((area * (r(4) * 150 + 100)) / 100) * 100;
  const fatur = aluguel * (Math.floor(r(5) * 15) + 5);
  const resp = responsaveis[Math.floor(r(8) * responsaveis.length)];
  const unitStr = `${piso}-${String(num).padStart(3, '0')}`;
  const cnpjNum = Math.floor(r(9) * 99999999) + 10000000;

  return {
    id: unitStr,
    nome,
    cnpj: `${String(cnpjNum).slice(0, 2)}.${String(cnpjNum).slice(2, 5)}.${String(cnpjNum).slice(5, 8)}/0001-${String(Math.floor(r(13) * 89) + 10)}`,
    segmento: seg,
    responsavel: resp,
    email: `${resp.toLowerCase().replace(' ', '.')}@${nome.toLowerCase().replace(/\s+/g, '')}.com.br`,
    telefone: `(62) 3${String(Math.floor(r(14) * 900) + 100)}-${String(Math.floor(r(15) * 9000) + 1000)}`,
    unidade: unitStr,
    piso,
    corredor,
    area,
    status: STATUS_OCUPADO,
    faturamentoMedio: fatur,
    propostas: [{
      id: `PROP-GEN-${seed}`,
      data: '01/01/2024',
      tipo: 'Nova Proposta',
      valor: aluguel,
      status: STATUS_APROVADO,
    }],
  };
}

// ============================================================
// MONTAR BANCO COMPLETO DE 260 UNIDADES
// ============================================================
const keyIds = new Set(keyStores.map(s => s.id));

function buildFloor(piso: Piso, totalUnits: number): UnidadeInfo[] {
  const stores: UnidadeInfo[] = [];
  for (let i = 1; i <= totalUnits; i++) {
    const corredor: Corredor = i <= Math.floor(totalUnits / 3) ? 'A' : i <= Math.floor((totalUnits * 2) / 3) ? 'B' : 'C';
    const unitStr = `${piso}-${String(i).padStart(3, '0')}`;
    if (!keyIds.has(unitStr)) {
      const seedBase = (piso === 'P' ? 1000 : piso === 'S' ? 2000 : 3000) + i;
      stores.push(generateStore(piso, corredor, i, seedBase));
    }
  }
  return stores;
}

const generatedStores = [
  ...buildFloor('P', 90),
  ...buildFloor('S', 90),
  ...buildFloor('T', 80),
];

export const allUnidadesInfo: UnidadeInfo[] = [...keyStores, ...generatedStores].sort((a, b) =>
  a.unidade.localeCompare(b.unidade)
);

// ============================================================
// PROPOSTAS ATIVAS (para aba Propostas)
// ============================================================
export const propostasAtivas: Proposta[] = [
  { id: 'PROP-2026-001', lojistaId: 'P-002', lojista: 'C&A', unidade: 'P-002', segmento: 'Moda', tipo: 'Renovação', valorProposto: 66000, area: 700, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '10/04/2026', dataVencimento: '30/05/2026', observacoes: 'Proposta de renovação com reajuste de 8% sobre IPCA. Lojista solicita menor percentual de faturamento.' },
  { id: 'PROP-2026-002', lojistaId: undefined, lojista: 'Zara Home (Novo)', unidade: 'S-039', segmento: 'Outros', tipo: 'Nova Instalação', valorProposto: 38000, area: 90, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '08/04/2026', dataVencimento: '15/05/2026', observacoes: 'Grupo Inditex propõe inaugurar Zara Home na unidade disponível L2-039.' },
  { id: 'PROP-2026-003', lojistaId: 'T-004', lojista: 'Burger King', unidade: 'T-004', segmento: 'Alimentação', tipo: 'Renovação', valorProposto: 82000, area: 280, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '08/04/2026', dataVencimento: '05/06/2026', observacoes: 'BK solicita desconto de 5% alegando retração do setor de fast food.' },
  { id: 'PROP-2026-004', lojistaId: undefined, lojista: 'Espaço Gourmet Premium', unidade: 'T-008', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 45000, area: 100, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '07/04/2026', dataVencimento: '22/05/2026', observacoes: 'Novo conceito de restaurante premium. Aguardando documentação do licitante.' },
  { id: 'PROP-2026-005', lojistaId: 'S-033', lojista: 'Starbucks Reserve', unidade: 'S-033', segmento: 'Alimentação', tipo: 'Readequação', valorProposto: 48000, area: 220, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '05/04/2026', dataVencimento: '25/05/2026', observacoes: 'Proposta de expansão de 200 para 220m² com novo layout de balcão.' },
  { id: 'PROP-2026-006', lojistaId: undefined, lojista: 'Tech World', unidade: 'S-015', segmento: 'Eletrônicos', tipo: 'Nova Instalação', valorProposto: 52000, area: 100, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '04/04/2026', dataVencimento: '20/05/2026', observacoes: 'Franquia nacional de acessórios e dispositivos tech.' },
  { id: 'PROP-2026-007', lojistaId: 'P-007', lojista: 'Chilli Beans', unidade: 'P-007', segmento: 'Moda', tipo: 'Renovação', valorProposto: 20000, area: 80, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '01/04/2026', dataVencimento: '15/05/2026', observacoes: 'Reajuste de 11% proposto. Lojista contrapropôs 7%.' },
  { id: 'PROP-2026-008', lojistaId: undefined, lojista: 'Academia Forma Perfeita', unidade: 'S-062', segmento: 'Serviços', tipo: 'Nova Instalação', valorProposto: 35000, area: 95, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '01/04/2026', dataVencimento: '10/05/2026', observacoes: 'Proposta de academia boutique para complementar Smart Fit.' },
  { id: 'PROP-2026-009', lojistaId: 'P-061', lojista: 'Bradesco', unidade: 'P-061', segmento: 'Serviços', tipo: 'Renovação', valorProposto: 31000, area: 120, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '02/04/2026', dataVencimento: '20/05/2026', observacoes: 'Banco pede 30 dias para análise interna.' },
  { id: 'PROP-2026-010', lojistaId: 'T-056', lojista: 'Livraria Cultura', unidade: 'T-056', segmento: 'Outros', tipo: 'Renovação', valorProposto: 29000, area: 350, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '30/03/2026', dataVencimento: '10/05/2026', observacoes: 'Lojista avalia fechamento de unidades. Decisão pendente.' },
  { id: 'PROP-2026-011', lojistaId: undefined, lojista: 'Studio Z', unidade: 'P-023', segmento: 'Moda', tipo: 'Nova Instalação', valorProposto: 24000, area: 85, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '28/03/2026', dataVencimento: '12/05/2026', observacoes: 'Rede jovem de moda street wear.' },
  { id: 'PROP-2026-012', lojistaId: undefined, lojista: 'Healthy Bowl', unidade: 'T-031', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 28000, area: 90, status: 'Aprovado', responsavel: 'Gerência Comercial', dataCriacao: '20/03/2026', dataVencimento: '20/04/2026', observacoes: 'Aceite confirmado. Obras autorizadas para início em 25/04.' },
  { id: 'PROP-2026-013', lojistaId: 'P-063', lojista: 'Claro', unidade: 'P-063', segmento: 'Serviços', tipo: 'Renovação', valorProposto: 20500, area: 70, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '15/03/2026', dataVencimento: '01/05/2026', observacoes: 'Aguardando retorno da operadora após envio de proposta.' },
  { id: 'PROP-2026-014', lojistaId: undefined, lojista: 'Grão Expresso', unidade: 'T-054', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 22000, area: 80, status: 'Aprovado', responsavel: 'Gerência Comercial', dataCriacao: '10/03/2026', dataVencimento: '10/04/2026', observacoes: 'Cafeteria artesanal. Contrato assinado em 15/03.' },
  { id: 'PROP-2026-015', lojistaId: 'T-002', lojista: 'Outback Steakhouse', unidade: 'T-002', segmento: 'Alimentação', tipo: 'Readequação', valorProposto: 115000, area: 420, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '15/04/2026', dataVencimento: '15/05/2026', observacoes: 'Proposta de expansão para 420m² incluindo nova cozinha industrial.' },
  { id: 'PROP-2026-016', lojistaId: undefined, lojista: 'Havaianas Flagship', unidade: 'P-047', segmento: 'Moda', tipo: 'Nova Instalação', valorProposto: 32000, area: 120, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '12/04/2026', dataVencimento: '25/05/2026', observacoes: 'Proposta de loja flagship premium. Havaianas avaliando layout.' },
  { id: 'PROP-2026-017', lojistaId: undefined, lojista: 'Mundo Digital', unidade: 'T-072', segmento: 'Outros', tipo: 'Nova Instalação', valorProposto: 18000, area: 85, status: 'Reprovado', responsavel: 'Gerência Comercial', dataCriacao: '01/03/2026', dataVencimento: '01/04/2026', observacoes: 'Perfil comercial inadequado para o posicionamento do mall.' },
  { id: 'PROP-2026-018', lojistaId: 'P-002', lojista: 'C&A (Readequação)', unidade: 'P-002', segmento: 'Moda', tipo: 'Readequação', valorProposto: 58000, area: 600, status: 'Cancelado', responsavel: 'Gerência Comercial', dataCriacao: '01/01/2026', dataVencimento: '01/03/2026', observacoes: 'Proposta de redução de área não aceita dentro do prazo.' },
];

// ============================================================
// HELPERS
// ============================================================
export const TOTAL_UNIDADES = 260;
export const UNIDADES_OCUPADAS = allUnidadesInfo.filter(l => l.status === STATUS_OCUPADO).length;
export const UNIDADES_DISPONIVEIS = allUnidadesInfo.filter(l => l.status === STATUS_DISPONIVEL).length;
export const TAXA_OCUPACAO = Math.round((UNIDADES_OCUPADAS / TOTAL_UNIDADES) * 100 * 10) / 10;

export const segmentoCores: Record<Segmento, string> = {
  Moda: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
  Alimentação: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
  Serviços: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  Eletrônicos: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300',
  Esportes: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  Entretenimento: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
  Outros: 'bg-gray-100 text-gray-700 dark:bg-gray-800/60 dark:text-gray-300',
};

export const segmentoDotCores: Record<Segmento, string> = {
  Moda: 'bg-purple-500',
  Alimentação: 'bg-orange-500',
  Serviços: 'bg-blue-500',
  Eletrônicos: 'bg-cyan-500',
  Esportes: 'bg-green-500',
  Entretenimento: 'bg-pink-500',
  Outros: 'bg-gray-500',
};

export const statusPropostaCores: Record<StatusProposta, string> = {
  'Aguardando análise financeira': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Aguardando análise do comitê': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  Aprovado: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Reprovado: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  Cancelado: 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400',
  Vencida: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Finalizado: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
