ALTER TABLE "Usuario"
  DROP COLUMN IF EXISTS token_ativo_u,
  DROP COLUMN IF EXISTS token_expira_em_u;

DROP INDEX IF EXISTS idx_usuario_token;
