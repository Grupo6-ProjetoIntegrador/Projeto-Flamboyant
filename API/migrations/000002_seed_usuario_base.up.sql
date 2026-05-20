-- ============================================================
-- BES-2026 | Migration 000002 — Usuário base para testes
-- senha: Admin@2026 (bcrypt hash)
-- ============================================================

INSERT INTO "Usuario" (id_u, nome_u, email_u, senha_hash_u, setor_u, criado_em_u)
VALUES (
    gen_random_uuid(),
    'Administrador',
    'admin@flamboyant.com.br',
    '$2b$10$momwkR6nUluFOdiPYY3VxO9NCcoiAABfkEFjCK3Ga6jGPtEN1bDGu',
    'Comercial',
    NOW()
);
