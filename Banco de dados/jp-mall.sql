
CREATE DATABASE IF NOT EXISTS `jp-mall`
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE `jp-mall`;

-- ------------------------------------------------------------
-- Tabela: lojistas
-- Fonte: comercialData.ts → keyStores + unidades disponíveis
-- ------------------------------------------------------------
CREATE TABLE lojistas (
  id               VARCHAR(10)  NOT NULL,
  nome             VARCHAR(100),
  cnpj             VARCHAR(20),
  segmento         ENUM('Moda','Alimentação','Serviços','Eletrônicos','Esportes','Entretenimento','Outros') NOT NULL,
  responsavel      VARCHAR(100),
  email            VARCHAR(150),
  telefone         VARCHAR(20),
  unidade          VARCHAR(10)  NOT NULL,
  piso             ENUM('L1','L2','L3') NOT NULL,
  corredor         ENUM('A','B','C') NOT NULL,
  area_m2          INT          NOT NULL,
  status           ENUM('Ocupado','Disponível') NOT NULL DEFAULT 'Disponível',
  status_relacionamento ENUM('Excelente','Bom','Regular','Crítico'),
  faturamento_medio BIGINT      NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

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
  inicio                  VARCHAR(12)  NOT NULL,
  fim                     VARCHAR(12)  NOT NULL,
  valor_aluguel           DECIMAL(12,2) NOT NULL,
  luvas                   DECIMAL(12,2) NOT NULL,
  percentual_faturamento  DECIMAL(5,2) NOT NULL DEFAULT 0,
  indice_reajuste         ENUM('IGPM','IPCA') NOT NULL,
  tipo                    ENUM('Aluguel Fixo','Aluguel + Percentual','Só Percentual') NOT NULL,
  desempenho              INT          NOT NULL,
  dias_restantes          INT          NOT NULL,
  status                  ENUM('Ativo','Em Renovação','Vencendo','Vencido') NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO contratos VALUES
  ('CTR-2024-001', 'L1-001', '01/03/2024', '28/02/2027', 72000, 450000, 3.5, 'IGPM', 'Aluguel + Percentual', 95, 683, 'Ativo'),
  ('CTR-2023-002', 'L1-002', '01/06/2023', '31/05/2026', 61000, 380000, 3.0, 'IPCA', 'Aluguel + Percentual', 82, 44, 'Vencendo'),
  ('CTR-2024-003', 'L1-003', '01/01/2024', '31/12/2026', 55000, 310000, 3.2, 'IGPM', 'Aluguel + Percentual', 79, 258, 'Ativo'),
  ('CTR-2025-004', 'L1-004', '01/04/2025', '31/03/2028', 98000, 620000, 4.0, 'IPCA', 'Aluguel + Percentual', 97, 1079, 'Ativo'),
  ('CTR-2024-005', 'L1-005', '01/07/2024', '30/06/2027', 88000, 550000, 3.8, 'IPCA', 'Aluguel + Percentual', 93, 804, 'Ativo'),
  ('CTR-2023-006', 'L1-006', '01/09/2023', '31/08/2026', 32000, 180000, 4.5, 'IGPM', 'Aluguel + Percentual', 91, 136, 'Ativo'),
  ('CTR-2024-007', 'L1-007', '01/01/2024', '31/12/2025', 18000, 95000, 5.0, 'IPCA', 'Aluguel + Percentual', 76, 258, 'Vencendo'),
  ('CTR-2025-008', 'L1-008', '01/02/2025', '31/01/2028', 41000, 220000, 4.2, 'IGPM', 'Aluguel + Percentual', 89, 1020, 'Ativo'),
  ('CTR-2022-031', 'L1-031', '01/08/2022', '31/07/2027', 95000, 700000, 2.8, 'IGPM', 'Aluguel + Percentual', 98, 1200, 'Ativo'),
  ('CTR-2024-032', 'L1-032', '01/04/2024', '31/03/2027', 52000, 290000, 3.5, 'IPCA', 'Aluguel + Percentual', 90, 714, 'Ativo'),
  ('CTR-2023-033', 'L1-033', '01/10/2023', '30/09/2026', 68000, 420000, 4.0, 'IPCA', 'Aluguel + Percentual', 96, 166, 'Ativo'),
  ('CTR-2024-034', 'L1-034', '01/05/2024', '30/04/2027', 58000, 340000, 3.8, 'IGPM', 'Aluguel + Percentual', 84, 744, 'Ativo'),
  ('CTR-2021-061', 'L1-061', '01/01/2021', '31/12/2025', 28000, 150000, 0, 'IPCA', 'Aluguel Fixo', 99, 258, 'Vencendo'),
  ('CTR-2024-062', 'L1-062', '01/08/2024', '31/07/2027', 26000, 130000, 0, 'IPCA', 'Aluguel Fixo', 100, 835, 'Ativo'),
  ('CTR-2023-063', 'L1-063', '01/03/2023', '28/02/2026', 19000, 80000, 2.0, 'IGPM', 'Aluguel + Percentual', 61, 47, 'Vencendo'),
  ('CTR-2024-101', 'L2-001', '01/06/2024', '31/05/2027', 75000, 480000, 2.5, 'IGPM', 'Aluguel + Percentual', 92, 774, 'Ativo'),
  ('CTR-2023-102', 'L2-002', '01/09/2023', '31/08/2028', 150000, 1200000, 2.0, 'IPCA', 'Aluguel + Percentual', 100, 1231, 'Ativo'),
  ('CTR-2025-103', 'L2-003', '01/01/2025', '31/12/2027', 82000, 500000, 2.8, 'IPCA', 'Aluguel + Percentual', 94, 988, 'Ativo'),
  ('CTR-2022-104', 'L2-004', '01/01/2022', '31/12/2026', 68000, 380000, 2.2, 'IGPM', 'Aluguel + Percentual', 80, 258, 'Ativo'),
  ('CTR-2024-131', 'L2-031', '01/03/2024', '28/02/2027', 34000, 180000, 4.5, 'IGPM', 'Aluguel + Percentual', 92, 683, 'Ativo'),
  ('CTR-2025-132', 'L2-032', '01/06/2025', '31/05/2028', 31000, 160000, 4.2, 'IPCA', 'Aluguel + Percentual', 90, 1140, 'Ativo'),
  ('CTR-2024-133', 'L2-033', '01/09/2024', '31/08/2027', 45000, 280000, 5.0, 'IGPM', 'Aluguel + Percentual', 95, 866, 'Ativo'),
  ('CTR-2025-134', 'L2-034', '01/03/2025', '28/02/2030', 110000, 800000, 3.5, 'IPCA', 'Aluguel + Percentual', 97, 1777, 'Ativo'),
  ('CTR-2023-161', 'L2-061', '01/06/2023', '31/05/2028', 48000, 300000, 0, 'IGPM', 'Aluguel Fixo', 88, 1140, 'Ativo'),
  ('CTR-2019-163', 'L2-063', '01/01/2019', '31/12/2028', 180000, 2000000, 2.0, 'IGPM', 'Aluguel + Percentual', 96, 1719, 'Ativo'),
  ('CTR-2022-201', 'L3-001', '01/04/2022', '31/03/2027', 90000, 600000, 3.0, 'IGPM', 'Aluguel + Percentual', 99, 349, 'Ativo'),
  ('CTR-2024-202', 'L3-002', '01/08/2024', '31/07/2027', 105000, 700000, 3.5, 'IGPM', 'Aluguel + Percentual', 97, 835, 'Ativo'),
  ('CTR-2024-203', 'L3-003', '01/01/2024', '31/12/2026', 22000, 110000, 5.0, 'IPCA', 'Aluguel + Percentual', 74, 258, 'Ativo'),
  ('CTR-2023-204', 'L3-004', '01/07/2023', '30/06/2026', 75000, 450000, 3.2, 'IGPM', 'Aluguel + Percentual', 91, 74, 'Vencendo'),
  ('CTR-2023-205', 'L3-005', '01/11/2023', '31/10/2028', 135000, 950000, 3.0, 'IGPM', 'Aluguel + Percentual', 98, 1657, 'Ativo'),
  ('CTR-2025-206', 'L3-006', '01/02/2025', '31/01/2028', 26000, 130000, 4.5, 'IPCA', 'Aluguel + Percentual', 78, 1020, 'Ativo'),
  ('CTR-2023-207', 'L3-007', '01/04/2023', '31/03/2026', 20000, 90000, 4.0, 'IGPM', 'Aluguel + Percentual', 65, 349, 'Ativo'),
  ('CTR-2024-228', 'L3-028', '01/05/2024', '30/04/2027', 38000, 200000, 4.0, 'IPCA', 'Aluguel + Percentual', 77, 743, 'Ativo'),
  ('CTR-2025-229', 'L3-029', '01/01/2025', '31/12/2027', 35000, 180000, 4.2, 'IGPM', 'Aluguel + Percentual', 82, 988, 'Ativo'),
  ('CTR-2024-230', 'L3-030', '01/07/2024', '30/06/2027', 24000, 120000, 4.5, 'IPCA', 'Aluguel + Percentual', 80, 804, 'Ativo'),
  ('CTR-2024-255', 'L3-055', '01/04/2024', '31/03/2027', 42000, 230000, 3.0, 'IGPM', 'Aluguel + Percentual', 81, 714, 'Ativo'),
  ('CTR-2022-256', 'L3-056', '01/06/2022', '31/05/2026', 28000, 150000, 3.5, 'IPCA', 'Aluguel + Percentual', 62, 44, 'Vencendo'),
  ('CTR-2025-257', 'L3-057', '01/03/2025', '28/02/2028', 16000, 75000, 4.0, 'IPCA', 'Aluguel + Percentual', 75, 1047, 'Ativo');

-- ------------------------------------------------------------
-- Tabela: multas
-- Fonte: comercialData.ts → keyStores[].multas
-- ------------------------------------------------------------
CREATE TABLE multas (
  id          VARCHAR(15)  NOT NULL,
  lojista_id  VARCHAR(10)  NOT NULL,
  data        VARCHAR(12)  NOT NULL,
  tipo        VARCHAR(80)  NOT NULL,
  valor       DECIMAL(10,2) NOT NULL,
  descricao   TEXT         NOT NULL,
  status      ENUM('Paga','Pendente','Contestada') NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO multas VALUES
  ('MUL-001', 'L1-001', '15/08/2024', 'Atraso no Pagamento', 3600, 'Atraso de 5 dias no pagamento de aluguel ago/2024', 'Paga'),
  ('MUL-002', 'L1-002', '10/11/2023', 'Uso indevido de área comum', 5000, 'Uso de corredor externo para exposição sem autorização', 'Paga'),
  ('MUL-003', 'L1-002', '18/03/2024', 'Atraso no Pagamento', 3050, 'Atraso de 4 dias no pagamento de março/2024', 'Paga'),
  ('MUL-007', 'L1-007', '20/06/2024', 'Fachada fora do padrão', 2500, 'Outdoor não aprovado pelo mall instalado na fachada', 'Paga'),
  ('MUL-034', 'L1-034', '12/09/2024', 'Obras sem aprovação', 8000, 'Remodelação da fachada sem autorização prévia do mall', 'Contestada'),
  ('MUL-063a', 'L1-063', '10/05/2024', 'Atraso no Pagamento', 950, 'Atraso de 3 dias no pagamento de maio/2024', 'Paga'),
  ('MUL-063b', 'L1-063', '12/09/2024', 'Atraso no Pagamento', 950, 'Atraso de 3 dias no pagamento de setembro/2024', 'Paga'),
  ('MUL-063c', 'L1-063', '08/01/2025', 'Atraso no Pagamento', 950, 'Atraso de 2 dias no pagamento de janeiro/2025', 'Pendente'),
  ('MUL-104', 'L2-004', '25/07/2023', 'Atraso no Pagamento', 3400, 'Atraso de 5 dias no pagamento de julho/2023', 'Paga'),
  ('MUL-203', 'L3-003', '02/02/2025', 'Descumprimento de horário', 2000, 'Funcionamento fora do horário estabelecido sem autorização prévia', 'Paga'),
  ('MUL-207a', 'L3-007', '15/07/2024', 'Atraso no Pagamento', 1000, 'Atraso de 5 dias no pagamento de julho/2024', 'Paga'),
  ('MUL-207b', 'L3-007', '14/10/2024', 'Irregularidade sanitária', 5000, 'Notificação da Vigilância Sanitária repercutida no mall', 'Contestada'),
  ('MUL-228', 'L3-028', '20/11/2024', 'Atraso no Pagamento', 1900, 'Atraso de 5 dias novembro/2024', 'Paga'),
  ('MUL-256', 'L3-056', '05/04/2025', 'Atraso no Pagamento', 1400, 'Atraso de 5 dias em abril/2025', 'Paga');

-- ------------------------------------------------------------
-- Tabela: propostas_historico
-- Fonte: comercialData.ts → keyStores[].propostas
-- ------------------------------------------------------------
CREATE TABLE propostas_historico (
  id          VARCHAR(15)  NOT NULL,
  lojista_id  VARCHAR(10)  NOT NULL,
  data        VARCHAR(12)  NOT NULL,
  tipo        ENUM('Nova Proposta','Renovação','Readequação') NOT NULL,
  valor       DECIMAL(12,2) NOT NULL,
  status      ENUM('Pendente','Em Análise','Em Negociação','Aceita','Recusada','Expirada') NOT NULL,
  observacao  TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO propostas_historico VALUES
  ('PROP-H-001', 'L1-001', '10/01/2024', 'Renovação', 72000, 'Aceita', 'Renovação com reajuste de 8% pelo IGPM'),
  ('PROP-H-002', 'L1-001', '05/02/2021', 'Nova Proposta', 62000, 'Aceita', 'Expansão com área adicional de 200m²'),
  ('PROP-H-003', 'L1-002', '10/04/2026', 'Renovação', 66000, 'Em Negociação', 'Proposta de renovação com reajuste de 8%'),
  ('PROP-H-004', 'L1-002', '15/04/2023', 'Renovação', 61000, 'Aceita', 'Renovação com readequação de área'),
  ('PROP-H-005', 'L1-003', '15/11/2023', 'Renovação', 55000, 'Aceita', 'Negociação rápida, sem pendências'),
  ('PROP-H-006', 'L1-004', '20/01/2025', 'Nova Proposta', 98000, 'Aceita', 'Nova instalação, ponto premium'),
  ('PROP-H-007', 'L1-005', '01/05/2024', 'Nova Proposta', 88000, 'Aceita', NULL),
  ('PROP-H-008', 'L1-006', '01/07/2023', 'Renovação', 32000, 'Aceita', 'Reajuste de 7% acordado'),
  ('PROP-H-009', 'L1-007', '05/04/2026', 'Renovação', 20000, 'Em Negociação', 'Reajuste proposto de 11%'),
  ('PROP-H-010', 'L1-007', '28/11/2023', 'Renovação', 18000, 'Aceita', NULL),
  ('PROP-H-011', 'L1-008', '10/12/2024', 'Nova Proposta', 41000, 'Aceita', 'Transferência de outra unidade'),
  ('PROP-H-012', 'L1-031', '01/06/2022', 'Nova Proposta', 95000, 'Aceita', 'Âncora esportiva exclusiva para o piso 1'),
  ('PROP-H-013', 'L1-032', '10/02/2024', 'Renovação', 52000, 'Aceita', NULL),
  ('PROP-H-014', 'L1-033', '01/08/2023', 'Renovação', 68000, 'Aceita', 'Reajuste de 9% negociado'),
  ('PROP-H-015', 'L1-034', '15/03/2024', 'Nova Proposta', 58000, 'Aceita', NULL),
  ('PROP-H-016', 'L1-061', '02/04/2026', 'Renovação', 31000, 'Em Análise', 'Banco solicita prazo de análise interna de 30 dias'),
  ('PROP-H-017', 'L1-061', '20/11/2020', 'Nova Proposta', 28000, 'Aceita', NULL),
  ('PROP-H-018', 'L1-062', '01/06/2024', 'Renovação', 26000, 'Aceita', 'Renovação antecipada com ajuste'),
  ('PROP-H-019', 'L1-063', '05/04/2026', 'Renovação', 20500, 'Pendente', 'Aguardando aprovação interna da operadora'),
  ('PROP-H-020', 'L1-063', '01/01/2023', 'Nova Proposta', 19000, 'Aceita', NULL),
  ('PROP-H-021', 'L2-001', '01/04/2024', 'Renovação', 75000, 'Aceita', 'Fidelização de lojista âncora'),
  ('PROP-H-022', 'L2-002', '20/06/2023', 'Nova Proposta', 150000, 'Aceita', 'Negociação estratégica com selo de loja certificada Apple'),
  ('PROP-H-023', 'L2-003', '01/11/2024', 'Nova Proposta', 82000, 'Aceita', NULL),
  ('PROP-H-024', 'L2-004', '01/11/2021', 'Nova Proposta', 68000, 'Aceita', NULL),
  ('PROP-H-025', 'L2-031', '10/01/2024', 'Renovação', 34000, 'Aceita', NULL),
  ('PROP-H-026', 'L2-032', '01/04/2025', 'Renovação', 31000, 'Aceita', NULL),
  ('PROP-H-027', 'L2-033', '10/04/2026', 'Readequação', 48000, 'Em Negociação', 'Proposta de aumento de área com novo contrato'),
  ('PROP-H-028', 'L2-033', '01/07/2024', 'Nova Proposta', 45000, 'Aceita', 'Primeiro Starbucks Reserve de Goiânia'),
  ('PROP-H-029', 'L2-034', '01/12/2024', 'Nova Proposta', 110000, 'Aceita', 'Primeira loja em Goiânia — exclusividade por 5 anos'),
  ('PROP-H-030', 'L2-061', '01/04/2023', 'Nova Proposta', 48000, 'Aceita', 'Contrato longo prazo 5 anos com reajuste anual IGPM'),
  ('PROP-H-031', 'L2-063', '01/10/2018', 'Nova Proposta', 180000, 'Aceita', 'Contrato âncora de entretenimento 10 anos'),
  ('PROP-H-032', 'L3-001', '01/02/2022', 'Renovação', 90000, 'Aceita', NULL),
  ('PROP-H-033', 'L3-002', '01/06/2024', 'Renovação', 105000, 'Aceita', 'Expansão de área de 350 para 400m²'),
  ('PROP-H-034', 'L3-002', '15/04/2026', 'Readequação', 115000, 'Em Negociação', 'Proposta de nova expansão + reforma da cozinha'),
  ('PROP-H-035', 'L3-003', '20/11/2023', 'Nova Proposta', 22000, 'Aceita', NULL),
  ('PROP-H-036', 'L3-004', '08/04/2026', 'Renovação', 82000, 'Em Negociação', 'Negociação com pedido de desconto pela inflação do setor'),
  ('PROP-H-037', 'L3-004', '01/05/2023', 'Nova Proposta', 75000, 'Aceita', NULL),
  ('PROP-H-038', 'L3-005', '01/09/2023', 'Nova Proposta', 135000, 'Aceita', 'Âncora premium da praça de alimentação'),
  ('PROP-H-039', 'L3-006', '01/12/2024', 'Renovação', 26000, 'Aceita', NULL),
  ('PROP-H-040', 'L3-007', '01/02/2023', 'Nova Proposta', 20000, 'Aceita', NULL),
  ('PROP-H-041', 'L3-028', '01/03/2024', 'Nova Proposta', 38000, 'Aceita', NULL),
  ('PROP-H-042', 'L3-029', '01/11/2024', 'Nova Proposta', 35000, 'Aceita', NULL),
  ('PROP-H-043', 'L3-030', '01/05/2024', 'Renovação', 24000, 'Aceita', NULL),
  ('PROP-H-044', 'L3-055', '01/02/2024', 'Nova Proposta', 42000, 'Aceita', NULL),
  ('PROP-H-045', 'L3-056', '05/04/2026', 'Renovação', 29000, 'Pendente', 'Aguardando definição interna sobre fechamento de filiais'),
  ('PROP-H-046', 'L3-056', '01/04/2022', 'Nova Proposta', 28000, 'Aceita', NULL),
  ('PROP-H-047', 'L3-057', '01/01/2025', 'Renovação', 16000, 'Aceita', NULL);

-- ------------------------------------------------------------
-- Tabela: propostas
-- Fonte: comercialData.ts → propostasAtivas
-- ------------------------------------------------------------
CREATE TABLE propostas (
  id               VARCHAR(20)  NOT NULL,
  lojista_id       VARCHAR(10),
  lojista_nome     VARCHAR(100) NOT NULL,
  unidade          VARCHAR(10)  NOT NULL,
  segmento         ENUM('Moda','Alimentação','Serviços','Eletrônicos','Esportes','Entretenimento','Outros') NOT NULL,
  tipo             ENUM('Nova Instalação','Renovação','Readequação') NOT NULL,
  valor_proposto   DECIMAL(12,2) NOT NULL,
  area_m2          INT          NOT NULL,
  status           ENUM('Pendente','Em Análise','Em Negociação','Aceita','Recusada','Expirada') NOT NULL,
  responsavel      VARCHAR(100) NOT NULL,
  data_criacao     VARCHAR(12)  NOT NULL,
  data_vencimento  VARCHAR(12)  NOT NULL,
  observacoes      TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO propostas VALUES
  ('PROP-2026-001', 'L1-002', 'C&A', 'L1-002', 'Moda', 'Renovação', 66000, 700, 'Em Negociação', 'Gerência Comercial', '10/04/2026', '30/05/2026', 'Proposta de renovação com reajuste de 8% sobre IPCA. Lojista solicita menor percentual de faturamento.'),
  ('PROP-2026-002', NULL, 'Zara Home (Novo)', 'L2-039', 'Outros', 'Nova Instalação', 38000, 90, 'Em Análise', 'Gerência Comercial', '08/04/2026', '15/05/2026', 'Grupo Inditex propõe inaugurar Zara Home na unidade disponível L2-039.'),
  ('PROP-2026-003', 'L3-004', 'Burger King', 'L3-004', 'Alimentação', 'Renovação', 82000, 280, 'Em Negociação', 'Gerência Comercial', '08/04/2026', '05/06/2026', 'BK solicita desconto de 5% alegando retração do setor de fast food.'),
  ('PROP-2026-004', NULL, 'Espaço Gourmet Premium', 'L3-008', 'Alimentação', 'Nova Instalação', 45000, 100, 'Pendente', 'Gerência Comercial', '07/04/2026', '22/05/2026', 'Novo conceito de restaurante premium. Aguardando documentação do licitante.'),
  ('PROP-2026-005', 'L2-033', 'Starbucks Reserve', 'L2-033', 'Alimentação', 'Readequação', 48000, 220, 'Em Negociação', 'Gerência Comercial', '05/04/2026', '25/05/2026', 'Proposta de expansão de 200 para 220m² com novo layout de balcão.'),
  ('PROP-2026-006', NULL, 'Tech World', 'L2-015', 'Eletrônicos', 'Nova Instalação', 52000, 100, 'Em Análise', 'Gerência Comercial', '04/04/2026', '20/05/2026', 'Franquia nacional de acessórios e dispositivos tech.'),
  ('PROP-2026-007', 'L1-007', 'Chilli Beans', 'L1-007', 'Moda', 'Renovação', 20000, 80, 'Em Negociação', 'Gerência Comercial', '01/04/2026', '15/05/2026', 'Reajuste de 11% proposto. Lojista contrapropôs 7%.'),
  ('PROP-2026-008', NULL, 'Academia Forma Perfeita', 'L2-062', 'Serviços', 'Nova Instalação', 35000, 95, 'Pendente', 'Gerência Comercial', '01/04/2026', '10/05/2026', 'Proposta de academia boutique para complementar Smart Fit.'),
  ('PROP-2026-009', 'L1-061', 'Bradesco', 'L1-061', 'Serviços', 'Renovação', 31000, 120, 'Em Análise', 'Gerência Comercial', '02/04/2026', '20/05/2026', 'Banco pede 30 dias para análise interna.'),
  ('PROP-2026-010', 'L3-056', 'Livraria Cultura', 'L3-056', 'Outros', 'Renovação', 29000, 350, 'Pendente', 'Gerência Comercial', '30/03/2026', '10/05/2026', 'Lojista avalia fechamento de unidades. Decisão pendente.'),
  ('PROP-2026-011', NULL, 'Studio Z', 'L1-023', 'Moda', 'Nova Instalação', 24000, 85, 'Em Análise', 'Gerência Comercial', '28/03/2026', '12/05/2026', 'Rede jovem de moda street wear.'),
  ('PROP-2026-012', NULL, 'Healthy Bowl', 'L3-031', 'Alimentação', 'Nova Instalação', 28000, 90, 'Aceita', 'Gerência Comercial', '20/03/2026', '20/04/2026', 'Aceite confirmado. Obras autorizadas para início em 25/04.'),
  ('PROP-2026-013', 'L1-063', 'Claro', 'L1-063', 'Serviços', 'Renovação', 20500, 70, 'Pendente', 'Gerência Comercial', '15/03/2026', '01/05/2026', 'Aguardando retorno da operadora após envio de proposta.'),
  ('PROP-2026-014', NULL, 'Grão Expresso', 'L3-054', 'Alimentação', 'Nova Instalação', 22000, 80, 'Aceita', 'Gerência Comercial', '10/03/2026', '10/04/2026', 'Cafeteria artesanal. Contrato assinado em 15/03.'),
  ('PROP-2026-015', 'L3-002', 'Outback Steakhouse', 'L3-002', 'Alimentação', 'Readequação', 115000, 420, 'Em Negociação', 'Gerência Comercial', '15/04/2026', '15/05/2026', 'Proposta de expansão para 420m² incluindo nova cozinha industrial.'),
  ('PROP-2026-016', NULL, 'Havaianas Flagship', 'L1-047', 'Moda', 'Nova Instalação', 32000, 120, 'Em Análise', 'Gerência Comercial', '12/04/2026', '25/05/2026', 'Proposta de loja flagship premium. Havaianas avaliando layout.'),
  ('PROP-2026-017', NULL, 'Mundo Digital', 'L3-072', 'Outros', 'Nova Instalação', 18000, 85, 'Recusada', 'Gerência Comercial', '01/03/2026', '01/04/2026', 'Perfil comercial inadequado para o posicionamento do mall.'),
  ('PROP-2026-018', 'L1-002', 'C&A (Readequação)', 'L1-002', 'Moda', 'Readequação', 58000, 600, 'Expirada', 'Gerência Comercial', '01/01/2026', '01/03/2026', 'Proposta de redução de área não aceita dentro do prazo.');

-- ------------------------------------------------------------
-- Tabela: sinistros
-- Fonte: store.ts → initialClaims
-- ------------------------------------------------------------
CREATE TABLE sinistros (
  id               VARCHAR(10)  NOT NULL,
  loja             VARCHAR(100) NOT NULL,
  tipo             VARCHAR(80)  NOT NULL,
  severidade       ENUM('Baixa','Média','Alta') NOT NULL,
  status           ENUM('Aberto','Aguardando Regulador','Em Análise','Aprovado','Pago') NOT NULL,
  data             DATE         NOT NULL,
  descricao        TEXT         NOT NULL,
  regulador        VARCHAR(100),
  valor_indenizacao DECIMAL(12,2),
  valor_franquia   DECIMAL(12,2),
  alerta_fraude    TINYINT(1)   NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO sinistros VALUES
  ('SIN-001', 'Loja 104 - Vestuário', 'Vazamento / Infiltração', 'Alta', 'Aberto', '2026-04-06', 'Rompimento de cano na laje superior causando alagamento no estoque da loja.', NULL, NULL, NULL, 0),
  ('SIN-002', 'Loja 210 - Eletrônicos', 'Pico de Energia', 'Média', 'Aguardando Regulador', '2026-04-05', 'Curto circuito no quadro de distribuição, queima de 3 computadores e 1 monitor vitrine.', NULL, NULL, NULL, 1),
  ('SIN-003', 'Praça de Alimentação', 'Incêndio', 'Alta', 'Em Análise', '2026-04-01', 'Princípio de incêndio na coifa do restaurante 05.', 'Carlos Mendes (Susep 1234)', NULL, NULL, 0),
  ('SIN-004', 'Quiosque 12 - Joias', 'Dano Físico / Vandalismo', 'Baixa', 'Pago', '2026-03-25', 'Vidro do expositor trincado durante a madrugada.', 'Ana Souza (Susep 9876)', 4500, 500, 0);
