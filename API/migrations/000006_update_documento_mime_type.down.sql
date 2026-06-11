-- ============================================================
-- BES-2026 | Migration 000006 DOWN — Restaura restrição antiga de tipo
-- ============================================================

ALTER TABLE "PropostaDocumento"
    ALTER COLUMN tipo_pd TYPE VARCHAR(10);

ALTER TABLE "PropostaDocumento"
    ADD CONSTRAINT "PropostaDocumento_tipo_pd_check"
    CHECK (tipo_pd IN ('PDF', 'DOCX', 'XLSX', 'JPG', 'PNG'));