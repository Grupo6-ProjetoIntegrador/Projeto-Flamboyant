This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
ajustar entidades via migration.ps1
API/cmd/main.go
API/go.mod
API/internal/config/config.go
API/internal/database/database.go
API/internal/entities/doc.go
API/internal/entities/proposta_cessao_direitos_historico.go
API/internal/entities/proposta_cessao_direitos.go
API/internal/entities/proposta_documento_historico.go
API/internal/entities/proposta_documento.go
API/internal/entities/proposta_historico.go
API/internal/entities/proposta_loja_anterior_historico.go
API/internal/entities/proposta_loja_anterior.go
API/internal/entities/proposta_necessidades_tecnicas_historico.go
API/internal/entities/proposta_necessidades_tecnicas.go
API/internal/entities/proposta_parecer_comite_historico.go
API/internal/entities/proposta_parecer_comite.go
API/internal/entities/proposta_taxa_transferencia_historico.go
API/internal/entities/proposta_taxa_transferencia.go
API/internal/entities/proposta.go
API/internal/entities/responses.go
API/internal/entities/unidade.go
API/internal/entities/usuario.go
API/internal/handlers/auth.go
API/internal/handlers/propostas.go
API/internal/handlers/unidades.go
API/internal/middleware/auth.go
API/internal/routes/routes.go
API/migrations/000001_create_tables.down.sql
API/migrations/000001_create_tables.up.sql
API/migrations/000002_seed_usuario_base.down.sql
API/migrations/000002_seed_usuario_base.up.sql
API/migrations/000003_seed_unidades.down.sql
API/migrations/000003_seed_unidades.up.sql
API/migrations/000004_add_token_usuario.down.sql
API/migrations/000004_add_token_usuario.up.sql
codegen/generate.go
codegen/generate.ps1
codegen/go.mod
COMO_RODAR_O_PROJETO.txt
COMO_USAR_DEBUG.txt
debug.ps1
entities/doc.go
entities/index.ts
entities/proposta_cessao_direitos_historico.go
entities/proposta_cessao_direitos_historico.ts
entities/proposta_cessao_direitos.go
entities/proposta_cessao_direitos.ts
entities/proposta_documento_historico.go
entities/proposta_documento_historico.ts
entities/proposta_documento.go
entities/proposta_documento.ts
entities/proposta_historico.go
entities/proposta_historico.ts
entities/proposta_loja_anterior_historico.go
entities/proposta_loja_anterior_historico.ts
entities/proposta_loja_anterior.go
entities/proposta_loja_anterior.ts
entities/proposta_necessidades_tecnicas_historico.go
entities/proposta_necessidades_tecnicas_historico.ts
entities/proposta_necessidades_tecnicas.go
entities/proposta_necessidades_tecnicas.ts
entities/proposta_parecer_comite_historico.go
entities/proposta_parecer_comite_historico.ts
entities/proposta_parecer_comite.go
entities/proposta_parecer_comite.ts
entities/proposta_taxa_transferencia_historico.go
entities/proposta_taxa_transferencia_historico.ts
entities/proposta_taxa_transferencia.go
entities/proposta_taxa_transferencia.ts
entities/proposta.go
entities/proposta.ts
entities/unidade.go
entities/unidade.ts
entities/usuario.go
entities/usuario.ts
Figma/ATTRIBUTIONS.md
Figma/default_shadcn_theme.css
Figma/guidelines/Guidelines.md
Figma/index.html
Figma/package.json
Figma/pnpm-workspace.yaml
Figma/postcss.config.mjs
Figma/README.md
Figma/src/app/App.tsx
Figma/src/app/AuthContext.tsx
Figma/src/app/components/ConfirmModal.tsx
Figma/src/app/components/DataCard.tsx
Figma/src/app/components/DataTable.tsx
Figma/src/app/components/DatePickerInput.tsx
Figma/src/app/components/DisponibilidadeManutencaoModal.tsx
Figma/src/app/components/EnumCheckboxFilter.tsx
Figma/src/app/components/Layout.tsx
Figma/src/app/components/MobileCarousel.tsx
Figma/src/app/components/PropostaManutencaoModal.tsx
Figma/src/app/components/StatusBadge.tsx
Figma/src/app/components/ui/accordion.tsx
Figma/src/app/components/ui/alert-dialog.tsx
Figma/src/app/components/ui/alert.tsx
Figma/src/app/components/ui/aspect-ratio.tsx
Figma/src/app/components/ui/avatar.tsx
Figma/src/app/components/ui/badge.tsx
Figma/src/app/components/ui/breadcrumb.tsx
Figma/src/app/components/ui/button.tsx
Figma/src/app/components/ui/calendar.tsx
Figma/src/app/components/ui/card.tsx
Figma/src/app/components/ui/carousel.tsx
Figma/src/app/components/ui/chart.tsx
Figma/src/app/components/ui/checkbox.tsx
Figma/src/app/components/ui/collapsible.tsx
Figma/src/app/components/ui/command.tsx
Figma/src/app/components/ui/context-menu.tsx
Figma/src/app/components/ui/dialog.tsx
Figma/src/app/components/ui/drawer.tsx
Figma/src/app/components/ui/dropdown-menu.tsx
Figma/src/app/components/ui/form.tsx
Figma/src/app/components/ui/hover-card.tsx
Figma/src/app/components/ui/input-otp.tsx
Figma/src/app/components/ui/input.tsx
Figma/src/app/components/ui/label.tsx
Figma/src/app/components/ui/menubar.tsx
Figma/src/app/components/ui/navigation-menu.tsx
Figma/src/app/components/ui/pagination.tsx
Figma/src/app/components/ui/popover.tsx
Figma/src/app/components/ui/progress.tsx
Figma/src/app/components/ui/radio-group.tsx
Figma/src/app/components/ui/resizable.tsx
Figma/src/app/components/ui/scroll-area.tsx
Figma/src/app/components/ui/select.tsx
Figma/src/app/components/ui/separator.tsx
Figma/src/app/components/ui/sheet.tsx
Figma/src/app/components/ui/sidebar.tsx
Figma/src/app/components/ui/skeleton.tsx
Figma/src/app/components/ui/slider.tsx
Figma/src/app/components/ui/sonner.tsx
Figma/src/app/components/ui/switch.tsx
Figma/src/app/components/ui/table.tsx
Figma/src/app/components/ui/tabs.tsx
Figma/src/app/components/ui/textarea.tsx
Figma/src/app/components/ui/toggle-group.tsx
Figma/src/app/components/ui/toggle.tsx
Figma/src/app/components/ui/tooltip.tsx
Figma/src/app/components/ui/use-mobile.ts
Figma/src/app/components/ui/utils.ts
Figma/src/app/data/apiClient.ts
Figma/src/app/data/comercialData.ts
Figma/src/app/data/comercialStore.ts
Figma/src/app/data/useApi.ts
Figma/src/app/data/useApiHealth.ts
Figma/src/app/entities/index.ts
Figma/src/app/entities/proposta_cessao_direitos_historico.ts
Figma/src/app/entities/proposta_cessao_direitos.ts
Figma/src/app/entities/proposta_documento_historico.ts
Figma/src/app/entities/proposta_documento.ts
Figma/src/app/entities/proposta_historico.ts
Figma/src/app/entities/proposta_loja_anterior_historico.ts
Figma/src/app/entities/proposta_loja_anterior.ts
Figma/src/app/entities/proposta_necessidades_tecnicas_historico.ts
Figma/src/app/entities/proposta_necessidades_tecnicas.ts
Figma/src/app/entities/proposta_parecer_comite_historico.ts
Figma/src/app/entities/proposta_parecer_comite.ts
Figma/src/app/entities/proposta_taxa_transferencia_historico.ts
Figma/src/app/entities/proposta_taxa_transferencia.ts
Figma/src/app/entities/proposta.ts
Figma/src/app/entities/unidade.ts
Figma/src/app/entities/usuario.ts
Figma/src/app/enums/index.ts
Figma/src/app/pages/comercial/ComercialAvailability.tsx
Figma/src/app/pages/comercial/ComercialDashboard.tsx
Figma/src/app/pages/comercial/ComercialProposals.tsx
Figma/src/app/pages/comercial/ComercialReports.tsx
Figma/src/app/pages/Login.tsx
Figma/src/app/PrivateRoute.tsx
Figma/src/app/routes.tsx
Figma/src/app/services/index.ts
Figma/src/app/services/propostas.service.ts
Figma/src/app/services/unidades.service.ts
Figma/src/app/shared/hooks/index.ts
Figma/src/app/shared/hooks/usePersistedState.ts
Figma/src/app/shared/utils/filters.ts
Figma/src/app/shared/utils/index.ts
Figma/src/app/viewmodels/index.ts
Figma/src/app/viewmodels/useComercialAvailability.ts
Figma/src/app/viewmodels/useComercialDashboard.ts
Figma/src/app/viewmodels/useComercialProposals.ts
Figma/src/app/viewmodels/useComercialReports.ts
Figma/src/assets/b02a990bf2c2da1561fd2f42223c5d2ce71ec09a.png
Figma/src/assets/d529125559904c2ba18f90969ebcb78021da0611.png
Figma/src/assets/isotipo_flamboyant.webp
Figma/src/main.tsx
Figma/src/styles/fonts.css
Figma/src/styles/globals.css
Figma/src/styles/index.css
Figma/src/styles/tailwind.css
Figma/src/styles/theme.css
Figma/src/vite-env.d.ts
Figma/tsconfig.json
Figma/vite.config.ts
postman/collections/Projeto-Flamboyant/.resources/definition.yaml
postman/collections/Projeto-Flamboyant/Auth/Login.request.yaml
postman/collections/Projeto-Flamboyant/Auth/Logout.request.yaml
postman/collections/Projeto-Flamboyant/Auth/Me.request.yaml
postman/collections/Projeto-Flamboyant/Documentos/Listar Documentos.request.yaml
postman/collections/Projeto-Flamboyant/Documentos/Remover Documento.request.yaml
postman/collections/Projeto-Flamboyant/Documentos/Upload Documento.request.yaml
postman/collections/Projeto-Flamboyant/Health/Ping.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Atualizar Proposta.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Atualizar Status.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Cessao de Direitos/Detalhe Cessao de Direitos.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Cessao de Direitos/Salvar Cessao de Direitos.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Check Vencidas.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Criar Proposta.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Detalhe Proposta.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Historico/Listar Historico.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Listar Propostas.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Loja Anterior/Detalhe Loja Anterior.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Loja Anterior/Salvar Loja Anterior.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Necessidades Tecnicas/Detalhe Necessidades Tecnicas.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Necessidades Tecnicas/Salvar Necessidades Tecnicas.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Parecer do Comite/Detalhe Parecer do Comite.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Parecer do Comite/Salvar Parecer do Comite.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Taxa de Transferencia/Detalhe Taxa de Transferencia.request.yaml
postman/collections/Projeto-Flamboyant/Propostas/Taxa de Transferencia/Salvar Taxa de Transferencia.request.yaml
postman/collections/Projeto-Flamboyant/Unidades/Detalhe Unidade.request.yaml
postman/collections/Projeto-Flamboyant/Unidades/Listar Unidades.request.yaml
README.md
start.ps1
```

# Files

## File: ajustar entidades via migration.ps1
````powershell
# ============================================================
# ajustar entidades via migration.ps1
# Regenera todas as entidades a partir das migrations SQL.
#
# Uso: rodar na raiz do projeto (Projeto-Flamboyant/)
# ============================================================

$Root = $PSScriptRoot

Write-Host ""
Write-Host "Atualizando entidades a partir das migrations..." -ForegroundColor Cyan
Write-Host "Raiz: $Root" -ForegroundColor Gray
Write-Host ""

Set-Location -Path "$Root\codegen"
go run generate.go $Root

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Entidades atualizadas com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Arquivos gerados:" -ForegroundColor Gray
    Write-Host "  $Root\entities\*.go e *.ts" -ForegroundColor Gray
    Write-Host "  $Root\API\internal\entities\*.go" -ForegroundColor Gray
    Write-Host "  $Root\Figma\src\app\entities\*.ts" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Erro ao atualizar entidades." -ForegroundColor Red
    Write-Host "Verifique se o Go esta instalado e a pasta migrations/ existe." -ForegroundColor Red
    exit 1
}
````

## File: API/internal/config/config.go
````go
package config

import "os"

type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
}

type ServerConfig struct {
	Port          string
	Mode          string
	AllowedOrigin string
	JwtSecret     string
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
	return &Config{
		Server: ServerConfig{
			Port:          getEnv("SERVER_PORT", "8080"),
			Mode:          getEnv("GIN_MODE", "debug"),
			AllowedOrigin: getEnv("ALLOWED_ORIGIN", ""),
			JwtSecret:     getEnv("JWT_SECRET", "bes2026-secret-change-in-production"),
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
````

## File: API/internal/database/database.go
````go
package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"go-api/internal/config"
)

var DB *pgxpool.Pool

func Connect(cfg *config.DatabaseConfig) (*pgxpool.Pool, error) {
	if err := ensureDatabaseExists(cfg); err != nil {
		return nil, err
	}

	dsn := buildDSN(cfg, cfg.Name)

	poolConfig, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return nil, fmt.Errorf("erro ao parsear config do banco: %w", err)
	}

	poolConfig.MaxConns = 10
	poolConfig.MinConns = 2
	poolConfig.MaxConnLifetime = time.Hour
	poolConfig.MaxConnIdleTime = 30 * time.Minute
	poolConfig.HealthCheckPeriod = time.Minute

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	pool, err := pgxpool.NewWithConfig(ctx, poolConfig)
	if err != nil {
		return nil, fmt.Errorf("erro ao criar pool de conexoes: %w", err)
	}

	if err := pool.Ping(ctx); err != nil {
		return nil, fmt.Errorf("erro ao conectar ao banco de dados: %w", err)
	}

	log.Println("Conectado ao PostgreSQL com sucesso")
	DB = pool
	return pool, nil
}

func ensureDatabaseExists(cfg *config.DatabaseConfig) error {
	dsn := buildDSN(cfg, "postgres")

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	conn, err := pgxpool.New(ctx, dsn)
	if err != nil {
		return fmt.Errorf("erro ao conectar ao postgres para verificar banco: %w", err)
	}
	defer conn.Close()

	var exists bool
	err = conn.QueryRow(ctx,
		"SELECT EXISTS(SELECT 1 FROM pg_database WHERE datname = $1)",
		cfg.Name,
	).Scan(&exists)
	if err != nil {
		return fmt.Errorf("erro ao verificar existencia do banco: %w", err)
	}

	if !exists {
		log.Printf("Banco '%s' nao encontrado — criando...", cfg.Name)
		_, err = conn.Exec(ctx, fmt.Sprintf(`CREATE DATABASE "%s"`, cfg.Name))
		if err != nil {
			return fmt.Errorf("erro ao criar banco '%s': %w", cfg.Name, err)
		}
		log.Printf("Banco '%s' criado com sucesso", cfg.Name)
	} else {
		log.Printf("Banco '%s' encontrado", cfg.Name)
	}

	return nil
}

func buildDSN(cfg *config.DatabaseConfig, dbName string) string {
	return fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		cfg.Host, cfg.Port, cfg.User, cfg.Password, dbName, cfg.SSLMode,
	)
}

func Close() {
	if DB != nil {
		DB.Close()
		log.Println("Conexao com PostgreSQL encerrada")
	}
}
````

## File: API/internal/entities/doc.go
````go
// Package entities contém as structs geradas a partir das migrations do banco de dados.
// NÃO EDITE estes arquivos manualmente — use o codegen:
//
//	go run ./codegen/generate.go
//
// Para gerar automaticamente ao adicionar uma migration:
//
//	go generate ./...
package entities
````

## File: API/internal/entities/proposta_cessao_direitos_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaCessaoDireitosHistorico representa a tabela "PropostaCessaoDireitosHistorico" do banco de dados.
type PropostaCessaoDireitosHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_pcdh"`
	ResSperataProposta                       *float64     `json:"resSperataProposta" db:"res_sperata_proposta_pcdh"`
	ReferenciaMercadoPorM2                   *float64     `json:"referenciaMercadoPorM2" db:"referencia_mercado_por_m2_pcdh"`
	SinalResSperata                          *float64     `json:"sinalResSperata" db:"sinal_res_sperata_pcdh"`
	FormaPagamentoSaldo                      *string      `json:"formaPagamentoSaldo" db:"forma_pagamento_saldo_pcdh"`
	NumParcelas                              *int         `json:"numParcelas" db:"num_parcelas_pcdh"`
	StatusResSperata                         *string      `json:"statusResSperata" db:"status_res_sperata_pcdh"`
	Observacoes                              *string      `json:"observacoes" db:"observacoes_pcdh"`
}
````

## File: API/internal/entities/proposta_cessao_direitos.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaCessaoDireitos representa a tabela "PropostaCessaoDireitos" do banco de dados.
type PropostaCessaoDireitos struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pcd"`
	ResSperataProposta                       *float64     `json:"resSperataProposta" db:"res_sperata_proposta_pcd"`
	ReferenciaMercadoPorM2                   *float64     `json:"referenciaMercadoPorM2" db:"referencia_mercado_por_m2_pcd"`
	SinalResSperata                          *float64     `json:"sinalResSperata" db:"sinal_res_sperata_pcd"`
	FormaPagamentoSaldo                      *string      `json:"formaPagamentoSaldo" db:"forma_pagamento_saldo_pcd"`
	NumParcelas                              *int         `json:"numParcelas" db:"num_parcelas_pcd"`
	StatusResSperata                         *string      `json:"statusResSperata" db:"status_res_sperata_pcd"`
	Observacoes                              *string      `json:"observacoes" db:"observacoes_pcd"`
}
````

## File: API/internal/entities/proposta_documento_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaDocumentoHistorico representa a tabela "PropostaDocumentoHistorico" do banco de dados.
type PropostaDocumentoHistorico struct {
	ID                                       string       `json:"id" db:"id_pdh"`
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_pdh"`
	IDUsuario                                string       `json:"idUsuario" db:"id_usuario_pdh"`
	Codigo                                   string       `json:"codigo" db:"codigo_pdh"`
	NomeOriginal                             string       `json:"nomeOriginal" db:"nome_original_pdh"`
	Tipo                                     string       `json:"tipo" db:"tipo_pdh"`
	Tamanho                                  string       `json:"tamanho" db:"tamanho_pdh"`
	URLStorage                               *string      `json:"urlStorage" db:"url_storage_pdh"`
	DataUpload                               string       `json:"dataUpload" db:"data_upload_pdh"`
}
````

## File: API/internal/entities/proposta_documento.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaDocumento representa a tabela "PropostaDocumento" do banco de dados.
type PropostaDocumento struct {
	ID                                       string       `json:"id" db:"id_pd"`
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pd"`
	IDUsuario                                string       `json:"idUsuario" db:"id_usuario_pd"`
	Codigo                                   string       `json:"codigo" db:"codigo_pd"`
	NomeOriginal                             string       `json:"nomeOriginal" db:"nome_original_pd"`
	Tipo                                     string       `json:"tipo" db:"tipo_pd"`
	Tamanho                                  string       `json:"tamanho" db:"tamanho_pd"`
	URLStorage                               *string      `json:"urlStorage" db:"url_storage_pd"`
	DataUpload                               string       `json:"dataUpload" db:"data_upload_pd"`
}
````

## File: API/internal/entities/proposta_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaHistorico representa a tabela "PropostaHistorico" do banco de dados.
type PropostaHistorico struct {
	ID                                       string       `json:"id" db:"id_ph"`
	IDProposta                               string       `json:"idProposta" db:"id_proposta_ph"`
	IDUsuario                                string       `json:"idUsuario" db:"id_usuario_ph"`
	EditadoEm                                string       `json:"editadoEm" db:"editado_em_ph"`
}
````

## File: API/internal/entities/proposta_loja_anterior_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaLojaAnteriorHistorico representa a tabela "PropostaLojaAnteriorHistorico" do banco de dados.
type PropostaLojaAnteriorHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_plah"`
	NomeFantasia                             *string      `json:"nomeFantasia" db:"nome_fantasia_plah"`
	Segmento                                 *string      `json:"segmento" db:"segmento_plah"`
	TipoOperacao                             *string      `json:"tipoOperacao" db:"tipo_operacao_plah"`
	Cto                                      *float64     `json:"cto" db:"cto_plah"`
	Abl                                      *float64     `json:"abl" db:"abl_plah"`
	Amm                                      *float64     `json:"amm" db:"amm_plah"`
	DividaAmm                                *float64     `json:"dividaAmm" db:"divida_amm_plah"`
	DividaNegociada                          *float64     `json:"dividaNegociada" db:"divida_negociada_plah"`
	DividaCondominio                         *float64     `json:"dividaCondominio" db:"divida_condominio_plah"`
	DividaFpp                                *float64     `json:"dividaFpp" db:"divida_fpp_plah"`
	FormaPagamento                           *string      `json:"formaPagamento" db:"forma_pagamento_plah"`
}
````

## File: API/internal/entities/proposta_loja_anterior.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaLojaAnterior representa a tabela "PropostaLojaAnterior" do banco de dados.
type PropostaLojaAnterior struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pla"`
	NomeFantasia                             *string      `json:"nomeFantasia" db:"nome_fantasia_pla"`
	Segmento                                 *string      `json:"segmento" db:"segmento_pla"`
	TipoOperacao                             *string      `json:"tipoOperacao" db:"tipo_operacao_pla"`
	Cto                                      *float64     `json:"cto" db:"cto_pla"`
	Abl                                      *float64     `json:"abl" db:"abl_pla"`
	Amm                                      *float64     `json:"amm" db:"amm_pla"`
	DividaAmm                                *float64     `json:"dividaAmm" db:"divida_amm_pla"`
	DividaNegociada                          *float64     `json:"dividaNegociada" db:"divida_negociada_pla"`
	DividaCondominio                         *float64     `json:"dividaCondominio" db:"divida_condominio_pla"`
	DividaFpp                                *float64     `json:"dividaFpp" db:"divida_fpp_pla"`
	FormaPagamento                           *string      `json:"formaPagamento" db:"forma_pagamento_pla"`
}
````

## File: API/internal/entities/proposta_necessidades_tecnicas_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaNecessidadesTecnicasHistorico representa a tabela "PropostaNecessidadesTecnicasHistorico" do banco de dados.
type PropostaNecessidadesTecnicasHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_pnth"`
	DemandaEletricaKva                       *float64     `json:"demandaEletricaKva" db:"demanda_eletrica_kva_pnth"`
	TensaoNecessaria                         *string      `json:"tensaoNecessaria" db:"tensao_necessaria_pnth"`
	CircuitosEspeciais                       bool         `json:"circuitosEspeciais" db:"circuitos_especiais_pnth"`
	ObsEletrica                              *string      `json:"obsEletrica" db:"obs_eletrica_pnth"`
	PontoAgua                                bool         `json:"pontoAgua" db:"ponto_agua_pnth"`
	QuantidadePontosAgua                     *int         `json:"quantidadePontosAgua" db:"quantidade_pontos_agua_pnth"`
	PontoEsgoto                              bool         `json:"pontoEsgoto" db:"ponto_esgoto_pnth"`
	VazaoNecessariaLmin                      *float64     `json:"vazaoNecessariaLmin" db:"vazao_necessaria_lmin_pnth"`
	CaixaGordura                             bool         `json:"caixaGordura" db:"caixa_gordura_pnth"`
	ObsHidraulica                            *string      `json:"obsHidraulica" db:"obs_hidraulica_pnth"`
	NecessitaGas                             bool         `json:"necessitaGas" db:"necessita_gas_pnth"`
	TipoGas                                  *string      `json:"tipoGas" db:"tipo_gas_pnth"`
	ConsumoGasM3h                            *float64     `json:"consumoGasM3h" db:"consumo_gas_m3h_pnth"`
	ObsGas                                   *string      `json:"obsGas" db:"obs_gas_pnth"`
	NecessitaExaustao                        bool         `json:"necessitaExaustao" db:"necessita_exaustao_pnth"`
	VazaoExaustaoM3h                         *float64     `json:"vazaoExaustaoM3h" db:"vazao_exaustao_m3h_pnth"`
	NecessitaMakeUpAr                        bool         `json:"necessitaMakeUpAr" db:"necessita_make_up_ar_pnth"`
	ObsVentilacao                            *string      `json:"obsVentilacao" db:"obs_ventilacao_pnth"`
	AreaMinimaM2                             *float64     `json:"areaMinimaM2" db:"area_minima_m2_pnth"`
	AreaMaximaM2                             *float64     `json:"areaMaximaM2" db:"area_maxima_m2_pnth"`
	PeDireitoMinimoM                         *float64     `json:"peDireitoMinimoM" db:"pe_direito_minimo_m_pnth"`
	CargaPisoKgm2                            *float64     `json:"cargaPisoKgm2" db:"carga_piso_kgm2_pnth"`
	NecessitaMezanino                        bool         `json:"necessitaMezanino" db:"necessita_mezanino_pnth"`
	ObsEstrutura                             *string      `json:"obsEstrutura" db:"obs_estrutura_pnth"`
	FrenteMinimaM                            *float64     `json:"frenteMinimaM" db:"frente_minima_m_pnth"`
	TipoFachada                              *string      `json:"tipoFachada" db:"tipo_fachada_pnth"`
	ComunicacaoVisualLed                     bool         `json:"comunicacaoVisualLed" db:"comunicacao_visual_led_pnth"`
	ObsFachada                               *string      `json:"obsFachada" db:"obs_fachada_pnth"`
	PontosDados                              *int         `json:"pontosDados" db:"pontos_dados_pnth"`
	NecessitaFibra                           bool         `json:"necessitaFibra" db:"necessita_fibra_pnth"`
	ObsTelecom                               *string      `json:"obsTelecom" db:"obs_telecom_pnth"`
	Status                                   *string      `json:"status" db:"status_pnth"`
	IDUsuarioResponsavel                     *string      `json:"idUsuarioResponsavel" db:"id_usuario_responsavel_pnth"`
	CriadoEm                                 *string      `json:"criadoEm" db:"criado_em_pnth"`
	AtualizadoEm                             *string      `json:"atualizadoEm" db:"atualizado_em_pnth"`
}
````

## File: API/internal/entities/proposta_necessidades_tecnicas.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaNecessidadesTecnicas representa a tabela "PropostaNecessidadesTecnicas" do banco de dados.
type PropostaNecessidadesTecnicas struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pnt"`
	DemandaEletricaKva                       *float64     `json:"demandaEletricaKva" db:"demanda_eletrica_kva_pnt"`
	TensaoNecessaria                         *string      `json:"tensaoNecessaria" db:"tensao_necessaria_pnt"`
	CircuitosEspeciais                       bool         `json:"circuitosEspeciais" db:"circuitos_especiais_pnt"`
	ObsEletrica                              *string      `json:"obsEletrica" db:"obs_eletrica_pnt"`
	PontoAgua                                bool         `json:"pontoAgua" db:"ponto_agua_pnt"`
	QuantidadePontosAgua                     *int         `json:"quantidadePontosAgua" db:"quantidade_pontos_agua_pnt"`
	PontoEsgoto                              bool         `json:"pontoEsgoto" db:"ponto_esgoto_pnt"`
	VazaoNecessariaLmin                      *float64     `json:"vazaoNecessariaLmin" db:"vazao_necessaria_lmin_pnt"`
	CaixaGordura                             bool         `json:"caixaGordura" db:"caixa_gordura_pnt"`
	ObsHidraulica                            *string      `json:"obsHidraulica" db:"obs_hidraulica_pnt"`
	NecessitaGas                             bool         `json:"necessitaGas" db:"necessita_gas_pnt"`
	TipoGas                                  *string      `json:"tipoGas" db:"tipo_gas_pnt"`
	ConsumoGasM3h                            *float64     `json:"consumoGasM3h" db:"consumo_gas_m3h_pnt"`
	ObsGas                                   *string      `json:"obsGas" db:"obs_gas_pnt"`
	NecessitaExaustao                        bool         `json:"necessitaExaustao" db:"necessita_exaustao_pnt"`
	VazaoExaustaoM3h                         *float64     `json:"vazaoExaustaoM3h" db:"vazao_exaustao_m3h_pnt"`
	NecessitaMakeUpAr                        bool         `json:"necessitaMakeUpAr" db:"necessita_make_up_ar_pnt"`
	ObsVentilacao                            *string      `json:"obsVentilacao" db:"obs_ventilacao_pnt"`
	AreaMinimaM2                             *float64     `json:"areaMinimaM2" db:"area_minima_m2_pnt"`
	AreaMaximaM2                             *float64     `json:"areaMaximaM2" db:"area_maxima_m2_pnt"`
	PeDireitoMinimoM                         *float64     `json:"peDireitoMinimoM" db:"pe_direito_minimo_m_pnt"`
	CargaPisoKgm2                            *float64     `json:"cargaPisoKgm2" db:"carga_piso_kgm2_pnt"`
	NecessitaMezanino                        bool         `json:"necessitaMezanino" db:"necessita_mezanino_pnt"`
	ObsEstrutura                             *string      `json:"obsEstrutura" db:"obs_estrutura_pnt"`
	FrenteMinimaM                            *float64     `json:"frenteMinimaM" db:"frente_minima_m_pnt"`
	TipoFachada                              *string      `json:"tipoFachada" db:"tipo_fachada_pnt"`
	ComunicacaoVisualLed                     bool         `json:"comunicacaoVisualLed" db:"comunicacao_visual_led_pnt"`
	ObsFachada                               *string      `json:"obsFachada" db:"obs_fachada_pnt"`
	PontosDados                              *int         `json:"pontosDados" db:"pontos_dados_pnt"`
	NecessitaFibra                           bool         `json:"necessitaFibra" db:"necessita_fibra_pnt"`
	ObsTelecom                               *string      `json:"obsTelecom" db:"obs_telecom_pnt"`
	Status                                   *string      `json:"status" db:"status_pnt"`
	IDUsuarioResponsavel                     *string      `json:"idUsuarioResponsavel" db:"id_usuario_responsavel_pnt"`
	CriadoEm                                 string       `json:"criadoEm" db:"criado_em_pnt"`
	AtualizadoEm                             *string      `json:"atualizadoEm" db:"atualizado_em_pnt"`
}
````

## File: API/internal/entities/proposta_parecer_comite_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaParecerComiteHistorico representa a tabela "PropostaParecerComiteHistorico" do banco de dados.
type PropostaParecerComiteHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_ppch"`
	Presidente                               bool         `json:"presidente" db:"presidente_ppch"`
	PresidenteData                           *string      `json:"presidenteData" db:"presidente_data_ppch"`
	DiretoriaComp1                           bool         `json:"diretoriaComp1" db:"diretoria_comp1_ppch"`
	DiretoriaComp1Data                       *string      `json:"diretoriaComp1Data" db:"diretoria_comp1_data_ppch"`
	DiretoriaComp2                           bool         `json:"diretoriaComp2" db:"diretoria_comp2_ppch"`
	DiretoriaComp2Data                       *string      `json:"diretoriaComp2Data" db:"diretoria_comp2_data_ppch"`
	Superintendente                          bool         `json:"superintendente" db:"superintendente_ppch"`
	SuperintendenteData                      *string      `json:"superintendenteData" db:"superintendente_data_ppch"`
	InNetworking                             bool         `json:"inNetworking" db:"in_networking_ppch"`
	InNetworkingData                         *string      `json:"inNetworkingData" db:"in_networking_data_ppch"`
}
````

## File: API/internal/entities/proposta_parecer_comite.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaParecerComite representa a tabela "PropostaParecerComite" do banco de dados.
type PropostaParecerComite struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_ppc"`
	Presidente                               bool         `json:"presidente" db:"presidente_ppc"`
	PresidenteData                           *string      `json:"presidenteData" db:"presidente_data_ppc"`
	DiretoriaComp1                           bool         `json:"diretoriaComp1" db:"diretoria_comp1_ppc"`
	DiretoriaComp1Data                       *string      `json:"diretoriaComp1Data" db:"diretoria_comp1_data_ppc"`
	DiretoriaComp2                           bool         `json:"diretoriaComp2" db:"diretoria_comp2_ppc"`
	DiretoriaComp2Data                       *string      `json:"diretoriaComp2Data" db:"diretoria_comp2_data_ppc"`
	Superintendente                          bool         `json:"superintendente" db:"superintendente_ppc"`
	SuperintendenteData                      *string      `json:"superintendenteData" db:"superintendente_data_ppc"`
	InNetworking                             bool         `json:"inNetworking" db:"in_networking_ppc"`
	InNetworkingData                         *string      `json:"inNetworkingData" db:"in_networking_data_ppc"`
}
````

## File: API/internal/entities/proposta_taxa_transferencia_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaTaxaTransferenciaHistorico representa a tabela "PropostaTaxaTransferenciaHistorico" do banco de dados.
type PropostaTaxaTransferenciaHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_ptth"`
	TtContratual                             *float64     `json:"ttContratual" db:"tt_contratual_ptth"`
	TtProposta                               *float64     `json:"ttProposta" db:"tt_proposta_ptth"`
	TtPropostaNumAmm                         *float64     `json:"ttPropostaNumAmm" db:"tt_proposta_num_amm_ptth"`
	SinalTt                                  *float64     `json:"sinalTt" db:"sinal_tt_ptth"`
	FormaPagamentoTt                         *string      `json:"formaPagamentoTt" db:"forma_pagamento_tt_ptth"`
	JustificativaTt                          *string      `json:"justificativaTt" db:"justificativa_tt_ptth"`
	StatusTt                                 *string      `json:"statusTt" db:"status_tt_ptth"`
}
````

## File: API/internal/entities/proposta_taxa_transferencia.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaTaxaTransferencia representa a tabela "PropostaTaxaTransferencia" do banco de dados.
type PropostaTaxaTransferencia struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_ptt"`
	TtContratual                             *float64     `json:"ttContratual" db:"tt_contratual_ptt"`
	TtProposta                               *float64     `json:"ttProposta" db:"tt_proposta_ptt"`
	TtPropostaNumAmm                         *float64     `json:"ttPropostaNumAmm" db:"tt_proposta_num_amm_ptt"`
	SinalTt                                  *float64     `json:"sinalTt" db:"sinal_tt_ptt"`
	FormaPagamentoTt                         *string      `json:"formaPagamentoTt" db:"forma_pagamento_tt_ptt"`
	JustificativaTt                          *string      `json:"justificativaTt" db:"justificativa_tt_ptt"`
	StatusTt                                 *string      `json:"statusTt" db:"status_tt_ptt"`
}
````

## File: API/internal/entities/proposta.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// Proposta representa a tabela "Proposta" do banco de dados.
type Proposta struct {
	ID                                       string       `json:"id" db:"id_p"`
	IDUnidade                                string       `json:"idUnidade" db:"id_unidade_p"`
	IDUsuarioCriacao                         string       `json:"idUsuarioCriacao" db:"id_usuario_criacao_p"`
	IDUsuarioUltimaAlt                       *string      `json:"idUsuarioUltimaAlt" db:"id_usuario_ultima_alt_p"`
	IDUsuarioResponsavel                     *string      `json:"idUsuarioResponsavel" db:"id_usuario_responsavel_p"`
	Segmento                                 string       `json:"segmento" db:"segmento_p"`
	TipoOperacao                             string       `json:"tipoOperacao" db:"tipo_operacao_p"`
	ValorProposto                            float64      `json:"valorProposto" db:"valor_proposto_p"`
	Area                                     float64      `json:"area" db:"area_p"`
	Abl                                      *float64     `json:"abl" db:"abl_p"`
	Status                                   string       `json:"status" db:"status_p"`
	DataCriacao                              string       `json:"dataCriacao" db:"data_criacao_p"`
	DataVencimento                           *string      `json:"dataVencimento" db:"data_vencimento_p"`
	NomeFantasia                             *string      `json:"nomeFantasia" db:"nome_fantasia_p"`
	AluguelPercent                           *float64     `json:"aluguelPercent" db:"aluguel_percent_p"`
	PrazoLocacaoMeses                        *int         `json:"prazoLocacaoMeses" db:"prazo_locacao_meses_p"`
	AluguelPorM2                             *float64     `json:"aluguelPorM2" db:"aluguel_por_m2_p"`
	CondominioAprox                          *float64     `json:"condominioAprox" db:"condominio_aprox_p"`
	FppAprox                                 *float64     `json:"fppAprox" db:"fpp_aprox_p"`
	InicioContrato                           *string      `json:"inicioContrato" db:"inicio_contrato_p"`
	FimContrato                              *string      `json:"fimContrato" db:"fim_contrato_p"`
	DataInauguracao                          *string      `json:"dataInauguracao" db:"data_inauguracao_p"`
	Observacoes                              *string      `json:"observacoes" db:"observacoes_p"`
	AtualizadoEm                             string       `json:"atualizadoEm" db:"atualizado_em_p"`
}
````

## File: API/internal/entities/responses.go
````go
// ============================================================
// entities/responses.go — Tipos de resposta da API
// ============================================================
//
// Diferença entre entities/*.go (gerado) e responses.go (manual):
//
//  entities/*.go    — espelham EXATAMENTE as colunas do banco,
//                     gerados pelo codegen a partir das migrations.
//                     NÃO devem ser editados manualmente.
//
//  responses.go     — definem o que a API RETORNA ao cliente.
//                     Podem omitir campos sensíveis (ex: senha_hash_u),
//                     renomear campos para camelCase, adicionar campos
//                     calculados (ex: status em UnidadeResponse) ou
//                     aliases de compatibilidade (ex: unidade, tipo).
//
// UnidadeResponse: campos de Unidade + status calculado (Disponível/Ocupado)
// PropostaResponse: campos de Proposta + JOIN com Unidade e Usuário
//                   + aliases 'unidade' e 'tipo' para o frontend legado
// ============================================================
// responses.go — Tipos de resposta da API (derivados das entidades do banco).
// Estes tipos NÃO são gerados pelo codegen — são criados manualmente
// para expor apenas os campos necessários em cada endpoint.
package entities

// UnidadeResponse é a representação de Unidade retornada pela API.
type UnidadeResponse struct {
	ID       string  `json:"id"`
	Codigo   string  `json:"codigo"`
	Piso     string  `json:"piso"`
	Corredor string  `json:"corredor"`
	Area     float64 `json:"area"`
	Status   string  `json:"status"`
	CriadoEm string `json:"criadoEm"`
}

// PropostaResponse é a representação de Proposta retornada pela API.
type PropostaResponse struct {
	ID            string   `json:"id"`
	IDUnidade     string   `json:"idUnidade"`
	CodigoUnidade string   `json:"codigoUnidade"`
	Unidade       string   `json:"unidade"`       // alias de CodigoUnidade
	Piso          string   `json:"piso"`
	Corredor      string   `json:"corredor"`
	Segmento      string   `json:"segmento"`
	TipoOperacao  string   `json:"tipoOperacao"`
	Tipo          string   `json:"tipo"`          // alias de TipoOperacao
	ValorProposto float64  `json:"valorProposto"`
	Area          float64  `json:"area"`
	Status        string   `json:"status"`
	Responsavel   string   `json:"responsavel"`
	NomeFantasia  string   `json:"nomeFantasia"`
	DataCriacao   string   `json:"dataCriacao"`
	AtualizadoEm  string   `json:"atualizadoEm"`
	DataVencimento *string `json:"dataVencimento"`
	FimContrato   *string  `json:"fimContrato"`
}
````

## File: API/internal/entities/unidade.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// Unidade representa a tabela "Unidade" do banco de dados.
type Unidade struct {
	ID                                       string       `json:"id" db:"id_un"`
	Codigo                                   string       `json:"codigo" db:"codigo_un"`
	Piso                                     string       `json:"piso" db:"piso_un"`
	Corredor                                 string       `json:"corredor" db:"corredor_un"`
	Area                                     float64      `json:"area" db:"area_un"`
	CriadoEm                                 string       `json:"criadoEm" db:"criado_em_un"`
}
````

## File: API/internal/entities/usuario.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// Usuario representa a tabela "Usuario" do banco de dados.
type Usuario struct {
	ID                                       string       `json:"id" db:"id_u"`
	Nome                                     string       `json:"nome" db:"nome_u"`
	Email                                    string       `json:"email" db:"email_u"`
	SenhaHash                                string       `json:"senhaHash" db:"senha_hash_u"`
	Setor                                    *string      `json:"setor" db:"setor_u"`
	CriadoEm                                 string       `json:"criadoEm" db:"criado_em_u"`
}
````

## File: API/internal/handlers/auth.go
````go
package handlers

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/jackc/pgx/v5/pgxpool"
	"golang.org/x/crypto/bcrypt"
)

const tokenDuration = time.Hour

type Claims struct {
	UserID string `json:"user_id"`
	Email  string `json:"email"`
	Nome   string `json:"nome"`
	Setor  string `json:"setor"`
	jwt.RegisteredClaims
}

type AuthHandler struct {
	db        *pgxpool.Pool
	jwtSecret []byte
}

func NewAuthHandler(db *pgxpool.Pool, jwtSecret string) *AuthHandler {
	return &AuthHandler{
		db:        db,
		jwtSecret: []byte(jwtSecret),
	}
}

type loginRequest struct {
	Email string `json:"email" binding:"required,email"`
	Senha string `json:"senha" binding:"required"`
}

type loginResponse struct {
	Token   string      `json:"token"`
	Usuario usuarioInfo `json:"usuario"`
}

type usuarioInfo struct {
	ID    string `json:"id"`
	Nome  string `json:"nome"`
	Email string `json:"email"`
	Setor string `json:"setor"`
}

func (h *AuthHandler) Login(c *gin.Context) {
	var req loginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados invalidos"})
		return
	}

	ctx := context.Background()

	// setor pode ser NULL no banco — usar *string para aceitar nil
	var id, nome, senhaHash string
	var setorPtr *string
	err := h.db.QueryRow(ctx,
		`SELECT id_u, nome_u, setor_u, senha_hash_u FROM "Usuario" WHERE email_u = $1`,
		req.Email,
	).Scan(&id, &nome, &setorPtr, &senhaHash)

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Credenciais invalidas"})
		return
	}

	// Converter *string para string
	setor := ""
	if setorPtr != nil {
		setor = *setorPtr
	}

	if err := bcrypt.CompareHashAndPassword([]byte(senhaHash), []byte(req.Senha)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Credenciais invalidas"})
		return
	}

	expiracao := time.Now().Add(tokenDuration)
	claims := &Claims{
		UserID: id,
		Email:  req.Email,
		Nome:   nome,
		Setor:  setor,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expiracao),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			Subject:   id,
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(h.jwtSecret)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gerar token"})
		return
	}

	// Salvar token no banco — sessão única
	_, err = h.db.Exec(ctx,
		`UPDATE "Usuario" SET token_ativo_u = $1, token_expira_em_u = $2 WHERE id_u = $3`,
		tokenString, expiracao, id,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao registrar sessao"})
		return
	}

	c.JSON(http.StatusOK, loginResponse{
		Token: tokenString,
		Usuario: usuarioInfo{
			ID:    id,
			Nome:  nome,
			Email: req.Email,
			Setor: setor,
		},
	})
}

func (h *AuthHandler) Logout(c *gin.Context) {
	userID := c.GetString("user_id")
	if userID == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Nao autenticado"})
		return
	}

	ctx := context.Background()
	_, err := h.db.Exec(ctx,
		`UPDATE "Usuario" SET token_ativo_u = NULL, token_expira_em_u = NULL WHERE id_u = $1`,
		userID,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao encerrar sessao"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Sessao encerrada"})
}

func (h *AuthHandler) Me(c *gin.Context) {
	c.JSON(http.StatusOK, usuarioInfo{
		ID:    c.GetString("user_id"),
		Nome:  c.GetString("user_nome"),
		Email: c.GetString("user_email"),
		Setor: c.GetString("user_setor"),
	})
}

func (h *AuthHandler) ValidarToken(tokenString string) (*Claims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("metodo de assinatura invalido: %v", t.Header["alg"])
		}
		return h.jwtSecret, nil
	})
	if err != nil {
		return nil, err
	}
	claims, ok := token.Claims.(*Claims)
	if !ok || !token.Valid {
		return nil, fmt.Errorf("token invalido")
	}
	return claims, nil
}
````

## File: API/internal/handlers/propostas.go
````go
// ============================================================
// handlers/propostas.go — Handlers HTTP para o recurso Proposta
// ============================================================
//
// Listar (GET /api/v1/propostas):
//  JOIN com Unidade para trazer piso/corredor/código.
//  JOIN com Usuario para trazer nome do responsável.
//  Filtros: id_unidade, status, segmento, piso, data_from, data_to.
//  Campos 'unidade' e 'tipo' são aliases de codigoUnidade e tipoOperacao
//  mantidos por compatibilidade com o frontend legado.
//
// Detalhe (GET /api/v1/propostas/:id):
//  Mesma query do Listar mas filtrada por ID.
//
// Criar (POST /api/v1/propostas):
//  Insere nova proposta. user_id vem do contexto Gin (injetado pelo middleware).
//  Retorna 201 Created com o ID gerado.
//
// AtualizarStatus (PATCH /api/v1/propostas/:id/status):
//  Atualiza status_p e opcionalmente observacoes_p.
//  Registra atualizado_em_p com time.Now().
//
// Historico, PlaceholderOK:
//  Historico retorna [] — implementação futura via PropostaHistorico.
//  PlaceholderOK retorna 200 OK para sub-recursos ainda não implementados.
// ============================================================
package handlers

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"go-api/internal/entities"
)

type PropostasHandler struct {
	db *pgxpool.Pool
}

func NewPropostasHandler(db *pgxpool.Pool) *PropostasHandler {
	return &PropostasHandler{db: db}
}

func (h *PropostasHandler) Listar(c *gin.Context) {
	ctx := context.Background()

	query := `
		SELECT
			p.id_p, p.id_unidade_p, u.codigo_un, u.piso_un, u.corredor_un,
			p.segmento_p, p.tipo_operacao_p, p.valor_proposto_p, p.area_p, p.status_p,
			COALESCE(p.nome_fantasia_p, ''),
			TO_CHAR(p.data_criacao_p, 'YYYY-MM-DD'),
			TO_CHAR(p.atualizado_em_p, 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
			TO_CHAR(p.data_vencimento_p, 'YYYY-MM-DD'),
			TO_CHAR(p.fim_contrato_p, 'YYYY-MM-DD'),
			COALESCE(us.nome_u, 'Gerência Comercial')
		FROM "Proposta" p
		JOIN "Unidade" u ON u.id_un = p.id_unidade_p
		LEFT JOIN "Usuario" us ON us.id_u = p.id_usuario_responsavel_p
		WHERE 1=1`

	args := []any{}
	i := 1

	if v := c.Query("id_unidade"); v != "" {
		query += fmt.Sprintf(" AND p.id_unidade_p = $%d", i); args = append(args, v); i++
	}
	if v := c.Query("status"); v != "" {
		query += fmt.Sprintf(" AND p.status_p = $%d", i); args = append(args, v); i++
	}
	if v := c.Query("segmento"); v != "" {
		query += fmt.Sprintf(" AND p.segmento_p = $%d", i); args = append(args, v); i++
	}
	if v := c.Query("piso"); v != "" {
		query += fmt.Sprintf(" AND u.piso_un = $%d", i); args = append(args, v); i++
	}
	if v := c.Query("data_from"); v != "" {
		query += fmt.Sprintf(" AND p.data_criacao_p >= $%d", i); args = append(args, v); i++
	}
	if v := c.Query("data_to"); v != "" {
		query += fmt.Sprintf(" AND p.data_criacao_p <= $%d", i); args = append(args, v); i++
	}

	query += " ORDER BY p.atualizado_em_p DESC"

	rows, err := h.db.Query(ctx, query, args...)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao listar propostas"})
		return
	}
	defer rows.Close()

	result := []entities.PropostaResponse{}
	for rows.Next() {
		var p entities.PropostaResponse
		if err := rows.Scan(
			&p.ID, &p.IDUnidade, &p.CodigoUnidade, &p.Piso, &p.Corredor,
			&p.Segmento, &p.TipoOperacao, &p.ValorProposto, &p.Area,
			&p.Status, &p.NomeFantasia, &p.DataCriacao, &p.AtualizadoEm,
			&p.DataVencimento, &p.FimContrato, &p.Responsavel,
		); err != nil {
			continue
		}
		p.Unidade = p.CodigoUnidade
		p.Tipo = p.TipoOperacao
		result = append(result, p)
	}

	c.JSON(http.StatusOK, result)
}

func (h *PropostasHandler) Detalhe(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var p entities.PropostaResponse
	err := h.db.QueryRow(ctx, `
		SELECT p.id_p, p.id_unidade_p, u.codigo_un, u.piso_un, u.corredor_un,
			p.segmento_p, p.tipo_operacao_p, p.valor_proposto_p, p.area_p, p.status_p,
			COALESCE(p.nome_fantasia_p,''), TO_CHAR(p.data_criacao_p,'YYYY-MM-DD'),
			TO_CHAR(p.atualizado_em_p,'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
			TO_CHAR(p.data_vencimento_p,'YYYY-MM-DD'), TO_CHAR(p.fim_contrato_p,'YYYY-MM-DD'),
			COALESCE(us.nome_u,'Gerência Comercial')
		FROM "Proposta" p
		JOIN "Unidade" u ON u.id_un = p.id_unidade_p
		LEFT JOIN "Usuario" us ON us.id_u = p.id_usuario_responsavel_p
		WHERE p.id_p = $1
	`, id).Scan(
		&p.ID, &p.IDUnidade, &p.CodigoUnidade, &p.Piso, &p.Corredor,
		&p.Segmento, &p.TipoOperacao, &p.ValorProposto, &p.Area,
		&p.Status, &p.NomeFantasia, &p.DataCriacao, &p.AtualizadoEm,
		&p.DataVencimento, &p.FimContrato, &p.Responsavel,
	)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}
	p.Unidade = p.CodigoUnidade
	p.Tipo = p.TipoOperacao
	c.JSON(http.StatusOK, p)
}

func (h *PropostasHandler) Criar(c *gin.Context) {
	ctx := context.Background()
	userID := c.GetString("user_id")

	var body struct {
		IDUnidade      string   `json:"idUnidade"`
		Segmento       string   `json:"segmento"`
		TipoOperacao   string   `json:"tipoOperacao"`
		ValorProposto  float64  `json:"valorProposto"`
		Area           float64  `json:"area"`
		NomeFantasia   string   `json:"nomeFantasia"`
		DataVencimento *string  `json:"dataVencimento"`
		Observacoes    string   `json:"observacoes"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados inválidos"})
		return
	}

	var id string
	err := h.db.QueryRow(ctx, `
		INSERT INTO "Proposta"
			(id_unidade_p, id_usuario_criacao_p, segmento_p, tipo_operacao_p,
			 valor_proposto_p, area_p, nome_fantasia_p, data_vencimento_p, observacoes_p)
		VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id_p
	`, body.IDUnidade, userID, body.Segmento, body.TipoOperacao,
		body.ValorProposto, body.Area, body.NomeFantasia,
		body.DataVencimento, body.Observacoes,
	).Scan(&id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao criar proposta"})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"id": id})
}

func (h *PropostasHandler) AtualizarStatus(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var body struct {
		Status      string `json:"status"`
		Observacoes string `json:"observacoes"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados inválidos"})
		return
	}

	_, err := h.db.Exec(ctx, `
		UPDATE "Proposta"
		SET status_p = $1, observacoes_p = COALESCE($2, observacoes_p), atualizado_em_p = $3
		WHERE id_p = $4
	`, body.Status, body.Observacoes, time.Now(), id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao atualizar status"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Status atualizado"})
}

func (h *PropostasHandler) Historico(c *gin.Context) {
	c.JSON(http.StatusOK, []any{})
}

func (h *PropostasHandler) PlaceholderOK(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ok"})
}
````

## File: API/internal/handlers/unidades.go
````go
// ============================================================
// handlers/unidades.go — Handlers HTTP para o recurso Unidade
// ============================================================
//
// Listar (GET /api/v1/unidades):
//  Retorna todas as unidades físicas do mall com filtros opcionais
//  por piso, corredor e status.
//  O status (Disponível/Ocupado) é calculado dinamicamente via
//  subquery: verifica se existe alguma Proposta Aprovada vinculada.
//  Filtro de status aplicado em Go (pós-query) para simplicidade.
//
// Detalhe (GET /api/v1/unidades/:id):
//  Retorna uma única unidade com o mesmo cálculo de status.
//
// Os tipos de resposta (UnidadeResponse) estão definidos em
// API/internal/entities/responses.go, separados das entidades
// geradas automaticamente pelo codegen.
// ============================================================
package handlers

import (
	"context"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"go-api/internal/entities"
)

type UnidadesHandler struct {
	db *pgxpool.Pool
}

func NewUnidadesHandler(db *pgxpool.Pool) *UnidadesHandler {
	return &UnidadesHandler{db: db}
}

func (h *UnidadesHandler) Listar(c *gin.Context) {
	ctx := context.Background()

	piso     := c.Query("piso")
	corredor := c.Query("corredor")
	status   := c.Query("status")

	query := `
		SELECT
			u.id_un,
			u.codigo_un,
			u.piso_un,
			u.corredor_un,
			u.area_un,
			CASE WHEN EXISTS (
				SELECT 1 FROM "Proposta" p
				WHERE p.id_unidade_p = u.id_un AND p.status_p = 'Aprovado'
			) THEN 'Ocupado' ELSE 'Disponível' END AS status,
			TO_CHAR(u.criado_em_un, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "Unidade" u
		WHERE 1=1`

	args := []any{}
	i := 1

	if piso != "" {
		query += fmt.Sprintf(" AND u.piso_un = $%d", i)
		args = append(args, piso); i++
	}
	if corredor != "" {
		query += fmt.Sprintf(" AND u.corredor_un = $%d", i)
		args = append(args, corredor); i++
	}

	query += " ORDER BY u.codigo_un"

	rows, err := h.db.Query(ctx, query, args...)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao listar unidades"})
		return
	}
	defer rows.Close()

	result := []entities.UnidadeResponse{}
	for rows.Next() {
		var u entities.UnidadeResponse
		if err := rows.Scan(&u.ID, &u.Codigo, &u.Piso, &u.Corredor, &u.Area, &u.Status, &u.CriadoEm); err != nil {
			continue
		}
		if status == "" || u.Status == status {
			result = append(result, u)
		}
	}

	c.JSON(http.StatusOK, result)
}

func (h *UnidadesHandler) Detalhe(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var u entities.UnidadeResponse
	err := h.db.QueryRow(ctx, `
		SELECT u.id_un, u.codigo_un, u.piso_un, u.corredor_un, u.area_un,
			CASE WHEN EXISTS (
				SELECT 1 FROM "Proposta" p
				WHERE p.id_unidade_p = u.id_un AND p.status_p = 'Aprovado'
			) THEN 'Ocupado' ELSE 'Disponível' END,
			TO_CHAR(u.criado_em_un, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "Unidade" u WHERE u.id_un = $1
	`, id).Scan(&u.ID, &u.Codigo, &u.Piso, &u.Corredor, &u.Area, &u.Status, &u.CriadoEm)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Unidade não encontrada"})
		return
	}

	c.JSON(http.StatusOK, u)
}
````

## File: API/internal/middleware/auth.go
````go
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
````

## File: API/internal/routes/routes.go
````go
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
		api.GET("/documentos", propostasHandler.PlaceholderOK)
		api.POST("/documentos", propostasHandler.PlaceholderOK)
		api.DELETE("/documentos/:id", propostasHandler.PlaceholderOK)
	}
}
````

## File: API/migrations/000001_create_tables.down.sql
````sql
-- ============================================================
-- BES-2026 | Migration 000001 DOWN — Remove todas as tabelas
-- ============================================================

DROP TABLE IF EXISTS "PropostaDocumentoHistorico";
DROP TABLE IF EXISTS "PropostaParecerComiteHistorico";
DROP TABLE IF EXISTS "PropostaTaxaTransferenciaHistorico";
DROP TABLE IF EXISTS "PropostaCessaoDireitosHistorico";
DROP TABLE IF EXISTS "PropostaNecessidadesTecnicasHistorico";
DROP TABLE IF EXISTS "PropostaLojaAnteriorHistorico";
DROP TABLE IF EXISTS "PropostaHistorico";
DROP TABLE IF EXISTS "PropostaDocumento";
DROP TABLE IF EXISTS "PropostaParecerComite";
DROP TABLE IF EXISTS "PropostaTaxaTransferencia";
DROP TABLE IF EXISTS "PropostaCessaoDireitos";
DROP TABLE IF EXISTS "PropostaNecessidadesTecnicas";
DROP TABLE IF EXISTS "PropostaLojaAnterior";
DROP TABLE IF EXISTS "Proposta";
DROP TABLE IF EXISTS "Unidade";
DROP TABLE IF EXISTS "Usuario";
````

## File: API/migrations/000001_create_tables.up.sql
````sql
-- ============================================================
-- BES-2026 | Migration 000001 — Criação das tabelas
-- ============================================================

-- Extensão para UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- Usuario
-- ============================================================
CREATE TABLE "Usuario" (
    id_u          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_u        VARCHAR(150)  NOT NULL,
    email_u       VARCHAR(200)  NOT NULL UNIQUE,
    senha_hash_u  VARCHAR(255)  NOT NULL,
    setor_u       VARCHAR(100),
    criado_em_u   TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Unidade
-- ============================================================
CREATE TABLE "Unidade" (
    id_un         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_un     VARCHAR(20)   NOT NULL UNIQUE,
    piso_un       CHAR(1)       NOT NULL CHECK (piso_un IN ('P','S','T')),
    corredor_un   CHAR(1)       NOT NULL CHECK (corredor_un IN ('A','B','C','D','E')),
    area_un       DECIMAL(10,2) NOT NULL,
    criado_em_un  TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Proposta (inclui campos da aba Loja Proposta)
-- ============================================================
CREATE TABLE "Proposta" (
    id_p                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_unidade_p            UUID          NOT NULL REFERENCES "Unidade"(id_un),
    id_usuario_criacao_p    UUID          NOT NULL REFERENCES "Usuario"(id_u),
    id_usuario_ultima_alt_p UUID          REFERENCES "Usuario"(id_u),
    id_usuario_responsavel_p UUID         REFERENCES "Usuario"(id_u),
    segmento_p              VARCHAR(100)  NOT NULL,
    tipo_operacao_p         VARCHAR(50)   NOT NULL,
    valor_proposto_p        DECIMAL(15,2) NOT NULL,
    area_p                  DECIMAL(10,2) NOT NULL,
    abl_p                   DECIMAL(10,2),
    status_p                VARCHAR(60)   NOT NULL DEFAULT 'Aguardando análise financeira',
    data_criacao_p          DATE          NOT NULL DEFAULT CURRENT_DATE,
    data_vencimento_p       DATE,
    nome_fantasia_p         VARCHAR(200),
    aluguel_percent_p       DECIMAL(10,2),
    prazo_locacao_meses_p   INTEGER,
    aluguel_por_m2_p        DECIMAL(10,2),
    condominio_aprox_p      DECIMAL(10,2),
    fpp_aprox_p             DECIMAL(10,2),
    inicio_contrato_p       DATE,
    fim_contrato_p          DATE,
    data_inauguracao_p      DATE,
    observacoes_p           TEXT,
    atualizado_em_p         TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- PropostaLojaAnterior (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaLojaAnterior" (
    id_proposta_pla       UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    nome_fantasia_pla     VARCHAR(200),
    segmento_pla          VARCHAR(100),
    tipo_operacao_pla     VARCHAR(50),
    cto_pla               DECIMAL(15,2),
    abl_pla               DECIMAL(10,2),
    amm_pla               DECIMAL(10,2),
    divida_amm_pla        DECIMAL(15,2),
    divida_negociada_pla  DECIMAL(15,2),
    divida_condominio_pla DECIMAL(15,2),
    divida_fpp_pla        DECIMAL(15,2),
    forma_pagamento_pla   VARCHAR(100)
);

-- ============================================================
-- PropostaNecessidadesTecnicas (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaNecessidadesTecnicas" (
    id_proposta_pnt              UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    -- Elétrica
    demanda_eletrica_kva_pnt     DECIMAL(8,2),
    tensao_necessaria_pnt        VARCHAR(20),
    circuitos_especiais_pnt      BOOLEAN DEFAULT FALSE,
    obs_eletrica_pnt             TEXT,
    -- Hidráulica
    ponto_agua_pnt               BOOLEAN DEFAULT FALSE,
    quantidade_pontos_agua_pnt   INTEGER,
    ponto_esgoto_pnt             BOOLEAN DEFAULT FALSE,
    vazao_necessaria_lmin_pnt    DECIMAL(8,2),
    caixa_gordura_pnt            BOOLEAN DEFAULT FALSE,
    obs_hidraulica_pnt           TEXT,
    -- Gás
    necessita_gas_pnt            BOOLEAN DEFAULT FALSE,
    tipo_gas_pnt                 VARCHAR(20),
    consumo_gas_m3h_pnt          DECIMAL(8,2),
    obs_gas_pnt                  TEXT,
    -- Ventilação e Exaustão
    necessita_exaustao_pnt       BOOLEAN DEFAULT FALSE,
    vazao_exaustao_m3h_pnt       DECIMAL(10,2),
    necessita_make_up_ar_pnt     BOOLEAN DEFAULT FALSE,
    obs_ventilacao_pnt           TEXT,
    -- Estrutura
    area_minima_m2_pnt           DECIMAL(8,2),
    area_maxima_m2_pnt           DECIMAL(8,2),
    pe_direito_minimo_m_pnt      DECIMAL(5,2),
    carga_piso_kgm2_pnt          DECIMAL(8,2),
    necessita_mezanino_pnt       BOOLEAN DEFAULT FALSE,
    obs_estrutura_pnt            TEXT,
    -- Fachada e Visual
    frente_minima_m_pnt          DECIMAL(6,2),
    tipo_fachada_pnt             VARCHAR(20),
    comunicacao_visual_led_pnt   BOOLEAN DEFAULT FALSE,
    obs_fachada_pnt              TEXT,
    -- TI e Telecom
    pontos_dados_pnt             INTEGER,
    necessita_fibra_pnt          BOOLEAN DEFAULT FALSE,
    obs_telecom_pnt              TEXT,
    -- Controle
    status_pnt                   VARCHAR(30) DEFAULT 'Rascunho',
    id_usuario_responsavel_pnt   UUID REFERENCES "Usuario"(id_u),
    criado_em_pnt                TIMESTAMP NOT NULL DEFAULT NOW(),
    atualizado_em_pnt            TIMESTAMP
);

-- ============================================================
-- PropostaCessaoDireitos (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaCessaoDireitos" (
    id_proposta_pcd              UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    res_sperata_proposta_pcd     DECIMAL(15,2),
    referencia_mercado_por_m2_pcd DECIMAL(10,2),
    sinal_res_sperata_pcd        DECIMAL(15,2),
    forma_pagamento_saldo_pcd    VARCHAR(100),
    num_parcelas_pcd             INTEGER,
    status_res_sperata_pcd       VARCHAR(50),
    observacoes_pcd              TEXT
);

-- ============================================================
-- PropostaTaxaTransferencia (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaTaxaTransferencia" (
    id_proposta_ptt        UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    tt_contratual_ptt      DECIMAL(15,2),
    tt_proposta_ptt        DECIMAL(15,2),
    tt_proposta_num_amm_ptt DECIMAL(10,2),
    sinal_tt_ptt           DECIMAL(15,2),
    forma_pagamento_tt_ptt VARCHAR(100),
    justificativa_tt_ptt   TEXT,
    status_tt_ptt          VARCHAR(50)
);

-- ============================================================
-- PropostaParecerComite (1:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaParecerComite" (
    id_proposta_ppc              UUID PRIMARY KEY REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    presidente_ppc               BOOLEAN DEFAULT FALSE,
    presidente_data_ppc          DATE,
    diretoria_comp1_ppc          BOOLEAN DEFAULT FALSE,
    diretoria_comp1_data_ppc     DATE,
    diretoria_comp2_ppc          BOOLEAN DEFAULT FALSE,
    diretoria_comp2_data_ppc     DATE,
    superintendente_ppc          BOOLEAN DEFAULT FALSE,
    superintendente_data_ppc     DATE,
    in_networking_ppc            BOOLEAN DEFAULT FALSE,
    in_networking_data_ppc       DATE
);

-- ============================================================
-- PropostaDocumento (N:1 com Proposta)
-- ============================================================
CREATE TABLE "PropostaDocumento" (
    id_pd           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_proposta_pd  UUID          NOT NULL REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    id_usuario_pd   UUID          NOT NULL REFERENCES "Usuario"(id_u),
    codigo_pd       VARCHAR(50)   NOT NULL UNIQUE,
    nome_original_pd VARCHAR(255) NOT NULL,
    tipo_pd         VARCHAR(10)   NOT NULL CHECK (tipo_pd IN ('PDF','DOCX','XLSX','JPG','PNG')),
    tamanho_pd      VARCHAR(20)   NOT NULL,
    url_storage_pd  VARCHAR(500),
    data_upload_pd  TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- PropostaHistorico
-- ============================================================
CREATE TABLE "PropostaHistorico" (
    id_ph           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_proposta_ph  UUID      NOT NULL REFERENCES "Proposta"(id_p) ON DELETE CASCADE,
    id_usuario_ph   UUID      NOT NULL REFERENCES "Usuario"(id_u),
    editado_em_ph   TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Tabelas de Histórico (1:1 com PropostaHistorico)
-- ============================================================

CREATE TABLE "PropostaLojaAnteriorHistorico" (
    id_historico_plah       UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    nome_fantasia_plah      VARCHAR(200),
    segmento_plah           VARCHAR(100),
    tipo_operacao_plah      VARCHAR(50),
    cto_plah                DECIMAL(15,2),
    abl_plah                DECIMAL(10,2),
    amm_plah                DECIMAL(10,2),
    divida_amm_plah         DECIMAL(15,2),
    divida_negociada_plah   DECIMAL(15,2),
    divida_condominio_plah  DECIMAL(15,2),
    divida_fpp_plah         DECIMAL(15,2),
    forma_pagamento_plah    VARCHAR(100)
);

CREATE TABLE "PropostaNecessidadesTecnicasHistorico" (
    id_historico_pnth              UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    demanda_eletrica_kva_pnth      DECIMAL(8,2),
    tensao_necessaria_pnth         VARCHAR(20),
    circuitos_especiais_pnth       BOOLEAN DEFAULT FALSE,
    obs_eletrica_pnth              TEXT,
    ponto_agua_pnth                BOOLEAN DEFAULT FALSE,
    quantidade_pontos_agua_pnth    INTEGER,
    ponto_esgoto_pnth              BOOLEAN DEFAULT FALSE,
    vazao_necessaria_lmin_pnth     DECIMAL(8,2),
    caixa_gordura_pnth             BOOLEAN DEFAULT FALSE,
    obs_hidraulica_pnth            TEXT,
    necessita_gas_pnth             BOOLEAN DEFAULT FALSE,
    tipo_gas_pnth                  VARCHAR(20),
    consumo_gas_m3h_pnth           DECIMAL(8,2),
    obs_gas_pnth                   TEXT,
    necessita_exaustao_pnth        BOOLEAN DEFAULT FALSE,
    vazao_exaustao_m3h_pnth        DECIMAL(10,2),
    necessita_make_up_ar_pnth      BOOLEAN DEFAULT FALSE,
    obs_ventilacao_pnth            TEXT,
    area_minima_m2_pnth            DECIMAL(8,2),
    area_maxima_m2_pnth            DECIMAL(8,2),
    pe_direito_minimo_m_pnth       DECIMAL(5,2),
    carga_piso_kgm2_pnth           DECIMAL(8,2),
    necessita_mezanino_pnth        BOOLEAN DEFAULT FALSE,
    obs_estrutura_pnth             TEXT,
    frente_minima_m_pnth           DECIMAL(6,2),
    tipo_fachada_pnth              VARCHAR(20),
    comunicacao_visual_led_pnth    BOOLEAN DEFAULT FALSE,
    obs_fachada_pnth               TEXT,
    pontos_dados_pnth              INTEGER,
    necessita_fibra_pnth           BOOLEAN DEFAULT FALSE,
    obs_telecom_pnth               TEXT,
    status_pnth                    VARCHAR(30),
    id_usuario_responsavel_pnth    UUID REFERENCES "Usuario"(id_u),
    criado_em_pnth                 TIMESTAMP,
    atualizado_em_pnth             TIMESTAMP
);

CREATE TABLE "PropostaCessaoDireitosHistorico" (
    id_historico_pcdh              UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    res_sperata_proposta_pcdh      DECIMAL(15,2),
    referencia_mercado_por_m2_pcdh DECIMAL(10,2),
    sinal_res_sperata_pcdh         DECIMAL(15,2),
    forma_pagamento_saldo_pcdh     VARCHAR(100),
    num_parcelas_pcdh              INTEGER,
    status_res_sperata_pcdh        VARCHAR(50),
    observacoes_pcdh               TEXT
);

CREATE TABLE "PropostaTaxaTransferenciaHistorico" (
    id_historico_ptth          UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    tt_contratual_ptth         DECIMAL(15,2),
    tt_proposta_ptth           DECIMAL(15,2),
    tt_proposta_num_amm_ptth   DECIMAL(10,2),
    sinal_tt_ptth              DECIMAL(15,2),
    forma_pagamento_tt_ptth    VARCHAR(100),
    justificativa_tt_ptth      TEXT,
    status_tt_ptth             VARCHAR(50)
);

CREATE TABLE "PropostaParecerComiteHistorico" (
    id_historico_ppch              UUID PRIMARY KEY REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    presidente_ppch                BOOLEAN DEFAULT FALSE,
    presidente_data_ppch           DATE,
    diretoria_comp1_ppch           BOOLEAN DEFAULT FALSE,
    diretoria_comp1_data_ppch      DATE,
    diretoria_comp2_ppch           BOOLEAN DEFAULT FALSE,
    diretoria_comp2_data_ppch      DATE,
    superintendente_ppch           BOOLEAN DEFAULT FALSE,
    superintendente_data_ppch      DATE,
    in_networking_ppch             BOOLEAN DEFAULT FALSE,
    in_networking_data_ppch        DATE
);

CREATE TABLE "PropostaDocumentoHistorico" (
    id_pdh              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id_historico_pdh    UUID          NOT NULL REFERENCES "PropostaHistorico"(id_ph) ON DELETE CASCADE,
    id_usuario_pdh      UUID          NOT NULL REFERENCES "Usuario"(id_u),
    codigo_pdh          VARCHAR(50)   NOT NULL,
    nome_original_pdh   VARCHAR(255)  NOT NULL,
    tipo_pdh            VARCHAR(10)   NOT NULL,
    tamanho_pdh         VARCHAR(20)   NOT NULL,
    url_storage_pdh     VARCHAR(500),
    data_upload_pdh     TIMESTAMP     NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Índices para performance
-- ============================================================
CREATE INDEX idx_proposta_unidade    ON "Proposta"(id_unidade_p);
CREATE INDEX idx_proposta_status     ON "Proposta"(status_p);
CREATE INDEX idx_proposta_criacao    ON "Proposta"(data_criacao_p);
CREATE INDEX idx_historico_proposta  ON "PropostaHistorico"(id_proposta_ph);
CREATE INDEX idx_documento_proposta  ON "PropostaDocumento"(id_proposta_pd);
````

## File: API/migrations/000002_seed_usuario_base.down.sql
````sql
DELETE FROM "Usuario" WHERE email_u = 'admin@flamboyant.com.br';
````

## File: API/migrations/000002_seed_usuario_base.up.sql
````sql
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
````

## File: API/migrations/000003_seed_unidades.down.sql
````sql
DELETE FROM "Unidade";
````

## File: API/migrations/000003_seed_unidades.up.sql
````sql
-- ============================================================
-- BES-2026 | Migration 000003 — 200 Unidades fictícias
-- 3 pisos (P/S/T) x 5 corredores (A/B/C/D/E) x ~13 unidades
-- ============================================================

INSERT INTO "Unidade" (id_un, codigo_un, piso_un, corredor_un, area_un, criado_em_un) VALUES
    (gen_random_uuid(), 'L1-001', 'P', 'A', 290.00, NOW()),
    (gen_random_uuid(), 'L1-002', 'P', 'A', 218.00, NOW()),
    (gen_random_uuid(), 'L1-003', 'P', 'A', 166.00, NOW()),
    (gen_random_uuid(), 'L1-004', 'P', 'A', 180.00, NOW()),
    (gen_random_uuid(), 'L1-005', 'P', 'A', 100.00, NOW()),
    (gen_random_uuid(), 'L1-006', 'P', 'A', 156.00, NOW()),
    (gen_random_uuid(), 'L1-007', 'P', 'A', 280.00, NOW()),
    (gen_random_uuid(), 'L1-008', 'P', 'A', 260.00, NOW()),
    (gen_random_uuid(), 'L1-009', 'P', 'A', 90.00, NOW()),
    (gen_random_uuid(), 'L1-010', 'P', 'A', 90.00, NOW()),
    (gen_random_uuid(), 'L1-011', 'P', 'A', 117.00, NOW()),
    (gen_random_uuid(), 'L1-012', 'P', 'A', 218.00, NOW()),
    (gen_random_uuid(), 'L1-013', 'P', 'A', 218.00, NOW()),
    (gen_random_uuid(), 'L1-014', 'P', 'A', 650.00, NOW()),
    (gen_random_uuid(), 'L1-015', 'P', 'B', 85.00, NOW()),
    (gen_random_uuid(), 'L1-016', 'P', 'B', 290.00, NOW()),
    (gen_random_uuid(), 'L1-017', 'P', 'B', 85.00, NOW()),
    (gen_random_uuid(), 'L1-018', 'P', 'B', 90.00, NOW()),
    (gen_random_uuid(), 'L1-019', 'P', 'B', 156.00, NOW()),
    (gen_random_uuid(), 'L1-020', 'P', 'B', 80.00, NOW()),
    (gen_random_uuid(), 'L1-021', 'P', 'B', 129.00, NOW()),
    (gen_random_uuid(), 'L1-022', 'P', 'B', 100.00, NOW()),
    (gen_random_uuid(), 'L1-023', 'P', 'B', 90.00, NOW()),
    (gen_random_uuid(), 'L1-024', 'P', 'B', 156.00, NOW()),
    (gen_random_uuid(), 'L1-025', 'P', 'B', 650.00, NOW()),
    (gen_random_uuid(), 'L1-026', 'P', 'B', 800.00, NOW()),
    (gen_random_uuid(), 'L1-027', 'P', 'B', 280.00, NOW()),
    (gen_random_uuid(), 'L1-028', 'P', 'B', 166.00, NOW()),
    (gen_random_uuid(), 'L1-029', 'P', 'C', 166.00, NOW()),
    (gen_random_uuid(), 'L1-030', 'P', 'C', 117.00, NOW()),
    (gen_random_uuid(), 'L1-031', 'P', 'C', 117.00, NOW()),
    (gen_random_uuid(), 'L1-032', 'P', 'C', 148.00, NOW()),
    (gen_random_uuid(), 'L1-033', 'P', 'C', 290.00, NOW()),
    (gen_random_uuid(), 'L1-034', 'P', 'C', 129.00, NOW()),
    (gen_random_uuid(), 'L1-035', 'P', 'C', 68.00, NOW()),
    (gen_random_uuid(), 'L1-036', 'P', 'C', 90.00, NOW()),
    (gen_random_uuid(), 'L1-037', 'P', 'C', 85.00, NOW()),
    (gen_random_uuid(), 'L1-038', 'P', 'C', 148.00, NOW()),
    (gen_random_uuid(), 'L1-039', 'P', 'C', 90.00, NOW()),
    (gen_random_uuid(), 'L1-040', 'P', 'C', 90.00, NOW()),
    (gen_random_uuid(), 'L1-041', 'P', 'C', 290.00, NOW()),
    (gen_random_uuid(), 'L1-042', 'P', 'C', 290.00, NOW()),
    (gen_random_uuid(), 'L1-043', 'P', 'D', 250.00, NOW()),
    (gen_random_uuid(), 'L1-044', 'P', 'D', 89.00, NOW()),
    (gen_random_uuid(), 'L1-045', 'P', 'D', 80.00, NOW()),
    (gen_random_uuid(), 'L1-046', 'P', 'D', 800.00, NOW()),
    (gen_random_uuid(), 'L1-047', 'P', 'D', 85.00, NOW()),
    (gen_random_uuid(), 'L1-048', 'P', 'D', 134.00, NOW()),
    (gen_random_uuid(), 'L1-049', 'P', 'D', 156.00, NOW()),
    (gen_random_uuid(), 'L1-050', 'P', 'D', 77.00, NOW()),
    (gen_random_uuid(), 'L1-051', 'P', 'D', 117.00, NOW()),
    (gen_random_uuid(), 'L1-052', 'P', 'D', 280.00, NOW()),
    (gen_random_uuid(), 'L1-053', 'P', 'D', 250.00, NOW()),
    (gen_random_uuid(), 'L1-054', 'P', 'D', 80.00, NOW()),
    (gen_random_uuid(), 'L1-055', 'P', 'D', 650.00, NOW()),
    (gen_random_uuid(), 'L1-056', 'P', 'D', 129.00, NOW()),
    (gen_random_uuid(), 'L1-057', 'P', 'E', 650.00, NOW()),
    (gen_random_uuid(), 'L1-058', 'P', 'E', 250.00, NOW()),
    (gen_random_uuid(), 'L1-059', 'P', 'E', 260.00, NOW()),
    (gen_random_uuid(), 'L1-060', 'P', 'E', 218.00, NOW()),
    (gen_random_uuid(), 'L1-061', 'P', 'E', 77.00, NOW()),
    (gen_random_uuid(), 'L1-062', 'P', 'E', 650.00, NOW()),
    (gen_random_uuid(), 'L1-063', 'P', 'E', 89.00, NOW()),
    (gen_random_uuid(), 'L1-064', 'P', 'E', 68.00, NOW()),
    (gen_random_uuid(), 'L1-065', 'P', 'E', 134.00, NOW()),
    (gen_random_uuid(), 'L1-066', 'P', 'E', 500.00, NOW()),
    (gen_random_uuid(), 'L1-067', 'P', 'E', 190.00, NOW()),
    (gen_random_uuid(), 'L1-068', 'P', 'E', 148.00, NOW()),
    (gen_random_uuid(), 'L1-069', 'P', 'E', 85.00, NOW()),
    (gen_random_uuid(), 'L1-070', 'P', 'E', 218.00, NOW()),
    (gen_random_uuid(), 'L2-001', 'S', 'A', 290.00, NOW()),
    (gen_random_uuid(), 'L2-002', 'S', 'A', 148.00, NOW()),
    (gen_random_uuid(), 'L2-003', 'S', 'A', 80.00, NOW()),
    (gen_random_uuid(), 'L2-004', 'S', 'A', 190.00, NOW()),
    (gen_random_uuid(), 'L2-005', 'S', 'A', 500.00, NOW()),
    (gen_random_uuid(), 'L2-006', 'S', 'A', 290.00, NOW()),
    (gen_random_uuid(), 'L2-007', 'S', 'A', 290.00, NOW()),
    (gen_random_uuid(), 'L2-008', 'S', 'A', 80.00, NOW()),
    (gen_random_uuid(), 'L2-009', 'S', 'A', 260.00, NOW()),
    (gen_random_uuid(), 'L2-010', 'S', 'A', 180.00, NOW()),
    (gen_random_uuid(), 'L2-011', 'S', 'A', 218.00, NOW()),
    (gen_random_uuid(), 'L2-012', 'S', 'A', 225.00, NOW()),
    (gen_random_uuid(), 'L2-013', 'S', 'A', 500.00, NOW()),
    (gen_random_uuid(), 'L2-014', 'S', 'A', 85.00, NOW()),
    (gen_random_uuid(), 'L2-015', 'S', 'B', 90.00, NOW()),
    (gen_random_uuid(), 'L2-016', 'S', 'B', 148.00, NOW()),
    (gen_random_uuid(), 'L2-017', 'S', 'B', 134.00, NOW()),
    (gen_random_uuid(), 'L2-018', 'S', 'B', 225.00, NOW()),
    (gen_random_uuid(), 'L2-019', 'S', 'B', 180.00, NOW()),
    (gen_random_uuid(), 'L2-020', 'S', 'B', 290.00, NOW()),
    (gen_random_uuid(), 'L2-021', 'S', 'B', 156.00, NOW()),
    (gen_random_uuid(), 'L2-022', 'S', 'B', 68.00, NOW()),
    (gen_random_uuid(), 'L2-023', 'S', 'B', 89.00, NOW()),
    (gen_random_uuid(), 'L2-024', 'S', 'B', 100.00, NOW()),
    (gen_random_uuid(), 'L2-025', 'S', 'B', 85.00, NOW()),
    (gen_random_uuid(), 'L2-026', 'S', 'B', 650.00, NOW()),
    (gen_random_uuid(), 'L2-027', 'S', 'B', 500.00, NOW()),
    (gen_random_uuid(), 'L2-028', 'S', 'B', 117.00, NOW()),
    (gen_random_uuid(), 'L2-029', 'S', 'C', 85.00, NOW()),
    (gen_random_uuid(), 'L2-030', 'S', 'C', 180.00, NOW()),
    (gen_random_uuid(), 'L2-031', 'S', 'C', 650.00, NOW()),
    (gen_random_uuid(), 'L2-032', 'S', 'C', 650.00, NOW()),
    (gen_random_uuid(), 'L2-033', 'S', 'C', 89.00, NOW()),
    (gen_random_uuid(), 'L2-034', 'S', 'C', 400.00, NOW()),
    (gen_random_uuid(), 'L2-035', 'S', 'C', 100.00, NOW()),
    (gen_random_uuid(), 'L2-036', 'S', 'C', 148.00, NOW()),
    (gen_random_uuid(), 'L2-037', 'S', 'C', 250.00, NOW()),
    (gen_random_uuid(), 'L2-038', 'S', 'C', 218.00, NOW()),
    (gen_random_uuid(), 'L2-039', 'S', 'C', 68.00, NOW()),
    (gen_random_uuid(), 'L2-040', 'S', 'C', 218.00, NOW()),
    (gen_random_uuid(), 'L2-041', 'S', 'C', 650.00, NOW()),
    (gen_random_uuid(), 'L2-042', 'S', 'C', 117.00, NOW()),
    (gen_random_uuid(), 'L2-043', 'S', 'D', 156.00, NOW()),
    (gen_random_uuid(), 'L2-044', 'S', 'D', 134.00, NOW()),
    (gen_random_uuid(), 'L2-045', 'S', 'D', 290.00, NOW()),
    (gen_random_uuid(), 'L2-046', 'S', 'D', 650.00, NOW()),
    (gen_random_uuid(), 'L2-047', 'S', 'D', 400.00, NOW()),
    (gen_random_uuid(), 'L2-048', 'S', 'D', 290.00, NOW()),
    (gen_random_uuid(), 'L2-049', 'S', 'D', 218.00, NOW()),
    (gen_random_uuid(), 'L2-050', 'S', 'D', 260.00, NOW()),
    (gen_random_uuid(), 'L2-051', 'S', 'D', 148.00, NOW()),
    (gen_random_uuid(), 'L2-052', 'S', 'D', 218.00, NOW()),
    (gen_random_uuid(), 'L2-053', 'S', 'D', 166.00, NOW()),
    (gen_random_uuid(), 'L2-054', 'S', 'D', 190.00, NOW()),
    (gen_random_uuid(), 'L2-055', 'S', 'D', 218.00, NOW()),
    (gen_random_uuid(), 'L2-056', 'S', 'D', 117.00, NOW()),
    (gen_random_uuid(), 'L2-057', 'S', 'E', 166.00, NOW()),
    (gen_random_uuid(), 'L2-058', 'S', 'E', 260.00, NOW()),
    (gen_random_uuid(), 'L2-059', 'S', 'E', 166.00, NOW()),
    (gen_random_uuid(), 'L2-060', 'S', 'E', 166.00, NOW()),
    (gen_random_uuid(), 'L2-061', 'S', 'E', 90.00, NOW()),
    (gen_random_uuid(), 'L2-062', 'S', 'E', 134.00, NOW()),
    (gen_random_uuid(), 'L2-063', 'S', 'E', 650.00, NOW()),
    (gen_random_uuid(), 'L2-064', 'S', 'E', 166.00, NOW()),
    (gen_random_uuid(), 'L2-065', 'S', 'E', 280.00, NOW()),
    (gen_random_uuid(), 'L2-066', 'S', 'E', 85.00, NOW()),
    (gen_random_uuid(), 'L2-067', 'S', 'E', 90.00, NOW()),
    (gen_random_uuid(), 'L2-068', 'S', 'E', 190.00, NOW()),
    (gen_random_uuid(), 'L2-069', 'S', 'E', 190.00, NOW()),
    (gen_random_uuid(), 'L2-070', 'S', 'E', 129.00, NOW()),
    (gen_random_uuid(), 'L3-001', 'T', 'A', 218.00, NOW()),
    (gen_random_uuid(), 'L3-002', 'T', 'A', 156.00, NOW()),
    (gen_random_uuid(), 'L3-003', 'T', 'A', 218.00, NOW()),
    (gen_random_uuid(), 'L3-004', 'T', 'A', 250.00, NOW()),
    (gen_random_uuid(), 'L3-005', 'T', 'A', 800.00, NOW()),
    (gen_random_uuid(), 'L3-006', 'T', 'A', 180.00, NOW()),
    (gen_random_uuid(), 'L3-007', 'T', 'A', 148.00, NOW()),
    (gen_random_uuid(), 'L3-008', 'T', 'A', 148.00, NOW()),
    (gen_random_uuid(), 'L3-009', 'T', 'A', 80.00, NOW()),
    (gen_random_uuid(), 'L3-010', 'T', 'A', 218.00, NOW()),
    (gen_random_uuid(), 'L3-011', 'T', 'A', 250.00, NOW()),
    (gen_random_uuid(), 'L3-012', 'T', 'A', 225.00, NOW()),
    (gen_random_uuid(), 'L3-013', 'T', 'A', 134.00, NOW()),
    (gen_random_uuid(), 'L3-014', 'T', 'A', 166.00, NOW()),
    (gen_random_uuid(), 'L3-015', 'T', 'B', 180.00, NOW()),
    (gen_random_uuid(), 'L3-016', 'T', 'B', 280.00, NOW()),
    (gen_random_uuid(), 'L3-017', 'T', 'B', 190.00, NOW()),
    (gen_random_uuid(), 'L3-018', 'T', 'B', 148.00, NOW()),
    (gen_random_uuid(), 'L3-019', 'T', 'B', 290.00, NOW()),
    (gen_random_uuid(), 'L3-020', 'T', 'B', 77.00, NOW()),
    (gen_random_uuid(), 'L3-021', 'T', 'B', 117.00, NOW()),
    (gen_random_uuid(), 'L3-022', 'T', 'B', 800.00, NOW()),
    (gen_random_uuid(), 'L3-023', 'T', 'B', 100.00, NOW()),
    (gen_random_uuid(), 'L3-024', 'T', 'B', 250.00, NOW()),
    (gen_random_uuid(), 'L3-025', 'T', 'B', 250.00, NOW()),
    (gen_random_uuid(), 'L3-026', 'T', 'B', 225.00, NOW()),
    (gen_random_uuid(), 'L3-027', 'T', 'B', 400.00, NOW()),
    (gen_random_uuid(), 'L3-028', 'T', 'B', 129.00, NOW()),
    (gen_random_uuid(), 'L3-029', 'T', 'C', 650.00, NOW()),
    (gen_random_uuid(), 'L3-030', 'T', 'C', 280.00, NOW()),
    (gen_random_uuid(), 'L3-031', 'T', 'C', 180.00, NOW()),
    (gen_random_uuid(), 'L3-032', 'T', 'C', 117.00, NOW()),
    (gen_random_uuid(), 'L3-033', 'T', 'C', 117.00, NOW()),
    (gen_random_uuid(), 'L3-034', 'T', 'C', 100.00, NOW()),
    (gen_random_uuid(), 'L3-035', 'T', 'C', 80.00, NOW()),
    (gen_random_uuid(), 'L3-036', 'T', 'C', 500.00, NOW()),
    (gen_random_uuid(), 'L3-037', 'T', 'C', 218.00, NOW()),
    (gen_random_uuid(), 'L3-038', 'T', 'C', 225.00, NOW()),
    (gen_random_uuid(), 'L3-039', 'T', 'C', 117.00, NOW()),
    (gen_random_uuid(), 'L3-040', 'T', 'C', 500.00, NOW()),
    (gen_random_uuid(), 'L3-041', 'T', 'C', 85.00, NOW()),
    (gen_random_uuid(), 'L3-042', 'T', 'C', 90.00, NOW()),
    (gen_random_uuid(), 'L3-043', 'T', 'D', 80.00, NOW()),
    (gen_random_uuid(), 'L3-044', 'T', 'D', 89.00, NOW()),
    (gen_random_uuid(), 'L3-045', 'T', 'D', 180.00, NOW()),
    (gen_random_uuid(), 'L3-046', 'T', 'D', 180.00, NOW()),
    (gen_random_uuid(), 'L3-047', 'T', 'D', 800.00, NOW()),
    (gen_random_uuid(), 'L3-048', 'T', 'D', 80.00, NOW()),
    (gen_random_uuid(), 'L3-049', 'T', 'D', 290.00, NOW()),
    (gen_random_uuid(), 'L3-050', 'T', 'D', 400.00, NOW()),
    (gen_random_uuid(), 'L3-051', 'T', 'D', 650.00, NOW()),
    (gen_random_uuid(), 'L3-052', 'T', 'D', 166.00, NOW()),
    (gen_random_uuid(), 'L3-053', 'T', 'D', 166.00, NOW()),
    (gen_random_uuid(), 'L3-054', 'T', 'D', 156.00, NOW()),
    (gen_random_uuid(), 'L3-055', 'T', 'D', 148.00, NOW()),
    (gen_random_uuid(), 'L3-056', 'T', 'D', 100.00, NOW()),
    (gen_random_uuid(), 'L3-057', 'T', 'E', 129.00, NOW()),
    (gen_random_uuid(), 'L3-058', 'T', 'E', 80.00, NOW()),
    (gen_random_uuid(), 'L3-059', 'T', 'E', 129.00, NOW()),
    (gen_random_uuid(), 'L3-060', 'T', 'E', 90.00, NOW());
````

## File: API/migrations/000004_add_token_usuario.down.sql
````sql
ALTER TABLE "Usuario"
  DROP COLUMN IF EXISTS token_ativo_u,
  DROP COLUMN IF EXISTS token_expira_em_u;

DROP INDEX IF EXISTS idx_usuario_token;
````

## File: API/migrations/000004_add_token_usuario.up.sql
````sql
ALTER TABLE "Usuario"
  ADD COLUMN token_ativo_u     VARCHAR(500),
  ADD COLUMN token_expira_em_u TIMESTAMP;

CREATE INDEX idx_usuario_token ON "Usuario"(token_ativo_u);
````

## File: codegen/generate.go
````go
//go:generate go run generate.go
// ============================================================
// codegen/generate.go — Gerador automático de entidades
// ============================================================
//
// Lê todas as migrations *.up.sql em ordem alfabética e gera:
//
//   entities/*.go             → structs Go com tags json e db
//   entities/*.ts             → interfaces TypeScript
//   API/internal/entities/*.go → cópia para o backend
//   Figma/src/app/entities/*.ts → cópia para o frontend
//
// Como usar (raiz do projeto):
//   .\ajustar entidades via migration.ps1
//   ou: go run ./codegen/generate.go [caminho-raiz]
//
// Convenções de nomenclatura:
//   Coluna: nome_fantasia_p  →  Go: NomeFantasia  TS: nomeFantasia
//   O sufixo de tabela (_p, _un, _pla, etc.) é removido automaticamente.
//   Campos nullable → Go: *string, *float64 etc. | TS: string | null
//
// Para adicionar uma nova entidade:
//   1. Criar migration SQL em API/migrations/NNNNN_nome.up.sql
//   2. Executar .\ajustar entidades via migration.ps1
//   3. Os arquivos serão gerados/atualizados automaticamente
// ============================================================
// Lê todas as migrations *.up.sql e gera:
//   - entities/*.go + entities/*.ts        (pasta raiz do projeto)
//   - API/internal/entities/*.go           (para o backend Go)
//   - Figma/src/app/entities/*.ts          (para o frontend React)
//
// Uso:
//   go run ./codegen/generate.go [raiz-do-projeto]
//   ou via PowerShell:
//   .\codegen\generate.ps1
// ============================================================
package main

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
	"unicode"
)

var sqlToGo = map[string]string{
	"UUID": "string", "VARCHAR": "string", "CHAR": "string", "TEXT": "string",
	"DECIMAL": "float64", "NUMERIC": "float64",
	"INTEGER": "int", "INT": "int", "BIGINT": "int64", "SMALLINT": "int16",
	"BOOLEAN": "bool",
	"TIMESTAMP": "string", "TIMESTAMPTZ": "string", "DATE": "string",
}

var sqlToTS = map[string]string{
	"UUID": "string", "VARCHAR": "string", "CHAR": "string", "TEXT": "string",
	"DECIMAL": "number", "NUMERIC": "number",
	"INTEGER": "number", "INT": "number", "BIGINT": "number", "SMALLINT": "number",
	"BOOLEAN": "boolean",
	"TIMESTAMP": "string", "TIMESTAMPTZ": "string", "DATE": "string",
}

type Column struct {
	DBName   string
	SQLType  string
	Nullable bool
	IsPK     bool
}

type Table struct {
	Name    string
	Columns []Column
}

func colToCamel(col string) string {
	parts := strings.Split(col, "_")
	suffix := parts[len(parts)-1]
	if len(suffix) <= 4 && isAlpha(suffix) {
		parts = parts[:len(parts)-1]
	}
	if len(parts) == 0 {
		return col
	}
	result := parts[0]
	for _, p := range parts[1:] {
		result += strings.Title(p)
	}
	return result
}

func isAlpha(s string) bool {
	for _, r := range s {
		if !unicode.IsLetter(r) {
			return false
		}
	}
	return true
}

func camelToPascal(s string) string {
	if s == "" {
		return s
	}
	return strings.ToUpper(s[:1]) + s[1:]
}

func tableToFileName(name string) string {
	re := regexp.MustCompile(`([A-Z])`)
	snake := re.ReplaceAllStringFunc(name, func(s string) string {
		return "_" + strings.ToLower(s)
	})
	return strings.TrimPrefix(snake, "_")
}

var tableRe = regexp.MustCompile(`(?s)CREATE TABLE "(\w+)" \((.*?)\);`)
var colRe   = regexp.MustCompile(`^(\w+)\s+(\w+(?:\(\d+(?:,\d+)?\))?)(.*)$`)

func parseSQL(sql string) []Table {
	matches := tableRe.FindAllStringSubmatch(sql, -1)
	var tables []Table
	for _, m := range matches {
		tableName := m[1]
		body := m[2]
		var cols []Column
		for _, line := range strings.Split(body, "\n") {
			line = strings.TrimSpace(strings.TrimRight(line, ","))
			if line == "" || strings.HasPrefix(line, "--") {
				continue
			}
			up := strings.ToUpper(line)
			skip := []string{"CONSTRAINT", "CREATE", "PRIMARY KEY (", "UNIQUE (", "CHECK ("}
			skipped := false
			for _, s := range skip {
				if strings.HasPrefix(up, s) { skipped = true; break }
			}
			if skipped { continue }
			cm := colRe.FindStringSubmatch(line)
			if cm == nil { continue }
			colName := cm[1]
			sqlType := strings.ToUpper(strings.Split(cm[2], "(")[0])
			rest := strings.ToUpper(cm[3])
			isPK := strings.Contains(rest, "PRIMARY KEY")
			notNull := strings.Contains(rest, "NOT NULL") || isPK
			cols = append(cols, Column{
				DBName: colName, SQLType: sqlType,
				Nullable: !notNull, IsPK: isPK,
			})
		}
		tables = append(tables, Table{Name: tableName, Columns: cols})
	}
	return tables
}

func generateGo(t Table) string {
	var sb strings.Builder
	sb.WriteString("// Code generated by codegen/generate.go — DO NOT EDIT.\n")
	sb.WriteString("// Atualize rodando: .\\codegen\\generate.ps1\n\n")
	sb.WriteString("package entities\n\n")
	sb.WriteString(fmt.Sprintf("// %s representa a tabela \"%s\" do banco de dados.\n", t.Name, t.Name))
	sb.WriteString(fmt.Sprintf("type %s struct {\n", t.Name))
	for _, col := range t.Columns {
		camel := colToCamel(col.DBName)
		pascal := camelToPascal(camel)
		goT := sqlToGo[col.SQLType]
		if goT == "" { goT = "string" }
		if col.Nullable && !col.IsPK && col.SQLType != "BOOLEAN" {
			goT = "*" + goT
		}
		sb.WriteString(fmt.Sprintf("\t%-40s %-12s `json:\"%s\" db:\"%s\"`\n",
			pascal, goT, camel, col.DBName))
	}
	sb.WriteString("}\n")
	return sb.String()
}

func generateTS(t Table) string {
	var sb strings.Builder
	sb.WriteString("// Code generated by codegen/generate.go — DO NOT EDIT.\n")
	sb.WriteString("// Atualize rodando: .\\codegen\\generate.ps1\n\n")
	sb.WriteString(fmt.Sprintf("/** Representa a tabela \"%s\" do banco de dados. */\n", t.Name))
	sb.WriteString(fmt.Sprintf("export interface %s {\n", t.Name))
	for _, col := range t.Columns {
		camel := colToCamel(col.DBName)
		tsT := sqlToTS[col.SQLType]
		if tsT == "" { tsT = "string" }
		opt := ""
		if col.Nullable && col.SQLType != "BOOLEAN" {
			tsT += " | null"; opt = "?"
		}
		sb.WriteString(fmt.Sprintf("  %s%s: %s;\n", camel, opt, tsT))
	}
	sb.WriteString("}\n")
	return sb.String()
}

func writeFile(path, content string) {
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		fmt.Fprintf(os.Stderr, "Erro criando dir %s: %v\n", filepath.Dir(path), err)
		return
	}
	if err := os.WriteFile(path, []byte(content), 0644); err != nil {
		fmt.Fprintf(os.Stderr, "Erro escrevendo %s: %v\n", path, err)
		return
	}
	fmt.Printf("  ✓ %s\n", path)
}

func main() {
	// Raiz do projeto: argumento ou diretório pai do codegen
	root := ""
	if len(os.Args) > 1 {
		root = os.Args[1]
	} else {
		// Tentar achar subindo de onde o binário está
		dir, _ := os.Getwd()
		for i := 0; i < 5; i++ {
			if _, err := os.Stat(filepath.Join(dir, "API")); err == nil {
				root = dir; break
			}
			dir = filepath.Dir(dir)
		}
	}
	if root == "" {
		fmt.Fprintln(os.Stderr, "Erro: raiz do projeto não encontrada. Passe o caminho como argumento.")
		os.Exit(1)
	}

	migrationsDir := filepath.Join(root, "API", "migrations")
	files, _ := filepath.Glob(filepath.Join(migrationsDir, "*.up.sql"))
	sort.Strings(files)

	if len(files) == 0 {
		fmt.Fprintf(os.Stderr, "Nenhuma migration encontrada em %s\n", migrationsDir)
		os.Exit(1)
	}

	var fullSQL strings.Builder
	for _, f := range files {
		data, _ := os.ReadFile(f)
		fullSQL.Write(data)
		fullSQL.WriteString("\n")
	}

	tables := parseSQL(fullSQL.String())
	fmt.Printf("Encontradas %d tabelas em %s\n\n", len(tables), migrationsDir)

	// Pastas de saída
	entitiesDir    := filepath.Join(root, "entities")
	goEntitiesDir  := filepath.Join(root, "API", "internal", "entities")
	tsEntitiesDir  := filepath.Join(root, "Figma", "src", "app", "entities")

	// index.ts
	var indexLines []string
	indexLines = append(indexLines, "// Code generated by codegen/generate.go — DO NOT EDIT.")
	indexLines = append(indexLines, "// Atualize rodando: .\\codegen\\generate.ps1")
	indexLines = append(indexLines, "")

	for _, t := range tables {
		fileName := tableToFileName(t.Name)
		goContent := generateGo(t)
		tsContent := generateTS(t)

		writeFile(filepath.Join(entitiesDir, fileName+".go"), goContent)
		writeFile(filepath.Join(entitiesDir, fileName+".ts"), tsContent)
		writeFile(filepath.Join(goEntitiesDir, fileName+".go"), goContent)
		writeFile(filepath.Join(tsEntitiesDir, fileName+".ts"), tsContent)

		indexLines = append(indexLines, fmt.Sprintf("export * from './%s';", fileName))
	}

	indexLines = append(indexLines, "")
	writeFile(filepath.Join(tsEntitiesDir, "index.ts"), strings.Join(indexLines, "\n"))
	writeFile(filepath.Join(entitiesDir, "index.ts"), strings.Join(indexLines, "\n"))

	fmt.Printf("\nPronto! %d entidades geradas.\n", len(tables))
}
````

## File: codegen/generate.ps1
````powershell
# generate.ps1 — Regenera as entidades a partir das migrations
# Uso: .\codegen\generate.ps1
# Rodar da raiz do projeto (Projeto-Flamboyant/)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

Write-Host "Gerando entidades a partir das migrations..." -ForegroundColor Cyan
Write-Host "Raiz do projeto: $Root" -ForegroundColor Gray

# Rodar o codegen apontando para a raiz do projeto
Set-Location -Path "$PSScriptRoot"
go run generate.go $Root

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Entidades geradas com sucesso!" -ForegroundColor Green
    Write-Host "  - entities/*.go (structs Go)" -ForegroundColor Gray
    Write-Host "  - entities/*.ts (interfaces TypeScript)" -ForegroundColor Gray
    Write-Host "  - Figma/src/app/entities/*.ts" -ForegroundColor Gray
    Write-Host "  - API/internal/entities/*.go" -ForegroundColor Gray
} else {
    Write-Host "Erro ao gerar entidades." -ForegroundColor Red
    exit 1
}
````

## File: codegen/go.mod
````
module codegen

go 1.21
````

## File: COMO_USAR_DEBUG.txt
````
============================================================
  BES-2026 — Como usar o modo Debug
============================================================

REQUISITOS
----------
- Go instalado (https://go.dev/dl/)
- Node.js e npm instalados (https://nodejs.org/)
- VS Code com a extensão "Go" da Google instalada


PASSO 1 — Rodar o script de debug
-----------------------------------
Abra o PowerShell na pasta raiz do projeto e execute:

    .\debug.ps1

O script vai:
  - Verificar Go, Node e npm
  - Instalar o Delve (debugger do Go) se ainda não tiver
  - Abrir duas janelas novas:
      * API rodando via Delve na porta 8080 (debugger em :2345)
      * Frontend rodando em modo desenvolvimento na porta 5173


PASSO 2 — Configurar o VS Code para conectar ao debugger
----------------------------------------------------------
Crie (ou edite) o arquivo .vscode/launch.json na raiz do projeto
com o seguinte conteúdo:

    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Attach to API (Delve)",
          "type": "go",
          "request": "attach",
          "mode": "remote",
          "remotePath": "${workspaceFolder}/API",
          "port": 2345,
          "host": "127.0.0.1"
        }
      ]
    }


PASSO 3 — Conectar o debugger no VS Code
-----------------------------------------
1. Aguarde a janela da API abrir e mostrar a mensagem de que
   o Delve está ouvindo na porta 2345.

2. No VS Code, vá em:
       Executar > Iniciar Depuração  (ou pressione F5)

3. Selecione a configuração "Attach to API (Delve)".

4. O VS Code vai conectar ao processo Go em execução.


PASSO 4 — Usar breakpoints
----------------------------
- Clique na margem esquerda de qualquer linha de código Go
  para adicionar um breakpoint (ponto vermelho).
- Faça uma requisição para a API (pelo frontend ou Postman).
- A execução vai pausar no breakpoint automaticamente.
- No painel lateral do VS Code você pode:
    * Ver o valor das variáveis
    * Inspecionar a pilha de chamadas (call stack)
    * Avançar linha por linha (F10) ou entrar em funções (F11)
    * Continuar a execução (F5)


ENDEREÇOS ENQUANTO O DEBUG ESTÁ RODANDO
-----------------------------------------
  API:        http://localhost:8080
  Frontend:   http://localhost:5173
  Delve DAP:  localhost:2345


ENCERRAR O DEBUG
-----------------
- Desconecte o debugger no VS Code (Shift+F5).
- Feche as duas janelas do PowerShell que foram abertas.


DICAS
------
- Se o Delve travar ou não aceitar conexão, feche a janela
  da API e rode .\debug.ps1 novamente.
- Logs detalhados aparecem diretamente na janela da API
  (GIN_MODE=debug e LOG_LEVEL=debug estão ativos).
- O frontend não precisa de configuração extra; o hot-reload
  já funciona em modo desenvolvimento.

============================================================
````

## File: debug.ps1
````powershell
# ============================================================
# BES-2026 — Script de debug (PowerShell)
# Uso: .\debug.ps1
# ============================================================

$ErrorActionPreference = "Stop"

function Log  { Write-Host "[BES-2026] $args" -ForegroundColor Cyan }
function Warn { Write-Host "[AVISO] $args" -ForegroundColor Yellow }
function Err  { Write-Host "[ERRO] $args" -ForegroundColor Red; Read-Host "Pressione Enter para sair"; exit 1 }

Write-Host ""
Log "Iniciando em modo DEBUG..."
Write-Host ""

# ── Verificar Go ─────────────────────────────────────────────
if (-not (Get-Command go -ErrorAction SilentlyContinue)) {
    Err "Go nao encontrado. Instale em https://go.dev/dl/"
}
Log "Go: $(go version)"

# ── Verificar Node ───────────────────────────────────────────
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Err "Node.js nao encontrado. Instale em https://nodejs.org/"
}
Log "Node: $(node --version)"

# ── Verificar npm ────────────────────────────────────────────
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Err "npm nao encontrado."
}
Log "npm: $(npm --version)"

Write-Host ""

# ── Dependências da API ──────────────────────────────────────
Log "Verificando dependencias da API..."
Push-Location API
go mod tidy
if ($LASTEXITCODE -ne 0) { Err "Falha ao atualizar dependencias Go" }
Pop-Location
Log "Dependencias Go OK."

# ── Dependências do Frontend ─────────────────────────────────
Log "Verificando dependencias do Frontend..."
if (-not (Test-Path "Figma\node_modules")) {
    Log "Instalando dependencias Node..."
    Push-Location Figma
    npm install
    if ($LASTEXITCODE -ne 0) { Err "Falha ao instalar dependencias Node" }
    Pop-Location
} else {
    Log "Dependencias Node ja instaladas."
}

# ── Arquivo .env do frontend ─────────────────────────────────
if (-not (Test-Path "Figma\.env")) {
    Warn ".env nao encontrado no Figma - criando com valores padrao..."
    "VITE_API_URL=http://localhost:8080/api/v1" | Out-File -FilePath "Figma\.env" -Encoding utf8
}

Write-Host ""

# ── Iniciar API em modo debug (Delve) ────────────────────────
Log "Verificando Delve (debugger Go)..."
if (-not (Get-Command dlv -ErrorAction SilentlyContinue)) {
    Warn "Delve nao encontrado. Instalando..."
    go install github.com/go-delve/delve/cmd/dlv@latest
    if ($LASTEXITCODE -ne 0) { Err "Falha ao instalar Delve" }
    Log "Delve instalado com sucesso."
}
Log "Delve: $(dlv version | Select-Object -First 1)"

Log "Iniciando API em modo debug na porta 8080 (Delve em :2345)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", `
    "Set-Location API; `$env:GIN_MODE='debug'; `$env:LOG_LEVEL='debug'; dlv debug ./cmd/main.go --headless --listen=:2345 --api-version=2 --accept-multiclient" `
    -WindowStyle Normal

# ── Iniciar Frontend em modo debug ───────────────────────────
Log "Iniciando Frontend em modo debug na porta 5173..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", `
    "Set-Location Figma; `$env:NODE_ENV='development'; npm run dev" `
    -WindowStyle Normal

Write-Host ""
Log "----------------------------------------------"
Log "  API:        http://localhost:8080"
Log "  Frontend:   http://localhost:5173"
Log "  Delve DAP:  localhost:2345"
Log ""
Log "  Para conectar o debugger Go no VS Code,"
Log "  use launch.json com type 'go' e mode 'remote'."
Log "  Feche as janelas abertas para encerrar."
Log "----------------------------------------------"
Write-Host ""
````

## File: entities/doc.go
````go
// Package entities contém as structs geradas a partir das migrations do banco de dados.
// NÃO EDITE estes arquivos manualmente — use o codegen:
//
//	go run ./codegen/generate.go
//
// Para gerar automaticamente ao adicionar uma migration:
//
//	go generate ./...
package entities
````

## File: entities/index.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Importa todas as entidades em um único ponto.

export * from './proposta';
export * from './proposta_cessao_direitos';
export * from './proposta_cessao_direitos_historico';
export * from './proposta_documento';
export * from './proposta_documento_historico';
export * from './proposta_historico';
export * from './proposta_loja_anterior';
export * from './proposta_loja_anterior_historico';
export * from './proposta_necessidades_tecnicas';
export * from './proposta_necessidades_tecnicas_historico';
export * from './proposta_parecer_comite';
export * from './proposta_parecer_comite_historico';
export * from './proposta_taxa_transferencia';
export * from './proposta_taxa_transferencia_historico';
export * from './unidade';
export * from './usuario';
````

## File: entities/proposta_cessao_direitos_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaCessaoDireitosHistorico representa a tabela "PropostaCessaoDireitosHistorico" do banco de dados.
type PropostaCessaoDireitosHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_pcdh"`
	ResSperataProposta                       *float64     `json:"resSperataProposta" db:"res_sperata_proposta_pcdh"`
	ReferenciaMercadoPorM2                   *float64     `json:"referenciaMercadoPorM2" db:"referencia_mercado_por_m2_pcdh"`
	SinalResSperata                          *float64     `json:"sinalResSperata" db:"sinal_res_sperata_pcdh"`
	FormaPagamentoSaldo                      *string      `json:"formaPagamentoSaldo" db:"forma_pagamento_saldo_pcdh"`
	NumParcelas                              *int         `json:"numParcelas" db:"num_parcelas_pcdh"`
	StatusResSperata                         *string      `json:"statusResSperata" db:"status_res_sperata_pcdh"`
	Observacoes                              *string      `json:"observacoes" db:"observacoes_pcdh"`
}
````

## File: entities/proposta_cessao_direitos_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaCessaoDireitosHistorico" do banco de dados. */
export interface PropostaCessaoDireitosHistorico {
  idHistorico: string;
  resSperataProposta?: number | null;
  referenciaMercadoPorM2?: number | null;
  sinalResSperata?: number | null;
  formaPagamentoSaldo?: string | null;
  numParcelas?: number | null;
  statusResSperata?: string | null;
  observacoes?: string | null;
}
````

## File: entities/proposta_cessao_direitos.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaCessaoDireitos representa a tabela "PropostaCessaoDireitos" do banco de dados.
type PropostaCessaoDireitos struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pcd"`
	ResSperataProposta                       *float64     `json:"resSperataProposta" db:"res_sperata_proposta_pcd"`
	ReferenciaMercadoPorM2                   *float64     `json:"referenciaMercadoPorM2" db:"referencia_mercado_por_m2_pcd"`
	SinalResSperata                          *float64     `json:"sinalResSperata" db:"sinal_res_sperata_pcd"`
	FormaPagamentoSaldo                      *string      `json:"formaPagamentoSaldo" db:"forma_pagamento_saldo_pcd"`
	NumParcelas                              *int         `json:"numParcelas" db:"num_parcelas_pcd"`
	StatusResSperata                         *string      `json:"statusResSperata" db:"status_res_sperata_pcd"`
	Observacoes                              *string      `json:"observacoes" db:"observacoes_pcd"`
}
````

## File: entities/proposta_cessao_direitos.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaCessaoDireitos" do banco de dados. */
export interface PropostaCessaoDireitos {
  idProposta: string;
  resSperataProposta?: number | null;
  referenciaMercadoPorM2?: number | null;
  sinalResSperata?: number | null;
  formaPagamentoSaldo?: string | null;
  numParcelas?: number | null;
  statusResSperata?: string | null;
  observacoes?: string | null;
}
````

## File: entities/proposta_documento_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaDocumentoHistorico representa a tabela "PropostaDocumentoHistorico" do banco de dados.
type PropostaDocumentoHistorico struct {
	ID                                       string       `json:"id" db:"id_pdh"`
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_pdh"`
	IDUsuario                                string       `json:"idUsuario" db:"id_usuario_pdh"`
	Codigo                                   string       `json:"codigo" db:"codigo_pdh"`
	NomeOriginal                             string       `json:"nomeOriginal" db:"nome_original_pdh"`
	Tipo                                     string       `json:"tipo" db:"tipo_pdh"`
	Tamanho                                  string       `json:"tamanho" db:"tamanho_pdh"`
	URLStorage                               *string      `json:"urlStorage" db:"url_storage_pdh"`
	DataUpload                               string       `json:"dataUpload" db:"data_upload_pdh"`
}
````

## File: entities/proposta_documento_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaDocumentoHistorico" do banco de dados. */
export interface PropostaDocumentoHistorico {
  id: string;
  idHistorico: string;
  idUsuario: string;
  codigo: string;
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  urlStorage?: string | null;
  dataUpload: string;
}
````

## File: entities/proposta_documento.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaDocumento representa a tabela "PropostaDocumento" do banco de dados.
type PropostaDocumento struct {
	ID                                       string       `json:"id" db:"id_pd"`
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pd"`
	IDUsuario                                string       `json:"idUsuario" db:"id_usuario_pd"`
	Codigo                                   string       `json:"codigo" db:"codigo_pd"`
	NomeOriginal                             string       `json:"nomeOriginal" db:"nome_original_pd"`
	Tipo                                     string       `json:"tipo" db:"tipo_pd"`
	Tamanho                                  string       `json:"tamanho" db:"tamanho_pd"`
	URLStorage                               *string      `json:"urlStorage" db:"url_storage_pd"`
	DataUpload                               string       `json:"dataUpload" db:"data_upload_pd"`
}
````

## File: entities/proposta_documento.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaDocumento" do banco de dados. */
export interface PropostaDocumento {
  id: string;
  idProposta: string;
  idUsuario: string;
  codigo: string;
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  urlStorage?: string | null;
  dataUpload: string;
}
````

## File: entities/proposta_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaHistorico representa a tabela "PropostaHistorico" do banco de dados.
type PropostaHistorico struct {
	ID                                       string       `json:"id" db:"id_ph"`
	IDProposta                               string       `json:"idProposta" db:"id_proposta_ph"`
	IDUsuario                                string       `json:"idUsuario" db:"id_usuario_ph"`
	EditadoEm                                string       `json:"editadoEm" db:"editado_em_ph"`
}
````

## File: entities/proposta_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaHistorico" do banco de dados. */
export interface PropostaHistorico {
  id: string;
  idProposta: string;
  idUsuario: string;
  editadoEm: string;
}
````

## File: entities/proposta_loja_anterior_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaLojaAnteriorHistorico representa a tabela "PropostaLojaAnteriorHistorico" do banco de dados.
type PropostaLojaAnteriorHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_plah"`
	NomeFantasia                             *string      `json:"nomeFantasia" db:"nome_fantasia_plah"`
	Segmento                                 *string      `json:"segmento" db:"segmento_plah"`
	TipoOperacao                             *string      `json:"tipoOperacao" db:"tipo_operacao_plah"`
	Cto                                      *float64     `json:"cto" db:"cto_plah"`
	Abl                                      *float64     `json:"abl" db:"abl_plah"`
	Amm                                      *float64     `json:"amm" db:"amm_plah"`
	DividaAmm                                *float64     `json:"dividaAmm" db:"divida_amm_plah"`
	DividaNegociada                          *float64     `json:"dividaNegociada" db:"divida_negociada_plah"`
	DividaCondominio                         *float64     `json:"dividaCondominio" db:"divida_condominio_plah"`
	DividaFpp                                *float64     `json:"dividaFpp" db:"divida_fpp_plah"`
	FormaPagamento                           *string      `json:"formaPagamento" db:"forma_pagamento_plah"`
}
````

## File: entities/proposta_loja_anterior_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaLojaAnteriorHistorico" do banco de dados. */
export interface PropostaLojaAnteriorHistorico {
  idHistorico: string;
  nomeFantasia?: string | null;
  segmento?: string | null;
  tipoOperacao?: string | null;
  cto?: number | null;
  abl?: number | null;
  amm?: number | null;
  dividaAmm?: number | null;
  dividaNegociada?: number | null;
  dividaCondominio?: number | null;
  dividaFpp?: number | null;
  formaPagamento?: string | null;
}
````

## File: entities/proposta_loja_anterior.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaLojaAnterior representa a tabela "PropostaLojaAnterior" do banco de dados.
type PropostaLojaAnterior struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pla"`
	NomeFantasia                             *string      `json:"nomeFantasia" db:"nome_fantasia_pla"`
	Segmento                                 *string      `json:"segmento" db:"segmento_pla"`
	TipoOperacao                             *string      `json:"tipoOperacao" db:"tipo_operacao_pla"`
	Cto                                      *float64     `json:"cto" db:"cto_pla"`
	Abl                                      *float64     `json:"abl" db:"abl_pla"`
	Amm                                      *float64     `json:"amm" db:"amm_pla"`
	DividaAmm                                *float64     `json:"dividaAmm" db:"divida_amm_pla"`
	DividaNegociada                          *float64     `json:"dividaNegociada" db:"divida_negociada_pla"`
	DividaCondominio                         *float64     `json:"dividaCondominio" db:"divida_condominio_pla"`
	DividaFpp                                *float64     `json:"dividaFpp" db:"divida_fpp_pla"`
	FormaPagamento                           *string      `json:"formaPagamento" db:"forma_pagamento_pla"`
}
````

## File: entities/proposta_loja_anterior.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaLojaAnterior" do banco de dados. */
export interface PropostaLojaAnterior {
  idProposta: string;
  nomeFantasia?: string | null;
  segmento?: string | null;
  tipoOperacao?: string | null;
  cto?: number | null;
  abl?: number | null;
  amm?: number | null;
  dividaAmm?: number | null;
  dividaNegociada?: number | null;
  dividaCondominio?: number | null;
  dividaFpp?: number | null;
  formaPagamento?: string | null;
}
````

## File: entities/proposta_necessidades_tecnicas_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaNecessidadesTecnicasHistorico representa a tabela "PropostaNecessidadesTecnicasHistorico" do banco de dados.
type PropostaNecessidadesTecnicasHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_pnth"`
	DemandaEletricaKva                       *float64     `json:"demandaEletricaKva" db:"demanda_eletrica_kva_pnth"`
	TensaoNecessaria                         *string      `json:"tensaoNecessaria" db:"tensao_necessaria_pnth"`
	CircuitosEspeciais                       bool         `json:"circuitosEspeciais" db:"circuitos_especiais_pnth"`
	ObsEletrica                              *string      `json:"obsEletrica" db:"obs_eletrica_pnth"`
	PontoAgua                                bool         `json:"pontoAgua" db:"ponto_agua_pnth"`
	QuantidadePontosAgua                     *int         `json:"quantidadePontosAgua" db:"quantidade_pontos_agua_pnth"`
	PontoEsgoto                              bool         `json:"pontoEsgoto" db:"ponto_esgoto_pnth"`
	VazaoNecessariaLmin                      *float64     `json:"vazaoNecessariaLmin" db:"vazao_necessaria_lmin_pnth"`
	CaixaGordura                             bool         `json:"caixaGordura" db:"caixa_gordura_pnth"`
	ObsHidraulica                            *string      `json:"obsHidraulica" db:"obs_hidraulica_pnth"`
	NecessitaGas                             bool         `json:"necessitaGas" db:"necessita_gas_pnth"`
	TipoGas                                  *string      `json:"tipoGas" db:"tipo_gas_pnth"`
	ConsumoGasM3h                            *float64     `json:"consumoGasM3h" db:"consumo_gas_m3h_pnth"`
	ObsGas                                   *string      `json:"obsGas" db:"obs_gas_pnth"`
	NecessitaExaustao                        bool         `json:"necessitaExaustao" db:"necessita_exaustao_pnth"`
	VazaoExaustaoM3h                         *float64     `json:"vazaoExaustaoM3h" db:"vazao_exaustao_m3h_pnth"`
	NecessitaMakeUpAr                        bool         `json:"necessitaMakeUpAr" db:"necessita_make_up_ar_pnth"`
	ObsVentilacao                            *string      `json:"obsVentilacao" db:"obs_ventilacao_pnth"`
	AreaMinimaM2                             *float64     `json:"areaMinimaM2" db:"area_minima_m2_pnth"`
	AreaMaximaM2                             *float64     `json:"areaMaximaM2" db:"area_maxima_m2_pnth"`
	PeDireitoMinimoM                         *float64     `json:"peDireitoMinimoM" db:"pe_direito_minimo_m_pnth"`
	CargaPisoKgm2                            *float64     `json:"cargaPisoKgm2" db:"carga_piso_kgm2_pnth"`
	NecessitaMezanino                        bool         `json:"necessitaMezanino" db:"necessita_mezanino_pnth"`
	ObsEstrutura                             *string      `json:"obsEstrutura" db:"obs_estrutura_pnth"`
	FrenteMinimaM                            *float64     `json:"frenteMinimaM" db:"frente_minima_m_pnth"`
	TipoFachada                              *string      `json:"tipoFachada" db:"tipo_fachada_pnth"`
	ComunicacaoVisualLed                     bool         `json:"comunicacaoVisualLed" db:"comunicacao_visual_led_pnth"`
	ObsFachada                               *string      `json:"obsFachada" db:"obs_fachada_pnth"`
	PontosDados                              *int         `json:"pontosDados" db:"pontos_dados_pnth"`
	NecessitaFibra                           bool         `json:"necessitaFibra" db:"necessita_fibra_pnth"`
	ObsTelecom                               *string      `json:"obsTelecom" db:"obs_telecom_pnth"`
	Status                                   *string      `json:"status" db:"status_pnth"`
	IDUsuarioResponsavel                     *string      `json:"idUsuarioResponsavel" db:"id_usuario_responsavel_pnth"`
	CriadoEm                                 *string      `json:"criadoEm" db:"criado_em_pnth"`
	AtualizadoEm                             *string      `json:"atualizadoEm" db:"atualizado_em_pnth"`
}
````

## File: entities/proposta_necessidades_tecnicas_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaNecessidadesTecnicasHistorico" do banco de dados. */
export interface PropostaNecessidadesTecnicasHistorico {
  idHistorico: string;
  demandaEletricaKva?: number | null;
  tensaoNecessaria?: string | null;
  circuitosEspeciais?: boolean;
  obsEletrica?: string | null;
  pontoAgua?: boolean;
  quantidadePontosAgua?: number | null;
  pontoEsgoto?: boolean;
  vazaoNecessariaLmin?: number | null;
  caixaGordura?: boolean;
  obsHidraulica?: string | null;
  necessitaGas?: boolean;
  tipoGas?: string | null;
  consumoGasM3h?: number | null;
  obsGas?: string | null;
  necessitaExaustao?: boolean;
  vazaoExaustaoM3h?: number | null;
  necessitaMakeUpAr?: boolean;
  obsVentilacao?: string | null;
  areaMinimaM2?: number | null;
  areaMaximaM2?: number | null;
  peDireitoMinimoM?: number | null;
  cargaPisoKgm2?: number | null;
  necessitaMezanino?: boolean;
  obsEstrutura?: string | null;
  frenteMinimaM?: number | null;
  tipoFachada?: string | null;
  comunicacaoVisualLed?: boolean;
  obsFachada?: string | null;
  pontosDados?: number | null;
  necessitaFibra?: boolean;
  obsTelecom?: string | null;
  status?: string | null;
  idUsuarioResponsavel?: string | null;
  criadoEm?: string | null;
  atualizadoEm?: string | null;
}
````

## File: entities/proposta_necessidades_tecnicas.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaNecessidadesTecnicas representa a tabela "PropostaNecessidadesTecnicas" do banco de dados.
type PropostaNecessidadesTecnicas struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_pnt"`
	DemandaEletricaKva                       *float64     `json:"demandaEletricaKva" db:"demanda_eletrica_kva_pnt"`
	TensaoNecessaria                         *string      `json:"tensaoNecessaria" db:"tensao_necessaria_pnt"`
	CircuitosEspeciais                       bool         `json:"circuitosEspeciais" db:"circuitos_especiais_pnt"`
	ObsEletrica                              *string      `json:"obsEletrica" db:"obs_eletrica_pnt"`
	PontoAgua                                bool         `json:"pontoAgua" db:"ponto_agua_pnt"`
	QuantidadePontosAgua                     *int         `json:"quantidadePontosAgua" db:"quantidade_pontos_agua_pnt"`
	PontoEsgoto                              bool         `json:"pontoEsgoto" db:"ponto_esgoto_pnt"`
	VazaoNecessariaLmin                      *float64     `json:"vazaoNecessariaLmin" db:"vazao_necessaria_lmin_pnt"`
	CaixaGordura                             bool         `json:"caixaGordura" db:"caixa_gordura_pnt"`
	ObsHidraulica                            *string      `json:"obsHidraulica" db:"obs_hidraulica_pnt"`
	NecessitaGas                             bool         `json:"necessitaGas" db:"necessita_gas_pnt"`
	TipoGas                                  *string      `json:"tipoGas" db:"tipo_gas_pnt"`
	ConsumoGasM3h                            *float64     `json:"consumoGasM3h" db:"consumo_gas_m3h_pnt"`
	ObsGas                                   *string      `json:"obsGas" db:"obs_gas_pnt"`
	NecessitaExaustao                        bool         `json:"necessitaExaustao" db:"necessita_exaustao_pnt"`
	VazaoExaustaoM3h                         *float64     `json:"vazaoExaustaoM3h" db:"vazao_exaustao_m3h_pnt"`
	NecessitaMakeUpAr                        bool         `json:"necessitaMakeUpAr" db:"necessita_make_up_ar_pnt"`
	ObsVentilacao                            *string      `json:"obsVentilacao" db:"obs_ventilacao_pnt"`
	AreaMinimaM2                             *float64     `json:"areaMinimaM2" db:"area_minima_m2_pnt"`
	AreaMaximaM2                             *float64     `json:"areaMaximaM2" db:"area_maxima_m2_pnt"`
	PeDireitoMinimoM                         *float64     `json:"peDireitoMinimoM" db:"pe_direito_minimo_m_pnt"`
	CargaPisoKgm2                            *float64     `json:"cargaPisoKgm2" db:"carga_piso_kgm2_pnt"`
	NecessitaMezanino                        bool         `json:"necessitaMezanino" db:"necessita_mezanino_pnt"`
	ObsEstrutura                             *string      `json:"obsEstrutura" db:"obs_estrutura_pnt"`
	FrenteMinimaM                            *float64     `json:"frenteMinimaM" db:"frente_minima_m_pnt"`
	TipoFachada                              *string      `json:"tipoFachada" db:"tipo_fachada_pnt"`
	ComunicacaoVisualLed                     bool         `json:"comunicacaoVisualLed" db:"comunicacao_visual_led_pnt"`
	ObsFachada                               *string      `json:"obsFachada" db:"obs_fachada_pnt"`
	PontosDados                              *int         `json:"pontosDados" db:"pontos_dados_pnt"`
	NecessitaFibra                           bool         `json:"necessitaFibra" db:"necessita_fibra_pnt"`
	ObsTelecom                               *string      `json:"obsTelecom" db:"obs_telecom_pnt"`
	Status                                   *string      `json:"status" db:"status_pnt"`
	IDUsuarioResponsavel                     *string      `json:"idUsuarioResponsavel" db:"id_usuario_responsavel_pnt"`
	CriadoEm                                 string       `json:"criadoEm" db:"criado_em_pnt"`
	AtualizadoEm                             *string      `json:"atualizadoEm" db:"atualizado_em_pnt"`
}
````

## File: entities/proposta_necessidades_tecnicas.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaNecessidadesTecnicas" do banco de dados. */
export interface PropostaNecessidadesTecnicas {
  idProposta: string;
  demandaEletricaKva?: number | null;
  tensaoNecessaria?: string | null;
  circuitosEspeciais?: boolean;
  obsEletrica?: string | null;
  pontoAgua?: boolean;
  quantidadePontosAgua?: number | null;
  pontoEsgoto?: boolean;
  vazaoNecessariaLmin?: number | null;
  caixaGordura?: boolean;
  obsHidraulica?: string | null;
  necessitaGas?: boolean;
  tipoGas?: string | null;
  consumoGasM3h?: number | null;
  obsGas?: string | null;
  necessitaExaustao?: boolean;
  vazaoExaustaoM3h?: number | null;
  necessitaMakeUpAr?: boolean;
  obsVentilacao?: string | null;
  areaMinimaM2?: number | null;
  areaMaximaM2?: number | null;
  peDireitoMinimoM?: number | null;
  cargaPisoKgm2?: number | null;
  necessitaMezanino?: boolean;
  obsEstrutura?: string | null;
  frenteMinimaM?: number | null;
  tipoFachada?: string | null;
  comunicacaoVisualLed?: boolean;
  obsFachada?: string | null;
  pontosDados?: number | null;
  necessitaFibra?: boolean;
  obsTelecom?: string | null;
  status?: string | null;
  idUsuarioResponsavel?: string | null;
  criadoEm: string;
  atualizadoEm?: string | null;
}
````

## File: entities/proposta_parecer_comite_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaParecerComiteHistorico representa a tabela "PropostaParecerComiteHistorico" do banco de dados.
type PropostaParecerComiteHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_ppch"`
	Presidente                               bool         `json:"presidente" db:"presidente_ppch"`
	PresidenteData                           *string      `json:"presidenteData" db:"presidente_data_ppch"`
	DiretoriaComp1                           bool         `json:"diretoriaComp1" db:"diretoria_comp1_ppch"`
	DiretoriaComp1Data                       *string      `json:"diretoriaComp1Data" db:"diretoria_comp1_data_ppch"`
	DiretoriaComp2                           bool         `json:"diretoriaComp2" db:"diretoria_comp2_ppch"`
	DiretoriaComp2Data                       *string      `json:"diretoriaComp2Data" db:"diretoria_comp2_data_ppch"`
	Superintendente                          bool         `json:"superintendente" db:"superintendente_ppch"`
	SuperintendenteData                      *string      `json:"superintendenteData" db:"superintendente_data_ppch"`
	InNetworking                             bool         `json:"inNetworking" db:"in_networking_ppch"`
	InNetworkingData                         *string      `json:"inNetworkingData" db:"in_networking_data_ppch"`
}
````

## File: entities/proposta_parecer_comite_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaParecerComiteHistorico" do banco de dados. */
export interface PropostaParecerComiteHistorico {
  idHistorico: string;
  presidente?: boolean;
  presidenteData?: string | null;
  diretoriaComp1?: boolean;
  diretoriaComp1Data?: string | null;
  diretoriaComp2?: boolean;
  diretoriaComp2Data?: string | null;
  superintendente?: boolean;
  superintendenteData?: string | null;
  inNetworking?: boolean;
  inNetworkingData?: string | null;
}
````

## File: entities/proposta_parecer_comite.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaParecerComite representa a tabela "PropostaParecerComite" do banco de dados.
type PropostaParecerComite struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_ppc"`
	Presidente                               bool         `json:"presidente" db:"presidente_ppc"`
	PresidenteData                           *string      `json:"presidenteData" db:"presidente_data_ppc"`
	DiretoriaComp1                           bool         `json:"diretoriaComp1" db:"diretoria_comp1_ppc"`
	DiretoriaComp1Data                       *string      `json:"diretoriaComp1Data" db:"diretoria_comp1_data_ppc"`
	DiretoriaComp2                           bool         `json:"diretoriaComp2" db:"diretoria_comp2_ppc"`
	DiretoriaComp2Data                       *string      `json:"diretoriaComp2Data" db:"diretoria_comp2_data_ppc"`
	Superintendente                          bool         `json:"superintendente" db:"superintendente_ppc"`
	SuperintendenteData                      *string      `json:"superintendenteData" db:"superintendente_data_ppc"`
	InNetworking                             bool         `json:"inNetworking" db:"in_networking_ppc"`
	InNetworkingData                         *string      `json:"inNetworkingData" db:"in_networking_data_ppc"`
}
````

## File: entities/proposta_parecer_comite.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaParecerComite" do banco de dados. */
export interface PropostaParecerComite {
  idProposta: string;
  presidente?: boolean;
  presidenteData?: string | null;
  diretoriaComp1?: boolean;
  diretoriaComp1Data?: string | null;
  diretoriaComp2?: boolean;
  diretoriaComp2Data?: string | null;
  superintendente?: boolean;
  superintendenteData?: string | null;
  inNetworking?: boolean;
  inNetworkingData?: string | null;
}
````

## File: entities/proposta_taxa_transferencia_historico.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaTaxaTransferenciaHistorico representa a tabela "PropostaTaxaTransferenciaHistorico" do banco de dados.
type PropostaTaxaTransferenciaHistorico struct {
	IDHistorico                              string       `json:"idHistorico" db:"id_historico_ptth"`
	TtContratual                             *float64     `json:"ttContratual" db:"tt_contratual_ptth"`
	TtProposta                               *float64     `json:"ttProposta" db:"tt_proposta_ptth"`
	TtPropostaNumAmm                         *float64     `json:"ttPropostaNumAmm" db:"tt_proposta_num_amm_ptth"`
	SinalTt                                  *float64     `json:"sinalTt" db:"sinal_tt_ptth"`
	FormaPagamentoTt                         *string      `json:"formaPagamentoTt" db:"forma_pagamento_tt_ptth"`
	JustificativaTt                          *string      `json:"justificativaTt" db:"justificativa_tt_ptth"`
	StatusTt                                 *string      `json:"statusTt" db:"status_tt_ptth"`
}
````

## File: entities/proposta_taxa_transferencia_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaTaxaTransferenciaHistorico" do banco de dados. */
export interface PropostaTaxaTransferenciaHistorico {
  idHistorico: string;
  ttContratual?: number | null;
  ttProposta?: number | null;
  ttPropostaNumAmm?: number | null;
  sinalTt?: number | null;
  formaPagamentoTt?: string | null;
  justificativaTt?: string | null;
  statusTt?: string | null;
}
````

## File: entities/proposta_taxa_transferencia.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// PropostaTaxaTransferencia representa a tabela "PropostaTaxaTransferencia" do banco de dados.
type PropostaTaxaTransferencia struct {
	IDProposta                               string       `json:"idProposta" db:"id_proposta_ptt"`
	TtContratual                             *float64     `json:"ttContratual" db:"tt_contratual_ptt"`
	TtProposta                               *float64     `json:"ttProposta" db:"tt_proposta_ptt"`
	TtPropostaNumAmm                         *float64     `json:"ttPropostaNumAmm" db:"tt_proposta_num_amm_ptt"`
	SinalTt                                  *float64     `json:"sinalTt" db:"sinal_tt_ptt"`
	FormaPagamentoTt                         *string      `json:"formaPagamentoTt" db:"forma_pagamento_tt_ptt"`
	JustificativaTt                          *string      `json:"justificativaTt" db:"justificativa_tt_ptt"`
	StatusTt                                 *string      `json:"statusTt" db:"status_tt_ptt"`
}
````

## File: entities/proposta_taxa_transferencia.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaTaxaTransferencia" do banco de dados. */
export interface PropostaTaxaTransferencia {
  idProposta: string;
  ttContratual?: number | null;
  ttProposta?: number | null;
  ttPropostaNumAmm?: number | null;
  sinalTt?: number | null;
  formaPagamentoTt?: string | null;
  justificativaTt?: string | null;
  statusTt?: string | null;
}
````

## File: entities/proposta.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// Proposta representa a tabela "Proposta" do banco de dados.
type Proposta struct {
	ID                                       string       `json:"id" db:"id_p"`
	IDUnidade                                string       `json:"idUnidade" db:"id_unidade_p"`
	IDUsuarioCriacao                         string       `json:"idUsuarioCriacao" db:"id_usuario_criacao_p"`
	IDUsuarioUltimaAlt                       *string      `json:"idUsuarioUltimaAlt" db:"id_usuario_ultima_alt_p"`
	IDUsuarioResponsavel                     *string      `json:"idUsuarioResponsavel" db:"id_usuario_responsavel_p"`
	Segmento                                 string       `json:"segmento" db:"segmento_p"`
	TipoOperacao                             string       `json:"tipoOperacao" db:"tipo_operacao_p"`
	ValorProposto                            float64      `json:"valorProposto" db:"valor_proposto_p"`
	Area                                     float64      `json:"area" db:"area_p"`
	Abl                                      *float64     `json:"abl" db:"abl_p"`
	Status                                   string       `json:"status" db:"status_p"`
	DataCriacao                              string       `json:"dataCriacao" db:"data_criacao_p"`
	DataVencimento                           *string      `json:"dataVencimento" db:"data_vencimento_p"`
	NomeFantasia                             *string      `json:"nomeFantasia" db:"nome_fantasia_p"`
	AluguelPercent                           *float64     `json:"aluguelPercent" db:"aluguel_percent_p"`
	PrazoLocacaoMeses                        *int         `json:"prazoLocacaoMeses" db:"prazo_locacao_meses_p"`
	AluguelPorM2                             *float64     `json:"aluguelPorM2" db:"aluguel_por_m2_p"`
	CondominioAprox                          *float64     `json:"condominioAprox" db:"condominio_aprox_p"`
	FppAprox                                 *float64     `json:"fppAprox" db:"fpp_aprox_p"`
	InicioContrato                           *string      `json:"inicioContrato" db:"inicio_contrato_p"`
	FimContrato                              *string      `json:"fimContrato" db:"fim_contrato_p"`
	DataInauguracao                          *string      `json:"dataInauguracao" db:"data_inauguracao_p"`
	Observacoes                              *string      `json:"observacoes" db:"observacoes_p"`
	AtualizadoEm                             string       `json:"atualizadoEm" db:"atualizado_em_p"`
}
````

## File: entities/proposta.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "Proposta" do banco de dados. */
export interface Proposta {
  id: string;
  idUnidade: string;
  idUsuarioCriacao: string;
  idUsuarioUltimaAlt?: string | null;
  idUsuarioResponsavel?: string | null;
  segmento: string;
  tipoOperacao: string;
  valorProposto: number;
  area: number;
  abl?: number | null;
  status: string;
  dataCriacao: string;
  dataVencimento?: string | null;
  nomeFantasia?: string | null;
  aluguelPercent?: number | null;
  prazoLocacaoMeses?: number | null;
  aluguelPorM2?: number | null;
  condominioAprox?: number | null;
  fppAprox?: number | null;
  inicioContrato?: string | null;
  fimContrato?: string | null;
  dataInauguracao?: string | null;
  observacoes?: string | null;
  atualizadoEm: string;
}
````

## File: entities/unidade.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// Unidade representa a tabela "Unidade" do banco de dados.
type Unidade struct {
	ID                                       string       `json:"id" db:"id_un"`
	Codigo                                   string       `json:"codigo" db:"codigo_un"`
	Piso                                     string       `json:"piso" db:"piso_un"`
	Corredor                                 string       `json:"corredor" db:"corredor_un"`
	Area                                     float64      `json:"area" db:"area_un"`
	CriadoEm                                 string       `json:"criadoEm" db:"criado_em_un"`
}
````

## File: entities/unidade.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "Unidade" do banco de dados. */
export interface Unidade {
  id: string;
  codigo: string;
  piso: string;
  corredor: string;
  area: number;
  criadoEm: string;
}
````

## File: entities/usuario.go
````go
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

package entities

// Usuario representa a tabela "Usuario" do banco de dados.
type Usuario struct {
	ID                                       string       `json:"id" db:"id_u"`
	Nome                                     string       `json:"nome" db:"nome_u"`
	Email                                    string       `json:"email" db:"email_u"`
	SenhaHash                                string       `json:"senhaHash" db:"senha_hash_u"`
	Setor                                    *string      `json:"setor" db:"setor_u"`
	CriadoEm                                 string       `json:"criadoEm" db:"criado_em_u"`
}
````

## File: entities/usuario.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "Usuario" do banco de dados. */
export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  setor?: string | null;
  criadoEm: string;
}
````

## File: Figma/ATTRIBUTIONS.md
````markdown
This Figma Make file includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

This Figma Make file includes photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license).
````

## File: Figma/default_shadcn_theme.css
````css
/* KEEP_IN_SYNC(fullscreen/resources/figmake/shadcn/globals.css) */

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}
````

## File: Figma/guidelines/Guidelines.md
````markdown

````

## File: Figma/index.html
````html
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BES-2026_Prototipos (Copy)</title>
      <style>html, body { height: 100%; margin: 0; } #root { height: 100%; }</style>
    </head>

    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
````

## File: Figma/pnpm-workspace.yaml
````yaml
packages:
  - '.'
````

## File: Figma/postcss.config.mjs
````javascript
/**
 * PostCSS Configuration
 *
 * Tailwind CSS v4 (via @tailwindcss/vite) automatically sets up all required
 * PostCSS plugins — you do NOT need to include `tailwindcss` or `autoprefixer` here.
 *
 * This file only exists for adding additional PostCSS plugins, if needed.
 * For example:
 *
 * import postcssNested from 'postcss-nested'
 * export default { plugins: [postcssNested()] }
 *
 * Otherwise, you can leave this file empty.
 */
export default {}
````

## File: Figma/README.md
````markdown
# BES-2026_Prototipos (Copy)

  This is a code bundle for BES-2026_Prototipos (Copy). The original project is available at https://www.figma.com/design/RCgjEl75LAmYuGrQhNSudm/BES-2026_Prototipos--Copy-.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
````

## File: Figma/src/app/AuthContext.tsx
````typescript
// ============================================================
// AuthContext.tsx — Contexto de autenticação (MODO PROTÓTIPO)
// ============================================================
//
// Gerencia o estado de autenticação globalmente via React Context.
//
// MODO PROTÓTIPO: o usuário começa sempre autenticado com um usuário
// fixo (USUARIO_PROTOTIPO). O login aceita qualquer credencial e apenas
// salva o perfil na sessionStorage. Não há validação de token JWT.
//
// Para produção:
//  - substituir USUARIO_PROTOTIPO pela resposta real da API
//  - no login(), chamar apiClient.auth.login() e salvar o token JWT
//  - no logout(), chamar apiClient.auth.logout() e limpar o token
//  - o estado inicial deve ler o token do localStorage, não ser fixo
//
// Exporta:
//  AuthContext      — contexto bruto (usado pelo useApi para ler token)
//  AuthProvider     — wrapper que deve envolver toda a aplicação
//  useAuth()        — hook para consumir login/logout/isAuthenticated
// ============================================================
import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface Usuario {
  id?: string;
  nome: string;
  email: string;
  setor: string;
}

interface AuthState {
  token: string | null;
  usuario: Usuario | null;
}

interface AuthContextValue extends AuthState {
  login: (token: string, usuario: Usuario) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

const USUARIO_PROTOTIPO: Usuario = {
  id: 'proto-001',
  nome: 'Administrador',
  email: 'admin@flamboyant.com.br',
  setor: 'Comercial',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    token: 'proto-token',
    usuario: USUARIO_PROTOTIPO,
  });

  const login = useCallback((_token: string, usuario: Usuario) => {
    sessionStorage.setItem('jp-mall-session', JSON.stringify({
      name: usuario.nome,
      email: usuario.email,
      sector: usuario.setor,
    }));
    setAuth({ token: 'proto-token', usuario });
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('jp-mall-session');
    setAuth({ token: null, usuario: null });
  }, []);

  return (
    <AuthContext.Provider value={{
      ...auth,
      isAuthenticated: !!auth.token,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
  return ctx;
}
````

## File: Figma/src/app/components/ConfirmModal.tsx
````typescript
import type { ReactNode } from 'react';

export type ConfirmModalVariant = 'ok' | 'sim-nao' | 'sim-nao-cancelar';

interface ConfirmModalProps {
  title: string;
  subtitle?: string;
  message?: ReactNode;
  variant?: ConfirmModalVariant;
  labelConfirm?: ReactNode;
  labelCancel?: ReactNode;
  labelDismiss?: ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
  zIndex?: number;
}

export function ConfirmModal({
  title,
  subtitle,
  message,
  variant = 'sim-nao',
  labelConfirm,
  labelCancel,
  labelDismiss,
  onConfirm,
  onCancel,
  onDismiss,
  zIndex = 85,
}: ConfirmModalProps) {
  const confirmLabel = labelConfirm ?? (variant === 'ok' ? 'Ok' : 'Sim');
  const cancelLabel  = labelCancel  ?? 'Não';
  const dismissLabel = labelDismiss ?? 'Cancelar';

  const handleBackdropClick = () => {
    if (variant === 'sim-nao-cancelar') onDismiss?.();
    else onCancel?.();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleBackdropClick} />
      <div
        className="relative z-10 bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full max-w-sm"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4 rounded-t-2xl">
          <h3 className="text-base font-bold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-white/80 mt-0.5">{subtitle}</p>}
        </div>

        <div className="p-5">
          {message && (
            <div className="text-sm text-gray-600 dark:text-[#94A3B8] mb-5">{message}</div>
          )}

          <div className="flex flex-col gap-2">
            <button
              onClick={onConfirm}
              className="w-full flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
            >
              {confirmLabel}
            </button>

            {(variant === 'sim-nao' || variant === 'sim-nao-cancelar') && (
              <button
                onClick={onCancel}
                className="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {cancelLabel}
              </button>
            )}

            {variant === 'sim-nao-cancelar' && (
              <button
                onClick={onDismiss}
                className="w-full text-gray-400 dark:text-[#64748B] hover:text-gray-600 dark:hover:text-[#94A3B8] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {dismissLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/components/DataCard.tsx
````typescript
/**
 * DataCard.tsx — Card genérico orientado a objeto.
 *
 * Recebe qualquer objeto e um fieldMap que define qual propriedade
 * do objeto vai para cada slot visual do card.
 *
 * Slots disponíveis:
 *   title       — nome principal (linha 1, destaque)
 *   titleBadge  — badge ao lado do título (ex: tipoOperacao)
 *   subtitle    — metadados secundários (linha 2, texto muted)
 *                 aceita string (campo único) ou string[] (junta com ' · ')
 *   value       — valor principal (linha 3, negrito)
 *   valueSub    — complemento do valor (ex: área em m²)
 *   statusBadge — badge de status com cor semântica (linha 4, esquerda)
 *   footer      — informação de rodapé (linha 4, direita — ex: data)
 *
 * Cada slot aceita:
 *   - string          → nome do campo no objeto (usa valor direto)
 *   - string[]        → múltiplos campos, unidos por ' · '
 *   - { field, format } → campo + função de formatação
 *   - { fields, format } → múltiplos campos + formatação conjunta
 *
 * Props:
 *   data        — objeto de dados (qualquer tipo)
 *   fieldMap    — mapeamento slot → campo(s) do objeto
 *   onClick     — callback ao clicar no card
 *   className   — classe extra no wrapper
 *
 * Uso:
 *   <DataCard
 *     data={proposta}
 *     fieldMap={{
 *       title:       'nomeFantasia',
 *       titleBadge:  'tipoOperacao',
 *       subtitle:    ['id', 'codigoUnidade', 'segmento'],
 *       value:       { field: 'valorProposto', format: v => fmtCurrency(v) },
 *       valueSub:    { field: 'area', format: v => `${v} m²` },
 *       statusBadge: 'status',
 *       footer:      'dataVencimento',
 *     }}
 *     onClick={() => abrirModal(proposta)}
 *   />
 */

import type { ReactNode } from 'react';
import { Calendar } from 'lucide-react';

// ── Tipos ────────────────────────────────────────────────────

/** Definição de um slot simples: campo direto ou com formatação */
type SlotSingle<T> =
  | keyof T
  | { field: keyof T; format: (value: any, row: T) => ReactNode };

/** Definição de um slot múltiplo: vários campos unidos por ' · ' */
type SlotMulti<T> =
  | (keyof T)[]
  | { fields: (keyof T)[]; format: (values: any[], row: T) => ReactNode };

/** Um slot aceita definição simples ou múltipla */
type Slot<T> = SlotSingle<T> | SlotMulti<T>;

export interface DataCardFieldMap<T> {
  /** Nome principal (linha 1) */
  title?: Slot<T>;
  /** Badge ao lado do título */
  titleBadge?: SlotSingle<T>;
  /** Metadados secundários (linha 2) */
  subtitle?: Slot<T>;
  /** Valor principal (linha 3) */
  value?: SlotSingle<T>;
  /** Complemento do valor */
  valueSub?: SlotSingle<T>;
  /** Badge de status (linha 4, esquerda) */
  statusBadge?: SlotSingle<T>;
  /** Rodapé — data ou info complementar (linha 4, direita) */
  footer?: SlotSingle<T>;
}

interface DataCardProps<T extends Record<string, any>> {
  data: T;
  fieldMap: DataCardFieldMap<T>;
  onClick?: (row: T) => void;
  className?: string;
}

// ── Cores de status ──────────────────────────────────────────
// Mapeamento de status conhecidos para classes Tailwind
const STATUS_COLORS: Record<string, string> = {
  'Aprovado':                        'bg-green-100  dark:bg-green-500/20  text-green-700  dark:text-green-300  border border-green-200  dark:border-green-500/40',
  'Aguardando análise financeira':   'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40',
  'Aguardando análise do comitê':    'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40',
  'Reprovado':                       'bg-red-100    dark:bg-red-500/20    text-red-700    dark:text-red-300    border border-red-200    dark:border-red-500/40',
  'Cancelado':                       'bg-gray-100   dark:bg-gray-700/50   text-gray-600   dark:text-gray-400   border border-gray-200   dark:border-gray-600/30',
  'Vencida':                         'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-500/40',
  'Finalizado':                      'bg-blue-100   dark:bg-blue-500/20   text-blue-700   dark:text-blue-300   border border-blue-200   dark:border-blue-500/40',
};

const TIPO_COLORS: Record<string, string> = {
  'Nova Instalação': 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
  'Renovação':       'bg-teal-50   dark:bg-teal-900/20   text-teal-700   dark:text-teal-400',
  'Readequação':     'bg-amber-50  dark:bg-amber-900/20  text-amber-700  dark:text-amber-400',
  'Transferência':   'bg-pink-50   dark:bg-pink-900/20   text-pink-700   dark:text-pink-400',
  'Cessão':          'bg-cyan-50   dark:bg-cyan-900/20   text-cyan-700   dark:text-cyan-400',
};

// ── Helpers ──────────────────────────────────────────────────

/** Resolve o valor de um slot simples */
function resolveSlotSingle<T extends Record<string, any>>(
  slot: SlotSingle<T>,
  row: T,
): ReactNode {
  if (typeof slot === 'string' || typeof slot === 'symbol' || typeof slot === 'number') {
    const val = row[slot as keyof T];
    return val !== null && val !== undefined ? String(val) : '—';
  }
  const { field, format } = slot as { field: keyof T; format: (v: any, r: T) => ReactNode };
  const val = row[field];
  return format(val, row);
}

/** Resolve o valor de um slot (simples ou múltiplo) */
function resolveSlot<T extends Record<string, any>>(
  slot: Slot<T>,
  row: T,
): ReactNode {
  // Array de chaves → join com ' · '
  if (Array.isArray(slot)) {
    return (slot as (keyof T)[])
      .map(k => {
        const v = row[k];
        return v !== null && v !== undefined && v !== '' ? String(v) : null;
      })
      .filter(Boolean)
      .join(' · ');
  }
  // { fields, format }
  if (typeof slot === 'object' && 'fields' in (slot as any)) {
    const { fields, format } = slot as { fields: (keyof T)[]; format: (v: any[], r: T) => ReactNode };
    return format(fields.map(k => row[k]), row);
  }
  // Slot simples
  return resolveSlotSingle(slot as SlotSingle<T>, row);
}

// ── Componente ───────────────────────────────────────────────

export function DataCard<T extends Record<string, any>>({
  data,
  fieldMap,
  onClick,
  className = '',
}: DataCardProps<T>) {
  const {
    title,
    titleBadge,
    subtitle,
    value,
    valueSub,
    statusBadge,
    footer,
  } = fieldMap;

  const titleVal       = title       ? resolveSlot(title, data)              : null;
  const titleBadgeVal  = titleBadge  ? resolveSlotSingle(titleBadge, data)   : null;
  const subtitleVal    = subtitle    ? resolveSlot(subtitle, data)            : null;
  const valueVal       = value       ? resolveSlotSingle(value, data)         : null;
  const valueSubVal    = valueSub    ? resolveSlotSingle(valueSub, data)      : null;
  const statusVal      = statusBadge ? String(resolveSlotSingle(statusBadge, data)) : null;
  const footerVal      = footer      ? resolveSlotSingle(footer, data)        : null;

  const titleBadgeStr = titleBadgeVal ? String(titleBadgeVal) : null;
  const tipoCls = titleBadgeStr ? (TIPO_COLORS[titleBadgeStr] || 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300') : '';
  const statusCls = statusVal ? (STATUS_COLORS[statusVal] || 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400') : '';

  const hasFooterRow = statusVal || footerVal;

  return (
    <button
      type="button"
      onClick={() => onClick?.(data)}
      className={`
        w-full text-left p-3 rounded-xl border transition-colors
        bg-white dark:bg-[#242938]
        border-gray-100 dark:border-[#2E3447]
        hover:bg-gray-50 dark:hover:bg-[#1A1F2E]
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
        ${className}
      `}
    >
      {/* Linha 1: título + badge de tipo */}
      {(titleVal || titleBadgeStr) && (
        <div className="flex items-center gap-2 mb-1">
          {titleVal && (
            <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate flex-1">
              {titleVal}
            </span>
          )}
          {titleBadgeStr && (
            <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${tipoCls}`}>
              {titleBadgeStr}
            </span>
          )}
        </div>
      )}

      {/* Linha 2: subtitle — metadados */}
      {subtitleVal && (
        <div className="text-xs text-gray-500 dark:text-[#64748B] mb-2 truncate">
          {subtitleVal}
        </div>
      )}

      {/* Linha 3: valor principal + complemento */}
      {(valueVal || valueSubVal) && (
        <div className="flex items-center gap-2 mb-2">
          {valueVal && (
            <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">
              {valueVal}
            </span>
          )}
          {valueSubVal && (
            <span className="text-xs text-gray-400 dark:text-[#64748B]">
              {valueSubVal}
            </span>
          )}
        </div>
      )}

      {/* Linha 4: status + rodapé */}
      {hasFooterRow && (
        <div className="flex items-center justify-between gap-2">
          {statusVal && (
            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${statusCls}`}>
              {statusVal}
            </span>
          )}
          {footerVal && (
            <span className="text-xs text-gray-400 dark:text-[#64748B] flex items-center gap-1 flex-shrink-0 ml-auto">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {footerVal}
            </span>
          )}
        </div>
      )}
    </button>
  );
}
````

## File: Figma/src/app/components/DataTable.tsx
````typescript
/**
 * DataTable.tsx — Tabela genérica e auto-configurável.
 *
 * Aceita qualquer array de objetos e infere as colunas automaticamente
 * a partir das chaves do primeiro item.
 *
 * Para cada coluna inferida, o componente cria internamente:
 *   _specified  {boolean} — se true, a coluna é exibida na tabela
 *   _allowFilter {boolean} — se true, exibe input de filtro nessa coluna
 *
 * Ambas as propriedades são controláveis individualmente via columnConfig.
 *
 * Props:
 *   data          — array de objetos (qualquer formato)
 *   columnConfig  — configuração opcional por chave:
 *                     label       : texto do cabeçalho (padrão: nome da chave)
 *                     _specified  : exibir coluna (padrão: true)
 *                     _allowFilter: exibir filtro (padrão: true)
 *                     render      : função customizada (row, value) => ReactNode
 *                     sortable    : permite ordenação (padrão: true)
 *   onRowClick    — callback ao clicar em uma linha
 *   emptyMessage  — mensagem quando data está vazio
 *   className     — classe extra no wrapper
 *
 * Uso mínimo (sem configuração — exibe todas as colunas):
 *   <DataTable data={minhaLista} />
 *
 * Uso com configuração parcial (só as chaves que precisam de ajuste):
 *   <DataTable
 *     data={propostas}
 *     columnConfig={{
 *       id:            { label: 'Código', _allowFilter: false },
 *       valorProposto: { label: 'Valor', render: (_, v) => fmt(v) },
 *       observacoes:   { _specified: false },
 *     }}
 *     onRowClick={p => setModalAberto(p)}
 *   />
 */

import { useState, useMemo } from 'react';
import { ArrowUp, ArrowDown, ChevronsUpDown } from 'lucide-react';

// ── Tipos ────────────────────────────────────────────────────

/** Configuração de uma coluna específica. Todos os campos são opcionais. */
export interface ColumnConfig<T = any> {
  /** Texto exibido no cabeçalho. Padrão: nome da chave. */
  label?: string;
  /**
   * Se true, a coluna é exibida na tabela.
   * Padrão: true. Passe false para ocultar.
   */
  _specified?: boolean;
  /**
   * Se true, exibe input de filtro por célula nessa coluna.
   * Padrão: true. Passe false para desabilitar o filtro.
   */
  _allowFilter?: boolean;
  /**
   * Função de renderização customizada da célula.
   * Se não informado, exibe o valor bruto como string.
   * @param row   — objeto completo da linha
   * @param value — valor da célula (row[key])
   */
  render?: (row: T, value: any) => React.ReactNode;
  /**
   * Se false, desabilita ordenação nesta coluna.
   * Padrão: true.
   */
  sortable?: boolean;
}

/** Mapa de configuração: chave do objeto → ColumnConfig */
export type ColumnsConfig<T> = {
  [K in keyof T]?: ColumnConfig<T>;
};

interface DataTableProps<T extends Record<string, any>> {
  data: T[];
  columnConfig?: ColumnsConfig<T>;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  className?: string;
}

// ── Helpers ──────────────────────────────────────────────────

/**
 * Converte o nome de uma chave camelCase para label legível.
 * Ex: "nomeFantasia" → "Nome Fantasia", "idUnidade" → "Id Unidade"
 */
function keyToLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, s => s.toUpperCase())
    .trim();
}

/**
 * matchFilter — filtragem com suporte a wildcards.
 *   "texto"   → contém "texto"
 *   "texto*"  → começa com "texto"
 *   "*texto"  → termina com "texto"
 *   "*texto*" → contém "texto" estritamente no meio
 */
function matchFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = String(cellValue ?? '').toLowerCase();
  const p = pattern.toLowerCase();
  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) return val.endsWith(p.slice(1));
  if (p.endsWith('*') && p.length > 1) return val.startsWith(p.slice(0, -1));
  return val.includes(p);
}

// ── Componente ───────────────────────────────────────────────

export function DataTable<T extends Record<string, any>>({
  data,
  columnConfig = {},
  onRowClick,
  emptyMessage = 'Nenhum resultado encontrado.',
  className = '',
}: DataTableProps<T>) {

  // ── Inferir colunas a partir do primeiro item ─────────────
  const inferredKeys = useMemo<string[]>(() => {
    if (!data.length) return [];
    return Object.keys(data[0]);
  }, [data]);

  /**
   * Colunas resolvidas: combina as chaves inferidas com o columnConfig.
   * Para cada chave, aplica os defaults:
   *   _specified  = true  (exibida por padrão)
   *   _allowFilter = true  (filtro habilitado por padrão)
   *   sortable    = true  (ordenável por padrão)
   *   label       = keyToLabel(key)
   */
  const resolvedColumns = useMemo(() => {
    return inferredKeys.map(key => {
      const cfg = (columnConfig as any)[key] ?? {};
      return {
        key,
        label:        cfg.label        ?? keyToLabel(key),
        _specified:   cfg._specified   ?? true,
        _allowFilter: cfg._allowFilter ?? true,
        sortable:     cfg.sortable     ?? true,
        render:       cfg.render       ?? null,
      };
    });
  }, [inferredKeys, columnConfig]);

  // Apenas colunas visíveis (_specified = true)
  const visibleColumns = useMemo(
    () => resolvedColumns.filter(c => c._specified),
    [resolvedColumns]
  );

  // ── Estado interno ────────────────────────────────────────
  const [sortCol,    setSortCol]    = useState<string>('');
  const [sortDir,    setSortDir]    = useState<'asc' | 'desc'>('asc');
  const [colFilters, setColFilters] = useState<Record<string, string>>({});

  // ── Pipeline: filter → sort ───────────────────────────────
  const processedRows = useMemo<T[]>(() => {
    let rows = [...data];

    // 1. Filtro por coluna (só colunas com _allowFilter = true)
    visibleColumns.forEach(col => {
      if (!col._allowFilter) return;
      const pattern = colFilters[col.key] ?? '';
      if (!pattern) return;
      rows = rows.filter(row =>
        matchFilter(String(row[col.key] ?? ''), pattern)
      );
    });

    // 2. Ordenação
    if (sortCol) {
      rows.sort((a, b) => {
        const av = String(a[sortCol] ?? '').toLowerCase();
        const bv = String(b[sortCol] ?? '').toLowerCase();
        const cmp = av.localeCompare(bv, 'pt-BR', { numeric: true });
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }

    return rows;
  }, [data, visibleColumns, colFilters, sortCol, sortDir]);

  // ── Handlers ──────────────────────────────────────────────
  const handleSort = (key: string) => {
    if (sortCol === key) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(key);
      setSortDir('asc');
    }
  };

  const handleFilter = (key: string, value: string) => {
    setColFilters(prev => ({ ...prev, [key]: value }));
  };

  // ── Ícone de ordenação ────────────────────────────────────
  const SortIcon = ({ colKey }: { colKey: string }) => {
    if (sortCol !== colKey) return <ChevronsUpDown className="w-3 h-3 opacity-30" />;
    return sortDir === 'asc'
      ? <ArrowUp   className="w-3 h-3 text-[#D93030]" />
      : <ArrowDown className="w-3 h-3 text-[#D93030]" />;
  };

  // ── Render ────────────────────────────────────────────────
  if (!data.length) {
    return (
      <div className={`flex items-center justify-center py-12 text-sm text-gray-400 dark:text-[#64748B] ${className}`}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full text-sm border-collapse">

        {/* Cabeçalho */}
        <thead>
          <tr className="border-b border-gray-200 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E]">
            {visibleColumns.map(col => (
              <th
                key={col.key}
                className={`
                  px-4 py-3 text-left text-xs font-semibold text-gray-500
                  dark:text-[#94A3B8] uppercase tracking-wider whitespace-nowrap
                  ${col.sortable ? 'cursor-pointer select-none hover:text-gray-700 dark:hover:text-[#F1F5F9]' : ''}
                `}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <div className="flex items-center gap-1.5">
                  {col.label}
                  {col.sortable && <SortIcon colKey={col.key} />}
                </div>
              </th>
            ))}
          </tr>

          {/* Linha de filtros — só aparece se ao menos 1 coluna tem _allowFilter */}
          {visibleColumns.some(c => c._allowFilter) && (
            <tr className="border-b border-gray-200 dark:border-[#2E3447] bg-white dark:bg-[#242938]">
              {visibleColumns.map(col => (
                <th key={col.key} className="px-2 py-1.5">
                  {col._allowFilter ? (
                    <input
                      type="text"
                      value={colFilters[col.key] ?? ''}
                      onChange={e => handleFilter(col.key, e.target.value)}
                      placeholder="Filtrar..."
                      className="
                        w-full text-xs px-2 py-1 rounded border
                        border-gray-200 dark:border-[#2E3447]
                        bg-gray-50 dark:bg-[#1A1F2E]
                        text-gray-700 dark:text-[#F1F5F9]
                        placeholder:text-gray-300 dark:placeholder:text-[#3E4557]
                        focus:outline-none focus:ring-1 focus:ring-[#D93030]
                        focus:border-[#D93030] transition-colors
                      "
                    />
                  ) : (
                    <div className="h-6" /> /* espaçador para alinhar */
                  )}
                </th>
              ))}
            </tr>
          )}
        </thead>

        {/* Corpo */}
        <tbody className="divide-y divide-gray-100 dark:divide-[#2E3447]">
          {processedRows.length === 0 ? (
            <tr>
              <td
                colSpan={visibleColumns.length}
                className="px-4 py-8 text-center text-sm text-gray-400 dark:text-[#64748B]"
              >
                Nenhum resultado para os filtros aplicados.
              </td>
            </tr>
          ) : (
            processedRows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick?.(row)}
                className={`
                  bg-white dark:bg-[#242938]
                  hover:bg-gray-50 dark:hover:bg-[#1E2435]
                  transition-colors
                  ${onRowClick ? 'cursor-pointer' : ''}
                `}
              >
                {visibleColumns.map(col => (
                  <td
                    key={col.key}
                    className="px-4 py-3 text-gray-700 dark:text-[#CBD5E1] whitespace-nowrap"
                  >
                    {col.render
                      ? col.render(row, row[col.key])
                      : String(row[col.key] ?? '—')
                    }
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>

      </table>

      {/* Rodapé com contagem */}
      <div className="px-4 py-2 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E]">
        <span className="text-xs text-gray-400 dark:text-[#64748B]">
          {processedRows.length === data.length
            ? `${data.length} ${data.length === 1 ? 'registro' : 'registros'}`
            : `${processedRows.length} de ${data.length} registros`
          }
        </span>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/components/DatePickerInput.tsx
````typescript
import { useState, useRef, useEffect } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerInputProps {
  value: string; // YYYY-MM-DD or ""
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const WEEKDAYS_PT = ["D", "S", "T", "Q", "Q", "S", "S"];

function parseISO(iso: string): Date | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function toISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDisplay(iso: string): string {
  const d = parseISO(iso);
  if (!d) return "";
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekday(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function parseBR(text: string): string | null {
  // Aceita DD/MM/AAAA ou DD/MM/AA
  const clean = text.replace(/\D/g, '');
  if (clean.length < 8) return null;
  const d = parseInt(clean.slice(0, 2));
  const m = parseInt(clean.slice(2, 4));
  let y = parseInt(clean.slice(4, 8));
  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2100) return null;
  const date = new Date(y, m - 1, d);
  if (date.getMonth() !== m - 1) return null; // dia inválido (ex: 31/02)
  return toISO(date);
}

function maskBR(text: string): string {
  // Aplica máscara DD/MM/AAAA enquanto o usuário digita
  const digits = text.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export function DatePickerInput({ value, onChange, placeholder = "DD/MM/AAAA", className = "" }: DatePickerInputProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = parseISO(value);
  const today = new Date();

  const [viewYear, setViewYear] = useState(() => selected?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => selected?.getMonth() ?? today.getMonth());
  const [inputText, setInputText] = useState(() => value ? formatDisplay(value) : '');

  // Sync view to selected date when value changes externally
  useEffect(() => {
    if (selected) {
      setViewYear(selected.getFullYear());
      setViewMonth(selected.getMonth());
      setInputText(formatDisplay(value));
    } else {
      setInputText('');
    }
  }, [value]);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  function selectDay(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    onChange(toISO(d));
    setOpen(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const masked = maskBR(e.target.value);
    setInputText(masked);
    // Se atingiu 10 chars (DD/MM/AAAA), tentar converter
    if (masked.length === 10) {
      const iso = parseBR(masked);
      if (iso) {
        onChange(iso);
        setOpen(false);
      }
    }
  }

  function handleInputBlur() {
    if (inputText.length === 10) {
      const iso = parseBR(inputText);
      if (iso) {
        onChange(iso);
      } else {
        // Data inválida — resetar para o valor atual
        setInputText(value ? formatDisplay(value) : '');
      }
    } else if (inputText === '') {
      onChange('');
    } else {
      // Incompleto — resetar
      setInputText(value ? formatDisplay(value) : '');
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const iso = parseBR(inputText);
      if (iso) {
        onChange(iso);
        setOpen(false);
      }
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstWeekday = getFirstWeekday(viewYear, viewMonth);
  const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  const isToday = (day: number) =>
    today.getDate() === day && today.getMonth() === viewMonth && today.getFullYear() === viewYear;

  const isSelected = (day: number) =>
    selected?.getDate() === day && selected?.getMonth() === viewMonth && selected?.getFullYear() === viewYear;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Input trigger */}
      <div className={`h-9 flex items-center gap-2 px-3 bg-white dark:bg-[#1A1F2E] border rounded-xl transition-all ${
        open
          ? "border-[#D93030] ring-2 ring-[#D93030]/15"
          : "border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]/50"
      }`}>
        <input
          type="text"
          value={inputText}
          placeholder={placeholder}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          onFocus={() => setOpen(false)}
          maxLength={10}
          className="flex-1 text-xs bg-transparent outline-none text-gray-800 dark:text-[#CBD5E1] placeholder-gray-400 dark:placeholder-[#475569] min-w-0"
        />
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <CalendarDays
            className={`w-3.5 h-3.5 transition-colors ${open ? "text-[#D93030]" : "text-gray-400 dark:text-[#64748B]"}`}
            strokeWidth={1.8}
          />
        </button>
      </div>

      {/* Calendar panel */}
      {open && (
        <div
          className="absolute top-[calc(100%+6px)] left-0 z-[300] w-64 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-gray-100 dark:border-[#2E3447] bg-[#D93030]/5 dark:bg-[#D93030]/10">
            <button
              onClick={prevMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#D93030]/10 dark:hover:bg-[#D93030]/20 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-[#D93030]" strokeWidth={2} />
            </button>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {MONTHS_PT[viewMonth]} {viewYear}
            </span>
            <button
              onClick={nextMonth}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#D93030]/10 dark:hover:bg-[#D93030]/20 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-[#D93030]" strokeWidth={2} />
            </button>
          </div>

          <div className="p-2">
            {/* Weekday labels */}
            <div className="grid grid-cols-7 mb-1">
              {WEEKDAYS_PT.map((d, i) => (
                <div key={i} className="h-7 flex items-center justify-center text-xs font-semibold text-gray-400 dark:text-[#64748B]">
                  {d}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-y-0.5">
              {Array.from({ length: totalCells }, (_, i) => {
                const day = i - firstWeekday + 1;
                const valid = day >= 1 && day <= daysInMonth;

                if (!valid) {
                  return <div key={i} />;
                }

                const sel = isSelected(day);
                const tod = isToday(day);

                return (
                  <button
                    key={i}
                    onClick={() => selectDay(day)}
                    className={`h-8 w-full flex items-center justify-center rounded-lg text-xs font-medium transition-colors ${
                      sel
                        ? "bg-[#D93030] text-white"
                        : tod
                        ? "border border-[#D93030] text-[#D93030] hover:bg-[#D93030]/10"
                        : "text-gray-700 dark:text-[#CBD5E1] hover:bg-[#D93030]/10 hover:text-[#D93030]"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clear action */}
          {value && (
            <div className="px-3 pb-2.5 pt-0">
              <button
                onClick={() => { onChange(""); setOpen(false); }}
                className="w-full text-xs text-gray-400 dark:text-[#64748B] hover:text-[#D93030] transition-colors text-center py-1"
              >
                Limpar data
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
````

## File: Figma/src/app/components/DisponibilidadeManutencaoModal.tsx
````typescript
/**
 * DisponibilidadeManutencaoModal.tsx — Modal de manutenção de uma unidade.
 *
 * Abre quando o usuário clica em uma unidade no mapa de Disponibilidade.
 * Exibe as propostas vinculadas àquela unidade em duas abas:
 *
 * ABA "Proposta Atual":
 *  - A proposta com maior prioridade: Vencida > Aprovada > Finalizada
 *  - Exibe: nome fantasia, tipo de operação, valor, datas, status
 *  - Clique na linha abre PropostaManutencaoModal para edição completa
 *
 * ABA "Propostas Vinculadas":
 *  - Todas as outras propostas da unidade (em análise, reprovadas, etc.)
 *  - Tabela com filtro por coluna (matchColFilter)
 *  - Clique em qualquer linha abre PropostaManutencaoModal
 *
 * Toolbar:
 *  - Novo: abre PropostaManutencaoModal em modo criação, pré-preenchendo
 *    a aba "Loja Anterior" com dados da proposta atual (se ocupada)
 *  - Anterior/Próximo: navega entre unidades sem fechar o modal,
 *    disparando o evento 'navigate-disponibilidade' que o ViewModel escuta
 *  - Sair: fecha o modal
 *
 * Props:
 *  unidade     — UnidadeInfo da unidade selecionada
 *  allUnidades — lista completa filtrada (para navegação Anterior/Próximo)
 *  onClose     — callback ao fechar
 *
 * Nota: propostaModalAberta é tipada como 'any' para aceitar tanto
 * PropostaResumo (da API) quanto o objeto de nova proposta criado localmente.
 */
import { useState, useMemo, useEffect } from "react";
import { FilePlus, ChevronLeft, ChevronRight, LogOut, Calendar } from "lucide-react";
import { propostas as propostasApi } from "../data/apiClient";
import { useApi } from "../data/useApi";
import { PropostaManutencaoModal } from "./PropostaManutencaoModal";
import type { UnidadeInfo, Proposta, StatusProposta } from "../data/comercialData";
import { STATUS_VENCIDA, STATUS_APROVADO, STATUS_FINALIZADO, STATUS_DISPONIVEL } from "../enums";
import { DataTable } from "./DataTable";
import { DataCard } from "./DataCard";

const STATUS_COLORS: Record<StatusProposta, string> = {
  "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40",
  "Aguardando análise do comitê": "bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40",
  Aprovado: "bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-500/40",
  Reprovado: "bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-500/40",
  Cancelado: "bg-gray-100 dark:bg-gray-500/20 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-500/40",
  Vencida: "bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-500/40",
  Finalizado: "bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40",
};

const TIPO_COLORS: Record<string, string> = {
  "Nova Instalação": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400",
  Renovação: "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400",
  Readequação: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
};

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
}

function matchColFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = cellValue.toLowerCase();
  const p = pattern.toLowerCase();
  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) return val.endsWith(p.slice(1));
  if (p.endsWith('*') && p.length > 1) return val.startsWith(p.slice(0, -1));
  return val.includes(p);
}

interface DisponibilidadeManutencaoModalProps {
  unidade: UnidadeInfo;
  allUnidades: UnidadeInfo[];
  onClose: () => void;
}

export function DisponibilidadeManutencaoModal({ unidade: lojista, allUnidades: allLojistas, onClose }: DisponibilidadeManutencaoModalProps) {

  const [activeTab, setActiveTab] = useState<'proposta-atual' | 'propostas-vinculadas'>('proposta-atual');
  const [propostaModalAberta, setPropostaModalAberta] = useState<any>(null);
  const [novaPropostaEditMode, setNovaPropostaEditMode] = useState(false);
  const [vinculadasColFilters, setVinculadasColFilters] = useState<Record<string, string>>({});

  const currentIndex = allLojistas.findIndex(l => l.id === lojista.id);

  const { data: propostasData } = useApi(() => propostasApi.listar({ idUnidade: lojista.id }), [lojista.id]);
  const todasPropostas = propostasData || [];

  // Proposta ativa: prioridade Vencida > Aprovado > Finalizado
  const propostaAtual = useMemo(() => {
    return (
      todasPropostas.find(p => p.status === STATUS_VENCIDA) ??
      todasPropostas.find(p => p.status === STATUS_APROVADO) ??
      todasPropostas.find(p => p.status === STATUS_FINALIZADO) ??
      null
    );
  }, [todasPropostas]);

  // Propostas vinculadas: todas as outras (incluindo em análise, reprovadas, canceladas)
  const propostasVinculadas = useMemo(() =>
    todasPropostas.filter(p => p.id !== propostaAtual?.id),
  [todasPropostas, propostaAtual]);

  const vinculadasFiltradas = useMemo(() =>
    propostasVinculadas.filter(p =>
      matchColFilter(p.nomeFantasia || '', vinculadasColFilters['lojista'] || '') &&
      matchColFilter(p.tipo, vinculadasColFilters['tipo'] || '') &&
      matchColFilter(p.id, vinculadasColFilters['codigo'] || '') &&
      matchColFilter(String(p.valorProposto), vinculadasColFilters['valor'] || '') &&
      matchColFilter(p.dataCriacao, vinculadasColFilters['criado'] || '') &&
      matchColFilter(p.dataVencimento || '', vinculadasColFilters['vencimento'] || '') &&
      matchColFilter(p.status, vinculadasColFilters['status'] || '')
    ),
  [propostasVinculadas, vinculadasColFilters]);

  const handleAnterior = () => {
    if (currentIndex > 0) {
      window.dispatchEvent(new CustomEvent('navigate-disponibilidade', { detail: allLojistas[currentIndex - 1] }));
    }
  };

  const handleProximo = () => {
    if (currentIndex < allLojistas.length - 1) {
      window.dispatchEvent(new CustomEvent('navigate-disponibilidade', { detail: allLojistas[currentIndex + 1] }));
    }
  };

  const abrirNovaProposta = () => {
    const novaProposta: any = {
      id: `PROP-NOVO-${Date.now()}`,
      
      
      unidade: lojista.unidade,
      segmento: lojista.segmento,
      tipoOperacao: 'Nova Instalação',
      tipo: 'Nova Instalação',
      valorProposto: 0,
      area: lojista.area,
      status: 'Aguardando análise financeira',
      responsavel: '',
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
      dataVencimento: '',
      observacoes: '',

      // Aba Loja Anterior — pré-preenchida com dados da proposta atual
      ...(propostaAtual ? {
        lojaAnteriorNomeFantasia: propostaAtual.nomeFantasia || '',
        lojaAnteriorSegmento: propostaAtual.segmento,
        lojaAnteriorTipoOperacao: propostaAtual.tipoOperacao,
        lojaAnteriorCTO: propostaAtual.valorProposto,
        lojaAnteriorABL: propostaAtual.area,
        lojaAnteriorAMM: propostaAtual.area > 0
          ? parseFloat((propostaAtual.valorProposto / propostaAtual.area).toFixed(2))
          : 0,
        lojaAnteriorDividaAMM: 0,
        lojaAnteriorDividaNegociada: 0,
        lojaAnteriorDividaCondominio: 0,
        lojaAnteriorDividaFPP: 0,
      } : {}),
    };
    setNovaPropostaEditMode(true);
    setPropostaModalAberta(novaProposta);
  };

  // Vencimento agora vem da proposta aprovada via fimContrato

  function ToolbarBtn({
    icon,
    label,
    onClick,
    disabled = false,
  }: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
  }) {
    return (
      <button
        onClick={disabled ? undefined : onClick}
        title={label}
        className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-lg gap-0.5 transition-colors min-w-0
          ${disabled
            ? 'opacity-40 cursor-not-allowed text-white/40'
            : 'text-white hover:bg-white/15 cursor-pointer'}`}
      >
        <div className="w-4 h-4">{icon}</div>
        <span className="text-[10px] font-medium leading-tight">{label}</span>
      </button>
    );
  }

  return (
    <>
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div
          className="relative z-10 flex flex-col bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full sm:max-w-3xl overflow-hidden"
          style={{ height: 'min(90vh, 100dvh - 80px)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] rounded-t-2xl">

            <ToolbarBtn icon={<FilePlus className="w-4 h-4" />} label="Novo" onClick={abrirNovaProposta} />

            <div className="w-px h-6 bg-white/20 mx-1" />

            <ToolbarBtn
              icon={<ChevronLeft className="w-4 h-4" />}
              label="Anterior"
              onClick={handleAnterior}
              disabled={currentIndex === 0}
            />
            <ToolbarBtn
              icon={<ChevronRight className="w-4 h-4" />}
              label="Próximo"
              onClick={handleProximo}
              disabled={currentIndex >= allLojistas.length - 1}
            />

            <div className="w-px h-6 bg-white/20 mx-1" />

            <ToolbarBtn icon={<LogOut className="w-4 h-4" />} label="Sair" onClick={onClose} />

            {false && (
              <div className="ml-auto flex items-center pr-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-orange-500/30 text-orange-200 rounded-full">
                  ⚠ &lt;60 dias
                </span>
              </div>
            )}
          </div>

          {/* Cabeçalho de disponibilidade */}
          <div className="flex-shrink-0 grid grid-cols-2 sm:flex sm:items-center sm:gap-6 gap-x-3 gap-y-2 px-4 sm:px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {[
              { label: 'Nº da Loja', value: lojista.unidade, mono: true },
              { label: 'Piso', value: lojista.piso === 'P' ? 'Primeiro Piso' : lojista.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso' },
              { label: 'Área (m²)', value: `${lojista.area} m²` },
              { label: 'Corredor', value: lojista.corredor },
              { label: 'Segmento', value: lojista.segmento },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">{item.label}</span>
                <span className={`text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] ${item.mono ? 'font-mono' : ''}`}>{item.value}</span>
              </div>
            ))}

            {/* Status da unidade */}
            <div className="flex flex-col gap-0.5 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Status</span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border w-auto inline-flex items-center gap-1.5
                ${lojista.status === STATUS_DISPONIVEL
                  ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/40'
                  : 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-500/40'}`}>

                {lojista.status}

              </span>
            </div>
          </div>

          {/* Abas */}
          <div className="flex-shrink-0 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            <div className="flex px-4">
              {[
                { id: 'proposta-atual', label: 'Proposta Atual' },
                { id: 'propostas-vinculadas', label: `Propostas Vinculadas (${propostasVinculadas.length})` },
              ].map(aba => (
                <button key={aba.id} onClick={() => setActiveTab(aba.id as any)}
                  className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors
                    ${activeTab === aba.id
                      ? 'text-[#D93030] dark:text-[#E04444] border-[#D93030]'
                      : 'text-gray-500 dark:text-[#94A3B8] border-transparent hover:text-gray-800 dark:hover:text-[#F1F5F9]'}`}>
                  {aba.label}
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto p-5">

            {/* ABA: Proposta Atual */}
            {activeTab === 'proposta-atual' && (
              <>
                {!propostaAtual ? (
                  <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                    <p className="text-sm">Nenhuma proposta ativa para esta unidade</p>
                    <p className="text-xs mt-1 opacity-70">Use o botão "Novo" na toolbar para criar uma proposta</p>
                  </div>
                ) : (
                  <>
                    {/* Card — mobile */}
                    <button
                      onClick={() => setPropostaModalAberta(propostaAtual)}
                      className="sm:hidden w-full text-left p-4 rounded-xl border border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{propostaAtual.nomeFantasia || '—'}</span>
                        <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${TIPO_COLORS[propostaAtual.tipoOperacao] || ''}`}>{propostaAtual.tipoOperacao}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-[#64748B] mb-3 font-mono">{propostaAtual.id}</p>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {[
                          { label: 'Valor proposto', value: fmtCurrency(propostaAtual.valorProposto) },
                          { label: 'Área', value: `${propostaAtual.area} m²` },
                          { label: 'Criado em', value: propostaAtual.dataCriacao },
                          { label: 'Vencimento', value: propostaAtual.dataVencimento },
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-2.5">
                            <p className="text-[10px] text-gray-400 dark:text-[#64748B] mb-0.5">{item.label}</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{item.value}</p>
                          </div>
                        ))}
                      </div>
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[propostaAtual.status as StatusProposta]}`}>
                        {propostaAtual.status}
                      </span>
                    </button>

                    {/* Tabela — desktop */}
                    <div className="hidden sm:block overflow-x-auto">
                      <DataTable
                        data={[{
                          nomeFantasia: propostaAtual.nomeFantasia || '—',
                          tipo:         propostaAtual.tipoOperacao,
                          id:           propostaAtual.id,
                          valor:        propostaAtual.valorProposto,
                          criacao:      propostaAtual.dataCriacao,
                          vencimento:   propostaAtual.dataVencimento || '—',
                          status:       propostaAtual.status,
                        }]}
                        columnConfig={{
                          nomeFantasia: { label: 'Nome Fantasia' },
                          tipo:         { label: 'Tipo', _allowFilter: false, render: (_, v) => (
                            <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${TIPO_COLORS[v] || ''}`}>{v}</span>
                          )},
                          id:           { label: 'Código', _allowFilter: false },
                          valor:        { label: 'Valor', _allowFilter: false, render: (_, v) => fmtCurrency(v) },
                          criacao:      { label: 'Criado em', _allowFilter: false },
                          vencimento:   { label: 'Vencimento', _allowFilter: false },
                          status:       { label: 'Status', _allowFilter: false, render: (_, v) => (
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${STATUS_COLORS[v as StatusProposta]}`}>{v}</span>
                          )},
                        }}
                        onRowClick={() => setPropostaModalAberta(propostaAtual)}
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {/* ABA: Propostas Vinculadas */}
            {activeTab === 'propostas-vinculadas' && (
              <>
                {propostasVinculadas.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                    <p className="text-sm">Nenhuma outra proposta vinculada a esta unidade</p>
                  </div>
                ) : vinculadasFiltradas.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                    <p className="text-sm">Nenhum resultado para os filtros aplicados</p>
                  </div>
                ) : (
                  <>
                    {/* Cards — mobile */}
                    <div className="flex flex-col gap-3 sm:hidden">
                      {vinculadasFiltradas.map(p => (
                        <DataCard
                          key={p.id}
                          data={p}
                          fieldMap={{
                            title:       { field: 'nomeFantasia', format: v => v || '—' },
                            titleBadge:  'tipoOperacao',
                            subtitle:    ['id', 'codigoUnidade', 'segmento'],
                            value:       { field: 'valorProposto', format: v => fmtCurrency(v) },
                            valueSub:    { field: 'area', format: v => `${v} m²` },
                            statusBadge: 'status',
                            footer:      'dataVencimento',
                          }}
                          onClick={row => setPropostaModalAberta(row)}
                        />
                      ))}
                    </div>

                    {/* Tabela — desktop */}
                    <div className="hidden sm:block overflow-x-auto">
                      <DataTable
                        data={vinculadasFiltradas.map(p => ({
                          nomeFantasia: p.nomeFantasia || '—',
                          tipo:         p.tipoOperacao,
                          id:           p.id,
                          valor:        p.valorProposto,
                          criacao:      p.dataCriacao,
                          vencimento:   p.dataVencimento || '—',
                          status:       p.status,
                          _raw:         p,
                        }))}
                        columnConfig={{
                          nomeFantasia: { label: 'Nome Fantasia' },
                          tipo:         { label: 'Tipo', render: (_, v) => (
                            <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${TIPO_COLORS[v] || ''}`}>{v}</span>
                          )},
                          id:           { label: 'Código' },
                          valor:        { label: 'Valor', render: (_, v) => fmtCurrency(v) },
                          criacao:      { label: 'Criado em' },
                          vencimento:   { label: 'Vencimento' },
                          status:       { label: 'Status', render: (_, v) => (
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${STATUS_COLORS[v as StatusProposta]}`}>{v}</span>
                          )},
                          _raw:         { _specified: false },
                        }}
                        onRowClick={row => setPropostaModalAberta(row._raw)}
                        emptyMessage="Nenhuma proposta vinculada"
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal de manutenção de proposta — abre por cima */}
      {propostaModalAberta && (
        <PropostaManutencaoModal
          proposta={propostaModalAberta}
          allPropostas={todasPropostas}
          forceEditMode={novaPropostaEditMode}
          onClose={() => {
            setPropostaModalAberta(null);
            setNovaPropostaEditMode(false);
          }}
        />
      )}
    </>
  );
}
````

## File: Figma/src/app/components/EnumCheckboxFilter.tsx
````typescript
import type { EnumOption } from '../enums';
import { toOptionItems } from '../enums';

interface EnumCheckboxFilterProps {
  label: string;
  options: readonly EnumOption[];
  selected: string[];
  onToggle: (value: string) => void;
  /** Função opcional que retorna a contagem a ser exibida ao lado do label */
  getCount?: (value: string) => number;
  /** Classes tailwind para o grid mobile. Padrão: "grid-cols-2" */
  mobileGrid?: string;
}

/**
 * Grupo de checkboxes gerado automaticamente a partir de um enumerador.
 *
 * Uso:
 *   <EnumCheckboxFilter
 *     label="Segmento"
 *     options={SEGMENTOS}
 *     selected={filtroSegmentos}
 *     onToggle={v => toggle(v)}
 *   />
 *
 * Para enums com labels separados (ex: Piso), passe objetos {value, label}:
 *   options={PISOS.map(p => ({ value: p.value, label: p.labelShort }))}
 */
export function EnumCheckboxFilter({
  label,
  options,
  selected,
  onToggle,
  getCount,
  mobileGrid = 'grid-cols-2',
}: EnumCheckboxFilterProps) {
  const items = toOptionItems(options);

  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto sm:px-6 pb-2 sm:pb-0">
      <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">{label}</span>
      <div className={`grid ${mobileGrid} sm:flex sm:flex-wrap sm:items-center gap-x-4 gap-y-2 sm:gap-3 sm:min-h-[36px]`}>
        {items.map(({ value, label: itemLabel }) => (
          <label key={value} className="flex items-center gap-1.5 cursor-pointer select-none">
            <div
              onClick={() => onToggle(value)}
              className={`w-4 h-4 border border-gray-400 dark:border-[#64748B] flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                ${selected.includes(value)
                  ? 'bg-white dark:bg-[#1A1F2E] text-gray-900 dark:text-[#F1F5F9]'
                  : 'bg-white dark:bg-[#1A1F2E]'
                }`}
            >
              {selected.includes(value) && 'X'}
            </div>
            <span className="text-xs text-gray-700 dark:text-[#CBD5E1] leading-tight">
              {itemLabel}{getCount !== undefined && ` (${getCount(value)})`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
````

## File: Figma/src/app/components/MobileCarousel.tsx
````typescript
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MobileCarousel({
  index,
  total,
  onPrev,
  onNext,
  children,
  title,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex flex-col h-full">
      {(title || total > 1) && (
        <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
          {title && (
            <span className="text-xs font-semibold text-gray-500 dark:text-[#94A3B8] uppercase tracking-wide">
              {title}
            </span>
          )}
          {total > 1 && (
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={onPrev}
                disabled={index === 0}
                className="w-7 h-7 rounded-full border border-gray-200 dark:border-[#2E3447] flex items-center justify-center disabled:opacity-30 hover:border-[#D93030] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-gray-500 dark:text-[#94A3B8]" />
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: total }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all ${
                      i === index
                        ? 'w-4 h-1.5 bg-[#D93030]'
                        : 'w-1.5 h-1.5 bg-gray-300 dark:bg-[#2E3447]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={onNext}
                disabled={index === total - 1}
                className="w-7 h-7 rounded-full border border-gray-200 dark:border-[#2E3447] flex items-center justify-center disabled:opacity-30 hover:border-[#D93030] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 dark:text-[#94A3B8]" />
              </button>
            </div>
          )}
        </div>
      )}
      <div className="flex-1 px-4 pb-4 min-h-0">
        {children}
      </div>
    </div>
  );
}
````

## File: Figma/src/app/components/PropostaManutencaoModal.tsx
````typescript
/**
 * PropostaManutencaoModal.tsx — Modal completo de edição/visualização de proposta.
 *
 * O modal mais complexo do sistema (2218 linhas). Exibe e permite editar
 * todos os dados de uma proposta em abas organizadas por contexto.
 *
 * Abas disponíveis (variam conforme o tipo de operação):
 *  - Loja Proposta:          dados principais (unidade, tipo, valor, segmento)
 *  - Loja Anterior:          dados do inquilino anterior (se substituição)
 *  - Necessidades Técnicas:  elétrica, hidráulica, gás, ventilação, estrutura
 *  - Cessão de Direitos:     res sperata (quando aplicável)
 *  - Taxa de Transferência:  TT (quando aplicável)
 *  - Parecer do Comitê:      aprovações por cargo (presidente, diretoria, etc.)
 *  - Documentos:             upload/download de arquivos vinculados
 *  - Histórico:              log de edições com snapshot do estado anterior
 *
 * Modos de operação:
 *  - Visualização (readOnly=true): campos desabilitados, sem botão Salvar
 *  - Edição (forceEditMode=true ou clique em Editar): campos ativos
 *  - Nova proposta: id começa com 'PROP-NOVO-', abre em modo edição
 *
 * Estado interno:
 *  draft          — cópia editável da proposta (modificada pelo usuário)
 *  propostaOld    — snapshot salvo antes de editar (para cancelar)
 *  historicoEdicoes — lista de edições anteriores (buscada da API)
 *
 * Seleção de unidade: ao editar o campo "Loja Proposta", o modal
 * abre o DisponibilidadeManutencaoModal em modo picker para selecionar
 * a unidade via mapa, preenchendo automaticamente os campos derivados.
 *
 * Props aceitas: PropostaInput = Proposta (tipo local) | PropostaResumo (API)
 * O cast 'as Proposta' em structuredClone é necessário para compatibilidade
 * do estado interno draft, que usa a interface Proposta local mais rica.
 */
import { useState, useEffect, useRef, Fragment } from "react";
import { FilePlus, Pencil, Save, X, ChevronLeft, ChevronRight, LogOut, Paperclip, Upload, Trash2, FileText } from "lucide-react";
import { DatePickerInput } from "./DatePickerInput";
import { propostas as propostasApi, documentos as documentosApi } from "../data/apiClient";
import { unidades } from "../data/apiClient";
import { useApi } from "../data/useApi";
import type { Proposta, StatusProposta, Segmento } from "../data/comercialData";
import type { Unidade } from "../data/apiClient";
import {
  SEGMENTOS, TIPOS_PROPOSTA, TIPOS_OPERACAO, FORMAS_PAGAMENTO, FORMAS_PAGAMENTO_SALDO, FORMAS_PAGAMENTO_TT,
  TENSOES_NECESSARIAS, TIPOS_GAS, TIPOS_FACHADA, STATUS_LAUDO, STATUS_RES_SPERATA, STATUS_ANALISE,
  STATUS_PROPOSTA,
  STATUS_AGUARDANDO_FIN, STATUS_AGUARDANDO_COMITE, STATUS_APROVADO,
  STATUS_REPROVADO, STATUS_CANCELADO, STATUS_VENCIDA, STATUS_FINALIZADO,
  STATUS_OCUPADO, STATUS_DISPONIVEL,
  TIPO_TRANSFERENCIA, TIPO_CESSAO, TIPO_NOVA_LOCACAO, TIPO_RENOVACAO, TIPO_READEQUACAO, TIPO_NOVA_INSTALACAO,
} from "../enums";
import type { PropostaResumo, Documento } from "../data/apiClient";
import type { PropostaEdicao } from "../data/comercialStore";
import { StatusPropostaBadge } from "./StatusBadge";
import { ConfirmModal } from "./ConfirmModal";

const STATUS_COLORS_SELECT: Record<string, { bg: string; text: string; border: string }> = {
  [STATUS_AGUARDANDO_FIN]: {
    bg: 'bg-yellow-100 dark:bg-yellow-500/20',
    text: 'text-yellow-800 dark:text-yellow-300',
    border: 'border-yellow-300 dark:border-yellow-500/50',
  },
  [STATUS_AGUARDANDO_COMITE]: {
    bg: 'bg-purple-100 dark:bg-purple-500/20',
    text: 'text-purple-800 dark:text-purple-300',
    border: 'border-purple-300 dark:border-purple-500/50',
  },
  [STATUS_APROVADO]: {
    bg: 'bg-green-100 dark:bg-green-500/20',
    text: 'text-green-800 dark:text-green-300',
    border: 'border-green-300 dark:border-green-500/50',
  },
  [STATUS_REPROVADO]: {
    bg: 'bg-red-100 dark:bg-red-500/20',
    text: 'text-red-800 dark:text-red-300',
    border: 'border-red-300 dark:border-red-500/50',
  },
  [STATUS_CANCELADO]: {
    bg: 'bg-gray-100 dark:bg-gray-500/20',
    text: 'text-gray-600 dark:text-gray-300',
    border: 'border-gray-300 dark:border-gray-500/50',
  },
  [STATUS_VENCIDA]: {
    bg: 'bg-orange-100 dark:bg-orange-500/20',
    text: 'text-orange-800 dark:text-orange-300',
    border: 'border-orange-300 dark:border-orange-500/50',
  },
  [STATUS_FINALIZADO]: {
    bg: 'bg-blue-100 dark:bg-blue-500/20',
    text: 'text-blue-800 dark:text-blue-300',
    border: 'border-blue-300 dark:border-blue-500/50',
  },
};

const TIPO_COLORS_SELECT: Record<string, { bg: string; text: string; border: string }> = {
  [TIPO_NOVA_LOCACAO]: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    text: 'text-indigo-700 dark:text-indigo-400',
    border: 'border-indigo-200 dark:border-indigo-700/40',
  },
  [TIPO_RENOVACAO]: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    text: 'text-teal-700 dark:text-teal-400',
    border: 'border-teal-200 dark:border-teal-700/40',
  },
  [TIPO_READEQUACAO]: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    text: 'text-amber-700 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-700/40',
  },
  [TIPO_TRANSFERENCIA]: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-700/40',
  },
  [TIPO_CESSAO]: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-700 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-700/40',
  },
};

function DisponibilidadePickerModal({
  onSelect,
  onClose,
}: {
  onSelect: (unidade: Unidade) => void;
  onClose: () => void;
}) {
  const [searchUnidade, setSearchUnidade] = useState('');
  const [searchPiso, setSearchPiso] = useState('');
  const [searchCorreidor, setSearchCorreidor] = useState('');
  const [filterStatus, setFilterStatus] = useState<'Todos' | 'Ocupado' | 'Disponível'>('Todos');

  // Busca todas as unidades — status filtrado pela UI
  const { data: unidadesData } = useApi(() => unidades.listar(), []);
  const allUnidades = unidadesData || [];
  const disponibilidades = allUnidades.filter((l: Unidade) => {
    const matchUnidade = !searchUnidade || l.codigo.toLowerCase().includes(searchUnidade.toLowerCase());
    const matchPiso = !searchPiso || l.piso.toLowerCase().includes(searchPiso.toLowerCase());
    const matchCorreidor = !searchCorreidor || l.corredor.toLowerCase().includes(searchCorreidor.toLowerCase());
    const matchStatus = filterStatus === 'Todos' || l.status === filterStatus;
    return matchUnidade && matchPiso && matchCorreidor && matchStatus;
  });

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative z-10 flex flex-col bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full sm:max-w-2xl overflow-hidden"
        style={{ height: 'min(80vh, 100dvh - 80px)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Selecionar Disponibilidade</h3>
            <p className="text-sm text-white/70 mt-0.5">
              {disponibilidades.length} unidade{disponibilidades.length !== 1 ? 's' : ''} encontrada{disponibilidades.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Filtros */}
        <div className="flex-shrink-0 p-4 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E] space-y-3">
          {/* Status */}
          <div className="flex items-center gap-4">
            {(['Todos', 'Disponível', 'Ocupado'] as const).map(s => (
              <label key={s} className="flex items-center gap-1.5 cursor-pointer select-none">
                <div
                  onClick={() => setFilterStatus(s)}
                  className={`w-4 h-4 border flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                    ${filterStatus === s
                      ? 'border-[#D93030] bg-white dark:bg-[#1A1F2E] text-[#D93030]'
                      : 'border-gray-400 dark:border-[#64748B] bg-white dark:bg-[#1A1F2E]'}`}
                >
                  {filterStatus === s && 'X'}
                </div>
                <span className="text-xs text-gray-700 dark:text-[#CBD5E1]">{s}</span>
              </label>
            ))}
          </div>

          {/* Filtros de texto */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { placeholder: 'Unidade (ex: L1-002)', value: searchUnidade, onChange: setSearchUnidade },
              { placeholder: 'Piso (P, S, T)', value: searchPiso, onChange: setSearchPiso },
              { placeholder: 'Corredor (A, B, C)', value: searchCorreidor, onChange: setSearchCorreidor },
            ].map((f, i) => (
              <input
                key={i}
                type="text"
                placeholder={f.placeholder}
                value={f.value}
                onChange={e => f.onChange(e.target.value)}
                className="h-8 px-2.5 text-xs border border-gray-200 dark:border-[#2E3447] rounded-lg bg-white dark:bg-[#242938] text-gray-700 dark:text-[#CBD5E1] placeholder-gray-300 dark:placeholder-[#3E4557] focus:outline-none focus:border-[#D93030] transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Lista */}
        <div className="flex-1 overflow-y-auto">
          {disponibilidades.length === 0 ? (
            <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
              <p className="text-sm">Nenhuma unidade encontrada</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100 dark:divide-[#2E3447]">
              {disponibilidades.map(l => (
                <button
                  key={l.id}
                  onClick={() => onSelect(l)}
                  className="w-full text-left px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9] font-mono">{l.codigo}</span>
                    <div className="text-xs text-gray-400 dark:text-[#64748B] mt-0.5">
                      Piso {l.piso} · Corredor {l.corredor} · {l.area} m²
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full flex-shrink-0
                    ${l.status === STATUS_DISPONIVEL
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'}`}
                  >
                    {l.status}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type PropostaInput = Proposta | PropostaResumo;

interface PropostaManutencaoModalProps {
  proposta: PropostaInput;
  allPropostas: PropostaInput[];
  onClose: () => void;
  readOnly?: boolean;
  forceEditMode?: boolean;
  onNavigate?: (p: PropostaInput) => void;
  initialIndex?: number;
}

// ============================================================
// Field e ToolbarBtn definidos FORA do modal — evita re-mount a cada render
// ============================================================
interface FieldProps {
  label: string;
  value?: string | number;
  onChange?: (v: string) => void;
  type?: string;
  calculated?: boolean;
  disabled?: boolean;
  options?: string[];
  textarea?: boolean;
  className?: string;
  editMode: boolean;
  readOnly: boolean;
}

function Field({
  label, value, onChange, type = 'text', calculated = false,
  disabled = false, options, textarea = false, className = '',
  editMode, readOnly,
}: FieldProps) {
  const isDisabled = disabled || calculated || (!editMode && !readOnly) || readOnly;
  const bg = calculated
    ? 'bg-blue-50 dark:bg-blue-900/20'
    : isDisabled ? 'bg-gray-50 dark:bg-[#1A1F2E]' : 'bg-white dark:bg-[#242938]';
  const displayValue = calculated && typeof value === 'number'
    ? value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : value ?? '';
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">
        {label}{calculated && <span className="ml-1 text-[10px] text-blue-400">(calc.)</span>}
      </label>
      {options ? (
        <select value={value ?? ''} onChange={e => onChange?.(e.target.value)} disabled={isDisabled}
          className={`h-8 px-2 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg ${bg} text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] disabled:cursor-not-allowed`}>
          <option value="">Selecione...</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea value={displayValue} onChange={e => onChange?.(e.target.value)} disabled={isDisabled} rows={3}
          className={`px-2 py-1.5 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg ${bg} text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] disabled:cursor-not-allowed resize-none`} />
      ) : (
        <input type={type} value={displayValue} onChange={e => onChange?.(e.target.value)} disabled={isDisabled}
          className={`h-8 px-2 text-sm border border-gray-200 dark:border-[#2E3447] rounded-lg ${bg} text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] disabled:cursor-not-allowed`} />
      )}
    </div>
  );
}

function ToolbarBtn({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className="flex flex-col items-center justify-center px-3 py-1.5 rounded-lg gap-0.5 transition-colors text-white hover:bg-white/15 cursor-pointer">
      <div className="w-4 h-4">{icon}</div>
      <span className="text-[10px] font-medium leading-tight">{label}</span>
    </button>
  );
}

export function PropostaManutencaoModal({
  proposta,
  allPropostas,
  onClose,
  readOnly = false,
  forceEditMode = false,
  onNavigate,
  initialIndex,
}: PropostaManutencaoModalProps) {
  const [editMode, setEditMode] = useState(false);
  // propostaOld — snapshot do estado ANTES da edição, nunca alterado durante a sessão
  // draft — cópia de trabalho onde todas as alterações são feitas
  const [propostaOld, setPropostaOld] = useState<Proposta>(structuredClone(proposta as Proposta));
  const [draft, setDraft] = useState<Proposta>(structuredClone(proposta as Proposta));
  const [activeTab, setActiveTab] = useState<string>('loja-proposta');
  const [activeSubTab, setActiveSubTab] = useState<Record<string, string>>({
    'loja-proposta': 'identificacao',
    'necessidades-tecnicas': 'eletrica',
    'cessao': 'avaliacao',
    'taxa-transferencia': 'valores',
  });
  const [historicoEdicoes, setHistoricoEdicoes] = useState<PropostaEdicao[]>([]);
  const [modalHistoricoSnapshot, setModalHistoricoSnapshot] = useState<Proposta | null>(null);
  const [alertaAprovacao, setAlertaAprovacao] = useState<string[]>([]);
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [tick, setTick] = useState(0);
  const [showSairModal, setShowSairModal] = useState(false);
  const [showDisponibilidadePicker, setShowDisponibilidadePicker] = useState(false);

  // Se initialIndex for fornecido (modo histórico), usar diretamente
  // pois todos os snapshots têm o mesmo ID e findIndex retornaria sempre 0
  const currentIndex = initialIndex !== undefined
    ? initialIndex
    : allPropostas.findIndex(p => p.id === proposta.id);

  useEffect(() => {
    // Buscar histórico e documentos da API
    propostasApi.historico.listar(proposta.id).then(hist => setHistoricoEdicoes(hist || [])).catch(() => {});
    documentosApi.listar(proposta.id).then(docs => setDocumentos(docs || [])).catch(() => {});
    // Sincronizar ambos os objetos ao trocar de proposta (navegação)
    setPropostaOld(structuredClone(proposta as Proposta));
    setDraft(structuredClone(proposta as Proposta));
    if (!proposta.unidade) {
      // Proposta sem unidade = aberta pelo botão "Nova Proposta" da tela principal
      // → abrir picker para selecionar disponibilidade
      setEditMode(true);
      setShowDisponibilidadePicker(true);
    } else if (forceEditMode) {
      // Proposta com unidade já definida + forceEditMode = aberta pelo botão "Novo"
      // da manutenção de disponibilidade → entrar em editMode direto, sem abrir picker
      setEditMode(true);
    }
  }, [proposta.id, proposta, tick]);

  // Derivar dados do cabeçalho
  function derivePiso(unidade: string): string {
    if (unidade.startsWith('L1')) return 'Primeiro Piso';
    if (unidade.startsWith('L2')) return 'Segundo Piso';
    if (unidade.startsWith('L3')) return 'Terceiro Piso';
    return '-';
  }

  function deriveCorreidor(unidade: string): string {
    const num = parseInt(unidade.split('-')[1] || '0');
    if (num <= 30) return 'A';
    if (num <= 60) return 'B';
    return 'C';
  }

  // Campos calculados
  const calculados = {
    resSperataPropostaPorM2: draft.resSperataProposta && draft.area ? draft.resSperataProposta / draft.area : 0,
    percentSinalResSperata: draft.sinalResSperata && draft.resSperataProposta ? (draft.sinalResSperata / draft.resSperataProposta) * 100 : 0,
    saldoResSperata: (draft.resSperataProposta || 0) - (draft.sinalResSperata || 0),
    valorParcelaResSperata: draft.numParcelasResSperata && draft.sinalResSperata && draft.resSperataProposta
      ? ((draft.resSperataProposta - draft.sinalResSperata) / draft.numParcelasResSperata)
      : 0,
    diferencaTT: (draft.ttProposta || 0) - (draft.ttContratual || 0),
    percentDescontoTT: draft.ttContratual && draft.ttProposta ? ((draft.ttProposta - draft.ttContratual) / draft.ttContratual) * 100 : 0,
    percentSinalTT: draft.sinalTT && draft.ttProposta ? (draft.sinalTT / draft.ttProposta) * 100 : 0,
    saldoTT: (draft.ttProposta || 0) - (draft.sinalTT || 0),
    totalResSperata: draft.resSperataProposta || 0,
    totalTT: draft.ttProposta || 0,
    totalOperacao: (draft.resSperataProposta || 0) + (draft.ttProposta || 0),
    dividaTotal: (draft.lojaAnteriorDividaAMM || 0) + (draft.lojaAnteriorDividaNegociada || 0) +
      (draft.lojaAnteriorDividaCondominio || 0) + (draft.lojaAnteriorDividaFPP || 0),
  };

  // Handlers
  const handleNovo = () => {
    const propostaEmBranco: Proposta = {
      id: `PROP-NOVO-${Date.now()}`,
      lojista: '',
      unidade: proposta.unidade,
      segmento: SEGMENTOS[0],
      tipo: TIPOS_PROPOSTA[0],
      valorProposto: 0,
      area: proposta.area,
      status: STATUS_AGUARDANDO_FIN,
      responsavel: '',
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
      dataVencimento: '',
      // Preservar campos da Loja Anterior
      lojaAnteriorNomeFantasia: draft.lojaAnteriorNomeFantasia,
      lojaAnteriorSegmento: draft.lojaAnteriorSegmento,
      lojaAnteriorTipoOperacao: draft.lojaAnteriorTipoOperacao,
      lojaAnteriorCTO: draft.lojaAnteriorCTO,
      lojaAnteriorABL: draft.lojaAnteriorABL,
      lojaAnteriorAMM: draft.lojaAnteriorAMM,
      lojaAnteriorDividaAMM: draft.lojaAnteriorDividaAMM,
      lojaAnteriorDividaNegociada: draft.lojaAnteriorDividaNegociada,
      lojaAnteriorDividaCondominio: draft.lojaAnteriorDividaCondominio,
      lojaAnteriorDividaFPP: draft.lojaAnteriorDividaFPP,
      lojaAnteriorFormaPagamento: draft.lojaAnteriorFormaPagamento,
    };
    setDraft(propostaEmBranco);
    setEditMode(true);
  };

  const handleGravar = async () => {
    // Validação ao tentar aprovar
    if (draft.status === STATUS_APROVADO) {
      const pendencias: string[] = [];

      // 1. Verificar se passou por análise financeira e análise do comitê
      const edicoes = historicoEdicoes; // já carregado do backend no useEffect
      const statusHistorico = edicoes.map(e => e.snapshot.status);
      const teveFin = statusHistorico.includes(STATUS_AGUARDANDO_FIN)
        || proposta.status === STATUS_AGUARDANDO_FIN;
      const tevelComite = statusHistorico.includes(STATUS_AGUARDANDO_COMITE)
        || proposta.status === STATUS_AGUARDANDO_COMITE;

      // Verificar também o status atual (propostaOld) pois pode ser um dos estágios necessários
      const statusAtual = propostaOld.status;
      if (!teveFin
          && statusAtual !== STATUS_AGUARDANDO_FIN
          && !statusHistorico.some(s => s === STATUS_AGUARDANDO_FIN)) {
        pendencias.push(`A proposta não passou pela etapa de ${STATUS_AGUARDANDO_FIN}`);
      }
      if (!tevelComite
          && statusAtual !== STATUS_AGUARDANDO_COMITE
          && !statusHistorico.some(s => s === STATUS_AGUARDANDO_COMITE)) {
        pendencias.push(`A proposta não passou pela etapa de ${STATUS_AGUARDANDO_COMITE}`);
      }

      // 2. Verificar se todos os campos do comitê estão assinados
      const aprovadores = [
        { nome: 'Presidente', campo: 'parecerPresidente' },
        { nome: 'Diretoria Compartilhada (1)', campo: 'parecerDiretoriaComp1' },
        { nome: 'Diretoria Compartilhada (2)', campo: 'parecerDiretoriaComp2' },
        { nome: 'Superintendente Comercial', campo: 'parecerSuperintendente' },
        { nome: 'In Networking', campo: 'parecerInNetworking' },
      ];
      const naoAssinados = aprovadores.filter(a => (draft as any)[a.campo] !== 'Assinado');
      if (naoAssinados.length > 0) {
        pendencias.push(`Parecer do Comitê pendente para: ${naoAssinados.map(a => a.nome).join(', ')}`);
      }

      if (pendencias.length > 0) {
        setAlertaAprovacao(pendencias);
        return; // Não grava
      }
    }

    setAlertaAprovacao([]);
    const isNovaProposta = draft.id.startsWith('PROP-NOVO-');
    if (isNovaProposta) {
      // Nova proposta — criar via API
      const { id: _tempId, ...resto } = draft;
      await propostasApi.criar(resto as any);
    } else {
      // Salvar via API
      await propostasApi.atualizar(draft.id, draft as any);

      // Se o status mudou, atualizar via endpoint dedicado
      if (draft.status !== propostaOld.status) {
        await propostasApi.atualizarStatus(draft.id, draft.status as any);
      }

      // Recarregar histórico
      const hist = await propostasApi.historico.listar(draft.id).catch(() => []);
      setHistoricoEdicoes(hist || []);
      // Atualizar propostaOld para refletir o novo estado gravado
      setPropostaOld(structuredClone(draft));
    }
    setEditMode(false);
  };

  const handleCancelar = () => {
    // Restaurar draft com cópia independente de propostaOld — sem referência compartilhada
    setDraft(structuredClone(propostaOld));
    setEditMode(false);
  };

  const handleAnterior = () => {
    if (currentIndex > 0) {
      const prev = allPropostas[currentIndex - 1];
      if (onNavigate) {
        onNavigate(prev);
      } else {
        window.dispatchEvent(new CustomEvent('navigate-proposta', { detail: prev }));
      }
    }
  };

  const handleProximo = () => {
    if (currentIndex < allPropostas.length - 1) {
      const next = allPropostas[currentIndex + 1];
      if (onNavigate) {
        onNavigate(next);
      } else {
        window.dispatchEvent(new CustomEvent('navigate-proposta', { detail: next }));
      }
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnexarDocumento = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
      const ext = file.name.split('.').pop()?.toUpperCase() || 'PDF';
      const tipoValido = ['PDF', 'DOCX', 'XLSX', 'JPG', 'PNG'].includes(ext)
        ? ext as 'PDF' | 'DOCX' | 'XLSX' | 'JPG' | 'PNG'
        : 'PDF';

      // Gerar código Anexo[NºProposta][NºAnexo]
      const docsAtuais = documentos; // estado local já sincronizado com API
      const nrAnexo = (docsAtuais.length + 1).toString().padStart(3, '0');
      const propId = proposta.id.replace('PROP-', '');
      const codigo = `Anexo${propId}${nrAnexo}`;

      // Tamanho legível
      const tamanho = file.size < 1024
        ? `${file.size} B`
        : file.size < 1024 * 1024
        ? `${(file.size / 1024).toFixed(0)} KB`
        : `${(file.size / (1024 * 1024)).toFixed(1)} MB`;

      documentosApi.upload(proposta.id, file, codigo)
        .then(doc => setDocumentos(prev => [...prev, doc as any]))
        .catch(() => {});
    });

    // Limpar o input para permitir selecionar o mesmo arquivo novamente
    e.target.value = '';
    setTick(t => t + 1);
  };

  const handleRemoverDocumento = (docId: string) => {
    documentosApi.remover(docId)
      .then(() => setDocumentos(prev => prev.filter(d => d.id !== docId)))
      .catch(() => {});
  };

  const handleSair = () => {
    if (editMode) {
      // Há edição em andamento — perguntar antes de fechar
      setShowSairModal(true);
    } else {
      // Sem edição — fechar diretamente
      onClose();
    }
  };

  const handleSelecionarDisponibilidade = async (unidade: Unidade) => {
    // Campos básicos da unidade selecionada
    setDraft(prev => ({
      ...prev,
      unidade: unidade.codigo,
      area: unidade.area,
      lojistaId: unidade.id,
    }));

    // Se ocupada, busca a proposta aprovada vinculada e preenche Loja Anterior
    if (unidade.status === STATUS_OCUPADO) {
      const vinculadas = await propostasApi.listar({ idUnidade: unidade.id, status: STATUS_APROVADO }).catch(() => []);
      const propostaAtual = vinculadas?.[0];
      if (propostaAtual) {
        setDraft(prev => ({
          ...prev,
          lojaAnteriorNomeFantasia: propostaAtual.nomeFantasia ?? '',
          lojaAnteriorSegmento: propostaAtual.segmento,
          lojaAnteriorABL: propostaAtual.area,
          lojaAnteriorTipoOperacao: propostaAtual.tipoOperacao,
          lojaAnteriorDividaAMM: 0,
          lojaAnteriorDividaNegociada: 0,
          lojaAnteriorDividaCondominio: 0,
          lojaAnteriorDividaFPP: 0,
        }));
      }
    }

    setShowDisponibilidadePicker(false);
  };

  // Controle de abas condicionais
  const isCessaoAtiva = draft.tipoOperacao === TIPO_CESSAO || draft.tipoOperacao === TIPO_TRANSFERENCIA;
  const isTTAtiva = draft.tipoOperacao === TIPO_TRANSFERENCIA;

  const ABAS_PRINCIPAIS = [
    { id: 'loja-proposta', label: 'Loja Proposta', disabled: false },
    { id: 'loja-anterior', label: 'Loja Anterior', disabled: false },
    { id: 'necessidades-tecnicas', label: 'Necessidades Técnicas', disabled: false },
    { id: 'cessao', label: 'Cessão de Direitos', disabled: !isCessaoAtiva },
    { id: 'taxa-transferencia', label: 'Taxa de Transferência', disabled: !isTTAtiva },
    { id: 'parecer-comite', label: 'Parecer do Comitê', disabled: false },
    // Ocultar Histórico quando visualizando um snapshot (readOnly) — evita histórico dentro de histórico
    ...(!readOnly ? [{ id: 'historico', label: 'Histórico', disabled: false }] : []),
    { id: 'anexos', label: 'Anexos', disabled: false },
  ];

  // Componente de campo reutilizável
  // Renderizar conteúdo de cada aba
  // Field e ToolbarBtn definidos fora do componente para evitar re-mount
  function renderTabContent() {
    const disabled = !editMode || readOnly;

    if (activeTab === 'loja-proposta') {
      const subTab = activeSubTab['loja-proposta'];
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Sub-abas */}
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['identificacao', 'contrato', 'encargos'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'loja-proposta': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'identificacao' ? 'Identificação' : st === 'contrato' ? 'Contrato' : 'Encargos e Datas'}
              </button>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'identificacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Nome Fantasia"
                  value={draft.nomeFantasia || ''}
                  onChange={v => setDraft(prev => ({ ...prev, nomeFantasia: v }))}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Segmento"
                  value={draft.segmento}
                  onChange={v => setDraft(prev => ({ ...prev, segmento: v as Segmento }))}
                  options={[...SEGMENTOS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Tipo de Operação</label>
                  <select
                    value={draft.tipoOperacao ?? ''}
                    onChange={e => setDraft(prev => ({ ...prev, tipoOperacao: e.target.value as any }))}
                    disabled={!editMode || readOnly}
                    className={`text-xs font-semibold px-2.5 py-1.5 rounded-full border cursor-pointer focus:outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-60
                      ${TIPO_COLORS_SELECT[draft.tipoOperacao ?? '']?.bg ?? 'bg-gray-50 dark:bg-[#1A1F2E]'}
                      ${TIPO_COLORS_SELECT[draft.tipoOperacao ?? '']?.text ?? 'text-gray-600 dark:text-[#94A3B8]'}
                      ${TIPO_COLORS_SELECT[draft.tipoOperacao ?? '']?.border ?? 'border-gray-200 dark:border-[#2E3447]'}`}
                  >
                    <option value="">Selecione...</option>
                    {TIPOS_OPERACAO.map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {subTab === 'contrato' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Aluguel %"
                  value={draft.aluguelPercent}
                  onChange={v => setDraft(prev => ({ ...prev, aluguelPercent: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Prazo de Locação (meses)"
                  value={draft.prazoLocacaoMeses}
                  onChange={v => setDraft(prev => ({ ...prev, prazoLocacaoMeses: parseInt(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="AR - Aluguel por m²"
                  value={draft.aluguelPorM2}
                  onChange={v => setDraft(prev => ({ ...prev, aluguelPorM2: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="ABL (m²)"
                  value={draft.area}
                  onChange={v => setDraft(prev => ({ ...prev, area: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'encargos' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Condomínio (Aprox.)"
                  value={draft.condominioAprox}
                  onChange={v => setDraft(prev => ({ ...prev, condominioAprox: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="FPP (Aprox.)"
                  value={draft.fppAprox}
                  onChange={v => setDraft(prev => ({ ...prev, fppAprox: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Início Contrato"
                  value={draft.inicioContrato}
                  onChange={v => setDraft(prev => ({ ...prev, inicioContrato: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Fim Contrato"
                  value={draft.fimContrato}
                  onChange={v => setDraft(prev => ({ ...prev, fimContrato: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Inauguração"
                  value={draft.dataInauguracao}
                  onChange={v => setDraft(prev => ({ ...prev, dataInauguracao: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Vencimento Proposta"
                  value={draft.dataVencimento}
                  onChange={v => setDraft(prev => ({ ...prev, dataVencimento: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />

              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'loja-anterior') {
      const subTab = activeSubTab['loja-anterior'] || 'identificacao';
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Sub-abas */}
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['identificacao', 'debitos'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'loja-anterior': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'identificacao' ? 'Identificação' : 'Débitos'}
              </button>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'identificacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Nome Fantasia"
                  value={draft.lojaAnteriorNomeFantasia}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorNomeFantasia: v }))}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Segmento"
                  value={draft.lojaAnteriorSegmento}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorSegmento: v }))}
                  options={[...SEGMENTOS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tipo de Operação"
                  value={draft.lojaAnteriorTipoOperacao}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorTipoOperacao: v }))}
                  options={[...TIPOS_OPERACAO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="CTO (R$)"
                  value={draft.lojaAnteriorCTO}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorCTO: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="ABL (m²)"
                  value={draft.lojaAnteriorABL}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorABL: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="AMM (R$/m²)"
                  value={draft.lojaAnteriorAMM}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorAMM: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'debitos' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Dívida AMM (R$)"
                  value={draft.lojaAnteriorDividaAMM}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaAMM: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida Negociada (R$)"
                  value={draft.lojaAnteriorDividaNegociada}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaNegociada: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida Condomínio (R$)"
                  value={draft.lojaAnteriorDividaCondominio}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaCondominio: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida FPP (R$)"
                  value={draft.lojaAnteriorDividaFPP}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorDividaFPP: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Dívida Total (R$)"
                  value={calculados.dividaTotal}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Forma de Pagamento"
                  value={draft.lojaAnteriorFormaPagamento}
                  onChange={v => setDraft(prev => ({ ...prev, lojaAnteriorFormaPagamento: v }))}
                  options={[...FORMAS_PAGAMENTO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'necessidades-tecnicas') {
      const subTab = activeSubTab['necessidades-tecnicas'] || 'eletrica';
      const subTabLabels: Record<string, string> = {
        eletrica: 'Elétrica',
        hidraulica: 'Hidráulica',
        gas: 'Gás',
        ventilacao: 'Ventilação e Exaustão',
        estrutura: 'Estrutura',
        fachada: 'Fachada e Visual',
        telecom: 'TI e Telecom',
        controle: 'Controle',
        observacoes: 'Observações',
      };
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {Object.entries(subTabLabels).map(([st, label]) => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'necessidades-tecnicas': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">

            {/* Elétrica */}
            {subTab === 'eletrica' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Demanda Elétrica (kVA)"
                  value={draft.demandaEletricaKva}
                  onChange={v => setDraft(prev => ({ ...prev, demandaEletricaKva: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tensão Necessária"
                  value={draft.tensaoNecessaria}
                  onChange={v => setDraft(prev => ({ ...prev, tensaoNecessaria: v }))}
                  options={[...TENSOES_NECESSARIAS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Circuitos Especiais"
                  value={draft.circuitosEspeciais ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, circuitosEspeciais: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações Elétricas"
                  value={draft.obsEletrica}
                  onChange={v => setDraft(prev => ({ ...prev, obsEletrica: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Hidráulica */}
            {subTab === 'hidraulica' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Ponto de Água"
                  value={draft.pontoAgua ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, pontoAgua: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Quantidade de Pontos de Água"
                  value={draft.quantidadePontosAgua}
                  onChange={v => setDraft(prev => ({ ...prev, quantidadePontosAgua: parseInt(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Ponto de Esgoto"
                  value={draft.pontoEsgoto ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, pontoEsgoto: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Vazão Necessária (l/min)"
                  value={draft.vazaoNecessariaLmin}
                  onChange={v => setDraft(prev => ({ ...prev, vazaoNecessariaLmin: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Caixa de Gordura"
                  value={draft.caixaGordura ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, caixaGordura: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações Hidráulicas"
                  value={draft.obsHidraulica}
                  onChange={v => setDraft(prev => ({ ...prev, obsHidraulica: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Gás */}
            {subTab === 'gas' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Necessita Gás"
                  value={draft.necessitaGas ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaGas: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tipo de Gás"
                  value={draft.tipoGas}
                  onChange={v => setDraft(prev => ({ ...prev, tipoGas: v }))}
                  options={[...TIPOS_GAS]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Consumo (m³/h)"
                  value={draft.consumoGasM3h}
                  onChange={v => setDraft(prev => ({ ...prev, consumoGasM3h: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Gás"
                  value={draft.obsGas}
                  onChange={v => setDraft(prev => ({ ...prev, obsGas: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Ventilação e Exaustão */}
            {subTab === 'ventilacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Necessita Exaustão"
                  value={draft.necessitaExaustao ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaExaustao: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Vazão de Exaustão (m³/h)"
                  value={draft.vazaoExaustaoM3h}
                  onChange={v => setDraft(prev => ({ ...prev, vazaoExaustaoM3h: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Make-up de Ar (Reposição)"
                  value={draft.necessitaMakeUpAr ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaMakeUpAr: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Ventilação"
                  value={draft.obsVentilacao}
                  onChange={v => setDraft(prev => ({ ...prev, obsVentilacao: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Estrutura */}
            {subTab === 'estrutura' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Área Mínima (m²)"
                  value={draft.areaMinimaM2}
                  onChange={v => setDraft(prev => ({ ...prev, areaMinimaM2: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Área Máxima (m²)"
                  value={draft.areaMaximaM2}
                  onChange={v => setDraft(prev => ({ ...prev, areaMaximaM2: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Pé Direito Mínimo (m)"
                  value={draft.peDireitoMinimoM}
                  onChange={v => setDraft(prev => ({ ...prev, peDireitoMinimoM: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Carga no Piso (kg/m²)"
                  value={draft.cargaPisoKgm2}
                  onChange={v => setDraft(prev => ({ ...prev, cargaPisoKgm2: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Necessita Mezanino"
                  value={draft.necessitaMezanino ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaMezanino: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações Estruturais"
                  value={draft.obsEstrutura}
                  onChange={v => setDraft(prev => ({ ...prev, obsEstrutura: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Fachada e Visual */}
            {subTab === 'fachada' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Frente Mínima (m)"
                  value={draft.frenteMinimaM}
                  onChange={v => setDraft(prev => ({ ...prev, frenteMinimaM: parseFloat(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Tipo de Fachada"
                  value={draft.tipoFachada}
                  onChange={v => setDraft(prev => ({ ...prev, tipoFachada: v }))}
                  options={[...TIPOS_FACHADA]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Comunicação Visual com LED"
                  value={draft.comunicacaoVisualLed ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, comunicacaoVisualLed: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Fachada"
                  value={draft.obsFachada}
                  onChange={v => setDraft(prev => ({ ...prev, obsFachada: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* TI e Telecom */}
            {subTab === 'telecom' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Pontos de Dados (rede)"
                  value={draft.pontosDados}
                  onChange={v => setDraft(prev => ({ ...prev, pontosDados: parseInt(v) || undefined }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Necessita Fibra Óptica"
                  value={draft.necessitaFibra ? 'Sim' : 'Não'}
                  onChange={v => setDraft(prev => ({ ...prev, necessitaFibra: v === 'Sim' }))}
                  options={['Sim', 'Não']}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações de Telecom"
                  value={draft.obsTelecom}
                  onChange={v => setDraft(prev => ({ ...prev, obsTelecom: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Controle */}
            {subTab === 'controle' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Status do Laudo"
                  value={draft.statusNecessidadesTecnicas}
                  onChange={v => setDraft(prev => ({ ...prev, statusNecessidadesTecnicas: v }))}
                  options={[...STATUS_LAUDO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Responsável Técnico"
                  value={draft.responsavelTecnico}
                  onChange={v => setDraft(prev => ({ ...prev, responsavelTecnico: v }))}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Data da Vistoria"
                  value={draft.dataVistoria}
                  onChange={v => setDraft(prev => ({ ...prev, dataVistoria: v }))}
                  type="date"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {/* Observações */}
            {subTab === 'observacoes' && (
              <div className="grid grid-cols-1 gap-4">
                <Field
                  label="Observações Gerais"
                  value={draft.observacoes}
                  onChange={v => setDraft(prev => ({ ...prev, observacoes: v }))}
                  textarea
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'cessao') {
      const subTab = activeSubTab['cessao'];
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['avaliacao', 'pagamento'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'cessao': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'avaliacao' ? 'Avaliação do Ponto' : 'Condições de Pagamento'}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'avaliacao' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Res Sperata Proposta (R$)"
                  value={draft.resSperataProposta}
                  onChange={v => setDraft(prev => ({ ...prev, resSperataProposta: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Res Sperata Proposta (R$/m²)"
                  value={calculados.resSperataPropostaPorM2}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Referência de Mercado (R$/m²)"
                  value={draft.referenciadeMercadoPorM2}
                  disabled
                  type="number"
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Status Res Sperata"
                  value={draft.statusResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, statusResSperata: v }))}
                  options={[...STATUS_RES_SPERATA]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Observações"
                  value={draft.observacoesResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, observacoesResSperata: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'pagamento' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Sinal (R$)"
                  value={draft.sinalResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, sinalResSperata: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="% Sinal"
                  value={calculados.percentSinalResSperata}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Saldo (R$)"
                  value={calculados.saldoResSperata}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Forma de Pagamento do Saldo"
                  value={draft.formaPagamentoSaldoResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, formaPagamentoSaldoResSperata: v }))}
                  options={[...FORMAS_PAGAMENTO_SALDO]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Número de Parcelas"
                  value={draft.numParcelasResSperata}
                  onChange={v => setDraft(prev => ({ ...prev, numParcelasResSperata: parseInt(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Valor da Parcela (R$)"
                  value={calculados.valorParcelaResSperata}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'taxa-transferencia') {
      const subTab = activeSubTab['taxa-transferencia'];
      return (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-shrink-0 flex flex-wrap gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">
            {['valores', 'resumo'].map(st => (
              <button
                key={st}
                onClick={() => setActiveSubTab(prev => ({ ...prev, 'taxa-transferencia': st }))}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                  ${subTab === st
                    ? 'bg-[#D93030] text-white'
                    : 'bg-white dark:bg-[#242938] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-100 dark:hover:bg-[#2E3447]'}`}
              >
                {st === 'valores' ? 'Valores da TT' : 'Resumo Financeiro'}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {subTab === 'valores' && (
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="TT Contratual (R$)"
                  value={draft.ttContratual}
                  disabled
                  type="number"
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="TT Proposta (R$)"
                  value={draft.ttProposta}
                  onChange={v => setDraft(prev => ({ ...prev, ttProposta: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="TT Proposta (Nº de AMM)"
                  value={draft.ttPropostaNumAMM}
                  onChange={v => setDraft(prev => ({ ...prev, ttPropostaNumAMM: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Diferença (R$)"
                  value={calculados.diferencaTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="% Desconto/Acréscimo"
                  value={calculados.percentDescontoTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Sinal TT (R$)"
                  value={draft.sinalTT}
                  onChange={v => setDraft(prev => ({ ...prev, sinalTT: parseFloat(v) || 0 }))}
                  type="number"
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="% Sinal TT"
                  value={calculados.percentSinalTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Saldo TT (R$)"
                  value={calculados.saldoTT}
                  calculated
                
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Forma de Pagamento TT"
                  value={draft.formaPagamentoTT}
                  onChange={v => setDraft(prev => ({ ...prev, formaPagamentoTT: v }))}
                  options={[...FORMAS_PAGAMENTO_TT]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Status TT"
                  value={draft.statusTT}
                  onChange={v => setDraft(prev => ({ ...prev, statusTT: v }))}
                  options={[...STATUS_ANALISE]}
                  editMode={editMode}
                  readOnly={readOnly}
                />
                <Field
                  label="Justificativa da Proposta"
                  value={draft.justificativaTT}
                  onChange={v => setDraft(prev => ({ ...prev, justificativaTT: v }))}
                  textarea
                  className="col-span-2"
                  editMode={editMode}
                  readOnly={readOnly}
                />
              </div>
            )}

            {subTab === 'resumo' && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9] mb-3">Resumo Financeiro</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Total Res Sperata (R$)"
                    value={calculados.totalResSperata}
                    calculated
                  
                  editMode={editMode}
                  readOnly={readOnly}
                />
                  <Field
                    label="Total TT (R$)"
                    value={calculados.totalTT}
                    calculated
                  
                  editMode={editMode}
                  readOnly={readOnly}
                />
                  <div className="col-span-2">
                    <Field
                      label="Total da Operação (R$)"
                      value={calculados.totalOperacao}
                      calculated
                    
                  editMode={editMode}
                  readOnly={readOnly}
                />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'parecer-comite') {
      const aprovadores = [
        { nome: 'Presidente', campoAprovado: 'parecerPresidente', campoData: 'parecerPresidenteData' },
        { nome: 'Diretoria Compartilhada (1)', campoAprovado: 'parecerDiretoriaComp1', campoData: 'parecerDiretoriaComp1Data' },
        { nome: 'Diretoria Compartilhada (2)', campoAprovado: 'parecerDiretoriaComp2', campoData: 'parecerDiretoriaComp2Data' },
        { nome: 'Superintendente Comercial', campoAprovado: 'parecerSuperintendente', campoData: 'parecerSuperintendenteData' },
        { nome: 'In Networking', campoAprovado: 'parecerInNetworking', campoData: 'parecerInNetworkingData' },
      ];
      const podeAssinar = draft.status === STATUS_AGUARDANDO_COMITE;

      return (
        <div className="flex-1 overflow-y-auto p-6">
          {/* Aviso quando status não permite assinatura */}
          {!podeAssinar && (
            <div className="mb-4 flex items-start gap-2.5 px-4 py-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl">
              <span className="text-amber-500 text-base flex-shrink-0 mt-0.5">ⓘ</span>
              <p className="text-xs text-amber-700 dark:text-amber-400">
                As assinaturas do comitê só podem ser registradas quando a proposta estiver com o status <strong>Aguardando análise do comitê</strong>. Status atual: <strong>{draft.status}</strong>.
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aprovadores.map(apr => {
              const assinado = (draft as any)[apr.campoAprovado] === 'Assinado';
              return (
                <div key={apr.nome} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-[#2E3447]">
                  {/* Nome do aprovador */}
                  <p className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">
                    {apr.nome}
                  </p>

                  {/* Checkbox assinatura */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={assinado}
                      onChange={e => {
                        setDraft(prev => ({
                          ...prev,
                          [apr.campoAprovado]: e.target.checked ? 'Assinado' : '',
                          [apr.campoData]: e.target.checked ? new Date().toISOString().slice(0, 10) : '',
                        }));
                      }}
                      disabled={disabled || !podeAssinar}
                      className="w-4 h-4 text-[#D93030] border-gray-300 dark:border-[#2E3447] rounded focus:ring-[#D93030] disabled:cursor-not-allowed"
                    />
                    <label className="text-xs text-gray-600 dark:text-[#94A3B8]">Assinado</label>
                    {assinado && (
                      <span className="ml-auto text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">✓ OK</span>
                    )}
                  </div>

                  {/* Data da assinatura — só visível se assinado e em modo edição */}
                  {assinado && editMode && (
                    <div>
                      <p className="text-xs text-gray-500 dark:text-[#94A3B8] mb-1">Data da assinatura</p>
                      <DatePickerInput
                        value={(draft as any)[apr.campoData] || ''}
                        onChange={v => setDraft(prev => ({ ...prev, [apr.campoData]: v }))}
                        placeholder="DD/MM/AAAA"
                      />
                    </div>
                  )}
                  {/* Exibir data somente leitura se assinado e fora do modo edição */}
                  {assinado && !editMode && (draft as any)[apr.campoData] && (
                    <p className="text-xs text-gray-500 dark:text-[#94A3B8]">
                      Assinado em <span className="font-semibold text-gray-700 dark:text-[#F1F5F9]">{(draft as any)[apr.campoData]}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    if (activeTab === 'historico') {
      return (
        <div className="flex-1 overflow-y-auto p-6">
          {editMode && (
            <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Salve ou cancele a edição atual antes de consultar o histórico.
              </p>
            </div>
          )}

          {historicoEdicoes.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-[#64748B]">
              Nenhuma edição registrada
            </div>
          ) : (
            <>
              {/* Cards — mobile only */}
              <div className="flex flex-col gap-3 sm:hidden">
                {historicoEdicoes.map(ed => (
                  <button
                    key={ed.id}
                    onClick={() => !editMode && setModalHistoricoSnapshot(ed.snapshot)}
                    disabled={editMode}
                    className={`text-left p-3 rounded-xl border transition-colors w-full
                      ${editMode
                        ? 'opacity-50 cursor-not-allowed border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938]'
                        : 'border-gray-100 dark:border-[#2E3447] bg-white dark:bg-[#242938] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{ed.snapshot.nomeFantasia || '—'}</span>
                      <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0
                        ${ed.snapshot.tipo === TIPO_NOVA_INSTALACAO ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400'
                          : ed.snapshot.tipo === TIPO_RENOVACAO ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400'
                          : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'}`}>
                        {ed.snapshot.tipo}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-[#64748B] mb-2">
                      {ed.snapshot.id} · {ed.editadoPorNome}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">
                        {ed.snapshot.valorProposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <StatusPropostaBadge status={ed.snapshot.status} />
                      <span className="text-xs text-gray-400">{new Date(ed.editadoEm).toLocaleString('pt-BR')}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Tabela — desktop only */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-gray-200 dark:border-[#2E3447]">
                    <tr className="text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wide">
                      <th className="pb-2">Data da edição</th>
                      <th className="pb-2">Editado por</th>
                      <th className="pb-2">Loja</th>
                      <th className="pb-2">Tipo</th>
                      <th className="pb-2">Código</th>
                      <th className="pb-2">Valor</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-[#2E3447]">
                    {historicoEdicoes.map(ed => (
                      <tr
                        key={ed.id}
                        onClick={() => !editMode && setModalHistoricoSnapshot(ed.snapshot)}
                        className={`transition-colors
                          ${editMode
                            ? 'opacity-50 cursor-not-allowed'
                            : 'cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1A1F2E]'}`}
                      >
                        <td className="py-3 text-gray-700 dark:text-[#F1F5F9]">
                          {new Date(ed.editadoEm).toLocaleString('pt-BR')}
                        </td>
                        <td className="py-3 text-gray-700 dark:text-[#F1F5F9]">{ed.editadoPorNome}</td>
                        <td className="py-3 text-gray-700 dark:text-[#F1F5F9]">{ed.snapshot.nomeFantasia || '—'}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {ed.snapshot.tipo}
                          </span>
                        </td>
                        <td className="py-3 font-mono text-xs text-gray-500 dark:text-[#94A3B8]">
                          {ed.snapshot.id}
                        </td>
                        <td className="py-3 font-semibold text-gray-800 dark:text-[#F1F5F9]">
                          {ed.snapshot.valorProposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}
                        </td>
                        <td className="py-3">
                          <StatusPropostaBadge status={ed.snapshot.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      );
    }

    if (activeTab === 'anexos') {
      return (
        <div className="flex-1 overflow-y-auto p-6">

          {/* Cabeçalho da aba com botão de upload */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Paperclip className="w-4 h-4 text-gray-400 dark:text-[#64748B]" />
              <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
                Documentos anexados — {documentos.length}
              </span>
            </div>

            {/* Botão de upload — visível somente em modo edição */}
            {editMode && !readOnly && (
              <button
                onClick={handleAnexarDocumento}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#D93030] hover:bg-[#c02828] text-white rounded-lg transition-colors"
              >
                <Upload className="w-3.5 h-3.5" /> Anexar Documento
              </button>
            )}
          </div>

          {/* Mensagem quando não está em modo edição */}
          {!editMode && !readOnly && (
            <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Para anexar ou remover documentos, clique em <strong>Editar</strong> na toolbar.
              </p>
            </div>
          )}

          {/* Lista de documentos */}
          {documentos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-[#64748B]">
              <Paperclip className="w-10 h-10 mb-3 opacity-30" />
              <p className="text-sm">Nenhum documento anexado</p>
              {editMode && (
                <p className="text-xs mt-1 opacity-70">Clique em "Anexar Documento" para adicionar</p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {documentos.map(doc => (
                <div
                  key={doc.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-[#1A1F2E] rounded-xl border border-gray-100 dark:border-[#2E3447] hover:border-gray-200 dark:hover:border-[#3E4557] transition-colors"
                >
                  {/* Ícone de tipo */}
                  <div className="w-9 h-9 rounded-lg bg-[#D93030]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-[#D93030]" />
                  </div>

                  {/* info + badge em mobile ficam empilhados */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-gray-800 dark:text-[#F1F5F9] truncate">{doc.nomeOriginal}</p>
                      {/* badge — no topo direito em mobile, inline em desktop */}
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-200 dark:bg-[#2E3447] text-gray-500 dark:text-[#94A3B8] flex-shrink-0">
                        {doc.tipo}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-[#64748B] mt-0.5 leading-relaxed">
                      {doc.tamanho} · {doc.dataUpload} · {doc.idUsuario}
                    </p>
                  </div>

                  {/* Botão remover — somente em modo edição */}
                  {editMode && !readOnly && (
                    <button
                      onClick={() => handleRemoverDocumento(doc.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex-shrink-0 mt-0.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  }

  return (
    <>
      {/* Overlay com fundo borrado */}
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Janela do modal */}
        <div
          className="relative z-10 flex flex-col bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl border border-gray-100 dark:border-[#2E3447] w-full max-w-4xl overflow-hidden"
          style={{ height: 'min(90vh, 100dvh - 80px)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] rounded-t-2xl">

          {/* MODO VISUALIZAÇÃO: Novo, Editar, navegação, Sair */}
          {!editMode && !readOnly && (
            <>
              <ToolbarBtn
                icon={<FilePlus className="w-4 h-4" />}
                label="Novo"
                onClick={handleNovo}
              />
              <div className="w-px h-6 bg-white/20 mx-1" />
              <ToolbarBtn
                icon={<Pencil className="w-4 h-4" />}
                label="Editar"
                onClick={() => { setDraft(structuredClone(propostaOld)); setEditMode(true); }}
              />
              {/* Anterior e Próximo — ocultos quando é nova proposta */}
              {!forceEditMode && proposta.unidade && (
                <>
                  <div className="w-px h-6 bg-white/20 mx-1" />
                  <ToolbarBtn
                    icon={<ChevronLeft className="w-4 h-4" />}
                    label="Anterior"
                    onClick={handleAnterior}
                  />
                  <ToolbarBtn
                    icon={<ChevronRight className="w-4 h-4" />}
                    label="Próximo"
                    onClick={handleProximo}
                  />
                </>
              )}
            </>
          )}

          {/* MODO EDIÇÃO: Gravar, Cancelar, Sair */}
          {editMode && (
            <>
              <ToolbarBtn
                icon={<Save className="w-4 h-4" />}
                label="Gravar"
                onClick={handleGravar}
              />
              <div className="w-px h-6 bg-white/20 mx-1" />
              <ToolbarBtn
                icon={<X className="w-4 h-4" />}
                label="Cancelar"
                onClick={handleCancelar}
              />
            </>
          )}

          {/* MODO SOMENTE LEITURA: navegação */}
          {readOnly && !forceEditMode && proposta.unidade && (
            <>
              <ToolbarBtn
                icon={<ChevronLeft className="w-4 h-4" />}
                label="Anterior"
                onClick={handleAnterior}
              />
              <ToolbarBtn
                icon={<ChevronRight className="w-4 h-4" />}
                label="Próximo"
                onClick={handleProximo}
              />
            </>
          )}

          {/* SAIR — sempre visível em todos os modos */}
          <div className="w-px h-6 bg-white/20 mx-1" />
          <ToolbarBtn
            icon={<LogOut className="w-4 h-4" />}
            label="Sair"
            onClick={handleSair}
          />

          {/* Identificação — lado direito */}
          <div className="ml-auto flex items-center gap-3 pr-2">
            {editMode && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-white/20 text-white rounded-full">
                Em edição
              </span>
            )}
            {readOnly && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-white/10 text-white/70 rounded-full">
                Somente leitura
              </span>
            )}
          </div>

        </div>

        {/* Cabeçalho de disponibilidade */}
        <div className="flex-shrink-0 grid grid-cols-2 sm:flex sm:items-center sm:gap-6 gap-x-3 gap-y-2 px-4 sm:px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">

          {/* Código */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Código</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] font-mono">{draft.id}</span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Nº da Loja — clicável em modo edição */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Nº da Loja</span>
            {editMode && !proposta.unidade ? (
              // Nova proposta: clicável para selecionar disponibilidade
              <button
                onClick={() => setShowDisponibilidadePicker(true)}
                className="text-sm font-semibold text-[#D93030] dark:text-[#E04444] font-mono underline decoration-dotted underline-offset-2 hover:text-[#b92828] transition-colors text-left"
              >
                {draft.unidade || 'Selecionar...'}
              </button>
            ) : (
              // Proposta existente ou modo visualização: estático
              <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] font-mono">
                {draft.unidade || '—'}
              </span>
            )}
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Piso */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Piso</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {draft.unidade ? derivePiso(draft.unidade) : '—'}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Área */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Área (m²)</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {draft.area ? `${draft.area} m²` : '—'}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Corredor */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Corredor</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
              {draft.unidade ? deriveCorreidor(draft.unidade) : '—'}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#2E3447]" />

          {/* Status da Proposta — col-span-2 em mobile */}
          <div className="flex flex-col gap-0.5 col-span-2 sm:col-span-1">
            <span className="text-[10px] font-medium text-gray-400 dark:text-[#64748B] uppercase tracking-wide">Status da Proposta</span>
            <select
              value={draft.status}
              disabled={!editMode || readOnly}
              onChange={e => {
                const novoStatus = e.target.value as StatusProposta;
                // Não chamar updateProposalStatus aqui — aplicar só no Gravar
                // para garantir que o snapshot do histórico capture o estado ANTERIOR
                setDraft(prev => ({ ...prev, status: novoStatus }));
              }}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border focus:outline-none transition-colors w-auto
                ${!editMode || readOnly ? 'cursor-default' : 'cursor-pointer'}
                ${STATUS_COLORS_SELECT[draft.status]?.bg ?? 'bg-gray-100 dark:bg-gray-700'}
                ${STATUS_COLORS_SELECT[draft.status]?.text ?? 'text-gray-600 dark:text-gray-400'}
                ${STATUS_COLORS_SELECT[draft.status]?.border ?? 'border-gray-300 dark:border-gray-600'}
                [&>option]:bg-white [&>option]:dark:bg-[#1E2435] [&>option]:text-gray-900 [&>option]:dark:text-[#F1F5F9]`}
            >
              {(STATUS_PROPOSTA.filter(s => s !== STATUS_VENCIDA) as StatusProposta[])
                // Incluir Vencida na lista SOMENTE se o status atual já for Vencida
                .concat(draft.status === STATUS_VENCIDA ? [STATUS_VENCIDA] : [])
                .map(s => (
                  <option key={s} value={s} disabled={s === STATUS_VENCIDA}>
                    {s === STATUS_VENCIDA ? `${STATUS_VENCIDA} (automático)` : s}
                  </option>
                ))
              }
            </select>
          </div>

        </div>

        {/* Abas principais */}
        <div className="flex-shrink-0 bg-gray-50 dark:bg-[#1A1F2E] border-b border-gray-200 dark:border-[#2E3447]">

          {/* Mobile: select dropdown */}
          <div className="block sm:hidden px-4 py-2">
            <select
              value={activeTab}
              onChange={e => {
                const aba = ABAS_PRINCIPAIS.find(a => a.id === e.target.value);
                if (aba && !aba.disabled) setActiveTab(e.target.value);
              }}
              className="w-full h-9 px-3 text-sm font-medium bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-gray-800 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]"
            >
              {ABAS_PRINCIPAIS.map(aba => (
                <option
                  key={aba.id}
                  value={aba.id}
                  disabled={aba.disabled}
                >
                  {aba.label}{aba.disabled ? ' (indisponível)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: botões em linha */}
          <div className="hidden sm:flex px-4 gap-1 overflow-x-auto">
            {ABAS_PRINCIPAIS.map(aba => (
              <button
                key={aba.id}
                onClick={() => !aba.disabled && setActiveTab(aba.id)}
                className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors
                  ${aba.disabled
                    ? 'opacity-40 cursor-not-allowed text-gray-400 dark:text-[#64748B] border-transparent'
                    : activeTab === aba.id
                      ? 'text-[#D93030] dark:text-[#E04444] border-[#D93030] dark:border-[#E04444]'
                      : 'text-gray-500 dark:text-[#94A3B8] border-transparent hover:text-gray-800 dark:hover:text-[#F1F5F9]'}`}
              >
                {aba.label}
              </button>
            ))}
          </div>

        </div>

        {/* Conteúdo */}
        {renderTabContent()}
        </div>{/* fim da janela */}
      </div>{/* fim do overlay */}

      {/* Modal de histórico empilhado */}
      {/* Modal de alerta — validação para aprovar proposta */}
      {alertaAprovacao.length > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setAlertaAprovacao([])} />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-md border border-red-200 dark:border-red-900/40 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Não é possível aprovar a proposta</h3>
                <p className="text-xs text-white/70 mt-0.5">Há etapas pendentes que precisam ser concluídas</p>
              </div>
            </div>
            {/* Pendências */}
            <div className="p-6">
              <ul className="space-y-2">
                {alertaAprovacao.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-[#CBD5E1]">
                    <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setAlertaAprovacao([])}
                className="mt-6 w-full bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              >
                Voltar e corrigir
              </button>
            </div>
          </div>
        </div>
      )}

      {modalHistoricoSnapshot && (() => {
        const snapshots = historicoEdicoes.map(e => e.snapshot);
        const idxAtual = snapshots.findIndex(s => s === modalHistoricoSnapshot);
        return (
          <PropostaManutencaoModal
            proposta={modalHistoricoSnapshot}
            allPropostas={snapshots}
            initialIndex={idxAtual >= 0 ? idxAtual : 0}
            onClose={() => setModalHistoricoSnapshot(null)}
            readOnly={true}
            onNavigate={(p) => setModalHistoricoSnapshot(p as Proposta)}
          />
        );
      })()}

      {/* Modal de confirmação ao sair com edição em andamento */}
      {showSairModal && (
        <ConfirmModal
          title="Alterações não salvas"
          subtitle="Deseja salvar antes de sair?"
          message={
            <>
              Você tem alterações em andamento na proposta{' '}
              <span className="font-semibold text-gray-800 dark:text-[#F1F5F9]">{proposta.id}</span>.
              O que deseja fazer?
            </>
          }
          variant="sim-nao-cancelar"
          labelConfirm={<><Save className="w-4 h-4" /> Sim, salvar e sair</>}
          labelCancel="Não, descartar alterações"
          labelDismiss="Cancelar, continuar editando"
          onConfirm={() => {
            const isNovaProposta = proposta.id.startsWith('PROP-NOVO-');
            if (isNovaProposta) {
              const { id: _tempId, ...resto } = draft;
              propostasApi.criar(resto as any).then(() => {});
            } else {
              propostasApi.atualizar(proposta.id, draft as any).then(() => {});
            }
            setEditMode(false);
            setShowSairModal(false);
            onClose();
          }}
          onCancel={() => {
            setDraft(structuredClone(propostaOld));
            setEditMode(false);
            setShowSairModal(false);
            onClose();
          }}
          onDismiss={() => setShowSairModal(false)}
        />
      )}

      {/* Modal de seleção de disponibilidade */}
      {showDisponibilidadePicker && (
        <DisponibilidadePickerModal
          onSelect={handleSelecionarDisponibilidade}
          onClose={() => {
            setShowDisponibilidadePicker(false);
            // Se fechou sem selecionar e a proposta ainda não tem disponibilidade → fechar modal
            if (!draft.unidade) {
              onClose();
            }
          }}
        />
      )}

      {/* Input file hidden para upload de anexos */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
        className="hidden"
        onChange={handleFileSelected}
      />
    </>
  );
}
````

## File: Figma/src/app/components/StatusBadge.tsx
````typescript
import type { StatusProposta, StatusLoja } from '../enums';
import {
  STATUS_AGUARDANDO_FIN, STATUS_AGUARDANDO_COMITE,
  STATUS_APROVADO, STATUS_REPROVADO, STATUS_CANCELADO,
  STATUS_VENCIDA, STATUS_FINALIZADO,
  STATUS_OCUPADO, STATUS_DISPONIVEL,
} from '../enums';

// -------------------------------------------------------------------------
// Mapeamentos centralizados de cor — alterar aqui propaga para todo o app
// -------------------------------------------------------------------------
const STATUS_PROPOSTA_CLASSES: Record<StatusProposta, string> = {
  [STATUS_AGUARDANDO_FIN]:    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  [STATUS_AGUARDANDO_COMITE]: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  [STATUS_APROVADO]:          'bg-green-100  text-green-800  dark:bg-green-900/30  dark:text-green-400',
  [STATUS_REPROVADO]:         'bg-red-100    text-red-800    dark:bg-red-900/30    dark:text-red-400',
  [STATUS_CANCELADO]:         'bg-gray-100   text-gray-600   dark:bg-gray-800/50   dark:text-gray-400',
  [STATUS_VENCIDA]:           'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  [STATUS_FINALIZADO]:        'bg-blue-100   text-blue-800   dark:bg-blue-900/30   dark:text-blue-400',
};

const STATUS_LOJA_CLASSES: Record<StatusLoja, string> = {
  [STATUS_OCUPADO]:    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  [STATUS_DISPONIVEL]: 'bg-green-100  text-green-700  dark:bg-green-900/30  dark:text-green-400',
};

// -------------------------------------------------------------------------
// Componentes
// -------------------------------------------------------------------------
interface StatusPropostaBadgeProps {
  status: StatusProposta;
  className?: string;
}

export function StatusPropostaBadge({ status, className = '' }: StatusPropostaBadgeProps) {
  return (
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${STATUS_PROPOSTA_CLASSES[status] ?? 'bg-gray-100 text-gray-600'} ${className}`}>
      {status}
    </span>
  );
}

interface StatusLojaBadgeProps {
  status: StatusLoja;
  className?: string;
}

export function StatusLojaBadge({ status, className = '' }: StatusLojaBadgeProps) {
  return (
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${STATUS_LOJA_CLASSES[status] ?? 'bg-gray-100 text-gray-600'} ${className}`}>
      {status}
    </span>
  );
}

// Utilitário para quem ainda precisar das classes sem renderizar o badge
export function getStatusPropostaClasses(status: StatusProposta): string {
  return STATUS_PROPOSTA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400';
}

export function getStatusLojaClasses(status: StatusLoja): string {
  return STATUS_LOJA_CLASSES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400';
}
````

## File: Figma/src/app/components/ui/accordion.tsx
````typescript
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "./utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
````

## File: Figma/src/app/components/ui/alert-dialog.tsx
````typescript
"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "./utils";
import { buttonVariants } from "./button";

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
````

## File: Figma/src/app/components/ui/alert.tsx
````typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
````

## File: Figma/src/app/components/ui/aspect-ratio.tsx
````typescript
"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
````

## File: Figma/src/app/components/ui/avatar.tsx
````typescript
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "./utils";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
````

## File: Figma/src/app/components/ui/badge.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
````

## File: Figma/src/app/components/ui/breadcrumb.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "./utils";

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
````

## File: Figma/src/app/components/ui/button.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
````

## File: Figma/src/app/components/ui/calendar.tsx
````typescript
"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
````

## File: Figma/src/app/components/ui/card.tsx
````typescript
import * as React from "react";

import { cn } from "./utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
````

## File: Figma/src/app/components/ui/carousel.tsx
````typescript
"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "./utils";
import { Button } from "./button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
````

## File: Figma/src/app/components/ui/chart.tsx
````typescript
"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "./utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  }) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className,
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div
              key={item.dataKey}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center",
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          },
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center",
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
  }) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3",
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
````

## File: Figma/src/app/components/ui/checkbox.tsx
````typescript
"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "./utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
````

## File: Figma/src/app/components/ui/collapsible.tsx
````typescript
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
````

## File: Figma/src/app/components/ui/command.tsx
````typescript
"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import { cn } from "./utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className,
      )}
      {...props}
    />
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className,
      )}
      {...props}
    />
  );
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className,
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
````

## File: Figma/src/app/components/ui/context-menu.tsx
````typescript
"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "./utils";

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
````

## File: Figma/src/app/components/ui/dialog.tsx
````typescript
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "./utils";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
````

## File: Figma/src/app/components/ui/drawer.tsx
````typescript
"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "./utils";

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
````

## File: Figma/src/app/components/ui/dropdown-menu.tsx
````typescript
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "./utils";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
````

## File: Figma/src/app/components/ui/form.tsx
````typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "./utils";
import { Label } from "./label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
````

## File: Figma/src/app/components/ui/hover-card.tsx
````typescript
"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "./utils";

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
````

## File: Figma/src/app/components/ui/input-otp.tsx
````typescript
"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "./utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
````

## File: Figma/src/app/components/ui/input.tsx
````typescript
import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
````

## File: Figma/src/app/components/ui/label.tsx
````typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "./utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
````

## File: Figma/src/app/components/ui/menubar.tsx
````typescript
"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "./utils";

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className,
      )}
      {...props}
    />
  );
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className,
      )}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className,
        )}
        {...props}
      />
    </MenubarPortal>
  );
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};
````

## File: Figma/src/app/components/ui/navigation-menu.tsx
````typescript
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "./utils";

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1",
);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center",
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
````

## File: Figma/src/app/components/ui/pagination.tsx
````typescript
import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "./utils";
import { Button, buttonVariants } from "./button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
````

## File: Figma/src/app/components/ui/popover.tsx
````typescript
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "./utils";

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
````

## File: Figma/src/app/components/ui/progress.tsx
````typescript
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "./utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
````

## File: Figma/src/app/components/ui/radio-group.tsx
````typescript
"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "./utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
````

## File: Figma/src/app/components/ui/resizable.tsx
````typescript
"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "./utils";

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
````

## File: Figma/src/app/components/ui/scroll-area.tsx
````typescript
"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "./utils";

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
````

## File: Figma/src/app/components/ui/select.tsx
````typescript
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";

import { cn } from "./utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
````

## File: Figma/src/app/components/ui/separator.tsx
````typescript
"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "./utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
````

## File: Figma/src/app/components/ui/sheet.tsx
````typescript
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "./utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
````

## File: Figma/src/app/components/ui/sidebar.tsx
````typescript
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

import { useIsMobile } from "./use-mobile";
import { cn } from "./utils";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import { Skeleton } from "./skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className,
      )}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className,
      )}
      {...props}
    />
  );
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
````

## File: Figma/src/app/components/ui/skeleton.tsx
````typescript
import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
````

## File: Figma/src/app/components/ui/slider.tsx
````typescript
"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "./utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
````

## File: Figma/src/app/components/ui/sonner.tsx
````typescript
"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
````

## File: Figma/src/app/components/ui/switch.tsx
````typescript
"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
````

## File: Figma/src/app/components/ui/table.tsx
````typescript
"use client";

import * as React from "react";

import { cn } from "./utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
````

## File: Figma/src/app/components/ui/tabs.tsx
````typescript
"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "./utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
````

## File: Figma/src/app/components/ui/textarea.tsx
````typescript
import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
````

## File: Figma/src/app/components/ui/toggle-group.tsx
````typescript
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "./utils";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
````

## File: Figma/src/app/components/ui/toggle.tsx
````typescript
"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
````

## File: Figma/src/app/components/ui/tooltip.tsx
````typescript
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "./utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
````

## File: Figma/src/app/components/ui/use-mobile.ts
````typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
````

## File: Figma/src/app/components/ui/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: Figma/src/app/data/apiClient.ts
````typescript
// ============================================================
// apiClient.ts — Cliente HTTP centralizado para a API BES-2026
// ============================================================
//
// Camada de acesso à API REST. Toda requisição HTTP da aplicação
// passa por aqui — nunca use fetch() diretamente nas páginas.
//
// Estrutura interna:
//  - API_BASE: lido de VITE_API_URL (.env). Em dev, o Vite proxy
//    redireciona /api/* para http://localhost:8080, evitando CORS.
//  - request<T>(): função genérica que faz fetch, trata erros HTTP
//    e retorna o JSON tipado. MODO PROTÓTIPO: sem header Authorization.
//  - checkHealth(): verifica se a API está disponível via GET /api/v1/ping
//
// Grupos de endpoints exportados:
//  auth       — login, logout, me
//  unidades   — listar (com filtros), detalhe
//  propostas  — listar, detalhe, criar, atualizar, atualizarStatus,
//               checkVencidas, lojaAnterior, necessidadesTecnicas,
//               cessaoDireitos, taxaTransferencia, parecerComite, historico
//  documentos — listar, upload (multipart), remover
//
// Tipos exportados usados pelas views:
//  PropostaResumo  — dados resumidos de uma proposta (lista)
//  PropostaDetalhe — todos os campos de uma proposta (modal de edição)
//  Unidade         — unidade física do mall
//  Documento       — arquivo vinculado a uma proposta
// ============================================================

const API_BASE = import.meta.env.VITE_API_URL || '/api/v1';

// ── Tipos ────────────────────────────────────────────────────

export interface ApiError {
  message: string;
  status: number;
}

// ── Helper central ───────────────────────────────────────────

// MODO PROTÓTIPO — sem autenticação via token
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: 'Erro desconhecido' }));
    throw { message: body.message || res.statusText, status: res.status } as ApiError;
  }

  if (res.status === 204) return undefined as unknown as T;

  return res.json();
}

// ── Health ───────────────────────────────────────────────────

export async function checkHealth(): Promise<boolean> {
  try {
    const res = await fetch('/api/v1/ping',
      { signal: AbortSignal.timeout(4000) }
    );
    return res.ok;
  } catch {
    return false;
  }
}

// ── Auth ─────────────────────────────────────────────────────

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  usuario: {
    id: string;
    nome: string;
    email: string;
    setor: string;
  };
}

export const auth = {
  login: (payload: LoginPayload) =>
    request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  logout: () =>
    request<void>('/auth/logout', { method: 'POST' }),

  me: () =>
    request<LoginResponse['usuario']>('/auth/me'),
};

// ── Unidades ─────────────────────────────────────────────────

export interface Unidade {
  id: string;
  codigo: string;
  piso: 'P' | 'S' | 'T';
  corredor: string;
  area: number;
  status: 'Disponível' | 'Ocupado';
  criadoEm: string;
}

export interface UnidadesFiltros {
  piso?: string;
  corredor?: string;
  status?: string;
}

export const unidades = {
  listar: (filtros?: UnidadesFiltros) => {
    const params = new URLSearchParams();
    if (filtros?.piso) params.set('piso', filtros.piso);
    if (filtros?.corredor) params.set('corredor', filtros.corredor);
    if (filtros?.status) params.set('status', filtros.status);
    const qs = params.toString();
    return request<Unidade[]>(`/unidades${qs ? '?' + qs : ''}`);
  },
  detalhe: (id: string) => request<Unidade>(`/unidades/${id}`),
};

// ── Propostas ────────────────────────────────────────────────

export interface PropostaFiltros {
  idUnidade?: string;
  status?: string;
  segmento?: string;
  piso?: string;
  dataFrom?: string;
  dateTo?: string;
}

export interface PropostaResumo {
  id: string;
  idUnidade: string;
  codigoUnidade: string;
  /** @alias codigoUnidade — compatibilidade com páginas legadas */
  unidade: string;
  piso: string;
  corredor: string;
  segmento: string;
  tipoOperacao: string;
  /** @alias tipoOperacao — compatibilidade com páginas legadas */
  tipo: string;
  valorProposto: number;
  area: number;
  abl?: number;
  status: string;
  responsavel?: string;
  nomeFantasia?: string;
  dataCriacao: string;
  dataVencimento?: string;
  fimContrato?: string;
  atualizadoEm: string;
}

export interface PropostaDetalhe extends PropostaResumo {
  aluguelPercent?: number;
  prazoLocacaoMeses?: number;
  aluguelPorM2?: number;
  condominioAprox?: number;
  fppAprox?: number;
  inicioContrato?: string;
  dataInauguracao?: string;
  observacoes?: string;
}

export const propostas = {
  listar: (filtros?: PropostaFiltros) => {
    const params = new URLSearchParams();
    if (filtros?.idUnidade) params.set('id_unidade', filtros.idUnidade);
    if (filtros?.status) params.set('status', filtros.status);
    if (filtros?.segmento) params.set('segmento', filtros.segmento);
    if (filtros?.piso) params.set('piso', filtros.piso);
    if (filtros?.dataFrom) params.set('data_from', filtros.dataFrom);
    if (filtros?.dateTo) params.set('data_to', filtros.dateTo);
    const qs = params.toString();
    return request<PropostaResumo[]>(`/propostas${qs ? '?' + qs : ''}`);
  },

  detalhe: (id: string) => request<PropostaDetalhe>(`/propostas/${id}`),

  criar: (payload: Partial<PropostaDetalhe>) =>
    request<PropostaDetalhe>('/propostas', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  atualizar: (id: string, payload: Partial<PropostaDetalhe>) =>
    request<PropostaDetalhe>(`/propostas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),

  atualizarStatus: (id: string, status: string, observacoes?: string) =>
    request<void>(`/propostas/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, observacoes }),
    }),

  checkVencidas: () =>
    request<void>('/propostas/check-vencidas', { method: 'POST' }),

  lojaAnterior: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/loja-anterior`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/loja-anterior`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  necessidadesTecnicas: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/necessidades-tecnicas`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/necessidades-tecnicas`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  cessaoDireitos: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/cessao-direitos`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/cessao-direitos`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  taxaTransferencia: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/taxa-transferencia`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/taxa-transferencia`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  parecerComite: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/parecer-comite`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/parecer-comite`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  historico: {
    listar: (id: string) => request<any[]>(`/propostas/${id}/historico`),
  },
};

// ── Documentos ───────────────────────────────────────────────

export interface Documento {
  id: string;
  idProposta: string;
  idUsuario: string;
  codigo: string;
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  urlStorage?: string;
  dataUpload: string;
}

export const documentos = {
  listar: (idProposta: string) =>
    request<Documento[]>(`/documentos?id_proposta=${idProposta}`),

  upload: (idProposta: string, file: File, codigo: string) => {
    const form = new FormData();
    form.append('file', file);
    form.append('id_proposta', idProposta);
    form.append('codigo', codigo);
    return fetch(`${API_BASE}/documentos`, {
      method: 'POST',
      body: form,
    }).then(async r => r.json() as Promise<Documento>);
  },

  remover: (id: string) =>
    request<void>(`/documentos/${id}`, { method: 'DELETE' }),
};
````

## File: Figma/src/app/data/useApi.ts
````typescript
// ============================================================
// useApi.ts — Hook genérico para chamadas à API
// ============================================================
//
// Abstrai o ciclo de vida de uma requisição assíncrona:
// loading → sucesso (data) | erro (error), com suporte a refetch.
//
// Uso:
//   const { data, loading, error, refetch } = useApi(
//     () => PropostasService.listar(),
//     []  // deps — quando mudar, re-executa o fetch
//   );
//
// Race condition: usa um contador (counterRef) para descartar
// respostas de requisições anteriores quando uma nova é disparada.
// Isso evita que dados desatualizados sobrescrevam os mais recentes.
//
// MODO PROTÓTIPO: sem checagem de token antes de fazer fetch.
// Para produção, verificar isAuthenticated antes de disparar.
// ============================================================
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useApi<T>(
  fetcher: () => Promise<T>,
  deps: any[] = []
): UseApiState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const counterRef = useRef(0);

  const fetch = useCallback(async () => {
    const id = ++counterRef.current;
    setLoading(true);
    setError(null);
    try {
      const result = await fetcher();
      if (id === counterRef.current) setData(result);
    } catch (err: any) {
      if (id === counterRef.current) {
        setError(err.message || 'Erro ao carregar dados');
      }
    } finally {
      if (id === counterRef.current) setLoading(false);
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { fetch(); }, [fetch]);

  return { data, loading, error, refetch: fetch };
}
````

## File: Figma/src/app/data/useApiHealth.ts
````typescript
// ============================================================
// useApiHealth.ts — Status de saúde da API
// ============================================================
//
// MODO PROTÓTIPO: sempre retorna 'online', sem fazer requisição real.
//
// Para produção, substituir por uma implementação que:
//  1. Chama checkHealth() do apiClient em intervalos (ex: a cada 30s)
//  2. Retorna 'checking' durante a primeira verificação
//  3. Retorna 'online' se a API responder com 200
//  4. Retorna 'offline' se der timeout ou erro de rede
//
// O Login.tsx usa este hook para habilitar/desabilitar o botão
// de login e exibir alertas de indisponibilidade.
// ============================================================
export type ApiStatus = 'checking' | 'online' | 'offline';

export function useApiHealth(): ApiStatus {
  return 'online';
}
````

## File: Figma/src/app/entities/index.ts
````typescript
// ============================================================
// entities/index.ts — Re-exporta todas as interfaces de entidade
// ============================================================
//
// Ponto de entrada único para importar tipos de entidades do banco.
// Gerado automaticamente pelo codegen (codegen/generate.go).
//
// Uso:
//   import type { Proposta, Unidade } from '../entities';
//
// NUNCA edite este arquivo manualmente. Para atualizar após uma
// migration SQL, execute na raiz do projeto:
//   .\ajustar entidades via migration.ps1
// ============================================================
// Code generated by codegen/generate.go — DO NOT EDIT.
// Importa todas as entidades em um único ponto.

export * from './proposta';
export * from './proposta_cessao_direitos';
export * from './proposta_cessao_direitos_historico';
export * from './proposta_documento';
export * from './proposta_documento_historico';
export * from './proposta_historico';
export * from './proposta_loja_anterior';
export * from './proposta_loja_anterior_historico';
export * from './proposta_necessidades_tecnicas';
export * from './proposta_necessidades_tecnicas_historico';
export * from './proposta_parecer_comite';
export * from './proposta_parecer_comite_historico';
export * from './proposta_taxa_transferencia';
export * from './proposta_taxa_transferencia_historico';
export * from './unidade';
export * from './usuario';
````

## File: Figma/src/app/entities/proposta_cessao_direitos_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaCessaoDireitosHistorico" do banco de dados. */
export interface PropostaCessaoDireitosHistorico {
  idHistorico: string;
  resSperataProposta?: number | null;
  referenciaMercadoPorM2?: number | null;
  sinalResSperata?: number | null;
  formaPagamentoSaldo?: string | null;
  numParcelas?: number | null;
  statusResSperata?: string | null;
  observacoes?: string | null;
}
````

## File: Figma/src/app/entities/proposta_cessao_direitos.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaCessaoDireitos" do banco de dados. */
export interface PropostaCessaoDireitos {
  idProposta: string;
  resSperataProposta?: number | null;
  referenciaMercadoPorM2?: number | null;
  sinalResSperata?: number | null;
  formaPagamentoSaldo?: string | null;
  numParcelas?: number | null;
  statusResSperata?: string | null;
  observacoes?: string | null;
}
````

## File: Figma/src/app/entities/proposta_documento_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaDocumentoHistorico" do banco de dados. */
export interface PropostaDocumentoHistorico {
  id: string;
  idHistorico: string;
  idUsuario: string;
  codigo: string;
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  urlStorage?: string | null;
  dataUpload: string;
}
````

## File: Figma/src/app/entities/proposta_documento.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaDocumento" do banco de dados. */
export interface PropostaDocumento {
  id: string;
  idProposta: string;
  idUsuario: string;
  codigo: string;
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  urlStorage?: string | null;
  dataUpload: string;
}
````

## File: Figma/src/app/entities/proposta_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaHistorico" do banco de dados. */
export interface PropostaHistorico {
  id: string;
  idProposta: string;
  idUsuario: string;
  editadoEm: string;
}
````

## File: Figma/src/app/entities/proposta_loja_anterior_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaLojaAnteriorHistorico" do banco de dados. */
export interface PropostaLojaAnteriorHistorico {
  idHistorico: string;
  nomeFantasia?: string | null;
  segmento?: string | null;
  tipoOperacao?: string | null;
  cto?: number | null;
  abl?: number | null;
  amm?: number | null;
  dividaAmm?: number | null;
  dividaNegociada?: number | null;
  dividaCondominio?: number | null;
  dividaFpp?: number | null;
  formaPagamento?: string | null;
}
````

## File: Figma/src/app/entities/proposta_loja_anterior.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaLojaAnterior" do banco de dados. */
export interface PropostaLojaAnterior {
  idProposta: string;
  nomeFantasia?: string | null;
  segmento?: string | null;
  tipoOperacao?: string | null;
  cto?: number | null;
  abl?: number | null;
  amm?: number | null;
  dividaAmm?: number | null;
  dividaNegociada?: number | null;
  dividaCondominio?: number | null;
  dividaFpp?: number | null;
  formaPagamento?: string | null;
}
````

## File: Figma/src/app/entities/proposta_necessidades_tecnicas_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaNecessidadesTecnicasHistorico" do banco de dados. */
export interface PropostaNecessidadesTecnicasHistorico {
  idHistorico: string;
  demandaEletricaKva?: number | null;
  tensaoNecessaria?: string | null;
  circuitosEspeciais?: boolean;
  obsEletrica?: string | null;
  pontoAgua?: boolean;
  quantidadePontosAgua?: number | null;
  pontoEsgoto?: boolean;
  vazaoNecessariaLmin?: number | null;
  caixaGordura?: boolean;
  obsHidraulica?: string | null;
  necessitaGas?: boolean;
  tipoGas?: string | null;
  consumoGasM3h?: number | null;
  obsGas?: string | null;
  necessitaExaustao?: boolean;
  vazaoExaustaoM3h?: number | null;
  necessitaMakeUpAr?: boolean;
  obsVentilacao?: string | null;
  areaMinimaM2?: number | null;
  areaMaximaM2?: number | null;
  peDireitoMinimoM?: number | null;
  cargaPisoKgm2?: number | null;
  necessitaMezanino?: boolean;
  obsEstrutura?: string | null;
  frenteMinimaM?: number | null;
  tipoFachada?: string | null;
  comunicacaoVisualLed?: boolean;
  obsFachada?: string | null;
  pontosDados?: number | null;
  necessitaFibra?: boolean;
  obsTelecom?: string | null;
  status?: string | null;
  idUsuarioResponsavel?: string | null;
  criadoEm?: string | null;
  atualizadoEm?: string | null;
}
````

## File: Figma/src/app/entities/proposta_necessidades_tecnicas.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaNecessidadesTecnicas" do banco de dados. */
export interface PropostaNecessidadesTecnicas {
  idProposta: string;
  demandaEletricaKva?: number | null;
  tensaoNecessaria?: string | null;
  circuitosEspeciais?: boolean;
  obsEletrica?: string | null;
  pontoAgua?: boolean;
  quantidadePontosAgua?: number | null;
  pontoEsgoto?: boolean;
  vazaoNecessariaLmin?: number | null;
  caixaGordura?: boolean;
  obsHidraulica?: string | null;
  necessitaGas?: boolean;
  tipoGas?: string | null;
  consumoGasM3h?: number | null;
  obsGas?: string | null;
  necessitaExaustao?: boolean;
  vazaoExaustaoM3h?: number | null;
  necessitaMakeUpAr?: boolean;
  obsVentilacao?: string | null;
  areaMinimaM2?: number | null;
  areaMaximaM2?: number | null;
  peDireitoMinimoM?: number | null;
  cargaPisoKgm2?: number | null;
  necessitaMezanino?: boolean;
  obsEstrutura?: string | null;
  frenteMinimaM?: number | null;
  tipoFachada?: string | null;
  comunicacaoVisualLed?: boolean;
  obsFachada?: string | null;
  pontosDados?: number | null;
  necessitaFibra?: boolean;
  obsTelecom?: string | null;
  status?: string | null;
  idUsuarioResponsavel?: string | null;
  criadoEm: string;
  atualizadoEm?: string | null;
}
````

## File: Figma/src/app/entities/proposta_parecer_comite_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaParecerComiteHistorico" do banco de dados. */
export interface PropostaParecerComiteHistorico {
  idHistorico: string;
  presidente?: boolean;
  presidenteData?: string | null;
  diretoriaComp1?: boolean;
  diretoriaComp1Data?: string | null;
  diretoriaComp2?: boolean;
  diretoriaComp2Data?: string | null;
  superintendente?: boolean;
  superintendenteData?: string | null;
  inNetworking?: boolean;
  inNetworkingData?: string | null;
}
````

## File: Figma/src/app/entities/proposta_parecer_comite.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaParecerComite" do banco de dados. */
export interface PropostaParecerComite {
  idProposta: string;
  presidente?: boolean;
  presidenteData?: string | null;
  diretoriaComp1?: boolean;
  diretoriaComp1Data?: string | null;
  diretoriaComp2?: boolean;
  diretoriaComp2Data?: string | null;
  superintendente?: boolean;
  superintendenteData?: string | null;
  inNetworking?: boolean;
  inNetworkingData?: string | null;
}
````

## File: Figma/src/app/entities/proposta_taxa_transferencia_historico.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaTaxaTransferenciaHistorico" do banco de dados. */
export interface PropostaTaxaTransferenciaHistorico {
  idHistorico: string;
  ttContratual?: number | null;
  ttProposta?: number | null;
  ttPropostaNumAmm?: number | null;
  sinalTt?: number | null;
  formaPagamentoTt?: string | null;
  justificativaTt?: string | null;
  statusTt?: string | null;
}
````

## File: Figma/src/app/entities/proposta_taxa_transferencia.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "PropostaTaxaTransferencia" do banco de dados. */
export interface PropostaTaxaTransferencia {
  idProposta: string;
  ttContratual?: number | null;
  ttProposta?: number | null;
  ttPropostaNumAmm?: number | null;
  sinalTt?: number | null;
  formaPagamentoTt?: string | null;
  justificativaTt?: string | null;
  statusTt?: string | null;
}
````

## File: Figma/src/app/entities/proposta.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "Proposta" do banco de dados. */
export interface Proposta {
  id: string;
  idUnidade: string;
  idUsuarioCriacao: string;
  idUsuarioUltimaAlt?: string | null;
  idUsuarioResponsavel?: string | null;
  segmento: string;
  tipoOperacao: string;
  valorProposto: number;
  area: number;
  abl?: number | null;
  status: string;
  dataCriacao: string;
  dataVencimento?: string | null;
  nomeFantasia?: string | null;
  aluguelPercent?: number | null;
  prazoLocacaoMeses?: number | null;
  aluguelPorM2?: number | null;
  condominioAprox?: number | null;
  fppAprox?: number | null;
  inicioContrato?: string | null;
  fimContrato?: string | null;
  dataInauguracao?: string | null;
  observacoes?: string | null;
  atualizadoEm: string;
}
````

## File: Figma/src/app/entities/unidade.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "Unidade" do banco de dados. */
export interface Unidade {
  id: string;
  codigo: string;
  piso: string;
  corredor: string;
  area: number;
  criadoEm: string;
}
````

## File: Figma/src/app/entities/usuario.ts
````typescript
// Code generated by codegen/generate.go — DO NOT EDIT.
// Atualize rodando: go run ./codegen/generate.go

/** Representa a tabela "Usuario" do banco de dados. */
export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  setor?: string | null;
  criadoEm: string;
}
````

## File: Figma/src/app/enums/index.ts
````typescript
// Fonte única de verdade para todos os enumeradores de domínio do projeto.
// Adicionar novos valores aqui propaga automaticamente para filtros e selects.

// ---------------------------------------------------------------------------
// Segmento
// ---------------------------------------------------------------------------
export const SEGMENTOS = [
  'Moda', 'Alimentação', 'Serviços', 'Eletrônicos', 'Esportes', 'Entretenimento', 'Outros',
] as const;
export type Segmento = typeof SEGMENTOS[number];

// ---------------------------------------------------------------------------
// Piso — value usado internamente, label para formulários, labelShort para filtros
// ---------------------------------------------------------------------------
export const PISOS = [
  { value: 'P' as const, label: 'Primeiro Piso', labelShort: 'Primeiro' },
  { value: 'S' as const, label: 'Segundo Piso',  labelShort: 'Segundo'  },
  { value: 'T' as const, label: 'Terceiro Piso', labelShort: 'Terceiro' },
] as const;
export type Piso = typeof PISOS[number]['value'];

// Mapas auxiliares derivados do enum — não duplicar manualmente
export const PISO_LABEL:       Record<Piso, string> = Object.fromEntries(PISOS.map(p => [p.value, p.label]))       as Record<Piso, string>;
export const PISO_LABEL_SHORT: Record<Piso, string> = Object.fromEntries(PISOS.map(p => [p.value, p.labelShort])) as Record<Piso, string>;

// ---------------------------------------------------------------------------
// Corredor
// ---------------------------------------------------------------------------
export const CORREDORES = [
  { value: 'A' as const, label: 'Corredor A' },
  { value: 'B' as const, label: 'Corredor B' },
  { value: 'C' as const, label: 'Corredor C' },
] as const;
export type Corredor = typeof CORREDORES[number]['value'];

export const CORREDOR_LABEL: Record<Corredor, string> = Object.fromEntries(CORREDORES.map(c => [c.value, c.label])) as Record<Corredor, string>;

// ---------------------------------------------------------------------------
// Status da Proposta
// ---------------------------------------------------------------------------
export const STATUS_PROPOSTA = [
  'Aguardando análise financeira',
  'Aguardando análise do comitê',
  'Aprovado',
  'Reprovado',
  'Cancelado',
  'Vencida',
  'Finalizado',
] as const;
export type StatusProposta = typeof STATUS_PROPOSTA[number];

export const STATUS_AGUARDANDO_FIN    = STATUS_PROPOSTA[0];
export const STATUS_AGUARDANDO_COMITE = STATUS_PROPOSTA[1];
export const STATUS_APROVADO          = STATUS_PROPOSTA[2];
export const STATUS_REPROVADO         = STATUS_PROPOSTA[3];
export const STATUS_CANCELADO         = STATUS_PROPOSTA[4];
export const STATUS_VENCIDA           = STATUS_PROPOSTA[5];
export const STATUS_FINALIZADO        = STATUS_PROPOSTA[6];

// ---------------------------------------------------------------------------
// Status da Loja (Unidade)
// ---------------------------------------------------------------------------
export const STATUS_LOJA = ['Ocupado', 'Disponível'] as const;
export type StatusLoja = typeof STATUS_LOJA[number];

export const STATUS_OCUPADO    = STATUS_LOJA[0];
export const STATUS_DISPONIVEL = STATUS_LOJA[1];

// ---------------------------------------------------------------------------
// Tipo de Proposta — campo legado `tipo` na interface Proposta
// ---------------------------------------------------------------------------
export const TIPOS_PROPOSTA = [
  'Nova Instalação', 'Renovação', 'Readequação', 'Transferência', 'Cessão',
] as const;
export type TipoProposta = typeof TIPOS_PROPOSTA[number];

export const TIPO_NOVA_INSTALACAO = TIPOS_PROPOSTA[0];

// ---------------------------------------------------------------------------
// Tipo de Operação — campo `tipoOperacao`, mais granular
// ---------------------------------------------------------------------------
export const TIPOS_OPERACAO = [
  'Transferência', 'Cessão', 'Nova Locação', 'Renovação', 'Readequação',
] as const;
export type TipoOperacao = typeof TIPOS_OPERACAO[number];

export const TIPO_TRANSFERENCIA = TIPOS_OPERACAO[0];
export const TIPO_CESSAO        = TIPOS_OPERACAO[1];
export const TIPO_NOVA_LOCACAO  = TIPOS_OPERACAO[2];
export const TIPO_RENOVACAO     = TIPOS_OPERACAO[3];
export const TIPO_READEQUACAO   = TIPOS_OPERACAO[4];

// ---------------------------------------------------------------------------
// Formas de Pagamento
// ---------------------------------------------------------------------------
export const FORMAS_PAGAMENTO = ['À vista', 'Parcelado', 'Compensação com TT'] as const;
export type FormaPagamento = typeof FORMAS_PAGAMENTO[number];

export const FORMAS_PAGAMENTO_SALDO = [
  'À vista', 'Parcelado', 'Permuta', 'Retenção de aluguel',
] as const;
export type FormaPagamentoSaldo = typeof FORMAS_PAGAMENTO_SALDO[number];

export const FORMAS_PAGAMENTO_TT = [
  'À vista', 'Parcelado', 'Retenção de comissão', 'Compensação',
] as const;
export type FormaPagamentoTT = typeof FORMAS_PAGAMENTO_TT[number];

// ---------------------------------------------------------------------------
// Necessidades Técnicas
// ---------------------------------------------------------------------------
export const TENSOES_NECESSARIAS = ['110V', '220V', '380V', 'Bifásico', 'Trifásico'] as const;
export type TensaoNecessaria = typeof TENSOES_NECESSARIAS[number];

export const TIPOS_GAS = ['GLP', 'GN', 'Não se aplica'] as const;
export type TipoGas = typeof TIPOS_GAS[number];

export const TIPOS_FACHADA = ['Aberta', 'Fechada', 'Mista'] as const;
export type TipoFachada = typeof TIPOS_FACHADA[number];

// ---------------------------------------------------------------------------
// Status de controle / aprovação
// ---------------------------------------------------------------------------
export const STATUS_LAUDO = ['Rascunho', 'Enviado', 'Compatibilizado', 'Aprovado'] as const;
export type StatusLaudo = typeof STATUS_LAUDO[number];

export const STATUS_RES_SPERATA = [
  'Em análise', 'Aprovada', 'Rejeitada', 'Pendente documentação',
] as const;
export type StatusResSperata = typeof STATUS_RES_SPERATA[number];

export const STATUS_ANALISE = ['Em análise', 'Aprovada', 'Rejeitada'] as const;
export type StatusAnalise = typeof STATUS_ANALISE[number];

// ---------------------------------------------------------------------------
// Utilitário: converte arrays simples ou com label para {value, label}
// Usado internamente pelos componentes de filtro e select.
// ---------------------------------------------------------------------------
export type EnumOption = string | { value: string; label: string };

export function toOptionItems(
  options: readonly EnumOption[],
): { value: string; label: string }[] {
  return options.map(o =>
    typeof o === 'string' ? { value: o, label: o } : o,
  );
}
````

## File: Figma/src/app/PrivateRoute.tsx
````typescript
// Arquivo não utilizado — PrivateRoute incorporado em App.tsx
export {};
````

## File: Figma/src/app/services/index.ts
````typescript
export { UnidadesService }  from './unidades.service';
export { PropostasService } from './propostas.service';
````

## File: Figma/src/app/services/propostas.service.ts
````typescript
// ============================================================
// services/propostas.service.ts — Camada de serviço para Proposta
// ============================================================
//
// Papel na arquitetura MVVM: esta é a camada MODEL.
// Encapsula o acesso ao apiClient, expondo métodos de domínio
// claros para os ViewModels consumirem sem conhecer detalhes HTTP.
//
// Por que esta camada existe (e não chamar apiClient diretamente)?
//  - Isolamento: se a URL ou o formato da API mudar, só este arquivo muda
//  - Testabilidade: ViewModels podem ser testados mockando o Service
//  - Clareza: PropostasService.listar() é mais legível que unidades.listar()
//
// Métodos: listar(filtros?), detalhe(id), criar(payload), atualizarStatus(id, status, obs?)
// ============================================================
import { propostas as propostasApi } from '../data/apiClient';
import type { PropostaResumo } from '../data/apiClient';

export type { PropostaResumo };

export const PropostasService = {
  listar:          (filtros?: Parameters<typeof propostasApi.listar>[0]) => propostasApi.listar(filtros),
  detalhe:         (id: string)                                          => propostasApi.detalhe(id),
  criar:           (payload: Parameters<typeof propostasApi.criar>[0])   => propostasApi.criar(payload),
  atualizarStatus: (id: string, status: string, obs?: string)            => propostasApi.atualizarStatus(id, status, obs),
};
````

## File: Figma/src/app/services/unidades.service.ts
````typescript
// ============================================================
// services/unidades.service.ts — Camada de serviço para Unidade
// ============================================================
//
// Papel na arquitetura MVVM: esta é a camada MODEL.
// Encapsula o acesso ao apiClient, expondo métodos de domínio
// claros para os ViewModels consumirem sem conhecer detalhes HTTP.
//
// Por que esta camada existe (e não chamar apiClient diretamente)?
//  - Isolamento: se a URL ou o formato da API mudar, só este arquivo muda
//  - Testabilidade: ViewModels podem ser testados mockando o Service
//  - Clareza: UnidadesService.listar() é mais legível que unidades.listar()
//
// Métodos: listar(filtros?), detalhe(id)
// ============================================================
import { unidades as unidadesApi } from '../data/apiClient';
import type { Unidade } from '../data/apiClient';

export type { Unidade };

export const UnidadesService = {
  listar: () => unidadesApi.listar(),
  detalhe: (id: string) => unidadesApi.detalhe(id),
};
````

## File: Figma/src/app/shared/hooks/index.ts
````typescript
export { usePersistedState } from './usePersistedState';
````

## File: Figma/src/app/shared/hooks/usePersistedState.ts
````typescript
// ============================================================
// shared/hooks/usePersistedState.ts
// ============================================================
//
// Hook que funciona como useState normal, mas persiste o valor
// automaticamente no sessionStorage a cada mudança.
//
// Usado pelos ViewModels para manter filtros, ordenação e modo
// de exibição entre navegações — quando o usuário volta à tela,
// o estado anterior é restaurado sem precisar de backend.
//
// Parâmetros:
//   key          — chave no sessionStorage (ex: 'dashboard.filterPisos')
//   defaultValue — valor inicial se não houver nada salvo
//   serialize    — converte T → string para salvar (padrão: JSON.stringify)
//   deserialize  — converte string → T ao carregar (padrão: JSON.parse)
//
// Strings usam serialize/deserialize identidade (v => v) para evitar
// double-encoding: usePersistedState<string>('key', '', v => v, v => v)
//
// Proteção contra primeira renderização: o useEffect usa isMounted
// para não sobrescrever o valor carregado na inicialização.
// ============================================================
import { useState, useEffect, useRef } from 'react';

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
  serialize: (v: T) => string = JSON.stringify,
  deserialize: (s: string) => T = JSON.parse,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const stored = sessionStorage.getItem(key);
    if (stored !== null) {
      try { return deserialize(stored); } catch {}
    }
    return defaultValue;
  });

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) { isMounted.current = true; return; }
    sessionStorage.setItem(key, serialize(value));
  }, [key, value, serialize]);

  return [value, setValue];
}
````

## File: Figma/src/app/shared/utils/filters.ts
````typescript
// ============================================================
// shared/utils/filters.ts — Utilitários de filtragem reutilizáveis
// ============================================================
//
// Funções puras de filtragem usadas pelos ViewModels.
// Por serem funções puras (sem estado), são fáceis de testar
// e reutilizáveis em qualquer parte do sistema.
// ============================================================

// ============================================================
// shared/utils/filters.ts — Utilitários de filtragem reutilizáveis
// ============================================================

/**
 * matchColFilter — Filtragem de texto com suporte a wildcards.
 *
 * Sintaxe dos padrões:
 *   "texto"   → qualquer célula que CONTENHA "texto"
 *   "texto*"  → qualquer célula que COMECE com "texto"
 *   "*texto"  → qualquer célula que TERMINE com "texto"
 *   "*texto*" → qualquer célula que contenha "texto" estritamente no MEIO
 *               (não no início nem no fim)
 *   ""        → sem filtro, todas as linhas passam
 *
 * Usado nas tabelas de Propostas, Disponibilidade e Relatórios
 * para os filtros de coluna linha a linha.
 */
export function matchColFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = (cellValue || '').toLowerCase();
  const p = pattern.toLowerCase();
  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) return val.endsWith(p.slice(1));
  if (p.endsWith('*') && p.length > 1) return val.startsWith(p.slice(0, -1));
  return val.includes(p);
}

/** Converte data pt-BR (dd/mm/yyyy) para ISO (yyyy-mm-dd) para comparação */
export function ptBRToISO(date: string): string {
  const parts = date.split('/');
  if (parts.length === 3) return `${parts[2]}-${parts[1]}-${parts[0]}`;
  return date;
}
````

## File: Figma/src/app/shared/utils/index.ts
````typescript
export { matchColFilter, ptBRToISO } from './filters';
````

## File: Figma/src/app/viewmodels/index.ts
````typescript
export { useComercialDashboard }   from './useComercialDashboard';
export { useComercialProposals }   from './useComercialProposals';
export { useComercialAvailability } from './useComercialAvailability';
export { useComercialReports, DEFAULT_FIELDS } from './useComercialReports';
export type { ReportField }        from './useComercialReports';
````

## File: Figma/src/app/viewmodels/useComercialAvailability.ts
````typescript
// ============================================================
// viewmodels/useComercialAvailability.ts — ViewModel de Disponibilidade
// ============================================================
//
// Papel na arquitetura MVVM: camada VIEWMODEL para a tela de
// Disponibilidade (mapa de unidades do mall).
//
// Responsabilidades:
//  1. DADOS: busca unidades e propostas da API
//  2. ADAPTER: converte Unidade (banco) + Proposta aprovada → UnidadeInfo
//     (formato interno usado pela View). Isso é necessário porque a View
//     precisa de um objeto unificado com nome (nomeFantasia da proposta),
//     segmento e status calculado.
//  3. FILTROS: status, piso, intervalo de fim de contrato, vencendo em <60 dias
//  4. MAPA: organiza unidades filtradas em estrutura
//     { Piso → { Corredor → UnidadeInfo[] } } para o UnitBlock
//  5. TABELA: filtragem e ordenação de colunas para o modo tabela
//  6. RESPONSIVIDADE: força modo 'mapa' em telas < 640px
//
// getDiasRestantes(): calcula dias até fim do contrato, suportando
// formatos dd/mm/yyyy e yyyy-mm-dd. Retorna null se sem contrato.
//
// Listener 'navigate-disponibilidade': permite navegar entre unidades
// dentro do DisponibilidadeManutencaoModal sem fechar e reabrir.
// ============================================================
import { useState, useMemo, useEffect } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { matchColFilter } from '../shared/utils/filters';
import type { UnidadeInfo, Piso } from '../data/comercialData';
import { STATUS_OCUPADO, STATUS_DISPONIVEL, STATUS_APROVADO, STATUS_VENCIDA } from '../enums';
import type { Corredor } from '../enums';


const NS = 'disponibilidade';

function getDiasRestantes(fimContrato?: string | null): number | null {
  if (!fimContrato) return null;
  const date = new Date(fimContrato.includes('/') ? fimContrato.split('/').reverse().join('-') : fimContrato);
  if (isNaN(date.getTime())) return null;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return Math.ceil((date.getTime() - hoje.getTime()) / 86400000);
}

export function useComercialAvailability() {
  // ── Model ────────────────────────────────────────────────
  const { data: todasUnidades, loading: loadingUnidades, refetch: refetchUnidades } =
    useApi(() => UnidadesService.listar(), []);
  const { data: todasPropostasData, refetch: refetchPropostas } =
    useApi(() => PropostasService.listar(), []);
  const todasPropostas = useMemo(() => todasPropostasData || [], [todasPropostasData]);

  // Adapter: transforma Unidade (entidade do banco, sem nome da loja) em UnidadeInfo
  // (objeto de UI com nome, segmento e status calculados via join com Proposta).
  // O nome vem do nomeFantasia da proposta Aprovada vinculada à unidade.
  // Se não houver proposta Aprovada, o nome é 'Disponível' e status é 'Disponível'.
  const allLojistas = useMemo<UnidadeInfo[]>(() => {
    if (!todasUnidades) return [];
    return todasUnidades.map(un => ({
      id: un.id,
      nome: un.status === STATUS_OCUPADO
        ? (todasPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.nomeFantasia || STATUS_OCUPADO)
        : STATUS_DISPONIVEL,
      segmento: (todasPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.segmento || 'Outros') as any,
      responsavel: '',
      email: '',
      unidade: un.codigo,
      piso: un.piso as Piso,
      corredor: un.corredor as Corredor,
      area: un.area,
      status: un.status as any,
    }));
  }, [todasUnidades, todasPropostas]);

  // ── Estado persistido ────────────────────────────────────
  const [filterStatuses, setFilterStatuses] = usePersistedState<string[]>(`${NS}.filterStatuses`, []);
  const [filterPisos,    setFilterPisos]    = usePersistedState<Piso[]>(`${NS}.filterPisos`, []);
  const [dateFrom,       setDateFrom]       = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,         setDateTo]         = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [viewMode,       setViewMode]       = usePersistedState<'mapa' | 'tabela'>(`${NS}.viewMode`, 'mapa', v => v, v => v as 'mapa' | 'tabela');
  const [sortCol,        setSortCol]        = usePersistedState<string>(`${NS}.sortCol`, 'unidade', v => v, v => v);
  const [sortDir,        setSortDir]        = usePersistedState<'asc' | 'desc'>(`${NS}.sortDir`, 'asc', v => v, v => v as 'asc' | 'desc');
  const [colFilters,     setColFilters]     = usePersistedState<Record<string, string>>(`${NS}.colFilters`, {});
  const [filterVencendo, setFilterVencendo] = usePersistedState<boolean>(`${NS}.filterVencendo`, false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // ── Estado de UI ─────────────────────────────────────────
  const [manutencaoLojista, setManutencaoLojista] = useState<UnidadeInfo | null>(null);

  // Forçar mapa em mobile
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth < 640) setViewMode('mapa'); };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navegação entre unidades via evento
  useEffect(() => {
    const handler = (e: any) => setManutencaoLojista(e.detail);
    window.addEventListener('navigate-disponibilidade', handler);
    return () => window.removeEventListener('navigate-disponibilidade', handler);
  }, []);

  // ── Dados derivados ──────────────────────────────────────
  const filtered = useMemo<UnidadeInfo[]>(() => {
    return allLojistas.filter(l => {
      const matchStatus   = filterStatuses.length === 0 || filterStatuses.includes(l.status);
      const matchPiso     = filterPisos.length === 0    || filterPisos.includes(l.piso);
      let matchDate = true;
      if (dateFrom || dateTo) {
        const propFim = todasPropostas.find(pp =>
          pp.codigoUnidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA)
        );
        const fim = propFim?.fimContrato;
        if (fim) {
          const fimISO = fim.includes('/') ? fim.split('/').reverse().join('-') : fim;
          if (dateFrom && fimISO < dateFrom) matchDate = false;
          if (dateTo   && fimISO > dateTo)   matchDate = false;
        } else {
          matchDate = false;
        }
      }
      const propAprov = todasPropostas.find(p =>
        p.codigoUnidade === l.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA)
      );
      const dias = propAprov ? getDiasRestantes(propAprov.fimContrato) : null;
      const matchVencendo = !filterVencendo || (dias !== null && dias < 60);
      return matchStatus && matchPiso && matchDate && matchVencendo;
    });
  }, [allLojistas, filterStatuses, filterPisos, dateFrom, dateTo, filterVencendo, todasPropostas]);

  const counts = useMemo(() => ({
    total:        allLojistas.length,
    disponiveis:  allLojistas.filter(l => l.status === STATUS_DISPONIVEL).length,
    ocupadas:     allLojistas.filter(l => l.status === STATUS_OCUPADO).length,
    vencendoBreve: allLojistas.filter(l => {
      const p = todasPropostas.find(pp =>
        pp.codigoUnidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA)
      );
      return p ? (getDiasRestantes(p.fimContrato) ?? Infinity) < 60 : false;
    }).length,
  }), [allLojistas, todasPropostas]);

  const mapaData = useMemo(() => {
    const result: Record<Piso, Record<Corredor, UnidadeInfo[]>> = {
      P: { A: [], B: [], C: [] },
      S: { A: [], B: [], C: [] },
      T: { A: [], B: [], C: [] },
    };
    filtered.forEach(l => {
      const piso = l.piso as Piso;
      const corredor = l.corredor as Corredor;
      if (result[piso] && result[piso][corredor]) {
        result[piso][corredor].push(l);
      }
    });
    return result;
  }, [filtered]);

  const getPropostaAtual = (lojista: UnidadeInfo) =>
    todasPropostas.find(p =>
      p.codigoUnidade === lojista.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA)
    );

  const tableRows = useMemo<UnidadeInfo[]>(() => {
    const colDefs: { key: string; getValue: (l: UnidadeInfo) => string }[] = [
      { key: 'unidade',       getValue: l => l.unidade },
      { key: 'piso',          getValue: l => l.piso === 'P' ? 'Primeiro Piso' : l.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso' },
      { key: 'corredor',      getValue: l => l.corredor },
      { key: 'area',          getValue: l => String(l.area) },
      { key: 'segmento',      getValue: l => l.segmento },
      { key: 'status',        getValue: l => l.status },
      { key: 'lojista',       getValue: l => l.nome || '—' },
      { key: 'fim',           getValue: l => getPropostaAtual(l)?.fimContrato || '—' },
      { key: 'diasRestantes', getValue: l => { const p = getPropostaAtual(l); const d = p ? getDiasRestantes(p.fimContrato) : null; return d !== null ? String(d) : '—'; } },
    ];
    let rows = [...filtered];
    colDefs.forEach(({ key, getValue }) => {
      const pattern = colFilters[key] || '';
      if (pattern) rows = rows.filter(l => matchColFilter(getValue(l), pattern));
    });
    const colDef = colDefs.find(c => c.key === sortCol);
    if (colDef) {
      rows.sort((a, b) => {
        const av = colDef.getValue(a).toLowerCase();
        const bv = colDef.getValue(b).toLowerCase();
        return sortDir === 'asc' ? av.localeCompare(bv, 'pt-BR') : bv.localeCompare(av, 'pt-BR');
      });
    }
    return rows;
  }, [filtered, colFilters, sortCol, sortDir, todasPropostas]);

  // ── Handlers ─────────────────────────────────────────────
  const refetch = () => { refetchUnidades(); refetchPropostas(); };

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };

  return {
    // dados
    allLojistas, filtered, counts, mapaData, tableRows, todasPropostas,
    loadingUnidades,
    // filtros
    filterStatuses, setFilterStatuses,
    filterPisos, setFilterPisos,
    dateFrom, setDateFrom, dateTo, setDateTo,
    filterVencendo, setFilterVencendo,
    colFilters, setColFilters,
    // ordenação
    sortCol, sortDir, toggleSort,
    // ui
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    // modais
    manutencaoLojista, setManutencaoLojista,
    // utilitários
    getDiasRestantes, getPropostaAtual, refetch,
  };
}
````

## File: Figma/src/app/viewmodels/useComercialDashboard.ts
````typescript
// ============================================================
// viewmodels/useComercialDashboard.ts — ViewModel do Dashboard
// ============================================================
//
// Papel na arquitetura MVVM: esta é a camada VIEWMODEL.
// Concentra toda a lógica de estado e computação do Dashboard,
// deixando o ComercialDashboard.tsx com apenas JSX.
//
// Responsabilidades:
//  1. DADOS: busca unidades e propostas da API via useApi
//  2. FILTROS: piso, segmento e intervalo de datas, todos
//     persistidos no sessionStorage via usePersistedState
//  3. COMPUTED: calcula KPIs, dados dos gráficos e propostas
//     filtradas via useMemo (recalcula só quando deps mudam)
//  4. HANDLERS: toggles de filtro, seção mobile e limpeza
//
// KPIs calculados:
//  total      — total de unidades físicas
//  ocupadas   — unidades com proposta Aprovada
//  livres     — unidades sem proposta Aprovada
//  ocupacao   — percentual de ocupação (0-100)
//  emAnalise  — propostas aguardando análise financeira ou comitê
//  receita    — soma dos valores das propostas Aprovadas
//
// Namespace 'dashboard' no sessionStorage evita colisão com
// outros ViewModels que usam chaves como 'propostas.*'.
// ============================================================
import { useMemo, useRef } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { ptBRToISO } from '../shared/utils/filters';
import type { PropostaResumo } from '../services/propostas.service';
import { STATUS_OCUPADO, STATUS_APROVADO, STATUS_AGUARDANDO_FIN, STATUS_AGUARDANDO_COMITE } from '../enums';

const NS = 'dashboard';

export function useComercialDashboard() {
  // ── Model: dados da API ──────────────────────────────────
  const { data: todasUnidadesData } = useApi(() => UnidadesService.listar(), []);
  const { data: propostasData }     = useApi(() => PropostasService.listar(), []);

  // ── Estado persistido no sessionStorage ─────────────────
  const [filterSegmentos, setFilterSegmentos] = usePersistedState<string[]>(`${NS}.filterSegmentos`, []);
  const [filterPisos,     setFilterPisos]     = usePersistedState<string[]>(`${NS}.filterPisos`, []);
  const [dateFrom,        setDateFrom]        = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,          setDateTo]          = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [showMobileFilters, setShowMobileFilters] = usePersistedState<boolean>(`${NS}.showMobileFilters`, false);
  const [propColFilters,  setPropColFilters]  = usePersistedState<Record<string, string>>(`${NS}.propColFilters`, {});
  const [ctrColFilters,   setCtrColFilters]   = usePersistedState<Record<string, string>>(`${NS}.ctrColFilters`, {});
  const [kpiIndex,        setKpiIndex]        = usePersistedState<number>(`${NS}.kpiIndex`, 0);
  const [chartIndex,      setChartIndex]      = usePersistedState<number>(`${NS}.chartIndex`, 0);
  const [mobileSection,   setMobileSection]   = usePersistedState<string>(`${NS}.mobileSection`, 'indicadores', v => v, v => v);

  // ── Dados derivados (computed) ───────────────────────────
  const allUnidades = useMemo(() => todasUnidadesData || [], [todasUnidadesData]);
  const proposals   = useMemo(() => propostasData || [], [propostasData]);

  const filteredProposals = useMemo<PropostaResumo[]>(() => {
    return proposals.filter(p => {
      const matchSegmento = filterSegmentos.length === 0 || filterSegmentos.includes(p.segmento);
      const matchPiso     = filterPisos.length === 0     || filterPisos.includes(p.piso);
      let matchDate = true;
      if (dateFrom || dateTo) {
        const iso = ptBRToISO(p.dataCriacao);
        if (dateFrom && iso < dateFrom) matchDate = false;
        if (dateTo   && iso > dateTo)   matchDate = false;
      }
      return matchSegmento && matchPiso && matchDate;
    });
  }, [proposals, filterSegmentos, filterPisos, dateFrom, dateTo]);

  const kpis = useMemo(() => {
    const total      = allUnidades.length;
    const ocupadas   = allUnidades.filter(u => u.status === STATUS_OCUPADO).length;
    const livres     = total - ocupadas;
    const ocupacao   = total > 0 ? Math.round((ocupadas / total) * 100) : 0;
    const emAnalise  = proposals.filter(p =>
      p.status === STATUS_AGUARDANDO_FIN || p.status === STATUS_AGUARDANDO_COMITE
    ).length;
    const receita    = proposals
      .filter(p => p.status === STATUS_APROVADO)
      .reduce((acc, p) => acc + p.valorProposto, 0);
    return { total, ocupadas, livres, ocupacao, emAnalise, receita };
  }, [allUnidades, proposals]);

  const chartSegmentos = useMemo(() => {
    const map: Record<string, number> = {};
    proposals.filter(p => p.status === STATUS_APROVADO).forEach(p => {
      map[p.segmento] = (map[p.segmento] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [proposals]);

  const chartStatus = useMemo(() => {
    const map: Record<string, number> = {};
    proposals.forEach(p => { map[p.status] = (map[p.status] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [proposals]);

  // ── Handlers ─────────────────────────────────────────────
  const toggleSection = (section: string) =>
    setMobileSection(prev => prev === section ? '' : section);

  const toggleSegmento = (seg: string) =>
    setFilterSegmentos(prev => prev.includes(seg) ? prev.filter(s => s !== seg) : [...prev, seg]);

  const togglePiso = (piso: string) =>
    setFilterPisos(prev => prev.includes(piso) ? prev.filter(p => p !== piso) : [...prev, piso]);

  const clearFilters = () => {
    setFilterSegmentos([]);
    setFilterPisos([]);
    setDateFrom('');
    setDateTo('');
  };

  return {
    // dados
    allUnidades, proposals, filteredProposals, kpis, chartSegmentos, chartStatus,
    // filtros
    filterSegmentos, setFilterSegmentos, toggleSegmento,
    filterPisos, setFilterPisos, togglePiso,
    dateFrom, setDateFrom, dateTo, setDateTo, clearFilters,
    // ui state
    showMobileFilters, setShowMobileFilters,
    propColFilters, setPropColFilters,
    ctrColFilters, setCtrColFilters,
    kpiIndex, setKpiIndex,
    chartIndex, setChartIndex,
    mobileSection, setMobileSection, toggleSection,
  };
}
````

## File: Figma/src/app/viewmodels/useComercialProposals.ts
````typescript
// ============================================================
// viewmodels/useComercialProposals.ts — ViewModel de Propostas
// ============================================================
//
// Papel na arquitetura MVVM: camada VIEWMODEL para a tela de Propostas.
//
// Responsabilidades:
//  1. DADOS: busca propostas da API; re-busca após criar/atualizar (refresh)
//  2. FILTROS: por status e por intervalo de datas de criação
//  3. TABELA: filtragem por coluna, ordenação, e construção de tableRows
//     (lista filtrada + ordenada pronta para renderizar)
//  4. MODAIS: controla qual proposta está aberta para edição
//  5. NOVA PROPOSTA: monta o objeto inicial vazio para o modal de criação
//
// Pipeline de dados:
//   proposals (API)
//     → filtered (status + data)
//       → tableRows (colFilters + sort)
//
// colDefs define COMO cada coluna extrai seu valor de texto de um
// PropostaResumo. Isso centraliza a lógica de exibição/ordenação
// em um único lugar, evitando duplicação nas células da tabela.
//
// Listener 'navigate-proposta': permite que o DisponibilidadeManutencaoModal
// abra o modal de proposta nesta tela sem acoplamento direto.
// ============================================================
import { useState, useMemo, useEffect } from 'react';
import { useApi } from '../data/useApi';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { matchColFilter, ptBRToISO } from '../shared/utils/filters';
import type { PropostaResumo } from '../services/propostas.service';
import type { StatusProposta } from '../data/comercialData';

const NS = 'propostas';

export function useComercialProposals() {
  // ── Model ────────────────────────────────────────────────
  const { data: propostasData, refetch: refresh } = useApi(() => PropostasService.listar(), []);

  // ── Estado persistido ────────────────────────────────────
  const [filterStatuses, setFilterStatuses] = usePersistedState<StatusProposta[]>(`${NS}.filterStatuses`, []);
  const [dateFrom,       setDateFrom]       = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,         setDateTo]         = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [viewMode,       setViewMode]       = usePersistedState<'card' | 'table'>(`${NS}.viewMode`, 'card', v => v, v => v as 'card' | 'table');
  const [sortCol,        setSortCol]        = usePersistedState<string>(`${NS}.sortCol`, 'lojista', v => v, v => v);
  const [sortDir,        setSortDir]        = usePersistedState<'asc' | 'desc'>(`${NS}.sortDir`, 'asc', v => v, v => v as 'asc' | 'desc');
  const [colFilters,     setColFilters]     = usePersistedState<Record<string, string>>(`${NS}.colFilters`, {});
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // ── Estado de UI (não persistido) ────────────────────────
  const [modalPropostaAberta, setModalPropostaAberta] = useState<PropostaResumo | null>(null);

  // ── Listener de navegação externa ───────────────────────
  useEffect(() => {
    const handler = (e: any) => setModalPropostaAberta(e.detail);
    window.addEventListener('navigate-proposta', handler);
    return () => window.removeEventListener('navigate-proposta', handler);
  }, []);

  // ── Dados derivados ──────────────────────────────────────
  const proposals = useMemo(() => propostasData || [], [propostasData]);

  const filtered = useMemo<PropostaResumo[]>(() => {
    return proposals.filter(p => {
      const matchStatus = filterStatuses.length === 0 || filterStatuses.includes(p.status as StatusProposta);
      let matchDate = true;
      if (dateFrom || dateTo) {
        const iso = ptBRToISO(p.dataCriacao);
        if (dateFrom && iso < dateFrom) matchDate = false;
        if (dateTo   && iso > dateTo)   matchDate = false;
      }
      return matchStatus && matchDate;
    });
  }, [proposals, filterStatuses, dateFrom, dateTo]);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    proposals.forEach(p => { map[p.status] = (map[p.status] || 0) + 1; });
    return map;
  }, [proposals]);

  const colDefs = [
    { key: 'lojista',    getValue: (p: PropostaResumo) => p.nomeFantasia || '' },
    { key: 'tipo',       getValue: (p: PropostaResumo) => p.tipoOperacao },
    { key: 'id',         getValue: (p: PropostaResumo) => p.id },
    { key: 'unidade',    getValue: (p: PropostaResumo) => p.codigoUnidade },
    { key: 'segmento',   getValue: (p: PropostaResumo) => p.segmento },
    { key: 'valor',      getValue: (p: PropostaResumo) => String(p.valorProposto) },
    { key: 'area',       getValue: (p: PropostaResumo) => String(p.area) },
    { key: 'criado',     getValue: (p: PropostaResumo) => p.dataCriacao },
    { key: 'vencimento', getValue: (p: PropostaResumo) => p.dataVencimento || '' },
    { key: 'status',     getValue: (p: PropostaResumo) => p.status },
  ];

  const tableRows = useMemo<PropostaResumo[]>(() => {
    let rows = [...filtered];
    colDefs.forEach(({ key, getValue }) => {
      const pattern = colFilters[key] || '';
      if (pattern) rows = rows.filter(p => matchColFilter(getValue(p), pattern));
    });
    const colDef = colDefs.find(c => c.key === sortCol);
    if (colDef) {
      rows.sort((a, b) => {
        const av = colDef.getValue(a).toLowerCase();
        const bv = colDef.getValue(b).toLowerCase();
        return sortDir === 'asc' ? av.localeCompare(bv, 'pt-BR') : bv.localeCompare(av, 'pt-BR');
      });
    }
    return rows;
  }, [filtered, colFilters, sortCol, sortDir]);

  // ── Handlers ─────────────────────────────────────────────
  const toggleStatus = (s: StatusProposta) =>
    setFilterStatuses(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };

  const abrirNovaProposta = () => {
    setModalPropostaAberta({
      id: `PROP-NOVO-${Date.now()}`,
      idUnidade: '',
      codigoUnidade: '',
      unidade: '',
      piso: '',
      corredor: '',
      segmento: 'Moda',
      tipoOperacao: 'Nova Instalação',
      tipo: 'Nova Instalação',
      valorProposto: 0,
      area: 0,
      status: 'Aguardando análise financeira',
      responsavel: '',
      nomeFantasia: '',
      dataCriacao: new Date().toISOString().split('T')[0],
      atualizadoEm: new Date().toISOString(),
      dataVencimento: null,
      fimContrato: null,
    });
  };

  const fecharModal = () => { setModalPropostaAberta(null); refresh(); };

  return {
    // dados
    proposals, filtered, counts, tableRows, colDefs,
    // filtros
    filterStatuses, setFilterStatuses, toggleStatus,
    dateFrom, setDateFrom, dateTo, setDateTo,
    colFilters, setColFilters,
    // ordenação
    sortCol, setSortCol, sortDir, setSortDir, toggleSort,
    // ui
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    // modais
    modalPropostaAberta, setModalPropostaAberta,
    // ações
    abrirNovaProposta, fecharModal, refresh,
  };
}
````

## File: Figma/src/app/viewmodels/useComercialReports.ts
````typescript
// ============================================================
// viewmodels/useComercialReports.ts — ViewModel de Relatórios
// ============================================================
//
// Papel na arquitetura MVVM: camada VIEWMODEL para a tela de Relatórios.
//
// Responsabilidades:
//  1. DADOS: busca unidades e propostas da API
//  2. CAMPOS: gerencia quais colunas estão selecionadas para exportar
//     (DEFAULT_FIELDS define o conjunto inicial com seleção padrão)
//  3. FILTROS: piso, status, segmento e intervalo de datas
//  4. GRÁFICOS: calcula os 3 datasets para os charts da tela
//      - segmentosChart: distribuição de lojas por segmento (barras)
//      - pisoChart: ocupação por piso (donut)
//      - propostasChart: propostas por status (donut)
//  5. EXPORTAÇÃO: gera arquivos .xlsx (via SheetJS) e .pdf (via jsPDF)
//     com estrutura hierárquica Disponibilidade → Proposta → Histórico
//
// DEFAULT_FIELDS: define os campos disponíveis para seleção.
// Categorias: 'Disponibilidade', 'Proposta', 'Histórico'
// (categoria 'Dados da Loja' foi removida — dados virão da API futuramente)
//
// buildExportRows(): monta as linhas achatadas para exportação.
// Para cada unidade, gera 1 linha de disponibilidade + N linhas
// de propostas vinculadas + M linhas de histórico de cada proposta.
// ============================================================
import { useState, useMemo } from 'react';
import { useApi } from '../data/useApi';
import { UnidadesService } from '../services/unidades.service';
import { PropostasService } from '../services/propostas.service';
import { usePersistedState } from '../shared/hooks/usePersistedState';
import { getEdicoesByProposal } from '../data/comercialStore';
import type { StatusProposta, Piso } from '../data/comercialData';
import { STATUS_OCUPADO, STATUS_APROVADO } from '../enums';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const NS = 'relatorios';

export interface ReportField {
  id: string;
  label: string;
  category: 'Disponibilidade' | 'Proposta' | 'Dados da Loja' | 'Histórico';
  selected: boolean;
}

export const DEFAULT_FIELDS: ReportField[] = [
  { id: 'unidade',        label: 'Unidade',            category: 'Disponibilidade', selected: true },
  { id: 'piso',           label: 'Piso',               category: 'Disponibilidade', selected: true },
  { id: 'corredor',       label: 'Corredor',           category: 'Disponibilidade', selected: false },
  { id: 'area',           label: 'Área (m²)',          category: 'Disponibilidade', selected: true },
  { id: 'statusUnidade',  label: 'Status da Unidade',  category: 'Disponibilidade', selected: true },
  { id: 'propCodigo',     label: 'Código',             category: 'Proposta',        selected: true },
  { id: 'propTipo',       label: 'Tipo',               category: 'Proposta',        selected: true },
  { id: 'propValor',      label: 'Valor Proposto',     category: 'Proposta',        selected: true },
  { id: 'propStatus',     label: 'Status da Proposta', category: 'Proposta',        selected: true },
  { id: 'propCriacao',    label: 'Data de Criação',    category: 'Proposta',        selected: false },
  { id: 'propVencimento', label: 'Data de Vencimento', category: 'Proposta',        selected: true },
  { id: 'propResponsavel',label: 'Responsável',        category: 'Proposta',        selected: false },
  { id: 'histData',       label: 'Data da Edição',     category: 'Histórico',       selected: false },
  { id: 'histEditor',     label: 'Editado por',        category: 'Histórico',       selected: false },
  { id: 'histStatusAnt',  label: 'Status Anterior',    category: 'Histórico',       selected: false },
  { id: 'histStatusNovo', label: 'Status Novo',        category: 'Histórico',       selected: false },
];

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
}

export function useComercialReports() {
  // ── Model ────────────────────────────────────────────────
  const { data: todasUnidadesData } = useApi(() => UnidadesService.listar(), []);
  const { data: propostasData }     = useApi(() => PropostasService.listar(), []);

  // ── Estado persistido ────────────────────────────────────
  const [fields, setFields] = usePersistedState<ReportField[]>(
    `${NS}.fields`,
    DEFAULT_FIELDS,
    JSON.stringify,
    (s) => {
      const saved: ReportField[] = JSON.parse(s);
      return DEFAULT_FIELDS.map(def => {
        const found = saved.find(f => f.id === def.id);
        return found ? { ...def, selected: found.selected } : def;
      });
    },
  );
  const [dateFrom,       setDateFrom]       = usePersistedState<string>(`${NS}.dateFrom`, '', v => v, v => v);
  const [dateTo,         setDateTo]         = usePersistedState<string>(`${NS}.dateTo`, '', v => v, v => v);
  const [filterPisos,    setFilterPisos]    = usePersistedState<string[]>(`${NS}.filterPisos`, []);
  const [filterStatuses, setFilterStatuses] = usePersistedState<string[]>(`${NS}.filterStatuses`, []);
  const [filterSegmentos,setFilterSegmentos]= usePersistedState<string[]>(`${NS}.filterSegmentos`, []);
  const [exportFormat,   setExportFormat]   = usePersistedState<'xlsx' | 'pdf'>(`${NS}.exportFormat`, 'xlsx', v => v, v => v as 'xlsx' | 'pdf');
  const [expandedCategories, setExpandedCategories] = usePersistedState<string[]>(
    `${NS}.expandedCategories`,
    ['Disponibilidade', 'Proposta', 'Dados da Loja', 'Histórico'],
  );

  // ── Estado de UI ─────────────────────────────────────────
  const [showMobileFilters,    setShowMobileFilters]    = useState(false);
  const [reportChartIndex,     setReportChartIndex]     = useState(0);
  const [showPreviewModal,     setShowPreviewModal]      = useState(false);
  const [mobileReportSection,  setMobileReportSection]  = useState<'graficos' | 'campos' | null>('campos');

  // ── Dados derivados ──────────────────────────────────────
  const allPropostas = useMemo(() => propostasData || [], [propostasData]);

  const allLojistas = useMemo(() => {
    if (!todasUnidadesData) return [];
    return todasUnidadesData.map(un => ({
      id: un.id,
      nome: un.status === STATUS_OCUPADO ? STATUS_OCUPADO : 'Disponível',
      segmento: (allPropostas.find(p => p.idUnidade === un.id && p.status === STATUS_APROVADO)?.segmento || 'Outros'),
      responsavel: '',
      email: '',
      unidade: un.codigo,
      piso: un.piso as Piso,
      corredor: un.corredor,
      area: un.area,
      status: un.status,
    }));
  }, [todasUnidadesData, allPropostas]);

  const filteredLojistas = useMemo(() =>
    allLojistas.filter(l => {
      const matchPiso    = filterPisos.length === 0    || filterPisos.includes(l.piso);
      const matchStatus  = filterStatuses.length === 0 || filterStatuses.includes(l.status);
      const matchSeg     = filterSegmentos.length === 0 || filterSegmentos.includes(l.segmento);
      return matchPiso && matchStatus && matchSeg;
    }),
  [allLojistas, filterPisos, filterStatuses, filterSegmentos]);

  const filteredPropostas = useMemo(() =>
    allPropostas.filter(p => {
      if (!dateFrom && !dateTo) return true;
      const iso = p.dataCriacao.includes('/') ? p.dataCriacao.split('/').reverse().join('-') : p.dataCriacao;
      if (dateFrom && iso < dateFrom) return false;
      if (dateTo   && iso > dateTo)   return false;
      return true;
    }),
  [allPropostas, dateFrom, dateTo]);

  const segmentosChart = useMemo(() => {
    const map: Record<string, number> = {};
    filteredLojistas.filter(l => l.status === STATUS_OCUPADO).forEach(l => {
      map[l.segmento] = (map[l.segmento] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [filteredLojistas]);

  const pisoChart = useMemo(() => [
    { name: 'Primeiro Piso', value: filteredLojistas.filter(l => l.piso === 'P' && l.status === STATUS_OCUPADO).length },
    { name: 'Segundo Piso',  value: filteredLojistas.filter(l => l.piso === 'S' && l.status === STATUS_OCUPADO).length },
    { name: 'Terceiro Piso', value: filteredLojistas.filter(l => l.piso === 'T' && l.status === STATUS_OCUPADO).length },
  ], [filteredLojistas]);

  const propostasChart = useMemo(() => {
    const statuses: StatusProposta[] = [
      'Aguardando análise financeira', 'Aguardando análise do comitê',
      'Aprovado', 'Reprovado', 'Cancelado', 'Vencida', 'Finalizado',
    ];
    return statuses
      .map(s => ({ name: s, value: filteredPropostas.filter(p => p.status === s).length }))
      .filter(d => d.value > 0);
  }, [filteredPropostas]);

  // Campos selecionados agrupados
  const selectedFields   = fields.filter(f => f.selected);
  const dispFields       = selectedFields.filter(f => f.category === 'Disponibilidade');
  const propFields       = selectedFields.filter(f => f.category === 'Proposta');
  const lojFields        = selectedFields.filter(f => f.category === 'Dados da Loja');
  const histFields       = selectedFields.filter(f => f.category === 'Histórico');

  // ── Handlers de campos ───────────────────────────────────
  const toggleField = (id: string) =>
    setFields(prev => prev.map(f => f.id === id ? { ...f, selected: !f.selected } : f));

  const toggleCategory = (category: string) => {
    const catFields = fields.filter(f => f.category === category);
    const allSel    = catFields.every(f => f.selected);
    setFields(prev => prev.map(f => f.category === category ? { ...f, selected: !allSel } : f));
  };

  const toggleExpanded = (category: string) =>
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );

  const toggleReportSection = (section: 'graficos' | 'campos') =>
    setMobileReportSection(prev => prev === section ? null : section);

  // ── Exportação ───────────────────────────────────────────
  const buildExportRows = () => {
    const rows: Record<string, string>[] = [];
    filteredLojistas.forEach(l => {
      const dispRow: Record<string, string> = {};
      dispFields.forEach(f => {
        dispRow[f.label] =
          f.id === 'unidade'       ? l.unidade :
          f.id === 'piso'          ? (l.piso === 'P' ? 'Primeiro Piso' : l.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso') :
          f.id === 'corredor'      ? l.corredor :
          f.id === 'area'          ? `${l.area} m²` :
          f.id === 'statusUnidade' ? l.status : '—';
      });
      propFields.forEach(f => { dispRow[`[Proposta] ${f.label}`]  = ''; });
      lojFields.forEach(f  => { dispRow[`[Dados da Loja] ${f.label}`]   = ''; });
      histFields.forEach(f => { dispRow[`[Histórico] ${f.label}`] = ''; });
      rows.push(dispRow);

      const props = allPropostas.filter(p => p.codigoUnidade === l.unidade);
      props.forEach(p => {
        const edicoes = histFields.length > 0 ? getEdicoesByProposal(p.id) : [];
        const propRow: Record<string, string> = {};
        dispFields.forEach(f => { propRow[f.label] = ''; });
        propFields.forEach(f => {
          propRow[`[Proposta] ${f.label}`] =
            f.id === 'propCodigo'      ? p.id :
            f.id === 'propTipo'        ? p.tipoOperacao :
            f.id === 'propValor'       ? fmtCurrency(p.valorProposto) :
            f.id === 'propStatus'      ? p.status :
            f.id === 'propCriacao'     ? p.dataCriacao :
            f.id === 'propVencimento'  ? (p.dataVencimento || '—') :
            f.id === 'propResponsavel' ? (p.responsavel || '—') : '—';
        });
        lojFields.forEach(f => {
          propRow[`[Dados da Loja] ${f.label}`] =
            f.id === 'lojistaNome'      ? (p.nomeFantasia || '—') :
            f.id === 'lojistaSegmento'  ? p.segmento :
            f.id === 'lojistaResp'      ? (p.responsavel || '—') :
            f.id === 'lojistaEmail'     ? '—' : '—';
        });
        histFields.forEach(f => { propRow[`[Histórico] ${f.label}`] = ''; });
        rows.push(propRow);

        edicoes.forEach(e => {
          const histRow: Record<string, string> = {};
          dispFields.forEach(f => { histRow[f.label] = ''; });
          propFields.forEach(f => { histRow[`[Proposta] ${f.label}`] = ''; });
          lojFields.forEach(f  => { histRow[`[Dados da Loja] ${f.label}`]  = ''; });
          histFields.forEach(f => {
            histRow[`[Histórico] ${f.label}`] =
              f.id === 'histData'       ? new Date(e.editadoEm).toLocaleString('pt-BR') :
              f.id === 'histEditor'     ? e.editadoPorNome :
              f.id === 'histStatusAnt'  ? e.snapshot.status :
              f.id === 'histStatusNovo' ? p.status : '—';
          });
          rows.push(histRow);
        });
      });
    });
    return rows;
  };

  const handleExportXLSX = () => {
    const rows = buildExportRows();
    if (!rows.length) return;
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Relatório Comercial');
    ws['!cols'] = Object.keys(rows[0]).map(key => ({
      wch: Math.max(key.length, ...rows.map(r => (r[key] || '').length)) + 2,
    }));
    XLSX.writeFile(wb, `relatorio-comercial-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const handleExportPDF = () => {
    const rows = buildExportRows();
    if (!rows.length) return;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    doc.setFontSize(14);
    doc.setTextColor(139, 26, 26);
    doc.text('Relatório Comercial — JP Mall', 14, 16);
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Gerado em ${new Date().toLocaleString('pt-BR')} · ${filteredLojistas.length} unidades`, 14, 22);
    const headers = Object.keys(rows[0]);
    autoTable(doc, {
      head: [headers],
      body: rows.map(r => headers.map(h => r[h] || '')),
      startY: 27,
      styles: { fontSize: 7, cellPadding: 2, overflow: 'linebreak' },
      headStyles: { fillColor: [139, 26, 26], textColor: 255, fontStyle: 'bold', fontSize: 7 },
      alternateRowStyles: { fillColor: [249, 250, 251] },
      margin: { left: 14, right: 14 },
    });
    doc.save(`relatorio-comercial-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const handleExport = () =>
    exportFormat === 'xlsx' ? handleExportXLSX() : handleExportPDF();

  return {
    // dados
    allLojistas, allPropostas, filteredLojistas, filteredPropostas,
    segmentosChart, pisoChart, propostasChart,
    // campos
    fields, setFields, selectedFields, dispFields, propFields, lojFields, histFields,
    expandedCategories,
    // filtros
    dateFrom, setDateFrom, dateTo, setDateTo,
    filterPisos, setFilterPisos,
    filterStatuses, setFilterStatuses,
    filterSegmentos, setFilterSegmentos,
    // ui
    showMobileFilters, setShowMobileFilters,
    exportFormat, setExportFormat,
    reportChartIndex, setReportChartIndex,
    showPreviewModal, setShowPreviewModal,
    mobileReportSection,
    // ações
    toggleField, toggleCategory, toggleExpanded, toggleReportSection,
    handleExport,
  };
}
````

## File: Figma/src/main.tsx
````typescript
import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);
````

## File: Figma/src/styles/fonts.css
````css

````

## File: Figma/src/styles/globals.css
````css

````

## File: Figma/src/styles/index.css
````css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
````

## File: Figma/src/styles/tailwind.css
````css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';

@import 'tw-animate-css';
````

## File: Figma/src/vite-env.d.ts
````typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
````

## File: Figma/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
````

## File: postman/collections/Projeto-Flamboyant/.resources/definition.yaml
````yaml
$kind: collection
name: Projeto-Flamboyant
variables:
  - key: baseUrl
    value: 'http://localhost:8080'
  - key: token
    value: ''
  - key: proposta_id
    value: ''
  - key: unidade_id
    value: ''
  - key: documento_id
    value: ''
auth:
  type: bearer
  credentials:
    - key: token
      value: '{{token}}'
````

## File: postman/collections/Projeto-Flamboyant/Auth/Login.request.yaml
````yaml
$kind: http-request
name: Login
method: POST
url: '{{baseUrl}}/api/v1/auth/login'
order: 2000
auth:
  type: noauth
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "email": "admin@flamboyant.com.br",
      "senha": "Admin@2026"
    }
scripts:
  - type: afterResponse
    language: text/javascript
    code: |-
      const json = pm.response.json();
      if (json && json.token) {
          pm.collectionVariables.set("token", json.token);
          console.log("Token salvo:", json.token);
      }
````

## File: postman/collections/Projeto-Flamboyant/Auth/Logout.request.yaml
````yaml
$kind: http-request
name: Logout
method: POST
url: '{{baseUrl}}/api/v1/auth/logout'
order: 3000
````

## File: postman/collections/Projeto-Flamboyant/Auth/Me.request.yaml
````yaml
$kind: http-request
name: Me
method: GET
url: '{{baseUrl}}/api/v1/auth/me'
order: 4000
````

## File: postman/collections/Projeto-Flamboyant/Documentos/Listar Documentos.request.yaml
````yaml
$kind: http-request
name: Listar Documentos
method: GET
url: '{{baseUrl}}/api/v1/documentos?id_proposta={{proposta_id}}'
order: 24000
````

## File: postman/collections/Projeto-Flamboyant/Documentos/Remover Documento.request.yaml
````yaml
$kind: http-request
name: Remover Documento
method: DELETE
url: '{{baseUrl}}/api/v1/documentos/{{documento_id}}'
order: 26000
````

## File: postman/collections/Projeto-Flamboyant/Documentos/Upload Documento.request.yaml
````yaml
$kind: http-request
name: Upload Documento
method: POST
url: '{{baseUrl}}/api/v1/documentos'
order: 25000
headers:
  - key: Content-Type
    value: multipart/form-data
body:
  type: formdata
  content:
    - key: file
      type: file
      src: ''
      description: Arquivo a ser enviado
    - key: id_proposta
      type: text
      value: '{{proposta_id}}'
      description: ID da proposta associada
````

## File: postman/collections/Projeto-Flamboyant/Health/Ping.request.yaml
````yaml
$kind: http-request
name: Ping
method: GET
url: '{{baseUrl}}/ping'
order: 1000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Atualizar Proposta.request.yaml
````yaml
$kind: http-request
name: Atualizar Proposta
method: PUT
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}'
order: 10000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "nomeFantasia": "Loja Exemplo Atualizada",
      "valorProposto": 48000,
      "area": 120.5,
      "abl": 115.0,
      "aluguelPercent": 5.5,
      "prazoLocacaoMeses": 36,
      "aluguelPorM2": 398.0,
      "condominioAprox": 3200,
      "fppAprox": 1100,
      "inicioContrato": "2026-07-01",
      "fimContrato": "2029-06-30",
      "dataInauguracao": "2026-07-15",
      "observacoes": "Atualização dos termos financeiros"
    }
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Atualizar Status.request.yaml
````yaml
$kind: http-request
name: Atualizar Status
method: PATCH
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/status'
order: 11000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "status": "Aguardando análise do comitê",
      "observacoes": "Aprovado pela análise financeira"
    }
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Cessao de Direitos/Detalhe Cessao de Direitos.request.yaml
````yaml
$kind: http-request
name: Detalhe Cessão de Direitos
method: GET
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/cessao-direitos'
order: 18000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Cessao de Direitos/Salvar Cessao de Direitos.request.yaml
````yaml
$kind: http-request
name: Salvar Cessão de Direitos
method: PUT
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/cessao-direitos'
order: 19000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "resSperataPropostaPcd": 120000,
      "referenciaMercadoPorM2Pcd": 1000.0,
      "sinalResSperataPcd": 30000,
      "formaPagamentoSaldoPcd": "Parcelado",
      "numParcelasPcd": 3,
      "statusResSperataPcd": "Pendente",
      "observacoesPcd": "Cessão negociada com desconto de 10%"
    }
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Check Vencidas.request.yaml
````yaml
$kind: http-request
name: Check Vencidas
method: POST
url: '{{baseUrl}}/api/v1/propostas/check-vencidas'
order: 12000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Criar Proposta.request.yaml
````yaml
$kind: http-request
name: Criar Proposta
method: POST
url: '{{baseUrl}}/api/v1/propostas'
order: 9000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "idUnidade": "{{unidade_id}}",
      "segmento": "Moda",
      "tipoOperacao": "Nova Instalação",
      "valorProposto": 45000,
      "area": 120.5,
      "abl": 110.0,
      "nomeFantasia": "Loja Exemplo",
      "status": "Aguardando análise financeira",
      "dataVencimento": "2026-12-31",
      "observacoes": "Proposta criada via API para testes"
    }
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Detalhe Proposta.request.yaml
````yaml
$kind: http-request
name: Detalhe Proposta
method: GET
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}'
order: 8000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Historico/Listar Historico.request.yaml
````yaml
$kind: http-request
name: Listar Histórico
method: GET
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/historico'
order: 13000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Listar Propostas.request.yaml
````yaml
$kind: http-request
name: Listar Propostas
method: GET
url: '{{baseUrl}}/api/v1/propostas'
order: 7000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Loja Anterior/Detalhe Loja Anterior.request.yaml
````yaml
$kind: http-request
name: Detalhe Loja Anterior
method: GET
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/loja-anterior'
order: 14000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Loja Anterior/Salvar Loja Anterior.request.yaml
````yaml
$kind: http-request
name: Salvar Loja Anterior
method: PUT
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/loja-anterior'
order: 15000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "nomeFantasia": "Loja Anterior Ltda",
      "segmento": "Alimentação",
      "tipoOperacao": "Renovação",
      "cto": 38000,
      "abl": 105.0,
      "amm": 361.90,
      "dividaAmm": 0,
      "dividaNegociada": 0,
      "dividaCondominio": 0,
      "dividaFpp": 0,
      "formaPagamento": "À vista"
    }
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Necessidades Tecnicas/Detalhe Necessidades Tecnicas.request.yaml
````yaml
$kind: http-request
name: Detalhe Necessidades Técnicas
method: GET
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/necessidades-tecnicas'
order: 16000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Necessidades Tecnicas/Salvar Necessidades Tecnicas.request.yaml
````yaml
$kind: http-request
name: Salvar Necessidades Técnicas
method: PUT
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/necessidades-tecnicas'
order: 17000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "demandaEletricaKva": 45.0,
      "tensaoNecessaria": "220V",
      "circuitosEspeciais": false,
      "obsEletrica": "Padrão comercial",
      "pontoAgua": true,
      "quantidadePontosAgua": 2,
      "pontoEsgoto": true,
      "vazaoNecessariaLmin": 10.0,
      "caixaGordura": false,
      "obsHidraulica": "",
      "necessitaGas": false,
      "tipoGas": "Não se aplica",
      "necessitaExaustao": true,
      "vazaoExaustaoM3h": 2000.0,
      "necessitaMakeUpAr": false,
      "areaMinimaM2": 100.0,
      "areaMaximaM2": 150.0,
      "peDireitoMinimoM": 3.5,
      "cargaPisoKgm2": 500.0,
      "necessitaMezanino": false,
      "frenteMinimaM": 8.0,
      "tipoFachada": "Aberta",
      "comunicacaoVisualLed": true,
      "pontosDados": 4,
      "necessitaFibra": true,
      "status": "Rascunho"
    }
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Parecer do Comite/Detalhe Parecer do Comite.request.yaml
````yaml
$kind: http-request
name: Detalhe Parecer do Comitê
method: GET
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/parecer-comite'
order: 22000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Parecer do Comite/Salvar Parecer do Comite.request.yaml
````yaml
$kind: http-request
name: Salvar Parecer do Comitê
method: PUT
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/parecer-comite'
order: 23000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "presidentePpc": true,
      "presidenteDataPpc": "2026-05-17",
      "diretoriaComp1Ppc": true,
      "diretoriaComp1DataPpc": "2026-05-17",
      "diretoriaComp2Ppc": false,
      "diretoriaComp2DataPpc": null,
      "superintendentePpc": true,
      "superintendenteDataPpc": "2026-05-17",
      "inNetworkingPpc": false,
      "inNetworkingDataPpc": null
    }
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Taxa de Transferencia/Detalhe Taxa de Transferencia.request.yaml
````yaml
$kind: http-request
name: Detalhe Taxa de Transferência
method: GET
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/taxa-transferencia'
order: 20000
````

## File: postman/collections/Projeto-Flamboyant/Propostas/Taxa de Transferencia/Salvar Taxa de Transferencia.request.yaml
````yaml
$kind: http-request
name: Salvar Taxa de Transferência
method: PUT
url: '{{baseUrl}}/api/v1/propostas/{{proposta_id}}/taxa-transferencia'
order: 21000
headers:
  - key: Content-Type
    value: application/json
body:
  type: json
  content: |-
    {
      "ttContratualPtt": 90000,
      "ttPropostaPtt": 75000,
      "ttPropostaNumAmmPtt": 2.5,
      "sinalTtPtt": 20000,
      "formaPagamentoTtPtt": "Parcelado",
      "justificativaTtPtt": "Desconto concedido por histórico positivo do lojista",
      "statusTtPtt": "Em análise"
    }
````

## File: postman/collections/Projeto-Flamboyant/Unidades/Detalhe Unidade.request.yaml
````yaml
$kind: http-request
name: Detalhe Unidade
method: GET
url: '{{baseUrl}}/api/v1/unidades/{{unidade_id}}'
order: 6000
````

## File: postman/collections/Projeto-Flamboyant/Unidades/Listar Unidades.request.yaml
````yaml
$kind: http-request
name: Listar Unidades
method: GET
url: '{{baseUrl}}/api/v1/unidades'
order: 5000
````

## File: start.ps1
````powershell
# ============================================================
# BES-2026 — Script de inicialização (PowerShell)
# Uso: .\start.ps1
# ============================================================

$ErrorActionPreference = "Stop"

function Log  { Write-Host "[BES-2026] $args" -ForegroundColor Green }
function Warn { Write-Host "[AVISO] $args" -ForegroundColor Yellow }
function Err  { Write-Host "[ERRO] $args" -ForegroundColor Red; Read-Host "Pressione Enter para sair"; exit 1 }

Write-Host ""
Log "Iniciando verificacao..."
Write-Host ""

# ── Verificar Go ─────────────────────────────────────────────
if (-not (Get-Command go -ErrorAction SilentlyContinue)) {
    Err "Go nao encontrado. Instale em https://go.dev/dl/"
}
Log "Go: $(go version)"

# ── Verificar Node ───────────────────────────────────────────
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Err "Node.js nao encontrado. Instale em https://nodejs.org/"
}
Log "Node: $(node --version)"

# ── Verificar npm ────────────────────────────────────────────
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Err "npm nao encontrado."
}
Log "npm: $(npm --version)"

Write-Host ""

# ── Dependências da API ──────────────────────────────────────
Log "Verificando dependencias da API..."
Push-Location API
go mod tidy
if ($LASTEXITCODE -ne 0) { Err "Falha ao atualizar dependencias Go" }
Pop-Location
Log "Dependencias Go OK."

# ── Dependências do Frontend ─────────────────────────────────
Log "Verificando dependencias do Frontend..."
if (-not (Test-Path "Figma\node_modules")) {
    Log "Instalando dependencias Node..."
    Push-Location Figma
    npm install
    if ($LASTEXITCODE -ne 0) { Err "Falha ao instalar dependencias Node" }
    Pop-Location
} else {
    Log "Dependencias Node ja instaladas."
}

# ── Arquivo .env do frontend ─────────────────────────────────
if (-not (Test-Path "Figma\.env")) {
    Warn ".env nao encontrado no Figma - criando com valores padrao..."
    "VITE_API_URL=http://localhost:8080/api/v1" | Out-File -FilePath "Figma\.env" -Encoding utf8
}

Write-Host ""

# ── Iniciar API e Frontend em janelas separadas ──────────────
Log "Iniciando API na porta 8080..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location API; go run ./cmd/main.go" -WindowStyle Normal

Log "Iniciando Frontend na porta 5173..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location Figma; npm run dev" -WindowStyle Normal

Write-Host ""
Log "----------------------------------------------"
Log "  API:      http://localhost:8080"
Log "  Frontend: http://localhost:5173"
Log "  Feche as janelas abertas para encerrar"
Log "----------------------------------------------"
Write-Host ""
````

## File: .gitignore
````
# ================================================================
# Projeto-Flamboyant — .gitignore
# Cobre: Figma (Node/Vite), API (Go/Gin/MongoDB), Postman
# ================================================================


# ───────────────────────────────────────────
# Go — API/
# ───────────────────────────────────────────

# Binários compilados
API/bin/
API/*.exe
API/*.out

# Cache de build e testes
API/vendor/
API/tmp/
API/coverage.out
API/coverage.html
API/*.test

# Variáveis de ambiente
API/.env
API/.env.*
API/config.local.yaml
API/config.local.toml


# ───────────────────────────────────────────
# Node / Vite — Figma/
# ───────────────────────────────────────────

# Dependências
Figma/node_modules/
Figma/.pnp
Figma/.pnp.js

# Build
Figma/dist/
Figma/dist-ssr/
Figma/build/

# Cache Vite e TypeScript
Figma/.vite/
Figma/*.local
Figma/*.tsbuildinfo

# Cache pnpm
Figma/.pnpm-store/
Figma/.pnpm-debug.log*

# Variáveis de ambiente
Figma/.env
Figma/.env.*


# ───────────────────────────────────────────
# Postman
# ───────────────────────────────────────────

# Environments e globals contêm tokens, API keys e URLs sensíveis
# As demais pastas (collections, specs, flows, mocks) são versionadas
postman/environments/
postman/globals/
.postman/


# ───────────────────────────────────────────
# Logs (qualquer subprojeto)
# ───────────────────────────────────────────

*.log
logs/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


# ───────────────────────────────────────────
# Sistema operacional
# ───────────────────────────────────────────

.DS_Store
Thumbs.db
desktop.ini


# ───────────────────────────────────────────
# Editores
# ───────────────────────────────────────────

# VS Code — mantém extensions.json (recomendações de equipe)
.vscode/settings.json
.vscode/launch.json
.vscode/*.code-snippets

# JetBrains / GoLand
.idea/
*.iml
*.iws

# Vim / Emacs
*.sw?
*~
\#*\#
````

## File: Figma/src/app/App.tsx
````typescript
/**
 * App.tsx — Ponto de entrada da aplicação React.
 *
 * Responsabilidades:
 *  - Envolve tudo com BrowserRouter (habilita navegação por URL no React Router v7)
 *  - Envolve tudo com AuthProvider (torna o contexto de autenticação disponível globalmente)
 *  - Define as rotas da aplicação via AppRoutes
 *
 * Estrutura de rotas:
 *  /           → Login (pública)
 *  /comercial  → Layout (shell com sidebar + header)
 *    dashboard        → ComercialDashboard
 *    propostas        → ComercialProposals
 *    disponibilidade  → ComercialAvailability
 *    relatorios       → ComercialReports
 *  /*          → redireciona para /comercial/dashboard
 *
 * MODO PROTÓTIPO: não há PrivateRoute — todas as rotas são acessíveis
 * sem autenticação real. Para produção, adicionar guard de rota.
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AuthProvider } from './AuthContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { ComercialDashboard } from './pages/comercial/ComercialDashboard';
import { ComercialProposals } from './pages/comercial/ComercialProposals';
import { ComercialAvailability } from './pages/comercial/ComercialAvailability';
import { ComercialReports } from './pages/comercial/ComercialReports';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/comercial" element={<Layout />}>
        <Route path="dashboard" element={<ComercialDashboard />} />
        <Route path="propostas" element={<ComercialProposals />} />
        <Route path="disponibilidade" element={<ComercialAvailability />} />
        <Route path="relatorios" element={<ComercialReports />} />
      </Route>
      <Route path="*" element={<Navigate to="/comercial/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
````

## File: Figma/src/styles/theme.css
````css
@custom-variant dark (&:is(.dark *));

:root {
  color-scheme: light;
  /* JP Mall Brand Colors - Light Mode */
  --jp-primary-dark: #8B1A1A;
  --jp-primary: #D93030;
  --jp-background: #F7F4EF;
  --jp-accent: #C8A882;
  
  /* Neutral Colors - Light */
  --jp-white: #FFFFFF;
  --jp-text-primary: #1F2937;
  --jp-text-secondary: #4B5563;
  --jp-border: #E5E7EB;
  --jp-bg-input: #F9FAFB;
  --jp-bg-table-alt: #F3F4F6;
  
  /* Semantic Colors - Light */
  --jp-success: #10B981;
  --jp-warning: #F59E0B;
  --jp-error: #D93030;
  --jp-info: #3B82F6;
  
  /* Original theme variables */
  --font-size: 16px;
  --background: #F7F4EF;
  --foreground: #1F2937;
  --card: #FFFFFF;
  --card-foreground: #1F2937;
  --popover: #FFFFFF;
  --popover-foreground: #1F2937;
  --primary: #D93030;
  --primary-foreground: #FFFFFF;
  --secondary: #F3F4F6;
  --secondary-foreground: #1F2937;
  --muted: #F3F4F6;
  --muted-foreground: #4B5563;
  --accent: #C8A882;
  --accent-foreground: #1F2937;
  --destructive: #D93030;
  --destructive-foreground: #FFFFFF;
  --border: #E5E7EB;
  --input: transparent;
  --input-background: #F9FAFB;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: #D93030;
  --chart-1: #D93030;
  --chart-2: #3B82F6;
  --chart-3: #10B981;
  --chart-4: #F59E0B;
  --chart-5: #C8A882;
  --radius: 0.5rem;
  --sidebar: #8B1A1A;
  --sidebar-foreground: #FFFFFF;
  --sidebar-primary: #D93030;
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #a43030;
  --sidebar-accent-foreground: #FFFFFF;
  --sidebar-border: #a43030;
  --sidebar-ring: #D93030;
}

.dark {
  color-scheme: dark;
  /* JP Mall Dark Mode Colors */
  --jp-bg-base: #0F1117;
  --jp-bg-surface: #1A1F2E;
  --jp-bg-card: #242938;
  --jp-border: #2E3447;
  --jp-bg-input: #1E2435;
  
  --jp-primary-dark: #8B1A1A;
  --jp-primary: #E04444;
  --jp-accent: #D4A96A;
  
  --jp-text-primary: #F1F5F9;
  --jp-text-secondary: #94A3B8;
  --jp-text-muted: #64748B;
  
  --jp-success: #34D399;
  --jp-warning: #FBBF24;
  --jp-error: #E04444;
  --jp-info: #60A5FA;
  
  /* Theme variables for dark mode */
  --background: #0F1117;
  --foreground: #F1F5F9;
  --card: #242938;
  --card-foreground: #F1F5F9;
  --popover: #242938;
  --popover-foreground: #F1F5F9;
  --primary: #E04444;
  --primary-foreground: #FFFFFF;
  --secondary: #1A1F2E;
  --secondary-foreground: #F1F5F9;
  --muted: #1A1F2E;
  --muted-foreground: #94A3B8;
  --accent: #D4A96A;
  --accent-foreground: #1F2937;
  --destructive: #E04444;
  --destructive-foreground: #FFFFFF;
  --border: #2E3447;
  --input: #2E3447;
  --input-background: #1E2435;
  --ring: #E04444;
  --chart-1: #E04444;
  --chart-2: #60A5FA;
  --chart-3: #34D399;
  --chart-4: #FBBF24;
  --chart-5: #D4A96A;
  --sidebar: #0F1117;
  --sidebar-foreground: #F1F5F9;
  --sidebar-primary: #E04444;
  --sidebar-primary-foreground: #F1F5F9;
  --sidebar-accent: #1A1F2E;
  --sidebar-accent-foreground: #F1F5F9;
  --sidebar-border: #2E3447;
  --sidebar-ring: #E04444;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }

  /**
  * Default typography styles for HTML elements (h1-h4, p, label, button, input).
  * These are in @layer base, so Tailwind utility classes (like text-sm, text-lg) automatically override them.
  */

  html {
    font-size: var(--font-size);
  }

  h1 {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h3 {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h4 {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  label {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  button {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  input {
    font-size: var(--text-base);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
  }
}
````

## File: Figma/vite.config.ts
````typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
````

## File: API/cmd/main.go
````go
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

	routes.Register(r, db, cfg.Server.JwtSecret)

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
	dsn := "postgres://" + cfg.Database.User + ":" + cfg.Database.Password +
		"@" + cfg.Database.Host + ":" + cfg.Database.Port +
		"/" + cfg.Database.Name + "?sslmode=" + cfg.Database.SSLMode

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
````

## File: API/go.mod
````
module go-api

go 1.25.0

require (
	github.com/gin-contrib/cors v1.7.3
	github.com/gin-gonic/gin v1.12.0
	github.com/golang-jwt/jwt/v5 v5.2.2
	github.com/golang-migrate/migrate/v4 v4.18.3
	github.com/jackc/pgx/v5 v5.7.5
	golang.org/x/crypto v0.48.0
)

require (
	github.com/bytedance/gopkg v0.1.3 // indirect
	github.com/bytedance/sonic v1.15.0 // indirect
	github.com/bytedance/sonic/loader v0.5.0 // indirect
	github.com/cloudwego/base64x v0.1.6 // indirect
	github.com/gabriel-vasile/mimetype v1.4.12 // indirect
	github.com/gin-contrib/sse v1.1.0 // indirect
	github.com/go-playground/locales v0.14.1 // indirect
	github.com/go-playground/universal-translator v0.18.1 // indirect
	github.com/go-playground/validator/v10 v10.30.1 // indirect
	github.com/goccy/go-json v0.10.5 // indirect
	github.com/goccy/go-yaml v1.19.2 // indirect
	github.com/hashicorp/errwrap v1.1.0 // indirect
	github.com/hashicorp/go-multierror v1.1.1 // indirect
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20240606120523-5a60cdf6a761 // indirect
	github.com/jackc/puddle/v2 v2.2.2 // indirect
	github.com/json-iterator/go v1.1.12 // indirect
	github.com/klauspost/cpuid/v2 v2.3.0 // indirect
	github.com/leodido/go-urn v1.4.0 // indirect
	github.com/lib/pq v1.10.9 // indirect
	github.com/mattn/go-isatty v0.0.20 // indirect
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
	github.com/modern-go/reflect2 v1.0.2 // indirect
	github.com/pelletier/go-toml/v2 v2.2.4 // indirect
	github.com/quic-go/qpack v0.6.0 // indirect
	github.com/quic-go/quic-go v0.59.0 // indirect
	github.com/twitchyliquid64/golang-asm v0.15.1 // indirect
	github.com/ugorji/go/codec v1.3.1 // indirect
	go.mongodb.org/mongo-driver/v2 v2.5.0 // indirect
	go.uber.org/atomic v1.11.0 // indirect
	golang.org/x/arch v0.22.0 // indirect
	golang.org/x/net v0.51.0 // indirect
	golang.org/x/sync v0.19.0 // indirect
	golang.org/x/sys v0.41.0 // indirect
	golang.org/x/text v0.34.0 // indirect
	google.golang.org/protobuf v1.36.10 // indirect
)
````

## File: COMO_RODAR_O_PROJETO.txt
````
============================================================
  BES-2026 — Como rodar o projeto em uma nova máquina
============================================================


PRE-REQUISITOS
--------------
Instale os programas abaixo antes de continuar:

  1. Go 1.21 ou superior
     https://go.dev/dl/

  2. Node.js 18 ou superior (vem com npm)
     https://nodejs.org/

  3. PostgreSQL (qualquer versão recente)
     https://www.postgresql.org/download/

Após instalar, verifique se estão funcionando abrindo
o PowerShell e rodando:

    go version
    node --version
    npm --version


PASSO 1 — Clonar ou copiar o projeto
--------------------------------------
Coloque a pasta do projeto em qualquer lugar da sua máquina.
Exemplo: C:\Projetos\Projeto-Flamboyant


PASSO 2 — Configurar o banco de dados
---------------------------------------
  Apenas certifique-se de que o PostgreSQL está rodando na
  sua máquina e anote o usuário e senha (por padrão costuma
  ser usuário "postgres").

  O banco jp-mall, as tabelas e os dados iniciais são criados
  AUTOMATICAMENTE quando a API sobe pela primeira vez.
  Não precisa criar nada manualmente.


PASSO 3 — Criar o arquivo de configuração da API
--------------------------------------------------
O repositório já inclui um arquivo de exemplo em:

    API/.env.example

Copie-o e renomeie para API/.env:

    No PowerShell:
        Copy-Item API\.env.example API\.env

    No Explorer:
        Copie o arquivo API\.env.example e renomeie a cópia para .env
        (o arquivo .env deve ficar dentro da pasta API/)

Em seguida, abra API/.env e preencha os campos em branco:

    # Porta em que a API Go vai rodar
SERVER_PORT=8080

# Modo do Gin: "debug" mostra logs detalhados | "release" para produção
GIN_MODE=debug

# Origem permitida para CORS (deixar vazio usa o proxy do Vite em dev)
ALLOWED_ORIGIN=

# Segredo para assinar tokens JWT — trocar em produção
JWT_SECRET=

# ── Banco de dados PostgreSQL ──────────────────────────────
DB_HOST=
DB_PORT=5432
DB_USER=
DB_PASSWORD=
DB_NAME=jp-mall
DB_SSLMODE=disable

  Substitua SUA_SENHA_AQUI pela senha do seu PostgreSQL.
  O JWT_SECRET pode ser qualquer texto longo (ex: uma frase aleatória).

  Os demais valores já vêm com padrões que funcionam para
  ambiente local e normalmente não precisam ser alterados.

  OBS: o arquivo Figma/.env é criado automaticamente pelo
       script de inicialização. Não precisa criar manualmente.


PASSO 4 — Rodar o projeto
--------------------------
Abra o PowerShell na pasta raiz do projeto e execute:

    .\start.ps1

O script vai:
  - Verificar se Go, Node e npm estão instalados
  - Baixar as dependências Go (go mod tidy)
  - Instalar as dependências Node (npm install)
  - Criar o Figma/.env automaticamente se não existir
  - Abrir duas janelas novas:
      * API rodando na porta 8080
      * Frontend rodando na porta 5173

Aguarde as duas janelas abrirem e mostrarem que estão prontas.


PASSO 5 — Acessar o projeto
-----------------------------
Abra o navegador e acesse:

    http://localhost:5173

A API fica disponível em:

    http://localhost:8080


ENCERRAR O PROJETO
-------------------
Feche as duas janelas do PowerShell que foram abertas
pelo script.


PROBLEMAS COMUNS
-----------------
Erro: "dial tcp: connect: connection refused" (banco)
  -> Verifique se o PostgreSQL está rodando na sua máquina.
  -> Confirme se o DB_USER e DB_PASSWORD no API/.env estão corretos.
  -> Confirme se o banco jp-mall foi criado (Passo 2).

Erro: "go: command not found"
  -> Go não está instalado ou não está no PATH.
  -> Reinstale o Go e reinicie o PowerShell.

Erro: "npm: command not found"
  -> Node.js não está instalado ou não está no PATH.
  -> Reinstale o Node.js e reinicie o PowerShell.

A tela abre mas não carrega nada
  -> Verifique se a janela da API abriu sem erros.
  -> Confirme se o arquivo API/.env existe e está preenchido.

Porta já em uso (8080 ou 5173)
  -> Algum outro programa está usando a porta.
  -> Encerre o programa que está usando a porta, ou
     altere SERVER_PORT no API/.env e VITE_API_URL no Figma/.env.


MODO DEBUG (opcional)
----------------------
Para rodar com suporte a breakpoints no VS Code, use:

    .\debug.ps1

Consulte o arquivo COMO_USAR_DEBUG.txt para instruções completas.

============================================================
````

## File: Figma/src/app/data/comercialData.ts
````typescript
// ============================================================
// comercialData.ts — Tipos, interfaces e dados estáticos locais
// ============================================================
//
// Este arquivo tem dois papéis distintos:
//
// 1. TIPOS E INTERFACES (exportados, usados em todo o frontend):
//    Segmento, StatusLoja, StatusProposta, Piso — tipos union para
//    valores de domínio. Garantem que só strings válidas sejam usadas.
//
//    UnidadeInfo — DTO de conveniência que representa uma unidade física
//    combinada com dados da proposta aprovada (nome fantasia, segmento).
//    NÃO é uma entidade do banco — é montada pelo ViewModel de Disponibilidade.
//
//    Proposta — interface local com todos os campos de uma proposta,
//    incluindo campos das sub-tabelas (lojaAnterior*, necessidades*, etc.).
//    Usada pelo PropostaManutencaoModal internamente. Os dados reais vêm
//    da API via PropostaResumo/PropostaDetalhe do apiClient.
//
// 2. DADOS MOCK ESTÁTICOS (propostasAtivas, allUnidadesInfo):
//    Gerados localmente para protótipo. NÃO são usados nas telas principais
//    (que buscam dados da API via useApi). Usados apenas pelo comercialStore.
//
// ATENÇÃO: os campos flat de sub-tabelas em Proposta (lojaAnterior*,
// demandaEletrica*, resSperata*, tt*, parecer*) existem como achatamento
// para o PropostaManutencaoModal. Na API, cada grupo é uma tabela separada
// (PropostaLojaAnterior, PropostaNecessidadesTecnicas, etc.).
// ============================================================
// ============================================================
// TIPOS E INTERFACES
// Os tipos de domínio vivem em enums/index.ts — importados para uso
// interno e re-exportados para manter compatibilidade com os imports existentes.
// ============================================================
import type { Segmento, StatusLoja, StatusProposta, Piso, TipoProposta, Corredor } from '../enums';
import { STATUS_OCUPADO, STATUS_DISPONIVEL, STATUS_APROVADO } from '../enums';
export type { Segmento, StatusLoja, StatusProposta, Piso, TipoProposta, Corredor };
export interface PropostaHistoricoItem {
  id: string;
  data: string;
  tipo: string;
  valor: number;
  status: string;
  observacao?: string;
}

export interface UnidadeInfo {
  id: string;
  nome: string;
  cnpj?: string;
  segmento: Segmento;
  responsavel: string;
  email: string;
  telefone?: string;
  unidade: string;
  piso: 'P' | 'S' | 'T';
  corredor: Corredor;
  area: number;
  status: StatusLoja;
  faturamentoMedio?: number;
  propostas?: PropostaHistoricoItem[];
}

export interface Proposta {
  id: string;
  lojista?: string;
  lojistaId?: string;
  unidade: string;
  segmento: Segmento;
  tipo: TipoProposta;
  valorProposto: number;
  area: number;
  status: StatusProposta;
  responsavel: string;
  dataCriacao: string;
  dataVencimento: string;
  observacoes?: string;

  // NOVOS campos — aba Loja Proposta
  nomeFantasia?: string;
  tipoOperacao?: 'Transferência' | 'Cessão' | 'Nova Locação' | 'Renovação' | 'Readequação';
  aluguelPercent?: number;
  prazoLocacaoMeses?: number;
  aluguelPorM2?: number;
  condominioAprox?: number;
  fppAprox?: number;
  inicioContrato?: string;
  fimContrato?: string;
  dataInauguracao?: string;

  // Loja Anterior
  lojaAnteriorNomeFantasia?: string;
  lojaAnteriorSegmento?: string;
  lojaAnteriorTipoOperacao?: string;
  lojaAnteriorCTO?: number;
  lojaAnteriorABL?: number;
  lojaAnteriorAMM?: number;
  lojaAnteriorDividaAMM?: number;
  lojaAnteriorDividaNegociada?: number;
  lojaAnteriorDividaCondominio?: number;
  lojaAnteriorDividaFPP?: number;
  lojaAnteriorFormaPagamento?: string;

  // Necessidades Técnicas — Elétrica
  demandaEletricaKva?: number;
  tensaoNecessaria?: string;
  circuitosEspeciais?: boolean;
  obsEletrica?: string;

  // Necessidades Técnicas — Hidráulica
  pontoAgua?: boolean;
  quantidadePontosAgua?: number;
  pontoEsgoto?: boolean;
  vazaoNecessariaLmin?: number;
  caixaGordura?: boolean;
  obsHidraulica?: string;

  // Necessidades Técnicas — Gás
  necessitaGas?: boolean;
  tipoGas?: string;
  consumoGasM3h?: number;
  obsGas?: string;

  // Necessidades Técnicas — Ventilação e Exaustão
  necessitaExaustao?: boolean;
  vazaoExaustaoM3h?: number;
  necessitaMakeUpAr?: boolean;
  obsVentilacao?: string;

  // Necessidades Técnicas — Estrutura
  areaMinimaM2?: number;
  areaMaximaM2?: number;
  peDireitoMinimoM?: number;
  cargaPisoKgm2?: number;
  necessitaMezanino?: boolean;
  obsEstrutura?: string;

  // Necessidades Técnicas — Fachada e Visual
  frenteMinimaM?: number;
  tipoFachada?: string;
  comunicacaoVisualLed?: boolean;
  obsFachada?: string;

  // Necessidades Técnicas — TI e Telecom
  pontosDados?: number;
  necessitaFibra?: boolean;
  obsTelecom?: string;

  // Necessidades Técnicas — Controle
  statusNecessidadesTecnicas?: string;
  responsavelTecnico?: string;
  dataVistoria?: string;

  // NOVOS campos — aba Cessão de Direitos (ativa somente se tipoOperacao = 'Cessão' | 'Transferência')
  resSperataProposta?: number;                // valor total proposto (input)
  resSperataPropostaPorM2?: number;           // calculado
  referenciadeMercadoPorM2?: number;          // referência de mercado (consultado)
  sinalResSperata?: number;
  percentSinalResSperata?: number;            // calculado
  saldoResSperata?: number;                   // calculado
  numParcelasResSperata?: number;
  valorParcelaResSperata?: number;            // calculado
  formaPagamentoSaldoResSperata?: string;
  statusResSperata?: string;
  observacoesResSperata?: string;

  // NOVOS campos — aba Taxa de Transferência (ativa somente se tipoOperacao = 'Transferência')
  ttContratual?: number;
  ttProposta?: number;
  ttPropostaNumAMM?: number;
  diferencaTT?: number;                       // calculado
  percentDescontoTT?: number;                 // calculado
  sinalTT?: number;
  percentSinalTT?: number;                    // calculado
  saldoTT?: number;                           // calculado
  formaPagamentoTT?: string;
  statusTT?: string;
  justificativaTT?: string;
  totalResSperata?: number;                   // calculado
  totalTT?: number;                           // calculado
  totalOperacao?: number;                     // calculado

  // NOVOS campos — aba Parecer do Comitê
  parecerPresidente?: string;
  parecerPresidenteData?: string;
  parecerDiretoriaComp1?: string;
  parecerDiretoriaComp1Data?: string;
  parecerDiretoriaComp2?: string;
  parecerDiretoriaComp2Data?: string;
  parecerSuperintendente?: string;
  parecerSuperintendenteData?: string;
  parecerInNetworking?: string;
  parecerInNetworkingData?: string;
}

// ============================================================
// LOJAS CHAVE COM DADOS COMPLETOS (50 lojas)
// ============================================================
const keyStores: UnidadeInfo[] = [
  // ──── L1 CORREDOR A — MODA ÂNCORA ────
  {
    id: 'L1-001', nome: 'Renner', cnpj: '92.754.738/0001-62', segmento: 'Moda',
    responsavel: 'Marcela Fontana', email: 'marcela.fontana@renner.com.br', telefone: '(62) 3344-5566',
    unidade: 'L1-001', piso: 'P', corredor: 'A', area: 800,
    status: 'Ocupado', faturamentoMedio: 1850000,
    propostas: [
      { id: 'PROP-H-001', data: '10/01/2024', tipo: 'Renovação', valor: 72000, status: 'Aceita', observacao: 'Renovação com reajuste de 8% pelo IGPM' },
      { id: 'PROP-H-002', data: '05/02/2021', tipo: 'Nova Proposta', valor: 62000, status: 'Aceita', observacao: 'Expansão com área adicional de 200m²' },
    ],
  },
  {
    id: 'L1-002', nome: 'C&A', cnpj: '45.242.914/0001-05', segmento: 'Moda',
    responsavel: 'Roberto Siqueira', email: 'roberto.siqueira@cea.com.br', telefone: '(62) 3210-9988',
    unidade: 'L1-002', piso: 'P', corredor: 'A', area: 700,
    status: 'Ocupado', faturamentoMedio: 1420000,
    propostas: [
      { id: 'PROP-H-003', data: '10/04/2026', tipo: 'Renovação', valor: 66000, status: 'Em Negociação', observacao: 'Proposta de renovação com reajuste de 8%' },
      { id: 'PROP-H-004', data: '15/04/2023', tipo: 'Renovação', valor: 61000, status: 'Aceita', observacao: 'Renovação com readequação de área' },
    ],
  },
  {
    id: 'L1-003', nome: 'Riachuelo', cnpj: '33.200.056/0001-28', segmento: 'Moda',
    responsavel: 'Fernanda Leite', email: 'f.leite@riachuelo.com.br', telefone: '(62) 3344-7788',
    unidade: 'L1-003', piso: 'P', corredor: 'A', area: 650,
    status: 'Ocupado', faturamentoMedio: 1280000,
    propostas: [
      { id: 'PROP-H-005', data: '15/11/2023', tipo: 'Renovação', valor: 55000, status: 'Aceita', observacao: 'Negociação rápida, sem pendências' },
    ],
  },
  {
    id: 'L1-004', nome: 'Zara', cnpj: '72.700.786/0001-99', segmento: 'Moda',
    responsavel: 'Ana Paula Rocha', email: 'ana.rocha@zara.com.br', telefone: '(62) 3512-3344',
    unidade: 'L1-004', piso: 'P', corredor: 'A', area: 450,
    status: 'Ocupado', faturamentoMedio: 2100000,
    propostas: [
      { id: 'PROP-H-006', data: '20/01/2025', tipo: 'Nova Proposta', valor: 98000, status: 'Aceita', observacao: 'Nova instalação, ponto premium' },
    ],
  },
  {
    id: 'L1-005', nome: 'H&M', cnpj: '23.613.404/0001-58', segmento: 'Moda',
    responsavel: 'Carlos Matos', email: 'c.matos@hm.com', telefone: '(62) 3212-1100',
    unidade: 'L1-005', piso: 'P', corredor: 'A', area: 500,
    status: 'Ocupado', faturamentoMedio: 1950000,
    propostas: [
      { id: 'PROP-H-007', data: '01/05/2024', tipo: 'Nova Proposta', valor: 88000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-006', nome: 'Arezzo', cnpj: '16.590.234/0001-76', segmento: 'Moda',
    responsavel: 'Beatriz Cardoso', email: 'beatriz.c@arezzo.com.br', telefone: '(62) 3321-5544',
    unidade: 'L1-006', piso: 'P', corredor: 'A', area: 180,
    status: 'Ocupado', faturamentoMedio: 780000,
    propostas: [
      { id: 'PROP-H-008', data: '01/07/2023', tipo: 'Renovação', valor: 32000, status: 'Aceita', observacao: 'Reajuste de 7% acordado' },
    ],
  },
  {
    id: 'L1-007', nome: 'Chilli Beans', cnpj: '04.392.000/0001-22', segmento: 'Moda',
    responsavel: 'Thiago Assunção', email: 'thiago.a@chillibeans.com.br', telefone: '(62) 3301-2200',
    unidade: 'L1-007', piso: 'P', corredor: 'A', area: 80,
    status: 'Ocupado', faturamentoMedio: 390000,
    propostas: [
      { id: 'PROP-H-009', data: '05/04/2026', tipo: 'Renovação', valor: 20000, status: 'Em Negociação', observacao: 'Reajuste proposto de 11%' },
      { id: 'PROP-H-010', data: '28/11/2023', tipo: 'Renovação', valor: 18000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-008', nome: 'Farm', cnpj: '03.799.255/0001-81', segmento: 'Moda',
    responsavel: 'Juliana Prado', email: 'j.prado@farm.com.br', telefone: '(62) 3456-7890',
    unidade: 'L1-008', piso: 'P', corredor: 'A', area: 190,
    status: 'Ocupado', faturamentoMedio: 920000,
    propostas: [
      { id: 'PROP-H-011', data: '10/12/2024', tipo: 'Nova Proposta', valor: 41000, status: 'Aceita', observacao: 'Transferência de outra unidade' },
    ],
  },

  // ──── L1 CORREDOR B — ESPORTES ────
  {
    id: 'L1-031', nome: 'Decathlon', cnpj: '03.471.761/0001-68', segmento: 'Esportes',
    responsavel: 'Pierre Dubois', email: 'pierre.dubois@decathlon.com.br', telefone: '(62) 3600-1200',
    unidade: 'L1-031', piso: 'P', corredor: 'B', area: 1200,
    status: 'Ocupado', faturamentoMedio: 3200000,
    propostas: [
      { id: 'PROP-H-012', data: '01/06/2022', tipo: 'Nova Proposta', valor: 95000, status: 'Aceita', observacao: 'Âncora esportiva exclusiva para o piso 1' },
    ],
  },
  {
    id: 'L1-032', nome: 'Centauro', cnpj: '42.830.506/0001-65', segmento: 'Esportes',
    responsavel: 'Márcio Silveira', email: 'm.silveira@centauro.com.br', telefone: '(62) 3412-3344',
    unidade: 'L1-032', piso: 'P', corredor: 'B', area: 400,
    status: 'Ocupado', faturamentoMedio: 1350000,
    propostas: [
      { id: 'PROP-H-013', data: '10/02/2024', tipo: 'Renovação', valor: 52000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-033', nome: 'Nike Store', cnpj: '56.998.476/0001-10', segmento: 'Esportes',
    responsavel: 'Lucas Andrade', email: 'lucas.a@nike.com', telefone: '(62) 3400-1122',
    unidade: 'L1-033', piso: 'P', corredor: 'B', area: 250,
    status: 'Ocupado', faturamentoMedio: 1100000,
    propostas: [
      { id: 'PROP-H-014', data: '01/08/2023', tipo: 'Renovação', valor: 68000, status: 'Aceita', observacao: 'Reajuste de 9% negociado' },
    ],
  },
  {
    id: 'L1-034', nome: 'Adidas', cnpj: '61.088.094/0001-57', segmento: 'Esportes',
    responsavel: 'Claudia Becker', email: 'claudia.b@adidas.com', telefone: '(62) 3501-4455',
    unidade: 'L1-034', piso: 'P', corredor: 'B', area: 230,
    status: 'Ocupado', faturamentoMedio: 890000,
    propostas: [
      { id: 'PROP-H-015', data: '15/03/2024', tipo: 'Nova Proposta', valor: 58000, status: 'Aceita' },
    ],
  },

  // ──── L1 CORREDOR C — SERVIÇOS ────
  {
    id: 'L1-061', nome: 'Bradesco', cnpj: '60.746.948/0001-12', segmento: 'Serviços',
    responsavel: 'Rafael Monteiro', email: 'rafael.monteiro@bradesco.com.br', telefone: '(62) 3100-5000',
    unidade: 'L1-061', piso: 'P', corredor: 'C', area: 120,
    status: 'Ocupado', faturamentoMedio: 0,
    propostas: [
      { id: 'PROP-H-016', data: '02/04/2026', tipo: 'Renovação', valor: 31000, status: 'Em Análise', observacao: 'Banco solicita prazo de análise interna de 30 dias' },
      { id: 'PROP-H-017', data: '20/11/2020', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-062', nome: 'Itaú Uniclass', cnpj: '60.872.504/0001-23', segmento: 'Serviços',
    responsavel: 'Vanessa Torres', email: 'vanessa.torres@itau.com.br', telefone: '(62) 3300-7788',
    unidade: 'L1-062', piso: 'P', corredor: 'C', area: 100,
    status: 'Ocupado', faturamentoMedio: 0,
    propostas: [
      { id: 'PROP-H-018', data: '01/06/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita', observacao: 'Renovação antecipada com ajuste' },
    ],
  },
  {
    id: 'L1-063', nome: 'Claro', cnpj: '40.432.544/0001-47', segmento: 'Serviços',
    responsavel: 'Diego Nascimento', email: 'd.nascimento@claro.com.br', telefone: '(62) 3400-2020',
    unidade: 'L1-063', piso: 'P', corredor: 'C', area: 70,
    status: 'Ocupado', faturamentoMedio: 420000,
    propostas: [
      { id: 'PROP-H-019', data: '05/04/2026', tipo: 'Renovação', valor: 20500, status: 'Pendente', observacao: 'Aguardando aprovação interna da operadora' },
      { id: 'PROP-H-020', data: '01/01/2023', tipo: 'Nova Proposta', valor: 19000, status: 'Aceita' },
    ],
  },

  // ──── L2 CORREDOR A — ELETRÔNICOS ────
  {
    id: 'L2-001', nome: 'Fast Shop', cnpj: '61.797.924/0001-67', segmento: 'Eletrônicos',
    responsavel: 'Marcus Ribeiro', email: 'marcus.ribeiro@fastshop.com.br', telefone: '(62) 3600-3344',
    unidade: 'L2-001', piso: 'S', corredor: 'A', area: 350,
    status: 'Ocupado', faturamentoMedio: 2800000,
    propostas: [
      { id: 'PROP-H-021', data: '01/04/2024', tipo: 'Renovação', valor: 75000, status: 'Aceita', observacao: 'Fidelização de lojista âncora' },
    ],
  },
  {
    id: 'L2-002', nome: 'Apple Store', cnpj: '00.015.477/0001-00', segmento: 'Eletrônicos',
    responsavel: 'Jennifer Kim', email: 'jennifer.kim@apple.com', telefone: '(62) 3700-7777',
    unidade: 'L2-002', piso: 'S', corredor: 'A', area: 280,
    status: 'Ocupado', faturamentoMedio: 5500000,
    propostas: [
      { id: 'PROP-H-022', data: '20/06/2023', tipo: 'Nova Proposta', valor: 150000, status: 'Aceita', observacao: 'Negociação estratégica com selo de loja certificada Apple' },
    ],
  },
  {
    id: 'L2-003', nome: 'Samsung Experience', cnpj: '17.901.255/0001-49', segmento: 'Eletrônicos',
    responsavel: 'Min Jun Park', email: 'minjun.park@samsung.com', telefone: '(62) 3500-5500',
    unidade: 'L2-003', piso: 'S', corredor: 'A', area: 200,
    status: 'Ocupado', faturamentoMedio: 2200000,
    propostas: [
      { id: 'PROP-H-023', data: '01/11/2024', tipo: 'Nova Proposta', valor: 82000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-004', nome: 'Magazine Luiza', cnpj: '47.960.950/0001-21', segmento: 'Eletrônicos',
    responsavel: 'Priscila Madureira', email: 'p.madureira@magazineluiza.com.br', telefone: '(62) 3800-1234',
    unidade: 'L2-004', piso: 'S', corredor: 'A', area: 500,
    status: 'Ocupado', faturamentoMedio: 3100000,
    propostas: [
      { id: 'PROP-H-024', data: '01/11/2021', tipo: 'Nova Proposta', valor: 68000, status: 'Aceita' },
    ],
  },

  // ──── L2 CORREDOR B — BELEZA / MODA ────
  {
    id: 'L2-031', nome: 'O Boticário', cnpj: '75.659.658/0001-83', segmento: 'Outros',
    responsavel: 'Ana Lima', email: 'ana.lima@boticario.com.br', telefone: '(62) 3233-4455',
    unidade: 'L2-031', piso: 'S', corredor: 'B', area: 150,
    status: 'Ocupado', faturamentoMedio: 680000,
    propostas: [
      { id: 'PROP-H-025', data: '10/01/2024', tipo: 'Renovação', valor: 34000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-032', nome: 'Natura', cnpj: '71.673.990/0001-77', segmento: 'Outros',
    responsavel: 'Carla Soares', email: 'carla.soares@natura.net', telefone: '(62) 3301-4488',
    unidade: 'L2-032', piso: 'S', corredor: 'B', area: 140,
    status: 'Ocupado', faturamentoMedio: 620000,
    propostas: [
      { id: 'PROP-H-026', data: '01/04/2025', tipo: 'Renovação', valor: 31000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-033', nome: 'Starbucks Reserve', cnpj: '08.164.083/0001-48', segmento: 'Alimentação',
    responsavel: 'Rodrigo Campos', email: 'r.campos@starbucks.com.br', telefone: '(62) 3441-2200',
    unidade: 'L2-033', piso: 'S', corredor: 'B', area: 200,
    status: 'Ocupado', faturamentoMedio: 1100000,
    propostas: [
      { id: 'PROP-H-027', data: '10/04/2026', tipo: 'Readequação', valor: 48000, status: 'Em Negociação', observacao: 'Proposta de aumento de área com novo contrato' },
      { id: 'PROP-H-028', data: '01/07/2024', tipo: 'Nova Proposta', valor: 45000, status: 'Aceita', observacao: 'Primeiro Starbucks Reserve de Goiânia' },
    ],
  },
  {
    id: 'L2-034', nome: 'Uniqlo', cnpj: '32.521.444/0001-39', segmento: 'Moda',
    responsavel: 'Yuki Tanaka', email: 'y.tanaka@uniqlo.com', telefone: '(62) 3600-4400',
    unidade: 'L2-034', piso: 'S', corredor: 'B', area: 600,
    status: 'Ocupado', faturamentoMedio: 2800000,
    propostas: [
      { id: 'PROP-H-029', data: '01/12/2024', tipo: 'Nova Proposta', valor: 110000, status: 'Aceita', observacao: 'Primeira loja em Goiânia — exclusividade por 5 anos' },
    ],
  },

  // ──── L2 CORREDOR C — SERVIÇOS / ENTRETENIMENTO ────
  {
    id: 'L2-061', nome: 'Smart Fit', cnpj: '21.386.077/0001-27', segmento: 'Serviços',
    responsavel: 'Felipe Gomes', email: 'felipe.gomes@smartfit.com.br', telefone: '(62) 3800-9900',
    unidade: 'L2-061', piso: 'S', corredor: 'C', area: 800,
    status: 'Ocupado', faturamentoMedio: 580000,
    propostas: [
      { id: 'PROP-H-030', data: '01/04/2023', tipo: 'Nova Proposta', valor: 48000, status: 'Aceita', observacao: 'Contrato longo prazo 5 anos com reajuste anual IGPM' },
    ],
  },
  {
    id: 'L2-063', nome: 'Cinemark', cnpj: '62.578.458/0001-60', segmento: 'Entretenimento',
    responsavel: 'Sandra Almeida', email: 's.almeida@cinemark.com.br', telefone: '(62) 3900-1100',
    unidade: 'L2-063', piso: 'S', corredor: 'C', area: 2500,
    status: 'Ocupado', faturamentoMedio: 4200000,
    propostas: [
      { id: 'PROP-H-031', data: '01/10/2018', tipo: 'Nova Proposta', valor: 180000, status: 'Aceita', observacao: 'Contrato âncora de entretenimento 10 anos' },
    ],
  },

  // ──── L3 CORREDOR A — PRAÇA DE ALIMENTAÇÃO ────
  {
    id: 'L3-001', nome: "McDonald's", cnpj: '47.079.633/0001-01', segmento: 'Alimentação',
    responsavel: 'Renata Freitas', email: 'renata.freitas@mcdonalds.com.br', telefone: '(62) 3312-5500',
    unidade: 'L3-001', piso: 'T', corredor: 'A', area: 320,
    status: 'Ocupado', faturamentoMedio: 2900000,
    propostas: [
      { id: 'PROP-H-032', data: '01/02/2022', tipo: 'Renovação', valor: 90000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-002', nome: 'Outback Steakhouse', cnpj: '15.110.258/0001-45', segmento: 'Alimentação',
    responsavel: 'George Mitchell', email: 'george.mitchell@outback.com.br', telefone: '(62) 3500-2200',
    unidade: 'L3-002', piso: 'T', corredor: 'A', area: 400,
    status: 'Ocupado', faturamentoMedio: 3500000,
    propostas: [
      { id: 'PROP-H-033', data: '01/06/2024', tipo: 'Renovação', valor: 105000, status: 'Aceita', observacao: 'Expansão de área de 350 para 400m²' },
      { id: 'PROP-H-034', data: '15/04/2026', tipo: 'Readequação', valor: 115000, status: 'Em Negociação', observacao: 'Proposta de nova expansão + reforma da cozinha' },
    ],
  },
  {
    id: 'L3-003', nome: 'Subway', cnpj: '11.080.473/0001-35', segmento: 'Alimentação',
    responsavel: 'Carlos Junior', email: 'carlosjr@subway.com.br', telefone: '(62) 3212-8899',
    unidade: 'L3-003', piso: 'T', corredor: 'A', area: 120,
    status: 'Ocupado', faturamentoMedio: 480000,
    propostas: [
      { id: 'PROP-H-035', data: '20/11/2023', tipo: 'Nova Proposta', valor: 22000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-004', nome: 'Burger King', cnpj: '13.574.594/0001-96', segmento: 'Alimentação',
    responsavel: 'Marcos Tavares', email: 'marcos.tavares@burgerking.com.br', telefone: '(62) 3444-5566',
    unidade: 'L3-004', piso: 'T', corredor: 'A', area: 280,
    status: 'Ocupado', faturamentoMedio: 1800000,
    propostas: [
      { id: 'PROP-H-036', data: '08/04/2026', tipo: 'Renovação', valor: 82000, status: 'Em Negociação', observacao: 'Negociação com pedido de desconto pela inflação do setor' },
      { id: 'PROP-H-037', data: '01/05/2023', tipo: 'Nova Proposta', valor: 75000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-005', nome: 'Fogo de Chão', cnpj: '09.386.049/0001-27', segmento: 'Alimentação',
    responsavel: 'Alessandro Moura', email: 'a.moura@fogodechao.com.br', telefone: '(62) 3600-8800',
    unidade: 'L3-005', piso: 'T', corredor: 'A', area: 500,
    status: 'Ocupado', faturamentoMedio: 4800000,
    propostas: [
      { id: 'PROP-H-038', data: '01/09/2023', tipo: 'Nova Proposta', valor: 135000, status: 'Aceita', observacao: 'Âncora premium da praça de alimentação' },
    ],
  },
  {
    id: 'L3-006', nome: "Bob's", cnpj: '14.982.647/0001-52', segmento: 'Alimentação',
    responsavel: 'Samir Couto', email: 'samir.couto@bobs.com.br', telefone: '(62) 3200-9900',
    unidade: 'L3-006', piso: 'T', corredor: 'A', area: 140,
    status: 'Ocupado', faturamentoMedio: 560000,
    propostas: [
      { id: 'PROP-H-039', data: '01/12/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-007', nome: 'Giraffas', cnpj: '52.148.007/0001-73', segmento: 'Alimentação',
    responsavel: 'Vanessa Rezende', email: 'v.rezende@giraffas.com.br', telefone: '(62) 3400-7711',
    unidade: 'L3-007', piso: 'T', corredor: 'A', area: 160,
    status: 'Ocupado', faturamentoMedio: 490000,
    propostas: [
      { id: 'PROP-H-040', data: '01/02/2023', tipo: 'Nova Proposta', valor: 20000, status: 'Aceita' },
    ],
  },

  // ──── L3 CORREDOR B — ALIMENTAÇÃO / VARIEDADES ────
  {
    id: 'L3-028', nome: 'Pizza Hut', cnpj: '10.490.715/0001-01', segmento: 'Alimentação',
    responsavel: 'Paulo Mendes', email: 'paulo.mendes@pizzahut.com.br', telefone: '(62) 3512-9900',
    unidade: 'L3-028', piso: 'T', corredor: 'B', area: 200,
    status: 'Ocupado', faturamentoMedio: 820000,
    propostas: [
      { id: 'PROP-H-041', data: '01/03/2024', tipo: 'Nova Proposta', valor: 38000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-029', nome: 'KFC', cnpj: '17.311.723/0001-92', segmento: 'Alimentação',
    responsavel: 'Anderson Rocha', email: 'anderson.rocha@kfc.com.br', telefone: '(62) 3312-4455',
    unidade: 'L3-029', piso: 'T', corredor: 'B', area: 180,
    status: 'Ocupado', faturamentoMedio: 750000,
    propostas: [
      { id: 'PROP-H-042', data: '01/11/2024', tipo: 'Nova Proposta', valor: 35000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-030', nome: 'Spoleto', cnpj: '05.351.939/0001-18', segmento: 'Alimentação',
    responsavel: 'Rita Cardoso', email: 'rita.cardoso@spoleto.com.br', telefone: '(62) 3400-5544',
    unidade: 'L3-030', piso: 'T', corredor: 'B', area: 130,
    status: 'Ocupado', faturamentoMedio: 540000,
    propostas: [
      { id: 'PROP-H-043', data: '01/05/2024', tipo: 'Renovação', valor: 24000, status: 'Aceita' },
    ],
  },

  // ──── L3 CORREDOR C — VAREJO DIVERSO ────
  {
    id: 'L3-055', nome: 'Tok&Stok', cnpj: '07.620.072/0001-61', segmento: 'Outros',
    responsavel: 'Isabella Ferreira', email: 'isabella.ferreira@tokstok.com.br', telefone: '(62) 3600-7766',
    unidade: 'L3-055', piso: 'T', corredor: 'C', area: 400,
    status: 'Ocupado', faturamentoMedio: 980000,
    propostas: [
      { id: 'PROP-H-044', data: '01/02/2024', tipo: 'Nova Proposta', valor: 42000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-056', nome: 'Livraria Cultura', cnpj: '60.665.981/0001-93', segmento: 'Outros',
    responsavel: 'Eduardo Braga', email: 'e.braga@livrariacultura.com.br', telefone: '(62) 3301-9988',
    unidade: 'L3-056', piso: 'T', corredor: 'C', area: 350,
    status: 'Ocupado', faturamentoMedio: 620000,
    propostas: [
      { id: 'PROP-H-045', data: '05/04/2026', tipo: 'Renovação', valor: 29000, status: 'Pendente', observacao: 'Aguardando definição interna sobre fechamento de filiais' },
      { id: 'PROP-H-046', data: '01/04/2022', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-057', nome: 'CVC Viagens', cnpj: '10.760.260/0001-19', segmento: 'Serviços',
    responsavel: 'Tatiane Moreira', email: 'tatiane.moreira@cvc.com.br', telefone: '(62) 3312-3344',
    unidade: 'L3-057', piso: 'T', corredor: 'C', area: 80,
    status: 'Ocupado', faturamentoMedio: 350000,
    propostas: [
      { id: 'PROP-H-047', data: '01/01/2025', tipo: 'Renovação', valor: 16000, status: 'Aceita' },
    ],
  },

  // UNIDADES DISPONÍVEIS
  {
    id: 'L1-023', nome: '', cnpj: '', segmento: 'Moda', responsavel: '', email: '', telefone: '',
    unidade: 'L1-023', piso: 'P', corredor: 'A', area: 85,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L1-047', nome: '', cnpj: '', segmento: 'Esportes', responsavel: '', email: '', telefone: '',
    unidade: 'L1-047', piso: 'P', corredor: 'B', area: 120,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L1-068', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'L1-068', piso: 'P', corredor: 'C', area: 70,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L2-015', nome: '', cnpj: '', segmento: 'Eletrônicos', responsavel: '', email: '', telefone: '',
    unidade: 'L2-015', piso: 'S', corredor: 'A', area: 100,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L2-039', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'L2-039', piso: 'S', corredor: 'B', area: 90,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L2-062', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'L2-062', piso: 'S', corredor: 'C', area: 95,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L3-008', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-008', piso: 'T', corredor: 'A', area: 100,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L3-031', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-031', piso: 'T', corredor: 'B', area: 90,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L3-054', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-054', piso: 'T', corredor: 'B', area: 80,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
  {
    id: 'L3-072', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'L3-072', piso: 'T', corredor: 'C', area: 85,
    status: 'Disponível', faturamentoMedio: 0,
    propostas: [],
  },
];

// ============================================================
// GERADOR DE LOJAS GENÉRICAS (para completar 260 total)
// ============================================================
const brandsBySegment: Record<string, string[]> = {
  Moda: ['Marisa', 'Pernambucanas', 'GAP', 'Calvin Klein', 'Tommy Hilfiger', 'Lacoste', 'Guess', 'Lupo', 'Anacapri', 'Shoulder', 'Dudalina', 'Richards', 'Aeropostale', 'Levi\'s', 'Diesel', 'Ellus', 'Colcci', 'Cia Marítima', 'Morena Rosa', 'Damyller', 'Malwee', 'Hering Kids', 'Puket', 'Lilica Ripilica', 'Tip Top', 'Vert', 'Quem Disse Berenice', 'MMartan', 'Lojas Renner Infantil', 'Brooksfield'],
  Alimentação: ['Habibs', 'Ragazzo', 'China in Box', "Domino's", "Bob's Express", 'Frango Assado', 'The Fifties', 'Galeto Brasil', 'Vivenda do Camarão', 'Camarão & Cia', 'Bendito Hamburger', 'Coco Bambu', 'Madero', 'Montana Grill', 'Jerônimo', 'Mania de Churrasco', 'Frango Frito Brasil', 'Super Frango', 'Gendai', 'Oriental Mix'],
  Serviços: ['Localiza Rent a Car', 'Kalunga', 'Claro Mais', 'Tim Store', 'Oi Store', 'Óticas Carol', 'Óticas Diniz', 'Lensovision', 'Ortopé', 'Hair Brasil', 'Bio Ritmo', 'Salão Premium', 'Lavanderia 5àSec', 'Photo Studio', 'CVC Express', 'Caixa Econômica Federal'],
  Eletrônicos: ['Kabum', 'Dell', 'Lenovo Store', 'Mundo Conectado', 'Phone Lab', 'iPlace', 'TIM Store Tech', 'Positivo'],
  Esportes: ['Asics', 'New Balance', 'Penalty', 'Speedo', 'Track&Field', 'Olympikus', 'Under Armour', 'Mizuno', 'Fila', 'Umbro'],
  Entretenimento: ['Wizard Idiomas', 'Camelot Games', 'PlayShop', 'Game Over'],
  Outros: ['FNAC', 'Kalunga Express', 'Lojas Americanas Express', 'Papelaria Brasil', 'Presentes & Cia', 'Casa das Flores', 'Biju Mania', 'Mundo dos Acessórios', 'Relógios Brasil', 'Joalheria Prata'],
};

const responsaveis = ['João Alves', 'Maria Santos', 'Pedro Costa', 'Ana Oliveira', 'Carlos Lima', 'Fernanda Melo', 'Rafael Sousa', 'Juliana Neves', 'Marcos Rocha', 'Camila Dias', 'Bruno Pires', 'Larissa Figueiredo', 'Diego Castro', 'Patricia Cunha', 'Rodrigo Borges'];
const segmentos: Segmento[] = ['Moda', 'Alimentação', 'Serviços', 'Eletrônicos', 'Esportes', 'Entretenimento', 'Outros'];

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateStore(piso: Piso, corredor: Corredor, num: number, seed: number): UnidadeInfo {
  const r = (offset = 0) => seededRandom(seed * 17 + offset);
  const seg: Segmento = piso === 'T' ? 'Alimentação' : segmentos[Math.floor(r(1) * segmentos.length)];
  const brands = brandsBySegment[seg] || brandsBySegment['Outros'];
  const nome = brands[Math.floor(r(2) * brands.length)];
  const area = Math.floor(r(3) * 300) + 60;
  const aluguel = Math.floor((area * (r(4) * 150 + 100)) / 100) * 100;
  const fatur = aluguel * (Math.floor(r(5) * 15) + 5);
  const resp = responsaveis[Math.floor(r(8) * responsaveis.length)];
  const unitStr = `${piso}-${String(num).padStart(3, '0')}`;
  const cnpjNum = Math.floor(r(9) * 99999999) + 10000000;

  return {
    id: unitStr,
    nome,
    cnpj: `${String(cnpjNum).slice(0, 2)}.${String(cnpjNum).slice(2, 5)}.${String(cnpjNum).slice(5, 8)}/0001-${String(Math.floor(r(13) * 89) + 10)}`,
    segmento: seg,
    responsavel: resp,
    email: `${resp.toLowerCase().replace(' ', '.')}@${nome.toLowerCase().replace(/\s+/g, '')}.com.br`,
    telefone: `(62) 3${String(Math.floor(r(14) * 900) + 100)}-${String(Math.floor(r(15) * 9000) + 1000)}`,
    unidade: unitStr,
    piso,
    corredor,
    area,
    status: STATUS_OCUPADO,
    faturamentoMedio: fatur,
    propostas: [{
      id: `PROP-GEN-${seed}`,
      data: '01/01/2024',
      tipo: 'Nova Proposta',
      valor: aluguel,
      status: STATUS_APROVADO,
    }],
  };
}

// ============================================================
// MONTAR BANCO COMPLETO DE 260 UNIDADES
// ============================================================
const keyIds = new Set(keyStores.map(s => s.id));

function buildFloor(piso: Piso, totalUnits: number): UnidadeInfo[] {
  const stores: UnidadeInfo[] = [];
  for (let i = 1; i <= totalUnits; i++) {
    const corredor: Corredor = i <= Math.floor(totalUnits / 3) ? 'A' : i <= Math.floor((totalUnits * 2) / 3) ? 'B' : 'C';
    const unitStr = `${piso}-${String(i).padStart(3, '0')}`;
    if (!keyIds.has(unitStr)) {
      const seedBase = (piso === 'P' ? 1000 : piso === 'S' ? 2000 : 3000) + i;
      stores.push(generateStore(piso, corredor, i, seedBase));
    }
  }
  return stores;
}

const generatedStores = [
  ...buildFloor('P', 90),
  ...buildFloor('S', 90),
  ...buildFloor('T', 80),
];

export const allUnidadesInfo: UnidadeInfo[] = [...keyStores, ...generatedStores].sort((a, b) =>
  a.unidade.localeCompare(b.unidade)
);

// ============================================================
// PROPOSTAS ATIVAS (para aba Propostas)
// ============================================================
export const propostasAtivas: Proposta[] = [
  { id: 'PROP-2026-001', lojistaId: 'L1-002', lojista: 'C&A', unidade: 'L1-002', segmento: 'Moda', tipo: 'Renovação', valorProposto: 66000, area: 700, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '10/04/2026', dataVencimento: '30/05/2026', observacoes: 'Proposta de renovação com reajuste de 8% sobre IPCA. Lojista solicita menor percentual de faturamento.' },
  { id: 'PROP-2026-002', lojistaId: undefined, lojista: 'Zara Home (Novo)', unidade: 'L2-039', segmento: 'Outros', tipo: 'Nova Instalação', valorProposto: 38000, area: 90, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '08/04/2026', dataVencimento: '15/05/2026', observacoes: 'Grupo Inditex propõe inaugurar Zara Home na unidade disponível L2-039.' },
  { id: 'PROP-2026-003', lojistaId: 'L3-004', lojista: 'Burger King', unidade: 'L3-004', segmento: 'Alimentação', tipo: 'Renovação', valorProposto: 82000, area: 280, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '08/04/2026', dataVencimento: '05/06/2026', observacoes: 'BK solicita desconto de 5% alegando retração do setor de fast food.' },
  { id: 'PROP-2026-004', lojistaId: undefined, lojista: 'Espaço Gourmet Premium', unidade: 'L3-008', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 45000, area: 100, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '07/04/2026', dataVencimento: '22/05/2026', observacoes: 'Novo conceito de restaurante premium. Aguardando documentação do licitante.' },
  { id: 'PROP-2026-005', lojistaId: 'L2-033', lojista: 'Starbucks Reserve', unidade: 'L2-033', segmento: 'Alimentação', tipo: 'Readequação', valorProposto: 48000, area: 220, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '05/04/2026', dataVencimento: '25/05/2026', observacoes: 'Proposta de expansão de 200 para 220m² com novo layout de balcão.' },
  { id: 'PROP-2026-006', lojistaId: undefined, lojista: 'Tech World', unidade: 'L2-015', segmento: 'Eletrônicos', tipo: 'Nova Instalação', valorProposto: 52000, area: 100, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '04/04/2026', dataVencimento: '20/05/2026', observacoes: 'Franquia nacional de acessórios e dispositivos tech.' },
  { id: 'PROP-2026-007', lojistaId: 'L1-007', lojista: 'Chilli Beans', unidade: 'L1-007', segmento: 'Moda', tipo: 'Renovação', valorProposto: 20000, area: 80, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '01/04/2026', dataVencimento: '15/05/2026', observacoes: 'Reajuste de 11% proposto. Lojista contrapropôs 7%.' },
  { id: 'PROP-2026-008', lojistaId: undefined, lojista: 'Academia Forma Perfeita', unidade: 'L2-062', segmento: 'Serviços', tipo: 'Nova Instalação', valorProposto: 35000, area: 95, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '01/04/2026', dataVencimento: '10/05/2026', observacoes: 'Proposta de academia boutique para complementar Smart Fit.' },
  { id: 'PROP-2026-009', lojistaId: 'L1-061', lojista: 'Bradesco', unidade: 'L1-061', segmento: 'Serviços', tipo: 'Renovação', valorProposto: 31000, area: 120, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '02/04/2026', dataVencimento: '20/05/2026', observacoes: 'Banco pede 30 dias para análise interna.' },
  { id: 'PROP-2026-010', lojistaId: 'L3-056', lojista: 'Livraria Cultura', unidade: 'L3-056', segmento: 'Outros', tipo: 'Renovação', valorProposto: 29000, area: 350, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '30/03/2026', dataVencimento: '10/05/2026', observacoes: 'Lojista avalia fechamento de unidades. Decisão pendente.' },
  { id: 'PROP-2026-011', lojistaId: undefined, lojista: 'Studio Z', unidade: 'L1-023', segmento: 'Moda', tipo: 'Nova Instalação', valorProposto: 24000, area: 85, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '28/03/2026', dataVencimento: '12/05/2026', observacoes: 'Rede jovem de moda street wear.' },
  { id: 'PROP-2026-012', lojistaId: undefined, lojista: 'Healthy Bowl', unidade: 'L3-031', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 28000, area: 90, status: 'Aprovado', responsavel: 'Gerência Comercial', dataCriacao: '20/03/2026', dataVencimento: '20/04/2026', observacoes: 'Aceite confirmado. Obras autorizadas para início em 25/04.' },
  { id: 'PROP-2026-013', lojistaId: 'L1-063', lojista: 'Claro', unidade: 'L1-063', segmento: 'Serviços', tipo: 'Renovação', valorProposto: 20500, area: 70, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '15/03/2026', dataVencimento: '01/05/2026', observacoes: 'Aguardando retorno da operadora após envio de proposta.' },
  { id: 'PROP-2026-014', lojistaId: undefined, lojista: 'Grão Expresso', unidade: 'L3-054', segmento: 'Alimentação', tipo: 'Nova Instalação', valorProposto: 22000, area: 80, status: 'Aprovado', responsavel: 'Gerência Comercial', dataCriacao: '10/03/2026', dataVencimento: '10/04/2026', observacoes: 'Cafeteria artesanal. Contrato assinado em 15/03.' },
  { id: 'PROP-2026-015', lojistaId: 'L3-002', lojista: 'Outback Steakhouse', unidade: 'L3-002', segmento: 'Alimentação', tipo: 'Readequação', valorProposto: 115000, area: 420, status: 'Aguardando análise do comitê', responsavel: 'Gerência Comercial', dataCriacao: '15/04/2026', dataVencimento: '15/05/2026', observacoes: 'Proposta de expansão para 420m² incluindo nova cozinha industrial.' },
  { id: 'PROP-2026-016', lojistaId: undefined, lojista: 'Havaianas Flagship', unidade: 'L1-047', segmento: 'Moda', tipo: 'Nova Instalação', valorProposto: 32000, area: 120, status: 'Aguardando análise financeira', responsavel: 'Gerência Comercial', dataCriacao: '12/04/2026', dataVencimento: '25/05/2026', observacoes: 'Proposta de loja flagship premium. Havaianas avaliando layout.' },
  { id: 'PROP-2026-017', lojistaId: undefined, lojista: 'Mundo Digital', unidade: 'L3-072', segmento: 'Outros', tipo: 'Nova Instalação', valorProposto: 18000, area: 85, status: 'Reprovado', responsavel: 'Gerência Comercial', dataCriacao: '01/03/2026', dataVencimento: '01/04/2026', observacoes: 'Perfil comercial inadequado para o posicionamento do mall.' },
  { id: 'PROP-2026-018', lojistaId: 'L1-002', lojista: 'C&A (Readequação)', unidade: 'L1-002', segmento: 'Moda', tipo: 'Readequação', valorProposto: 58000, area: 600, status: 'Cancelado', responsavel: 'Gerência Comercial', dataCriacao: '01/01/2026', dataVencimento: '01/03/2026', observacoes: 'Proposta de redução de área não aceita dentro do prazo.' },
];

// ============================================================
// HELPERS
// ============================================================
export const TOTAL_UNIDADES = 260;
export const UNIDADES_OCUPADAS = allUnidadesInfo.filter(l => l.status === STATUS_OCUPADO).length;
export const UNIDADES_DISPONIVEIS = allUnidadesInfo.filter(l => l.status === STATUS_DISPONIVEL).length;
export const TAXA_OCUPACAO = Math.round((UNIDADES_OCUPADAS / TOTAL_UNIDADES) * 100 * 10) / 10;

export const segmentoCores: Record<Segmento, string> = {
  Moda: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
  Alimentação: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
  Serviços: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  Eletrônicos: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300',
  Esportes: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  Entretenimento: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
  Outros: 'bg-gray-100 text-gray-700 dark:bg-gray-800/60 dark:text-gray-300',
};

export const segmentoDotCores: Record<Segmento, string> = {
  Moda: 'bg-purple-500',
  Alimentação: 'bg-orange-500',
  Serviços: 'bg-blue-500',
  Eletrônicos: 'bg-cyan-500',
  Esportes: 'bg-green-500',
  Entretenimento: 'bg-pink-500',
  Outros: 'bg-gray-500',
};

export const statusPropostaCores: Record<StatusProposta, string> = {
  'Aguardando análise financeira': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Aguardando análise do comitê': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  Aprovado: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Reprovado: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  Cancelado: 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400',
  Vencida: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Finalizado: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
````

## File: Figma/src/app/data/comercialStore.ts
````typescript
/**
 * comercialStore.ts — Store de estado local (legado de protótipo)
 *
 * CONTEXTO: este arquivo é um resquício da fase inicial do protótipo,
 * quando os dados eram mantidos em memória (arrays JavaScript mutáveis)
 * em vez de virem da API. As telas principais já NÃO usam mais este store
 * — buscam dados da API via useApi + Services.
 *
 * O que ainda está em uso:
 *  getUserSession()     — lido pelo Layout.tsx para exibir nome/e-mail
 *                         do usuário na sidebar
 *  setUserSession()     — chamado pelo AuthContext ao fazer login
 *  getEdicoesByProposal() — chamado pelo useComercialReports para o
 *                           histórico de edições (retorna [] por ora)
 *  PropostaEdicao (tipo) — usado pelo PropostaManutencaoModal para
 *                          tipar o histórico de snapshots
 *
 * O que pode ser removido no futuro:
 *  - propostasAtivas (dados mock)
 *  - funções de CRUD local (criarProposta, atualizarStatusProposta, etc.)
 *  - auditLog (será substituído pelo histórico real da API)
 *
 * Comercial Store — Gerenciamento de estado e operações comerciais
 * Cobre: RF-02, RF-03, RF-05, RF-07, RF-08 | RNF-04, RNF-05 | RN-01 ao RN-05
 */
import { propostasAtivas as initialPropostas } from './comercialData';
import type { Proposta, StatusProposta } from './comercialData';

// ============================================================
// TIPOS
// ============================================================

export interface AuditEntry {
  id: string;
  entityType: 'Proposta';
  entityId: string;
  action: string;
  details: string;
  userId: string;
  userName: string;
  sector: string;
  timestamp: string; // ISO string
}

export interface Documento {
  id: string;
  entityId: string;
  entityType: 'Proposta';
  nome: string;
  tamanho: string;
  tipo: 'PDF' | 'DOCX' | 'XLSX' | 'JPG' | 'PNG';
  dataUpload: string;
  uploadedBy: string;
}

export interface ProposalOverride {
  status: StatusProposta;
  observacoes?: string;
  updatedAt: string;
  updatedBy: string;
}

export interface PropostaEdicao {
  id: string;           // ex: "EDIT-1716900000000"
  proposalId: string;   // ID da proposta original
  snapshot: Proposta;   // cópia completa da proposta ANTES da edição
  editadoEm: string;    // ISO string
  editadoPor: string;
  editadoPorNome: string;
}

// ============================================================
// ESTADO GLOBAL (module-level mutable state)
// ============================================================

let proposalsState: Proposta[] = [...initialPropostas];
const proposalOverrides: Record<string, ProposalOverride> = {};
let auditLog: AuditEntry[] = [];
// Inicializar documentos do localStorage
function loadDocumentosFromStorage(): Documento[] {
  try {
    const saved = localStorage.getItem('jp-mall-documentos');
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
}

function saveDocumentosToStorage(): void {
  try {
    localStorage.setItem('jp-mall-documentos', JSON.stringify(documentos));
  } catch {}
}

let documentos: Documento[] = loadDocumentosFromStorage();
let edicoesProposta: PropostaEdicao[] = [];
let listeners: Set<() => void> = new Set();

// ============================================================
// USER SESSION HELPER
// ============================================================

export function getUserSession(): { email: string; name: string; sector: string } {
  try {
    const s = sessionStorage.getItem('jp-mall-session');
    if (s) return JSON.parse(s);
  } catch {}
  return { email: 'gerente@jpmall.com.br', name: 'Gerente JP Mall', sector: 'Comercial' };
}

export function setUserSession(data: { email: string; name: string; sector: string }): void {
  sessionStorage.setItem('jp-mall-session', JSON.stringify(data));
}

function addAudit(entry: Pick<AuditEntry, 'entityType' | 'entityId' | 'action' | 'details'>): void {
  const user = getUserSession();
  auditLog.unshift({
    ...entry,
    id: `AUD-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
    userId: user.email,
    userName: user.name,
    sector: user.sector,
    timestamp: new Date().toISOString(),
  });
}

function notify(): void {
  listeners.forEach(l => l());
}

// ============================================================
// SUBSCRIPTION
// ============================================================

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// ============================================================
// PROPOSTAS (RF-01, RF-02, RN-02)
// ============================================================

export function getProposals(): Proposta[] {
  return proposalsState.map(p => ({
    ...p,
    ...(proposalOverrides[p.id]
      ? { status: proposalOverrides[p.id].status, observacoes: proposalOverrides[p.id].observacoes }
      : {}),
  }));
}

export function getProposalById(id: string): Proposta | undefined {
  const p = proposalsState.find(p => p.id === id);
  if (!p) return undefined;
  return { ...p, ...(proposalOverrides[id] ? { status: proposalOverrides[id].status } : {}) };
}

export function addProposal(p: Omit<Proposta, 'id'>): Proposta {
  // RN-02: Uma proposta deve possuir um status
  const newP: Proposta = { ...p, id: `PROP-${Date.now()}` };
  if (!newP.status) newP.status = 'Pendente';
  proposalsState = [newP, ...proposalsState];
  addAudit({
    entityType: 'Proposta',
    entityId: newP.id,
    action: 'Nova proposta criada',
    details: `Proposta ${newP.id} criada para ${p.nomeFantasia || '—'} na unidade ${p.unidade}.`,
  });
  notify();
  return newP;
}

export function updateProposalStatus(id: string, newStatus: StatusProposta, obs?: string): boolean {
  const old = getProposalById(id);
  if (!old) return false;
  const user = getUserSession();
  proposalOverrides[id] = {
    status: newStatus,
    observacoes: obs ?? old.observacoes,
    updatedAt: new Date().toISOString(),
    updatedBy: user.name,
  };
  addAudit({
    entityType: 'Proposta',
    entityId: id,
    action: `Status alterado: "${old.status}" → "${newStatus}"`,
    details: obs ?? `Proposta ${id} atualizada para status "${newStatus}".`,
  });
  notify();
  return true;
}


// ============================================================
// DOCUMENTOS (RF-08)
// ============================================================

export function addDocument(doc: Omit<Documento, 'id' | 'dataUpload' | 'uploadedBy'>): Documento {
  const user = getUserSession();
  const d: Documento = {
    ...doc,
    id: `DOC-${Date.now()}`,
    dataUpload: new Date().toLocaleDateString('pt-BR'),
    uploadedBy: user.name,
  };
  documentos.push(d);
  saveDocumentosToStorage();
  addAudit({
    entityType: doc.entityType,
    entityId: doc.entityId,
    action: 'Documento anexado',
    details: `Arquivo "${doc.nome}" (${doc.tipo}) anexado a ${doc.entityType} ${doc.entityId} por ${user.name}.`,
  });
  notify();
  return d;
}

export function getDocumentsByEntity(entityId: string): Documento[] {
  return documentos.filter(d => d.entityId === entityId);
}

export function removeDocument(docId: string): void {
  const doc = documentos.find(d => d.id === docId);
  if (!doc) return;
  documentos = documentos.filter(d => d.id !== docId);
  saveDocumentosToStorage();
  addAudit({
    entityType: doc.entityType,
    entityId: doc.entityId,
    action: 'Documento removido',
    details: `Arquivo "${doc.nome}" removido de ${doc.entityType} ${doc.entityId}.`,
  });
  notify();
}

// ============================================================
// AUDIT LOG (RNF-04, RNF-05)
// ============================================================





// ============================================================
// EDIÇÕES DE PROPOSTA (histórico)
// ============================================================

export function getEdicoesByProposal(proposalId: string): PropostaEdicao[] {
  return edicoesProposta
    .filter(e => e.proposalId === proposalId)
    .sort((a, b) => b.editadoEm.localeCompare(a.editadoEm));
}

export function updateProposalData(
  id: string,
  updates: Partial<Proposta>,
  snapshotAntes?: Proposta  // estado ANTES da edição — fornecido pelo modal via propostaOld
): boolean {
  const idx = proposalsState.findIndex(p => p.id === id);
  if (idx === -1) return false;

  const user = getUserSession();

  // Usar snapshot fornecido pelo modal (propostaOld) se disponível,
  // caso contrário capturar do store como fallback
  const before: Proposta = snapshotAntes ?? getProposalById(id) ?? proposalsState[idx];

  // Salvar histórico com o estado ANTERIOR
  edicoesProposta.push({
    id: `EDIT-${Date.now()}`,
    proposalId: id,
    snapshot: before,
    editadoEm: new Date().toISOString(),
    editadoPor: user.email,
    editadoPorNome: user.name,
  });

  // Aplicar novos dados
  proposalsState[idx] = { ...proposalsState[idx], ...updates };

  addAudit({
    entityType: 'Proposta',
    entityId: id,
    action: 'Proposta editada',
    details: `Dados da proposta ${id} atualizados por ${user.name}.`,
  });

  notify();
  return true;
}
export function getProposalsByUnidade(unidade: string): Proposta[] {
  return getProposals().filter(p => p.unidade === unidade);
}

export function checkAndUpdateVencidas(): void {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  proposalsState.forEach(p => {
    // Somente propostas com status Aprovado podem vencer automaticamente
    const statusAtual = proposalOverrides[p.id]?.status ?? p.status;
    if (statusAtual !== 'Aprovado') return;
    if (!p.dataVencimento) return;

    const parts = p.dataVencimento.split('/');
    if (parts.length !== 3) return;
    const venc = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    venc.setHours(0, 0, 0, 0);

    if (venc < hoje) {
      proposalOverrides[p.id] = {
        ...proposalOverrides[p.id],
        status: 'Vencida',
        updatedAt: new Date().toISOString(),
        updatedBy: 'Sistema',
      };
      addAudit({
        entityType: 'Proposta',
        entityId: p.id,
        action: 'Status atualizado automaticamente: "Aprovado" → "Vencida"',
        details: `Proposta ${p.id} venceu em ${p.dataVencimento} e foi marcada automaticamente como Vencida.`,
      });
    }
  });

  notify();
}
````

## File: Figma/src/app/pages/comercial/ComercialAvailability.tsx
````typescript
/**
 * ComercialAvailability.tsx — View de Disponibilidade de Unidades.
 *
 * Papel na arquitetura MVVM: camada VIEW.
 * Toda lógica está em useComercialAvailability (ViewModel).
 *
 * O que exibe:
 *  - Contadores: total, disponíveis, ocupadas, vencendo em breve
 *  - Filtros: status, piso, intervalo de fim de contrato, vencendo <60 dias
 *  - Toggle: Mapa visual | Tabela
 *
 * MODO MAPA:
 *  - Grade organizada por Piso (P/S/T) e Corredor (A/B/C)
 *  - Cada célula é um UnitBlock (sub-componente interno)
 *  - Unidades disponíveis: borda tracejada vermelha
 *  - Unidades ocupadas: fundo avermelhado com nome da loja
 *  - Badge laranja: contrato vencendo em <60 dias
 *  - Clique: abre DisponibilidadeManutencaoModal
 *
 * MODO TABELA:
 *  - Colunas: unidade, piso, corredor, área, segmento, status,
 *    nome fantasia, fim do contrato, dias restantes
 *  - Filtro por célula e ordenação por clique no cabeçalho
 *
 * UnitBlock: sub-componente local (não exportado) que renderiza
 * uma única célula do mapa. Recebe unidade e todasPropostas para
 * calcular localmente o vencimento sem precisar voltar ao ViewModel.
 */
import type { UnidadeInfo } from "../../data/comercialData";
import { useComercialAvailability } from "../../viewmodels/useComercialAvailability";
import {
  MapPin, Layers, LayoutGrid, Table2, ArrowUp, ArrowDown, Eye, Filter, ChevronDown
} from "lucide-react";
import { DatePickerInput } from "../../components/DatePickerInput";
import { DataTable } from "../../components/DataTable";
import { DisponibilidadeManutencaoModal } from "../../components/DisponibilidadeManutencaoModal";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { PISOS, CORREDORES, CORREDOR_LABEL, STATUS_OCUPADO, STATUS_DISPONIVEL, STATUS_APROVADO, STATUS_VENCIDA } from "../../enums";
import type { Piso } from "../../enums";


function matchColFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = cellValue.toLowerCase();
  const p = pattern.toLowerCase();
  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) return val.endsWith(p.slice(1));
  if (p.endsWith('*') && p.length > 1) return val.startsWith(p.slice(0, -1));
  return val.includes(p);
}

function UnitBlock({
  unidade,
  onSelect,
  todasPropostas,
}: {
  unidade: UnidadeInfo;
  onSelect: (l: UnidadeInfo) => void;
  todasPropostas: any[];
}) {
  const isDisponivel = unidade.status === "Disponível";
  // Buscar proposta aprovada vinculada para obter fim do contrato
  const propostaAprovada = todasPropostas?.find(p =>
    p.codigoUnidade === unidade.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA)
  );
  const diasRestantes = propostaAprovada ? getDiasRestantes(propostaAprovada.fimContrato) : null;
  const isVencendoBreve = diasRestantes !== null && diasRestantes < 60;

  return (
    <button
      onClick={() => onSelect(unidade)}
      className={`
        group relative text-left rounded-xl border-2 p-3 transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.99] min-w-0
        ${isDisponivel
          ? "bg-white dark:bg-[#1A1F2E] border-dashed border-[#D93030]/40 dark:border-[#D93030]/40 hover:border-[#D93030]"
          : "bg-[#D93030]/10 dark:bg-[#D93030]/15 border-[#D93030]/25 dark:border-[#D93030]/30 hover:bg-[#D93030]/15 dark:hover:bg-[#D93030]/20 hover:border-[#D93030]/50"
        }
      `}
    >
      {isVencendoBreve && !isDisponivel && (
        <div
          className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-[#1E2435] z-10"
          title={`Contrato vence em ${diasRestantes} dias`}
        />
      )}

      <div className="flex items-start justify-between gap-1">
        <div className="min-w-0 flex-1">
          {isDisponivel ? (
            <>
              <p className="text-xs font-bold text-[#D93030]">DISPONÍVEL</p>
              <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5">{unidade.unidade}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{unidade.area} m²</p>
            </>
          ) : (
            <>
              <p className="text-xs font-bold text-[#8B1A1A] dark:text-[#F87171] truncate leading-tight">{unidade.nome || unidade.unidade}</p>
              <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-0.5">{unidade.unidade}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{unidade.area} m²</p>
            </>
          )}
        </div>

      </div>
    </button>
  );
}
// Calcula dias restantes até o fim do contrato de uma proposta aprovada vinculada à unidade
function getDiasRestantes(fimContrato: string | undefined): number | null {
  if (!fimContrato) return null;
  // Suporta dd/mm/yyyy ou yyyy-mm-dd
  let date: Date;
  if (fimContrato.includes('/')) {
    const [d, m, y] = fimContrato.split('/');
    date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  } else {
    date = new Date(fimContrato);
  }
  if (isNaN(date.getTime())) return null;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return Math.ceil((date.getTime() - hoje.getTime()) / 86400000);
}



export function ComercialAvailability() {
  const {
    allLojistas, filtered, counts, mapaData, tableRows, todasPropostas,
    loadingUnidades,
    filterStatuses, setFilterStatuses,
    filterPisos, setFilterPisos,
    dateFrom, setDateFrom, dateTo, setDateTo,
    filterVencendo, setFilterVencendo,
    colFilters, setColFilters,
    sortCol, sortDir, toggleSort,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    manutencaoLojista, setManutencaoLojista,
    getDiasRestantes, getPropostaAtual, refetch,
  } = useComercialAvailability();

  return (
    <div className="flex flex-col h-full overflow-hidden gap-4 p-6">
      {/* Header — altura fixa */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Disponibilidade de Unidades</h1>
        </div>
      </div>

      {/* Filtros — desktop: inline | mobile: região expansível independente */}

      {/* Cabeçalho da região — mobile only */}
      <button
        onClick={() => setShowMobileFilters(f => !f)}
        className="sm:hidden flex-shrink-0 w-full flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447]"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#D93030]" />
          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Filtros</span>
          {/* Indicador de filtros ativos */}
          {(dateFrom || dateTo || filterStatuses.length > 0 || filterPisos.length > 0 || filterVencendo) && (
            <span className="w-2 h-2 rounded-full bg-[#D93030]" />
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showMobileFilters ? '' : '-rotate-90'}`} />
      </button>

      {/* Conteúdo dos filtros */}
      {/* Desktop: sempre visível | Mobile: só quando expandido */}
      <div className={`flex-shrink-0 flex-col sm:flex-row sm:items-stretch sm:justify-start gap-0
        ${showMobileFilters ? 'flex' : 'hidden sm:flex'}
        bg-white dark:bg-[#242938] sm:bg-transparent sm:dark:bg-transparent
        rounded-xl sm:rounded-none
        border border-gray-100 dark:border-[#2E3447] sm:border-0
        p-3 sm:p-0`}>

        {/* Fim do contrato */}
        <div className="flex flex-col gap-1 w-full sm:w-auto sm:pr-6 pb-2 sm:pb-0">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Fim do contrato</span>
          <div className="flex items-center gap-1.5 h-9">
            <DatePickerInput value={dateFrom} onChange={setDateFrom} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
            <span className="text-xs text-gray-400 dark:text-[#64748B] whitespace-nowrap flex-shrink-0">até</span>
            <DatePickerInput value={dateTo} onChange={setDateTo} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
          </div>
        </div>

        {/* Separador */}
        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Status */}
        <div className="flex flex-col gap-1 w-full sm:w-auto sm:px-6 pb-2 sm:pb-0">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Status</span>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-x-4 gap-y-2 sm:gap-4 sm:flex-wrap">
              {(['Disponível', 'Ocupado'] as const).map(s => (
                <label key={s} className="flex items-center gap-1.5 cursor-pointer select-none">
                  <div
                    onClick={() => setFilterStatuses(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                    className={`w-4 h-4 border border-gray-400 dark:border-[#64748B] flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                      ${filterStatuses.includes(s) ? 'bg-white dark:bg-[#1A1F2E] text-gray-900 dark:text-[#F1F5F9]' : 'bg-white dark:bg-[#1A1F2E]'}`}
                  >
                    {filterStatuses.includes(s) && 'X'}
                  </div>
                  <span className="text-xs text-gray-700 dark:text-[#CBD5E1] leading-tight">
                    {s} ({allLojistas.filter(l => l.status === s).length})
                  </span>
                </label>
              ))}
            </div>

            {/* Checkbox Próximo do vencimento */}
            <label className="flex items-center gap-1.5 cursor-pointer select-none">
              <div
                onClick={() => setFilterVencendo(prev => !prev)}
                className={`w-4 h-4 border flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                  ${filterVencendo
                    ? 'border-orange-400 bg-white dark:bg-[#1A1F2E] text-orange-500'
                    : 'border-gray-400 dark:border-[#64748B] bg-white dark:bg-[#1A1F2E]'}`}
              >
                {filterVencendo && 'X'}
              </div>
              <span className="text-xs text-gray-700 dark:text-[#CBD5E1] leading-tight flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                Próximo do vencimento (&lt;60 dias)
              </span>
            </label>
          </div>
        </div>

        {/* Separador */}
        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Piso */}
        <EnumCheckboxFilter
          label="Piso"
          options={PISOS.map(p => ({ value: p.value, label: p.labelShort }))}
          selected={filterPisos}
          onToggle={p => setFilterPisos(prev =>
            prev.includes(p as Piso) ? prev.filter(x => x !== p) : [...prev, p as Piso]
          )}
          getCount={p => allLojistas.filter(l => l.piso === p).length}
          mobileGrid="grid-cols-3"
        />

        {/* Separador */}
        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Visualização — desktop only */}
        <div className="hidden sm:flex flex-col gap-1 flex-shrink-0 ml-auto sm:pl-6">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Visualização</span>
          <div className="flex items-center gap-1">
            <button onClick={() => setViewMode('mapa')}
              className={`h-9 px-3 rounded-l-lg border text-xs font-medium flex items-center gap-1.5 transition-colors
                ${viewMode === 'mapa' ? 'bg-[#D93030] text-white border-[#D93030]' : 'bg-white dark:bg-[#1A1F2E] text-gray-600 dark:text-[#94A3B8] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]'}`}>
              <LayoutGrid className="w-3.5 h-3.5" /> Mapa
            </button>
            <button onClick={() => setViewMode('tabela')}
              className={`h-9 px-3 rounded-r-lg border-t border-r border-b text-xs font-medium flex items-center gap-1.5 transition-colors
                ${viewMode === 'tabela' ? 'bg-[#D93030] text-white border-[#D93030]' : 'bg-white dark:bg-[#1A1F2E] text-gray-600 dark:text-[#94A3B8] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]'}`}>
              <Table2 className="w-3.5 h-3.5" /> Tabela
            </button>
          </div>
        </div>
      </div>

      {/* Área de listagem */}
      <div className="flex-1 overflow-hidden bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex flex-col">

        {/* Contador */}
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex-shrink-0 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
            {filtered.length} unidade{filtered.length !== 1 ? 's' : ''}
          </span>
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500 dark:text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm border-2 border-dashed border-[#D93030]/50" />
              {counts.disponiveis} disponíveis
            </span>
            <span className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#D93030]/20 border border-[#D93030]/30" />
              {counts.ocupadas} ocupadas
            </span>
            <span className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              {counts.vencendoBreve} &lt;60 dias
            </span>
          </div>
        </div>

        {/* Modo Mapa */}
        {viewMode === 'mapa' && (
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {PISOS.map(({ value: piso, label: pisoLabel }) => {
              const hasUnits = Object.values(mapaData[piso]).some(arr => arr.length > 0);
              if (!hasUnits) return null;
              return (
                <div key={piso}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#D93030] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{pisoLabel}</h2>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">
                        {Object.values(mapaData[piso]).flat().filter(l => l.status === STATUS_OCUPADO).length} ocupadas ·{' '}
                        {Object.values(mapaData[piso]).flat().filter(l => l.status === STATUS_DISPONIVEL).length} disponíveis
                      </p>
                    </div>
                  </div>
                  {CORREDORES.map(({ value: corredor }) => {
                    const units = mapaData[piso][corredor];
                    if (units.length === 0) return null;
                    const expiring = units.filter(l => { const p = todasPropostas.find(pp => pp.unidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA)); return p ? (getDiasRestantes(p.fimContrato) ?? Infinity) < 60 : false; }).length;
                    return (
                      <div key={corredor} className="mb-5">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#8B1A1A] dark:text-[#C8A882]" />
                          <h3 className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">
                            {CORREDOR_LABEL[corredor]}
                          </h3>
                          <span className="text-xs text-gray-400 dark:text-[#64748B]">
                            · {units.filter(l => l.status === STATUS_OCUPADO).length} ocupadas
                            · {units.filter(l => l.status === STATUS_DISPONIVEL).length} disponíveis
                            {expiring > 0 && <span className="text-orange-500 ml-1">· {expiring} &lt;60d</span>}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2.5">
                          {units.map(unidade => (
                            <UnitBlock
                              key={unidade.id}
                              unidade={unidade}
                              onSelect={l => setManutencaoLojista(l)}
                              todasPropostas={todasPropostas}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                <p className="text-sm">Nenhuma unidade encontrada</p>
              </div>
            )}
          </div>
        )}

        {/* Modo Tabela */}
        {viewMode === 'tabela' && (
          <div className="overflow-auto flex-1">
            <DataTable
              data={tableRows.map(l => {
                const propAprov = todasPropostas.find(pp => pp.codigoUnidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA));
                const dias = propAprov ? getDiasRestantes(propAprov.fimContrato) : null;
                const vencendo = dias !== null && dias < 60;
                return {
                  unidade:       l.unidade,
                  piso:          l.piso === 'P' ? 'Primeiro Piso' : l.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso',
                  corredor:      l.corredor,
                  area:          l.area,
                  segmento:      l.segmento,
                  status:        l.status,
                  nomeFantasia:  l.nome || '—',
                  fimContrato:   propAprov?.fimContrato || '—',
                  diasRestantes: dias,
                  _vencendo:     vencendo,
                  _raw:          l,
                };
              })}
              columnConfig={{
                unidade:       { label: 'Unidade', render: (row, v) => (
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-gray-900 dark:text-[#F1F5F9]">
                    {row._vencendo && <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />}
                    {v}
                  </div>
                )},
                piso:          { label: 'Piso', _allowFilter: false },
                corredor:      { label: 'Corredor' },
                area:          { label: 'Área (m²)', render: (_, v) => `${v} m²` },
                segmento:      { label: 'Segmento' },
                status:        { label: 'Status', render: (_, v) => (
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${v === 'Disponível' ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300' : 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300'}`}>{v}</span>
                )},
                nomeFantasia:  { label: 'Nome Fantasia' },
                fimContrato:   { label: 'Fim Contrato' },
                diasRestantes: { label: 'Dias Rest.', _allowFilter: false, render: (row, v) => v !== null ? (
                  <span className={`text-xs font-semibold ${row._vencendo ? 'text-orange-500' : 'text-gray-600 dark:text-[#94A3B8]'}`}>{row._vencendo && '⚠ '}{v} dias</span>
                ) : '—'},
                _vencendo:     { _specified: false },
                _raw:          { _specified: false },
              }}
              onRowClick={row => setManutencaoLojista(row._raw)}
              emptyMessage="Nenhuma unidade encontrada"
            />
          </div>
        )}
      </div>

      {/* Modals */}
      {manutencaoLojista && (
        <DisponibilidadeManutencaoModal
          unidade={manutencaoLojista}
          allUnidades={filtered}
          onClose={() => { setManutencaoLojista(null); refetch(); }}
        />
      )}
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialDashboard.tsx
````typescript
import { useComercialDashboard } from "../../viewmodels/useComercialDashboard";
import { useNavigate } from "react-router";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { SEGMENTOS, PISOS, STATUS_APROVADO, STATUS_VENCIDA } from "../../enums";
import {
  Store, FileText, AlertCircle, Percent,
  ChevronRight, ChevronLeft, ChevronDown, BarChart2, RefreshCw, Calendar, Info, Filter
} from "lucide-react";
import { DatePickerInput } from "../../components/DatePickerInput";
import { DataTable } from "../../components/DataTable";
import { MobileCarousel } from "../../components/MobileCarousel";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { unidades, propostas } from "../../data/apiClient";

const DS = {
  primary: "#D93030",
  dark:    "#8B1A1A",
  blue:    "#3B82F6",
  green:   "#10B981",
  amber:   "#F59E0B",
  gold:    "#C8A882",
  grid:    "#e5e7eb",
} as const;

const PIE_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];
const CHART_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];

const PISO_LABELS: Record<string, string> = { P: "Primeiro Piso", S: "Segundo Piso", T: "Terceiro Piso" };

const TODAY = new Date();

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function matchColFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = cellValue.toLowerCase();
  const p = pattern.toLowerCase();
  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) return val.endsWith(p.slice(1));
  if (p.endsWith('*') && p.length > 1) return val.startsWith(p.slice(0, -1));
  return val.includes(p);
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const isBar = label !== undefined;
  return (
    <div style={{
      backgroundColor: 'var(--color-background-primary)',
      border: '1px solid var(--color-border-secondary)',
      borderRadius: '10px',
      padding: '10px 12px',
      fontSize: '11px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      minWidth: '120px',
    }}>
      {isBar && (
        <p style={{
          fontWeight: 600,
          marginBottom: '6px',
          paddingBottom: '6px',
          borderBottom: '1px solid var(--color-border-tertiary)',
          color: '#C8A882',
        }}>{label}</p>
      )}
      {payload.map((entry: any, i: number) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: entry.payload?.fill ?? entry.color ?? '#D93030',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--color-text-secondary)' }}>{entry.name ?? entry.payload?.name}</span>
          </div>
          <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {entry.value} {entry.value === 1 ? 'loja' : 'lojas'}
          </span>
        </div>
      ))}
    </div>
  );
}



function getDiasRestantes(fimContrato: string | undefined): number | null {
  if (!fimContrato) return null;
  let date: Date;
  if (fimContrato.includes('/')) {
    const [d, m, y] = fimContrato.split('/');
    date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  } else {
    date = new Date(fimContrato);
  }
  if (isNaN(date.getTime())) return null;
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return Math.ceil((date.getTime() - hoje.getTime()) / 86400000);
}

export function ComercialDashboard() {
  const navigate = useNavigate();
  const {
    allUnidades, proposals, filteredProposals, kpis, chartSegmentos, chartStatus,
    filterSegmentos, setFilterSegmentos, toggleSegmento,
    filterPisos, setFilterPisos, togglePiso,
    dateFrom, setDateFrom, dateTo, setDateTo, clearFilters,
    showMobileFilters, setShowMobileFilters,
    propColFilters, setPropColFilters,
    ctrColFilters, setCtrColFilters,
    kpiIndex, setKpiIndex,
    chartIndex, setChartIndex,
    mobileSection, setMobileSection, toggleSection,
  } = useComercialDashboard();

  // ── Aliases e dados derivados locais ──────────────────────
  const stats = {
    total:           kpis.total,
    ocupadas:        kpis.ocupadas,
    disponiveis:     kpis.livres,
    contratoAtivo:   kpis.ocupadas,
    propostasAbertas: kpis.emAnalise,
    vencendo:        allUnidades.filter(u => {
      const p = proposals.find(pp => pp.codigoUnidade === u.codigo && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA));
      if (!p?.fimContrato) return false;
      const dias = Math.ceil((new Date(p.fimContrato).getTime() - Date.now()) / 86400000);
      return dias < 60;
    }).length,
  };

  const segmentosChart = chartSegmentos;
  const pieData        = chartSegmentos;
  const proposalStatusChart = chartStatus;
  const allLojistas    = allUnidades.map(u => {
    const propAprov = proposals.find(p => p.codigoUnidade === u.codigo && p.status === STATUS_APROVADO);
    return {
      ...u,
      unidade: u.codigo,
      nome: propAprov?.nomeFantasia || '',
      piso: u.piso,
      segmento: propAprov?.segmento || '',
    };
  });

  const propostasRecentes = [...proposals]
    .sort((a, b) => b.dataCriacao.localeCompare(a.dataCriacao))
    .slice(0, 10);

  const contratosVencendo = allLojistas.filter(l => {
    const p = proposals.find(pp => pp.codigoUnidade === l.unidade && (pp.status === STATUS_APROVADO || pp.status === STATUS_VENCIDA));
    if (!p?.fimContrato) return false;
    const dias = Math.ceil((new Date(p.fimContrato).getTime() - Date.now()) / 86400000);
    return dias < 60;
  });

  const STATUS_BADGE: Record<string, string> = {
    "Aprovado": "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/40",
    "Aguardando análise do comitê": "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/40",
    "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/40",
    "Reprovado": "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/40",
    "Cancelado": "bg-gray-100 dark:bg-gray-500/20 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-500/40",
    "Vencida": "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-500/40",
    "Finalizado": "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40",
  };

  return (
    <div className="flex flex-col h-full overflow-hidden gap-4 p-6">

      {/* Header + Filtros — flex-shrink-0 */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Dashboard Comercial</h1>
      </div>

      {/* Filtros — desktop: inline | mobile: região expansível independente */}

      {/* Cabeçalho da região — mobile only */}
      <button
        onClick={() => setShowMobileFilters(prev => !prev)}
        className="sm:hidden flex-shrink-0 w-full flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447]"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#D93030]" />
          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Filtros</span>
          {/* Indicador de filtros ativos */}
          {(dateFrom || dateTo || filterSegmentos.length > 0 || filterPisos.length > 0) && (
            <span className="w-2 h-2 rounded-full bg-[#D93030]" />
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showMobileFilters ? '' : '-rotate-90'}`} />
      </button>

      {/* Conteúdo dos filtros */}
      {/* Desktop: sempre visível | Mobile: só quando expandido */}
      <div className={`flex-shrink-0 flex-col sm:flex-row sm:items-stretch sm:justify-start gap-0
        ${showMobileFilters ? 'flex' : 'hidden sm:flex'}
        bg-white dark:bg-[#242938] sm:bg-transparent sm:dark:bg-transparent
        rounded-xl sm:rounded-none
        border border-gray-100 dark:border-[#2E3447] sm:border-0
        p-3 sm:p-0`}>

        {/* Data de criação da proposta */}
        <div className="flex flex-col gap-1 w-full sm:w-auto sm:pr-6 pb-2 sm:pb-0">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Data de criação</span>
          <div className="flex items-center gap-1.5 h-9">
            <DatePickerInput value={dateFrom} onChange={setDateFrom} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
            <span className="text-xs text-gray-400 dark:text-[#64748B] whitespace-nowrap flex-shrink-0">até</span>
            <DatePickerInput value={dateTo} onChange={setDateTo} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
          </div>
        </div>

        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Segmento */}
        <EnumCheckboxFilter
          label="Segmento"
          options={SEGMENTOS}
          selected={filterSegmentos}
          onToggle={s => setFilterSegmentos(prev =>
            prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
          )}
        />

        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Piso */}
        <EnumCheckboxFilter
          label="Piso"
          options={PISOS.map(p => ({ value: p.value, label: p.labelShort }))}
          selected={filterPisos}
          onToggle={p => setFilterPisos(prev =>
            prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
          )}
          mobileGrid="grid-cols-3"
        />

      </div>

      {/* KPI Cards */}
      {/* Desktop */}
      <div className="hidden sm:grid sm:grid-cols-4 gap-3 flex-shrink-0">

        {/* Total de Lojas */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <Store className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">Total de Lojas</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.ocupadas}</span>
              <span className="text-xs text-gray-400 dark:text-[#64748B]">/ {stats.total}</span>
            </div>
            <p className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">{stats.disponiveis} disponíveis</p>
          </div>
        </div>

        {/* Contratos Ativos */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <Percent className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">Contratos Ativos</p>
            <p className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9] leading-none mt-0.5">{stats.contratoAtivo}</p>
            <p className="text-[10px] text-green-600 dark:text-green-400 mt-0.5">Aprovado + Vencida</p>
          </div>
        </div>

        {/* Propostas Abertas */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#D93030]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 text-[#D93030]" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">Propostas Abertas</p>
            <p className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9] leading-none mt-0.5">{stats.propostasAbertas}</p>
            <p className="text-[10px] text-[#D93030] mt-0.5">em análise ou reprovadas</p>
          </div>
        </div>

        {/* Contratos <60 dias */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-orange-100 dark:border-orange-700/30 px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-4 h-4 text-orange-500 dark:text-orange-400" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-orange-600 dark:text-orange-400 leading-tight">Contratos &lt;60 dias</p>
            <p className="text-lg font-bold text-orange-600 dark:text-orange-400 leading-none mt-0.5">{stats.vencendo}</p>
            <p className="text-[10px] text-gray-400 dark:text-[#64748B] mt-0.5">vencimento próximo</p>
          </div>
        </div>

      </div>

      {/* Gráficos desktop — 4 colunas */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">

        {/* 1. Ocupação por Segmento (barras) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-3 flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Segmento
          </h3>
          {segmentosChart.length === 0 ? (
            <div className="flex items-center justify-center h-36 text-gray-400 text-xs">Sem dados</div>
          ) : (
            <ResponsiveContainer width="100%" height={144}>
              <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} dy={6} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(217,48,48,0.05)" }} />
                <Bar dataKey="value" fill={DS.primary} radius={[3, 3, 0, 0]} barSize={18} name="Lojas" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* 2. Distribuição por Categoria (pie) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Por Categoria
          </h3>
          {pieData.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={90}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={40} innerRadius={18} dataKey="value" paddingAngle={2}>
                    {pieData.map((item, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
                {pieData.slice(0, 5).map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                      <span className="text-[10px] text-gray-500 dark:text-[#94A3B8] truncate">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-800 dark:text-[#F1F5F9]">{item.value}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-400 text-xs">Sem dados</div>
          )}
        </div>

        {/* 3. Ocupação por Piso (pie) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Piso
          </h3>
          <ResponsiveContainer width="100%" height={90}>
            <PieChart>
              <Pie
                data={PISOS.map(p => ({
                  name: PISO_LABELS[p.value],
                  value: allLojistas.filter(l =>
                    l.piso === p.value && l.status === "Ocupado"
                  ).length,
                }))}
                cx="50%" cy="50%" outerRadius={40} innerRadius={18} dataKey="value" paddingAngle={4}
              >
                {PISOS.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1 mt-1">
            {PISOS.map((p, i) => {
              const count = allLojistas.filter(l =>
                l.piso === p.value && l.status === "Ocupado"
              ).length;
              return (
                <div key={p.value} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                    <span className="text-[10px] text-gray-500 dark:text-[#94A3B8]">{PISO_LABELS[p.value]}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 dark:text-[#F1F5F9]">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Status das Propostas (pie) */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
          <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#D93030]" /> Status das Propostas
          </h3>
          {proposalStatusChart.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={90}>
                <PieChart>
                  <Pie data={proposalStatusChart} cx="50%" cy="50%" outerRadius={40} dataKey="value" paddingAngle={3}>
                    {proposalStatusChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
                {proposalStatusChart.map((item, i) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                      <span className="text-[10px] text-gray-500 dark:text-[#94A3B8] truncate leading-tight">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-800 dark:text-[#F1F5F9] ml-1 flex-shrink-0">{item.value}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-400 text-xs">Sem propostas</div>
          )}
        </div>

      </div>

      {/* Tabelas desktop */}
      <div className="hidden sm:block flex-1 overflow-y-auto space-y-4">

        {/* Propostas Recentes */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
            <button onClick={() => navigate("/comercial/propostas")} className="flex items-center gap-2 group">
              <FileText className="w-4 h-4 text-[#D93030]" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] group-hover:text-[#D93030] transition-colors">Propostas Recentes</h3>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#D93030] transition-colors" />
            </button>
            <span className="text-xs text-gray-400 dark:text-[#64748B]">{propostasRecentes.length} registros</span>
          </div>
          <DataTable
            data={propostasRecentes.map(p => ({
              id:           p.id,
              nomeFantasia: p.nomeFantasia || p.id,
              unidade:      p.codigoUnidade,
              tipo:         p.tipoOperacao,
              criacao:      p.dataCriacao,
              valor:        fmt(p.valorProposto),
              status:       p.status,
            }))}
            columnConfig={{
              id:           { label: 'Código' },
              nomeFantasia: { label: 'Nome Fantasia' },
              unidade:      { label: 'Unidade' },
              tipo:         { label: 'Tipo' },
              criacao:      { label: 'Criação' },
              valor:        { label: 'Valor', _allowFilter: false },
              status:       { label: 'Status', render: (_, v) => (
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${STATUS_BADGE[v] || 'bg-gray-100 text-gray-600'}`}>{v}</span>
              )},
            }}
            onRowClick={() => navigate('/comercial/propostas')}
            emptyMessage="Nenhuma proposta encontrada"
          />
          <div className="px-5 py-3 border-tx-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E]">
            <button onClick={() => navigate("/comercial/propostas")} className="text-xs text-[#D93030] hover:text-[#b92828] font-medium flex items-center gap-1 transition-colors">
              Ver todas as propostas <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Contratos Vencendo */}
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-orange-50/50 dark:bg-orange-900/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Contratos Vencendo</h3>
            </div>
            <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
              {contratosVencendo.length} contrato{contratosVencendo.length !== 1 ? "s" : ""} em &lt;60 dias
            </span>
          </div>
          <DataTable
            data={contratosVencendo.map(l => {
              const propAprov = proposals.find((p: any) => p.codigoUnidade === l.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA));
              const dias = getDiasRestantes(propAprov?.fimContrato);
              return {
                nomeFantasia:  l.nome,
                unidade:       l.unidade,
                piso:          PISO_LABELS[l.piso] ?? l.piso,
                vencimento:    propAprov?.fimContrato || '—',
                diasRestantes: dias,
              };
            })}
            columnConfig={{
              nomeFantasia:  { label: 'Nome Fantasia' },
              unidade:       { label: 'Unidade' },
              piso:          { label: 'Piso', _allowFilter: false },
              vencimento:    { label: 'Vencimento' },
              diasRestantes: { label: 'Dias Rest.', _allowFilter: false, render: (_, v) => {
                if (v === null || v === undefined) return <span>—</span>;
                const urgente = Number(v) <= 30;
                const cls = urgente ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
                return <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${cls}`}>{v} dias</span>;
              }},
            }}
            onRowClick={() => navigate('/comercial/disponibilidade')}
            emptyMessage="Nenhum contrato vencendo"
          />
        </div>

      </div>

      {/* ═══════════════════════════════════════ */}
      {/* LAYOUT MOBILE — regiões expansíveis    */}
      {/* ═══════════════════════════════════════ */}
      <div className="sm:hidden flex-1 flex flex-col overflow-hidden gap-2">

        {/* ── REGIÃO 1: Indicadores ── */}
        <div className="flex-shrink-0 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <button
            onClick={() => toggleSection('indicadores')}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Indicadores</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'indicadores' ? '' : '-rotate-90'}`} />
          </button>

          {mobileSection === 'indicadores' && (
            <div className="px-4 pb-4 grid grid-cols-2 gap-2 border-t border-gray-100 dark:border-[#2E3447] pt-3">
              <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Store className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 dark:text-[#94A3B8] leading-tight">Total de Lojas</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.ocupadas}</span>
                    <span className="text-[10px] text-gray-400">/{stats.total}</span>
                  </div>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400">{stats.disponiveis} disp.</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Percent className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 dark:text-[#94A3B8] leading-tight">Contratos Ativos</p>
                  <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.contratoAtivo}</p>
                  <p className="text-[10px] text-green-600 dark:text-green-400">Aprovado+Vencida</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-[#D93030]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-3.5 h-3.5 text-[#D93030]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 dark:text-[#94A3B8] leading-tight">Propostas Abertas</p>
                  <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9] leading-none">{stats.propostasAbertas}</p>
                  <p className="text-[10px] text-[#D93030]">em análise</p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-3 flex items-center gap-2 border border-orange-100 dark:border-orange-700/20">
                <div className="w-7 h-7 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-orange-600 dark:text-orange-400 leading-tight">Contr. &lt;60 dias</p>
                  <p className="text-base font-bold text-orange-600 dark:text-orange-400 leading-none">{stats.vencendo}</p>
                  <p className="text-[10px] text-gray-400">venc. próximo</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── REGIÃO 2: Gráficos ── */}
        <div className="flex-shrink-0 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <button
            onClick={() => toggleSection('graficos')}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#D93030]" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Gráficos</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'graficos' ? '' : '-rotate-90'}`} />
          </button>

          {mobileSection === 'graficos' && (
            <div className="border-t border-gray-100 dark:border-[#2E3447] h-[230px]">
              <MobileCarousel
                index={chartIndex}
                total={4}
                onPrev={() => setChartIndex(i => Math.max(0, i - 1))}
                onNext={() => setChartIndex(i => Math.min(3, i + 1))}
              >
                <div className="h-full p-2">
                  {chartIndex === 0 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Segmento
                      </h3>
                      {segmentosChart.length === 0 ? (
                        <div className="flex items-center justify-center h-[170px] text-gray-400 text-xs">Sem dados</div>
                      ) : (
                        <ResponsiveContainer width="100%" height={170}>
                          <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -28, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} dy={6} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 9 }} />
                            <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(217,48,48,0.05)" }} />
                            <Bar dataKey="value" fill={DS.primary} radius={[3, 3, 0, 0]} barSize={18} name="Lojas" />
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </>
                  )}
                  {chartIndex === 1 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <BarChart2 className="w-3.5 h-3.5 text-[#D93030]" /> Por Categoria
                      </h3>
                      {pieData.length > 0 ? (
                        <div className="flex items-center h-[170px]">
                          <ResponsiveContainer width="55%" height="100%">
                            <PieChart>
                              <Pie data={pieData} cx="50%" cy="50%" outerRadius={50} innerRadius={22}
                                dataKey="value" paddingAngle={2}>
                                {pieData.map((item, i) => (
                                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip content={<ChartTooltip />} />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="flex-1 space-y-1 pl-2">
                            {pieData.slice(0, 5).map((item, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                                  <span className="text-[10px] text-gray-500 dark:text-[#94A3B8] truncate">{item.name}</span>
                                </div>
                                <span className="text-[10px] font-semibold text-gray-800 dark:text-[#F1F5F9]">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-16 text-gray-400 text-xs">Sem dados</div>
                      )}
                    </>
                  )}
                  {chartIndex === 2 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <Info className="w-3.5 h-3.5 text-[#D93030]" /> Ocupação por Piso
                      </h3>
                      <div className="flex items-center h-[170px]">
                        <ResponsiveContainer width="55%" height="100%">
                          <PieChart>
                            <Pie
                              data={PISOS.map(p => ({
                                name: PISO_LABELS[p.value],
                                value: allLojistas.filter(l =>
                                  l.piso === p.value && l.status === "Ocupado"
                                ).length,
                              }))}
                              cx="50%" cy="50%" outerRadius={50} innerRadius={22}
                              dataKey="value" paddingAngle={4}
                            >
                              {PISOS.map((_, i) => (
                                <Cell key={i} fill={CHART_COLORS[i]} />
                              ))}
                            </Pie>
                            <Tooltip content={<ChartTooltip />} />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="flex-1 space-y-1 pl-2">
                          {PISOS.map((p, i) => {
                            const count = allLojistas.filter(l =>
                              l.piso === p.value && l.status === "Ocupado"
                            ).length;
                            return (
                              <div key={p.value} className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                                  <span className="text-[10px] text-gray-500 dark:text-[#94A3B8]">{PISO_LABELS[p.value]}</span>
                                </div>
                                <span className="text-[10px] font-bold text-gray-800 dark:text-[#F1F5F9]">{count}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                  {chartIndex === 3 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2 flex items-center gap-1.5 px-2">
                        <FileText className="w-3.5 h-3.5 text-[#D93030]" /> Status das Propostas
                      </h3>
                      {proposalStatusChart.length > 0 ? (
                        <div className="flex items-center h-[170px]">
                          <ResponsiveContainer width="55%" height="100%">
                            <PieChart>
                              <Pie data={proposalStatusChart} cx="50%" cy="50%" outerRadius={50}
                                dataKey="value" paddingAngle={3}>
                                {proposalStatusChart.map((_, i) => (
                                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip content={<ChartTooltip />} />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="flex-1 space-y-1 pl-2 overflow-hidden">
                            {proposalStatusChart.map((item, i) => (
                              <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                                  <span className="text-[10px] text-gray-500 dark:text-[#94A3B8] truncate leading-tight">{item.name}</span>
                                </div>
                                <span className="text-[10px] font-bold text-gray-800 dark:text-[#F1F5F9] ml-1 flex-shrink-0">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-16 text-gray-400 text-xs">Sem propostas</div>
                      )}
                    </>
                  )}
                </div>
              </MobileCarousel>
            </div>
          )}
        </div>

        {/* ── REGIÃO 3: Propostas Recentes — flex-1 quando aberta ── */}
        <div className={`bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden flex flex-col
          ${mobileSection === 'propostas' ? 'flex-1 min-h-0' : 'flex-shrink-0'}`}>
          <button
            onClick={() => toggleSection('propostas')}
            className="w-full flex items-center justify-between px-4 py-3 text-left flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D93030]" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Propostas Recentes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{propostasRecentes.length}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'propostas' ? '' : '-rotate-90'}`} />
            </div>
          </button>

          {mobileSection === 'propostas' && (
            <div className="flex-1 min-h-0 overflow-y-auto border-t border-gray-100 dark:border-[#2E3447] p-3 space-y-2">
              {propostasRecentes.length === 0 ? (
                <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-4">Nenhuma proposta encontrada</p>
              ) : propostasRecentes.map(p => (
                <div
                  key={p.id}
                  onClick={() => navigate("/comercial/propostas")}
                  className="bg-gray-50 dark:bg-[#1A1F2E] rounded-xl p-3 cursor-pointer active:opacity-80 transition-opacity"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{p.nomeFantasia || p.id}</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B] font-mono">{p.id}</p>
                    </div>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${STATUS_BADGE[p.status] || 'bg-gray-100 text-gray-600'}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-[#64748B]">
                    <span>{p.tipoOperacao}</span>
                    <span className="text-gray-300 dark:text-[#2E3447]">·</span>
                    <span className="font-semibold text-gray-800 dark:text-[#F1F5F9]">{fmt(p.valorProposto)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── REGIÃO 4: Contratos Vencendo — flex-1 quando aberta ── */}
        <div className={`bg-white dark:bg-[#242938] rounded-xl border border-orange-100 dark:border-orange-700/20 overflow-hidden flex flex-col
          ${mobileSection === 'contratos' ? 'flex-1 min-h-0' : 'flex-shrink-0'}`}>
          <button
            onClick={() => toggleSection('contratos')}
            className="w-full flex items-center justify-between px-4 py-3 text-left flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Contratos Vencendo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-orange-500 font-medium">{contratosVencendo.length} &lt;60d</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileSection === 'contratos' ? '' : '-rotate-90'}`} />
            </div>
          </button>

          {mobileSection === 'contratos' && (
            <div className="flex-1 min-h-0 overflow-y-auto border-t border-orange-100 dark:border-orange-700/20 p-3 space-y-2">
              {contratosVencendo.length === 0 ? (
                <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-4">Nenhum contrato vencendo</p>
              ) : contratosVencendo.map(l => {
                const propVenc = proposals.find(p => p.codigoUnidade === l.unidade && (p.status === STATUS_APROVADO || p.status === STATUS_VENCIDA));
                const diasVenc = getDiasRestantes(propVenc?.fimContrato);
                const urgent = (diasVenc ?? 999) <= 30;
                return (
                  <div
                    key={l.id}
                    onClick={() => navigate("/comercial/disponibilidade")}
                    className="bg-orange-50/50 dark:bg-orange-900/10 rounded-xl p-3 cursor-pointer active:opacity-80 transition-opacity border border-orange-100 dark:border-orange-700/20"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{l.nome}</p>
                        <p className="text-xs text-gray-500 dark:text-[#64748B] font-mono">{l.unidade}</p>
                      </div>
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 ${
                        urgent
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                      }`}>
                        {diasVenc ?? '—'}d
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-[#64748B]">
                      <span>Vence {propVenc?.fimContrato || '—'}</span>
                      <span className="text-gray-300 dark:text-[#2E3447]">·</span>

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
      {/* ═══════════════════════════════════════ */}
      {/* FIM LAYOUT MOBILE                      */}
      {/* ═══════════════════════════════════════ */}
      {/* Fim da área com scroll interno */}
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialProposals.tsx
````typescript
/**
 * ComercialProposals.tsx — View de Propostas Comerciais.
 *
 * Papel na arquitetura MVVM: camada VIEW.
 * Toda lógica está em useComercialProposals (ViewModel).
 *
 * O que exibe:
 *  - Contador de propostas por status (pills clicáveis como filtro)
 *  - Filtro de data de criação
 *  - Toggle de visualização: cards | tabela
 *  - Cards: cada proposta em card com status, valor, unidade
 *  - Tabela: colunas ordenáveis com filtro por célula (matchColFilter)
 *  - Modal PropostaManutencaoModal: edição/visualização de proposta
 *  - Modal de nova proposta: formulário rápido inline
 *  - FAB (mobile): botão flutuante "+" para nova proposta
 *
 * Aliases locais:
 *  setSortDir/setSortCol → toggleSort (do ViewModel)
 *  abrirNovaPropostaViaModal → abrirNovaProposta
 *  showNewModal, newProp, handleNewProposal → estado local do formulário rápido
 *
 * Nota: handleNewProposal ainda não persiste na API — chama refresh()
 * para re-buscar as propostas após criar. Integrar com
 * PropostasService.criar() quando disponível.
 */
import React from 'react';
import { useComercialProposals } from "../../viewmodels/useComercialProposals";
import {
  Plus, Calendar, XCircle,
  LayoutGrid, Table2, ArrowUp, ArrowDown, Send, Filter, ChevronDown
} from "lucide-react";
import { DatePickerInput } from "../../components/DatePickerInput";
import { PropostaManutencaoModal } from "../../components/PropostaManutencaoModal";
import { DataTable } from "../../components/DataTable";
import { DataCard } from "../../components/DataCard";
import type { UnidadeInfo, StatusProposta } from "../../data/comercialData";

const STATUS_COLORS: Record<StatusProposta, string> = {
  "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700/30",
  "Aguardando análise do comitê":  "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-700/30",
  Aprovado:  "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-700/30",
  Reprovado: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-700/30",
  Cancelado: "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600/30",
  Vencida:   "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 border border-orange-200 dark:border-orange-700/30",
  Finalizado: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-700/30",
};

const TIPO_COLORS: Record<string, string> = {
  "Nova Instalação": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400",
  Renovação:         "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400",
  Readequação:       "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
};

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
}

function matchColFilter(cellValue: string, pattern: string): boolean {
  if (!pattern) return true;
  const val = cellValue.toLowerCase();
  const p = pattern.toLowerCase();

  if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
    // "*T*" → contém T no meio (não no início nem no fim)
    const inner = p.slice(1, -1);
    const idx = val.indexOf(inner);
    return idx > 0 && idx < val.length - inner.length;
  }
  if (p.startsWith('*') && p.length > 1) {
    // "*T" → termina com T
    return val.endsWith(p.slice(1));
  }
  if (p.endsWith('*') && p.length > 1) {
    // "T*" → começa com T
    return val.startsWith(p.slice(0, -1));
  }
  // "T" → contém T em qualquer posição
  return val.includes(p);
}

export function ComercialProposals() {
  const {
    proposals, filtered, counts, tableRows, colDefs,
    filterStatuses, setFilterStatuses, toggleStatus,
    dateFrom, setDateFrom, dateTo, setDateTo,
    colFilters, setColFilters,
    sortCol, sortDir, toggleSort,
    viewMode, setViewMode,
    showMobileFilters, setShowMobileFilters,
    modalPropostaAberta, setModalPropostaAberta,
    abrirNovaProposta, fecharModal, refresh,
  } = useComercialProposals();

  const propostasData = proposals;

  // ── Aliases e estado local ──────────────────────────────
  // setSortDir/setSortCol → toggleSort (do ViewModel)
  const setSortDir = (fn: ((d: 'asc' | 'desc') => 'asc' | 'desc') | 'asc' | 'desc') => {
    if (typeof fn === 'function') toggleSort(sortCol); // toggle inverte
  };
  const setSortCol = (col: string) => { toggleSort(col); };

  // abrirNovaPropostaViaModal → abrirNovaProposta (do ViewModel)
  const abrirNovaPropostaViaModal = abrirNovaProposta;

  // Modal simples de nova proposta (estado local — não persiste)
  const [showNewModal, setShowNewModal] = React.useState(false);
  const [newProp, setNewProp] = React.useState({
    nomeFantasia: '', unidade: '', tipo: 'Nova Instalação' as any,
    segmento: 'Moda' as any, valor: '', area: '', vencimento: '', observacoes: '',
  });

  const handleNewProposal = () => {
    if (!newProp.unidade || !newProp.valor) return;
    propostasData; // referência mantida para compatibilidade
    setShowNewModal(false);
    setNewProp({ nomeFantasia: '', unidade: '', tipo: 'Nova Instalação', segmento: 'Moda', valor: '', area: '', vencimento: '', observacoes: '' });
    refresh();
  };

  return (
    <div className="flex flex-col h-full overflow-hidden gap-4 p-6">
      {/* Header — altura fixa */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Propostas Comerciais</h1>
        </div>
        <button onClick={abrirNovaPropostaViaModal}
          className="hidden sm:inline-flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Nova Proposta
        </button>
      </div>

      {/* Filtros — desktop: inline | mobile: região expansível independente */}

      {/* Cabeçalho da região — mobile only */}
      <button
        onClick={() => setShowMobileFilters(f => !f)}
        className="sm:hidden flex-shrink-0 w-full flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447]"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#D93030]" />
          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Filtros</span>
          {/* Indicador de filtros ativos */}
          {(dateFrom || dateTo || filterStatuses.length > 0) && (
            <span className="w-2 h-2 rounded-full bg-[#D93030]" />
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showMobileFilters ? '' : '-rotate-90'}`} />
      </button>

      {/* Conteúdo dos filtros */}
      {/* Desktop: sempre visível | Mobile: só quando expandido */}
      <div className={`flex-shrink-0 flex-col sm:flex-row sm:items-stretch sm:justify-start gap-0
        ${showMobileFilters ? 'flex' : 'hidden sm:flex'}
        bg-white dark:bg-[#242938] sm:bg-transparent sm:dark:bg-transparent
        rounded-xl sm:rounded-none
        border border-gray-100 dark:border-[#2E3447] sm:border-0
        p-3 sm:p-0`}>
        {/* Filtro 1: Data da proposta */}
        <div className="flex flex-col gap-1 w-full sm:w-auto sm:pr-6 pb-2 sm:pb-0">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Data da proposta</span>
          <div className="flex items-center gap-1.5 h-9">
            <DatePickerInput value={dateFrom} onChange={setDateFrom} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
            <span className="text-xs text-gray-400 dark:text-[#64748B] whitespace-nowrap flex-shrink-0">até</span>
            <DatePickerInput value={dateTo} onChange={setDateTo} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
          </div>
        </div>

        {/* Separador */}
        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Filtro 2: Status da proposta — checkboxes inline */}
        <div className="flex flex-col gap-1 w-full sm:flex-1 sm:px-6 pb-2 sm:pb-0">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Status da proposta</span>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-2 sm:gap-4 sm:items-center sm:min-h-[36px]">
            {(["Aguardando análise financeira","Aguardando análise do comitê","Aprovado","Reprovado","Cancelado","Vencida","Finalizado"] as StatusProposta[]).map(s => (
              <label key={s} className="flex items-center gap-1.5 cursor-pointer select-none">
                <div
                  onClick={() => {
                    setFilterStatuses(prev =>
                      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
                    );
                  }}
                  className={`w-4 h-4 border border-gray-400 dark:border-[#64748B] flex items-center justify-center text-xs font-bold cursor-pointer flex-shrink-0
                    ${filterStatuses.includes(s)
                      ? 'bg-white dark:bg-[#1A1F2E] text-gray-900 dark:text-[#F1F5F9]'
                      : 'bg-white dark:bg-[#1A1F2E]'}`}
                >
                  {filterStatuses.includes(s) && 'X'}
                </div>
                <span className="text-xs text-gray-700 dark:text-[#CBD5E1] leading-tight">
                  {s} ({counts[s] || 0})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Filtro 3: Tipo de visualização — extremo direito */}
        <div className="hidden sm:flex flex-col gap-1 ml-auto sm:pl-6">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Visualização</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode('card')}
              className={`h-9 px-3 rounded-l-lg border text-xs font-medium flex items-center gap-1.5 transition-colors
                ${viewMode === 'card'
                  ? 'bg-[#D93030] text-white border-[#D93030]'
                  : 'bg-white dark:bg-[#1A1F2E] text-gray-600 dark:text-[#94A3B8] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]'}`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Card
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`h-9 px-3 rounded-r-lg border-t border-r border-b text-xs font-medium flex items-center gap-1.5 transition-colors
                ${viewMode === 'table'
                  ? 'bg-[#D93030] text-white border-[#D93030]'
                  : 'bg-white dark:bg-[#1A1F2E] text-gray-600 dark:text-[#94A3B8] border-gray-200 dark:border-[#2E3447] hover:border-[#D93030]'}`}
            >
              <Table2 className="w-3.5 h-3.5" /> Tabela
            </button>
          </div>
        </div>
      </div>

      {/* Área de listagem — cresce para preencher o restante, scroll interno */}
      <div className="flex-1 overflow-hidden bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447]">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex-shrink-0">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
            {viewMode === 'card' ? filtered.length : tableRows.length} proposta{(viewMode === 'card' ? filtered.length : tableRows.length) !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Modo Card */}
        {viewMode === 'card' && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 p-3 overflow-y-auto pb-4 sm:pb-0"
            style={{
              maxHeight: window.innerWidth < 640
                ? 'calc(100vh - 280px - 64px)'  // desconta bottom nav
                : 'calc(100vh - 280px)'
            }}>
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-400 dark:text-[#64748B]">
                <p className="text-sm">Nenhuma proposta encontrada</p>
              </div>
            ) : (
              filtered.map(p => (
                <DataCard
                  key={p.id}
                  data={p}
                  fieldMap={{
                    title:       { field: 'nomeFantasia', format: (v, row) => v || row.id },
                    titleBadge:  'tipoOperacao',
                    subtitle:    ['id', 'codigoUnidade', 'segmento'],
                    value:       { field: 'valorProposto', format: v => fmtCurrency(v) },
                    valueSub:    { field: 'area', format: v => `${v} m²` },
                    statusBadge: 'status',
                    footer:      'dataVencimento',
                  }}
                  onClick={row => setModalPropostaAberta(row)}
                />
              ))
            )}
          </div>
        )}

        {/* Modo Tabela */}
        {viewMode === 'table' && (
          <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
            <DataTable
              data={tableRows.map(p => ({
                nomeFantasia: p.nomeFantasia || p.id,
                tipo:         p.tipoOperacao,
                id:           p.id,
                unidade:      p.codigoUnidade,
                segmento:     p.segmento,
                valor:        p.valorProposto,
                area:         p.area,
                criacao:      p.dataCriacao,
                vencimento:   p.dataVencimento ?? '—',
                status:       p.status,
                _raw:         p,
              }))}
              columnConfig={{
                nomeFantasia: { label: 'Nome Fantasia' },
                tipo:         { label: 'Tipo', render: (_, v) => (
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${TIPO_COLORS[v] || ''}`}>{v}</span>
                )},
                id:           { label: 'Código' },
                unidade:      { label: 'Unidade' },
                segmento:     { label: 'Segmento' },
                valor:        { label: 'Valor', render: (_, v) => fmtCurrency(v) },
                area:         { label: 'Área', render: (_, v) => `${v} m²` },
                criacao:      { label: 'Criado em' },
                vencimento:   { label: 'Vencimento' },
                status:       { label: 'Status', render: (_, v) => (
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${STATUS_COLORS[v as StatusProposta]}`}>{v}</span>
                )},
                _raw:         { _specified: false },
              }}
              onRowClick={row => setModalPropostaAberta(row._raw)}
              emptyMessage="Nenhuma proposta encontrada"
            />
          </div>
        )}
      </div>

      {/* New Proposal Modal — RF-01 */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowNewModal(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-lg border border-gray-100 dark:border-[#2E3447]"
            onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-5 rounded-t-2xl flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Nova Proposta Comercial (RF-01)</h2>
              <button onClick={() => setShowNewModal(false)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center">
                <XCircle className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Nome Fantasia *</label>
                  <input value={newProp.nomeFantasia || ''} onChange={e => setNewProp(p => ({...p, nomeFantasia: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="Nome fantasia da loja" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Unidade *</label>
                  <input value={newProp.unidade} onChange={e => setNewProp(p => ({...p, unidade: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="Ex: L2-015" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Tipo de Proposta</label>
                  <select value={newProp.tipo} onChange={e => setNewProp(p => ({...p, tipo: e.target.value as any}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]">
                    <option>Nova Instalação</option><option>Renovação</option><option>Readequação</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Segmento</label>
                  <select value={newProp.segmento} onChange={e => setNewProp(p => ({...p, segmento: e.target.value as any}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]">
                    {["Moda","Alimentação","Serviços","Eletrônicos","Esportes","Entretenimento","Outros"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Valor Proposto (R$) *</label>
                  <input type="number" value={newProp.valor} onChange={e => setNewProp(p => ({...p, valor: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="0" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Área (m²)</label>
                  <input type="number" value={newProp.area} onChange={e => setNewProp(p => ({...p, area: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="0" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Data de Vencimento (RN-03)</label>
                <input type="date" value={newProp.vencimento} onChange={e => setNewProp(p => ({...p, vencimento: e.target.value}))}
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Observações</label>
                <textarea rows={3} value={newProp.observacoes} onChange={e => setNewProp(p => ({...p, observacoes: e.target.value}))}
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] resize-none"
                  placeholder="Detalhes e condições..." />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowNewModal(false)}
                  className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  Cancelar
                </button>
                <button onClick={handleNewProposal}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  <Send className="w-4 h-4" /> Criar Proposta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Proposta Manutencao Modal */}
      {modalPropostaAberta && (
        <PropostaManutencaoModal
          proposta={modalPropostaAberta}
          allPropostas={viewMode === 'card' ? filtered : tableRows}
          onClose={() => {
            setModalPropostaAberta(null);
            refresh();
          }}
        />
      )}

      {/* FAB Nova Proposta — mobile only */}
      <button
        onClick={abrirNovaPropostaViaModal}
        className="block sm:hidden fixed bottom-20 right-4 z-40 w-14 h-14 bg-[#D93030] hover:bg-[#c02828] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Nova Proposta"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialReports.tsx
````typescript
/**
 * ComercialReports.tsx — View de Relatórios Comerciais.
 *
 * Papel na arquitetura MVVM: camada VIEW.
 * Toda lógica está em useComercialReports (ViewModel).
 *
 * O que exibe:
 *  Desktop (2 colunas):
 *   Esquerda: seleção de campos (árvore por categoria) + filtros
 *   Direita:  gráficos (segmento, piso, status) + pré-visualização
 *
 *  Mobile: accordion separado para gráficos e campos + modal de preview
 *
 * Seleção de campos (árvore):
 *  - Categorias: Disponibilidade, Proposta, Histórico
 *  - Cada categoria é expansível/retrátil (isCategoryExpanded)
 *  - Checkbox de categoria seleciona/deseleciona todos os campos filhos
 *  - Histórico tem recuo visual (ml-4) indicando que é filho de Proposta
 *
 * Pré-visualização:
 *  - Exibe até 8 unidades em estrutura hierárquica:
 *    Unidade → Proposta → Histórico
 *  - Blocos coloridos por categoria: vermelho (disp.), roxo (prop.), âmbar (hist.)
 *
 * Exportação:
 *  - XLSX: usa SheetJS para gerar planilha com colunas achatadas
 *  - PDF: usa jsPDF + autoTable com cabeçalho da marca JP Mall
 *  - handleExportXLSX/PDF: aliases do handleExport do ViewModel,
 *    que setam o formato antes de chamar a função de exportação
 *
 * Aliases locais:
 *  isCategoryExpanded(cat) — função derivada de expandedCategories (string[])
 *  isExpandedCat           — calculado por .map() de categoria, booleano local
 *  fmtCurrency             — formata número como R$ para exibição
 *  getEdicoesByProposal    — retorna [] (histórico via API futuramente)
 *  hasDisp/hasProp/hasHist — booleanos de categoria com campo selecionado
 */
import React from "react";
import {
  Download, Filter, Calendar, CheckSquare,
  FileText, Check, ChevronRight, ChevronDown, X, BarChart2
} from "lucide-react";
import { DatePickerInput } from "../../components/DatePickerInput";
import { MobileCarousel } from "../../components/MobileCarousel";
import type { StatusProposta } from "../../data/comercialData";
import { EnumCheckboxFilter } from "../../components/EnumCheckboxFilter";
import { SEGMENTOS, PISOS, STATUS_LOJA } from "../../enums";
import { useComercialReports, type ReportField } from "../../viewmodels/useComercialReports";
import { DataTable } from "../../components/DataTable";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

const CHART_COLORS = ['#D93030', '#C8A882', '#8B1A1A', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'];

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const isBar = label !== undefined;
  return (
    <div style={{
      backgroundColor: 'var(--color-background-primary)',
      border: '1px solid var(--color-border-secondary)',
      borderRadius: '10px',
      padding: '10px 12px',
      fontSize: '11px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      minWidth: '120px',
    }}>
      {isBar && (
        <p style={{
          fontWeight: 600,
          marginBottom: '6px',
          paddingBottom: '6px',
          borderBottom: '1px solid var(--color-border-tertiary)',
          color: '#C8A882',
        }}>{label}</p>
      )}
      {payload.map((entry: any, i: number) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: entry.payload?.fill ?? entry.color ?? '#D93030',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--color-text-secondary)' }}>{entry.name ?? entry.payload?.name}</span>
          </div>
          <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {entry.value} {entry.value === 1 ? 'loja' : 'lojas'}
          </span>
        </div>
      ))}
    </div>
  );
}

// Ordem de renderização das categorias
const CATEGORY_ORDER = ['Disponibilidade', 'Proposta', 'Dados da Loja', 'Histórico'] as const;

// Cores por categoria
const CATEGORY_COLORS: Record<string, string> = {
  Disponibilidade: 'bg-[#D93030]/10 text-[#D93030] dark:bg-[#D93030]/20',
  Proposta:        'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Dados da Loja': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  Histórico:       'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
};

const CATEGORY_BORDER: Record<string, string> = {
  Disponibilidade: 'border-l-4 border-[#D93030]',
  Proposta:        'border-l-4 border-purple-500',
  'Dados da Loja': 'border-l-4 border-teal-500',
  Histórico:       'border-l-4 border-amber-500 ml-4',
};

export function ComercialReports() {
  const {
    allLojistas, allPropostas, filteredLojistas, filteredPropostas,
    segmentosChart, pisoChart, propostasChart,
    fields, setFields, selectedFields, dispFields, propFields, lojFields, histFields,
    expandedCategories,
    dateFrom, setDateFrom, dateTo, setDateTo,
    filterPisos, setFilterPisos,
    filterStatuses, setFilterStatuses,
    filterSegmentos, setFilterSegmentos,
    showMobileFilters, setShowMobileFilters,
    exportFormat, setExportFormat,
    reportChartIndex, setReportChartIndex,
    showPreviewModal, setShowPreviewModal,
    mobileReportSection,
    toggleField, toggleCategory, toggleExpanded, toggleReportSection,
    handleExport,
  } = useComercialReports();

  // ── Aliases e variáveis locais ──────────────────────────
  // expandedCategories era Set — agora é string[] — adaptar .has()
  const isCategoryExpanded = (cat: string) => expandedCategories.includes(cat);

  // Booleanos de categoria selecionada
  const hasDisp = dispFields.length > 0;
  const hasProp = propFields.length > 0;
  const hasHist = histFields.length > 0;
  // hasLoj removido — categoria "Dados da Loja" removida

  // fmtCurrency local
  const fmtCurrency = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });

  // getEdicoesByProposal — retorna [] pois histórico vem da API
  const getEdicoesByProposal = (_id: string): Array<{ editadoEm: string; editadoPorNome: string; snapshot: { status: string } }> => [];

  // Aliases para compatibilidade com o JSX existente
  const handleExportXLSX = () => { const prev = exportFormat; setExportFormat('xlsx'); handleExport(); setExportFormat(prev); };
  const handleExportPDF  = () => { const prev = exportFormat; setExportFormat('pdf');  handleExport(); setExportFormat(prev); };

  return (
    <div className="flex flex-col h-full overflow-hidden gap-4 p-6">

      {/* Header */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Relatórios Comerciais</h1>
        </div>
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <div className="flex border border-gray-200 dark:border-[#2E3447] rounded-xl overflow-hidden">
            {(['xlsx', 'pdf'] as const).map(f => (
              <button key={f} onClick={() => setExportFormat(f)}
                className={`px-3 py-2 text-xs font-medium transition-colors
                  ${exportFormat === f ? 'bg-[#D93030] text-white' : 'text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E]'}`}>
                {f.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => exportFormat === 'xlsx' ? handleExportXLSX() : handleExportPDF()}
            disabled={selectedFields.length === 0}
            className="flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" /> Exportar
          </button>
        </div>
      </div>

      {/* Filtros — desktop: inline | mobile: região expansível independente */}

      {/* Cabeçalho da região — mobile only */}
      <button
        onClick={() => setShowMobileFilters(f => !f)}
        className="sm:hidden flex-shrink-0 w-full flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447]"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#D93030]" />
          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Filtros</span>
          {/* Indicador de filtros ativos */}
          {(dateFrom || dateTo || filterPisos.length > 0 || filterStatuses.length > 0 || filterSegmentos.length > 0) && (
            <span className="w-2 h-2 rounded-full bg-[#D93030]" />
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showMobileFilters ? '' : '-rotate-90'}`} />
      </button>

      {/* Conteúdo dos filtros */}
      {/* Desktop: sempre visível | Mobile: só quando expandido */}
      <div className={`flex-shrink-0 flex-col sm:flex-row sm:items-stretch sm:justify-start gap-0
        ${showMobileFilters ? 'flex' : 'hidden sm:flex'}
        bg-white dark:bg-[#242938] sm:bg-transparent sm:dark:bg-transparent
        rounded-xl sm:rounded-none
        border border-gray-100 dark:border-[#2E3447] sm:border-0
        p-3 sm:p-0`}>

        {/* Data de criação */}
        <div className="flex flex-col gap-1 w-full sm:w-auto sm:pr-6 pb-2 sm:pb-0">
          <span className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Data de criação da proposta</span>
          <div className="flex items-center gap-1.5 h-9">
            <DatePickerInput value={dateFrom} onChange={setDateFrom} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
            <span className="text-xs text-gray-400 dark:text-[#64748B] whitespace-nowrap flex-shrink-0">até</span>
            <DatePickerInput value={dateTo} onChange={setDateTo} placeholder="DD/MM/AAAA" className="flex-1 min-w-0" />
          </div>
        </div>

        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Piso */}
        <EnumCheckboxFilter
          label="Piso"
          options={PISOS.map(p => ({ value: p.value, label: p.labelShort }))}
          selected={filterPisos}
          onToggle={p => setFilterPisos(prev =>
            prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
          )}
          mobileGrid="grid-cols-3"
        />

        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Status da unidade */}
        <EnumCheckboxFilter
          label="Status da unidade"
          options={STATUS_LOJA}
          selected={filterStatuses}
          onToggle={s => setFilterStatuses(prev =>
            prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
          )}
        />

        <div className="hidden sm:block w-px bg-gray-200 dark:bg-[#2E3447] flex-shrink-0" />
        <div className="block sm:hidden h-px w-full bg-gray-200 dark:bg-[#2E3447] my-2" />

        {/* Segmento */}
        <EnumCheckboxFilter
          label="Segmento"
          options={SEGMENTOS}
          selected={filterSegmentos}
          onToggle={s => setFilterSegmentos(prev =>
            prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
          )}
        />

      </div>

      {/* Área principal — flex-1 com scroll */}
      <div className="flex-1 overflow-hidden flex flex-col gap-4">

        {/* Gráficos */}
        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 flex-shrink-0">

          {/* Gráfico 1: Segmento (barras) */}
          <div className="lg:col-span-1 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Lojas por Segmento</h3>
            <div className="h-[170px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} dy={8} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="value" fill="#D93030" radius={[4, 4, 0, 0]} barSize={28} name="Lojas" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico 2: Ocupação por piso (donut) */}
          <div className="lg:col-span-1 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Ocupação por Piso</h3>
            <div className="h-[170px] flex items-center">
              <ResponsiveContainer width="55%" height="100%">
                <PieChart>
                  <Pie data={pisoChart} cx="50%" cy="50%" outerRadius={52} innerRadius={28} dataKey="value" paddingAngle={4}>
                    {pisoChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2 pl-2">
                {pisoChart.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                    <span className="text-xs text-gray-600 dark:text-[#94A3B8] flex-1 leading-tight">{d.name}</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gráfico 3: Status das propostas (donut) */}
          <div className="lg:col-span-1 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Status das Propostas</h3>
            <div className="h-[170px] flex items-center">
              <ResponsiveContainer width="55%" height="100%">
                <PieChart>
                  <Pie data={propostasChart} cx="50%" cy="50%" outerRadius={52} dataKey="value" paddingAngle={3}>
                    {propostasChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-1.5 pl-2 overflow-hidden">
                {propostasChart.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                    <span className="text-[10px] text-gray-600 dark:text-[#94A3B8] flex-1 leading-tight truncate">{d.name}</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9] flex-shrink-0">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Gráficos mobile — região expansível */}
        <div className="sm:hidden flex-shrink-0 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
          <button
            onClick={() => toggleReportSection('graficos')}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#D93030]" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Gráficos</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileReportSection === 'graficos' ? '' : '-rotate-90'}`} />
          </button>

          {mobileReportSection === 'graficos' && (
            <div className="border-t border-gray-100 dark:border-[#2E3447] h-[260px]">
              <MobileCarousel
                index={reportChartIndex}
                total={3}
                onPrev={() => setReportChartIndex(i => Math.max(0, i - 1))}
                onNext={() => setReportChartIndex(i => Math.min(2, i + 1))}
              >
                <div className="h-full p-2">
                  {reportChartIndex === 0 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1.5">Lojas por Segmento</h3>
                      <ResponsiveContainer width="100%" height={130}>
                        <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} dy={8} />
                          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                          <Tooltip content={<ChartTooltip />} />
                          <Bar dataKey="value" fill="#D93030" radius={[4, 4, 0, 0]} barSize={28} name="Lojas" />
                        </BarChart>
                      </ResponsiveContainer>
                    </>
                  )}
                  {reportChartIndex === 1 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1.5">Ocupação por Piso</h3>
                      <div className="h-[130px] flex items-center">
                        <ResponsiveContainer width="55%" height="100%">
                          <PieChart>
                            <Pie data={pisoChart} cx="50%" cy="50%" outerRadius={52} innerRadius={28} dataKey="value" paddingAngle={4}>
                              {pisoChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
                            </Pie>
                            <Tooltip content={<ChartTooltip />} />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="flex-1 space-y-2 pl-2">
                          {pisoChart.map((d, i) => (
                            <div key={d.name} className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                              <span className="text-xs text-gray-600 dark:text-[#94A3B8] flex-1 leading-tight">{d.name}</span>
                              <span className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{d.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  {reportChartIndex === 2 && (
                    <>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9] mb-1.5">Status das Propostas</h3>
                      <div className="h-[130px] flex items-center">
                        <ResponsiveContainer width="55%" height="100%">
                          <PieChart>
                            <Pie data={propostasChart} cx="50%" cy="50%" outerRadius={52} dataKey="value" paddingAngle={3}>
                              {propostasChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                            </Pie>
                            <Tooltip content={<ChartTooltip />} />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="flex-1 space-y-1.5 pl-2 overflow-hidden">
                          {propostasChart.map((d, i) => (
                            <div key={d.name} className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                              <span className="text-[10px] text-gray-600 dark:text-[#94A3B8] flex-1 leading-tight truncate">{d.name}</span>
                              <span className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9] flex-shrink-0">{d.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </MobileCarousel>
            </div>
          )}
        </div>

        {/* Grid Campos + Preview */}
        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 flex-1 overflow-hidden min-h-0">

          {/* Campos a Exportar — 1/3 */}
          <div className="lg:col-span-1 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4 flex flex-col overflow-hidden">
            <div className="flex items-center mb-3 flex-shrink-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#D93030]" /> Campos a Exportar
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1 pr-1">
              {/* Linha de controle — dentro do scroll */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-[#2E3447] mb-2 mt-3">
                <span className="text-[10px] text-gray-400 dark:text-[#64748B]">{selectedFields.length} de {fields.length} selecionados</span>
                <div className="flex gap-2">
                  <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: true })))} className="text-[10px] text-[#D93030] hover:underline">Todos</button>
                  <span className="text-[10px] text-gray-300 dark:text-[#3E4557]">|</span>
                  <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: false })))} className="text-[10px] text-gray-500 hover:underline">Nenhum</button>
                </div>
              </div>

              {CATEGORY_ORDER.map(category => {
                const catFields = fields.filter(f => f.category === category);
                const allSel = catFields.every(f => f.selected);
                const someSel = catFields.some(f => f.selected);
                const isHistorico = category === 'Histórico';
                const isExpandedCat = isCategoryExpanded(category);

                return (
                  <div key={category} className={isHistorico ? 'ml-4' : ''}>
                    {/* Linha do nó pai (categoria) — clique no chevron expande, clique no checkbox seleciona */}
                    <div className={`flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors
                      ${isHistorico ? 'border-l-2 border-amber-400 pl-3' : ''}`}>

                      {/* Chevron de expand/collapse */}
                      <button
                        onClick={() => toggleExpanded(category)}
                        className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-[#F1F5F9] transition-colors"
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isExpandedCat ? '' : '-rotate-90'}`} />
                      </button>

                      {/* Checkbox da categoria */}
                      <button
                        onClick={() => toggleCategory(category)}
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all
                          ${allSel ? 'bg-[#D93030] border-[#D93030]' : someSel ? 'bg-[#D93030]/30 border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557] hover:border-[#D93030]'}`}
                      >
                        {allSel && <Check className="w-2.5 h-2.5 text-white" />}
                        {someSel && !allSel && <div className="w-2 h-0.5 bg-[#D93030] rounded" />}
                      </button>

                      {/* Badge da categoria + indicação filho */}
                      <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${CATEGORY_COLORS[category]}`}>
                          {category}
                        </span>
                        {isHistorico && (
                          <span className="text-[9px] text-amber-500/70 whitespace-nowrap">↳ Proposta</span>
                        )}
                        <span className="text-[10px] text-gray-400 dark:text-[#64748B] ml-auto flex-shrink-0">
                          {catFields.filter(f => f.selected).length}/{catFields.length}
                        </span>
                      </div>
                    </div>

                    {/* Filhos — colapsáveis */}
                    {isExpandedCat && (
                      <div className="ml-7 mt-0.5 space-y-0.5">
                        {catFields.map(field => (
                          <label
                            key={field.id}
                            className="flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors group"
                          >
                            <button
                              onClick={() => toggleField(field.id)}
                              className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all
                                ${field.selected ? 'bg-[#D93030] border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557] hover:border-[#D93030]'}`}
                            >
                              {field.selected && <Check className="w-2 h-2 text-white" />}
                            </button>
                            <span className="text-xs text-gray-700 dark:text-[#CBD5E1] group-hover:text-[#D93030] transition-colors leading-tight">
                              {field.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preview hierárquico — 2/3 */}
          <div className="lg:col-span-2 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-[#2E3447] flex-shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#D93030]" />
                <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">
                  Pré-visualização ({filteredLojistas.length} unidades)
                </span>
              </div>
              <div className="flex gap-2">
                {/* Legenda de categorias */}
                {CATEGORY_ORDER.filter(c => selectedFields.some(f => f.category === c)).map(c => (
                  <span key={c} className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${CATEGORY_COLORS[c]}`}>{c}</span>
                ))}
              </div>
            </div>

            {selectedFields.length === 0 ? (
              <div className="flex-1 flex items-center justify-center text-gray-400 dark:text-[#64748B]">
                <div className="text-center">
                  <CheckSquare className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Selecione ao menos um campo para pré-visualizar</p>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredLojistas.slice(0, 8).map(l => {
                  const props = allPropostas.filter(p => p.unidade === l.unidade);
                  const dispExpanded = true;

                  return (
                    <div key={l.id} className="border border-red-200 dark:border-red-900/30 rounded-xl overflow-hidden">

                      {/* ══ CABEÇALHO DISPONIBILIDADE ══ */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-900/20">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                          Disponibilidade
                        </span>
                      </div>

                      {/* ══ TABELA DISPONIBILIDADE ══ */}
                      {dispFields.length > 0 && (
                        <DataTable
                          data={[{
                            ...Object.fromEntries(dispFields.map(f => [f.id, 
                              f.id === 'unidade' ? l.unidade :
                              f.id === 'piso' ? (l.piso === 'P' ? 'Primeiro Piso' : l.piso === 'S' ? 'Segundo Piso' : 'Terceiro Piso') :
                              f.id === 'corredor' ? l.corredor :
                              f.id === 'area' ? `${l.area} m²` :
                              f.id === 'statusUnidade' ? l.status : '—'
                            ]))
                          }]}
                          columnConfig={Object.fromEntries(dispFields.map(f => [f.id, { label: f.label, _allowFilter: false, sortable: false }]))}
                        />
                      )}

                      {/* ══ SUB-RELATÓRIOS DE PROPOSTA (só quando expandido) ══ */}
                      {dispExpanded && (
                        <div className="p-3 space-y-2 bg-white dark:bg-[#1A1F2E]">
                          {props.length === 0 ? (
                            <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-2">
                              Nenhuma proposta vinculada
                            </p>
                          ) : props.map(p => {
                            const propExpanded = true;
                            // Buscar lojista pelo lojistaId da proposta (não pela unidade)
                            // Dados da loja vêm de nomeFantasia/segmento/responsavel da Proposta
                            const edicoes = histFields.length > 0
                              ? getEdicoesByProposal(p.id)
                              : [];
                            const hasChildren =
                              (false) ||
                              edicoes.length > 0;

                            return (
                              <div key={p.id} className="border border-purple-200 dark:border-purple-800/40 rounded-lg overflow-hidden">

                                {/* — CABEÇALHO PROPOSTA — */}
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-800/30">
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                                    Proposta
                                  </span>
                                </div>

                                {/* — TABELA PROPOSTA — */}
                                {propFields.length > 0 && (
                                  <DataTable
                                    data={[{
                                      ...Object.fromEntries(propFields.map(f => [f.id,
                                        f.id === 'propCodigo' ? p.id :
                                        f.id === 'propTipo' ? p.tipo :
                                        f.id === 'propValor' ? fmtCurrency(p.valorProposto) :
                                        f.id === 'propStatus' ? p.status :
                                        f.id === 'propCriacao' ? p.dataCriacao :
                                        f.id === 'propVencimento' ? (p.dataVencimento || '—') :
                                        f.id === 'propResponsavel' ? (p.responsavel || '—') : '—'
                                      ]))
                                    }]}
                                    columnConfig={Object.fromEntries(propFields.map(f => [f.id, { label: f.label, _allowFilter: false, sortable: false }]))}
                                  />
                                )}

                                {/* — SUB-BLOCOS LOJISTA E HISTÓRICO (só quando proposta expandida) — */}
                                {propExpanded && (
                                  <div className="p-2 space-y-2 bg-white dark:bg-[#1A1F2E]">

                                    {/* LOJISTA — só renderiza se p.nomeFantasia || '—'Id existir e lojista for encontrado */}
                                    {false && (
                                      <div className="border border-teal-200 dark:border-teal-800/40 rounded-lg overflow-hidden">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-teal-50 dark:bg-teal-900/20 border-b border-teal-100 dark:border-teal-800/30">
                                          <span className="text-[9px] font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                                            Dados da Loja
                                          </span>
                                        </div>

                                      </div>
                                    )}

                                    {/* HISTÓRICO — só renderiza se houver edições e campos selecionados */}
                                    {edicoes.length > 0 && histFields.length > 0 && (
                                      <div className="border border-amber-200 dark:border-amber-800/40 rounded-lg overflow-hidden">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-800/30">
                                          <span className="text-[9px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                                            Histórico
                                          </span>
                                        </div>
                                        <DataTable
                                          data={edicoes.slice(0, 5).map(e => ({
                                            ...Object.fromEntries(histFields.map(f => [f.id,
                                              f.id === 'histData'       ? new Date(e.editadoEm).toLocaleString('pt-BR') :
                                              f.id === 'histEditor'     ? e.editadoPorNome :
                                              f.id === 'histStatusAnt'  ? e.snapshot.status :
                                              f.id === 'histStatusNovo' ? p.status : '—'
                                            ]))
                                          }))}
                                          columnConfig={Object.fromEntries(histFields.map(f => [f.id, { label: f.label, _allowFilter: false, sortable: false }]))}
                                        />
                                      </div>
                                    )}

                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex-shrink-0 px-5 py-3 bg-gray-50/50 dark:bg-[#1A1F2E] border-t border-gray-100 dark:border-[#2E3447] flex items-center justify-between">
              <p className="text-xs text-gray-500 dark:text-[#64748B]">
                Exibindo prévia de {Math.min(8, filteredLojistas.length)} de {filteredLojistas.length} unidades
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => exportFormat === 'xlsx' ? handleExportXLSX() : handleExportPDF()}
                  disabled={selectedFields.length === 0}
                  className="flex items-center gap-1.5 bg-[#D93030] hover:bg-[#c02828] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Exportar
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Campos a Exportar mobile — região expansível com flex-1 quando aberta */}
        <div className={`sm:hidden bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden flex flex-col
          ${mobileReportSection === 'campos' ? 'flex-1 min-h-0' : 'flex-shrink-0'}`}>

          <button
            onClick={() => toggleReportSection('campos')}
            className="w-full flex items-center justify-between px-4 py-3 text-left flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#D93030]" />
              <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">Campos a Exportar</span>
              <span className="text-[10px] text-gray-400 dark:text-[#64748B] font-normal">({selectedFields.length}/{fields.length})</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobileReportSection === 'campos' ? '' : '-rotate-90'}`} />
          </button>

          {mobileReportSection === 'campos' && (
            <div className="flex-1 overflow-y-auto space-y-1 px-4 pb-4 border-t border-gray-100 dark:border-[#2E3447]">
              {/* Linha de controle — dentro do scroll */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-[#2E3447] mb-2 mt-3">
                <span className="text-[10px] text-gray-400 dark:text-[#64748B]">{selectedFields.length} de {fields.length} selecionados</span>
                <div className="flex gap-2">
                  <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: true })))} className="text-[10px] text-[#D93030] hover:underline">Todos</button>
                  <span className="text-[10px] text-gray-300 dark:text-[#3E4557]">|</span>
                  <button onClick={() => setFields(prev => prev.map(f => ({ ...f, selected: false })))} className="text-[10px] text-gray-500 hover:underline">Nenhum</button>
                </div>
              </div>

              {CATEGORY_ORDER.map(category => {
                const catFields = fields.filter(f => f.category === category);
                const allSel = catFields.every(f => f.selected);
                const someSel = catFields.some(f => f.selected);
                const isHistorico = category === 'Histórico';
                const isExpandedCat = isCategoryExpanded(category);

                return (
                  <div key={category} className={isHistorico ? 'ml-4' : ''}>
                    <div className={`flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors
                      ${isHistorico ? 'border-l-2 border-amber-400 pl-3' : ''}`}>
                      <button onClick={() => toggleExpanded(category)} className="flex-shrink-0">
                        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isExpandedCat ? '' : '-rotate-90'}`} />
                      </button>
                      <div
                        onClick={() => toggleCategory(category)}
                        className={`w-3.5 h-3.5 border rounded flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors
                          ${allSel ? 'bg-[#D93030] border-[#D93030]' : someSel ? 'bg-gray-300 dark:bg-[#3E4557] border-gray-400 dark:border-[#64748B]' : 'border-gray-400 dark:border-[#64748B]'}`}
                      >
                        {allSel && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                        {someSel && !allSel && <div className="w-1.5 h-0.5 bg-gray-700 dark:bg-[#CBD5E1]" />}
                      </div>
                      <span className={`text-xs font-semibold flex-1 ${CATEGORY_COLORS[category]}`}>{category}</span>
                      <span className="text-[10px] text-gray-400 dark:text-[#64748B] font-mono">{catFields.filter(f => f.selected).length}/{catFields.length}</span>
                    </div>
                    {isExpandedCat && (
                      <div className="ml-6 space-y-0.5 mt-0.5">
                        {catFields.map(field => (
                          <div key={field.id}
                            onClick={() => toggleField(field.id)}
                            className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-50 dark:hover:bg-[#1A1F2E] cursor-pointer transition-colors">
                            <div className={`w-3 h-3 border rounded flex items-center justify-center flex-shrink-0
                              ${field.selected ? 'bg-[#D93030] border-[#D93030]' : 'border-gray-300 dark:border-[#64748B]'}`}>
                              {field.selected && <Check className="w-2 h-2 text-white" strokeWidth={3} />}
                            </div>
                            <span className="text-xs text-gray-700 dark:text-[#CBD5E1] flex-1">{field.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* FAB — mobile only */}
      <button
        onClick={() => setShowPreviewModal(true)}
        className="sm:hidden fixed bottom-20 right-4 z-[70] w-14 h-14 bg-[#D93030] hover:bg-[#c02828] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        title="Pré-visualizar relatório"
      >
        <FileText className="w-6 h-6" />
      </button>

      {/* Modal Preview — mobile only */}
      {showPreviewModal && (
        <div className="sm:hidden fixed inset-0 z-[80] flex flex-col bg-white dark:bg-[#1E2435]">
          <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#8B1A1A] to-[#D93030]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Pré-visualização ({filteredLojistas.length} unidades)
              </span>
            </div>
            <button
              onClick={() => setShowPreviewModal(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {selectedFields.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-[#64748B]">
                <CheckSquare className="w-8 h-8 mb-2 opacity-40" />
                <p className="text-sm">Selecione ao menos um campo</p>
              </div>
            ) : (
              filteredLojistas.slice(0, 8).map(l => {
                const props = allPropostas.filter(p => p.unidade === l.unidade);
                return (
                  <div key={l.id} className={`flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#242938] border ${CATEGORY_BORDER.Disponibilidade}`}>
                    {hasDisp && (
                      <div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-900/20">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                            Disponibilidade
                          </span>
                        </div>
                        <div className="p-3 space-y-1.5">
                          {dispFields.map(f => (
                            <div key={f.id} className="flex items-center justify-between text-xs">
                              <span className="text-gray-500 dark:text-[#94A3B8]">{f.label}:</span>
                              <span className="font-medium text-gray-900 dark:text-[#F1F5F9]">
                                {f.id === 'unidade' ? l.unidade : f.id === 'piso' ? (l.piso === 'P' ? 'Primeiro' : l.piso === 'S' ? 'Segundo' : 'Terceiro') : f.id === 'corredor' ? l.corredor : f.id === 'area' ? `${l.area} m²` : l.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {props.map(p => {
                      const lojista: { nome: string; cnpj: string; segmento: string; responsavel: string; email: string; telefone: string } | undefined = undefined; // lojistaId não disponível na API
                      const edicoes = histFields.length > 0 ? getEdicoesByProposal(p.id) : [];
                      return (
                        <div key={p.id}>
                          {hasProp && (
                            <div className={`ml-3 rounded-lg overflow-hidden ${CATEGORY_BORDER.Proposta}`}>
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-100 dark:border-purple-800/30">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                                  Proposta
                                </span>
                              </div>
                              <div className="p-3 space-y-1.5">
                                {propFields.map(f => (
                                  <div key={f.id} className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500 dark:text-[#94A3B8]">{f.label}:</span>
                                    <span className="font-medium text-gray-900 dark:text-[#F1F5F9]">
                                      {f.id === 'propCodigo' ? p.id : f.id === 'propTipo' ? p.tipo : f.id === 'propValor' ? fmtCurrency(p.valorProposto) : f.id === 'propStatus' ? p.status : f.id === 'propCriacao' ? p.dataCriacao : f.id === 'propVencimento' ? p.dataVencimento : p.responsavel}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>

          <div className="flex-shrink-0 px-4 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50 dark:bg-[#1A1F2E] flex items-center justify-between gap-3">
            <div className="flex border border-gray-200 dark:border-[#2E3447] rounded-lg overflow-hidden">
              {(['xlsx', 'pdf'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setExportFormat(f)}
                  className={`px-3 py-2 text-xs font-medium transition-colors
                    ${exportFormat === f ? 'bg-[#D93030] text-white' : 'text-gray-600 dark:text-[#94A3B8]'}`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => { exportFormat === 'xlsx' ? handleExportXLSX() : handleExportPDF(); setShowPreviewModal(false); }}
              disabled={selectedFields.length === 0}
              className="flex-1 flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] disabled:opacity-50 text-white rounded-lg px-4 py-2 text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Exportar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
````

## File: Figma/src/app/pages/Login.tsx
````typescript
/**
 * Login.tsx — Tela de autenticação (MODO PROTÓTIPO).
 *
 * Comportamento atual:
 *  - Qualquer e-mail e senha são aceitos
 *  - Chama login() do AuthContext com usuário fixo 'Administrador'
 *  - Redireciona para a rota de origem (location.state.from) ou
 *    para /comercial/dashboard se não houver rota anterior
 *
 * O campo de senha tem defaultValue="123" para facilitar os testes
 * durante o protótipo — remover em produção.
 *
 * Para produção:
 *  - Chamar PropostasService.login({ email, senha }) ou similar
 *  - Tratar erros de autenticação (401) com mensagem na tela
 *  - Habilitar/desabilitar o botão com base no useApiHealth()
 */
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Building2, Lock, Mail } from "lucide-react";
import { useAuth } from "../AuthContext";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;

    // MODO PROTÓTIPO — sem validação real, qualquer credencial entra
    login('proto-token', {
      nome: 'Administrador',
      email: email || 'admin@flamboyant.com.br',
      setor: 'Comercial',
    });

    const from = (location.state as any)?.from?.pathname || "/comercial/dashboard";
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] dark:bg-[#0F1117] flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B1A1A] to-[#a43030] dark:from-[#8B1A1A] dark:to-[#E04444] shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <Building2 className="w-8 h-8 text-[#C8A882] dark:text-[#D4A96A]" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-[#F1F5F9]">
            JP Mall
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-[#94A3B8]">
            Sistema Comercial
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-[#242938] py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border-t-4 border-[#8B1A1A] dark:border-[#E04444]">

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 rounded-lg p-3 mb-6 text-sm text-center">
            Modo protótipo — qualquer credencial é aceita
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#94A3B8]">
                E-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 dark:text-[#64748B]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  defaultValue="admin@flamboyant.com.br"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] rounded-md focus:outline-none focus:ring-[#D93030] focus:border-[#D93030] sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-[#94A3B8]">
                Senha
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 dark:text-[#64748B]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  defaultValue="123"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] rounded-md focus:outline-none focus:ring-[#D93030] focus:border-[#D93030] sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#D93030] hover:bg-[#b92828] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D93030] transition-colors duration-200 disabled:opacity-50"
              >
                {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                {loading ? 'Entrando...' : 'Entrar no Sistema'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/routes.tsx
````typescript
// Arquivo não utilizado — roteamento centralizado em App.tsx
export {};
````

## File: Figma/package.json
````json
{
  "name": "@figma/my-make-file",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "vite build",
    "dev": "vite"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@popperjs/core": "2.11.8",
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-aspect-ratio": "1.1.2",
    "@radix-ui/react-avatar": "1.1.3",
    "@radix-ui/react-checkbox": "1.1.4",
    "@radix-ui/react-collapsible": "1.1.3",
    "@radix-ui/react-context-menu": "2.2.6",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-dropdown-menu": "2.1.6",
    "@radix-ui/react-hover-card": "1.1.6",
    "@radix-ui/react-label": "2.1.2",
    "@radix-ui/react-menubar": "1.1.6",
    "@radix-ui/react-navigation-menu": "1.2.5",
    "@radix-ui/react-popover": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-radio-group": "1.2.3",
    "@radix-ui/react-scroll-area": "1.2.3",
    "@radix-ui/react-select": "2.1.6",
    "@radix-ui/react-separator": "1.1.2",
    "@radix-ui/react-slider": "1.2.3",
    "@radix-ui/react-slot": "1.1.2",
    "@radix-ui/react-switch": "1.1.3",
    "@radix-ui/react-tabs": "1.1.3",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "canvas-confetti": "1.9.4",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "3.6.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
    "jspdf": "^4.2.1",
    "jspdf-autotable": "^5.0.7",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "next-themes": "0.4.6",
    "react-day-picker": "8.10.1",
    "react-dnd": "16.0.1",
    "react-dnd-html5-backend": "16.0.1",
    "react-hook-form": "7.55.0",
    "react-popper": "2.3.0",
    "react-resizable-panels": "2.1.7",
    "react-responsive-masonry": "2.7.1",
    "react-router": "7.13.0",
    "react-slick": "0.31.0",
    "recharts": "2.15.2",
    "sonner": "2.0.3",
    "tailwind-merge": "3.2.0",
    "tw-animate-css": "1.3.8",
    "vaul": "1.1.2",
    "xlsx": "^0.18.5"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  },
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "peerDependenciesMeta": {
    "react": {
      "optional": true
    },
    "react-dom": {
      "optional": true
    }
  },
  "pnpm": {
    "overrides": {
      "vite": "6.3.5"
    }
  }
}
````

## File: Figma/src/app/components/Layout.tsx
````typescript
/**
 * Layout.tsx — Shell principal da aplicação autenticada.
 *
 * Estrutura visual:
 *  ┌─────────────────────────────────────────────────────┐
 *  │ Sidebar (fixo, retrátil)  │  Header (sub-tabs)      │
 *  │  - Logo JP Mall           │  Dashboard | Propostas  │
 *  │  - Nav: Comercial         │  Disponibilidade | Rel. │
 *  │  - Usuário + Logout       ├─────────────────────────┤
 *  │                           │  <Outlet />             │
 *  │                           │  (conteúdo da rota)     │
 *  └───────────────────────────┴─────────────────────────┘
 *  [Mobile: nav bar inferior com 4 ícones]
 *
 * Responsabilidades:
 *  - Sidebar retrátil: estado persistido no localStorage
 *  - Dark mode: toggle com persistência no localStorage
 *  - Sessão do usuário: lida do sessionStorage via getUserSession()
 *  - Sub-tabs: geradas dinamicamente pelo navigationItems
 *  - Logout: chama useAuth().logout() e redireciona para /
 *  - handleComercialClick: restaura a última aba visitada em /comercial/*
 *
 * O Layout usa <Outlet /> do React Router para renderizar a página
 * filha da rota atual sem precisar conhecê-la diretamente.
 */
import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router";
import {
  Briefcase,
  Menu,
  Bell,
  Sun,
  Moon,
  LogOut,
  ChevronLeft,
  User,
  LayoutDashboard,
  FileText,
  Store,
  BarChart2
} from "lucide-react";
import logoFlamboyant from "../../assets/isotipo_flamboyant.webp";
import { getUserSession } from "../data/comercialStore";
import { useAuth } from "../AuthContext";
import { useApiHealth } from "../data/useApiHealth";
import { WifiOff } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: any;
  path: string;
  subTabs?: { label: string; path: string }[];
}

const navigationItems: NavItem[] = [
  {
    id: "comercial",
    label: "Comercial",
    icon: Briefcase,
    path: "/comercial/dashboard",
    subTabs: [
      { label: "Dashboard", path: "/comercial/dashboard" },
      { label: "Propostas", path: "/comercial/propostas" },
      { label: "Disponibilidade", path: "/comercial/disponibilidade" },
      { label: "Relatórios", path: "/comercial/relatorios" },
    ]
  },
];

function getInitials(name: string): string {
  return name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0]).join('').toUpperCase() || 'JP';
}

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem("sidebar_open");
    return saved === null ? true : saved === "true";
  });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("jp-mall-dark-mode");
    return saved === "true";
  });
  const [userSession, setUserSession] = useState(getUserSession());
  const apiStatus = useApiHealth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUserSession(getUserSession());
    if (location.pathname.startsWith('/comercial/')) {
      sessionStorage.setItem('jp-mall-comercial-last-tab', location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("jp-mall-dark-mode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("sidebar_open", sidebarOpen.toString());
  }, [sidebarOpen]);

  const currentSection = navigationItems.find(item =>
    location.pathname.startsWith(item.path) ||
    item.subTabs?.some(sub => location.pathname.startsWith(sub.path))
  );

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const handleComercialClick = (e: React.MouseEvent) => {
    const saved = sessionStorage.getItem('jp-mall-comercial-last-tab');
    if (saved) {
      e.preventDefault();
      navigate(saved);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden w-full bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors duration-[0ms]">

      {/* Floating controls — visible when sidebar is closed */}
      <div className={`fixed top-0 left-0 z-50 h-16 flex items-center gap-2 px-4 transition-all duration-60 ease-in-out ${
        sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-9 h-9 bg-[#8B1A1A] text-white rounded-lg flex items-center justify-center shadow-md hover:bg-[#a43030] transition-colors"
          aria-label="Abrir menu"
        >
          <Menu className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => navigate("/comercial/dashboard")}
          className="h-9 flex items-center hover:opacity-80 transition-opacity"
          aria-label="Dashboard"
        >
          <img
            src={logoFlamboyant}
            alt="JP Mall"
            className="h-8 w-auto object-contain"
          />
        </button>
      </div>

      {/* Overlay escuro — mobile only, visível quando sidebar aberto */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[89] bg-black/50 backdrop-blur-sm sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-[#8B1A1A] text-white flex flex-col overflow-hidden
          transition-all duration-200 ease-in-out
          fixed top-0 left-0 h-full z-[90]
          sm:relative sm:z-auto sm:flex-shrink-0
          ${sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full sm:w-0 sm:translate-x-0"}
        `}
      >
        {/* Top: JP Mall + Close button */}
        <div className="h-16 flex items-center px-4 border-b border-white/10 flex-shrink-0 gap-2">
          <span className="text-sm font-semibold text-white whitespace-nowrap flex-1 truncate tracking-wide">
            JP Mall
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors flex-shrink-0"
            aria-label="Fechar menu"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith('/comercial/');

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={item.id === 'comercial' ? handleComercialClick : undefined}
                className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 mr-3 flex-shrink-0 opacity-90" strokeWidth={1.5} />
                <span className="truncate">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer: User info + Logout */}
        <div className="px-3 py-4 border-t border-white/10 flex-shrink-0 space-y-2">
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full bg-[#C8A882] text-[#8B1A1A] font-bold flex items-center justify-center text-xs flex-shrink-0">
              {getInitials(userSession.name || 'JP Mall')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">{userSession.name || 'Gerente JP Mall'}</p>
              <p className="text-xs text-white/50 truncate">{userSession.email || 'gerente@jpmall.com.br'}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
            <span>Sair do sistema</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className={`relative h-16 bg-white dark:bg-[#242938] border-b border-gray-200 dark:border-[#2E3447] flex items-center z-10 transition-all duration-[75ms] ${sidebarOpen ? 'sm:px-6 px-[4.5rem]' : 'pl-[4.5rem] sm:pl-[7.5rem] pr-6'}`}>
          {/* Center: sub-tabs — absolutely centered in the full header width */}
          {currentSection?.subTabs && currentSection.subTabs.length > 0 && (
            <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none">
              <div className="flex items-center gap-14 pointer-events-auto gap-27">
                {currentSection.subTabs.map((tab) => {
                  const isActiveTab = location.pathname === tab.path;
                  return (
                    <NavLink
                      key={tab.path}
                      to={tab.path}
                      className={`flex items-center transition-colors whitespace-nowrap text-sm font-medium ${
                        isActiveTab
                          ? 'text-[#D93030] dark:text-[#E04444]'
                          : 'text-gray-500 dark:text-[#94A3B8] hover:text-gray-800 dark:hover:text-[#F1F5F9]'
                      }`}
                    >
                      {tab.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}

          {/* Right: controls */}
          <div className="relative z-10 flex items-center gap-2 ml-auto">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-400 dark:text-[#94A3B8] hover:text-gray-600 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-lg transition-colors duration-[75ms]"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-hidden flex flex-col bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors duration-[75ms] pb-16 sm:pb-0">
          <Outlet />
        </main>
      </div>

      {/* Bottom Navigation — mobile only */}
      <nav className="block sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#242938] border-t border-gray-200 dark:border-[#2E3447] flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
        {[
          { label: 'Dashboard',       icon: LayoutDashboard, path: '/comercial/dashboard' },
          { label: 'Propostas',       icon: FileText,         path: '/comercial/propostas' },
          { label: 'Disponibilidade', icon: Store,            path: '/comercial/disponibilidade' },
          { label: 'Relatórios',      icon: BarChart2,        path: '/comercial/relatorios' },
        ].map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-1 py-1 rounded-lg transition-colors flex-1
                ${isActive
                  ? 'text-[#D93030] dark:text-[#E04444]'
                  : 'text-gray-400 dark:text-[#64748B]'}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] font-medium leading-tight text-center whitespace-nowrap">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
````

## File: README.md
````markdown
# Projeto-Flamboyant 🏬

O projeto tem como objetivo a concepção de uma plataforma integrada de gestão de lojistas, capaz de consolidar informações provenientes de diferentes áreas do shopping, permitindo rastreabilidade, análise estratégica e apoio à tomada de decisão.

## 📋 Sumário

- [🚀 Começando](#-começando)
  - [📋 Pré-requisitos](#-pré-requisitos)
  - [🔧 Instalação do frontend](#-instalação-do-frontend)
- [⚙️ Executando a API](#️-executando-a-api)
  - [📋 Pré-requisitos da API](#-pré-requisitos-da-api)
  - [🔧 Configuração e execução](#-configuração-e-execução)
- [🧪 Testando com Postman](#-testando-com-postman)
  - [📥 Importando a coleção](#-importando-a-coleção)
  - [🌐 Configurando o ambiente](#-configurando-o-ambiente)
- [🗂️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🛠️ Construído com](#️-construído-com)
- [✒️ Autores](#️-autores)

---

> [!IMPORTANT]
> **Atenção ao diretório de execução!**
> Todos os comandos descritos neste guia devem ser executados dentro do diretório correto de cada parte do projeto. Executar um comando no diretório errado causará erros. Fique atento ao `cd` indicado antes de cada bloco de comandos.

> [!WARNING]
> **Não faça alterações diretamente na branch `main`!**
>
> Sempre crie uma branch separada antes de começar qualquer desenvolvimento.
>
> **Via terminal:**
> ```bash
> git checkout main
> git pull
> git checkout -b feature/nome-da-sua-funcionalidade
> ```
>
> **Via GitHub Desktop:**
> 1. Certifique-se de estar na branch `main` no seletor do topo
> 2. Clique em **Fetch origin** para garantir que está atualizado
> 3. Vá em **Branch → New Branch** (`Ctrl+Shift+N`)
> 4. Digite o nome no padrão `feature/nome-da-funcionalidade` e clique em **Create Branch**
> 5. A nova branch já estará selecionada e pronta para receber suas alterações
>
> **Por que isso é importante?**
>
> A `main` representa o estado estável e funcional do projeto — o código que todos os membros da equipe tomam como base. Commitar diretamente nela traz riscos sérios:
>
> - **Instabilidade para o time:** se um trabalho incompleto ou com bug for enviado à `main`, qualquer outro desenvolvedor que atualizar seu repositório receberá código quebrado, travando o progresso de toda a equipe.
> - **Conflitos difíceis de resolver:** com múltiplos desenvolvedores enviando código simultaneamente para o mesmo branch, conflitos de merge se tornam frequentes e difíceis de rastrear.
> - **Impossibilidade de code review:** trabalhar em branches separadas permite abrir Pull Requests, onde o código pode ser revisado antes de entrar na base principal — prática essencial para a qualidade do software.
> - **Dificuldade em reverter erros:** sem o isolamento por branches, identificar e desfazer um bug introduzido na `main` exige muito mais esforço do que simplesmente fechar ou reverter uma branch isolada.
>
> Essa prática é um dos pilares do **Git Flow**, workflow criado por Vincent Driessen e adotado amplamente pela indústria de software, que define a `main` como exclusiva para código em produção — estável, revisado e validado.
>
> **Fontes:**
> - ABREU, Almerindo. *Gitflow: O modelo de trabalho orientado à branches*. 2021. Disponível em: https://almerindoabreu.netlify.app/boas-práticas-git-flow/
> - PRESUMIDO, Victor. *Git: Melhores práticas*. Disponível em: https://blog.victorpre.com/git-melhores-praticas/
> - GitLab. *Version Control Best Practices*. Disponível em: https://about.gitlab.com/topics/version-control/version-control-best-practices/

---

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado na sua máquina:

- [Node.js](https://nodejs.org) v18 ou superior (recomendado: 20 LTS)
- [pnpm](https://pnpm.io) (recomendado) ou npm/yarn

Verifique se o Node.js está instalado:

```bash
node --version
```

Instale o pnpm globalmente (caso ainda não tenha):

```bash
npm install -g pnpm
```

### 🔧 Instalação do frontend

**1. Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/projeto-flamboyant.git
```

**2. Acesse a pasta do frontend:**

```bash
cd Figma
```

**3. Instale as dependências do projeto:**

```bash
npm install
```

**4. Instale o `react` e `react-dom` manualmente:**

> `react` e `react-dom` estão declarados como `peerDependencies` opcionais no `package.json`, o que significa que alguns gerenciadores de pacotes podem não instalá-los automaticamente. Execute este segundo comando para garantir que estejam presentes:

```bash
npm install react@18.3.1 react-dom@18.3.1
```

**5. Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Executando a API

### 📋 Pré-requisitos da API

Antes de começar, você vai precisar ter instalado:

- [Go](https://go.dev/dl/) v1.21 ou superior
- [Visual Studio Code](https://code.visualstudio.com/) com a extensão [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) instalada

Verifique se o Go está instalado:

```bash
go version
```

Para instalar a extensão no VS Code:

1. Abra o VS Code
2. Acesse a aba **Extensions** (`Ctrl+Shift+X`)
3. Pesquise por `Go` e instale a extensão oficial da **Go Team at Google**

### 🔧 Configuração e execução

**1. Abra a pasta da API no VS Code:**

```bash
cd API
```

**2. Instale as dependências Go:**

```bash
go mod tidy
```

**3. Execute a API:**

```bash
go run cmd/main.go
```

A API estará disponível em: [http://localhost:8080](http://localhost:8080)

Para verificar se está no ar, acesse no navegador ou dispare pelo Postman:

- **Método:** `GET`
- **URL:** `http://localhost:8080/ping`
- **Resposta esperada:** `200 OK` → `{ "message": "pong" }`

---

## 🧪 Testando com Postman

### 📥 Importando a coleção

1. Abra o Postman
2. Clique em **Import** no canto superior esquerdo
3. Selecione a pasta `postman/collections/` deste repositório
4. O Postman detectará os arquivos `.yaml` e importará a coleção automaticamente

### 🌐 Configurando o ambiente

1. No Postman, vá em **Environments** → **Create Environment**
2. Adicione as seguintes variáveis:

| Variável | Valor | Descrição |
|---|---|---|
| `base_url` | `http://localhost:8080` | URL base da API |

3. Selecione o ambiente criado no seletor do canto superior direito

> **Atenção:** os arquivos de `environments/` e `globals/` estão no `.gitignore` pois podem conter credenciais. Cada membro da equipe deve criar o seu ambiente local conforme a tabela acima.

---

## 🗂️ Estrutura do Projeto

```
Projeto-Flamboyant/
├── API/                        → API REST em Go (Gin)
│   ├── cmd/
│   │   └── main.go             → Ponto de entrada da API
│   ├── go.mod
│   └── go.sum
├── Figma/                      → Frontend React/Vite
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     → Layout, modais, componentes UI
│   │   │   ├── data/           → Dados mockados e store
│   │   │   ├── pages/          → Páginas por seção (sinistros, comercial…)
│   │   │   ├── App.tsx         → Raiz da aplicação
│   │   │   ├── routes.tsx      → Definição de rotas
│   │   │   └── store.ts        → Tipos e dados dos sinistros
│   │   ├── assets/
│   │   ├── styles/
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── GO/
│   └── models.go               → Structs Go das entidades do projeto
├── postman/
│   ├── collections/            → Coleções de requisições por recurso
│   ├── specs/                  → Especificações OpenAPI/YAML da API
│   ├── flows/                  → Fluxos de teste encadeados
│   └── mocks/                  → Servidores mock para testes sem API real
└── README.md
```

---

## 🛠️ Construído com

- [React](https://react.dev) `18.3.1` — Framework principal do frontend
- [Vite](https://vitejs.dev) `6.3.5` — Bundler e servidor de desenvolvimento
- [TypeScript](https://www.typescriptlang.org) — Tipagem estática
- [Tailwind CSS](https://tailwindcss.com) `4.1.12` — Estilização
- [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) — Componentes de interface
- [React Router](https://reactrouter.com) `7.13.0` — Roteamento
- [Recharts](https://recharts.org) — Gráficos e visualizações
- [React Hook Form](https://react-hook-form.com) — Gerenciamento de formulários
- [Go](https://go.dev) `1.21+` — Linguagem da API
- [Gin](https://gin-gonic.com) — Framework web para a API
- [Postman](https://www.postman.com) — Testes e documentação da API

---

## ✒️ Autores

- **DanielNovaiz** — [github.com/DanielNovaiz](https://github.com/DanielNovaiz)
- **Felipe Fernandes** — [github.com/FELIIPE505](https://github.com/FELIIPE505)
- **Herlison Silva Assunção** — [github.com/herli-son-ufg](https://github.com/herli-son-ufg)
- **Matheus-slvmr** — [github.com/Matheus-slvmr](https://github.com/Matheus-slvmr)
- **militao-discente** — [github.com/militao-discente](https://github.com/militao-discente)

---

⌨️ com ❤️ pela equipe do Projeto-Flamboyant 😊
````
