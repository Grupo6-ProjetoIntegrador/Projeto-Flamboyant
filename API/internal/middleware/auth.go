// ============================================================
// middleware/auth.go — Middleware de autenticação HTTP (MODO PROTÓTIPO)
// ============================================================
//
// MODO PROTÓTIPO: validação de token JWT completamente desabilitada.
// O middleware injeta um usuário fixo no contexto Gin para que os
// handlers possam chamar c.GetString("user_id") sem erro.
//
// Para produção:
//  1. Extrair o header "Authorization: Bearer <token>"
//  2. Validar a assinatura JWT com JWT_SECRET do .env
//  3. Verificar se o token bate com token_ativo_u no banco (sessão única)
//  4. Verificar se token_expira_em_u não passou
//  5. Injetar user_id, user_email, user_nome, user_setor no contexto
//  6. Retornar 401 se qualquer verificação falhar
// ============================================================
package middleware

import (
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"go-api/internal/handlers"
)

// Auth — MODO PROTÓTIPO: middleware desabilitado, todas as rotas são públicas
func Auth(db *pgxpool.Pool, authHandler *handlers.AuthHandler) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Injetar usuário fixo de protótipo no contexto
		c.Set("user_id", "proto-001")
		c.Set("user_email", "admin@flamboyant.com.br")
		c.Set("user_nome", "Administrador")
		c.Set("user_setor", "Comercial")
		c.Next()
	}
}
