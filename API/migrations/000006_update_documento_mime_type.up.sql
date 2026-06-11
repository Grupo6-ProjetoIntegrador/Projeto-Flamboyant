-- ============================================================
-- BES-2026 | Migration 000006 — Ajusta documentos para MIME types reais
-- ============================================================

DO $$
DECLARE
    constraint_name text;
BEGIN
    SELECT c.conname
    INTO constraint_name
    FROM pg_constraint c
    JOIN pg_class t ON t.oid = c.conrelid
    JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY (c.conkey)
    WHERE t.relname = 'PropostaDocumento'
      AND a.attname = 'tipo_pd'
      AND c.contype = 'c'
    LIMIT 1;

    IF constraint_name IS NOT NULL THEN
        EXECUTE format('ALTER TABLE "PropostaDocumento" DROP CONSTRAINT %I', constraint_name);
    END IF;
END $$;

ALTER TABLE "PropostaDocumento"
    ALTER COLUMN tipo_pd TYPE VARCHAR(255);