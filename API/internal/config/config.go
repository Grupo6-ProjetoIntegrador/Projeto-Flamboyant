package config

import (
	"log"
	"os"
	"strconv"
	"strings"
	"time"
)

type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
}

type ServerConfig struct {
	Port          string
	Mode          string
	AllowedOrigin string
	Environment   string
	JwtSecret     string
	JwtDuration   time.Duration
}

type DatabaseConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	Name     string
	SSLMode  string
}

func Load() *Config {
	environment := normalizedEnv("ENV", "development")
	jwtSecret := getJWTSecret(environment)
	jwtDuration := getJWTExpirationDuration()

	return &Config{
		Server: ServerConfig{
			// ALTERADO: Render obrigatoriamente usa a variável "PORT"
			Port:          getEnv("PORT", "8080"), 
			Mode:          getEnv("GIN_MODE", defaultGinMode(environment)),
			AllowedOrigin: getEnv("ALLOWED_ORIGIN", ""),
			Environment:   environment,
			JwtSecret:     jwtSecret,
			JwtDuration:   jwtDuration,
		},
		Database: DatabaseConfig{
			Host:     getEnv("DB_HOST", "localhost"),
			Port:     getEnv("DB_PORT", "5432"),
			User:     getEnv("DB_USER", "postgres"),
			Password: getEnv("DB_PASSWORD", "postgres"),
			Name:     getEnv("DB_NAME", "jp-mall"),
			SSLMode:  getEnv("DB_SSLMODE", "disable"),
		},
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

func normalizedEnv(key, fallback string) string {
	return strings.ToLower(strings.TrimSpace(getEnv(key, fallback)))
}

func defaultGinMode(environment string) string {
	if environment == "production" {
		return "release"
	}
	return "debug"
}

func getJWTSecret(environment string) string {
	if environment == "production" {
		if secret := getEnv("JWT_SECRET_PROD", ""); secret != "" {
			return secret
		}
	}

	if secret := getEnv("JWT_SECRET_DEV", ""); secret != "" {
		return secret
	}

	return getEnv("JWT_SECRET", "bes2026-secret-change-in-production")
}

// Duração do JWT otimizada e tolerante a erros para o ambiente de produção
func getJWTExpirationDuration() time.Duration {
	hoursStr := strings.TrimSpace(getEnv("JWT_EXPIRATION_HOURS", ""))
	
	if hoursStr == "" {
		return 24 * time.Hour
	}

	// Tenta ler no formato de duração nativo do Go (ex: "24h", "168h")
	if dur, err := time.ParseDuration(hoursStr); err == nil {
		return dur
	}

	// Se for digitado apenas o número puro (ex: "24"), converte para horas
	if hours, err := strconv.Atoi(hoursStr); err == nil && hours > 0 {
		return time.Duration(hours) * time.Hour
	}

	// ALTERADO: Caso o valor seja inválido, o app NÃO morre mais. 
	// Ele avisa no log e adota o padrão de 24h com segurança.
	log.Printf("Aviso: Valor inválido para JWT_EXPIRATION_HOURS ('%s'). Usando padrão de 24h.", hoursStr)
	return 24 * time.Hour
}