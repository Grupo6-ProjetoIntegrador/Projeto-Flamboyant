-- ============================================================
-- BES-2026 | Migration 000001 — Criação das tabelas
-- ============================================================

-- Extensão para UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- Usuario
-- ============================================================
CREATE TABLE "Usuario" (
    id_u          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_u        VARCHAR(150)  NOT NULL,
    email_u       VARCHAR(200)  NOT NULL UNIQUE,
    senha_hash_u  VARCHAR(255)  NOT NULL,
    setor_u       VARCHAR(100),
    criado_em_u   TIMESTAMP     NOT NULL DEFAULT NOW(),
    token_ativo_u     VARCHAR(500),
    token_expira_em_u TIMESTAMP
);

-- ============================================================
-- Unidade
-- ============================================================
CREATE TABLE "Unidade" (
    id_un         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_un     VARCHAR(20)   NOT NULL UNIQUE,
    piso_un       CHAR(1)       NOT NULL CHECK (piso_un IN ('P','S','T')),
    corredor_un   CHAR(1)       NOT NULL CHECK (corredor_un IN ('A','B','C','D','E')),
    area_un       DECIMAL(10,2) NOT NULL,
    criado_em_un  TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Proposta (inclui campos da aba Loja Proposta)
-- ============================================================
CREATE TABLE "Proposta" (
    id_p                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_unidade_p            UUID          NOT NULL REFERENCES "Unidade"(id_un),
    id_usuario_criacao_p    UUID          NOT NULL REFERENCES "Usuario"(id_u),
    id_usuario_ultima_alt_p UUID          REFERENCES "Usuario"(id_u),
    id_usuario_responsavel_p UUID         REFERENCES "Usuario"(id_u),
    segmento_p              VARCHAR(100)  NOT NULL,
    tipo_operacao_p         VARCHAR(50)   NOT NULL,
    valor_proposto_p        DECIMAL(15,2) NOT NULL,
    area_p                  DECIMAL(10,2) NOT NULL,
    abl_p                   DECIMAL(10,2),
    status_p                VARCHAR(60)   NOT NULL DEFAULT 'Aguardando análise financeira',
    data_criacao_p          DATE          NOT NULL DEFAULT CURRENT_DATE,
    data_vencimento_p       DATE,
    nome_fantasia_p         VARCHAR(200),
    aluguel_percent_p       DECIMAL(10,2),
    prazo_locacao_meses_p   INTEGER,
    aluguel_por_m2_p        DECIMAL(10,2),
    condominio_aprox_p      DECIMAL(10,2),
    fpp_aprox_p             DECIMAL(10,2),
    inicio_contrato_p       DATE,
    fim_contrato_p          DATE,
    data_inauguracao_p      DATE,
    observacoes_p           TEXT,
    atualizado_em_p         TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- PropostaLojaAnterior (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaLojaAnterior" (
    id_proposta_pla       UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    nome_fantasia_pla     VARCHAR(200),
    segmento_pla          VARCHAR(100),
    tipo_operacao_pla     VARCHAR(50),
    cto_pla               DECIMAL(15,2),
    abl_pla               DECIMAL(10,2),
    amm_pla               DECIMAL(10,2),
    divida_amm_pla        DECIMAL(15,2),
    divida_negociada_pla  DECIMAL(15,2),
    divida_condominio_pla DECIMAL(15,2),
    divida_fpp_pla        DECIMAL(15,2),
    forma_pagamento_pla   VARCHAR(100)
);

-- ============================================================
-- PropostaNecessidadesTecnicas (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaNecessidadesTecnicas" (
    id_proposta_pnt              UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    -- Elétrica
    demanda_eletrica_kva_pnt     DECIMAL(8,2),
    tensao_necessaria_pnt        VARCHAR(20),
    circuitos_especiais_pnt      BOOLEAN DEFAULT FALSE,
    obs_eletrica_pnt             TEXT,
    -- Hidráulica
    ponto_agua_pnt               BOOLEAN DEFAULT FALSE,
    quantidade_pontos_agua_pnt   INTEGER,
    ponto_esgoto_pnt             BOOLEAN DEFAULT FALSE,
    vazao_necessaria_lmin_pnt    DECIMAL(8,2),
    caixa_gordura_pnt            BOOLEAN DEFAULT FALSE,
    obs_hidraulica_pnt           TEXT,
    -- Gás
    necessita_gas_pnt            BOOLEAN DEFAULT FALSE,
    tipo_gas_pnt                 VARCHAR(20),
    consumo_gas_m3h_pnt          DECIMAL(8,2),
    obs_gas_pnt                  TEXT,
    -- Ventilação e Exaustão
    necessita_exaustao_pnt       BOOLEAN DEFAULT FALSE,
    vazao_exaustao_m3h_pnt       DECIMAL(10,2),
    necessita_make_up_ar_pnt     BOOLEAN DEFAULT FALSE,
    obs_ventilacao_pnt           TEXT,
    -- Estrutura
    area_minima_m2_pnt           DECIMAL(8,2),
    area_maxima_m2_pnt           DECIMAL(8,2),
    pe_direito_minimo_m_pnt      DECIMAL(5,2),
    carga_piso_kgm2_pnt          DECIMAL(8,2),
    necessita_mezanino_pnt       BOOLEAN DEFAULT FALSE,
    obs_estrutura_pnt            TEXT,
    -- Fachada e Visual
    frente_minima_m_pnt          DECIMAL(6,2),
    tipo_fachada_pnt             VARCHAR(20),
    comunicacao_visual_led_pnt   BOOLEAN DEFAULT FALSE,
    obs_fachada_pnt              TEXT,
    -- TI e Telecom
    pontos_dados_pnt             INTEGER,
    necessita_fibra_pnt          BOOLEAN DEFAULT FALSE,
    obs_telecom_pnt              TEXT,
    -- Controle
    status_pnt                   VARCHAR(30) DEFAULT 'Rascunho',
    id_usuario_responsavel_pnt   UUID REFERENCES "Usuario"(id_u),
    criado_em_pnt                TIMESTAMP NOT NULL DEFAULT NOW(),
    atualizado_em_pnt            TIMESTAMP
);

-- ============================================================
-- PropostaCessaoDireitos (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaCessaoDireitos" (
    id_proposta_pcd              UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    res_sperata_proposta_pcd     DECIMAL(15,2),
    referencia_mercado_por_m2_pcd DECIMAL(10,2),
    sinal_res_sperata_pcd        DECIMAL(15,2),
    forma_pagamento_saldo_pcd    VARCHAR(100),
    num_parcelas_pcd             INTEGER,
    status_res_sperata_pcd       VARCHAR(50),
    observacoes_pcd              TEXT
);

-- ============================================================
-- PropostaTaxaTransferencia (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaTaxaTransferencia" (
    id_proposta_ptt        UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    tt_contratual_ptt      DECIMAL(15,2),
    tt_proposta_ptt        DECIMAL(15,2),
    tt_proposta_num_amm_ptt DECIMAL(10,2),
    sinal_tt_ptt           DECIMAL(15,2),
    forma_pagamento_tt_ptt VARCHAR(100),
    justificativa_tt_ptt   TEXT,
    status_tt_ptt          VARCHAR(50)
);

-- ============================================================
-- PropostaParecerComite (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaParecerComite" (
    id_proposta_ppc              UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    presidente_ppc               BOOLEAN DEFAULT FALSE,
    presidente_data_ppc          DATE,
    diretoria_comp1_ppc          BOOLEAN DEFAULT FALSE,
    diretoria_comp1_data_ppc     DATE,
    diretoria_comp2_ppc          BOOLEAN DEFAULT FALSE,
    diretoria_comp2_data_ppc     DATE,
    superintendente_ppc          BOOLEAN DEFAULT FALSE,
    superintendente_data_ppc     DATE,
    in_networking_ppc            BOOLEAN DEFAULT FALSE,
    in_networking_data_ppc       DATE
);

-- ============================================================
-- PropostaDocumento (N:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaDocumento" (
    id_pd           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_proposta_pd  UUID          NOT NULL REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    id_usuario_pd   UUID          NOT NULL REFERENCES "Usuario"(id_u),
    codigo_pd       VARCHAR(50)   NOT NULL UNIQUE,
    nome_original_pd VARCHAR(255) NOT NULL,
    tipo_pd         VARCHAR(10)   NOT NULL CHECK (tipo_pd IN ('PDF','DOCX','XLSX','JPG','PNG')),
    tamanho_pd      VARCHAR(20)   NOT NULL,
    url_storage_pd  VARCHAR(500),
    data_upload_pd  TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- PropostaHistorico — espelha os campos da tabela Proposta no
-- momento da edição. Sem FK para Unidade (codigo armazenado como
-- texto). Vinculado somente à Proposta.
-- ============================================================
CREATE TABLE "PropostaHistorico" (
    id_ph                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_proposta_ph           UUID          NOT NULL REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    id_usuario_ph            UUID          NOT NULL REFERENCES "Usuario"(id_u),
    editado_em_ph            TIMESTAMP     NOT NULL DEFAULT NOW(),

    -- Mesmos campos de Proposta (codigo_unidade como texto — sem FK)
    codigo_unidade_ph        VARCHAR(20),
    segmento_ph              VARCHAR(100),
    tipo_operacao_ph         VARCHAR(50),
    valor_proposto_ph        DECIMAL(15,2),
    area_ph                  DECIMAL(10,2),
    abl_ph                   DECIMAL(10,2),
    status_ph                VARCHAR(60),
    data_criacao_ph          DATE,
    data_vencimento_ph       DATE,
    nome_fantasia_ph         VARCHAR(200),
    aluguel_percent_ph       DECIMAL(10,2),
    prazo_locacao_meses_ph   INTEGER,
    aluguel_por_m2_ph        DECIMAL(10,2),
    condominio_aprox_ph      DECIMAL(10,2),
    fpp_aprox_ph             DECIMAL(10,2),
    inicio_contrato_ph       DATE,
    fim_contrato_ph          DATE,
    data_inauguracao_ph      DATE,
    observacoes_ph           TEXT,
    atualizado_em_snapshot_ph TIMESTAMP
);

-- ============================================================
-- Tabelas de Histórico (1:1 com PropostaHistorico)
-- ============================================================

CREATE TABLE "PropostaLojaAnteriorHistorico" (
    id_historico_plah       UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    nome_fantasia_plah      VARCHAR(200),
    segmento_plah           VARCHAR(100),
    tipo_operacao_plah      VARCHAR(50),
    cto_plah                DECIMAL(15,2),
    abl_plah                DECIMAL(10,2),
    amm_plah                DECIMAL(10,2),
    divida_amm_plah         DECIMAL(15,2),
    divida_negociada_plah   DECIMAL(15,2),
    divida_condominio_plah  DECIMAL(15,2),
    divida_fpp_plah         DECIMAL(15,2),
    forma_pagamento_plah    VARCHAR(100)
);

CREATE TABLE "PropostaNecessidadesTecnicasHistorico" (
    id_historico_pnth              UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    demanda_eletrica_kva_pnth      DECIMAL(8,2),
    tensao_necessaria_pnth         VARCHAR(20),
    circuitos_especiais_pnth       BOOLEAN DEFAULT FALSE,
    obs_eletrica_pnth              TEXT,
    ponto_agua_pnth                BOOLEAN DEFAULT FALSE,
    quantidade_pontos_agua_pnth    INTEGER,
    ponto_esgoto_pnth              BOOLEAN DEFAULT FALSE,
    vazao_necessaria_lmin_pnth     DECIMAL(8,2),
    caixa_gordura_pnth             BOOLEAN DEFAULT FALSE,
    obs_hidraulica_pnth            TEXT,
    necessita_gas_pnth             BOOLEAN DEFAULT FALSE,
    tipo_gas_pnth                  VARCHAR(20),
    consumo_gas_m3h_pnth           DECIMAL(8,2),
    obs_gas_pnth                   TEXT,
    necessita_exaustao_pnth        BOOLEAN DEFAULT FALSE,
    vazao_exaustao_m3h_pnth        DECIMAL(10,2),
    necessita_make_up_ar_pnth      BOOLEAN DEFAULT FALSE,
    obs_ventilacao_pnth            TEXT,
    area_minima_m2_pnth            DECIMAL(8,2),
    area_maxima_m2_pnth            DECIMAL(8,2),
    pe_direito_minimo_m_pnth       DECIMAL(5,2),
    carga_piso_kgm2_pnth           DECIMAL(8,2),
    necessita_mezanino_pnth        BOOLEAN DEFAULT FALSE,
    obs_estrutura_pnth             TEXT,
    frente_minima_m_pnth           DECIMAL(6,2),
    tipo_fachada_pnth              VARCHAR(20),
    comunicacao_visual_led_pnth    BOOLEAN DEFAULT FALSE,
    obs_fachada_pnth               TEXT,
    pontos_dados_pnth              INTEGER,
    necessita_fibra_pnth           BOOLEAN DEFAULT FALSE,
    obs_telecom_pnth               TEXT,
    status_pnth                    VARCHAR(30),
    id_usuario_responsavel_pnth    UUID REFERENCES "Usuario"(id_u),
    criado_em_pnth                 TIMESTAMP,
    atualizado_em_pnth             TIMESTAMP
);

CREATE TABLE "PropostaCessaoDireitosHistorico" (
    id_historico_pcdh              UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    res_sperata_proposta_pcdh      DECIMAL(15,2),
    referencia_mercado_por_m2_pcdh DECIMAL(10,2),
    sinal_res_sperata_pcdh         DECIMAL(15,2),
    forma_pagamento_saldo_pcdh     VARCHAR(100),
    num_parcelas_pcdh              INTEGER,
    status_res_sperata_pcdh        VARCHAR(50),
    observacoes_pcdh               TEXT
);

CREATE TABLE "PropostaTaxaTransferenciaHistorico" (
    id_historico_ptth          UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    tt_contratual_ptth         DECIMAL(15,2),
    tt_proposta_ptth           DECIMAL(15,2),
    tt_proposta_num_amm_ptth   DECIMAL(10,2),
    sinal_tt_ptth              DECIMAL(15,2),
    forma_pagamento_tt_ptth    VARCHAR(100),
    justificativa_tt_ptth      TEXT,
    status_tt_ptth             VARCHAR(50)
);

CREATE TABLE "PropostaParecerComiteHistorico" (
    id_historico_ppch              UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    presidente_ppch                BOOLEAN DEFAULT FALSE,
    presidente_data_ppch           DATE,
    diretoria_comp1_ppch           BOOLEAN DEFAULT FALSE,
    diretoria_comp1_data_ppch      DATE,
    diretoria_comp2_ppch           BOOLEAN DEFAULT FALSE,
    diretoria_comp2_data_ppch      DATE,
    superintendente_ppch           BOOLEAN DEFAULT FALSE,
    superintendente_data_ppch      DATE,
    in_networking_ppch             BOOLEAN DEFAULT FALSE,
    in_networking_data_ppch        DATE
);

-- ============================================================
-- Índices para performance
-- ============================================================
CREATE INDEX idx_proposta_unidade    ON "Proposta"(id_unidade_p);
CREATE INDEX idx_proposta_status     ON "Proposta"(status_p);
CREATE INDEX idx_proposta_criacao    ON "Proposta"(data_criacao_p);
CREATE INDEX idx_historico_proposta  ON "PropostaHistorico"(id_proposta_ph);
CREATE INDEX idx_documento_proposta  ON "PropostaDocumento"(id_proposta_pd);
