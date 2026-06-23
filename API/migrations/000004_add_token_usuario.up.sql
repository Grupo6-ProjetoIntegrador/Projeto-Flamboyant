ALTER TABLE "Usuario" 
  ADD COLUMN IF NOT EXISTS token_ativo_u     VARCHAR(500),
  ADD COLUMN IF NOT EXISTS token_expira_em_u TIMESTAMP;

CREATE INDEX IF NOT EXISTS idx_usuario_token ON "Usuario"(token_ativo_u);
