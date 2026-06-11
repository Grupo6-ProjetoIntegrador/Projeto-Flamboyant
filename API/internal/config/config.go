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
			Port:          getEnv("SERVER_PORT", "8080"),
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

// getJWTExpirationDuration lê JWT_EXPIRATION_HOURS e retorna como time.Duration
// Padrão: 24 horas se não especificado
func getJWTExpirationDuration() time.Duration {
	hoursStr := strings.TrimSpace(getEnv("JWT_EXPIRATION_HOURS", ""))
	
	// Se vazio, usa padrão de 24 horas
	if hoursStr == "" {
		return 24 * time.Hour
	}

	// Tenta converter para inteiro
	hours, err := strconv.Atoi(hoursStr)
	if err != nil {
		log.Fatalf("Erro crítico: JWT_EXPIRATION_HOURS deve ser um número inteiro (horas), recebido '%s': %v", hoursStr, err)
	}

	if hours <= 0 {
		log.Fatalf("Erro crítico: JWT_EXPIRATION_HOURS deve ser maior que 0, recebido '%d'", hours)
	}

	return time.Duration(hours) * time.Hour
}