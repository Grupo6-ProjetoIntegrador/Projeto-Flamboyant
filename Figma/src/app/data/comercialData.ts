// ============================================================
// TIPOS E INTERFACES
// ============================================================
export type Segmento = 'Moda' | 'Alimentação' | 'Serviços' | 'Eletrônicos' | 'Esportes' | 'Entretenimento' | 'Outros';
export type StatusLoja = 'Ocupado' | 'Disponível';
export type StatusRelacionamento = 'Excelente' | 'Bom' | 'Regular' | 'Crítico';
export type StatusContrato = 'Ativo' | 'Em Renovação' | 'Vencendo' | 'Vencido';
export type StatusProposta = 'Pendente' | 'Em Análise' | 'Em Negociação' | 'Aceita' | 'Recusada' | 'Expirada';
export type StatusMulta = 'Paga' | 'Pendente' | 'Contestada';

export interface ContratoAtivo {
  id: string;
  inicio: string;
  fim: string;
  valorAluguel: number;
  luvas: number;
  percentualFaturamento: number;
  indiceReajuste: 'IGPM' | 'IPCA';
  tipo: 'Aluguel Fixo' | 'Aluguel + Percentual' | 'Só Percentual';
  desempenho: number;
  diasRestantes: number;
  status: StatusContrato;
}

export interface Multa {
  id: string;
  data: string;
  tipo: string;
  valor: number;
  descricao: string;
  status: StatusMulta;
}

export interface PropostaHistorico {
  id: string;
  data: string;
  tipo: 'Nova Proposta' | 'Renovação' | 'Readequação';
  valor: number;
  status: StatusProposta;
  observacao?: string;
}

export interface Lojista {
  id: string;
  nome: string;
  cnpj: string;
  segmento: Segmento;
  responsavel: string;
  email: string;
  telefone: string;
  unidade: string;
  piso: 'L1' | 'L2' | 'L3';
  corredor: 'A' | 'B' | 'C';
  area: number;
  status: StatusLoja;
  statusRelacionamento?: StatusRelacionamento; // deprecated — kept for data compat
  faturamentoMedio: number;
  contratoAtivo?: ContratoAtivo;
  multas: Multa[];
  propostas: PropostaHistorico[];
}

export interface Proposta {
  id: string;
  lojistaId?: string;
  lojista: string;
  unidade: string;
  segmento: Segmento;
  tipo: 'Nova Instalação' | 'Renovação' | 'Readequação';
  valorProposto: number;
  area: number;
  status: StatusProposta;
  responsavel: string;
  dataCriacao: string;
  dataVencimento: string;
  observacoes?: string;
}

// ============================================================
// LOJAS CHAVE COM DADOS COMPLETOS (50 lojas)
// ============================================================
const keyStores: Lojista[] = [
  // ──── L1 CORREDOR A — MODA ÂNCORA ────
  {
    id: 'L1-001', nome: 'Renner', cnpj: '92.754.738/0001-62', segmento: 'Moda',
    responsavel: 'Marcela Fontana', email: 'marcela.fontana@renner.com.br', telefone: '(62) 3344-5566',
    unidade: 'L1-001', piso: 'L1', corredor: 'A', area: 800,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1850000,
    contratoAtivo: { id: 'CTR-2024-001', inicio: '01/03/2024', fim: '28/02/2027', valorAluguel: 72000, luvas: 450000, percentualFaturamento: 3.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 95, diasRestantes: 683, status: 'Ativo' },
    multas: [
      { id: 'MUL-001', data: '15/08/2024', tipo: 'Atraso no Pagamento', valor: 3600, descricao: 'Atraso de 5 dias no pagamento de aluguel ago/2024', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-001', data: '10/01/2024', tipo: 'Renovação', valor: 72000, status: 'Aceita', observacao: 'Renovação com reajuste de 8% pelo IGPM' },
      { id: 'PROP-H-002', data: '05/02/2021', tipo: 'Nova Proposta', valor: 62000, status: 'Aceita', observacao: 'Expansão com área adicional de 200m²' },
    ],
  },
  {
    id: 'L1-002', nome: 'C&A', cnpj: '45.242.914/0001-05', segmento: 'Moda',
    responsavel: 'Roberto Siqueira', email: 'roberto.siqueira@cea.com.br', telefone: '(62) 3210-9988',
    unidade: 'L1-002', piso: 'L1', corredor: 'A', area: 700,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 1420000,
    contratoAtivo: { id: 'CTR-2023-002', inicio: '01/06/2023', fim: '31/05/2026', valorAluguel: 61000, luvas: 380000, percentualFaturamento: 3.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 82, diasRestantes: 44, status: 'Vencendo' },
    multas: [
      { id: 'MUL-002', data: '10/11/2023', tipo: 'Uso indevido de área comum', valor: 5000, descricao: 'Uso de corredor externo para exposição sem autorização', status: 'Paga' },
      { id: 'MUL-003', data: '18/03/2024', tipo: 'Atraso no Pagamento', valor: 3050, descricao: 'Atraso de 4 dias no pagamento de março/2024', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-003', data: '10/04/2026', tipo: 'Renovação', valor: 66000, status: 'Em Negociação', observacao: 'Proposta de renovação com reajuste de 8%' },
      { id: 'PROP-H-004', data: '15/04/2023', tipo: 'Renovação', valor: 61000, status: 'Aceita', observacao: 'Renovação com readequação de área' },
    ],
  },
  {
    id: 'L1-003', nome: 'Riachuelo', cnpj: '33.200.056/0001-28', segmento: 'Moda',
    responsavel: 'Fernanda Leite', email: 'f.leite@riachuelo.com.br', telefone: '(62) 3344-7788',
    unidade: 'L1-003', piso: 'L1', corredor: 'A', area: 650,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 1280000,
    contratoAtivo: { id: 'CTR-2024-003', inicio: '01/01/2024', fim: '31/12/2026', valorAluguel: 55000, luvas: 310000, percentualFaturamento: 3.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 79, diasRestantes: 258, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-005', data: '15/11/2023', tipo: 'Renovação', valor: 55000, status: 'Aceita', observacao: 'Negociação rápida, sem pendências' },
    ],
  },
  {
    id: 'L1-004', nome: 'Zara', cnpj: '72.700.786/0001-99', segmento: 'Moda',
    responsavel: 'Ana Paula Rocha', email: 'ana.rocha@zara.com.br', telefone: '(62) 3512-3344',
    unidade: 'L1-004', piso: 'L1', corredor: 'A', area: 450,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2100000,
    contratoAtivo: { id: 'CTR-2025-004', inicio: '01/04/2025', fim: '31/03/2028', valorAluguel: 98000, luvas: 620000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 97, diasRestantes: 1079, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-006', data: '20/01/2025', tipo: 'Nova Proposta', valor: 98000, status: 'Aceita', observacao: 'Nova instalação, ponto premium' },
    ],
  },
  {
    id: 'L1-005', nome: 'H&M', cnpj: '23.613.404/0001-58', segmento: 'Moda',
    responsavel: 'Carlos Matos', email: 'c.matos@hm.com', telefone: '(62) 3212-1100',
    unidade: 'L1-005', piso: 'L1', corredor: 'A', area: 500,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1950000,
    contratoAtivo: { id: 'CTR-2024-005', inicio: '01/07/2024', fim: '30/06/2027', valorAluguel: 88000, luvas: 550000, percentualFaturamento: 3.8, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 93, diasRestantes: 804, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-007', data: '01/05/2024', tipo: 'Nova Proposta', valor: 88000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-006', nome: 'Arezzo', cnpj: '16.590.234/0001-76', segmento: 'Moda',
    responsavel: 'Beatriz Cardoso', email: 'beatriz.c@arezzo.com.br', telefone: '(62) 3321-5544',
    unidade: 'L1-006', piso: 'L1', corredor: 'A', area: 180,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 780000,
    contratoAtivo: { id: 'CTR-2023-006', inicio: '01/09/2023', fim: '31/08/2026', valorAluguel: 32000, luvas: 180000, percentualFaturamento: 4.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 91, diasRestantes: 136, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-008', data: '01/07/2023', tipo: 'Renovação', valor: 32000, status: 'Aceita', observacao: 'Reajuste de 7% acordado' },
    ],
  },
  {
    id: 'L1-007', nome: 'Chilli Beans', cnpj: '04.392.000/0001-22', segmento: 'Moda',
    responsavel: 'Thiago Assunção', email: 'thiago.a@chillibeans.com.br', telefone: '(62) 3301-2200',
    unidade: 'L1-007', piso: 'L1', corredor: 'A', area: 80,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 390000,
    contratoAtivo: { id: 'CTR-2024-007', inicio: '01/01/2024', fim: '31/12/2025', valorAluguel: 18000, luvas: 95000, percentualFaturamento: 5.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 76, diasRestantes: 258, status: 'Vencendo' },
    multas: [
      { id: 'MUL-007', data: '20/06/2024', tipo: 'Fachada fora do padrão', valor: 2500, descricao: 'Outdoor não aprovado pelo mall instalado na fachada', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-009', data: '05/04/2026', tipo: 'Renovação', valor: 20000, status: 'Em Negociação', observacao: 'Reajuste proposto de 11%' },
      { id: 'PROP-H-010', data: '28/11/2023', tipo: 'Renovação', valor: 18000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-008', nome: 'Farm', cnpj: '03.799.255/0001-81', segmento: 'Moda',
    responsavel: 'Juliana Prado', email: 'j.prado@farm.com.br', telefone: '(62) 3456-7890',
    unidade: 'L1-008', piso: 'L1', corredor: 'A', area: 190,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 920000,
    contratoAtivo: { id: 'CTR-2025-008', inicio: '01/02/2025', fim: '31/01/2028', valorAluguel: 41000, luvas: 220000, percentualFaturamento: 4.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 89, diasRestantes: 1020, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-011', data: '10/12/2024', tipo: 'Nova Proposta', valor: 41000, status: 'Aceita', observacao: 'Transferência de outra unidade' },
    ],
  },

  // ──── L1 CORREDOR B — ESPORTES ────
  {
    id: 'L1-031', nome: 'Decathlon', cnpj: '03.471.761/0001-68', segmento: 'Esportes',
    responsavel: 'Pierre Dubois', email: 'pierre.dubois@decathlon.com.br', telefone: '(62) 3600-1200',
    unidade: 'L1-031', piso: 'L1', corredor: 'B', area: 1200,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 3200000,
    contratoAtivo: { id: 'CTR-2022-031', inicio: '01/08/2022', fim: '31/07/2027', valorAluguel: 95000, luvas: 700000, percentualFaturamento: 2.8, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 98, diasRestantes: 1200, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-012', data: '01/06/2022', tipo: 'Nova Proposta', valor: 95000, status: 'Aceita', observacao: 'Âncora esportiva exclusiva para o piso 1' },
    ],
  },
  {
    id: 'L1-032', nome: 'Centauro', cnpj: '42.830.506/0001-65', segmento: 'Esportes',
    responsavel: 'Márcio Silveira', email: 'm.silveira@centauro.com.br', telefone: '(62) 3412-3344',
    unidade: 'L1-032', piso: 'L1', corredor: 'B', area: 400,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1350000,
    contratoAtivo: { id: 'CTR-2024-032', inicio: '01/04/2024', fim: '31/03/2027', valorAluguel: 52000, luvas: 290000, percentualFaturamento: 3.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 90, diasRestantes: 714, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-013', data: '10/02/2024', tipo: 'Renovação', valor: 52000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-033', nome: 'Nike Store', cnpj: '56.998.476/0001-10', segmento: 'Esportes',
    responsavel: 'Lucas Andrade', email: 'lucas.a@nike.com', telefone: '(62) 3400-1122',
    unidade: 'L1-033', piso: 'L1', corredor: 'B', area: 250,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1100000,
    contratoAtivo: { id: 'CTR-2023-033', inicio: '01/10/2023', fim: '30/09/2026', valorAluguel: 68000, luvas: 420000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 96, diasRestantes: 166, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-014', data: '01/08/2023', tipo: 'Renovação', valor: 68000, status: 'Aceita', observacao: 'Reajuste de 9% negociado' },
    ],
  },
  {
    id: 'L1-034', nome: 'Adidas', cnpj: '61.088.094/0001-57', segmento: 'Esportes',
    responsavel: 'Claudia Becker', email: 'claudia.b@adidas.com', telefone: '(62) 3501-4455',
    unidade: 'L1-034', piso: 'L1', corredor: 'B', area: 230,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 890000,
    contratoAtivo: { id: 'CTR-2024-034', inicio: '01/05/2024', fim: '30/04/2027', valorAluguel: 58000, luvas: 340000, percentualFaturamento: 3.8, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 84, diasRestantes: 744, status: 'Ativo' },
    multas: [
      { id: 'MUL-034', data: '12/09/2024', tipo: 'Obras sem aprovação', valor: 8000, descricao: 'Remodelação da fachada sem autorização prévia do mall', status: 'Contestada' },
    ],
    propostas: [
      { id: 'PROP-H-015', data: '15/03/2024', tipo: 'Nova Proposta', valor: 58000, status: 'Aceita' },
    ],
  },

  // ──── L1 CORREDOR C — SERVIÇOS ────
  {
    id: 'L1-061', nome: 'Bradesco', cnpj: '60.746.948/0001-12', segmento: 'Serviços',
    responsavel: 'Rafael Monteiro', email: 'rafael.monteiro@bradesco.com.br', telefone: '(62) 3100-5000',
    unidade: 'L1-061', piso: 'L1', corredor: 'C', area: 120,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 0,
    contratoAtivo: { id: 'CTR-2021-061', inicio: '01/01/2021', fim: '31/12/2025', valorAluguel: 28000, luvas: 150000, percentualFaturamento: 0, indiceReajuste: 'IPCA', tipo: 'Aluguel Fixo', desempenho: 99, diasRestantes: 258, status: 'Vencendo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-016', data: '02/04/2026', tipo: 'Renovação', valor: 31000, status: 'Em Análise', observacao: 'Banco solicita prazo de análise interna de 30 dias' },
      { id: 'PROP-H-017', data: '20/11/2020', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-062', nome: 'Itaú Uniclass', cnpj: '60.872.504/0001-23', segmento: 'Serviços',
    responsavel: 'Vanessa Torres', email: 'vanessa.torres@itau.com.br', telefone: '(62) 3300-7788',
    unidade: 'L1-062', piso: 'L1', corredor: 'C', area: 100,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 0,
    contratoAtivo: { id: 'CTR-2024-062', inicio: '01/08/2024', fim: '31/07/2027', valorAluguel: 26000, luvas: 130000, percentualFaturamento: 0, indiceReajuste: 'IPCA', tipo: 'Aluguel Fixo', desempenho: 100, diasRestantes: 835, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-018', data: '01/06/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita', observacao: 'Renovação antecipada com ajuste' },
    ],
  },
  {
    id: 'L1-063', nome: 'Claro', cnpj: '40.432.544/0001-47', segmento: 'Serviços',
    responsavel: 'Diego Nascimento', email: 'd.nascimento@claro.com.br', telefone: '(62) 3400-2020',
    unidade: 'L1-063', piso: 'L1', corredor: 'C', area: 70,
    status: 'Ocupado', statusRelacionamento: 'Regular', faturamentoMedio: 420000,
    contratoAtivo: { id: 'CTR-2023-063', inicio: '01/03/2023', fim: '28/02/2026', valorAluguel: 19000, luvas: 80000, percentualFaturamento: 2.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 61, diasRestantes: 47, status: 'Vencendo' },
    multas: [
      { id: 'MUL-063a', data: '10/05/2024', tipo: 'Atraso no Pagamento', valor: 950, descricao: 'Atraso de 3 dias no pagamento de maio/2024', status: 'Paga' },
      { id: 'MUL-063b', data: '12/09/2024', tipo: 'Atraso no Pagamento', valor: 950, descricao: 'Atraso de 3 dias no pagamento de setembro/2024', status: 'Paga' },
      { id: 'MUL-063c', data: '08/01/2025', tipo: 'Atraso no Pagamento', valor: 950, descricao: 'Atraso de 2 dias no pagamento de janeiro/2025', status: 'Pendente' },
    ],
    propostas: [
      { id: 'PROP-H-019', data: '05/04/2026', tipo: 'Renovação', valor: 20500, status: 'Pendente', observacao: 'Aguardando aprovação interna da operadora' },
      { id: 'PROP-H-020', data: '01/01/2023', tipo: 'Nova Proposta', valor: 19000, status: 'Aceita' },
    ],
  },

  // ──── L2 CORREDOR A — ELETRÔNICOS ────
  {
    id: 'L2-001', nome: 'Fast Shop', cnpj: '61.797.924/0001-67', segmento: 'Eletrônicos',
    responsavel: 'Marcus Ribeiro', email: 'marcus.ribeiro@fastshop.com.br', telefone: '(62) 3600-3344',
    unidade: 'L2-001', piso: 'L2', corredor: 'A', area: 350,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2800000,
    contratoAtivo: { id: 'CTR-2024-101', inicio: '01/06/2024', fim: '31/05/2027', valorAluguel: 75000, luvas: 480000, percentualFaturamento: 2.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 92, diasRestantes: 774, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-021', data: '01/04/2024', tipo: 'Renovação', valor: 75000, status: 'Aceita', observacao: 'Fidelização de lojista âncora' },
    ],
  },
  {
    id: 'L2-002', nome: 'Apple Store', cnpj: '00.015.477/0001-00', segmento: 'Eletrônicos',
    responsavel: 'Jennifer Kim', email: 'jennifer.kim@apple.com', telefone: '(62) 3700-7777',
    unidade: 'L2-002', piso: 'L2', corredor: 'A', area: 280,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 5500000,
    contratoAtivo: { id: 'CTR-2023-102', inicio: '01/09/2023', fim: '31/08/2028', valorAluguel: 150000, luvas: 1200000, percentualFaturamento: 2.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 100, diasRestantes: 1231, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-022', data: '20/06/2023', tipo: 'Nova Proposta', valor: 150000, status: 'Aceita', observacao: 'Negociação estratégica com selo de loja certificada Apple' },
    ],
  },
  {
    id: 'L2-003', nome: 'Samsung Experience', cnpj: '17.901.255/0001-49', segmento: 'Eletrônicos',
    responsavel: 'Min Jun Park', email: 'minjun.park@samsung.com', telefone: '(62) 3500-5500',
    unidade: 'L2-003', piso: 'L2', corredor: 'A', area: 200,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2200000,
    contratoAtivo: { id: 'CTR-2025-103', inicio: '01/01/2025', fim: '31/12/2027', valorAluguel: 82000, luvas: 500000, percentualFaturamento: 2.8, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 94, diasRestantes: 988, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-023', data: '01/11/2024', tipo: 'Nova Proposta', valor: 82000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-004', nome: 'Magazine Luiza', cnpj: '47.960.950/0001-21', segmento: 'Eletrônicos',
    responsavel: 'Priscila Madureira', email: 'p.madureira@magazineluiza.com.br', telefone: '(62) 3800-1234',
    unidade: 'L2-004', piso: 'L2', corredor: 'A', area: 500,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 3100000,
    contratoAtivo: { id: 'CTR-2022-104', inicio: '01/01/2022', fim: '31/12/2026', valorAluguel: 68000, luvas: 380000, percentualFaturamento: 2.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 80, diasRestantes: 258, status: 'Ativo' },
    multas: [
      { id: 'MUL-104', data: '25/07/2023', tipo: 'Atraso no Pagamento', valor: 3400, descricao: 'Atraso de 5 dias no pagamento de julho/2023', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-024', data: '01/11/2021', tipo: 'Nova Proposta', valor: 68000, status: 'Aceita' },
    ],
  },

  // ──── L2 CORREDOR B — BELEZA / MODA ────
  {
    id: 'L2-031', nome: 'O Boticário', cnpj: '75.659.658/0001-83', segmento: 'Outros',
    responsavel: 'Ana Lima', email: 'ana.lima@boticario.com.br', telefone: '(62) 3233-4455',
    unidade: 'L2-031', piso: 'L2', corredor: 'B', area: 150,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 680000,
    contratoAtivo: { id: 'CTR-2024-131', inicio: '01/03/2024', fim: '28/02/2027', valorAluguel: 34000, luvas: 180000, percentualFaturamento: 4.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 92, diasRestantes: 683, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-025', data: '10/01/2024', tipo: 'Renovação', valor: 34000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-032', nome: 'Natura', cnpj: '71.673.990/0001-77', segmento: 'Outros',
    responsavel: 'Carla Soares', email: 'carla.soares@natura.net', telefone: '(62) 3301-4488',
    unidade: 'L2-032', piso: 'L2', corredor: 'B', area: 140,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 620000,
    contratoAtivo: { id: 'CTR-2025-132', inicio: '01/06/2025', fim: '31/05/2028', valorAluguel: 31000, luvas: 160000, percentualFaturamento: 4.2, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 90, diasRestantes: 1140, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-026', data: '01/04/2025', tipo: 'Renovação', valor: 31000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-033', nome: 'Starbucks Reserve', cnpj: '08.164.083/0001-48', segmento: 'Alimentação',
    responsavel: 'Rodrigo Campos', email: 'r.campos@starbucks.com.br', telefone: '(62) 3441-2200',
    unidade: 'L2-033', piso: 'L2', corredor: 'B', area: 200,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1100000,
    contratoAtivo: { id: 'CTR-2024-133', inicio: '01/09/2024', fim: '31/08/2027', valorAluguel: 45000, luvas: 280000, percentualFaturamento: 5.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 95, diasRestantes: 866, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-027', data: '10/04/2026', tipo: 'Readequação', valor: 48000, status: 'Em Negociação', observacao: 'Proposta de aumento de área com novo contrato' },
      { id: 'PROP-H-028', data: '01/07/2024', tipo: 'Nova Proposta', valor: 45000, status: 'Aceita', observacao: 'Primeiro Starbucks Reserve de Goiânia' },
    ],
  },
  {
    id: 'L2-034', nome: 'Uniqlo', cnpj: '32.521.444/0001-39', segmento: 'Moda',
    responsavel: 'Yuki Tanaka', email: 'y.tanaka@uniqlo.com', telefone: '(62) 3600-4400',
    unidade: 'L2-034', piso: 'L2', corredor: 'B', area: 600,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2800000,
    contratoAtivo: { id: 'CTR-2025-134', inicio: '01/03/2025', fim: '28/02/2030', valorAluguel: 110000, luvas: 800000, percentualFaturamento: 3.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 97, diasRestantes: 1777, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-029', data: '01/12/2024', tipo: 'Nova Proposta', valor: 110000, status: 'Aceita', observacao: 'Primeira loja em Goiânia — exclusividade por 5 anos' },
    ],
  },

  // ──── L2 CORREDOR C — SERVIÇOS / ENTRETENIMENTO ────
  {
    id: 'L2-061', nome: 'Smart Fit', cnpj: '21.386.077/0001-27', segmento: 'Serviços',
    responsavel: 'Felipe Gomes', email: 'felipe.gomes@smartfit.com.br', telefone: '(62) 3800-9900',
    unidade: 'L2-061', piso: 'L2', corredor: 'C', area: 800,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 580000,
    contratoAtivo: { id: 'CTR-2023-161', inicio: '01/06/2023', fim: '31/05/2028', valorAluguel: 48000, luvas: 300000, percentualFaturamento: 0, indiceReajuste: 'IGPM', tipo: 'Aluguel Fixo', desempenho: 88, diasRestantes: 1140, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-030', data: '01/04/2023', tipo: 'Nova Proposta', valor: 48000, status: 'Aceita', observacao: 'Contrato longo prazo 5 anos com reajuste anual IGPM' },
    ],
  },
  {
    id: 'L2-063', nome: 'Cinemark', cnpj: '62.578.458/0001-60', segmento: 'Entretenimento',
    responsavel: 'Sandra Almeida', email: 's.almeida@cinemark.com.br', telefone: '(62) 3900-1100',
    unidade: 'L2-063', piso: 'L2', corredor: 'C', area: 2500,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 4200000,
    contratoAtivo: { id: 'CTR-2019-163', inicio: '01/01/2019', fim: '31/12/2028', valorAluguel: 180000, luvas: 2000000, percentualFaturamento: 2.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 96, diasRestantes: 1719, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-031', data: '01/10/2018', tipo: 'Nova Proposta', valor: 180000, status: 'Aceita', observacao: 'Contrato âncora de entretenimento 10 anos' },
    ],
  },

  // ──── L3 CORREDOR A — PRAÇA DE ALIMENTAÇÃO ────
  {
    id: 'L3-001', nome: "McDonald's", cnpj: '47.079.633/0001-01', segmento: 'Alimentação',
    responsavel: 'Renata Freitas', email: 'renata.freitas@mcdonalds.com.br', telefone: '(62) 3312-5500',
    unidade: 'L3-001', piso: 'L3', corredor: 'A', area: 320,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2900000,
    contratoAtivo: { id: 'CTR-2022-201', inicio: '01/04/2022', fim: '31/03/2027', valorAluguel: 90000, luvas: 600000, percentualFaturamento: 3.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 99, diasRestantes: 349, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-032', data: '01/02/2022', tipo: 'Renovação', valor: 90000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-002', nome: 'Outback Steakhouse', cnpj: '15.110.258/0001-45', segmento: 'Alimentação',
    responsavel: 'George Mitchell', email: 'george.mitchell@outback.com.br', telefone: '(62) 3500-2200',
    unidade: 'L3-002', piso: 'L3', corredor: 'A', area: 400,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 3500000,
    contratoAtivo: { id: 'CTR-2024-202', inicio: '01/08/2024', fim: '31/07/2027', valorAluguel: 105000, luvas: 700000, percentualFaturamento: 3.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 97, diasRestantes: 835, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-033', data: '01/06/2024', tipo: 'Renovação', valor: 105000, status: 'Aceita', observacao: 'Expansão de área de 350 para 400m²' },
      { id: 'PROP-H-034', data: '15/04/2026', tipo: 'Readequação', valor: 115000, status: 'Em Negociação', observacao: 'Proposta de nova expansão + reforma da cozinha' },
    ],
  },
  {
    id: 'L3-003', nome: 'Subway', cnpj: '11.080.473/0001-35', segmento: 'Alimentação',
    responsavel: 'Carlos Junior', email: 'carlosjr@subway.com.br', telefone: '(62) 3212-8899',
    unidade: 'L3-003', piso: 'L3', corredor: 'A', area: 120,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 480000,
    contratoAtivo: { id: 'CTR-2024-203', inicio: '01/01/2024', fim: '31/12/2026', valorAluguel: 22000, luvas: 110000, percentualFaturamento: 5.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 74, diasRestantes: 258, status: 'Ativo' },
    multas: [
      { id: 'MUL-203', data: '02/02/2025', tipo: 'Descumprimento de horário', valor: 2000, descricao: 'Funcionamento fora do horário estabelecido sem autorização prévia', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-035', data: '20/11/2023', tipo: 'Nova Proposta', valor: 22000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-004', nome: 'Burger King', cnpj: '13.574.594/0001-96', segmento: 'Alimentação',
    responsavel: 'Marcos Tavares', email: 'marcos.tavares@burgerking.com.br', telefone: '(62) 3444-5566',
    unidade: 'L3-004', piso: 'L3', corredor: 'A', area: 280,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1800000,
    contratoAtivo: { id: 'CTR-2023-204', inicio: '01/07/2023', fim: '30/06/2026', valorAluguel: 75000, luvas: 450000, percentualFaturamento: 3.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 91, diasRestantes: 74, status: 'Vencendo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-036', data: '08/04/2026', tipo: 'Renovação', valor: 82000, status: 'Em Negociação', observacao: 'Negociação com pedido de desconto pela inflação do setor' },
      { id: 'PROP-H-037', data: '01/05/2023', tipo: 'Nova Proposta', valor: 75000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-005', nome: 'Fogo de Chão', cnpj: '09.386.049/0001-27', segmento: 'Alimentação',
    responsavel: 'Alessandro Moura', email: 'a.moura@fogodechao.com.br', telefone: '(62) 3600-8800',
    unidade: 'L3-005', piso: 'L3', corredor: 'A', area: 500,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 4800000,
    contratoAtivo: { id: 'CTR-2023-205', inicio: '01/11/2023', fim: '31/10/2028', valorAluguel: 135000, luvas: 950000, percentualFaturamento: 3.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 98, diasRestantes: 1657, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-038', data: '01/09/2023', tipo: 'Nova Proposta', valor: 135000, status: 'Aceita', observacao: 'Âncora premium da praça de alimentação' },
    ],
  },
  {
    id: 'L3-006', nome: "Bob's", cnpj: '14.982.647/0001-52', segmento: 'Alimentação',
    responsavel: 'Samir Couto', email: 'samir.couto@bobs.com.br', telefone: '(62) 3200-9900',
    unidade: 'L3-006', piso: 'L3', corredor: 'A', area: 140,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 560000,
    contratoAtivo: { id: 'CTR-2025-206', inicio: '01/02/2025', fim: '31/01/2028', valorAluguel: 26000, luvas: 130000, percentualFaturamento: 4.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 78, diasRestantes: 1020, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-039', data: '01/12/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-007', nome: 'Giraffas', cnpj: '52.148.007/0001-73', segmento: 'Alimentação',
    responsavel: 'Vanessa Rezende', email: 'v.rezende@giraffas.com.br', telefone: '(62) 3400-7711',
    unidade: 'L3-007', piso: 'L3', corredor: 'A', area: 160,
    status: 'Ocupado', statusRelacionamento: 'Regular', faturamentoMedio: 490000,
    contratoAtivo: { id: 'CTR-2023-207', inicio: '01/04/2023', fim: '31/03/2026', valorAluguel: 20000, luvas: 90000, percentualFaturamento: 4.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 65, diasRestantes: 349, status: 'Ativo' },
    multas: [
      { id: 'MUL-207a', data: '15/07/2024', tipo: 'Atraso no Pagamento', valor: 1000, descricao: 'Atraso de 5 dias no pagamento de julho/2024', status: 'Paga' },
      { id: 'MUL-207b', data: '14/10/2024', tipo: 'Irregularidade sanitária', valor: 5000, descricao: 'Notificação da Vigilância Sanitária repercutida no mall', status: 'Contestada' },
    ],
    propostas: [
      { id: 'PROP-H-040', data: '01/02/2023', tipo: 'Nova Proposta', valor: 20000, status: 'Aceita' },
    ],
  },

  // ──── L3 CORREDOR B — ALIMENTAÇÃO / VARIEDADES ────
  {
    id: 'L3-028', nome: 'Pizza Hut', cnpj: '10.490.715/0001-01', segmento: 'Alimentação',
    responsavel: 'Paulo Mendes', email: 'paulo.mendes@pizzahut.com.br', telefone: '(62) 3512-9900',
    unidade: 'L3-028', piso: 'L3', corredor: 'B', area: 200,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 820000,
    contratoAtivo: { id: 'CTR-2024-228', inicio: '01/05/2024', fim: '30/04/2027', valorAluguel: 38000, luvas: 200000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 77, diasRestantes: 743, status: 'Ativo' },
    multas: [
      { id: 'MUL-228', data: '20/11/2024', tipo: 'Atraso no Pagamento', valor: 1900, descricao: 'Atraso de 5 dias novembro/2024', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-041', data: '01/03/2024', tipo: 'Nova Proposta', valor: 38000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-029', nome: 'KFC', cnpj: '17.311.723/0001-92', segmento: 'Alimentação',
    responsavel: 'Anderson Rocha', email: 'anderson.rocha@kfc.com.br', telefone: '(62) 3312-4455',
    unidade: 'L3-029', piso: 'L3', corredor: 'B', area: 180,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 750000,
    contratoAtivo: { id: 'CTR-2025-229', inicio: '01/01/2025', fim: '31/12/2027', valorAluguel: 35000, luvas: 180000, percentualFaturamento: 4.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 82, diasRestantes: 988, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-042', data: '01/11/2024', tipo: 'Nova Proposta', valor: 35000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-030', nome: 'Spoleto', cnpj: '05.351.939/0001-18', segmento: 'Alimentação',
    responsavel: 'Rita Cardoso', email: 'rita.cardoso@spoleto.com.br', telefone: '(62) 3400-5544',
    unidade: 'L3-030', piso: 'L3', corredor: 'B', area: 130,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 540000,
    contratoAtivo: { id: 'CTR-2024-230', inicio: '01/07/2024', fim: '30/06/2027', valorAluguel: 24000, luvas: 120000, percentualFaturamento: 4.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 80, diasRestantes: 804, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-043', data: '01/05/2024', tipo: 'Renovação', valor: 24000, status: 'Aceita' },
    ],
  },

  // ──── L3 CORREDOR C — VAREJO DIVERSO ────
  {
    id: 'L3-055', nome: 'Tok&Stok', cnpj: '07.620.072/0001-61', segmento: 'Outros',
    responsavel: 'Isabella Ferreira', email: 'isabella.ferreira@tokstok.com.br', telefone: '(62) 3600-7766',
    unidade: 'L3-055', piso: 'L3', corredor: 'C', area: 400,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 980000,
    contratoAtivo: { id: 'CTR-2024-255', inicio: '01/04/2024', fim: '31/03/2027', valorAluguel: 42000, luvas: 230000, percentualFaturamento: 3.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 81, diasRestantes: 714, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-044', data: '01/02/2024', tipo: 'Nova Proposta', valor: 42000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-056', nome: 'Livraria Cultura', cnpj: '60.665.981/0001-93', segmento: 'Outros',
    responsavel: 'Eduardo Braga', email: 'e.braga@livrariacultura.com.br', telefone: '(62) 3301-9988',
    unidade: 'L3-056', piso: 'L3', corredor: 'C', area: 350,
    status: 'Ocupado', statusRelacionamento: 'Regular', faturamentoMedio: 620000,
    contratoAtivo: { id: 'CTR-2022-256', inicio: '01/06/2022', fim: '31/05/2026', valorAluguel: 28000, luvas: 150000, percentualFaturamento: 3.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 62, diasRestantes: 44, status: 'Vencendo' },
    multas: [
      { id: 'MUL-256', data: '05/04/2025', tipo: 'Atraso no Pagamento', valor: 1400, descricao: 'Atraso de 5 dias em abril/2025', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-045', data: '05/04/2026', tipo: 'Renovação', valor: 29000, status: 'Pendente', observacao: 'Aguardando definição interna sobre fechamento de filiais' },
      { id: 'PROP-H-046', data: '01/04/2022', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-057', nome: 'CVC Viagens', cnpj: '10.760.260/0001-19', segmento: 'Serviços',
    responsavel: 'Tatiane Moreira', email: 'tatiane.moreira@cvc.com.br', telefone: '(62) 3312-3344',
    unidade: 'L3-057', piso: 'L3', corredor: 'C', area: 80,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 350000,
    contratoAtivo: { id: 'CTR-2025-257', inicio: '01/03/2025', fim: '28/02/2028', valorAluguel: 16000, luvas: 75000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 75, diasRestantes: 1047, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-047', data: '01/01/2025', tipo: 'Renovação', valor: 16000, status: 'Aceita' },
    ],
  },

  // UNIDADES DISPONÍVEIS
  {
    id: 'L1-023', nome: '', cnpj: '', segmento: 'Moda', responsavel: '', email: '', telefone: '',
    unidade: 'L1-023', piso: 'L1', corredor: 'A', area: 85,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L1-047', nome: '', cnpj: '', segmento: 'Esportes', responsavel: '', email: '', telefone: '',
    unidade: 'L1-047', piso: 'L1', corredor: 'B', area: 120,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L1-068', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'L1-068', piso: 'L1', corredor: 'C', area: 70,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L2-015', nome: '', cnpj: '', segmento: 'Eletrônicos', responsavel: '', email: '', telefone: '',
    unidade: 'L2-015', piso: 'L2', corredor: 'A', area: 100,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L2-039', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'L2-039', piso: 'L2', corredor: 'B', area: 90,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L2-062', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'L2-062', piso: 'L2', corredor: 'C', area: 95,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-008', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-008', piso: 'L3', corredor: 'A', area: 100,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-031', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-031', piso: 'L3', corredor: 'B', area: 90,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-054', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-054', piso: 'L3', corredor: 'B', area: 80,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-072', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'L3-072', piso: 'L3', corredor: 'C', area: 85,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
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

function generateStore(piso: 'L1' | 'L2' | 'L3', corredor: 'A' | 'B' | 'C', num: number, seed: number): Lojista {
  const r = (offset = 0) => seededRandom(seed * 17 + offset);
  const seg: Segmento = piso === 'L3' ? 'Alimentação' : segmentos[Math.floor(r(1) * segmentos.length)];
  const brands = brandsBySegment[seg] || brandsBySegment['Outros'];
  const nome = brands[Math.floor(r(2) * brands.length)];
  const area = Math.floor(r(3) * 300) + 60;
  const aluguel = Math.floor((area * (r(4) * 150 + 100)) / 100) * 100;
  const fatur = aluguel * (Math.floor(r(5) * 15) + 5);
  const desempenho = Math.floor(r(6) * 35) + 60;
  const statusRel: StatusRelacionamento = desempenho >= 90 ? 'Excelente' : desempenho >= 75 ? 'Bom' : desempenho >= 60 ? 'Regular' : 'Crítico';
  const daysLeft = Math.floor(r(7) * 900) + 30;
  const contratoStatus: StatusContrato = daysLeft < 90 ? 'Vencendo' : 'Ativo';
  const resp = responsaveis[Math.floor(r(8) * responsaveis.length)];
  const unitStr = `${piso}-${String(num).padStart(3, '0')}`;
  const cnpjNum = Math.floor(r(9) * 99999999) + 10000000;

  const multas: Multa[] = r(10) > 0.7 ? [{
    id: `MUL-GEN-${seed}`,
    data: '10/03/2024',
    tipo: 'Atraso no Pagamento',
    valor: Math.floor(r(11) * 3000) + 500,
    descricao: 'Atraso no pagamento mensal',
    status: r(12) > 0.5 ? 'Paga' : 'Pendente',
  }] : [];

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
    status: 'Ocupado',
    statusRelacionamento: statusRel,
    faturamentoMedio: fatur,
    contratoAtivo: {
      id: `CTR-GEN-${seed}`,
      inicio: '01/01/2024',
      fim: '31/12/2026',
      valorAluguel: aluguel,
      luvas: aluguel * 3,
      percentualFaturamento: parseFloat((r(16) * 3 + 2).toFixed(1)),
      indiceReajuste: r(17) > 0.5 ? 'IGPM' : 'IPCA',
      tipo: 'Aluguel + Percentual',
      desempenho,
      diasRestantes: daysLeft,
      status: contratoStatus,
    },
    multas,
    propostas: [{
      id: `PROP-GEN-${seed}`,
      data: '01/01/2024',
      tipo: 'Nova Proposta',
      valor: aluguel,
      status: 'Aceita',
    }],
  };
}

// ============================================================
// MONTAR BANCO COMPLETO DE 260 UNIDADES
// ============================================================
const keyIds = new Set(keyStores.map(s => s.id));

function buildFloor(piso: 'L1' | 'L2' | 'L3', totalUnits: number): Lojista[] {
  const stores: Lojista[] = [];
  for (let i = 1; i <= totalUnits; i++) {
    const corredor: 'A' | 'B' | 'C' = i <= Math.floor(totalUnits / 3) ? 'A' : i <= Math.floor((totalUnits * 2) / 3) ? 'B' : 'C';
    const unitStr = `${piso}-${String(i).padStart(3, '0')}`;
    if (!keyIds.has(unitStr)) {
      const seedBase = (piso === 'L1' ? 1000 : piso === 'L2' ? 2000 : 3000) + i;
      stores.push(generateStore(piso, corredor, i, seedBase));
    }
  }
  return stores;
}

const generatedStores = [
  ...buildFloor('L1', 90),
  ...buildFloor('L2', 90),
  ...buildFloor('L3', 80),
];

export const allLojistas: Lojista[] = [...keyStores, ...generatedStores].sort((a, b) =>
  a.unidade.localeCompare(b.unidade)
);

// ============================================================
// PROPOSTAS ATIVAS (para aba Propostas)
// ============================================================
export const propostasAtivas: Proposta[] = [
  { id: 'PROP-2026-001', lojistaId: 'L1-002', lojista: 'C&A', unidade: 'L1-002', segmento: 'Moda', tipo: 'Renovação', valorProposto: 66000, area: 700, status: 'Em Negociação', responsavel: 'Gerência Comercial', dataCriacao: '10/04/2026', dataVencimento: '30/05/2026', observacoes: 'Proposta de renovação com reajuste de 8% sobre IPCA. Lojista solicita menor percentual de faturamento.' },
  { id: 'PROP-2026-002', lojistaId: undefined, lojista: 'Zara Home (Novo)', unidade: 'L2-039', segmento: 'Outros', tipo: 'Nova Instalação', valorProposto: 38000, area: 90, status: 'Em Análise', responsavel: 'Gerência Comercial', dataCriacao: '08/04/2026', dataVencimento: '15/05/2026', observacoes: 'Grupo Inditex propõe inaugurar Zara Home na unidade disponível L2-039.' },
  { id: 'PROP-2026-003', lojistaId: 'L3-004', lojista: 'Burger King', unidade: 'L3-004', segmento: 'Alimentação', tipo: 'Renovação', valorProposto: 82000, area: 280, status: 'Em Negociação', responsavel: 'Gerência Comercial', dataCriacao: '08/04/2026', dataVencimento: '05/06/2026', observacoes: 'BK solicita desconto de 5% alegando retração do setor de fast food.' },
  { id: 'PROP-2026-004', lojistaId: undefined, lojista: 'Espaço Gourmet Premium', unidade: 'L3-008', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 45000, area: 100, status: 'Pendente', responsavel: 'Gerência Comercial', dataCriacao: '07/04/2026', dataVencimento: '22/05/2026', observacoes: 'Novo conceito de restaurante premium. Aguardando documentação do licitante.' },
  { id: 'PROP-2026-005', lojistaId: 'L2-033', lojista: 'Starbucks Reserve', unidade: 'L2-033', segmento: 'Alimentação', tipo: 'Readequação', valorProposto: 48000, area: 220, status: 'Em Negociação', responsavel: 'Gerência Comercial', dataCriacao: '05/04/2026', dataVencimento: '25/05/2026', observacoes: 'Proposta de expansão de 200 para 220m² com novo layout de balcão.' },
  { id: 'PROP-2026-006', lojistaId: undefined, lojista: 'Tech World', unidade: 'L2-015', segmento: 'Eletrônicos', tipo: 'Nova Instalação', valorProposto: 52000, area: 100, status: 'Em Análise', responsavel: 'Gerência Comercial', dataCriacao: '04/04/2026', dataVencimento: '20/05/2026', observacoes: 'Franquia nacional de acessórios e dispositivos tech.' },
  { id: 'PROP-2026-007', lojistaId: 'L1-007', lojista: 'Chilli Beans', unidade: 'L1-007', segmento: 'Moda', tipo: 'Renovação', valorProposto: 20000, area: 80, status: 'Em Negociação', responsavel: 'Gerência Comercial', dataCriacao: '01/04/2026', dataVencimento: '15/05/2026', observacoes: 'Reajuste de 11% proposto. Lojista contrapropôs 7%.' },
  { id: 'PROP-2026-008', lojistaId: undefined, lojista: 'Academia Forma Perfeita', unidade: 'L2-062', segmento: 'Serviços', tipo: 'Nova Instalação', valorProposto: 35000, area: 95, status: 'Pendente', responsavel: 'Gerência Comercial', dataCriacao: '01/04/2026', dataVencimento: '10/05/2026', observacoes: 'Proposta de academia boutique para complementar Smart Fit.' },
  { id: 'PROP-2026-009', lojistaId: 'L1-061', lojista: 'Bradesco', unidade: 'L1-061', segmento: 'Serviços', tipo: 'Renovação', valorProposto: 31000, area: 120, status: 'Em Análise', responsavel: 'Gerência Comercial', dataCriacao: '02/04/2026', dataVencimento: '20/05/2026', observacoes: 'Banco pede 30 dias para análise interna.' },
  { id: 'PROP-2026-010', lojistaId: 'L3-056', lojista: 'Livraria Cultura', unidade: 'L3-056', segmento: 'Outros', tipo: 'Renovação', valorProposto: 29000, area: 350, status: 'Pendente', responsavel: 'Gerência Comercial', dataCriacao: '30/03/2026', dataVencimento: '10/05/2026', observacoes: 'Lojista avalia fechamento de unidades. Decisão pendente.' },
  { id: 'PROP-2026-011', lojistaId: undefined, lojista: 'Studio Z', unidade: 'L1-023', segmento: 'Moda', tipo: 'Nova Instalação', valorProposto: 24000, area: 85, status: 'Em Análise', responsavel: 'Gerência Comercial', dataCriacao: '28/03/2026', dataVencimento: '12/05/2026', observacoes: 'Rede jovem de moda street wear.' },
  { id: 'PROP-2026-012', lojistaId: undefined, lojista: 'Healthy Bowl', unidade: 'L3-031', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 28000, area: 90, status: 'Aceita', responsavel: 'Gerência Comercial', dataCriacao: '20/03/2026', dataVencimento: '20/04/2026', observacoes: 'Aceite confirmado. Obras autorizadas para início em 25/04.' },
  { id: 'PROP-2026-013', lojistaId: 'L1-063', lojista: 'Claro', unidade: 'L1-063', segmento: 'Serviços', tipo: 'Renovação', valorProposto: 20500, area: 70, status: 'Pendente', responsavel: 'Gerência Comercial', dataCriacao: '15/03/2026', dataVencimento: '01/05/2026', observacoes: 'Aguardando retorno da operadora após envio de proposta.' },
  { id: 'PROP-2026-014', lojistaId: undefined, lojista: 'Grão Expresso', unidade: 'L3-054', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 22000, area: 80, status: 'Aceita', responsavel: 'Gerência Comercial', dataCriacao: '10/03/2026', dataVencimento: '10/04/2026', observacoes: 'Cafeteria artesanal. Contrato assinado em 15/03.' },
  { id: 'PROP-2026-015', lojistaId: 'L3-002', lojista: 'Outback Steakhouse', unidade: 'L3-002', segmento: 'Alimentação', tipo: 'Readequação', valorProposto: 115000, area: 420, status: 'Em Negociação', responsavel: 'Gerência Comercial', dataCriacao: '15/04/2026', dataVencimento: '15/05/2026', observacoes: 'Proposta de expansão para 420m² incluindo nova cozinha industrial.' },
  { id: 'PROP-2026-016', lojistaId: undefined, lojista: 'Havaianas Flagship', unidade: 'L1-047', segmento: 'Moda', tipo: 'Nova Instalação', valorProposto: 32000, area: 120, status: 'Em Análise', responsavel: 'Gerência Comercial', dataCriacao: '12/04/2026', dataVencimento: '25/05/2026', observacoes: 'Proposta de loja flagship premium. Havaianas avaliando layout.' },
  { id: 'PROP-2026-017', lojistaId: undefined, lojista: 'Mundo Digital', unidade: 'L3-072', segmento: 'Outros', tipo: 'Nova Instalação', valorProposto: 18000, area: 85, status: 'Recusada', responsavel: 'Gerência Comercial', dataCriacao: '01/03/2026', dataVencimento: '01/04/2026', observacoes: 'Perfil comercial inadequado para o posicionamento do mall.' },
  { id: 'PROP-2026-018', lojistaId: 'L1-002', lojista: 'C&A (Readequação)', unidade: 'L1-002', segmento: 'Moda', tipo: 'Readequação', valorProposto: 58000, area: 600, status: 'Expirada', responsavel: 'Gerência Comercial', dataCriacao: '01/01/2026', dataVencimento: '01/03/2026', observacoes: 'Proposta de redução de área não aceita dentro do prazo.' },
];

// ============================================================
// HELPERS
// ============================================================
export const TOTAL_UNIDADES = 260;
export const UNIDADES_OCUPADAS = allLojistas.filter(l => l.status === 'Ocupado').length;
export const UNIDADES_DISPONIVEIS = allLojistas.filter(l => l.status === 'Disponível').length;
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

export const statusContratoCores: Record<StatusContrato, string> = {
  Ativo: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'Em Renovação': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Vencendo: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Vencido: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

export const statusPropostaCores: Record<StatusProposta, string> = {
  Pendente: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Em Análise': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'Em Negociação': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  Aceita: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Recusada: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  Expirada: 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400',
};

export const statusRelCores: Record<StatusRelacionamento, string> = {
  Excelente: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Bom: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Regular: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  Crítico: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
