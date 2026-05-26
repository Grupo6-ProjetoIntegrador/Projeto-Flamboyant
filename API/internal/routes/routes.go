// ============================================================
// routes/routes.go — Registro de todas as rotas da API
// ============================================================
//
// Organização:
//  Rotas públicas (sem middleware):
//    GET  /ping              — health check (usado pelo useApiHealth)
//    POST /api/v1/auth/login — autenticação
//
//  Rotas protegidas (com middleware Auth):
//    Auth:       logout, me
//    Unidades:   listar (GET /unidades), detalhe (GET /unidades/:id)
//    Propostas:  CRUD completo + sub-recursos (historico, loja-anterior,
//                necessidades-tecnicas, cessao-direitos, taxa-transferencia,
//                parecer-comite)
//    Documentos: listar, upload (POST multipart), remover
//
// Handlers implementados: auth, unidades, propostas (parcial)
// Handlers placeholder (retornam 200 OK sem lógica): sub-recursos de
// proposta e documentos — serão implementados nas próximas iterações.
// ============================================================
package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"go-api/internal/handlers"
	"go-api/internal/middleware"
)

func Register(r *gin.Engine, db *pgxpool.Pool, jwtSecret string) {

	authHandler := handlers.NewAuthHandler(db, jwtSecret)
	unidadesHandler := handlers.NewUnidadesHandler(db)
	propostasHandler := handlers.NewPropostasHandler(db)

	// Rotas públicas
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "pong"})
	})

	r.POST("/api/v1/auth/login", authHandler.Login)

	// Rotas protegidas (middleware bypassado no modo protótipo)
	api := r.Group("/api/v1")
	api.Use(middleware.Auth(db, authHandler))
	{
		// Auth
		api.POST("/auth/logout", authHandler.Logout)
		api.GET("/auth/me", authHandler.Me)

		// Unidades
		api.GET("/unidades", unidadesHandler.Listar)
		api.GET("/unidades/:id", unidadesHandler.Detalhe)

		// Propostas
		api.GET("/propostas", propostasHandler.Listar)
		api.GET("/propostas/:id", propostasHandler.Detalhe)
		api.POST("/propostas", propostasHandler.Criar)
		api.PUT("/propostas/:id", propostasHandler.PlaceholderOK)
		api.PATCH("/propostas/:id/status", propostasHandler.AtualizarStatus)
		api.POST("/propostas/check-vencidas", propostasHandler.PlaceholderOK)

		api.GET("/propostas/:id/historico", propostasHandler.Historico)
		api.GET("/propostas/:id/loja-anterior", propostasHandler.PlaceholderOK)
		api.PUT("/propostas/:id/loja-anterior", propostasHandler.PlaceholderOK)
		api.GET("/propostas/:id/necessidades-tecnicas", propostasHandler.PlaceholderOK)
		api.PUT("/propostas/:id/necessidades-tecnicas", propostasHandler.PlaceholderOK)
		api.GET("/propostas/:id/cessao-direitos", propostasHandler.PlaceholderOK)
		api.PUT("/propostas/:id/cessao-direitos", propostasHandler.PlaceholderOK)
		api.GET("/propostas/:id/taxa-transferencia", propostasHandler.PlaceholderOK)
		api.PUT("/propostas/:id/taxa-transferencia", propostasHandler.PlaceholderOK)
		api.GET("/propostas/:id/parecer-comite", propostasHandler.PlaceholderOK)
		api.PUT("/propostas/:id/parecer-comite", propostasHandler.PlaceholderOK)

		// Documentos
		api.GET("/documentos", propostasHandler.PlaceholderList)
		api.POST("/documentos", propostasHandler.PlaceholderOK)
		api.DELETE("/documentos/:id", propostasHandler.PlaceholderOK)
	}
}
