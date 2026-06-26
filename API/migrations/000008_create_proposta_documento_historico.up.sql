-- ============================================================
-- BES-2026 | Migration 000008 — Auditoria de documentos
-- ============================================================

CREATE TABLE IF NOT EXISTS "PropostaDocumentoHistorico" (
    id_pdh             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_documento_pdh   UUID,
    id_proposta_pdh    UUID          NOT NULL REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    id_historico_pdh   UUID          REFERENCES "PropostaHistorico"(id_ph) ON DELETE SET NULL,
    id_usuario_pdh     UUID          NOT NULL REFERENCES "Usuario"(id_u),
    codigo_pdh         VARCHAR(100)  NOT NULL,
    nome_original_pdh  VARCHAR(255)  NOT NULL,
    tipo_pdh           VARCHAR(255)  NOT NULL,
    tamanho_pdh        VARCHAR(20)   NOT NULL,
    url_storage_pdh    VARCHAR(500),
    data_upload_pdh    TIMESTAMP,
    acao_pdh           VARCHAR(20)   NOT NULL DEFAULT 'EXCLUSAO',
    excluido_em_pdh    TIMESTAMP     NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_documento_historico_proposta
    ON "PropostaDocumentoHistorico"(id_proposta_pdh);

CREATE INDEX IF NOT EXISTS idx_documento_historico_documento
    ON "PropostaDocumentoHistorico"(id_documento_pdh);
