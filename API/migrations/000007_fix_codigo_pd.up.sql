-- ============================================================
-- BES-2026 | Migration 000007 — Aumenta limite de codigo_pd
-- O campo codigo_pd era VARCHAR(50) mas os codigos gerados
-- podiam exceder esse limite causando erro 500 no upload.
-- ============================================================

ALTER TABLE "PropostaDocumento"
    ALTER COLUMN codigo_pd TYPE VARCHAR(100);
