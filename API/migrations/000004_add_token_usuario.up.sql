ALTER TABLE "Usuario"
  ADD COLUMN token_ativo_u     VARCHAR(500),
  ADD COLUMN token_expira_em_u TIMESTAMP;

CREATE INDEX idx_usuario_token ON "Usuario"(token_ativo_u);
