-- ============================================================
-- BES-2026 | Migration 000005 DOWN — Remove seed de Propostas
-- As tabelas filhas são removidas em cascata (ON DELETE CASCADE).
-- ============================================================

DELETE FROM "Proposta"
WHERE id_usuario_criacao_p = (
    SELECT id_u FROM "Usuario" WHERE email_u = 'admin@flamboyant.com.br'
);
