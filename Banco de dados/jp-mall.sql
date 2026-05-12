
CREATE TYPE tipo_segmento AS ENUM('Moda','Alimentação','Serviços','Eletrônicos','Esportes','Entretenimento','Outros');
CREATE TYPE tipo_piso AS ENUM('L1','L2','L3');
CREATE TYPE tipo_corredor AS ENUM('A','B','C');
CREATE TYPE tipo_status_lojistas AS ENUM('Ocupado','Disponível');
CREATE TYPE tipo_status_relacionamento AS ENUM('Excelente','Bom','Regular','Crítico');
CREATE TYPE tipo_indice_reajuste AS ENUM('IGPM','IPCA');
CREATE TYPE tipo_tipo_contratos AS ENUM('Aluguel Fixo','Aluguel + Percentual','Só Percentual');
CREATE TYPE tipo_status_contratos AS ENUM('Ativo','Em Renovação','Vencendo','Vencido');
CREATE TYPE tipo_status_multas AS ENUM('Paga','Pendente','Contestada');
CREATE TYPE tipo_tipo_propostas_historico AS ENUM('Nova Proposta','Renovação','Readequação');
CREATE TYPE tipo_status_propostas AS ENUM('Pendente','Em Análise','Em Negociação','Aceita','Recusada','Expirada');
CREATE TYPE tipo_tipo_propostas AS ENUM('Nova Instalação','Renovação','Readequação');
CREATE TYPE tipo_severidade AS ENUM('Baixa','Média','Alta');
CREATE TYPE tipo_status_sinistros AS ENUM('Aberto','Aguardando Regulador','Em Análise','Aprovado','Pago');

-- ------------------------------------------------------------
-- Tabela: lojistas
-- Fonte: comercialData.ts → keyStores + unidades disponíveis
-- ------------------------------------------------------------
CREATE TABLE lojistas (
  id               VARCHAR(10)  NOT NULL,
  nome             VARCHAR(100),
  cnpj             VARCHAR(20),
  segmento         tipo_segmento NOT NULL,
  responsavel      VARCHAR(100),
  email            VARCHAR(150),
  telefone         VARCHAR(20),
  unidade          VARCHAR(10)  NOT NULL,
  piso             tipo_piso NOT NULL,
  corredor         tipo_corredor NOT NULL,
  area_m2          INT          NOT NULL,
  status           tipo_status_lojistas NOT NULL DEFAULT 'Disponível'::tipo_status_lojistas,
  status_relacionamento tipo_status_relacionamento,
  faturamento_medio BIGINT      NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO lojistas VALUES
  ('L1-001', 'Renner', '92.754.738/0001-62', 'Moda', 'Marcela Fontana', 'marcela.fontana@renner.com.br', '(62) 3344-5566', 'L1-001', 'L1', 'A', 800, 'Ocupado', 'Excelente', 1850000),
  ('L1-002', 'C&A', '45.242.914/0001-05', 'Moda', 'Roberto Siqueira', 'roberto.siqueira@cea.com.br', '(62) 3210-9988', 'L1-002', 'L1', 'A', 700, 'Ocupado', 'Bom', 1420000),
  ('L1-003', 'Riachuelo', '33.200.056/0001-28', 'Moda', 'Fernanda Leite', 'f.leite@riachuelo.com.br', '(62) 3344-7788', 'L1-003', 'L1', 'A', 650, 'Ocupado', 'Bom', 1280000),
  ('L1-004', 'Zara', '72.700.786/0001-99', 'Moda', 'Ana Paula Rocha', 'ana.rocha@zara.com.br', '(62) 3512-3344', 'L1-004', 'L1', 'A', 450, 'Ocupado', 'Excelente', 2100000),
  ('L1-005', 'H&M', '23.613.404/0001-58', 'Moda', 'Carlos Matos', 'c.matos@hm.com', '(62) 3212-1100', 'L1-005', 'L1', 'A', 500, 'Ocupado', 'Excelente', 1950000),
  ('L1-006', 'Arezzo', '16.590.234/0001-76', 'Moda', 'Beatriz Cardoso', 'beatriz.c@arezzo.com.br', '(62) 3321-5544', 'L1-006', 'L1', 'A', 180, 'Ocupado', 'Excelente', 780000),
  ('L1-007', 'Chilli Beans', '04.392.000/0001-22', 'Moda', 'Thiago Assunção', 'thiago.a@chillibeans.com.br', '(62) 3301-2200', 'L1-007', 'L1', 'A', 80, 'Ocupado', 'Bom', 390000),
  ('L1-008', 'Farm', '03.799.255/0001-81', 'Moda', 'Juliana Prado', 'j.prado@farm.com.br', '(62) 3456-7890', 'L1-008', 'L1', 'A', 190, 'Ocupado', 'Excelente', 920000),
  ('L1-031', 'Decathlon', '03.471.761/0001-68', 'Esportes', 'Pierre Dubois', 'pierre.dubois@decathlon.com.br', '(62) 3600-1200', 'L1-031', 'L1', 'B', 1200, 'Ocupado', 'Excelente', 3200000),
  ('L1-032', 'Centauro', '42.830.506/0001-65', 'Esportes', 'Márcio Silveira', 'm.silveira@centauro.com.br', '(62) 3412-3344', 'L1-032', 'L1', 'B', 400, 'Ocupado', 'Excelente', 1350000),
  ('L1-033', 'Nike Store', '56.998.476/0001-10', 'Esportes', 'Lucas Andrade', 'lucas.a@nike.com', '(62) 3400-1122', 'L1-033', 'L1', 'B', 250, 'Ocupado', 'Excelente', 1100000),
  ('L1-034', 'Adidas', '61.088.094/0001-57', 'Esportes', 'Claudia Becker', 'claudia.b@adidas.com', '(62) 3501-4455', 'L1-034', 'L1', 'B', 230, 'Ocupado', 'Bom', 890000),
  ('L1-061', 'Bradesco', '60.746.948/0001-12', 'Serviços', 'Rafael Monteiro', 'rafael.monteiro@bradesco.com.br', '(62) 3100-5000', 'L1-061', 'L1', 'C', 120, 'Ocupado', 'Excelente', 0),
  ('L1-062', 'Itaú Uniclass', '60.872.504/0001-23', 'Serviços', 'Vanessa Torres', 'vanessa.torres@itau.com.br', '(62) 3300-7788', 'L1-062', 'L1', 'C', 100, 'Ocupado', 'Excelente', 0),
  ('L1-063', 'Claro', '40.432.544/0001-47', 'Serviços', 'Diego Nascimento', 'd.nascimento@claro.com.br', '(62) 3400-2020', 'L1-063', 'L1', 'C', 70, 'Ocupado', 'Regular', 420000),
  ('L2-001', 'Fast Shop', '61.797.924/0001-67', 'Eletrônicos', 'Marcus Ribeiro', 'marcus.ribeiro@fastshop.com.br', '(62) 3600-3344', 'L2-001', 'L2', 'A', 350, 'Ocupado', 'Excelente', 2800000),
  ('L2-002', 'Apple Store', '00.015.477/0001-00', 'Eletrônicos', 'Jennifer Kim', 'jennifer.kim@apple.com', '(62) 3700-7777', 'L2-002', 'L2', 'A', 280, 'Ocupado', 'Excelente', 5500000),
  ('L2-003', 'Samsung Experience', '17.901.255/0001-49', 'Eletrônicos', 'Min Jun Park', 'minjun.park@samsung.com', '(62) 3500-5500', 'L2-003', 'L2', 'A', 200, 'Ocupado', 'Excelente', 2200000),
  ('L2-004', 'Magazine Luiza', '47.960.950/0001-21', 'Eletrônicos', 'Priscila Madureira', 'p.madureira@magazineluiza.com.br', '(62) 3800-1234', 'L2-004', 'L2', 'A', 500, 'Ocupado', 'Bom', 3100000),
  ('L2-031', 'O Boticário', '75.659.658/0001-83', 'Outros', 'Ana Lima', 'ana.lima@boticario.com.br', '(62) 3233-4455', 'L2-031', 'L2', 'B', 150, 'Ocupado', 'Excelente', 680000),
  ('L2-032', 'Natura', '71.673.990/0001-77', 'Outros', 'Carla Soares', 'carla.soares@natura.net', '(62) 3301-4488', 'L2-032', 'L2', 'B', 140, 'Ocupado', 'Excelente', 620000),
  ('L2-033', 'Starbucks Reserve', '08.164.083/0001-48', 'Alimentação', 'Rodrigo Campos', 'r.campos@starbucks.com.br', '(62) 3441-2200', 'L2-033', 'L2', 'B', 200, 'Ocupado', 'Excelente', 1100000),
  ('L2-034', 'Uniqlo', '32.521.444/0001-39', 'Moda', 'Yuki Tanaka', 'y.tanaka@uniqlo.com', '(62) 3600-4400', 'L2-034', 'L2', 'B', 600, 'Ocupado', 'Excelente', 2800000),
  ('L2-061', 'Smart Fit', '21.386.077/0001-27', 'Serviços', 'Felipe Gomes', 'felipe.gomes@smartfit.com.br', '(62) 3800-9900', 'L2-061', 'L2', 'C', 800, 'Ocupado', 'Excelente', 580000),
  ('L2-063', 'Cinemark', '62.578.458/0001-60', 'Entretenimento', 'Sandra Almeida', 's.almeida@cinemark.com.br', '(62) 3900-1100', 'L2-063', 'L2', 'C', 2500, 'Ocupado', 'Excelente', 4200000),
  ('L3-001', 'McDonald''s', '47.079.633/0001-01', 'Alimentação', 'Renata Freitas', 'renata.freitas@mcdonalds.com.br', '(62) 3312-5500', 'L3-001', 'L3', 'A', 320, 'Ocupado', 'Excelente', 2900000),
  ('L3-002', 'Outback Steakhouse', '15.110.258/0001-45', 'Alimentação', 'George Mitchell', 'george.mitchell@outback.com.br', '(62) 3500-2200', 'L3-002', 'L3', 'A', 400, 'Ocupado', 'Excelente', 3500000),
  ('L3-003', 'Subway', '11.080.473/0001-35', 'Alimentação', 'Carlos Junior', 'carlosjr@subway.com.br', '(62) 3212-8899', 'L3-003', 'L3', 'A', 120, 'Ocupado', 'Bom', 480000),
  ('L3-004', 'Burger King', '13.574.594/0001-96', 'Alimentação', 'Marcos Tavares', 'marcos.tavares@burgerking.com.br', '(62) 3444-5566', 'L3-004', 'L3', 'A', 280, 'Ocupado', 'Excelente', 1800000),
  ('L3-005', 'Fogo de Chão', '09.386.049/0001-27', 'Alimentação', 'Alessandro Moura', 'a.moura@fogodechao.com.br', '(62) 3600-8800', 'L3-005', 'L3', 'A', 500, 'Ocupado', 'Excelente', 4800000),
  ('L3-006', 'Bob''s', '14.982.647/0001-52', 'Alimentação', 'Samir Couto', 'samir.couto@bobs.com.br', '(62) 3200-9900', 'L3-006', 'L3', 'A', 140, 'Ocupado', 'Bom', 560000),
  ('L3-007', 'Giraffas', '52.148.007/0001-73', 'Alimentação', 'Vanessa Rezende', 'v.rezende@giraffas.com.br', '(62) 3400-7711', 'L3-007', 'L3', 'A', 160, 'Ocupado', 'Regular', 490000),
  ('L3-028', 'Pizza Hut', '10.490.715/0001-01', 'Alimentação', 'Paulo Mendes', 'paulo.mendes@pizzahut.com.br', '(62) 3512-9900', 'L3-028', 'L3', 'B', 200, 'Ocupado', 'Bom', 820000),
  ('L3-029', 'KFC', '17.311.723/0001-92', 'Alimentação', 'Anderson Rocha', 'anderson.rocha@kfc.com.br', '(62) 3312-4455', 'L3-029', 'L3', 'B', 180, 'Ocupado', 'Bom', 750000),
  ('L3-030', 'Spoleto', '05.351.939/0001-18', 'Alimentação', 'Rita Cardoso', 'rita.cardoso@spoleto.com.br', '(62) 3400-5544', 'L3-030', 'L3', 'B', 130, 'Ocupado', 'Bom', 540000),
  ('L3-055', 'Tok&Stok', '07.620.072/0001-61', 'Outros', 'Isabella Ferreira', 'isabella.ferreira@tokstok.com.br', '(62) 3600-7766', 'L3-055', 'L3', 'C', 400, 'Ocupado', 'Bom', 980000),
  ('L3-056', 'Livraria Cultura', '60.665.981/0001-93', 'Outros', 'Eduardo Braga', 'e.braga@livrariacultura.com.br', '(62) 3301-9988', 'L3-056', 'L3', 'C', 350, 'Ocupado', 'Regular', 620000),
  ('L3-057', 'CVC Viagens', '10.760.260/0001-19', 'Serviços', 'Tatiane Moreira', 'tatiane.moreira@cvc.com.br', '(62) 3312-3344', 'L3-057', 'L3', 'C', 80, 'Ocupado', 'Bom', 350000),
  ('L1-023', NULL, NULL, 'Moda', NULL, NULL, NULL, 'L1-023', 'L1', 'A', 85, 'Disponível', NULL, 0),
  ('L1-047', NULL, NULL, 'Esportes', NULL, NULL, NULL, 'L1-047', 'L1', 'B', 120, 'Disponível', NULL, 0),
  ('L1-068', NULL, NULL, 'Serviços', NULL, NULL, NULL, 'L1-068', 'L1', 'C', 70, 'Disponível', NULL, 0),
  ('L2-015', NULL, NULL, 'Eletrônicos', NULL, NULL, NULL, 'L2-015', 'L2', 'A', 100, 'Disponível', NULL, 0),
  ('L2-039', NULL, NULL, 'Outros', NULL, NULL, NULL, 'L2-039', 'L2', 'B', 90, 'Disponível', NULL, 0),
  ('L2-062', NULL, NULL, 'Serviços', NULL, NULL, NULL, 'L2-062', 'L2', 'C', 95, 'Disponível', NULL, 0),
  ('L3-008', NULL, NULL, 'Alimentação', NULL, NULL, NULL, 'L3-008', 'L3', 'A', 100, 'Disponível', NULL, 0),
  ('L3-031', NULL, NULL, 'Alimentação', NULL, NULL, NULL, 'L3-031', 'L3', 'B', 90, 'Disponível', NULL, 0),
  ('L3-054', NULL, NULL, 'Alimentação', NULL, NULL, NULL, 'L3-054', 'L3', 'B', 80, 'Disponível', NULL, 0),
  ('L3-072', NULL, NULL, 'Outros', NULL, NULL, NULL, 'L3-072', 'L3', 'C', 85, 'Disponível', NULL, 0);

-- ------------------------------------------------------------
-- Tabela: contratos
-- Fonte: comercialData.ts → keyStores[].contratoAtivo
-- ------------------------------------------------------------
CREATE TABLE contratos (
  id                      VARCHAR(20)  NOT NULL,
  lojista_id              VARCHAR(10)  NOT NULL,
  inicio                  DATE         NOT NULL,
  fim                     DATE         NOT NULL,
  valor_aluguel           DECIMAL(12,2) NOT NULL,
  luvas                   DECIMAL(12,2) NOT NULL,
  percentual_faturamento  DECIMAL(5,2) NOT NULL DEFAULT 0,
  indice_reajuste         tipo_indice_reajuste NOT NULL,
  tipo                    tipo_tipo_contratos NOT NULL,
  desempenho              INT          NOT NULL,
  dias_restantes          INT          NOT NULL,
  status                  tipo_status_contratos NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
);

INSERT INTO contratos VALUES
  ('CTR-2024-001', 'L1-001', '2024-03-01', '2027-02-28', 72000, 450000, 3.5, 'IGPM', 'Aluguel + Percentual', 95, 683, 'Ativo'),
  ('CTR-2023-002', 'L1-002', '2023-06-01', '2026-05-31', 61000, 380000, 3.0, 'IPCA', 'Aluguel + Percentual', 82, 44, 'Vencendo'),
  ('CTR-2024-003', 'L1-003', '2024-01-01', '2026-12-31', 55000, 310000, 3.2, 'IGPM', 'Aluguel + Percentual', 79, 258, 'Ativo'),
  ('CTR-2025-004', 'L1-004', '2025-04-01', '2028-03-31', 98000, 620000, 4.0, 'IPCA', 'Aluguel + Percentual', 97, 1079, 'Ativo'),
  ('CTR-2024-005', 'L1-005', '2024-07-01', '2027-06-30', 88000, 550000, 3.8, 'IPCA', 'Aluguel + Percentual', 93, 804, 'Ativo'),
  ('CTR-2023-006', 'L1-006', '2023-09-01', '2026-08-31', 32000, 180000, 4.5, 'IGPM', 'Aluguel + Percentual', 91, 136, 'Ativo'),
  ('CTR-2024-007', 'L1-007', '2024-01-01', '2025-12-31', 18000, 95000, 5.0, 'IPCA', 'Aluguel + Percentual', 76, 258, 'Vencendo'),
  ('CTR-2025-008', 'L1-008', '2025-02-01', '2028-01-31', 41000, 220000, 4.2, 'IGPM', 'Aluguel + Percentual', 89, 1020, 'Ativo'),
  ('CTR-2022-031', 'L1-031', '2022-08-01', '2027-07-31', 95000, 700000, 2.8, 'IGPM', 'Aluguel + Percentual', 98, 1200, 'Ativo'),
  ('CTR-2024-032', 'L1-032', '2024-04-01', '2027-03-31', 52000, 290000, 3.5, 'IPCA', 'Aluguel + Percentual', 90, 714, 'Ativo'),
  ('CTR-2023-033', 'L1-033', '2023-10-01', '2026-09-30', 68000, 420000, 4.0, 'IPCA', 'Aluguel + Percentual', 96, 166, 'Ativo'),
  ('CTR-2024-034', 'L1-034', '2024-05-01', '2027-04-30', 58000, 340000, 3.8, 'IGPM', 'Aluguel + Percentual', 84, 744, 'Ativo'),
  ('CTR-2021-061', 'L1-061', '2021-01-01', '2025-12-31', 28000, 150000, 0, 'IPCA', 'Aluguel Fixo', 99, 258, 'Vencendo'),
  ('CTR-2024-062', 'L1-062', '2024-08-01', '2027-07-31', 26000, 130000, 0, 'IPCA', 'Aluguel Fixo', 100, 835, 'Ativo'),
  ('CTR-2023-063', 'L1-063', '2023-03-01', '2026-02-28', 19000, 80000, 2.0, 'IGPM', 'Aluguel + Percentual', 61, 47, 'Vencendo'),
  ('CTR-2024-101', 'L2-001', '2024-06-01', '2027-05-31', 75000, 480000, 2.5, 'IGPM', 'Aluguel + Percentual', 92, 774, 'Ativo'),
  ('CTR-2023-102', 'L2-002', '2023-09-01', '2028-08-31', 150000, 1200000, 2.0, 'IPCA', 'Aluguel + Percentual', 100, 1231, 'Ativo'),
  ('CTR-2025-103', 'L2-003', '2025-01-01', '2027-12-31', 82000, 500000, 2.8, 'IPCA', 'Aluguel + Percentual', 94, 988, 'Ativo'),
  ('CTR-2022-104', 'L2-004', '2022-01-01', '2026-12-31', 68000, 380000, 2.2, 'IGPM', 'Aluguel + Percentual', 80, 258, 'Ativo'),
  ('CTR-2024-131', 'L2-031', '2024-03-01', '2027-02-28', 34000, 180000, 4.5, 'IGPM', 'Aluguel + Percentual', 92, 683, 'Ativo'),
  ('CTR-2025-132', 'L2-032', '2025-06-01', '2028-05-31', 31000, 160000, 4.2, 'IPCA', 'Aluguel + Percentual', 90, 1140, 'Ativo'),
  ('CTR-2024-133', 'L2-033', '2024-09-01', '2027-08-31', 45000, 280000, 5.0, 'IGPM', 'Aluguel + Percentual', 95, 866, 'Ativo'),
  ('CTR-2025-134', 'L2-034', '2025-03-01', '2030-02-28', 110000, 800000, 3.5, 'IPCA', 'Aluguel + Percentual', 97, 1777, 'Ativo'),
  ('CTR-2023-161', 'L2-061', '2023-06-01', '2028-05-31', 48000, 300000, 0, 'IGPM', 'Aluguel Fixo', 88, 1140, 'Ativo'),
  ('CTR-2019-163', 'L2-063', '2019-01-01', '2028-12-31', 180000, 2000000, 2.0, 'IGPM', 'Aluguel + Percentual', 96, 1719, 'Ativo'),
  ('CTR-2022-201', 'L3-001', '2022-04-01', '2027-03-31', 90000, 600000, 3.0, 'IGPM', 'Aluguel + Percentual', 99, 349, 'Ativo'),
  ('CTR-2024-202', 'L3-002', '2024-08-01', '2027-07-31', 105000, 700000, 3.5, 'IGPM', 'Aluguel + Percentual', 97, 835, 'Ativo'),
  ('CTR-2024-203', 'L3-003', '2024-01-01', '2026-12-31', 22000, 110000, 5.0, 'IPCA', 'Aluguel + Percentual', 74, 258, 'Ativo'),
  ('CTR-2023-204', 'L3-004', '2023-07-01', '2026-06-30', 75000, 450000, 3.2, 'IGPM', 'Aluguel + Percentual', 91, 74, 'Vencendo'),
  ('CTR-2023-205', 'L3-005', '2023-11-01', '2028-10-31', 135000, 950000, 3.0, 'IGPM', 'Aluguel + Percentual', 98, 1657, 'Ativo'),
  ('CTR-2025-206', 'L3-006', '2025-02-01', '2028-01-31', 26000, 130000, 4.5, 'IPCA', 'Aluguel + Percentual', 78, 1020, 'Ativo'),
  ('CTR-2023-207', 'L3-007', '2023-04-01', '2026-03-31', 20000, 90000, 4.0, 'IGPM', 'Aluguel + Percentual', 65, 349, 'Ativo'),
  ('CTR-2024-228', 'L3-028', '2024-05-01', '2027-04-30', 38000, 200000, 4.0, 'IPCA', 'Aluguel + Percentual', 77, 743, 'Ativo'),
  ('CTR-2025-229', 'L3-029', '2025-01-01', '2027-12-31', 35000, 180000, 4.2, 'IGPM', 'Aluguel + Percentual', 82, 988, 'Ativo'),
  ('CTR-2024-230', 'L3-030', '2024-07-01', '2027-06-30', 24000, 120000, 4.5, 'IPCA', 'Aluguel + Percentual', 80, 804, 'Ativo'),
  ('CTR-2024-255', 'L3-055', '2024-04-01', '2027-03-31', 42000, 230000, 3.0, 'IGPM', 'Aluguel + Percentual', 81, 714, 'Ativo'),
  ('CTR-2022-256', 'L3-056', '2022-06-01', '2026-05-31', 28000, 150000, 3.5, 'IPCA', 'Aluguel + Percentual', 62, 44, 'Vencendo'),
  ('CTR-2025-257', 'L3-057', '2025-03-01', '2028-02-28', 16000, 75000, 4.0, 'IPCA', 'Aluguel + Percentual', 75, 1047, 'Ativo');

-- ------------------------------------------------------------
-- Tabela: multas
-- Fonte: comercialData.ts → keyStores[].multas
-- ------------------------------------------------------------
CREATE TABLE multas (
  id          VARCHAR(15)  NOT NULL,
  lojista_id  VARCHAR(10)  NOT NULL,
  data        DATE         NOT NULL,
  tipo        VARCHAR(80)  NOT NULL,
  valor       DECIMAL(10,2) NOT NULL,
  descricao   TEXT         NOT NULL,
  status      tipo_status_multas NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
);

INSERT INTO multas VALUES
  ('MUL-001', 'L1-001', '2024-08-15', 'Atraso no Pagamento', 3600, 'Atraso de 5 dias no pagamento de aluguel ago/2024', 'Paga'),
  ('MUL-002', 'L1-002', '2023-11-10', 'Uso indevido de área comum', 5000, 'Uso de corredor externo para exposição sem autorização', 'Paga'),
  ('MUL-003', 'L1-002', '2024-03-18', 'Atraso no Pagamento', 3050, 'Atraso de 4 dias no pagamento de março/2024', 'Paga'),
  ('MUL-007', 'L1-007', '2024-06-20', 'Fachada fora do padrão', 2500, 'Outdoor não aprovado pelo mall instalado na fachada', 'Paga'),
  ('MUL-034', 'L1-034', '2024-09-12', 'Obras sem aprovação', 8000, 'Remodelação da fachada sem autorização prévia do mall', 'Contestada'),
  ('MUL-063a', 'L1-063', '2024-05-10', 'Atraso no Pagamento', 950, 'Atraso de 3 dias no pagamento de maio/2024', 'Paga'),
  ('MUL-063b', 'L1-063', '2024-09-12', 'Atraso no Pagamento', 950, 'Atraso de 3 dias no pagamento de setembro/2024', 'Paga'),
  ('MUL-063c', 'L1-063', '2025-01-08', 'Atraso no Pagamento', 950, 'Atraso de 2 dias no pagamento de janeiro/2025', 'Pendente'),
  ('MUL-104', 'L2-004', '2023-07-25', 'Atraso no Pagamento', 3400, 'Atraso de 5 dias no pagamento de julho/2023', 'Paga'),
  ('MUL-203', 'L3-003', '2025-02-02', 'Descumprimento de horário', 2000, 'Funcionamento fora do horário estabelecido sem autorização prévia', 'Paga'),
  ('MUL-207a', 'L3-007', '2024-07-15', 'Atraso no Pagamento', 1000, 'Atraso de 5 dias no pagamento de julho/2024', 'Paga'),
  ('MUL-207b', 'L3-007', '2024-10-14', 'Irregularidade sanitária', 5000, 'Notificação da Vigilância Sanitária repercutida no mall', 'Contestada'),
  ('MUL-228', 'L3-028', '2024-11-20', 'Atraso no Pagamento', 1900, 'Atraso de 5 dias novembro/2024', 'Paga'),
  ('MUL-256', 'L3-056', '2025-04-05', 'Atraso no Pagamento', 1400, 'Atraso de 5 dias em abril/2025', 'Paga');

-- ------------------------------------------------------------
-- Tabela: propostas_historico
-- Fonte: comercialData.ts → keyStores[].propostas
-- ------------------------------------------------------------
CREATE TABLE propostas_historico (
  id          VARCHAR(15)  NOT NULL,
  lojista_id  VARCHAR(10)  NOT NULL,
  data        DATE         NOT NULL,
  tipo        tipo_tipo_propostas_historico NOT NULL,
  valor       DECIMAL(12,2) NOT NULL,
  status      tipo_status_propostas NOT NULL,
  observacao  TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
);

INSERT INTO propostas_historico VALUES
  ('PROP-H-001', 'L1-001', '2024-01-10', 'Renovação', 72000, 'Aceita', 'Renovação com reajuste de 8% pelo IGPM'),
  ('PROP-H-002', 'L1-001', '2021-02-05', 'Nova Proposta', 62000, 'Aceita', 'Expansão com área adicional de 200m²'),
  ('PROP-H-003', 'L1-002', '2026-04-10', 'Renovação', 66000, 'Em Negociação', 'Proposta de renovação com reajuste de 8%'),
  ('PROP-H-004', 'L1-002', '2023-04-15', 'Renovação', 61000, 'Aceita', 'Renovação com readequação de área'),
  ('PROP-H-005', 'L1-003', '2023-11-15', 'Renovação', 55000, 'Aceita', 'Negociação rápida, sem pendências'),
  ('PROP-H-006', 'L1-004', '2025-01-20', 'Nova Proposta', 98000, 'Aceita', 'Nova instalação, ponto premium'),
  ('PROP-H-007', 'L1-005', '2024-05-01', 'Nova Proposta', 88000, 'Aceita', NULL),
  ('PROP-H-008', 'L1-006', '2023-07-01', 'Renovação', 32000, 'Aceita', 'Reajuste de 7% acordado'),
  ('PROP-H-009', 'L1-007', '2026-04-05', 'Renovação', 20000, 'Em Negociação', 'Reajuste proposto de 11%'),
  ('PROP-H-010', 'L1-007', '2023-11-28', 'Renovação', 18000, 'Aceita', NULL),
  ('PROP-H-011', 'L1-008', '2024-12-10', 'Nova Proposta', 41000, 'Aceita', 'Transferência de outra unidade'),
  ('PROP-H-012', 'L1-031', '2022-06-01', 'Nova Proposta', 95000, 'Aceita', 'Âncora esportiva exclusiva para o piso 1'),
  ('PROP-H-013', 'L1-032', '2024-02-10', 'Renovação', 52000, 'Aceita', NULL),
  ('PROP-H-014', 'L1-033', '2023-08-01', 'Renovação', 68000, 'Aceita', 'Reajuste de 9% negociado'),
  ('PROP-H-015', 'L1-034', '2024-03-15', 'Nova Proposta', 58000, 'Aceita', NULL),
  ('PROP-H-016', 'L1-061', '2026-04-02', 'Renovação', 31000, 'Em Análise', 'Banco solicita prazo de análise interna de 30 dias'),
  ('PROP-H-017', 'L1-061', '2020-11-20', 'Nova Proposta', 28000, 'Aceita', NULL),
  ('PROP-H-018', 'L1-062', '2024-06-01', 'Renovação', 26000, 'Aceita', 'Renovação antecipada com ajuste'),
  ('PROP-H-019', 'L1-063', '2026-04-05', 'Renovação', 20500, 'Pendente', 'Aguardando aprovação interna da operadora'),
  ('PROP-H-020', 'L1-063', '2023-01-01', 'Nova Proposta', 19000, 'Aceita', NULL),
  ('PROP-H-021', 'L2-001', '2024-04-01', 'Renovação', 75000, 'Aceita', 'Fidelização de lojista âncora'),
  ('PROP-H-022', 'L2-002', '2023-06-20', 'Nova Proposta', 150000, 'Aceita', 'Negociação estratégica com selo de loja certificada Apple'),
  ('PROP-H-023', 'L2-003', '2024-11-01', 'Nova Proposta', 82000, 'Aceita', NULL),
  ('PROP-H-024', 'L2-004', '2021-11-01', 'Nova Proposta', 68000, 'Aceita', NULL),
  ('PROP-H-025', 'L2-031', '2024-01-10', 'Renovação', 34000, 'Aceita', NULL),
  ('PROP-H-026', 'L2-032', '2025-04-01', 'Renovação', 31000, 'Aceita', NULL),
  ('PROP-H-027', 'L2-033', '2026-04-10', 'Readequação', 48000, 'Em Negociação', 'Proposta de aumento de área com novo contrato'),
  ('PROP-H-028', 'L2-033', '2024-07-01', 'Nova Proposta', 45000, 'Aceita', 'Primeiro Starbucks Reserve de Goiânia'),
  ('PROP-H-029', 'L2-034', '2024-12-01', 'Nova Proposta', 110000, 'Aceita', 'Primeira loja em Goiânia — exclusividade por 5 anos'),
  ('PROP-H-030', 'L2-061', '2023-04-01', 'Nova Proposta', 48000, 'Aceita', 'Contrato longo prazo 5 anos com reajuste anual IGPM'),
  ('PROP-H-031', 'L2-063', '2018-10-01', 'Nova Proposta', 180000, 'Aceita', 'Contrato âncora de entretenimento 10 anos'),
  ('PROP-H-032', 'L3-001', '2022-02-01', 'Renovação', 90000, 'Aceita', NULL),
  ('PROP-H-033', 'L3-002', '2024-06-01', 'Renovação', 105000, 'Aceita', 'Expansão de área de 350 para 400m²'),
  ('PROP-H-034', 'L3-002', '2026-04-15', 'Readequação', 115000, 'Em Negociação', 'Proposta de nova expansão + reforma da cozinha'),
  ('PROP-H-035', 'L3-003', '2023-11-20', 'Nova Proposta', 22000, 'Aceita', NULL),
  ('PROP-H-036', 'L3-004', '2026-04-08', 'Renovação', 82000, 'Em Negociação', 'Negociação com pedido de desconto pela inflação do setor'),
  ('PROP-H-037', 'L3-004', '2023-05-01', 'Nova Proposta', 75000, 'Aceita', NULL),
  ('PROP-H-038', 'L3-005', '2023-09-01', 'Nova Proposta', 135000, 'Aceita', 'Âncora premium da praça de alimentação'),
  ('PROP-H-039', 'L3-006', '2024-12-01', 'Renovação', 26000, 'Aceita', NULL),
  ('PROP-H-040', 'L3-007', '2023-02-01', 'Nova Proposta', 20000, 'Aceita', NULL),
  ('PROP-H-041', 'L3-028', '2024-03-01', 'Nova Proposta', 38000, 'Aceita', NULL),
  ('PROP-H-042', 'L3-029', '2024-11-01', 'Nova Proposta', 35000, 'Aceita', NULL),
  ('PROP-H-043', 'L3-030', '2024-05-01', 'Renovação', 24000, 'Aceita', NULL),
  ('PROP-H-044', 'L3-055', '2024-02-01', 'Nova Proposta', 42000, 'Aceita', NULL),
  ('PROP-H-045', 'L3-056', '2026-04-05', 'Renovação', 29000, 'Pendente', 'Aguardando definição interna sobre fechamento de filiais'),
  ('PROP-H-046', 'L3-056', '2022-04-01', 'Nova Proposta', 28000, 'Aceita', NULL),
  ('PROP-H-047', 'L3-057', '2025-01-01', 'Renovação', 16000, 'Aceita', NULL);

-- ------------------------------------------------------------
-- Tabela: propostas
-- Fonte: comercialData.ts → propostasAtivas
-- ------------------------------------------------------------
CREATE TABLE propostas (
  id               VARCHAR(20)  NOT NULL,
  lojista_id       VARCHAR(10),
  lojista_nome     VARCHAR(100) NOT NULL,
  unidade          VARCHAR(10)  NOT NULL,
  segmento         tipo_segmento NOT NULL,
  tipo             tipo_tipo_propostas NOT NULL,
  valor_proposto   DECIMAL(12,2) NOT NULL,
  area_m2          INT          NOT NULL,
  status           tipo_status_propostas NOT NULL,
  responsavel      VARCHAR(100) NOT NULL,
  data_criacao     DATE         NOT NULL,
  data_vencimento  DATE         NOT NULL,
  observacoes      TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
);

INSERT INTO propostas VALUES
  ('PROP-2026-001', 'L1-002', 'C&A', 'L1-002', 'Moda', 'Renovação', 66000, 700, 'Em Negociação', 'Gerência Comercial', '2026-04-10', '2026-05-30', 'Proposta de renovação com reajuste de 8% sobre IPCA. Lojista solicita menor percentual de faturamento.'),
  ('PROP-2026-002', NULL, 'Zara Home (Novo)', 'L2-039', 'Outros', 'Nova Instalação', 38000, 90, 'Em Análise', 'Gerência Comercial', '2026-04-08', '2026-05-15', 'Grupo Inditex propõe inaugurar Zara Home na unidade disponível L2-039.'),
  ('PROP-2026-003', 'L3-004', 'Burger King', 'L3-004', 'Alimentação', 'Renovação', 82000, 280, 'Em Negociação', 'Gerência Comercial', '2026-04-08', '2026-06-05', 'BK solicita desconto de 5% alegando retração do setor de fast food.'),
  ('PROP-2026-004', NULL, 'Espaço Gourmet Premium', 'L3-008', 'Alimentação', 'Nova Instalação', 45000, 100, 'Pendente', 'Gerência Comercial', '2026-04-07', '2026-05-22', 'Novo conceito de restaurante premium. Aguardando documentação do licitante.'),
  ('PROP-2026-005', 'L2-033', 'Starbucks Reserve', 'L2-033', 'Alimentação', 'Readequação', 48000, 220, 'Em Negociação', 'Gerência Comercial', '2026-04-05', '2026-05-25', 'Proposta de expansão de 200 para 220m² com novo layout de balcão.'),
  ('PROP-2026-006', NULL, 'Tech World', 'L2-015', 'Eletrônicos', 'Nova Instalação', 52000, 100, 'Em Análise', 'Gerência Comercial', '2026-04-04', '2026-05-20', 'Franquia nacional de acessórios e dispositivos tech.'),
  ('PROP-2026-007', 'L1-007', 'Chilli Beans', 'L1-007', 'Moda', 'Renovação', 20000, 80, 'Em Negociação', 'Gerência Comercial', '2026-04-01', '2026-05-15', 'Reajuste de 11% proposto. Lojista contrapropôs 7%.'),
  ('PROP-2026-008', NULL, 'Academia Forma Perfeita', 'L2-062', 'Serviços', 'Nova Instalação', 35000, 95, 'Pendente', 'Gerência Comercial', '2026-04-01', '2026-05-10', 'Proposta de academia boutique para complementar Smart Fit.'),
  ('PROP-2026-009', 'L1-061', 'Bradesco', 'L1-061', 'Serviços', 'Renovação', 31000, 120, 'Em Análise', 'Gerência Comercial', '2026-04-02', '2026-05-20', 'Banco pede 30 dias para análise interna.'),
  ('PROP-2026-010', 'L3-056', 'Livraria Cultura', 'L3-056', 'Outros', 'Renovação', 29000, 350, 'Pendente', 'Gerência Comercial', '2026-03-30', '2026-05-10', 'Lojista avalia fechamento de unidades. Decisão pendente.'),
  ('PROP-2026-011', NULL, 'Studio Z', 'L1-023', 'Moda', 'Nova Instalação', 24000, 85, 'Em Análise', 'Gerência Comercial', '2026-03-28', '2026-05-12', 'Rede jovem de moda street wear.'),
  ('PROP-2026-012', NULL, 'Healthy Bowl', 'L3-031', 'Alimentação', 'Nova Instalação', 28000, 90, 'Aceita', 'Gerência Comercial', '2026-03-20', '2026-04-20', 'Aceite confirmado. Obras autorizadas para início em 25/04.'),
  ('PROP-2026-013', 'L1-063', 'Claro', 'L1-063', 'Serviços', 'Renovação', 20500, 70, 'Pendente', 'Gerência Comercial', '2026-03-15', '2026-05-01', 'Aguardando retorno da operadora após envio de proposta.'),
  ('PROP-2026-014', NULL, 'Grão Expresso', 'L3-054', 'Alimentação', 'Nova Instalação', 22000, 80, 'Aceita', 'Gerência Comercial', '2026-03-10', '2026-04-10', 'Cafeteria artesanal. Contrato assinado em 15/03.'),
  ('PROP-2026-015', 'L3-002', 'Outback Steakhouse', 'L3-002', 'Alimentação', 'Readequação', 115000, 420, 'Em Negociação', 'Gerência Comercial', '2026-04-15', '2026-05-15', 'Proposta de expansão para 420m² incluindo nova cozinha industrial.'),
  ('PROP-2026-016', NULL, 'Havaianas Flagship', 'L1-047', 'Moda', 'Nova Instalação', 32000, 120, 'Em Análise', 'Gerência Comercial', '2026-04-12', '2026-05-25', 'Proposta de loja flagship premium. Havaianas avaliando layout.'),
  ('PROP-2026-017', NULL, 'Mundo Digital', 'L3-072', 'Outros', 'Nova Instalação', 18000, 85, 'Recusada', 'Gerência Comercial', '2026-03-01', '2026-04-01', 'Perfil comercial inadequado para o posicionamento do mall.'),
  ('PROP-2026-018', 'L1-002', 'C&A (Readequação)', 'L1-002', 'Moda', 'Readequação', 58000, 600, 'Expirada', 'Gerência Comercial', '2026-01-01', '2026-03-01', 'Proposta de redução de área não aceita dentro do prazo.');

-- ------------------------------------------------------------
-- Tabela: sinistros
-- Fonte: store.ts → initialClaims
-- ------------------------------------------------------------
CREATE TABLE sinistros (
  id               VARCHAR(10)  NOT NULL,
  loja             VARCHAR(100) NOT NULL,
  tipo             VARCHAR(80)  NOT NULL,
  severidade       tipo_severidade NOT NULL,
  status           tipo_status_sinistros NOT NULL,
  data             DATE         NOT NULL,
  descricao        TEXT         NOT NULL,
  regulador        VARCHAR(100),
  valor_indenizacao DECIMAL(12,2),
  valor_franquia   DECIMAL(12,2),
  alerta_fraude    BOOLEAN      NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);

INSERT INTO sinistros VALUES
  ('SIN-001', 'Loja 104 - Vestuário', 'Vazamento / Infiltração', 'Alta', 'Aberto', '2026-04-06', 'Rompimento de cano na laje superior causando alagamento no estoque da loja.', NULL, NULL, NULL, FALSE),
  ('SIN-002', 'Loja 210 - Eletrônicos', 'Pico de Energia', 'Média', 'Aguardando Regulador', '2026-04-05', 'Curto circuito no quadro de distribuição, queima de 3 computadores e 1 monitor vitrine.', NULL, NULL, NULL, TRUE),
  ('SIN-003', 'Praça de Alimentação', 'Incêndio', 'Alta', 'Em Análise', '2026-04-01', 'Princípio de incêndio na coifa do restaurante 05.', 'Carlos Mendes (Susep 1234)', NULL, NULL, FALSE),
  ('SIN-004', 'Quiosque 12 - Joias', 'Dano Físico / Vandalismo', 'Baixa', 'Pago', '2026-03-25', 'Vidro do expositor trincado durante a madrugada.', 'Ana Souza (Susep 9876)', 4500, 500, FALSE);

-- ------------------------------
-- Segurança: roles, RLS, criptografia, UNIQUEs
-- ------------------------------

-- 1) Extensão para criptografia
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2) Roles mínimas (sem LOGIN) — criar usuários que herdarão essas roles separadamente
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_readonly') THEN
    CREATE ROLE app_readonly;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_writer') THEN
    CREATE ROLE app_writer;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_admin') THEN
    CREATE ROLE app_admin;
  END IF;
END $$;

-- 3) Grants de privilégio por role (aplicar aos objetos atuais e futuros)
GRANT USAGE ON SCHEMA public TO app_readonly, app_writer, app_admin;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO app_readonly;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_writer;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO app_admin;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO app_readonly;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_writer;

-- 4) Row Level Security (RLS) baseado em uma setting de sessão 'app.current_lojista'
-- Policies: usuários admin (app_admin) têm acesso total; readers/writers veem apenas linhas do seu lojista
-- Nota: antes de usar, cada sessão deve definir: SET app.current_lojista = 'L1-001';

ALTER TABLE contratos ENABLE ROW LEVEL SECURITY;
CREATE POLICY contratos_rls_app ON contratos FOR ALL
  USING (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  )
  WITH CHECK (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  );

ALTER TABLE multas ENABLE ROW LEVEL SECURITY;
CREATE POLICY multas_rls_app ON multas FOR ALL
  USING (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  )
  WITH CHECK (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  );

ALTER TABLE propostas ENABLE ROW LEVEL SECURITY;
CREATE POLICY propostas_rls_app ON propostas FOR ALL
  USING (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  )
  WITH CHECK (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  );

ALTER TABLE propostas_historico ENABLE ROW LEVEL SECURITY;
CREATE POLICY propostas_historico_rls_app ON propostas_historico FOR ALL
  USING (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  )
  WITH CHECK (
    pg_has_role(current_user, 'app_admin', 'member')
    OR (current_setting('app.current_lojista', true) IS NOT NULL AND lojista_id = current_setting('app.current_lojista', true))
  );

-- Para sinistros (dados possivelmente sensíveis) restrinja por padrão a admin; aplique políticas mais granulares se necessário
ALTER TABLE sinistros ENABLE ROW LEVEL SECURITY;
CREATE POLICY sinistros_admin_only ON sinistros FOR ALL
  USING ( pg_has_role(current_user, 'app_admin', 'member') )
  WITH CHECK ( pg_has_role(current_user, 'app_admin', 'member') );

-- CRÍTICO: RLS para lojistas (tabela base — DEVE estar protegida)
ALTER TABLE lojistas ENABLE ROW LEVEL SECURITY;
-- Admins veem todas as linhas; outros usuários não podem acessar (sem contexto de lojista_id)
CREATE POLICY lojistas_admin_only ON lojistas FOR ALL
  USING ( pg_has_role(current_user, 'app_admin', 'member') )
  WITH CHECK ( pg_has_role(current_user, 'app_admin', 'member') );
-- Nota: Se precisar de acesso granular por lojista (ex.: lojistas acessarem próprio perfil),
-- adicionar política secundária: CREATE POLICY lojistas_self_view ON lojistas FOR SELECT USING (id = current_setting('app.current_lojista', true));

-- 5) Criptografia de colunas sensíveis em `lojistas` (adiciona colunas encriptadas e trigger para novos dados)
ALTER TABLE lojistas
  ADD COLUMN IF NOT EXISTS cnpj_enc bytea,
  ADD COLUMN IF NOT EXISTS email_enc bytea,
  ADD COLUMN IF NOT EXISTS telefone_enc bytea,
  ADD COLUMN IF NOT EXISTS cnpj_hash text;

CREATE OR REPLACE FUNCTION lojistas_encrypt_trigger() RETURNS trigger AS $$
BEGIN
  IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
    IF NEW.cnpj IS NOT NULL THEN
      IF current_setting('app.encryption_key', true) IS NOT NULL THEN
        NEW.cnpj_enc := pgp_sym_encrypt(NEW.cnpj::text, current_setting('app.encryption_key'));
        -- ⚠️ SEGURANÇA: SHA256 puro é VULNERÁVEL a ataques de dicionário para CNPJs conhecidos
        -- RECOMENDAÇÃO: Implementar HMAC com segredo da aplicação
        -- Implementação segura: NEW.cnpj_hash := encode(hmac(NEW.cnpj::text || 'APP_SECRET', current_setting('app.encryption_key'), 'sha256'), 'hex');
        -- Por enquanto: usar SHA256 com consciência de que CNPJs públicos podem ser pré-computados
        NEW.cnpj_hash := encode(digest(NEW.cnpj::text, 'sha256'), 'hex');
        -- IMPORTANTE: Manter plaintext até verificação de migração estar completa
      END IF;
    END IF;
    IF NEW.email IS NOT NULL THEN
      IF current_setting('app.encryption_key', true) IS NOT NULL THEN
        NEW.email_enc := pgp_sym_encrypt(NEW.email::text, current_setting('app.encryption_key'));
        -- Manter plaintext até migração verificada
      END IF;
    END IF;
    IF NEW.telefone IS NOT NULL THEN
      IF current_setting('app.encryption_key', true) IS NOT NULL THEN
        NEW.telefone_enc := pgp_sym_encrypt(NEW.telefone::text, current_setting('app.encryption_key'));
        -- Manter plaintext até migração verificada
      END IF;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_lojistas_encrypt ON lojistas;
CREATE TRIGGER trg_lojistas_encrypt BEFORE INSERT OR UPDATE ON lojistas
  FOR EACH ROW EXECUTE FUNCTION lojistas_encrypt_trigger();

-- Migração segura de dados existentes (executa apenas se a setting app.encryption_key estiver definida)
DO $$
BEGIN
  IF current_setting('app.encryption_key', true) IS NULL THEN
    RAISE NOTICE 'app.encryption_key não definida — pulando migração automática de campos sensíveis. Defina a GUC app.encryption_key e execute manualmente os updates fornecidos no script.';
  ELSE
    UPDATE lojistas
      SET cnpj_enc = pgp_sym_encrypt(cnpj::text, current_setting('app.encryption_key'))
    WHERE cnpj IS NOT NULL;
    UPDATE lojistas
      SET email_enc = pgp_sym_encrypt(email::text, current_setting('app.encryption_key'))
    WHERE email IS NOT NULL;
    UPDATE lojistas
      SET telefone_enc = pgp_sym_encrypt(telefone::text, current_setting('app.encryption_key'))
    WHERE telefone IS NOT NULL;
    -- Opcional: remover colunas plaintext após verificação
    -- UPDATE lojistas SET cnpj = NULL WHERE cnpj IS NOT NULL;
    -- UPDATE lojistas SET email = NULL WHERE email IS NOT NULL;
    -- UPDATE lojistas SET telefone = NULL WHERE telefone IS NOT NULL;
  END IF;
END $$;

-- Função auxiliar para desencriptar (usada APENAS por app_admin via SECURITY DEFINER)
-- ⚠️ IMPORTANTE: Esta função contém SECURITY DEFINER e deve ser altamente restrita
CREATE OR REPLACE FUNCTION pg_decrypt(data bytea) RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF current_setting('app.encryption_key', true) IS NULL THEN
    RAISE EXCEPTION 'app.encryption_key não configurada';
  END IF;
  RETURN pgp_sym_decrypt(data, current_setting('app.encryption_key'));
END;
$$;

-- Remover acesso público à função de desencriptação (CRÍTICO DE SEGURANÇA)
REVOKE ALL ON FUNCTION pg_decrypt(bytea) FROM PUBLIC;
-- Conceder acesso apenas a app_admin
GRANT EXECUTE ON FUNCTION pg_decrypt(bytea) TO app_admin;

-- 6) Views públicas e grants para evitar exposição de colunas sensíveis
CREATE OR REPLACE VIEW lojistas_public AS
  SELECT id, nome, unidade, segmento, piso, corredor, area_m2, status
  FROM lojistas;
GRANT SELECT ON lojistas_public TO app_readonly;

-- 7) UNIQUEs: unidade e cnpj (parcial onde não NULL)
CREATE UNIQUE INDEX IF NOT EXISTS uq_lojistas_unidade ON lojistas(unidade);
-- replace unique index on plaintext cnpj by unique index on cnpj_hash (hash is deterministic)
DROP INDEX IF EXISTS uq_lojistas_cnpj;
CREATE UNIQUE INDEX IF NOT EXISTS uq_lojistas_cnpj_hash ON lojistas(cnpj_hash);


-- Índices adicionados para chaves estrangeiras e filtros comuns
CREATE INDEX IF NOT EXISTS idx_contratos_lojista_id ON contratos(lojista_id);
CREATE INDEX IF NOT EXISTS idx_multas_lojista_id ON multas(lojista_id);
CREATE INDEX IF NOT EXISTS idx_propostas_lojista_id ON propostas(lojista_id);
CREATE INDEX IF NOT EXISTS idx_propostas_historico_lojista_id ON propostas_historico(lojista_id);

CREATE INDEX IF NOT EXISTS idx_lojistas_segmento ON lojistas(segmento);
CREATE INDEX IF NOT EXISTS idx_lojistas_piso ON lojistas(piso);
CREATE INDEX IF NOT EXISTS idx_lojistas_corredor ON lojistas(corredor);

CREATE INDEX IF NOT EXISTS idx_contratos_status ON contratos(status);
CREATE INDEX IF NOT EXISTS idx_propostas_status ON propostas(status);
CREATE INDEX IF NOT EXISTS idx_sinistros_status ON sinistros(status);

-- Índices para colunas frequentemente consultadas (ex.: busca por unidade)
CREATE INDEX IF NOT EXISTS idx_lojistas_unidade ON lojistas(unidade);

-- Adicionar CHECK constraints se não existirem
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_lojistas_area_m2_positive') THEN
    ALTER TABLE lojistas ADD CONSTRAINT chk_lojistas_area_m2_positive CHECK (area_m2 > 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_lojistas_faturamento_nonneg') THEN
    ALTER TABLE lojistas ADD CONSTRAINT chk_lojistas_faturamento_nonneg CHECK (faturamento_medio >= 0);
  END IF;
  -- ⚠️ RESTRIÇÃO DE NEGÓCIO: Se lojista está Ocupado, nome é obrigatório
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_lojistas_ocupado_requires_nome') THEN
    ALTER TABLE lojistas ADD CONSTRAINT chk_lojistas_ocupado_requires_nome
      CHECK (status = 'Disponível' OR (status = 'Ocupado' AND nome IS NOT NULL));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_contratos_valor_nonneg') THEN
    ALTER TABLE contratos ADD CONSTRAINT chk_contratos_valor_nonneg CHECK (valor_aluguel >= 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_contratos_luvas_nonneg') THEN
    ALTER TABLE contratos ADD CONSTRAINT chk_contratos_luvas_nonneg CHECK (luvas >= 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_contratos_percentual_range') THEN
    ALTER TABLE contratos ADD CONSTRAINT chk_contratos_percentual_range CHECK (percentual_faturamento >= 0 AND percentual_faturamento <= 100);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_contratos_desempenho_range') THEN
    ALTER TABLE contratos ADD CONSTRAINT chk_contratos_desempenho_range CHECK (desempenho BETWEEN 0 AND 100);
  END IF;
  -- Validação: fim deve ser posterior a início
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_contratos_fim_after_inicio') THEN
    ALTER TABLE contratos ADD CONSTRAINT chk_contratos_fim_after_inicio CHECK (fim > inicio);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_multas_valor_positive') THEN
    ALTER TABLE multas ADD CONSTRAINT chk_multas_valor_positive CHECK (valor > 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_sinistros_indenizacao_nonneg') THEN
    ALTER TABLE sinistros ADD CONSTRAINT chk_sinistros_indenizacao_nonneg CHECK (valor_indenizacao IS NULL OR valor_indenizacao >= 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_sinistros_franquia_nonneg') THEN
    ALTER TABLE sinistros ADD CONSTRAINT chk_sinistros_franquia_nonneg CHECK (valor_franquia IS NULL OR valor_franquia >= 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_propostas_vencimento_after_criacao') THEN
    ALTER TABLE propostas ADD CONSTRAINT chk_propostas_vencimento_after_criacao CHECK (data_vencimento >= data_criacao);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_propostas_area_positive') THEN
    ALTER TABLE propostas ADD CONSTRAINT chk_propostas_area_positive CHECK (area_m2 > 0);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_propostas_valor_positive') THEN
    ALTER TABLE propostas ADD CONSTRAINT chk_propostas_valor_positive CHECK (valor_proposto > 0);
  END IF;
END $$;

-- Ajustar FKs existentes para explicitar ON DELETE RESTRICT (drop/recreate dinamicamente)
-- ⚠️ NOTA: Esta abordagem funciona para FKs simples (coluna única).
--          Para FKs compostas, será necessário adaptar e indicar as colunas específicas.
-- ⚠️ SEGURANÇA: Se no futuro adicionar FKs compostas, este bloco pode falhar
DO $$
DECLARE
  r record;
BEGIN
  FOR r IN
    SELECT conname, conrelid::regclass::text AS table_name
    FROM pg_constraint
    WHERE contype = 'f' AND confrelid = 'lojistas'::regclass
  LOOP
    BEGIN
      EXECUTE format('ALTER TABLE %s DROP CONSTRAINT %I', r.table_name, r.conname);
    EXCEPTION WHEN others THEN
      -- ignore se constraint não existir
    END;
    BEGIN
      EXECUTE format('ALTER TABLE %s ADD CONSTRAINT %I FOREIGN KEY (lojista_id) REFERENCES lojistas(id) ON DELETE RESTRICT', r.table_name, r.conname);
    EXCEPTION WHEN others THEN
      RAISE NOTICE 'Falha ao recrear FK %: verifique se existe coluna lojista_id ou se a FK é composta', r.conname;
    END;
  END LOOP;
END $$;

-- ============================================================================
-- NOTAS ARQUITETURAIS: NORMALIZAÇÃO E CAMPOS REDUNDANTES
-- ============================================================================
-- 1. CAMPO: contratos.dias_restantes
--    STATUS: Derivável (EXTRACT(DAY FROM (fim - CURRENT_DATE))::INT)
--    PROBLEMA: Campo armazenado cria redundância e inconsistência ao longo do tempo
--    SOLUÇÃO RECOMENDADA: Remover coluna e criar VIEW ou COMPUTED COLUMN:
--    CREATE VIEW contratos_with_dias_restantes AS
--      SELECT *, EXTRACT(DAY FROM (fim - CURRENT_DATE))::INT AS dias_restantes
--      FROM contratos;
--    Alternativa (PostgreSQL 12+): Adicionar coluna GENERATED
--      ALTER TABLE contratos ADD COLUMN dias_restantes_computed INT 
--        GENERATED ALWAYS AS (EXTRACT(DAY FROM (fim - CURRENT_DATE))::INT) STORED;
--    IMPACTO: Elimina inconsistência e reduz espaço de armazenamento
--
-- 2. CAMPOS CRÍTICOS COM NULL INDEVIDO: lojistas.nome, responsavel, email, telefone
--    PROBLEMA: Para status='Ocupado', estes campos deveriam ser obrigatórios (NOT NULL)
--    PROBLEMA: Modelo atual mistura "unidades vazias" (Disponível) com "unidades ocupadas"
--    SOLUÇÃO ATUAL: Usar CHECK constraint para enforçar regra de negócio
--      ALTER TABLE lojistas ADD CONSTRAINT chk_lojistas_ocupado_requires_nome
--        CHECK (status = 'Disponível' OR (status = 'Ocupado' AND nome IS NOT NULL));
--    SOLUÇÃO ALTERNATIVA (mais normalizada): Separar em duas tabelas:
--      - TABLE unidades (id, piso, corredor, area_m2, status_unidade)
--      - TABLE lojistas (id, nome, cnpj, responsavel, email, etc.)
--      - TABLE ocupacoes (unidade_id, lojista_id, data_inicio, data_fim, status)
--    IMPACTO: Melhor separação de conceitos, reduz NULL checks, mais flexível
--
-- 3. CAMPO: contratos.status (derivável parcialmente)
--    OBSERVAÇÃO: status em contratos pode ser parcialmente derivável de fim vs CURRENT_DATE:
--      - Se fim < CURRENT_DATE: 'Vencido'
--      - Se fim <= CURRENT_DATE + INTERVAL '90 days': 'Vencendo'
--      - Caso contrário: 'Ativo' (assumindo contexto apropriado)
--    PROBLEMA: Contexto de negócio (Renovação, renegociação) torna complexo apenas derivar
--    DECISÃO: Manter status como campo explícito com validação via gatilhos/aplicação
-- ============================================================================

