package main

import (
	"context"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"

	"go-api/internal/config"
	"go-api/internal/database"
	"go-api/internal/routes"
)

func main() {
	log.Println("=== APLICAÇÃO INICIANDO NO RENDER ===")
	cfg := config.Load()
	gin.SetMode(cfg.Server.Mode)

	db, err := database.Connect(&cfg.Database)
	if err != nil {
		log.Fatalf("Falha ao conectar ao banco de dados: %v", err)
	}
	defer database.Close()

	runMigrations(cfg)

	r := gin.Default()

	// Montar lista de origens ignorando strings vazias
	allowedOrigins := []string{
		"http://localhost:5173",
		"http://localhost:4173",
		"http://localhost",
	}
	if cfg.Server.AllowedOrigin != "" {
		allowedOrigins = append(allowedOrigins, cfg.Server.AllowedOrigin)
	}

	r.Use(cors.New(cors.Config{
		AllowOrigins:     allowedOrigins,
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	routes.Register(r, db, cfg.Server)

	r.GET("/health", func(c *gin.Context) {
		if err := db.Ping(context.Background()); err != nil {
			c.JSON(http.StatusServiceUnavailable, gin.H{"status": "error", "database": "desconectado"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"status": "ok", "database": "conectado"})
	})

	log.Printf("Servidor iniciando na porta %s", cfg.Server.Port)
	if err := r.Run(":" + cfg.Server.Port); err != nil {
		log.Fatalf("Falha ao iniciar servidor: %v", err)
	}
}

func runMigrations(cfg *config.Config) {
    dsn := os.Getenv("DATABASE_URL")
    if dsn == "" {
        dsn = fmt.Sprintf(
            "postgres://%s:%s@%s:%s/%s?sslmode=%s",
            cfg.Database.User, cfg.Database.Password,
            cfg.Database.Host, cfg.Database.Port,
            cfg.Database.Name, cfg.Database.SSLMode,
        )
    }

    // Remove channel_binding que o golang-migrate não suporta
    dsn = strings.ReplaceAll(dsn, "&channel_binding=require", "")
    dsn = strings.ReplaceAll(dsn, "channel_binding=require&", "")
    dsn = strings.ReplaceAll(dsn, "?channel_binding=require", "")

    // golang-migrate exige prefixo "postgres://", não "postgresql://"
    dsn = strings.ReplaceAll(dsn, "postgresql://", "postgres://")

    m, err := migrate.New("file://migrations", dsn)
    // ...
}
