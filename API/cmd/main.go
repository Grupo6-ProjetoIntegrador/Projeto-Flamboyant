package main

import (
    "context"
    "fmt"
    "log"
    "net/http"
    "os"
    "strings"
	"net/url"

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
	// Tenta usar DATABASE_URL primeiro, limpando parâmetros incompatíveis
	dsn := os.Getenv("DATABASE_URL")
	if dsn != "" {
		// Remove parâmetros que lib/pq não suporta
		dsn = strings.ReplaceAll(dsn, "postgresql://", "postgres://")
		
		// Parse a URL para limpar os parâmetros
		u, err := url.Parse(dsn)
		if err == nil {
			q := u.Query()
			q.Del("channel_binding")
			q.Del("options")
			// Garante sslmode
			if q.Get("sslmode") == "" {
				q.Set("sslmode", "require")
			}
			u.RawQuery = q.Encode()
			dsn = u.String()
		}
	} else {
		dsn = fmt.Sprintf(
			"postgres://%s:%s@%s:%s/%s?sslmode=%s",
			cfg.Database.User, cfg.Database.Password,
			cfg.Database.Host, cfg.Database.Port,
			cfg.Database.Name, cfg.Database.SSLMode,
		)
	}

	log.Printf("Iniciando migrations...")
	m, err := migrate.New("file://migrations", dsn)
	if err != nil {
		log.Fatalf("Falha ao inicializar migrations: %v", err)
	}
	defer m.Close()

	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		log.Fatalf("Falha ao executar migrations: %v", err)
	}
	log.Println("Migrations executadas com sucesso")
}
