// ============================================================
// routes/routes.go — Registro de todas as rotas da API
// ============================================================
package routes

import (
	"net/http"

	"go-api/internal/config"     // <-- Corrigido usando o nome do módulo
	"go-api/internal/handlers"   // <-- Certifique-se de que está assim
	"go-api/internal/middleware" // <-- Certifique-se de que está assim

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

func Register(r *gin.Engine, db *pgxpool.Pool, cfg config.ServerConfig) {

	authHandler := handlers.NewAuthHandler(db, cfg.JwtSecret, cfg.JwtDuration)
	unidadesHandler := handlers.NewUnidadesHandler(db)
	propostasHandler := handlers.NewPropostasHandler(db)

	// Rotas públicas
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "pong"})
	})

	r.POST("/api/v1/auth/login", authHandler.Login)

	api := r.Group("/api/v1")
	// <-- 2. AJUSTADO: Agora o middleware lê a chave de dentro da struct cfg
	api.Use(middleware.Auth(db, cfg.JwtSecret))
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
		api.PUT("/propostas/:id", propostasHandler.Atualizar)
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
