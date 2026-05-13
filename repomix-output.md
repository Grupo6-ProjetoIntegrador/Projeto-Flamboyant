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
API/cmd/main.go
API/go.mod
API/GO/models.go
API/jpmall.db
Banco de dados/jp-mall.sql
Figma/ATTRIBUTIONS.md
Figma/default_shadcn_theme.css
Figma/guidelines/Guidelines.md
Figma/index.html
Figma/package.json
Figma/pnpm-workspace.yaml
Figma/postcss.config.mjs
Figma/README.md
Figma/src/app/App.tsx
Figma/src/app/components/figma/ImageWithFallback.tsx
Figma/src/app/components/FilterSelect.tsx
Figma/src/app/components/Layout.tsx
Figma/src/app/components/LojistProfileModal.tsx
Figma/src/app/components/SinistroForm.tsx
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
Figma/src/app/data/comercialData.ts
Figma/src/app/data/comercialStore.ts
Figma/src/app/pages/ClaimDetails.tsx
Figma/src/app/pages/ClaimsHistory.tsx
Figma/src/app/pages/comercial/ComercialAvailability.tsx
Figma/src/app/pages/comercial/ComercialContracts.tsx
Figma/src/app/pages/comercial/ComercialDashboard.tsx
Figma/src/app/pages/comercial/ComercialHistory.tsx
Figma/src/app/pages/comercial/ComercialOverview.tsx
Figma/src/app/pages/comercial/ComercialProposals.tsx
Figma/src/app/pages/comercial/ComercialReports.tsx
Figma/src/app/pages/Dashboard.tsx
Figma/src/app/pages/EmptySection.tsx
Figma/src/app/pages/Login.tsx
Figma/src/app/pages/NewClaim.tsx
Figma/src/app/pages/Reports.tsx
Figma/src/app/pages/sinistros/SinistrosDashboard.tsx
Figma/src/app/pages/sinistros/SinistrosReports.tsx
Figma/src/app/pages/StoreDirectory.tsx
Figma/src/app/routes.tsx
Figma/src/app/store.ts
Figma/src/assets/b02a990bf2c2da1561fd2f42223c5d2ce71ec09a.png
Figma/src/assets/d529125559904c2ba18f90969ebcb78021da0611.png
Figma/src/imports/DESIGN_SYSTEM__JP_Mall_Corporativo.txt
Figma/src/imports/logo_2024.png
Figma/src/imports/Pacote_1_(4).pdf
Figma/src/imports/pasted_text/layout-sidebar-update.tsx
Figma/src/main.tsx
Figma/src/styles/fonts.css
Figma/src/styles/globals.css
Figma/src/styles/index.css
Figma/src/styles/tailwind.css
Figma/src/styles/theme.css
Figma/vite.config.ts
postman/collections/JP-MALL-Testes/.resources/definition.yaml
postman/collections/JP-MALL-Testes/ping.request.yaml
README.md
```

# Files

## File: API/GO/models.go
````go
// Package models define as structs que representam as tabelas
// do banco de dados jp-mall.
//
// Gerado a partir dos arquivos:
//   - src/app/data/comercialData.ts  (Lojista, Contrato, Multa, Proposta, PropostaHistorico)
//   - src/app/store.ts               (Sinistro)
//
// Tags json  → serialização de APIs REST
// Tags db    → mapeamento com sqlx / database/sql
package models

import (
	"database/sql"
	"time"
)

// ============================================================
// Tipos enumerados
// ============================================================

type Segmento string

const (
	SegmentoModa           Segmento = "Moda"
	SegmentoAlimentacao    Segmento = "Alimentação"
	SegmentoServicos       Segmento = "Serviços"
	SegmentoEletronicos    Segmento = "Eletrônicos"
	SegmentoEsportes       Segmento = "Esportes"
	SegmentoEntretenimento Segmento = "Entretenimento"
	SegmentoOutros         Segmento = "Outros"
)

type StatusLoja string

const (
	StatusLojaOcupado    StatusLoja = "Ocupado"
	StatusLojaDisponivel StatusLoja = "Disponível"
)

type StatusRelacionamento string

const (
	StatusRelExcelente StatusRelacionamento = "Excelente"
	StatusRelBom       StatusRelacionamento = "Bom"
	StatusRelRegular   StatusRelacionamento = "Regular"
	StatusRelCritico   StatusRelacionamento = "Crítico"
)

type Piso string

const (
	PisoL1 Piso = "L1"
	PisoL2 Piso = "L2"
	PisoL3 Piso = "L3"
)

type Corredor string

const (
	CorredorA Corredor = "A"
	CorredorB Corredor = "B"
	CorredorC Corredor = "C"
)

type IndiceReajuste string

const (
	IndiceIGPM IndiceReajuste = "IGPM"
	IndiceIPCA IndiceReajuste = "IPCA"
)

type TipoContrato string

const (
	TipoAluguelFixo           TipoContrato = "Aluguel Fixo"
	TipoAluguelMaisPercentual TipoContrato = "Aluguel + Percentual"
	TipoSoPercentual          TipoContrato = "Só Percentual"
)

type StatusContrato string

const (
	StatusContratoAtivo       StatusContrato = "Ativo"
	StatusContratoEmRenovacao StatusContrato = "Em Renovação"
	StatusContratoVencendo    StatusContrato = "Vencendo"
	StatusContratoVencido     StatusContrato = "Vencido"
)

type StatusMulta string

const (
	StatusMultaPaga       StatusMulta = "Paga"
	StatusMultaPendente   StatusMulta = "Pendente"
	StatusMultaContestada StatusMulta = "Contestada"
)

type TipoProposta string

const (
	TipoPropostaNovaInstalacao TipoProposta = "Nova Instalação"
	TipoPropostaRenovacao      TipoProposta = "Renovação"
	TipoPropostaReadequacao    TipoProposta = "Readequação"
	TipoPropostaNovaProposta   TipoProposta = "Nova Proposta"
)

type StatusProposta string

const (
	StatusPropostaPendente     StatusProposta = "Pendente"
	StatusPropostaEmAnalise    StatusProposta = "Em Análise"
	StatusPropostaEmNegociacao StatusProposta = "Em Negociação"
	StatusPropostaAceita       StatusProposta = "Aceita"
	StatusPropostaRecusada     StatusProposta = "Recusada"
	StatusPropostaExpirada     StatusProposta = "Expirada"
)

type SeveridadeSinistro string

const (
	SeveridadeBaixa SeveridadeSinistro = "Baixa"
	SeveridadeMedia SeveridadeSinistro = "Média"
	SeveridadeAlta  SeveridadeSinistro = "Alta"
)

type StatusSinistro string

const (
	StatusSinistroAberto              StatusSinistro = "Aberto"
	StatusSinistroAguardandoRegulador StatusSinistro = "Aguardando Regulador"
	StatusSinistroEmAnalise           StatusSinistro = "Em Análise"
	StatusSinistroAprovado            StatusSinistro = "Aprovado"
	StatusSinistroPago                StatusSinistro = "Pago"
)

// ============================================================
// Lojista
// Tabela: lojistas
// ============================================================

type Lojista struct {
	ID                   string         `gorm:"primaryKey" db:"id" json:"id"`
	Nome                 sql.NullString `db:"nome"                 json:"nome"`
	CNPJ                 sql.NullString `db:"cnpj"                 json:"cnpj"`
	Segmento             Segmento       `db:"segmento"             json:"segmento"`
	Responsavel          sql.NullString `db:"responsavel"          json:"responsavel"`
	Email                sql.NullString `db:"email"                json:"email"`
	Telefone             sql.NullString `db:"telefone"             json:"telefone"`
	Unidade              string         `db:"unidade"              json:"unidade"`
	Piso                 Piso           `db:"piso"                 json:"piso"`
	Corredor             Corredor       `db:"corredor"             json:"corredor"`
	AreaM2               int            `db:"area_m2"              json:"area_m2"`
	Status               StatusLoja     `db:"status"               json:"status"`
	StatusRelacionamento sql.NullString `db:"status_relacionamento" json:"status_relacionamento"`
	FaturamentoMedio     int64          `db:"faturamento_medio"    json:"faturamento_medio"`
}


// LojistaComRelacoes é usado em consultas que fazem JOIN com
// as tabelas dependentes, retornando dados completos do lojista.
type LojistaComRelacoes struct {
	Lojista
	ContratoAtivo *Contrato           `gorm:"foreignKey:LojistaID" json:"contratoAtivo"`
	Multas        []Multa             `gorm:"foreignKey:LojistaID" json:"multas"`
	Propostas     []PropostaHistorico `gorm:"foreignKey:LojistaID" json:"propostas"`
}

// ============================================================
// Contrato
// Tabela: contratos
// ============================================================

type Contrato struct {
	ID                    string         `db:"id"                     json:"id"`
	LojistaID             string         `db:"lojista_id"             json:"lojista_id"`
	Inicio                string         `db:"inicio"                 json:"inicio"`
	Fim                   string         `db:"fim"                    json:"fim"`
	ValorAluguel          float64        `db:"valor_aluguel"          json:"valor_aluguel"`
	Luvas                 float64        `db:"luvas"                  json:"luvas"`
	PercentualFaturamento float64        `db:"percentual_faturamento" json:"percentual_faturamento"`
	IndiceReajuste        IndiceReajuste `db:"indice_reajuste"        json:"indice_reajuste"`
	Tipo                  TipoContrato   `db:"tipo"                   json:"tipo"`
	Desempenho            int            `db:"desempenho"             json:"desempenho"`
	DiasRestantes         int            `db:"dias_restantes"         json:"dias_restantes"`
	Status                StatusContrato `db:"status"                 json:"status"`
}

// ============================================================
// Multa
// Tabela: multas
// ============================================================

type Multa struct {
	ID        string      `db:"id"         json:"id"`
	LojistaID string      `db:"lojista_id" json:"lojista_id"`
	Data      string      `db:"data"       json:"data"`
	Tipo      string      `db:"tipo"       json:"tipo"`
	Valor     float64     `db:"valor"      json:"valor"`
	Descricao string      `db:"descricao"  json:"descricao"`
	Status    StatusMulta `db:"status"     json:"status"`
}

// ============================================================
// PropostaHistorico
// Tabela: propostas_historico
// Registros de propostas anteriores vinculadas a um lojista.
// ============================================================

type PropostaHistorico struct {
	ID         string         `db:"id"         json:"id"`
	LojistaID  string         `db:"lojista_id" json:"lojista_id"`
	Data       string         `db:"data"       json:"data"`
	Tipo       TipoProposta   `db:"tipo"       json:"tipo"`
	Valor      float64        `db:"valor"      json:"valor"`
	Status     StatusProposta `db:"status"     json:"status"`
	Observacao sql.NullString `db:"observacao" json:"observacao"`
}

// ============================================================
// Proposta
// Tabela: propostas
// Propostas ativas em aberto ou recentes (aba Propostas).
// ============================================================

type Proposta struct {
	ID             string         `db:"id"             json:"id"`
	LojistaID      sql.NullString `db:"lojista_id"     json:"lojista_id"`
	LojistaNome    string         `db:"lojista_nome"   json:"lojista_nome"`
	Unidade        string         `db:"unidade"        json:"unidade"`
	Segmento       Segmento       `db:"segmento"       json:"segmento"`
	Tipo           TipoProposta   `db:"tipo"           json:"tipo"`
	ValorProposto  float64        `db:"valor_proposto" json:"valor_proposto"`
	AreaM2         int            `db:"area_m2"        json:"area_m2"`
	Status         StatusProposta `db:"status"         json:"status"`
	Responsavel    string         `db:"responsavel"    json:"responsavel"`
	DataCriacao    string         `db:"data_criacao"   json:"data_criacao"`
	DataVencimento string         `db:"data_vencimento" json:"data_vencimento"`
	Observacoes    sql.NullString `db:"observacoes"    json:"observacoes"`
}

// ============================================================
// Sinistro
// Tabela: sinistros
// ============================================================

type Sinistro struct {
	ID               string             `db:"id"                json:"id"`
	Loja             string             `db:"loja"              json:"loja"`
	Tipo             string             `db:"tipo"              json:"tipo"`
	Severidade       SeveridadeSinistro `db:"severidade"        json:"severidade"`
	Status           StatusSinistro     `db:"status"            json:"status"`
	Data             time.Time          `db:"data"              json:"data"`
	Descricao        string             `db:"descricao"         json:"descricao"`
	Regulador        sql.NullString     `db:"regulador"         json:"regulador"`
	ValorIndenizacao sql.NullFloat64    `db:"valor_indenizacao" json:"valor_indenizacao"`
	ValorFranquia    sql.NullFloat64    `db:"valor_franquia"    json:"valor_franquia"`
	AlertaFraude     bool               `db:"alerta_fraude"     json:"alerta_fraude"`
}

// ============================================================
// DTOs — usados em requests/responses da API REST
// (sem tags db, sem campos internos do banco)
// ============================================================

// CriarLojistaRequest é o payload para POST /lojistas
type CriarLojistaRequest struct {
	Nome        string   `json:"nome"      validate:"required,max=100"`
	CNPJ        string   `json:"cnpj"      validate:"required,max=20"`
	Segmento    Segmento `json:"segmento"  validate:"required"`
	Responsavel string   `json:"responsavel" validate:"required,max=100"`
	Email       string   `json:"email"     validate:"required,email,max=150"`
	Telefone    string   `json:"telefone"  validate:"max=20"`
	Unidade     string   `json:"unidade"   validate:"required,max=10"`
	Piso        Piso     `json:"piso"      validate:"required"`
	Corredor    Corredor `json:"corredor"  validate:"required"`
	AreaM2      int      `json:"area_m2"   validate:"required,gt=0"`
}

// AtualizarLojistaRequest é o payload para PUT /lojistas/:id
type AtualizarLojistaRequest struct {
	Nome        string     `json:"nome"        validate:"omitempty,max=100"`
	Segmento    Segmento   `json:"segmento"    validate:"omitempty"`
	Responsavel string     `json:"responsavel" validate:"omitempty,max=100"`
	Email       string     `json:"email"       validate:"omitempty,email,max=150"`
	Telefone    string     `json:"telefone"    validate:"omitempty,max=20"`
	Status      StatusLoja `json:"status"      validate:"omitempty"`
}

// CriarPropostaRequest é o payload para POST /propostas
type CriarPropostaRequest struct {
	LojistaID      *string      `json:"lojista_id"`
	LojistaNome    string       `json:"lojista_nome"   validate:"required,max=100"`
	Unidade        string       `json:"unidade"        validate:"required,max=10"`
	Segmento       Segmento     `json:"segmento"       validate:"required"`
	Tipo           TipoProposta `json:"tipo"           validate:"required"`
	ValorProposto  float64      `json:"valor_proposto" validate:"required,gt=0"`
	AreaM2         int          `json:"area_m2"        validate:"required,gt=0"`
	Responsavel    string       `json:"responsavel"    validate:"required,max=100"`
	DataVencimento string       `json:"data_vencimento" validate:"required"`
	Observacoes    *string      `json:"observacoes"`
}

// AtualizarStatusPropostaRequest é o payload para PATCH /propostas/:id/status
type AtualizarStatusPropostaRequest struct {
	Status      StatusProposta `json:"status"      validate:"required"`
	Observacoes *string        `json:"observacoes"`
}

// CriarSinistroRequest é o payload para POST /sinistros
type CriarSinistroRequest struct {
	Loja       string             `json:"loja"       validate:"required,max=100"`
	Tipo       string             `json:"tipo"       validate:"required,max=80"`
	Severidade SeveridadeSinistro `json:"severidade" validate:"required"`
	Data       string             `json:"data"       validate:"required"`
	Descricao  string             `json:"descricao"  validate:"required"`
}

// AtualizarSinistroRequest é o payload para PUT /sinistros/:id
type AtualizarSinistroRequest struct {
	Status           StatusSinistro `json:"status"             validate:"omitempty"`
	Regulador        *string        `json:"regulador"`
	ValorIndenizacao *float64       `json:"valor_indenizacao"  validate:"omitempty,gte=0"`
	ValorFranquia    *float64       `json:"valor_franquia"     validate:"omitempty,gte=0"`
	AlertaFraude     *bool          `json:"alerta_fraude"`
}

// CriarMultaRequest é o payload para POST /lojistas/:id/multas
type CriarMultaRequest struct {
	Data      string  `json:"data"      validate:"required"`
	Tipo      string  `json:"tipo"      validate:"required,max=80"`
	Valor     float64 `json:"valor"     validate:"required,gt=0"`
	Descricao string  `json:"descricao" validate:"required"`
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

## File: Figma/src/app/App.tsx
````typescript
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
````

## File: Figma/src/app/components/figma/ImageWithFallback.tsx
````typescript
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
````

## File: Figma/src/app/components/FilterSelect.tsx
````typescript
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  className?: string;
  placeholder?: string;
}

export function FilterSelect({ value, onChange, options, className = "", placeholder }: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find(o => o.value === value)?.label ?? placeholder ?? value;

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

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`h-9 w-full flex items-center justify-between gap-2 px-3 bg-white dark:bg-[#1A1F2E] border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#B82025]/20 ${
          open
            ? "border-[#B82025] ring-2 ring-[#B82025]/15"
            : "border-[#B82025] hover:border-[#D93030]"
        }`}
      >
        <span className="truncate text-[#333333] dark:text-[#CBD5E1]">{selectedLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#B82025] flex-shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+5px)] left-0 z-[200] min-w-full w-max max-w-[260px] bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg shadow-md overflow-hidden">
          {options.map(option => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => { onChange(option.value); setOpen(false); }}
                className={`w-full text-left flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors ${
                  isSelected
                    ? "text-[#B82025] font-semibold bg-[#B82025]/6 dark:bg-[#B82025]/10"
                    : "text-[#333333] dark:text-[#CBD5E1] hover:bg-[#D93030] hover:text-white"
                }`}
              >
                <span className="truncate">{option.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#B82025]" strokeWidth={2.5} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
````

## File: Figma/src/app/components/SinistroForm.tsx
````typescript
import { useState } from 'react';
import { AlertCircle, CheckCircle2, FileText, TrendingUp } from 'lucide-react';
import logoFlamboyant from 'figma:asset/b02a990bf2c2da1561fd2f42223c5d2ce71ec09a.png';
import img2 from 'figma:asset/d529125559904c2ba18f90969ebcb78021da0611.png';

type Gravidade = 'alta' | 'media' | 'baixa';

interface Sinistro {
  tipo: string;
  gravidade: Gravidade;
  dataResolucao: string;
  valorIndenizacao: number;
  franquia: number;
  loja: string;
  regulador: string;
  dataCriacao: string;
}

export function SinistroForm() {
  const [sinistro, setSinistro] = useState<Sinistro>({
    tipo: '',
    gravidade: 'media',
    dataResolucao: '',
    valorIndenizacao: 0,
    franquia: 0,
    loja: '',
    regulador: '',
    dataCriacao: '',
  });
  
  const [sinistros, setSinistros] = useState<Sinistro[]>([]);
  const [mostrarSucesso, setMostrarSucesso] = useState(false);
  const [mostrarRelatorio, setMostrarRelatorio] = useState(false);
  const [filtroLoja, setFiltroLoja] = useState('');
  const [filtroDataInicio, setFiltroDataInicio] = useState('');
  const [filtroDataFim, setFiltroDataFim] = useState('');

  const reguladores = [
    'João Silva',
    'Maria Santos',
    'Pedro Oliveira',
    'Ana Costa',
    'Carlos Ferreira',
  ];

  const lojas = [
    'Loja Centro',
    'Loja Norte',
    'Loja Sul',
    'Loja Leste',
    'Loja Oeste',
  ];

  const gravidadeConfig = {
    alta: {
      label: 'Alta',
      color: 'bg-red-600',
      borderColor: 'border-red-600',
      textColor: 'text-red-700',
      bgLight: 'bg-red-50',
    },
    media: {
      label: 'Média',
      color: 'bg-yellow-500',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-700',
      bgLight: 'bg-yellow-50',
    },
    baixa: {
      label: 'Baixa',
      color: 'bg-green-600',
      borderColor: 'border-green-600',
      textColor: 'text-green-700',
      bgLight: 'bg-green-50',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sinistro.tipo && sinistro.dataResolucao && sinistro.loja && sinistro.regulador) {
      const novoSinistro = {
        ...sinistro,
        dataCriacao: new Date().toISOString().split('T')[0],
      };
      setSinistros([...sinistros, novoSinistro]);
      setSinistro({ 
        tipo: '', 
        gravidade: 'media', 
        dataResolucao: '',
        valorIndenizacao: 0,
        franquia: 0,
        loja: '',
        regulador: '',
        dataCriacao: '',
      });
      setMostrarSucesso(true);
      setTimeout(() => setMostrarSucesso(false), 3000);
    }
  };

  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  };

  const formatarMoeda = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calcularValorLiquido = (valorIndenizacao: number, franquia: number) => {
    return Math.max(0, valorIndenizacao - franquia);
  };

  const filtrarSinistros = () => {
    return sinistros.filter(s => {
      const matchLoja = !filtroLoja || s.loja === filtroLoja;
      const matchDataInicio = !filtroDataInicio || s.dataCriacao >= filtroDataInicio;
      const matchDataFim = !filtroDataFim || s.dataCriacao <= filtroDataFim;
      return matchLoja && matchDataInicio && matchDataFim;
    });
  };

  const sinistrosFiltrados = filtrarSinistros();

  const calcularEstatisticas = () => {
    const filtrados = sinistrosFiltrados;
    const totalIndenizacao = filtrados.reduce((acc, s) => acc + s.valorIndenizacao, 0);
    const totalFranquia = filtrados.reduce((acc, s) => acc + s.franquia, 0);
    const totalLiquido = filtrados.reduce((acc, s) => acc + calcularValorLiquido(s.valorIndenizacao, s.franquia), 0);
    
    return {
      total: filtrados.length,
      totalIndenizacao,
      totalFranquia,
      totalLiquido,
    };
  };

  const stats = calcularEstatisticas();

  return (
    <div className="w-full max-w-7xl mx-auto p-6 relative">
      {/* Decorative Images */}
      <div className="absolute -top-10 -left-10 w-48 h-48 opacity-20 pointer-events-none hidden lg:block">
        <img src={img2} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -bottom-10 -right-10 w-56 h-56 opacity-15 pointer-events-none hidden lg:block">
        <img src={img2} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10 border-t-4 border-[#8B1A1A]">
        {/* Logo Flamboyant */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#8B1A1A] rounded-full flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#8B1A1A]">Registro de Sinistros</h1>
          </div>
          <div className="w-40 h-16">
            <img src={logoFlamboyant} alt="Flamboyant" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-[#C8A882]/30">
          <button
            onClick={() => setMostrarRelatorio(false)}
            className={`px-6 py-3 font-medium transition-colors ${
              !mostrarRelatorio
                ? 'text-[#8B1A1A] border-b-2 border-[#8B1A1A]'
                : 'text-gray-500 hover:text-[#8B1A1A]'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Registrar Sinistro
            </div>
          </button>
          <button
            onClick={() => setMostrarRelatorio(true)}
            className={`px-6 py-3 font-medium transition-colors ${
              mostrarRelatorio
                ? 'text-[#8B1A1A] border-b-2 border-[#8B1A1A]'
                : 'text-gray-500 hover:text-[#8B1A1A]'
            }`}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Relatórios
            </div>
          </button>
        </div>

        {!mostrarRelatorio ? (
          <>
            {mostrarSucesso && (
              <div className="mb-6 p-4 bg-[#C8A882]/20 border border-[#C8A882] rounded-lg flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#8B7355]" />
                <p className="text-[#8B7355]">Sinistro registrado com sucesso!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tipo de Sinistro */}
                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                    Tipo de Sinistro *
                  </label>
                  <input
                    type="text"
                    id="tipo"
                    value={sinistro.tipo}
                    onChange={(e) => setSinistro({ ...sinistro, tipo: e.target.value })}
                    placeholder="Ex: Colisão, Roubo, Incêndio..."
                    className="w-full px-4 py-3 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                    required
                  />
                </div>

                {/* Loja */}
                <div>
                  <label htmlFor="loja" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                    Loja *
                  </label>
                  <select
                    id="loja"
                    value={sinistro.loja}
                    onChange={(e) => setSinistro({ ...sinistro, loja: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                    required
                  >
                    <option value="">Selecione uma loja</option>
                    {lojas.map((loja) => (
                      <option key={loja} value={loja}>
                        {loja}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Valor da Indenização */}
                <div>
                  <label htmlFor="valorIndenizacao" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                    Valor da Indenização *
                  </label>
                  <input
                    type="number"
                    id="valorIndenizacao"
                    value={sinistro.valorIndenizacao || ''}
                    onChange={(e) => setSinistro({ ...sinistro, valorIndenizacao: parseFloat(e.target.value) || 0 })}
                    placeholder="0,00"
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                    required
                  />
                </div>

                {/* Franquia */}
                <div>
                  <label htmlFor="franquia" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                    Franquia
                  </label>
                  <input
                    type="number"
                    id="franquia"
                    value={sinistro.franquia || ''}
                    onChange={(e) => setSinistro({ ...sinistro, franquia: parseFloat(e.target.value) || 0 })}
                    placeholder="0,00"
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                  />
                </div>

                {/* Valor Líquido (calculado) */}
                <div>
                  <label className="block text-sm font-medium text-[#8B1A1A] mb-2">
                    Valor Líquido (Indenização - Franquia)
                  </label>
                  <div className="w-full px-4 py-3 border-2 border-[#C8A882]/40 rounded-lg bg-gray-50 text-gray-700 font-semibold">
                    {formatarMoeda(calcularValorLiquido(sinistro.valorIndenizacao, sinistro.franquia))}
                  </div>
                </div>

                {/* Regulador */}
                <div>
                  <label htmlFor="regulador" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                    Regulador *
                  </label>
                  <select
                    id="regulador"
                    value={sinistro.regulador}
                    onChange={(e) => setSinistro({ ...sinistro, regulador: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                    required
                  >
                    <option value="">Selecione um regulador</option>
                    {reguladores.map((regulador) => (
                      <option key={regulador} value={regulador}>
                        {regulador}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Gravidade */}
              <div>
                <label className="block text-sm font-medium text-[#8B1A1A] mb-3">
                  Gravidade *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.keys(gravidadeConfig) as Gravidade[]).map((nivel) => {
                    const config = gravidadeConfig[nivel];
                    const isSelected = sinistro.gravidade === nivel;
                    
                    return (
                      <button
                        key={nivel}
                        type="button"
                        onClick={() => setSinistro({ ...sinistro, gravidade: nivel })}
                        className={`
                          p-4 rounded-lg border-2 transition-all duration-200
                          ${isSelected 
                            ? `${config.borderColor} ${config.bgLight} scale-105 shadow-md` 
                            : 'border-[#C8A882]/30 bg-white hover:border-[#C8A882]'
                          }
                        `}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className={`w-4 h-4 rounded-full ${config.color} shadow-sm`} />
                          <span className={`font-medium ${isSelected ? config.textColor : 'text-gray-600'}`}>
                            {config.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Data de Resolução */}
              <div>
                <label htmlFor="dataResolucao" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                  Data para Resolução *
                </label>
                <input
                  type="date"
                  id="dataResolucao"
                  value={sinistro.dataResolucao}
                  onChange={(e) => setSinistro({ ...sinistro, dataResolucao: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B1A1A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#6B1414] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Registrar Sinistro
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Relatórios */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#8B1A1A]">Relatórios de Sinistros</h2>

              {/* Filtros */}
              <div className="bg-[#C8A882]/10 p-6 rounded-lg border border-[#C8A882]/30">
                <h3 className="text-lg font-semibold text-[#8B1A1A] mb-4">Filtros</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="filtroLoja" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                      Loja
                    </label>
                    <select
                      id="filtroLoja"
                      value={filtroLoja}
                      onChange={(e) => setFiltroLoja(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                    >
                      <option value="">Todas as lojas</option>
                      {lojas.map((loja) => (
                        <option key={loja} value={loja}>
                          {loja}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="filtroDataInicio" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                      Data Início
                    </label>
                    <input
                      type="date"
                      id="filtroDataInicio"
                      value={filtroDataInicio}
                      onChange={(e) => setFiltroDataInicio(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="filtroDataFim" className="block text-sm font-medium text-[#8B1A1A] mb-2">
                      Data Fim
                    </label>
                    <input
                      type="date"
                      id="filtroDataFim"
                      value={filtroDataFim}
                      onChange={(e) => setFiltroDataFim(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-[#C8A882]/40 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-blue-700 font-medium mb-1">Total de Sinistros</p>
                  <p className="text-3xl font-bold text-blue-900">{stats.total}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                  <p className="text-sm text-purple-700 font-medium mb-1">Indenizações</p>
                  <p className="text-2xl font-bold text-purple-900">{formatarMoeda(stats.totalIndenizacao)}</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                  <p className="text-sm text-orange-700 font-medium mb-1">Franquias</p>
                  <p className="text-2xl font-bold text-orange-900">{formatarMoeda(stats.totalFranquia)}</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                  <p className="text-sm text-green-700 font-medium mb-1">Valor Líquido</p>
                  <p className="text-2xl font-bold text-green-900">{formatarMoeda(stats.totalLiquido)}</p>
                </div>
              </div>

              {/* Lista de Sinistros Filtrados */}
              {sinistrosFiltrados.length > 0 ? (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#8B1A1A]">
                    Sinistros Encontrados ({sinistrosFiltrados.length})
                  </h3>
                  {sinistrosFiltrados.map((s, index) => {
                    const config = gravidadeConfig[s.gravidade];
                    const valorLiquido = calcularValorLiquido(s.valorIndenizacao, s.franquia);
                    return (
                      <div
                        key={index}
                        className="p-5 bg-gradient-to-r from-[#C8A882]/5 to-transparent rounded-lg border-l-4 border-gray-200 hover:shadow-md transition-shadow"
                        style={{ borderLeftColor: config.color.replace('bg-', '').replace('[', '').replace(']', '') }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`w-3 h-3 rounded-full ${config.color} shadow-sm mt-1.5`} />
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <p className="font-bold text-gray-800 text-lg">{s.tipo}</p>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${config.bgLight} ${config.textColor}`}>
                                  {config.label}
                                </span>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-500">Loja</p>
                                  <p className="font-medium text-gray-800">{s.loja}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Regulador</p>
                                  <p className="font-medium text-gray-800">{s.regulador}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Data Criação</p>
                                  <p className="font-medium text-gray-800">{formatarData(s.dataCriacao)}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Data Resolução</p>
                                  <p className="font-medium text-gray-800">{formatarData(s.dataResolucao)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right bg-[#8B1A1A]/5 p-4 rounded-lg min-w-[200px]">
                            <p className="text-xs text-gray-500 mb-1">Indenização</p>
                            <p className="text-sm font-medium text-gray-700">{formatarMoeda(s.valorIndenizacao)}</p>
                            <p className="text-xs text-gray-500 mt-2 mb-1">Franquia</p>
                            <p className="text-sm font-medium text-gray-700">- {formatarMoeda(s.franquia)}</p>
                            <div className="border-t border-[#8B1A1A]/20 mt-2 pt-2">
                              <p className="text-xs text-gray-500 mb-1">Valor Líquido</p>
                              <p className="text-lg font-bold text-[#8B1A1A]">{formatarMoeda(valorLiquido)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Nenhum sinistro encontrado com os filtros selecionados</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
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

## File: Figma/src/app/pages/ClaimDetails.tsx
````typescript
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { 
  getClaimById, 
  updateClaim, 
  Claim, 
  ClaimStatus 
} from "../store";
import { 
  Building2, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2,
  Clock,
  UserCheck,
  DollarSign,
  FileText,
  UploadCloud,
  ArrowLeft,
  Briefcase
} from "lucide-react";

export function ClaimDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [claim, setClaim] = useState<Claim | null>(null);
  const [regulator, setRegulator] = useState("");
  const [indemnity, setIndemnity] = useState<number | "">("");
  const [deductible, setDeductible] = useState<number | "">("");
  
  // Simulation of user role/permission
  const isFinance = true; 

  useEffect(() => {
    if (id) {
      const data = getClaimById(id);
      if (data) {
        setClaim(data);
        if (data.regulator) setRegulator(data.regulator);
        if (data.indemnityValue !== undefined) setIndemnity(data.indemnityValue);
        if (data.deductibleValue !== undefined) setDeductible(data.deductibleValue);
      }
    }
  }, [id]);

  if (!claim) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-[#8B1A1A] border-t-transparent rounded-full mb-4"></div>
        <p className="text-gray-500">Carregando detalhes do sinistro...</p>
      </div>
    );
  }

  const handleAssignRegulator = () => {
    if (!regulator.trim()) return;
    updateClaim(claim.id, { 
      regulator, 
      status: "Em Análise" 
    });
    setClaim(prev => prev ? { ...prev, regulator, status: "Em Análise" } : null);
  };

  const handleApproveTechnical = () => {
    updateClaim(claim.id, { status: "Aprovado" });
    setClaim(prev => prev ? { ...prev, status: "Aprovado" } : null);
  };

  const handleSaveFinancials = () => {
    const indVal = Number(indemnity);
    const dedVal = Number(deductible);
    
    updateClaim(claim.id, { 
      indemnityValue: indVal, 
      deductibleValue: dedVal 
    });
    
    setClaim(prev => prev ? { 
      ...prev, 
      indemnityValue: indVal, 
      deductibleValue: dedVal 
    } : null);
  };

  const handleApprovePayment = () => {
    updateClaim(claim.id, { status: "Pago" });
    setClaim(prev => prev ? { ...prev, status: "Pago" } : null);
  };

  const getStatusColor = (status: ClaimStatus) => {
    switch (status) {
      case "Aberto": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Aguardando Regulador": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Em Análise": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Aprovado": return "bg-green-100 text-green-800 border-green-200";
      case "Pago": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const netValue = (Number(indemnity) || 0) - (Number(deductible) || 0);
  const canApprovePayment = claim.status === "Aprovado" && netValue >= 0 && claim.indemnityValue !== undefined;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header Back Button & Status */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <button 
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-[#8B1A1A] inline-flex items-center text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar para Lista
        </button>
        
        <div className={`px-4 py-1.5 rounded-full border text-sm font-bold flex items-center shadow-sm ${getStatusColor(claim.status)}`}>
          {claim.status === "Aprovado" && <CheckCircle2 className="w-4 h-4 mr-2" />}
          {claim.status === "Aguardando Regulador" && <Clock className="w-4 h-4 mr-2" />}
          Status Atual: {claim.status.toUpperCase()}
        </div>
      </div>

      {/* Main Info Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-2 bg-[#8B1A1A] w-full"></div>
        <div className="p-8">
          <div className="flex justify-between items-start border-b border-gray-100 pb-6 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{claim.id}</h1>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center"><Building2 className="w-4 h-4 mr-1.5 text-[#C8A882]" /> {claim.store}</span>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5 text-[#C8A882]" /> {new Date(claim.date).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
            
            <div className="text-right">
              <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium border
                ${claim.severity === 'Alta' ? 'bg-red-50 text-[#D93030] border-red-100' : ''}
                ${claim.severity === 'Média' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : ''}
                ${claim.severity === 'Baixa' ? 'bg-green-50 text-green-700 border-green-100' : ''}
              `}>
                <span className={`w-2 h-2 rounded-full mr-2 
                  ${claim.severity === 'Alta' ? 'bg-[#D93030]' : ''}
                  ${claim.severity === 'Média' ? 'bg-yellow-500' : ''}
                  ${claim.severity === 'Baixa' ? 'bg-green-500' : ''}
                `}></span>
                Gravidade {claim.severity}
              </span>
              
              {claim.fraudAlert && (
                <div className="mt-3 flex items-center text-sm font-bold text-[#D93030] bg-red-50 px-3 py-1 rounded border border-red-200">
                  <AlertTriangle className="w-4 h-4 mr-1.5" />
                  Alerta de Fraude Sistêmica
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Tipo de Ocorrência</h3>
                <p className="text-base font-medium text-gray-900">{claim.type}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Descrição Detalhada</h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-gray-700 leading-relaxed text-sm min-h-[120px]">
                  {claim.description}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Evidências Anexadas ({claim.files?.length || 0})</h3>
              {claim.files && claim.files.length > 0 ? (
                <ul className="space-y-2">
                  {claim.files.map((file, idx) => (
                    <li key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#8B1A1A] transition-colors cursor-pointer group">
                      <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#8B1A1A] mr-3" />
                      <span className="text-sm text-gray-700 font-medium truncate">{file}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-gray-500 italic p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                  Nenhum arquivo anexado.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Regulation Session */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
          <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
            <div className="w-8 h-8 rounded bg-[#C8A882]/20 text-[#8B1A1A] flex items-center justify-center mr-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Sessão de Regulamentação</h2>
          </div>
          
          <div className="space-y-4 flex-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Atribuir Regulador Responsável
              </label>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  value={regulator}
                  onChange={(e) => setRegulator(e.target.value)}
                  placeholder="Nome ou código do regulador"
                  className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-[#8B1A1A] focus:border-[#8B1A1A]"
                  disabled={claim.status !== 'Aberto' && claim.status !== 'Aguardando Regulador' && claim.status !== 'Em Análise'}
                />
                {(claim.status === 'Aberto' || claim.status === 'Aguardando Regulador' || claim.status === 'Em Análise') && (
                  <button 
                    onClick={handleAssignRegulator}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    Atribuir
                  </button>
                )}
              </div>
            </div>
            
            {claim.regulator && (
              <div className="bg-blue-50 border border-blue-100 rounded-md p-4 flex items-start">
                <Briefcase className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-900">Regulador Designado</p>
                  <p className="text-sm text-blue-800">{claim.regulator}</p>
                  <p className="text-xs text-blue-600 mt-1">Status de análise em andamento no sistema do regulador.</p>
                </div>
              </div>
            )}
            
            {claim.status === 'Em Análise' && (
              <div className="pt-6 mt-auto">
                <p className="text-xs text-gray-500 mb-2">Ação do Regulador (Simulação)</p>
                <button 
                  onClick={handleApproveTechnical}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm flex items-center justify-center"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Aprovação Técnica (Parecer Favorável)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Financial Session */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full relative overflow-hidden">
          {/* Disabled Overlay if not ready */}
          {claim.status !== 'Aprovado' && claim.status !== 'Pago' && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center border-l border-gray-100">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center max-w-[80%]">
                <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">Aprovação Pendente</h3>
                <p className="text-xs text-gray-500">
                  Os trâmites financeiros serão liberados apenas após a aprovação técnica do regulador.
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
            <div className="w-8 h-8 rounded bg-green-100 text-green-700 flex items-center justify-center mr-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Sessão Financeira</h2>
          </div>

          <div className="space-y-5 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Valor Indenização (R$)
                </label>
                <input 
                  type="number" 
                  value={indemnity}
                  onChange={(e) => setIndemnity(Number(e.target.value) || "")}
                  placeholder="0,00"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-green-500 focus:border-green-500"
                  disabled={claim.status === 'Pago'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Franquia / Desconto (R$)
                </label>
                <input 
                  type="number" 
                  value={deductible}
                  onChange={(e) => setDeductible(Number(e.target.value) || "")}
                  placeholder="0,00"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500 text-red-600"
                  disabled={claim.status === 'Pago'}
                />
                <span className="text-[10px] text-gray-500 block mt-1">Pode ser zero.</span>
              </div>
            </div>

            {(indemnity !== "" || deductible !== "") && claim.status !== 'Pago' && (
              <button 
                onClick={handleSaveFinancials}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded border border-gray-200 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Salvar Valores
              </button>
            )}

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Total Indenização</span>
                <span className="text-sm font-medium">R$ {(Number(indemnity) || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center mb-2 border-b border-gray-200 pb-2">
                <span className="text-sm text-gray-600">(-) Franquia Aplicada</span>
                <span className="text-sm font-medium text-red-600">- R$ {(Number(deductible) || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-base font-bold text-gray-900">Total a Pagar</span>
                <span className={`text-xl font-bold ${netValue > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                  R$ {Math.max(0, netValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="pt-4 mt-auto">
              {claim.status === 'Pago' ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-3 text-center text-green-800 font-medium flex items-center justify-center text-sm">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Pagamento Aprovado e Processado
                </div>
              ) : (
                <button 
                  onClick={handleApprovePayment}
                  disabled={!canApprovePayment}
                  className={`w-full py-3 rounded-md font-bold text-sm transition-all shadow-sm flex items-center justify-center
                    ${canApprovePayment 
                      ? 'bg-[#8B1A1A] hover:bg-[#a43030] text-white shadow-md transform hover:-translate-y-0.5' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                    }
                  `}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Aprovar Restituição e Encerrar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/ClaimsHistory.tsx
````typescript
import { useState } from "react";
import { Search, Filter, ChevronLeft, ChevronRight, Eye, Download } from "lucide-react";
import { Link } from "react-router";

// Mock Data
const claims = [
  { id: "SIN-2023-0891", store: "Zara - Piso L2", date: "15/10/2023", type: "Vazamento / Inundação", status: "Em Análise", severity: "Alta" },
  { id: "SIN-2023-0890", store: "Starbucks - Piso L1", date: "12/10/2023", type: "Incêndio Fiação", status: "Aberto", severity: "Média" },
  { id: "SIN-2023-0885", store: "Renner - Piso L2", date: "05/10/2023", type: "Dano Elétrico", status: "Pago", severity: "Baixa" },
  { id: "SIN-2023-0880", store: "Centauro - Piso L3", date: "28/09/2023", type: "Vazamento / Inundação", status: "Recusado", severity: "Alta" },
  { id: "SIN-2023-0878", store: "Fast Shop - Piso L1", date: "25/09/2023", type: "Dano Elétrico", status: "Pago", severity: "Média" },
  { id: "SIN-2023-0875", store: "Outback - Piso L3", date: "20/09/2023", type: "Incêndio Fiação", status: "Em Análise", severity: "Alta" },
  { id: "SIN-2023-0870", store: "Vivara - Piso L1", date: "15/09/2023", type: "Furto / Roubo", status: "Pago", severity: "Baixa" },
  { id: "SIN-2023-0865", store: "Riachuelo - Piso L2", date: "10/09/2023", type: "Dano Estrutural", status: "Aberto", severity: "Média" },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Aberto":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Em Análise":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "Pago":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "Recusado":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getSeverityStyles = (severity: string) => {
  switch (severity) {
    case "Alta":
      return "text-[#D93030]";
    case "Média":
      return "text-amber-600";
    case "Baixa":
      return "text-emerald-600";
    default:
      return "text-gray-500";
  }
};

export function ClaimsHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#8B1A1A]">Histórico de Sinistros</h1>
          <p className="text-gray-600 mt-1">Consulte e rastreie todas as ocorrências passadas.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D93030] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#b92828] transition-colors shadow-sm">
          <Download className="w-4 h-4" />
          Exportar Relatório
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#FAF7F2] p-4 rounded-xl shadow-sm border border-[#E8DCCB]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por Nº do Sinistro ou Loja..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E8DCCB] rounded-lg focus:ring-2 focus:ring-[#8B1A1A] focus:border-transparent outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <select 
              className="bg-white border border-[#E8DCCB] text-gray-700 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] outline-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="Todos">Status: Todos</option>
              <option value="Aberto">Aberto</option>
              <option value="Em Análise">Em Análise</option>
              <option value="Pago">Pago</option>
              <option value="Recusado">Recusado</option>
            </select>
            
            <select className="bg-white border border-[#E8DCCB] text-gray-700 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#8B1A1A] outline-none hidden sm:block">
              <option value="Todos">Gravidade: Todas</option>
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
            
            <button className="flex items-center justify-center bg-white border border-[#E8DCCB] p-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-[#8B1A1A] transition-colors" title="Filtros Avançados">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#FAF7F2] rounded-xl shadow-sm border border-[#E8DCCB] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#E8DCCB]/50 border-b border-[#E8DCCB]">
                <th className="px-6 py-4 text-sm font-semibold text-[#8B1A1A]">Nº Sinistro</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#8B1A1A]">Loja</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#8B1A1A]">Data do Evento</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#8B1A1A]">Tipo / Ocorrência</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#8B1A1A]">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#8B1A1A]">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DCCB]">
              {claims.map((claim) => (
                <tr key={claim.id} className="hover:bg-white transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-medium text-[#8B1A1A]">{claim.id}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{claim.store}</td>
                  <td className="px-6 py-4 text-gray-600">{claim.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700">{claim.type}</span>
                      <span className={`text-xs font-medium ${getSeverityStyles(claim.severity)}`} title={`Gravidade: ${claim.severity}`}>
                        • {claim.severity}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusStyles(claim.status)}`}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link to={`/sinistro/${claim.id}`} className="inline-flex p-2 text-gray-400 hover:text-[#D93030] hover:bg-red-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[#E8DCCB] flex items-center justify-between bg-[#FAF7F2]">
          <span className="text-sm text-gray-500">Mostrando 1 a 8 de 45 registros</span>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-[#E8DCCB] rounded-lg text-gray-500 hover:bg-white hover:text-[#8B1A1A] disabled:opacity-50 transition-colors" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 bg-[#8B1A1A] text-white rounded-lg text-sm font-medium">1</button>
            <button className="px-3 py-1 border border-[#E8DCCB] text-gray-600 hover:bg-white rounded-lg text-sm font-medium transition-colors">2</button>
            <button className="px-3 py-1 border border-[#E8DCCB] text-gray-600 hover:bg-white rounded-lg text-sm font-medium transition-colors">3</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-3 py-1 border border-[#E8DCCB] text-gray-600 hover:bg-white rounded-lg text-sm font-medium transition-colors">6</button>
            <button className="p-2 border border-[#E8DCCB] rounded-lg text-gray-500 hover:bg-white hover:text-[#8B1A1A] transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialHistory.tsx
````typescript
import { useState, useMemo, useEffect } from "react";
import {
  Search, Clock, CheckCircle, FileText,
  RefreshCw, Calendar, ChevronDown, ChevronUp, Eye, Building2
} from "lucide-react";
import { allLojistas, propostasAtivas } from "../../data/comercialData";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import { subscribe } from "../../data/comercialStore";
import type { Lojista } from "../../data/comercialData";

interface HistoricoEvent {
  id: string;
  data: string;
  sortKey: string;
  tipo: "Proposta" | "Contrato" | "Renovação" | "Readequação";
  titulo: string;
  descricao: string;
  lojista: string;
  unidade: string;
  valor?: number;
  status: string;
  lojistaObj?: Lojista;
}

const TIPO_CFG: Record<string, { color: string; bg: string }> = {
  Proposta:    { color: "text-blue-600 dark:text-blue-400",   bg: "bg-blue-100 dark:bg-blue-900/30" },
  Contrato:    { color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  Renovação:   { color: "text-teal-600 dark:text-teal-400",   bg: "bg-teal-100 dark:bg-teal-900/30" },
  Readequação: { color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
};

const STATUS_COLORS: Record<string, string> = {
  Aceita:         "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  Ativo:          "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  Pendente:       "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400",
  "Em Negociação":"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
  "Em Análise":   "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400",
  Recusada:       "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
  Expirada:       "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400",
  Vencendo:       "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
  Vencido:        "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
};

function fmtCurrency(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function toSortKey(dateStr: string): string {
  const [d, m, y] = dateStr.split("/");
  if (!d || !m || !y) return "0000-00-00";
  return `${y}-${m}-${d}`;
}

const TIPO_ICON: Record<string, any> = {
  Contrato: CheckCircle,
  Proposta: FileText,
  Renovação: RefreshCw,
  Readequação: Clock,
};

export function ComercialHistory() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const u = subscribe(() => setTick(t => t + 1)); return u; }, []);

  const [search, setSearch] = useState("");
  const [filterTipo, setFilterTipo] = useState("Todos");
  const [filterPiso, setFilterPiso] = useState("Todos");
  const [dateFrom, setDateFrom] = useState("2019-01-01");
  const [dateTo, setDateTo] = useState("2026-04-30");
  const [showCount, setShowCount] = useState(40);
  const [selectedLojista, setSelectedLojista] = useState<Lojista | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allEvents = useMemo<HistoricoEvent[]>(() => {
    const events: HistoricoEvent[] = [];

    allLojistas.forEach(lojista => {
      if (lojista.status !== "Ocupado") return;

      if (lojista.contratoAtivo) {
        const c = lojista.contratoAtivo;
        events.push({
          id: `ctr-${c.id}`,
          data: c.inicio,
          sortKey: toSortKey(c.inicio),
          tipo: "Contrato",
          titulo: `Contrato iniciado — ${lojista.nome}`,
          descricao: `${c.id} · ${c.tipo} · Aluguel: ${fmtCurrency(c.valorAluguel)}/mês · ${c.indiceReajuste} · Vigência: ${c.inicio} a ${c.fim}`,
          lojista: lojista.nome,
          unidade: lojista.unidade,
          valor: c.valorAluguel,
          status: c.status,
          lojistaObj: lojista,
        });
      }

      lojista.propostas.forEach(p => {
        const tipo: HistoricoEvent["tipo"] =
          p.tipo === "Renovação" ? "Renovação" :
          p.tipo === "Readequação" ? "Readequação" : "Proposta";
        events.push({
          id: `proph-${p.id}`,
          data: p.data,
          sortKey: toSortKey(p.data),
          tipo,
          titulo: `${p.tipo} — ${lojista.nome}`,
          descricao: p.observacao || `Proposta de ${p.tipo.toLowerCase()} para ${lojista.unidade}.`,
          lojista: lojista.nome,
          unidade: lojista.unidade,
          valor: p.valor,
          status: p.status,
          lojistaObj: lojista,
        });
      });
    });

    propostasAtivas
      .filter(p => !p.lojistaId)
      .forEach(p => {
        const tipo: HistoricoEvent["tipo"] =
          p.tipo === "Renovação" ? "Renovação" :
          p.tipo === "Readequação" ? "Readequação" : "Proposta";
        events.push({
          id: `prop-${p.id}`,
          data: p.dataCriacao,
          sortKey: toSortKey(p.dataCriacao),
          tipo,
          titulo: `${p.tipo} — ${p.lojista}`,
          descricao: p.observacoes || `Nova proposta para unidade ${p.unidade}.`,
          lojista: p.lojista,
          unidade: p.unidade,
          valor: p.valorProposto,
          status: p.status,
        });
      });

    return events.sort((a, b) => b.sortKey.localeCompare(a.sortKey));
  }, [tick]);

  const filtered = useMemo(() => {
    const from = new Date(dateFrom + "T00:00:00");
    const to = new Date(dateTo + "T23:59:59");
    return allEvents.filter(e => {
      const parts = e.data.split("/");
      let inPeriod = true;
      if (parts.length === 3) {
        const eDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T12:00:00`);
        if (!isNaN(eDate.getTime())) inPeriod = eDate >= from && eDate <= to;
      }
      const matchSearch =
        e.lojista.toLowerCase().includes(search.toLowerCase()) ||
        e.titulo.toLowerCase().includes(search.toLowerCase()) ||
        e.unidade.toLowerCase().includes(search.toLowerCase());
      const matchTipo = filterTipo === "Todos" || e.tipo === filterTipo;
      const matchPiso = filterPiso === "Todos" || e.unidade.startsWith(filterPiso);
      return inPeriod && matchSearch && matchTipo && matchPiso;
    });
  }, [allEvents, search, filterTipo, filterPiso, dateFrom, dateTo]);

  const counts = useMemo(() => ({
    Contrato: allEvents.filter(e => e.tipo === "Contrato").length,
    Proposta: allEvents.filter(e => e.tipo === "Proposta").length,
    Renovação: allEvents.filter(e => e.tipo === "Renovação").length,
    Readequação: allEvents.filter(e => e.tipo === "Readequação").length,
  }), [allEvents]);

  const MONTH_NAMES: Record<string, string> = {
    "01": "Janeiro", "02": "Fevereiro", "03": "Março", "04": "Abril",
    "05": "Maio", "06": "Junho", "07": "Julho", "08": "Agosto",
    "09": "Setembro", "10": "Outubro", "11": "Novembro", "12": "Dezembro",
  };

  const groupedByMonth = useMemo(() => {
    const map: Record<string, HistoricoEvent[]> = {};
    filtered.slice(0, showCount).forEach(e => {
      const [, m, y] = e.data.split("/");
      if (!y || !m) return;
      const key = `${y}-${m}`;
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return Object.entries(map).sort(([a], [b]) => b.localeCompare(a));
  }, [filtered, showCount]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Histórico Comercial</h1>
        <p className="text-gray-500 dark:text-[#94A3B8] mt-1">
          Linha do tempo completa — contratos, propostas e renovações.
        </p>
      </div>

      {/* Period Selector */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-[#D93030]" />
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">Filtro por Período</span>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 dark:text-[#64748B]">De</label>
            <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 dark:text-[#64748B]">Até</label>
            <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {[
              { label: "1 mês", from: "2026-03-23" },
              { label: "3 meses", from: "2026-01-23" },
              { label: "6 meses", from: "2025-10-23" },
              { label: "1 ano", from: "2025-04-23" },
              { label: "2 anos", from: "2024-04-23" },
              { label: "Tudo", from: "2019-01-01" },
            ].map(q => (
              <button key={q.label}
                onClick={() => { setDateFrom(q.from); setDateTo("2026-04-30"); }}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${dateFrom === q.from ? "bg-[#D93030] text-white border-[#D93030]" : "border-gray-200 dark:border-[#2E3447] text-gray-600 dark:text-[#94A3B8] hover:border-[#D93030]"}`}>
                {q.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar lojista, unidade..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-900 dark:text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:border-[#D93030]" />
        </div>
        <select value={filterTipo} onChange={e => setFilterTipo(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Tipos ({allEvents.length})</option>
          <option value="Contrato">Contratos ({counts.Contrato})</option>
          <option value="Proposta">Propostas ({counts.Proposta})</option>
          <option value="Renovação">Renovações ({counts.Renovação})</option>
          <option value="Readequação">Readequações ({counts.Readequação})</option>
        </select>
        <select value={filterPiso} onChange={e => setFilterPiso(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Pisos</option>
          <option value="L1">Piso L1</option>
          <option value="L2">Piso L2</option>
          <option value="L3">Piso L3</option>
        </select>
        <button onClick={() => { setSearch(""); setFilterTipo("Todos"); setFilterPiso("Todos"); setDateFrom("2019-01-01"); setDateTo("2026-04-30"); }}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <RefreshCw className="w-4 h-4" /> Limpar
        </button>
      </div>

      <p className="text-xs text-gray-400 dark:text-[#64748B]">
        {filtered.length} evento{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""} no período
      </p>

      {/* Timeline */}
      <div className="space-y-8">
        {groupedByMonth.length === 0 && (
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-12 text-center">
            <Search className="w-10 h-10 mx-auto mb-3 text-gray-300 dark:text-[#3E4557]" />
            <p className="text-sm text-gray-500 dark:text-[#64748B]">Nenhum evento encontrado no período ou filtros selecionados</p>
          </div>
        )}
        {groupedByMonth.map(([yearMonth, events]) => {
          const [year, month] = yearMonth.split("-");
          return (
            <div key={yearMonth}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-[#8B1A1A]/10 dark:bg-[#8B1A1A]/30 px-3 py-1.5 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-[#D93030]" />
                  <span className="text-sm font-semibold text-[#8B1A1A] dark:text-[#E04444]">
                    {MONTH_NAMES[month] || month} {year}
                  </span>
                </div>
                <div className="flex-1 h-px bg-gray-200 dark:bg-[#2E3447]" />
                <span className="text-xs text-gray-400 dark:text-[#64748B]">{events.length} evento{events.length !== 1 ? "s" : ""}</span>
              </div>
              <div className="relative ml-4">
                <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-200 dark:bg-[#2E3447]" />
                <div className="space-y-3">
                  {events.map(event => {
                    const cfg = TIPO_CFG[event.tipo] || TIPO_CFG.Proposta;
                    const Icon = TIPO_ICON[event.tipo] || FileText;
                    const isExpanded = expandedId === event.id;
                    return (
                      <div key={event.id} className="relative pl-10">
                        <div className={`absolute left-0 top-3 w-7 h-7 rounded-full ${cfg.bg} flex items-center justify-center border-2 border-white dark:border-[#1E2435]`}>
                          <Icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                        </div>
                        <div className="bg-white dark:bg-[#242938] border border-gray-100 dark:border-[#2E3447] rounded-xl overflow-hidden">
                          <button
                            className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors"
                            onClick={() => setExpandedId(isExpanded ? null : event.id)}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{event.titulo}</span>
                                  {event.status && (
                                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${STATUS_COLORS[event.status] || "bg-gray-100 text-gray-600"}`}>
                                      {event.status}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 mt-1 flex-wrap text-xs text-gray-500 dark:text-[#64748B]">
                                  <Building2 className="w-3 h-3" />
                                  <span>{event.lojista}</span>
                                  <span>·</span>
                                  <span>{event.unidade}</span>
                                  {event.valor !== undefined && (
                                    <>
                                      <span>·</span>
                                      <span className="font-semibold text-gray-700 dark:text-[#F1F5F9]">{fmtCurrency(event.valor)}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-xs text-gray-400 dark:text-[#64748B]">{event.data}</span>
                                {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                              </div>
                            </div>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 border-t border-gray-100 dark:border-[#2E3447] pt-3">
                              <p className="text-sm text-gray-600 dark:text-[#94A3B8] leading-relaxed mb-3">{event.descricao}</p>
                              {event.lojistaObj && (
                                <button
                                  onClick={() => setSelectedLojista(event.lojistaObj!)}
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D93030] hover:text-[#b92828] transition-colors"
                                >
                                  <Eye className="w-3.5 h-3.5" /> Ver perfil completo do lojista
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showCount < filtered.length && (
        <div className="text-center pt-2">
          <button onClick={() => setShowCount(c => c + 40)}
            className="inline-flex items-center gap-2 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] rounded-xl px-6 py-2.5 text-sm font-medium transition-colors">
            <ChevronDown className="w-4 h-4" /> Carregar mais ({filtered.length - showCount} restantes)
          </button>
        </div>
      )}

      {selectedLojista && <LojistProfileModal lojista={selectedLojista} onClose={() => setSelectedLojista(null)} />}
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialOverview.tsx
````typescript
// ComercialOverview was merged into ComercialDashboard.
// This file is kept as a safety re-export for any legacy references.
export { ComercialDashboard as ComercialOverview } from "./ComercialDashboard";
````

## File: Figma/src/app/pages/Dashboard.tsx
````typescript
export function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md px-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
          Esta seção está em desenvolvimento e será disponibilizada em breve.
        </h2>
        <p className="text-sm text-gray-500 dark:text-[#94A3B8]">
          Estamos trabalhando para trazer novidades em breve.
        </p>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/EmptySection.tsx
````typescript
import { useLocation } from "react-router";
import { Package } from "lucide-react";

export function EmptySection() {
  const location = useLocation();
  
  const getSectionName = () => {
    const path = location.pathname.split("/")[1];
    const names: Record<string, string> = {
      treinamentos: "Treinamentos",
      seguros: "Seguros",
      manutencao: "Manutenção",
      marketing: "Marketing",
      comercial: "Comercial",
      institucional: "Institucional"
    };
    return names[path] || "Seção";
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-[#1A1F2E] mb-4">
          <Package className="w-8 h-8 text-gray-400 dark:text-[#64748B]" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
          {getSectionName()}
        </h2>
        <p className="text-gray-500 dark:text-[#94A3B8] max-w-sm">
          Esta seção está em desenvolvimento e será disponibilizada em breve.
        </p>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/NewClaim.tsx
````typescript
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { 
  Building2, 
  Calendar, 
  UploadCloud, 
  AlertCircle, 
  FileText,
  Save,
  X,
  File as FileIcon,
  Trash2
} from "lucide-react";
import { addClaim } from "../store";

type FormValues = {
  store: string;
  type: string;
  severity: "Baixa" | "Média" | "Alta";
  riskClass: string;
  date: string;
  description: string;
};

export function NewClaim() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      severity: "Média"
    }
  });

  const stores = [
    "Loja 101 - Acessórios",
    "Loja 102 - Calçados",
    "Loja 104 - Vestuário",
    "Loja 210 - Eletrônicos",
    "Praça de Alimentação",
    "Estacionamento G1",
    "Banheiros Ala Norte"
  ];

  const types = [
    "Vazamento / Infiltração",
    "Pico de Energia / Elétrico",
    "Incêndio",
    "Dano Físico / Vandalismo",
    "Acidente Pessoal",
    "Roubo / Furto",
    "Desastre Natural"
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: FormValues) => {
    // Generate mock ID
    const newId = `SIN-00${Math.floor(Math.random() * 900) + 100}`;
    
    addClaim({
      id: newId,
      store: data.store,
      type: data.type,
      severity: data.severity,
      status: "Aberto",
      date: data.date,
      description: data.description,
      files: files.map(f => f.name),
      fraudAlert: false
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-[#8B1A1A] rounded-lg flex items-center justify-center text-white shadow-sm">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Registro de Novo Sinistro</h1>
          <p className="text-sm text-gray-500">Preencha os dados detalhados da ocorrência no complexo.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="border-b border-gray-100 pb-4 mb-6">
            <h2 className="text-lg font-semibold text-[#8B1A1A] flex items-center">
              <Building2 className="w-5 h-5 mr-2" /> Dados da Ocorrência
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loja / Local Afetado *
              </label>
              <select 
                {...register("store", { required: "Selecione o local" })}
                className={`w-full border ${errors.store ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] bg-white text-gray-900 text-sm`}
              >
                <option value="">Selecione...</option>
                {stores.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.store && <p className="mt-1 text-xs text-red-500">{errors.store.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data do Evento *
              </label>
              <div className="relative">
                <input 
                  type="date"
                  {...register("date", { required: "Data é obrigatória" })}
                  className={`w-full border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] bg-white text-gray-900 text-sm`}
                />
              </div>
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Ocorrência *
              </label>
              <select 
                {...register("type", { required: "Selecione o tipo" })}
                className={`w-full border ${errors.type ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] bg-white text-gray-900 text-sm`}
              >
                <option value="">Selecione...</option>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Classificação de Risco
              </label>
              <select 
                {...register("riskClass")}
                className="w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-3 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] bg-white text-gray-900 text-sm"
              >
                <option value="Estrutural">Estrutural</option>
                <option value="Conteúdo">Conteúdo (Mercadorias/Equipamentos)</option>
                <option value="Responsabilidade Civil">Responsabilidade Civil (Terceiros)</option>
                <option value="Lucros Cessantes">Lucros Cessantes</option>
              </select>
            </div>
            
            <div className="md:col-span-2 mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Gravidade do Sinistro *
              </label>
              <Controller
                name="severity"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <div className="grid grid-cols-3 gap-4">
                    <label className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center transition-all ${field.value === 'Baixa' ? 'border-green-500 bg-green-50 ring-1 ring-green-500' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input type="radio" className="sr-only" {...field} value="Baixa" checked={field.value === 'Baixa'} />
                      <div className="w-3 h-3 rounded-full bg-green-500 mb-2"></div>
                      <span className={`text-sm font-medium ${field.value === 'Baixa' ? 'text-green-700' : 'text-gray-700'}`}>Baixa</span>
                    </label>
                    <label className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center transition-all ${field.value === 'Média' ? 'border-yellow-500 bg-yellow-50 ring-1 ring-yellow-500' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input type="radio" className="sr-only" {...field} value="Média" checked={field.value === 'Média'} />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mb-2"></div>
                      <span className={`text-sm font-medium ${field.value === 'Média' ? 'text-yellow-700' : 'text-gray-700'}`}>Média</span>
                    </label>
                    <label className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center transition-all ${field.value === 'Alta' ? 'border-[#D93030] bg-red-50 ring-1 ring-[#D93030]' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <input type="radio" className="sr-only" {...field} value="Alta" checked={field.value === 'Alta'} />
                      <div className="w-3 h-3 rounded-full bg-[#D93030] mb-2"></div>
                      <span className={`text-sm font-medium ${field.value === 'Alta' ? 'text-[#D93030]' : 'text-gray-700'}`}>Alta</span>
                    </label>
                  </div>
                )}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição Detalhada do Evento *
              </label>
              <textarea 
                {...register("description", { required: "Descrição é obrigatória", minLength: 10 })}
                rows={5}
                placeholder="Descreva o que ocorreu, horários estimados, pessoas envolvidas e primeiras providências tomadas..."
                className={`w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm p-3 focus:ring-[#8B1A1A] focus:border-[#8B1A1A] bg-white text-gray-900 text-sm`}
              />
              {errors.description && <p className="mt-1 text-xs text-red-500">Forneça uma descrição detalhada (min 10 caracteres)</p>}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="border-b border-gray-100 pb-4 mb-6">
            <h2 className="text-lg font-semibold text-[#8B1A1A] flex items-center">
              <UploadCloud className="w-5 h-5 mr-2" /> Evidências e Documentos
            </h2>
            <p className="text-sm text-gray-500 mt-1">Anexe fotos do local, vídeos de segurança, BO ou laudos preliminares.</p>
          </div>

          <div 
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${isDragging ? 'border-[#8B1A1A] bg-red-50/50' : 'border-gray-300 hover:bg-gray-50'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-700 mb-1">
              Arraste arquivos ou clique para selecionar
            </p>
            <p className="text-xs text-gray-500 mb-4">
              JPG, PNG, PDF ou MP4 (Máx. 50MB)
            </p>
            <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              Selecionar Arquivos
              <input type="file" multiple className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          {files.length > 0 && (
            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-medium text-gray-700">Arquivos Anexados ({files.length})</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {files.map((file, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <FileIcon className="w-5 h-5 text-[#8B1A1A] flex-shrink-0" />
                      <span className="text-sm text-gray-700 truncate">{file.name}</span>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => removeFile(idx)}
                      className="text-gray-400 hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-4 pt-4">
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className="px-6 py-2.5 border border-transparent rounded-lg text-sm font-medium text-white bg-[#8B1A1A] hover:bg-[#a43030] shadow-sm flex items-center transition-colors"
          >
            <Save className="w-4 h-4 mr-2" />
            Salvar Registro
          </button>
        </div>
      </form>
    </div>
  );
}
````

## File: Figma/src/app/pages/Reports.tsx
````typescript
import { Package } from "lucide-react";

export function Reports() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-[#1A1F2E] mb-4">
          <Package className="w-8 h-8 text-gray-400 dark:text-[#64748B]" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
          Relatórios Gerais
        </h2>
        <p className="text-gray-500 dark:text-[#94A3B8] max-w-sm">
          Central de relatórios gerais em desenvolvimento. Acesse relatórios específicos através dos módulos correspondentes.
        </p>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/sinistros/SinistrosDashboard.tsx
````typescript
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { 
  AlertTriangle, 
  Clock, 
  FileWarning, 
  TrendingUp,
  Search,
  ChevronRight
} from "lucide-react";
import { getClaims, Claim } from "../../store";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

export function SinistrosDashboard() {
  const navigate = useNavigate();
  const [claims, setClaims] = useState<Claim[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  const openClaims = claims.filter(c => c.status === "Aberto" || c.status === "Em Análise").length;
  const waitingRegulator = claims.filter(c => c.status === "Aguardando Regulador").length;
  const fraudAlerts = claims.filter(c => c.fraudAlert).length;

  const filteredClaims = claims.filter(c => 
    c.store.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock data for chart
  const chartData = [
    { name: 'Loja A', incidentes: 4 },
    { name: 'Loja B', incidentes: 2 },
    { name: 'Praça de Alim.', incidentes: 5 },
    { name: 'Estacionamento', incidentes: 3 },
    { name: 'Banheiros', incidentes: 1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Dashboard de Sinistros</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Resumo das ocorrências e sinistros do complexo.</p>
        </div>
        <button 
          onClick={() => navigate("/sinistros/novo")}
          className="bg-[#D93030] dark:bg-[#E04444] hover:bg-[#b92828] dark:hover:bg-[#F05555] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center"
        >
          <FileWarning className="w-4 h-4 mr-2" />
          Registrar Ocorrência
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] p-6 flex items-start justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-[#94A3B8] mb-1">Sinistros Abertos</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9]">{openClaims}</h3>
            <p className="text-xs text-green-600 dark:text-[#34D399] mt-2 flex items-center font-medium">
              <TrendingUp className="w-3 h-3 mr-1" /> -12% em relação ao mês anterior
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-[#60A5FA] rounded-lg flex items-center justify-center">
            <FileWarning className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] p-6 flex items-start justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-[#94A3B8] mb-1">Aguardando Regulador</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9]">{waitingRegulator}</h3>
            <p className="text-xs text-orange-600 dark:text-[#FBBF24] mt-2 flex items-center font-medium">
              Requer atenção imediata
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-[#FBBF24] rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-red-100 dark:border-red-700/30 p-6 flex items-start justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-sm font-medium text-[#D93030] dark:text-[#E04444] mb-1">Alertas de Fraude</p>
            <h3 className="text-3xl font-bold text-[#D93030] dark:text-[#E04444]">{fraudAlerts}</h3>
            <p className="text-xs text-[#8B1A1A] dark:text-[#E04444] mt-2 flex items-center font-medium">
              Análise rigorosa sugerida
            </p>
          </div>
          <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 text-[#D93030] dark:text-[#E04444] rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] p-6 lg:col-span-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-[#F1F5F9] mb-6">Incidência por Área (Últimos 30 dias)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-gray-200 dark:stroke-[#2E3447]" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} className="fill-gray-600 dark:fill-[#94A3B8]" dy={10} />
                <YAxis axisLine={false} tickLine={false} className="fill-gray-600 dark:fill-[#94A3B8]" />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="incidentes" fill="#C8A882" className="dark:fill-[#D4A96A]" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Search & Summary */}
        <div className="bg-[#8B1A1A] dark:bg-[#1A1F2E] text-white rounded-lg shadow-sm p-6 flex flex-col relative overflow-hidden border border-[#a43030] dark:border-[#2E3447]">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[#a43030] dark:bg-[#242938] rounded-full opacity-50"></div>
          
          <h3 className="text-lg font-semibold mb-2 relative z-10">Consulta Rápida</h3>
          <p className="text-white/80 dark:text-[#94A3B8] text-sm mb-6 relative z-10">Localize informações de sinistros instantaneamente.</p>
          
          <div className="relative z-10 mt-auto">
            <div className="bg-white/10 dark:bg-[#1E2435] rounded-lg p-1 border border-white/20 dark:border-[#2E3447] flex items-center">
              <input 
                type="text" 
                placeholder="N° Sinistro ou Lojista" 
                className="bg-transparent border-none text-white dark:text-[#F1F5F9] placeholder-white/60 dark:placeholder-[#64748B] focus:ring-0 w-full px-3 text-sm"
              />
              <button className="p-2 bg-white dark:bg-[#E04444] text-[#8B1A1A] dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-[#F05555] transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Table */}
      <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-[#2E3447] flex justify-between items-center bg-gray-50/50 dark:bg-[#1A1F2E]">
          <h3 className="text-base font-semibold text-gray-900 dark:text-[#F1F5F9]">Últimas Ocorrências</h3>
          <div className="relative w-64">
            <input 
              type="text" 
              placeholder="Filtrar tabela..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] placeholder:text-gray-400 dark:placeholder:text-[#64748B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D93030] dark:focus:ring-[#E04444] focus:border-[#D93030] dark:focus:border-[#E04444]"
            />
            <Search className="w-4 h-4 text-gray-400 dark:text-[#64748B] absolute left-2.5 top-2" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Nº Sinistro
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Local / Lojista
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Data
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Gravidade
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-200 dark:divide-[#2E3447]">
              {filteredClaims.map((claim) => (
                <tr key={claim.id} className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer" onClick={() => navigate(`/sinistros/${claim.id}`)}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[#F1F5F9] flex items-center">
                    {claim.id}
                    {claim.fraudAlert && (
                      <span title="Alerta de Fraude" className="ml-2 text-[#D93030] dark:text-[#E04444]">
                        <AlertTriangle className="w-4 h-4" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#94A3B8]">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-[#F1F5F9]">{claim.store}</span>
                      <span className="text-xs">{claim.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#94A3B8]">
                    {new Date(claim.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${claim.status === 'Aberto' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' : ''}
                      ${claim.status === 'Aguardando Regulador' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400' : ''}
                      ${claim.status === 'Em Análise' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' : ''}
                      ${claim.status === 'Aprovado' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : ''}
                      ${claim.status === 'Pago' ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400' : ''}
                    `}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900 dark:text-[#F1F5F9]">
                      <span className={`w-2.5 h-2.5 rounded-full mr-2 
                        ${claim.severity === 'Alta' ? 'bg-[#D93030] dark:bg-[#E04444]' : ''}
                        ${claim.severity === 'Média' ? 'bg-yellow-500 dark:bg-[#FBBF24]' : ''}
                        ${claim.severity === 'Baixa' ? 'bg-green-500 dark:bg-[#34D399]' : ''}
                      `}></span>
                      {claim.severity}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/sinistros/${claim.id}`);
                      }}
                      className="text-[#D93030] dark:text-[#E04444] hover:text-[#b92828] dark:hover:text-[#F05555] inline-flex items-center"
                    >
                      Detalhes <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredClaims.length === 0 && (
            <div className="py-8 text-center text-gray-500 dark:text-[#94A3B8]">
              Nenhum sinistro encontrado com os filtros atuais.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/sinistros/SinistrosReports.tsx
````typescript
import { useState } from "react";
import { Download, TrendingUp, TrendingDown, DollarSign, Activity, FileSpreadsheet, Calendar as CalendarIcon, Filter } from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend
} from "recharts";

// Mock Data
const claimsByType = [
  { name: 'Vazamento/Água', uv: 45 },
  { name: 'Dano Elétrico', uv: 30 },
  { name: 'Incêndio/Fumaça', uv: 15 },
  { name: 'Furto/Roubo', uv: 25 },
  { name: 'Dano Estrutural', uv: 18 },
  { name: 'Responsabilidade Civil', uv: 12 },
];

const claimsBySeverity = [
  { name: 'Alta Gravidade', value: 25 },
  { name: 'Média Gravidade', value: 45 },
  { name: 'Baixa Gravidade', value: 30 },
];

const COLORS = ['#D93030', '#E5A532', '#4CAF50'];

export function SinistrosReports() {
  const [period, setPeriod] = useState("30days");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Relatórios de Sinistros</h1>
          <p className="text-gray-600 dark:text-[#94A3B8] mt-1">Visão gerencial consolidada das ocorrências e impacto financeiro.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white dark:bg-[#1E2435] border border-gray-200 dark:border-[#2E3447] rounded-lg p-1 shadow-sm flex items-center">
            <CalendarIcon className="w-4 h-4 text-gray-400 dark:text-[#64748B] ml-2" />
            <select 
              className="bg-transparent text-sm text-gray-700 dark:text-[#F1F5F9] px-3 py-1.5 focus:outline-none cursor-pointer"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="30days">Últimos 30 Dias</option>
              <option value="q1">1º Trimestre</option>
              <option value="q2">2º Trimestre</option>
              <option value="ytd">Ano Atual</option>
              <option value="custom">Personalizado...</option>
            </select>
          </div>
          <button className="flex items-center gap-2 bg-[#D93030] dark:bg-[#E04444] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#b92828] dark:hover:bg-[#F05555] transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Exportar Dados
          </button>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Indemnities Card */}
        <div className="bg-gradient-to-br from-[#D93030] to-[#b92828] dark:from-[#E04444] dark:to-[#D93030] p-6 rounded-lg shadow-sm text-white relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white/90">Total de Indenizações Pagas</h3>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">R$ 1.245.890</span>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-white/80 gap-1 bg-black/10 w-fit px-2.5 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% em relação ao período anterior</span>
            </div>
          </div>
        </div>

        {/* Total Claims Card */}
        <div className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-600 dark:text-[#94A3B8]">Total de Sinistros Registrados</h3>
            <div className="w-10 h-10 bg-gray-50 dark:bg-[#1A1F2E] rounded-lg flex items-center justify-center border border-gray-200 dark:border-[#2E3447]">
              <Activity className="w-5 h-5 text-[#D93030] dark:text-[#E04444]" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900 dark:text-[#F1F5F9] tracking-tight">145</span>
            <span className="text-sm text-gray-500 dark:text-[#94A3B8] font-medium">ocorrências</span>
          </div>
          <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 dark:text-[#34D399] gap-1 bg-emerald-50 dark:bg-emerald-900/30 w-fit px-2.5 py-1 rounded-full">
            <TrendingDown className="w-4 h-4" />
            <span>-5.2% em relação ao período anterior</span>
          </div>
        </div>

        {/* Average Ticket Card */}
        <div className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-600 dark:text-[#94A3B8]">Ticket Médio por Sinistro</h3>
            <div className="w-10 h-10 bg-gray-50 dark:bg-[#1A1F2E] rounded-lg flex items-center justify-center border border-gray-200 dark:border-[#2E3447]">
              <FileSpreadsheet className="w-5 h-5 text-[#D93030] dark:text-[#E04444]" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900 dark:text-[#F1F5F9] tracking-tight">R$ 8.592</span>
          </div>
          <div className="mt-4 flex items-center text-sm font-medium text-amber-600 dark:text-[#FBBF24] gap-1 bg-amber-50 dark:bg-amber-900/30 w-fit px-2.5 py-1 rounded-full">
            <TrendingUp className="w-4 h-4" />
            <span>+2.1% em relação ao período anterior</span>
          </div>
        </div>
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Bar Chart - Claims by Type */}
        <div className="lg:col-span-2 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9]">Sinistros por Tipo de Ocorrência</h3>
              <p className="text-sm text-gray-500 dark:text-[#94A3B8]">Comparativo quantitativo do período selecionado</p>
            </div>
            <button className="p-2 text-gray-400 dark:text-[#64748B] hover:text-[#D93030] dark:hover:text-[#E04444] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] rounded-lg transition-colors border border-transparent hover:border-gray-200 dark:hover:border-[#2E3447]">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={claimsByType}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-gray-200 dark:stroke-[#2E3447]" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  className="fill-gray-600 dark:fill-[#94A3B8]" 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  className="fill-gray-600 dark:fill-[#94A3B8]" 
                />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="uv" 
                  fill="#D93030"
                  className="dark:fill-[#E04444]" 
                  radius={[6, 6, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart - Severity Distribution */}
        <div className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg p-6 shadow-sm flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9]">Distribuição de Gravidade</h3>
            <p className="text-sm text-gray-500 dark:text-[#94A3B8]">Análise de risco das ocorrências</p>
          </div>
          <div className="flex-1 min-h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={claimsBySeverity}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {claimsBySeverity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1F2937', fontWeight: 600 }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-sm text-gray-700 dark:text-[#F1F5F9] font-medium ml-1">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
              <span className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9]">100</span>
              <span className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium uppercase tracking-wider">Total</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/StoreDirectory.tsx
````typescript
import { useState } from "react";
import { Search, Store, Phone, Mail, FileText, AlertCircle, CheckCircle2, XCircle, ChevronRight, X } from "lucide-react";

// Mock Data
const stores = [
  { id: 1, name: "Zara", category: "Vestuário", piso: "L2", cnpj: "12.345.678/0001-90", policyActive: true, contact: "Carlos Mendes", phone: "(11) 98765-4321", email: "gerencia.zara@jpmall.com.br", claimsCount: 3 },
  { id: 2, name: "Starbucks", category: "Alimentação", piso: "L1", cnpj: "98.765.432/0001-10", policyActive: true, contact: "Mariana Silva", phone: "(11) 91234-5678", email: "loja.starbucks@jpmall.com.br", claimsCount: 1 },
  { id: 3, name: "Renner", category: "Vestuário", piso: "L2", cnpj: "45.678.123/0001-45", policyActive: false, contact: "Roberto Costa", phone: "(11) 97777-8888", email: "renner.jpmall@lojas.com.br", claimsCount: 0 },
  { id: 4, name: "Centauro", category: "Esportes", piso: "L3", cnpj: "78.910.111/0001-22", policyActive: true, contact: "Ana Paula", phone: "(11) 96666-5555", email: "gerente@centauro.com.br", claimsCount: 2 },
  { id: 5, name: "Fast Shop", category: "Eletrônicos", piso: "L1", cnpj: "33.444.555/0001-66", policyActive: true, contact: "Julio Nogueira", phone: "(11) 95555-4444", email: "julio.n@fastshop.com.br", claimsCount: 4 },
  { id: 6, name: "Outback", category: "Alimentação", piso: "L3", cnpj: "22.333.444/0001-55", policyActive: false, contact: "Fernanda Lima", phone: "(11) 94444-3333", email: "gerencia.outback@jpmall.com.br", claimsCount: 5 },
  { id: 7, name: "Vivara", category: "Acessórios", piso: "L1", cnpj: "11.222.333/0001-44", policyActive: true, contact: "Ricardo Alves", phone: "(11) 93333-2222", email: "loja.vivara@jpmall.com.br", claimsCount: 0 },
  { id: 8, name: "Riachuelo", category: "Vestuário", piso: "L2", cnpj: "55.666.777/0001-88", policyActive: true, contact: "Camila Barros", phone: "(11) 92222-1111", email: "camila@riachuelo.com.br", claimsCount: 1 },
];

export function StoreDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStore, setSelectedStore] = useState<typeof stores[0] | null>(null);

  const filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.cnpj.includes(searchTerm)
  );

  return (
    <div className="relative h-full flex flex-col space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Lojistas</h1>
          <p className="text-gray-600 dark:text-[#94A3B8] mt-1">Diretório e consulta rápida de apólices e histórico.</p>
        </div>
        
        <div className="w-full md:w-96 relative shadow-sm rounded-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-[#64748B]" />
          <input
            type="text"
            placeholder="Buscar por Nome da Loja ou CNPJ..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#1E2435] border border-gray-200 dark:border-[#2E3447] rounded-lg focus:ring-2 focus:ring-[#D93030] dark:focus:ring-[#E04444] focus:border-transparent outline-none transition-all text-gray-800 dark:text-[#F1F5F9] placeholder:text-gray-400 dark:placeholder:text-[#64748B]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
        {filteredStores.map((store) => (
          <div 
            key={store.id} 
            className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg p-5 hover:shadow-md transition-all group flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-gray-50 dark:bg-[#1A1F2E] rounded-lg flex items-center justify-center border border-gray-200 dark:border-[#2E3447] text-[#D93030] dark:text-[#E04444]">
                <Store className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${store.policyActive ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700' : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700'}`}>
                {store.policyActive ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                {store.policyActive ? 'Apólice Ativa' : 'Irregular'}
              </div>
            </div>
            
            <div className="mb-4 flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9] mb-1">{store.name}</h3>
              <div className="flex items-center text-sm text-gray-500 dark:text-[#94A3B8] gap-2">
                <span>{store.category}</span>
                <span>•</span>
                <span>Piso {store.piso}</span>
              </div>
            </div>

            <button 
              onClick={() => setSelectedStore(store)}
              className="mt-auto flex items-center justify-between w-full py-2.5 px-4 bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-lg text-[#D93030] dark:text-[#E04444] font-medium hover:bg-[#D93030] dark:hover:bg-[#E04444] hover:text-white transition-colors"
            >
              Ver Detalhes
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        ))}
      </div>

      {/* Side Drawer Overlay */}
      {selectedStore && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" onClick={() => setSelectedStore(null)} />
      )}

      {/* Side Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#FAF7F2] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-l border-[#E8DCCB] flex flex-col ${selectedStore ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {selectedStore && (
          <>
            {/* Drawer Header */}
            <div className="px-6 py-5 border-b border-[#E8DCCB] bg-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-xl flex items-center justify-center border border-[#E8DCCB] text-[#8B1A1A]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedStore.name}</h2>
                  <p className="text-sm text-gray-500">{selectedStore.category} • Piso {selectedStore.piso}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedStore(null)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Status Banner */}
              <div className={`p-4 rounded-xl flex items-start gap-3 border ${selectedStore.policyActive ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                {selectedStore.policyActive ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                )}
                <div>
                  <h3 className={`font-semibold ${selectedStore.policyActive ? 'text-emerald-800' : 'text-red-800'}`}>
                    {selectedStore.policyActive ? 'Apólice de Seguro Regular' : 'Atenção: Apólice Vencida ou Inexistente'}
                  </h3>
                  <p className={`text-sm mt-1 ${selectedStore.policyActive ? 'text-emerald-600' : 'text-red-600'}`}>
                    {selectedStore.policyActive 
                      ? 'O lojista está em conformidade com as exigências contratuais do JP Mall.' 
                      : 'É necessário notificar o lojista para regularização imediata do seguro.'}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl border border-[#E8DCCB] p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-gray-500 block mb-1">CNPJ</span>
                    <span className="text-gray-800 font-medium">{selectedStore.cnpj}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Telefone / WhatsApp</span>
                      <span className="text-gray-800 font-medium">{selectedStore.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">E-mail do Responsável</span>
                      <span className="text-gray-800 font-medium">{selectedStore.email}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block mb-1">Responsável Local</span>
                    <span className="text-gray-800 font-medium">{selectedStore.contact}</span>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-xl border border-[#E8DCCB] p-5 shadow-sm">
                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-4">Documentos Anexados</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#8B1A1A]" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">Contrato de Locação.pdf</p>
                        <p className="text-xs text-gray-500">Adicionado em 12/05/2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#8B1A1A]" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">Apólice_Seguro_2023.pdf</p>
                        <p className="text-xs text-gray-500">Adicionado em {selectedStore.policyActive ? '15/01/2023' : 'Vencido em 10/10/2023'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick History */}
              <div className="bg-white rounded-xl border border-[#E8DCCB] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider">Histórico de Sinistros</h3>
                  <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">
                    {selectedStore.claimsCount} Registro(s)
                  </span>
                </div>
                
                {selectedStore.claimsCount > 0 ? (
                  <div className="space-y-4">
                    {Array.from({ length: Math.min(2, selectedStore.claimsCount) }).map((_, i) => (
                      <div key={i} className="flex gap-4 p-3 rounded-lg border border-gray-100">
                        <div className="w-1.5 h-auto bg-[#D93030] rounded-full" />
                        <div>
                          <p className="text-sm font-semibold text-[#8B1A1A]">SIN-2023-08{90 - i}</p>
                          <p className="text-sm text-gray-600 mt-1">Vazamento interno afetando corredor L2.</p>
                          <p className="text-xs text-gray-400 mt-2">Ocorrido há {i + 2} meses</p>
                        </div>
                      </div>
                    ))}
                    {selectedStore.claimsCount > 2 && (
                      <button className="w-full py-2 text-sm text-[#8B1A1A] font-medium hover:underline text-center">
                        Ver todo o histórico
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <AlertCircle className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Nenhum sinistro registrado para esta loja.</p>
                  </div>
                )}
              </div>

            </div>
            
            {/* Drawer Footer */}
            <div className="px-6 py-4 border-t border-[#E8DCCB] bg-white">
              <button className="w-full bg-[#8B1A1A] text-white py-3 rounded-xl font-medium hover:bg-[#701515] transition-colors shadow-sm">
                Notificar Lojista
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
````

## File: Figma/src/app/store.ts
````typescript
export type ClaimStatus = "Aberto" | "Aguardando Regulador" | "Em Análise" | "Aprovado" | "Pago";
export type ClaimSeverity = "Baixa" | "Média" | "Alta";

export interface Claim {
  id: string;
  store: string;
  type: string;
  severity: ClaimSeverity;
  status: ClaimStatus;
  date: string;
  description: string;
  files: string[];
  regulator?: string;
  indemnityValue?: number;
  deductibleValue?: number; // Franquia
  fraudAlert?: boolean;
}

export const initialClaims: Claim[] = [
  {
    id: "SIN-001",
    store: "Loja 104 - Vestuário",
    type: "Vazamento / Infiltração",
    severity: "Alta",
    status: "Aberto",
    date: "2026-04-06",
    description: "Rompimento de cano na laje superior causando alagamento no estoque da loja.",
    files: ["foto1.jpg", "laudo_bombeiros.pdf"],
    fraudAlert: false,
  },
  {
    id: "SIN-002",
    store: "Loja 210 - Eletrônicos",
    type: "Pico de Energia",
    severity: "Média",
    status: "Aguardando Regulador",
    date: "2026-04-05",
    description: "Curto circuito no quadro de distribuição, queima de 3 computadores e 1 monitor vitrine.",
    files: [],
    fraudAlert: true,
  },
  {
    id: "SIN-003",
    store: "Praça de Alimentação",
    type: "Incêndio",
    severity: "Alta",
    status: "Em Análise",
    date: "2026-04-01",
    description: "Princípio de incêndio na coifa do restaurante 05.",
    files: ["vistoria_tecnica.pdf"],
    regulator: "Carlos Mendes (Susep 1234)",
    fraudAlert: false,
  },
  {
    id: "SIN-004",
    store: "Quiosque 12 - Joias",
    type: "Dano Físico / Vandalismo",
    severity: "Baixa",
    status: "Pago",
    date: "2026-03-25",
    description: "Vidro do expositor trincado durante a madrugada.",
    files: ["camera_seguranca.mp4"],
    regulator: "Ana Souza (Susep 9876)",
    indemnityValue: 4500,
    deductibleValue: 500,
    fraudAlert: false,
  }
];

// Simple in-memory store for prototype
let claims = [...initialClaims];

export const getClaims = () => claims;
export const getClaimById = (id: string) => claims.find(c => c.id === id);
export const addClaim = (claim: Claim) => {
  claims.unshift(claim);
};
export const updateClaim = (id: string, updates: Partial<Claim>) => {
  claims = claims.map(c => c.id === id ? { ...c, ...updates } : c);
};
````

## File: Figma/src/imports/DESIGN_SYSTEM__JP_Mall_Corporativo.txt
````
DESIGN_SYSTEM: JP Mall Corporativo
PROJETO: Flamboyant Shopping | UFG 2026/1


---


1. OVERVIEW
- objetivo: interface corporativa limpa, moderna e funcional
- foco: produtividade, acessibilidade, baixo ruído visual
- modos:
  - light: padrão (uso em escritório)
  - dark: uso prolongado / baixa luz
- toggle: header
- persistencia: localStorage


---


2. COLORS


2.1 BRAND_LIGHT
- primary_dark: #8B1A1A
- primary: #D93030
- background: #F7F4EF
- accent: #C8A882


2.2 NEUTRAL_LIGHT
- white: #FFFFFF
- text_primary: #1F2937
- text_secondary: #4B5563
- border: #E5E7EB
- bg_input: #F9FAFB
- bg_table_alt: #F3F4F6


2.3 SEMANTIC_LIGHT
- success: #10B981
- warning: #F59E0B
- error: #D93030
- info: #3B82F6


---


3. COLORS_DARK


3.1 BACKGROUND
- base: #0F1117
- surface: #1A1F2E
- card: #242938
- border: #2E3447
- input: #1E2435


3.2 BRAND
- primary_dark: #8B1A1A
- primary: #E04444
- accent: #D4A96A


3.3 TEXT
- primary: #F1F5F9
- secondary: #94A3B8
- muted: #64748B


3.4 SEMANTIC
- success: #34D399
- warning: #FBBF24
- error: #E04444
- info: #60A5FA


---


4. TYPOGRAPHY
- font_primary: Inter
- fallback: Roboto, system-ui, sans-serif
- base_size: 16px


SCALE:
- h1: { size: 24px, weight: 700 }
- h2: { size: 18-20px, weight: 700 }
- h3: { size: 14px, weight: 700 }
- body: { size: 14-16px, weight: 400 }
- small: { size: 12px, weight: 400 }


---


5. SPACING
- base_unit: 8px
- scale:
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 32px
- border_radius: 8px


---


6. COMPONENTS


6.1 BUTTON
- min_height: 44px


light:
- primary_bg: #D93030
- primary_hover: #b92828


dark:
- primary_bg: #E04444
- primary_hover: #F05555


---


6.2 INPUT


light:
- bg: #F9FAFB
- border: #E5E7EB


dark:
- bg: #1E2435
- border: #2E3447


focus:
- light: ring #D93030
- dark: ring #E04444


error:
- light: #D93030
- dark: #E04444


label:
- light: #4B5563
- dark: #94A3B8


---


6.3 CARD


light:
- bg: #FFFFFF
- border: #E5E7EB


dark:
- bg: #242938
- border: #2E3447


- radius: 8px


---


6.4 BADGES


success:
- light: bg-green-50 text-green-700 border-green-200
- dark: bg-green-900/30 text-green-400 border-green-700


warning:
- light: bg-orange-50 text-orange-700 border-orange-200
- dark: bg-orange-900/30 text-orange-400 border-orange-700


error:
- light: bg-red-50 text-#D93030 border-red-200
- dark: bg-red-900/30 text-#E04444 border-red-700


info:
- light: bg-blue-50 text-blue-700 border-blue-200
- dark: bg-blue-900/30 text-blue-400 border-blue-700


---


7. ACCESSIBILITY


- contrast:
  - light: WCAG AA/AAA
  - dark: WCAG AA


- buttons:
  - light: OK (#D93030)
  - dark: revisar (#E04444)


- touch_target: 44px mínimo


- focus:
  - light: #D93030
  - dark: #E04444


---


8. DARK_TOKENS (CSS VARIABLES)


- --color-bg: #0F1117
- --color-surface: #1A1F2E
- --color-card: #242938
- --color-border: #2E3447
- --color-input-bg: #1E2435


- --color-primary: #8B1A1A
- --color-action: #E04444
- --color-action-hover: #F05555
- --color-accent: #D4A96A


- --color-text-primary: #F1F5F9
- --color-text-secondary: #94A3B8
- --color-text-muted: #64748B


- --color-success: #34D399
- --color-warning: #FBBF24
- --color-error: #E04444
- --color-info: #60A5FA


---


9. IMPLEMENTATION


toggle_dark_mode:
document.documentElement.classList.toggle('dark')


tailwind_example:
bg-white dark:bg-[#242938]
text-gray-800 dark:text-[#F1F5F9]
border-gray-200 dark:border-[#2E3447]
````

## File: Figma/src/imports/pasted_text/layout-sidebar-update.tsx
````typescript
Realize as seguintes alterações no projeto. Siga cada instrução com precisão, sem remover funcionalidades não mencionadas e sem alterar o estilo visual existente.

---

## 1. MENU LATERAL — `src/app/components/Layout.tsx`

**1.1 Remover todos os itens do menu exceto "Comercial".**

No array `navigationItems`, apague completamente os seguintes objetos e todos os seus `subTabs`:
- `Dashboard` (path `/dashboard`)
- `Lojistas` (path `/lojistas/diretorio`)
- `Treinamentos` (path `/treinamentos`)
- `Seguros` (path `/seguros`)
- `Manutenção` (path `/manutencao`)
- `Sinistros` (path `/sinistros/novo`)
- `Marketing` (path `/marketing`)
- `Institucional` (path `/institucional`)
- `Relatórios` (path `/relatorios`)

Mantenha apenas o item `Comercial` com seus `subTabs` atuais (Dashboard, Propostas, Contratos, Histórico, Disponibilidade, Relatórios).

**1.2 Remover também em `src/app/routes.tsx`** todas as rotas relacionadas aos menus removidos acima. Mantenha apenas a rota de login, a rota raiz com `Layout`, e as sub-rotas do comercial.

**1.3 Persistência de sub-aba ao navegar.**

Nas sub-abas internas do Comercial (Dashboard, Propostas, Contratos, Histórico, Disponibilidade, Relatórios), preserve o estado da última aba visitada ao retornar para ela durante a mesma sessão. Use `sessionStorage` para guardar a chave da aba ativa de cada página. Ao montar o componente, leia o valor salvo e restaure a aba correspondente.

**1.4 Redesenho visual e comportamento da sidebar.**

Atualize o menu lateral em `Layout.tsx` para seguir exatamente este comportamento:

**Estado aberto:**
- Sidebar fixa à esquerda com fundo vermelho escuro (use a cor já existente no design system do projeto, ex: `#8B1A1A` ou a variável CSS equivalente)
- No topo: logo do Flamboyant existente no projeto (`src/imports/logo_2024.png`) acompanhada do texto `"Gestão Premium"` em fonte menor, leve e em cor clara
- Itens de menu com ícone + texto lado a lado; ícones levemente menores, mais finos e polidos (tamanho `w-4 h-4`, `strokeWidth={1.5}`)
- Item ativo (rota atual) com fundo levemente mais claro e bordas arredondadas (`rounded-md`), sem quebrar o alinhamento dos demais itens
- No rodapé: área fixa com avatar colorido (iniciais do usuário em círculo), nome completo e e-mail do usuário logado (leia da `sessionStorage` se disponível)
- No canto superior direito da sidebar: botão com ícone de seta apontando para a esquerda (`ChevronLeft` do lucide-react) para fechar a sidebar

**Estado fechado:**
- A sidebar colapsa completamente (largura `0` ou `translate-x-[-100%]`), desaparecendo da tela
- Aparece um botão flutuante fixo no canto superior esquerdo da tela (`fixed top-4 left-4 z-50`) com ícone de 3 barras (`Menu` do lucide-react) para reabrir a sidebar
- O conteúdo principal ocupa toda a largura disponível

**Animações:**
- Use `transition-all duration-300 ease-in-out` tanto na sidebar quanto no botão flutuante
- Ao clicar na seta `<`: sidebar fecha com transição suave (300ms), o ícone de seta desaparece e o botão de 3 barras aparece com `opacity-100`
- Ao clicar nas 3 barras: sidebar abre com transição suave (300ms), o botão de 3 barras desaparece e a seta reaparece
- Use um estado React `const [sidebarOpen, setSidebarOpen] = useState(true)` para controlar a visibilidade
- Persista o estado da sidebar no `localStorage` com a chave `"sidebar_open"` para manter a preferência do usuário entre sessões

**1.5 Substituir "Piso 1 / 2 / 3" por "P / S / T" em todo o sistema.**

Em todos os arquivos `.tsx` e `.ts` do projeto, substitua:
- `'L1'` → `'P'` e `"Piso 1"` → `"P"` (exibição)
- `'L2'` → `'S'` e `"Piso 2"` → `"S"` (exibição)
- `'L3'` → `'T'` e `"Piso 3"` → `"T"` (exibição)

Isso inclui o tipo `piso: 'L1' | 'L2' | 'L3'` em `comercialData.ts` (altere para `'P' | 'S' | 'T'`), todos os dados dos lojistas no array `keyStores`, os filtros de piso nos componentes, os labels dos gráficos e qualquer texto de exibição que mencione "Piso 1", "Piso 2" ou "Piso 3". Mantenha os prefixos dos IDs de unidade intactos (ex: `L1-001` permanece `L1-001` — apenas a exibição do piso muda).

---

## 2. DASHBOARD COMERCIAL — `src/app/pages/comercial/ComercialDashboard.tsx`

Remova completamente os seguintes elementos visuais e seu código relacionado:

- O card **"Receita Total / Mês"** e suas subdivisões (Receita Aluguel e Receita Vendas)
- O gráfico **"Evolução da Receita Mensal"** (`revenueEvolution`) e todo o bloco JSX que o envolve
- O gráfico **"Receita por Categoria"** (`receitaBySegmento`)
- O gráfico **"Receita por Piso"** (`receitaByPiso`)
- As funções `totalRevenue`, `baseAluguel`, `receitaMensal`, `receitaAluguel`, `receitaVendas` e os `useMemo` relacionados

Mantenha todos os outros cards de KPI (total de lojas, ocupação, disponíveis, vencendo, propostas ativas) e os demais elementos do dashboard.

**Após a remoção, replique nesta página os gráficos que existem em `ComercialReports.tsx`:**
- Gráfico de barras de ocupação por segmento (`segmentosChart`)
- Gráfico de pizza de distribuição por tipo de contrato (`multasChart`)
- Os demais gráficos presentes na aba de relatórios que não sejam de receita ou desempenho

Importe os dados e funções necessárias de `comercialData.ts` e `comercialStore.ts` para renderizá-los no dashboard com o mesmo visual já utilizado em `ComercialReports.tsx`.

---

## 3. PROPOSTAS — `src/app/pages/comercial/ComercialProposals.tsx` e `src/app/data/comercialData.ts`

**3.1 Alterar os status possíveis de propostas.**

Em `comercialData.ts`, altere o tipo `StatusProposta` para:

```ts
export type StatusProposta =
  | "Aguardando análise financeira"
  | "Aguardando análise do comitê"
  | "Aprovado"
  | "Reprovado"
  | "Cancelado";
```

Em `ComercialProposals.tsx`, atualize o objeto `STATUS_COLORS` e o componente `StatusIcon` para mapear os novos status com cores e ícones coerentes:
- `"Aguardando análise financeira"` → amarelo, ícone `Clock`
- `"Aguardando análise do comitê"` → roxo, ícone `Eye`
- `"Aprovado"` → verde, ícone `CheckCircle`
- `"Reprovado"` → vermelho, ícone `XCircle`
- `"Cancelado"` → cinza, ícone `XCircle`

Atualize também os dados do array `propostasAtivas` em `comercialData.ts` para que os status existentes sejam migrados para os novos valores mais próximos (ex: "Aceita" → "Aprovado", "Em Análise" → "Aguardando análise financeira", "Em Negociação" → "Aguardando análise do comitê", "Recusada" → "Reprovado", "Expirada" → "Cancelado", "Pendente" → "Aguardando análise financeira").

**3.2 Adicionar filtro por período na aba de Propostas.**

Copie o filtro de data (`dateFrom` e `dateTo` com inputs `<input type="date">`) que existe em `ComercialHistory.tsx` e adicione-o na barra de filtros de `ComercialProposals.tsx`, mantendo os filtros já existentes (status, tipo, segmento, piso, busca por nome).

**Não adicione períodos pré-definidos** (botões como "Último mês", "Último trimestre" etc.). O filtro deve ter apenas os dois campos de data: "De" e "Até".

Aplique o filtro de data sobre o campo `dataCriacao` das propostas.

---

## 4. CONTRATOS — `src/app/pages/comercial/ComercialContracts.tsx`

Remova completamente o arquivo `ComercialContracts.tsx`.

Em `src/app/routes.tsx`, remova a rota `/comercial/contratos`.

Em `src/app/components/Layout.tsx`, remova o subTab `{ label: "Contratos", path: "/comercial/contratos" }` do item Comercial.

Em `src/app/data/comercialStore.ts`, remova as funções `getGeneratedContracts` e `addGeneratedContract` e seus dados relacionados, caso existam e não sejam utilizadas por outros componentes.

---

## 5. HISTÓRICO — `src/app/pages/comercial/ComercialHistory.tsx`

Remova completamente o arquivo `ComercialHistory.tsx`.

Em `src/app/routes.tsx`, remova a rota `/comercial/historico`.

Em `src/app/components/Layout.tsx`, remova o subTab `{ label: "Histórico", path: "/comercial/historico" }` do item Comercial.

---

## 6. RELATÓRIOS — `src/app/pages/comercial/ComercialReports.tsx`

**6.1 Remover os 4 cards de KPI do topo da página.**

Remova o bloco JSX que contém os cards com os seguintes dados:
- Receita Mensal Total
- Receita % Vendas/Mês
- E quaisquer outros cards de KPI no topo da página de relatórios

**6.2 Remover a aba "Desempenho" e seu conteúdo.**

No array de abas de tipo de relatório (`reportType`), remova o item `{ id: "desempenho", label: "Desempenho", icon: Activity }`.

Remova o bloco JSX `{reportType === "desempenho" && (...)}` e todo o código relacionado ao gráfico de desempenho dos contratos.

Remova do array de campos disponíveis (`FIELDS`) os campos:
- `{ id: "desempenho", label: "Desempenho (%)", ... }`
- `{ id: "receitaPercentual", label: "Receita % Vendas/Mês", ... }`

**6.3 Os gráficos restantes (ocupação por segmento, distribuição por tipo de contrato, e demais que não sejam de receita ou desempenho) já devem ter sido replicados no Dashboard conforme o item 2. Mantenha-os também aqui em Relatórios.**
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

## File: Figma/src/styles/theme.css
````css
@custom-variant dark (&:is(.dark *));

:root {
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
})
````

## File: postman/collections/JP-MALL-Testes/.resources/definition.yaml
````yaml
$kind: collection
name: JP-MALL-Testes
````

## File: postman/collections/JP-MALL-Testes/ping.request.yaml
````yaml
$kind: http-request
name: ping
url: localhost:8080/ping
method: GET
order: 3439669128790969
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

## File: API/cmd/main.go
````go
package main

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	models "go-api/GO"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/driver/postgres" // <-- Driver alterado aqui
	"gorm.io/gorm"
)

var DB *gorm.DB

func initDB() {
	var err error
	// Substitua os valores abaixo pelas credenciais do seu pgAdmin/PostgreSQL
	dsn := "host=localhost user=postgres password=postgre dbname=jpmall port=5432 sslmode=disable TimeZone=America/Sao_Paulo"
	
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Erro ao conectar ao banco de dados PostgreSQL:", err)
	}
	fmt.Println("Conexão com PostgreSQL estabelecida com sucesso!")
}

func main() {
	initDB()

	fmt.Println("Sincronizando tabelas...")
	err := DB.AutoMigrate(
		&models.Lojista{},
		&models.Contrato{},
		&models.Multa{},
		&models.PropostaHistorico{},
		&models.Proposta{},
		&models.Sinistro{},
	)

	if err != nil {
		log.Fatal("Erro ao rodar AutoMigrate:", err)
	}
	fmt.Println("Tabelas (Lojistas, Contratos, Multas, Propostas, Sinistros) criadas com sucesso!")

	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000", "http://localhost:5174"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		AllowCredentials: true,
	}))

	// Rotas do CRUD de Lojistas
	r.GET("/lojistas", getLojistas)
	// --- ADICIONE ESTAS DUAS LINHAS ---
	r.GET("/propostas", getPropostas)
	r.POST("/propostas", createProposta)
	r.GET("/lojistas/:id", getLojistaByID)
	r.POST("/lojistas", createLojista)
	r.PUT("/lojistas/:id", updateLojista)
	r.DELETE("/lojistas/:id", deleteLojista)

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Servidor JP Mall rodando e banco conectado!"})
	})

	fmt.Println("Servidor iniciado em http://localhost:8082")
	r.Run(":8082")
}

func getLojistas(c *gin.Context) {
	var lojistas []models.LojistaComRelacoes
	
	// Usamos Table("lojista") para indicar a tabela base, e Preload para trazer as relações
	if err := DB.Table("lojista").
		Preload("ContratoAtivo").
		Preload("Multas").
		Preload("Propostas").
		Find(&lojistas).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	
	c.JSON(http.StatusOK, lojistas)
}

func getLojistaByID(c *gin.Context) {
	id := c.Param("id")
	var lojista models.Lojista
	if err := DB.First(&lojista, "id = ?", id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.JSON(http.StatusNotFound, gin.H{"error": "Lojista não encontrado"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, lojista)
}

func createLojista(c *gin.Context) {
	var input models.CriarLojistaRequest
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	lojista := models.Lojista{
		ID:                   uuid.NewString(),
		Nome:                 sql.NullString{String: input.Nome, Valid: true},
		CNPJ:                 sql.NullString{String: input.CNPJ, Valid: true},
		Segmento:             input.Segmento,
		Responsavel:          sql.NullString{String: input.Responsavel, Valid: true},
		Email:                sql.NullString{String: input.Email, Valid: true},
		Telefone:             sql.NullString{String: input.Telefone, Valid: true},
		Unidade:              input.Unidade,
		Piso:                 input.Piso,
		Corredor:             input.Corredor,
		AreaM2:               input.AreaM2,
		Status:               models.StatusLojaOcupado,
		StatusRelacionamento: sql.NullString{Valid: false},
		FaturamentoMedio:     0,
	}

	if err := DB.Create(&lojista).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, lojista)
}

func updateLojista(c *gin.Context) {
	id := c.Param("id")
	var input models.AtualizarLojistaRequest
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var lojista models.Lojista
	if err := DB.First(&lojista, "id = ?", id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.JSON(http.StatusNotFound, gin.H{"error": "Lojista não encontrado"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if input.Nome != "" {
		lojista.Nome = sql.NullString{String: input.Nome, Valid: true}
	}
	if input.Segmento != "" {
		lojista.Segmento = input.Segmento
	}
	if input.Responsavel != "" {
		lojista.Responsavel = sql.NullString{String: input.Responsavel, Valid: true}
	}
	if input.Email != "" {
		lojista.Email = sql.NullString{String: input.Email, Valid: true}
	}
	if input.Telefone != "" {
		lojista.Telefone = sql.NullString{String: input.Telefone, Valid: true}
	}
	if input.Status != "" {
		lojista.Status = input.Status
	}

	if err := DB.Save(&lojista).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, lojista)
}

func deleteLojista(c *gin.Context) {
	id := c.Param("id")
	result := DB.Delete(&models.Lojista{}, "id = ?", id)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}
	if result.RowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Lojista não encontrado"})
		return
	}
	c.Status(http.StatusNoContent)
}
func getPropostas(c *gin.Context) {
	var propostas []models.Proposta
	if err := DB.Find(&propostas).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, propostas)
}

func createProposta(c *gin.Context) {
	var input models.CriarPropostaRequest
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	proposta := models.Proposta{
		ID:             uuid.NewString(),
		LojistaNome:    input.LojistaNome,
		Unidade:        input.Unidade,
		Segmento:       input.Segmento,
		Tipo:           input.Tipo,
		ValorProposto:  input.ValorProposto,
		AreaM2:         input.AreaM2,
		Status:         models.StatusPropostaPendente,
		Responsavel:    input.Responsavel,
		DataCriacao:    time.Now().Format("02/01/2006"), // Pega a data de hoje formatada
		DataVencimento: input.DataVencimento,
	}

	if input.Observacoes != nil {
		proposta.Observacoes = sql.NullString{String: *input.Observacoes, Valid: true}
	}

	if err := DB.Create(&proposta).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, proposta)
}
````

## File: API/go.mod
````
module go-api

go 1.26.3

require (
	github.com/gin-contrib/cors v1.7.7
	github.com/gin-gonic/gin v1.12.0
	github.com/google/uuid v1.6.0
	gorm.io/driver/postgres v1.6.0
	gorm.io/gorm v1.31.1
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
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20240606120523-5a60cdf6a761 // indirect
	github.com/jackc/pgx/v5 v5.6.0 // indirect
	github.com/jackc/puddle/v2 v2.2.2 // indirect
	github.com/jinzhu/inflection v1.0.0 // indirect
	github.com/jinzhu/now v1.1.5 // indirect
	github.com/json-iterator/go v1.1.12 // indirect
	github.com/klauspost/cpuid/v2 v2.3.0 // indirect
	github.com/leodido/go-urn v1.4.0 // indirect
	github.com/mattn/go-isatty v0.0.20 // indirect
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
	github.com/modern-go/reflect2 v1.0.2 // indirect
	github.com/pelletier/go-toml/v2 v2.2.4 // indirect
	github.com/quic-go/qpack v0.6.0 // indirect
	github.com/quic-go/quic-go v0.59.0 // indirect
	github.com/twitchyliquid64/golang-asm v0.15.1 // indirect
	github.com/ugorji/go/codec v1.3.1 // indirect
	go.mongodb.org/mongo-driver/v2 v2.5.0 // indirect
	golang.org/x/arch v0.23.0 // indirect
	golang.org/x/crypto v0.48.0 // indirect
	golang.org/x/net v0.51.0 // indirect
	golang.org/x/sync v0.20.0 // indirect
	golang.org/x/sys v0.41.0 // indirect
	golang.org/x/text v0.35.0 // indirect
	google.golang.org/protobuf v1.36.10 // indirect
)
````

## File: Banco de dados/jp-mall.sql
````sql
CREATE DATABASE IF NOT EXISTS `jp-mall`
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE `jp-mall`;

-- ------------------------------------------------------------
-- Tabela: lojistas
-- Fonte: comercialData.ts → keyStores + unidades disponíveis
-- ------------------------------------------------------------
CREATE TABLE lojistas (
  id               VARCHAR(10)  NOT NULL,
  nome             VARCHAR(100),
  cnpj             VARCHAR(20),
  segmento         ENUM('Moda','Alimentação','Serviços','Eletrônicos','Esportes','Entretenimento','Outros') NOT NULL,
  responsavel      VARCHAR(100),
  email            VARCHAR(150),
  telefone         VARCHAR(20),
  unidade          VARCHAR(10)  NOT NULL,
  piso             ENUM('L1','L2','L3') NOT NULL,
  corredor         ENUM('A','B','C') NOT NULL,
  area_m2          INT          NOT NULL,
  status           ENUM('Ocupado','Disponível') NOT NULL DEFAULT 'Disponível',
  status_relacionamento ENUM('Excelente','Bom','Regular','Crítico'),
  faturamento_medio BIGINT      NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO lojistas VALUES
  ('L1-001', 'Renner', '92.754.738/0001-62', 'Moda', 'Marcela Fontana', 'marcela.fontana@renner.com.br', '(62) 3344-5566', 'L1-001', 'L1', 'A', 800, 'Ocupado', 'Excelente', 1850000),
  ('L1-002', 'C&A', '45.242.914/0001-05', 'Moda', 'Roberto Siqueira', 'roberto.siqueira@cea.com.br', '(62) 3210-9988', 'L1-002', 'L1', 'A', 700, 'Ocupado', 'Bom', 1420000),
  ('L1-003', 'Riachuelo', '33.200.056/0001-28', 'Moda', 'Fernanda Leite', 'f.leite@riachuelo.com.br', '(62) 3344-7788', 'L1-003', 'L1', 'A', 650, 'Ocupado', 'Bom', 1280000),
  ('L1-004', 'Zara', '72.700.786/0001-99', 'Moda', 'Ana Paula Rocha', 'ana.rocha@zara.com.br', '(62) 3512-3344', 'L1-004', 'L1', 'A', 450, 'Ocupado', 'Excelente', 2100000),
  ('L1-005', 'H&M', '23.613.404/0001-58', 'Moda', 'Carlos Matos', 'c.matos@hm.com', '(62) 3212-1100', 'L1-005', 'L1', 'A', 500, 'Ocupado', 'Excelente', 1950000),
  ('L1-006', 'Arezzo', '16.590.234/0001-76', 'Moda', 'Beatriz Cardoso', 'beatriz.c@arezzo.com.br', '(62) 3321-5544', 'L1-006', 'L1', 'A', 180, 'Ocupado', 'Excelente', 780000),
  ('L1-007', 'Chilli Beans', '04.392.000/0001-22', 'Moda', 'Thiago Assunção', 'thiago.a@chillibeans.com.br', '(62) 3301-2200', 'L1-007', 'L1', 'A', 80, 'Ocupado', 'Bom', 390000),
  ('L1-008', 'Farm', '03.799.255/0001-81', 'Moda', 'Juliana Prado', 'j.prado@farm.com.br', '(62) 3456-7890', 'L1-008', 'L1', 'A', 190, 'Ocupado', 'Excelente', 920000),
  ('L1-031', 'Decathlon', '03.471.761/0001-68', 'Esportes', 'Pierre Dubois', 'pierre.dubois@decathlon.com.br', '(62) 3600-1200', 'L1-031', 'L1', 'B', 1200, 'Ocupado', 'Excelente', 3200000),
  ('L1-032', 'Centauro', '42.830.506/0001-65', 'Esportes', 'Márcio Silveira', 'm.silveira@centauro.com.br', '(62) 3412-3344', 'L1-032', 'L1', 'B', 400, 'Ocupado', 'Excelente', 1350000),
  ('L1-033', 'Nike Store', '56.998.476/0001-10', 'Esportes', 'Lucas Andrade', 'lucas.a@nike.com', '(62) 3400-1122', 'L1-033', 'L1', 'B', 250, 'Ocupado', 'Excelente', 1100000),
  ('L1-034', 'Adidas', '61.088.094/0001-57', 'Esportes', 'Claudia Becker', 'claudia.b@adidas.com', '(62) 3501-4455', 'L1-034', 'L1', 'B', 230, 'Ocupado', 'Bom', 890000),
  ('L1-061', 'Bradesco', '60.746.948/0001-12', 'Serviços', 'Rafael Monteiro', 'rafael.monteiro@bradesco.com.br', '(62) 3100-5000', 'L1-061', 'L1', 'C', 120, 'Ocupado', 'Excelente', 0),
  ('L1-062', 'Itaú Uniclass', '60.872.504/0001-23', 'Serviços', 'Vanessa Torres', 'vanessa.torres@itau.com.br', '(62) 3300-7788', 'L1-062', 'L1', 'C', 100, 'Ocupado', 'Excelente', 0),
  ('L1-063', 'Claro', '40.432.544/0001-47', 'Serviços', 'Diego Nascimento', 'd.nascimento@claro.com.br', '(62) 3400-2020', 'L1-063', 'L1', 'C', 70, 'Ocupado', 'Regular', 420000),
  ('L2-001', 'Fast Shop', '61.797.924/0001-67', 'Eletrônicos', 'Marcus Ribeiro', 'marcus.ribeiro@fastshop.com.br', '(62) 3600-3344', 'L2-001', 'L2', 'A', 350, 'Ocupado', 'Excelente', 2800000),
  ('L2-002', 'Apple Store', '00.015.477/0001-00', 'Eletrônicos', 'Jennifer Kim', 'jennifer.kim@apple.com', '(62) 3700-7777', 'L2-002', 'L2', 'A', 280, 'Ocupado', 'Excelente', 5500000),
  ('L2-003', 'Samsung Experience', '17.901.255/0001-49', 'Eletrônicos', 'Min Jun Park', 'minjun.park@samsung.com', '(62) 3500-5500', 'L2-003', 'L2', 'A', 200, 'Ocupado', 'Excelente', 2200000),
  ('L2-004', 'Magazine Luiza', '47.960.950/0001-21', 'Eletrônicos', 'Priscila Madureira', 'p.madureira@magazineluiza.com.br', '(62) 3800-1234', 'L2-004', 'L2', 'A', 500, 'Ocupado', 'Bom', 3100000),
  ('L2-031', 'O Boticário', '75.659.658/0001-83', 'Outros', 'Ana Lima', 'ana.lima@boticario.com.br', '(62) 3233-4455', 'L2-031', 'L2', 'B', 150, 'Ocupado', 'Excelente', 680000),
  ('L2-032', 'Natura', '71.673.990/0001-77', 'Outros', 'Carla Soares', 'carla.soares@natura.net', '(62) 3301-4488', 'L2-032', 'L2', 'B', 140, 'Ocupado', 'Excelente', 620000),
  ('L2-033', 'Starbucks Reserve', '08.164.083/0001-48', 'Alimentação', 'Rodrigo Campos', 'r.campos@starbucks.com.br', '(62) 3441-2200', 'L2-033', 'L2', 'B', 200, 'Ocupado', 'Excelente', 1100000),
  ('L2-034', 'Uniqlo', '32.521.444/0001-39', 'Moda', 'Yuki Tanaka', 'y.tanaka@uniqlo.com', '(62) 3600-4400', 'L2-034', 'L2', 'B', 600, 'Ocupado', 'Excelente', 2800000),
  ('L2-061', 'Smart Fit', '21.386.077/0001-27', 'Serviços', 'Felipe Gomes', 'felipe.gomes@smartfit.com.br', '(62) 3800-9900', 'L2-061', 'L2', 'C', 800, 'Ocupado', 'Excelente', 580000),
  ('L2-063', 'Cinemark', '62.578.458/0001-60', 'Entretenimento', 'Sandra Almeida', 's.almeida@cinemark.com.br', '(62) 3900-1100', 'L2-063', 'L2', 'C', 2500, 'Ocupado', 'Excelente', 4200000),
  ('L3-001', 'McDonald''s', '47.079.633/0001-01', 'Alimentação', 'Renata Freitas', 'renata.freitas@mcdonalds.com.br', '(62) 3312-5500', 'L3-001', 'L3', 'A', 320, 'Ocupado', 'Excelente', 2900000),
  ('L3-002', 'Outback Steakhouse', '15.110.258/0001-45', 'Alimentação', 'George Mitchell', 'george.mitchell@outback.com.br', '(62) 3500-2200', 'L3-002', 'L3', 'A', 400, 'Ocupado', 'Excelente', 3500000),
  ('L3-003', 'Subway', '11.080.473/0001-35', 'Alimentação', 'Carlos Junior', 'carlosjr@subway.com.br', '(62) 3212-8899', 'L3-003', 'L3', 'A', 120, 'Ocupado', 'Bom', 480000),
  ('L3-004', 'Burger King', '13.574.594/0001-96', 'Alimentação', 'Marcos Tavares', 'marcos.tavares@burgerking.com.br', '(62) 3444-5566', 'L3-004', 'L3', 'A', 280, 'Ocupado', 'Excelente', 1800000),
  ('L3-005', 'Fogo de Chão', '09.386.049/0001-27', 'Alimentação', 'Alessandro Moura', 'a.moura@fogodechao.com.br', '(62) 3600-8800', 'L3-005', 'L3', 'A', 500, 'Ocupado', 'Excelente', 4800000),
  ('L3-006', 'Bob''s', '14.982.647/0001-52', 'Alimentação', 'Samir Couto', 'samir.couto@bobs.com.br', '(62) 3200-9900', 'L3-006', 'L3', 'A', 140, 'Ocupado', 'Bom', 560000),
  ('L3-007', 'Giraffas', '52.148.007/0001-73', 'Alimentação', 'Vanessa Rezende', 'v.rezende@giraffas.com.br', '(62) 3400-7711', 'L3-007', 'L3', 'A', 160, 'Ocupado', 'Regular', 490000),
  ('L3-028', 'Pizza Hut', '10.490.715/0001-01', 'Alimentação', 'Paulo Mendes', 'paulo.mendes@pizzahut.com.br', '(62) 3512-9900', 'L3-028', 'L3', 'B', 200, 'Ocupado', 'Bom', 820000),
  ('L3-029', 'KFC', '17.311.723/0001-92', 'Alimentação', 'Anderson Rocha', 'anderson.rocha@kfc.com.br', '(62) 3312-4455', 'L3-029', 'L3', 'B', 180, 'Ocupado', 'Bom', 750000),
  ('L3-030', 'Spoleto', '05.351.939/0001-18', 'Alimentação', 'Rita Cardoso', 'rita.cardoso@spoleto.com.br', '(62) 3400-5544', 'L3-030', 'L3', 'B', 130, 'Ocupado', 'Bom', 540000),
  ('L3-055', 'Tok&Stok', '07.620.072/0001-61', 'Outros', 'Isabella Ferreira', 'isabella.ferreira@tokstok.com.br', '(62) 3600-7766', 'L3-055', 'L3', 'C', 400, 'Ocupado', 'Bom', 980000),
  ('L3-056', 'Livraria Cultura', '60.665.981/0001-93', 'Outros', 'Eduardo Braga', 'e.braga@livrariacultura.com.br', '(62) 3301-9988', 'L3-056', 'L3', 'C', 350, 'Ocupado', 'Regular', 620000),
  ('L3-057', 'CVC Viagens', '10.760.260/0001-19', 'Serviços', 'Tatiane Moreira', 'tatiane.moreira@cvc.com.br', '(62) 3312-3344', 'L3-057', 'L3', 'C', 80, 'Ocupado', 'Bom', 350000),
  ('L1-023', NULL, NULL, 'Moda', NULL, NULL, NULL, 'L1-023', 'L1', 'A', 85, 'Disponível', NULL, 0),
  ('L1-047', NULL, NULL, 'Esportes', NULL, NULL, NULL, 'L1-047', 'L1', 'B', 120, 'Disponível', NULL, 0),
  ('L1-068', NULL, NULL, 'Serviços', NULL, NULL, NULL, 'L1-068', 'L1', 'C', 70, 'Disponível', NULL, 0),
  ('L2-015', NULL, NULL, 'Eletrônicos', NULL, NULL, NULL, 'L2-015', 'L2', 'A', 100, 'Disponível', NULL, 0),
  ('L2-039', NULL, NULL, 'Outros', NULL, NULL, NULL, 'L2-039', 'L2', 'B', 90, 'Disponível', NULL, 0),
  ('L2-062', NULL, NULL, 'Serviços', NULL, NULL, NULL, 'L2-062', 'L2', 'C', 95, 'Disponível', NULL, 0),
  ('L3-008', NULL, NULL, 'Alimentação', NULL, NULL, NULL, 'L3-008', 'L3', 'A', 100, 'Disponível', NULL, 0),
  ('L3-031', NULL, NULL, 'Alimentação', NULL, NULL, NULL, 'L3-031', 'L3', 'B', 90, 'Disponível', NULL, 0),
  ('L3-054', NULL, NULL, 'Alimentação', NULL, NULL, NULL, 'L3-054', 'L3', 'B', 80, 'Disponível', NULL, 0),
  ('L3-072', NULL, NULL, 'Outros', NULL, NULL, NULL, 'L3-072', 'L3', 'C', 85, 'Disponível', NULL, 0);

-- ------------------------------------------------------------
-- Tabela: contratos
-- Fonte: comercialData.ts → keyStores[].contratoAtivo
-- ------------------------------------------------------------
CREATE TABLE contratos (
  id                      VARCHAR(20)  NOT NULL,
  lojista_id              VARCHAR(10)  NOT NULL,
  inicio                  VARCHAR(12)  NOT NULL,
  fim                     VARCHAR(12)  NOT NULL,
  valor_aluguel           DECIMAL(12,2) NOT NULL,
  luvas                   DECIMAL(12,2) NOT NULL,
  percentual_faturamento  DECIMAL(5,2) NOT NULL DEFAULT 0,
  indice_reajuste         ENUM('IGPM','IPCA') NOT NULL,
  tipo                    ENUM('Aluguel Fixo','Aluguel + Percentual','Só Percentual') NOT NULL,
  desempenho              INT          NOT NULL,
  dias_restantes          INT          NOT NULL,
  status                  ENUM('Ativo','Em Renovação','Vencendo','Vencido') NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO contratos VALUES
  ('CTR-2024-001', 'L1-001', '01/03/2024', '28/02/2027', 72000, 450000, 3.5, 'IGPM', 'Aluguel + Percentual', 95, 683, 'Ativo'),
  ('CTR-2023-002', 'L1-002', '01/06/2023', '31/05/2026', 61000, 380000, 3.0, 'IPCA', 'Aluguel + Percentual', 82, 44, 'Vencendo'),
  ('CTR-2024-003', 'L1-003', '01/01/2024', '31/12/2026', 55000, 310000, 3.2, 'IGPM', 'Aluguel + Percentual', 79, 258, 'Ativo'),
  ('CTR-2025-004', 'L1-004', '01/04/2025', '31/03/2028', 98000, 620000, 4.0, 'IPCA', 'Aluguel + Percentual', 97, 1079, 'Ativo'),
  ('CTR-2024-005', 'L1-005', '01/07/2024', '30/06/2027', 88000, 550000, 3.8, 'IPCA', 'Aluguel + Percentual', 93, 804, 'Ativo'),
  ('CTR-2023-006', 'L1-006', '01/09/2023', '31/08/2026', 32000, 180000, 4.5, 'IGPM', 'Aluguel + Percentual', 91, 136, 'Ativo'),
  ('CTR-2024-007', 'L1-007', '01/01/2024', '31/12/2025', 18000, 95000, 5.0, 'IPCA', 'Aluguel + Percentual', 76, 258, 'Vencendo'),
  ('CTR-2025-008', 'L1-008', '01/02/2025', '31/01/2028', 41000, 220000, 4.2, 'IGPM', 'Aluguel + Percentual', 89, 1020, 'Ativo'),
  ('CTR-2022-031', 'L1-031', '01/08/2022', '31/07/2027', 95000, 700000, 2.8, 'IGPM', 'Aluguel + Percentual', 98, 1200, 'Ativo'),
  ('CTR-2024-032', 'L1-032', '01/04/2024', '31/03/2027', 52000, 290000, 3.5, 'IPCA', 'Aluguel + Percentual', 90, 714, 'Ativo'),
  ('CTR-2023-033', 'L1-033', '01/10/2023', '30/09/2026', 68000, 420000, 4.0, 'IPCA', 'Aluguel + Percentual', 96, 166, 'Ativo'),
  ('CTR-2024-034', 'L1-034', '01/05/2024', '30/04/2027', 58000, 340000, 3.8, 'IGPM', 'Aluguel + Percentual', 84, 744, 'Ativo'),
  ('CTR-2021-061', 'L1-061', '01/01/2021', '31/12/2025', 28000, 150000, 0, 'IPCA', 'Aluguel Fixo', 99, 258, 'Vencendo'),
  ('CTR-2024-062', 'L1-062', '01/08/2024', '31/07/2027', 26000, 130000, 0, 'IPCA', 'Aluguel Fixo', 100, 835, 'Ativo'),
  ('CTR-2023-063', 'L1-063', '01/03/2023', '28/02/2026', 19000, 80000, 2.0, 'IGPM', 'Aluguel + Percentual', 61, 47, 'Vencendo'),
  ('CTR-2024-101', 'L2-001', '01/06/2024', '31/05/2027', 75000, 480000, 2.5, 'IGPM', 'Aluguel + Percentual', 92, 774, 'Ativo'),
  ('CTR-2023-102', 'L2-002', '01/09/2023', '31/08/2028', 150000, 1200000, 2.0, 'IPCA', 'Aluguel + Percentual', 100, 1231, 'Ativo'),
  ('CTR-2025-103', 'L2-003', '01/01/2025', '31/12/2027', 82000, 500000, 2.8, 'IPCA', 'Aluguel + Percentual', 94, 988, 'Ativo'),
  ('CTR-2022-104', 'L2-004', '01/01/2022', '31/12/2026', 68000, 380000, 2.2, 'IGPM', 'Aluguel + Percentual', 80, 258, 'Ativo'),
  ('CTR-2024-131', 'L2-031', '01/03/2024', '28/02/2027', 34000, 180000, 4.5, 'IGPM', 'Aluguel + Percentual', 92, 683, 'Ativo'),
  ('CTR-2025-132', 'L2-032', '01/06/2025', '31/05/2028', 31000, 160000, 4.2, 'IPCA', 'Aluguel + Percentual', 90, 1140, 'Ativo'),
  ('CTR-2024-133', 'L2-033', '01/09/2024', '31/08/2027', 45000, 280000, 5.0, 'IGPM', 'Aluguel + Percentual', 95, 866, 'Ativo'),
  ('CTR-2025-134', 'L2-034', '01/03/2025', '28/02/2030', 110000, 800000, 3.5, 'IPCA', 'Aluguel + Percentual', 97, 1777, 'Ativo'),
  ('CTR-2023-161', 'L2-061', '01/06/2023', '31/05/2028', 48000, 300000, 0, 'IGPM', 'Aluguel Fixo', 88, 1140, 'Ativo'),
  ('CTR-2019-163', 'L2-063', '01/01/2019', '31/12/2028', 180000, 2000000, 2.0, 'IGPM', 'Aluguel + Percentual', 96, 1719, 'Ativo'),
  ('CTR-2022-201', 'L3-001', '01/04/2022', '31/03/2027', 90000, 600000, 3.0, 'IGPM', 'Aluguel + Percentual', 99, 349, 'Ativo'),
  ('CTR-2024-202', 'L3-002', '01/08/2024', '31/07/2027', 105000, 700000, 3.5, 'IGPM', 'Aluguel + Percentual', 97, 835, 'Ativo'),
  ('CTR-2024-203', 'L3-003', '01/01/2024', '31/12/2026', 22000, 110000, 5.0, 'IPCA', 'Aluguel + Percentual', 74, 258, 'Ativo'),
  ('CTR-2023-204', 'L3-004', '01/07/2023', '30/06/2026', 75000, 450000, 3.2, 'IGPM', 'Aluguel + Percentual', 91, 74, 'Vencendo'),
  ('CTR-2023-205', 'L3-005', '01/11/2023', '31/10/2028', 135000, 950000, 3.0, 'IGPM', 'Aluguel + Percentual', 98, 1657, 'Ativo'),
  ('CTR-2025-206', 'L3-006', '01/02/2025', '31/01/2028', 26000, 130000, 4.5, 'IPCA', 'Aluguel + Percentual', 78, 1020, 'Ativo'),
  ('CTR-2023-207', 'L3-007', '01/04/2023', '31/03/2026', 20000, 90000, 4.0, 'IGPM', 'Aluguel + Percentual', 65, 349, 'Ativo'),
  ('CTR-2024-228', 'L3-028', '01/05/2024', '30/04/2027', 38000, 200000, 4.0, 'IPCA', 'Aluguel + Percentual', 77, 743, 'Ativo'),
  ('CTR-2025-229', 'L3-029', '01/01/2025', '31/12/2027', 35000, 180000, 4.2, 'IGPM', 'Aluguel + Percentual', 82, 988, 'Ativo'),
  ('CTR-2024-230', 'L3-030', '01/07/2024', '30/06/2027', 24000, 120000, 4.5, 'IPCA', 'Aluguel + Percentual', 80, 804, 'Ativo'),
  ('CTR-2024-255', 'L3-055', '01/04/2024', '31/03/2027', 42000, 230000, 3.0, 'IGPM', 'Aluguel + Percentual', 81, 714, 'Ativo'),
  ('CTR-2022-256', 'L3-056', '01/06/2022', '31/05/2026', 28000, 150000, 3.5, 'IPCA', 'Aluguel + Percentual', 62, 44, 'Vencendo'),
  ('CTR-2025-257', 'L3-057', '01/03/2025', '28/02/2028', 16000, 75000, 4.0, 'IPCA', 'Aluguel + Percentual', 75, 1047, 'Ativo');

-- ------------------------------------------------------------
-- Tabela: multas
-- Fonte: comercialData.ts → keyStores[].multas
-- ------------------------------------------------------------
CREATE TABLE multas (
  id          VARCHAR(15)  NOT NULL,
  lojista_id  VARCHAR(10)  NOT NULL,
  data        VARCHAR(12)  NOT NULL,
  tipo        VARCHAR(80)  NOT NULL,
  valor       DECIMAL(10,2) NOT NULL,
  descricao   TEXT         NOT NULL,
  status      ENUM('Paga','Pendente','Contestada') NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO multas VALUES
  ('MUL-001', 'L1-001', '15/08/2024', 'Atraso no Pagamento', 3600, 'Atraso de 5 dias no pagamento de aluguel ago/2024', 'Paga'),
  ('MUL-002', 'L1-002', '10/11/2023', 'Uso indevido de área comum', 5000, 'Uso de corredor externo para exposição sem autorização', 'Paga'),
  ('MUL-003', 'L1-002', '18/03/2024', 'Atraso no Pagamento', 3050, 'Atraso de 4 dias no pagamento de março/2024', 'Paga'),
  ('MUL-007', 'L1-007', '20/06/2024', 'Fachada fora do padrão', 2500, 'Outdoor não aprovado pelo mall instalado na fachada', 'Paga'),
  ('MUL-034', 'L1-034', '12/09/2024', 'Obras sem aprovação', 8000, 'Remodelação da fachada sem autorização prévia do mall', 'Contestada'),
  ('MUL-063a', 'L1-063', '10/05/2024', 'Atraso no Pagamento', 950, 'Atraso de 3 dias no pagamento de maio/2024', 'Paga'),
  ('MUL-063b', 'L1-063', '12/09/2024', 'Atraso no Pagamento', 950, 'Atraso de 3 dias no pagamento de setembro/2024', 'Paga'),
  ('MUL-063c', 'L1-063', '08/01/2025', 'Atraso no Pagamento', 950, 'Atraso de 2 dias no pagamento de janeiro/2025', 'Pendente'),
  ('MUL-104', 'L2-004', '25/07/2023', 'Atraso no Pagamento', 3400, 'Atraso de 5 dias no pagamento de julho/2023', 'Paga'),
  ('MUL-203', 'L3-003', '02/02/2025', 'Descumprimento de horário', 2000, 'Funcionamento fora do horário estabelecido sem autorização prévia', 'Paga'),
  ('MUL-207a', 'L3-007', '15/07/2024', 'Atraso no Pagamento', 1000, 'Atraso de 5 dias no pagamento de julho/2024', 'Paga'),
  ('MUL-207b', 'L3-007', '14/10/2024', 'Irregularidade sanitária', 5000, 'Notificação da Vigilância Sanitária repercutida no mall', 'Contestada'),
  ('MUL-228', 'L3-028', '20/11/2024', 'Atraso no Pagamento', 1900, 'Atraso de 5 dias novembro/2024', 'Paga'),
  ('MUL-256', 'L3-056', '05/04/2025', 'Atraso no Pagamento', 1400, 'Atraso de 5 dias em abril/2025', 'Paga');

-- ------------------------------------------------------------
-- Tabela: propostas_historico
-- Fonte: comercialData.ts → keyStores[].propostas
-- ------------------------------------------------------------
CREATE TABLE propostas_historico (
  id          VARCHAR(15)  NOT NULL,
  lojista_id  VARCHAR(10)  NOT NULL,
  data        VARCHAR(12)  NOT NULL,
  tipo        ENUM('Nova Proposta','Renovação','Readequação') NOT NULL,
  valor       DECIMAL(12,2) NOT NULL,
  status      ENUM('Pendente','Em Análise','Em Negociação','Aceita','Recusada','Expirada') NOT NULL,
  observacao  TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO propostas_historico VALUES
  ('PROP-H-001', 'L1-001', '10/01/2024', 'Renovação', 72000, 'Aceita', 'Renovação com reajuste de 8% pelo IGPM'),
  ('PROP-H-002', 'L1-001', '05/02/2021', 'Nova Proposta', 62000, 'Aceita', 'Expansão com área adicional de 200m²'),
  ('PROP-H-003', 'L1-002', '10/04/2026', 'Renovação', 66000, 'Em Negociação', 'Proposta de renovação com reajuste de 8%'),
  ('PROP-H-004', 'L1-002', '15/04/2023', 'Renovação', 61000, 'Aceita', 'Renovação com readequação de área'),
  ('PROP-H-005', 'L1-003', '15/11/2023', 'Renovação', 55000, 'Aceita', 'Negociação rápida, sem pendências'),
  ('PROP-H-006', 'L1-004', '20/01/2025', 'Nova Proposta', 98000, 'Aceita', 'Nova instalação, ponto premium'),
  ('PROP-H-007', 'L1-005', '01/05/2024', 'Nova Proposta', 88000, 'Aceita', NULL),
  ('PROP-H-008', 'L1-006', '01/07/2023', 'Renovação', 32000, 'Aceita', 'Reajuste de 7% acordado'),
  ('PROP-H-009', 'L1-007', '05/04/2026', 'Renovação', 20000, 'Em Negociação', 'Reajuste proposto de 11%'),
  ('PROP-H-010', 'L1-007', '28/11/2023', 'Renovação', 18000, 'Aceita', NULL),
  ('PROP-H-011', 'L1-008', '10/12/2024', 'Nova Proposta', 41000, 'Aceita', 'Transferência de outra unidade'),
  ('PROP-H-012', 'L1-031', '01/06/2022', 'Nova Proposta', 95000, 'Aceita', 'Âncora esportiva exclusiva para o piso 1'),
  ('PROP-H-013', 'L1-032', '10/02/2024', 'Renovação', 52000, 'Aceita', NULL),
  ('PROP-H-014', 'L1-033', '01/08/2023', 'Renovação', 68000, 'Aceita', 'Reajuste de 9% negociado'),
  ('PROP-H-015', 'L1-034', '15/03/2024', 'Nova Proposta', 58000, 'Aceita', NULL),
  ('PROP-H-016', 'L1-061', '02/04/2026', 'Renovação', 31000, 'Em Análise', 'Banco solicita prazo de análise interna de 30 dias'),
  ('PROP-H-017', 'L1-061', '20/11/2020', 'Nova Proposta', 28000, 'Aceita', NULL),
  ('PROP-H-018', 'L1-062', '01/06/2024', 'Renovação', 26000, 'Aceita', 'Renovação antecipada com ajuste'),
  ('PROP-H-019', 'L1-063', '05/04/2026', 'Renovação', 20500, 'Pendente', 'Aguardando aprovação interna da operadora'),
  ('PROP-H-020', 'L1-063', '01/01/2023', 'Nova Proposta', 19000, 'Aceita', NULL),
  ('PROP-H-021', 'L2-001', '01/04/2024', 'Renovação', 75000, 'Aceita', 'Fidelização de lojista âncora'),
  ('PROP-H-022', 'L2-002', '20/06/2023', 'Nova Proposta', 150000, 'Aceita', 'Negociação estratégica com selo de loja certificada Apple'),
  ('PROP-H-023', 'L2-003', '01/11/2024', 'Nova Proposta', 82000, 'Aceita', NULL),
  ('PROP-H-024', 'L2-004', '01/11/2021', 'Nova Proposta', 68000, 'Aceita', NULL),
  ('PROP-H-025', 'L2-031', '10/01/2024', 'Renovação', 34000, 'Aceita', NULL),
  ('PROP-H-026', 'L2-032', '01/04/2025', 'Renovação', 31000, 'Aceita', NULL),
  ('PROP-H-027', 'L2-033', '10/04/2026', 'Readequação', 48000, 'Em Negociação', 'Proposta de aumento de área com novo contrato'),
  ('PROP-H-028', 'L2-033', '01/07/2024', 'Nova Proposta', 45000, 'Aceita', 'Primeiro Starbucks Reserve de Goiânia'),
  ('PROP-H-029', 'L2-034', '01/12/2024', 'Nova Proposta', 110000, 'Aceita', 'Primeira loja em Goiânia — exclusividade por 5 anos'),
  ('PROP-H-030', 'L2-061', '01/04/2023', 'Nova Proposta', 48000, 'Aceita', 'Contrato longo prazo 5 anos com reajuste anual IGPM'),
  ('PROP-H-031', 'L2-063', '01/10/2018', 'Nova Proposta', 180000, 'Aceita', 'Contrato âncora de entretenimento 10 anos'),
  ('PROP-H-032', 'L3-001', '01/02/2022', 'Renovação', 90000, 'Aceita', NULL),
  ('PROP-H-033', 'L3-002', '01/06/2024', 'Renovação', 105000, 'Aceita', 'Expansão de área de 350 para 400m²'),
  ('PROP-H-034', 'L3-002', '15/04/2026', 'Readequação', 115000, 'Em Negociação', 'Proposta de nova expansão + reforma da cozinha'),
  ('PROP-H-035', 'L3-003', '20/11/2023', 'Nova Proposta', 22000, 'Aceita', NULL),
  ('PROP-H-036', 'L3-004', '08/04/2026', 'Renovação', 82000, 'Em Negociação', 'Negociação com pedido de desconto pela inflação do setor'),
  ('PROP-H-037', 'L3-004', '01/05/2023', 'Nova Proposta', 75000, 'Aceita', NULL),
  ('PROP-H-038', 'L3-005', '01/09/2023', 'Nova Proposta', 135000, 'Aceita', 'Âncora premium da praça de alimentação'),
  ('PROP-H-039', 'L3-006', '01/12/2024', 'Renovação', 26000, 'Aceita', NULL),
  ('PROP-H-040', 'L3-007', '01/02/2023', 'Nova Proposta', 20000, 'Aceita', NULL),
  ('PROP-H-041', 'L3-028', '01/03/2024', 'Nova Proposta', 38000, 'Aceita', NULL),
  ('PROP-H-042', 'L3-029', '01/11/2024', 'Nova Proposta', 35000, 'Aceita', NULL),
  ('PROP-H-043', 'L3-030', '01/05/2024', 'Renovação', 24000, 'Aceita', NULL),
  ('PROP-H-044', 'L3-055', '01/02/2024', 'Nova Proposta', 42000, 'Aceita', NULL),
  ('PROP-H-045', 'L3-056', '05/04/2026', 'Renovação', 29000, 'Pendente', 'Aguardando definição interna sobre fechamento de filiais'),
  ('PROP-H-046', 'L3-056', '01/04/2022', 'Nova Proposta', 28000, 'Aceita', NULL),
  ('PROP-H-047', 'L3-057', '01/01/2025', 'Renovação', 16000, 'Aceita', NULL);

-- ------------------------------------------------------------
-- Tabela: propostas
-- Fonte: comercialData.ts → propostasAtivas
-- ------------------------------------------------------------
CREATE TABLE propostas (
  id               VARCHAR(20)  NOT NULL,
  lojista_id       VARCHAR(10),
  lojista_nome     VARCHAR(100) NOT NULL,
  unidade          VARCHAR(10)  NOT NULL,
  segmento         ENUM('Moda','Alimentação','Serviços','Eletrônicos','Esportes','Entretenimento','Outros') NOT NULL,
  tipo             ENUM('Nova Instalação','Renovação','Readequação') NOT NULL,
  valor_proposto   DECIMAL(12,2) NOT NULL,
  area_m2          INT          NOT NULL,
  status           ENUM('Pendente','Em Análise','Em Negociação','Aceita','Recusada','Expirada') NOT NULL,
  responsavel      VARCHAR(100) NOT NULL,
  data_criacao     VARCHAR(12)  NOT NULL,
  data_vencimento  VARCHAR(12)  NOT NULL,
  observacoes      TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
) ENGINE=InnoDB;

INSERT INTO propostas VALUES
  ('PROP-2026-001', 'L1-002', 'C&A', 'L1-002', 'Moda', 'Renovação', 66000, 700, 'Em Negociação', 'Gerência Comercial', '10/04/2026', '30/05/2026', 'Proposta de renovação com reajuste de 8% sobre IPCA. Lojista solicita menor percentual de faturamento.'),
  ('PROP-2026-002', NULL, 'Zara Home (Novo)', 'L2-039', 'Outros', 'Nova Instalação', 38000, 90, 'Em Análise', 'Gerência Comercial', '08/04/2026', '15/05/2026', 'Grupo Inditex propõe inaugurar Zara Home na unidade disponível L2-039.'),
  ('PROP-2026-003', 'L3-004', 'Burger King', 'L3-004', 'Alimentação', 'Renovação', 82000, 280, 'Em Negociação', 'Gerência Comercial', '08/04/2026', '05/06/2026', 'BK solicita desconto de 5% alegando retração do setor de fast food.'),
  ('PROP-2026-004', NULL, 'Espaço Gourmet Premium', 'L3-008', 'Alimentação', 'Nova Instalação', 45000, 100, 'Pendente', 'Gerência Comercial', '07/04/2026', '22/05/2026', 'Novo conceito de restaurante premium. Aguardando documentação do licitante.'),
  ('PROP-2026-005', 'L2-033', 'Starbucks Reserve', 'L2-033', 'Alimentação', 'Readequação', 48000, 220, 'Em Negociação', 'Gerência Comercial', '05/04/2026', '25/05/2026', 'Proposta de expansão de 200 para 220m² com novo layout de balcão.'),
  ('PROP-2026-006', NULL, 'Tech World', 'L2-015', 'Eletrônicos', 'Nova Instalação', 52000, 100, 'Em Análise', 'Gerência Comercial', '04/04/2026', '20/05/2026', 'Franquia nacional de acessórios e dispositivos tech.'),
  ('PROP-2026-007', 'L1-007', 'Chilli Beans', 'L1-007', 'Moda', 'Renovação', 20000, 80, 'Em Negociação', 'Gerência Comercial', '01/04/2026', '15/05/2026', 'Reajuste de 11% proposto. Lojista contrapropôs 7%.'),
  ('PROP-2026-008', NULL, 'Academia Forma Perfeita', 'L2-062', 'Serviços', 'Nova Instalação', 35000, 95, 'Pendente', 'Gerência Comercial', '01/04/2026', '10/05/2026', 'Proposta de academia boutique para complementar Smart Fit.'),
  ('PROP-2026-009', 'L1-061', 'Bradesco', 'L1-061', 'Serviços', 'Renovação', 31000, 120, 'Em Análise', 'Gerência Comercial', '02/04/2026', '20/05/2026', 'Banco pede 30 dias para análise interna.'),
  ('PROP-2026-010', 'L3-056', 'Livraria Cultura', 'L3-056', 'Outros', 'Renovação', 29000, 350, 'Pendente', 'Gerência Comercial', '30/03/2026', '10/05/2026', 'Lojista avalia fechamento de unidades. Decisão pendente.'),
  ('PROP-2026-011', NULL, 'Studio Z', 'L1-023', 'Moda', 'Nova Instalação', 24000, 85, 'Em Análise', 'Gerência Comercial', '28/03/2026', '12/05/2026', 'Rede jovem de moda street wear.'),
  ('PROP-2026-012', NULL, 'Healthy Bowl', 'L3-031', 'Alimentação', 'Nova Instalação', 28000, 90, 'Aceita', 'Gerência Comercial', '20/03/2026', '20/04/2026', 'Aceite confirmado. Obras autorizadas para início em 25/04.'),
  ('PROP-2026-013', 'L1-063', 'Claro', 'L1-063', 'Serviços', 'Renovação', 20500, 70, 'Pendente', 'Gerência Comercial', '15/03/2026', '01/05/2026', 'Aguardando retorno da operadora após envio de proposta.'),
  ('PROP-2026-014', NULL, 'Grão Expresso', 'L3-054', 'Alimentação', 'Nova Instalação', 22000, 80, 'Aceita', 'Gerência Comercial', '10/03/2026', '10/04/2026', 'Cafeteria artesanal. Contrato assinado em 15/03.'),
  ('PROP-2026-015', 'L3-002', 'Outback Steakhouse', 'L3-002', 'Alimentação', 'Readequação', 115000, 420, 'Em Negociação', 'Gerência Comercial', '15/04/2026', '15/05/2026', 'Proposta de expansão para 420m² incluindo nova cozinha industrial.'),
  ('PROP-2026-016', NULL, 'Havaianas Flagship', 'L1-047', 'Moda', 'Nova Instalação', 32000, 120, 'Em Análise', 'Gerência Comercial', '12/04/2026', '25/05/2026', 'Proposta de loja flagship premium. Havaianas avaliando layout.'),
  ('PROP-2026-017', NULL, 'Mundo Digital', 'L3-072', 'Outros', 'Nova Instalação', 18000, 85, 'Recusada', 'Gerência Comercial', '01/03/2026', '01/04/2026', 'Perfil comercial inadequado para o posicionamento do mall.'),
  ('PROP-2026-018', 'L1-002', 'C&A (Readequação)', 'L1-002', 'Moda', 'Readequação', 58000, 600, 'Expirada', 'Gerência Comercial', '01/01/2026', '01/03/2026', 'Proposta de redução de área não aceita dentro do prazo.');

-- ------------------------------------------------------------
-- Tabela: sinistros
-- Fonte: store.ts → initialClaims
-- ------------------------------------------------------------
CREATE TABLE sinistros (
  id               VARCHAR(10)  NOT NULL,
  loja             VARCHAR(100) NOT NULL,
  tipo             VARCHAR(80)  NOT NULL,
  severidade       ENUM('Baixa','Média','Alta') NOT NULL,
  status           ENUM('Aberto','Aguardando Regulador','Em Análise','Aprovado','Pago') NOT NULL,
  data             DATE         NOT NULL,
  descricao        TEXT         NOT NULL,
  regulador        VARCHAR(100),
  valor_indenizacao DECIMAL(12,2),
  valor_franquia   DECIMAL(12,2),
  alerta_fraude    TINYINT(1)   NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO sinistros VALUES
  ('SIN-001', 'Loja 104 - Vestuário', 'Vazamento / Infiltração', 'Alta', 'Aberto', '2026-04-06', 'Rompimento de cano na laje superior causando alagamento no estoque da loja.', NULL, NULL, NULL, 0),
  ('SIN-002', 'Loja 210 - Eletrônicos', 'Pico de Energia', 'Média', 'Aguardando Regulador', '2026-04-05', 'Curto circuito no quadro de distribuição, queima de 3 computadores e 1 monitor vitrine.', NULL, NULL, NULL, 1),
  ('SIN-003', 'Praça de Alimentação', 'Incêndio', 'Alta', 'Em Análise', '2026-04-01', 'Princípio de incêndio na coifa do restaurante 05.', 'Carlos Mendes (Susep 1234)', NULL, NULL, 0),
  ('SIN-004', 'Quiosque 12 - Joias', 'Dano Físico / Vandalismo', 'Baixa', 'Pago', '2026-03-25', 'Vidro do expositor trincado durante a madrugada.', 'Ana Souza (Susep 9876)', 4500, 500, 0);
````

## File: Figma/src/app/components/LojistProfileModal.tsx
````typescript
import { X, Building2, User, Phone, Mail, FileText, Calendar, ChevronRight, ClipboardList } from "lucide-react";
import type { Lojista } from "../data/comercialData";

interface LojistProfileModalProps {
  lojista: Lojista;
  onClose: () => void;
}

const statusContratoColors: Record<string, string> = {
  Ativo: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  "Em Renovação": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
  Vencendo: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
  Vencido: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
};

const statusPropostaColors: Record<string, string> = {
  "Aprovado": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  "Aguardando análise do comitê": "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400",
  "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400",
  "Reprovado": "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
  "Cancelado": "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400",
};

const PISO_LABEL: Record<string, string> = {
  P: "Primeiro Piso",
  S: "Segundo Piso",
  T: "Terceiro Piso",
};

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function LojistProfileModal({ lojista, onClose }: LojistProfileModalProps) {
  const c = lojista.contratoAtivo;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-[#2E3447]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-5 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">{lojista.nome || "Unidade Disponível"}</h2>
                <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                  <span className="text-white/80 text-sm">{lojista.unidade}</span>
                  <span className="text-white/50 text-sm">·</span>
                  <span className="text-white/80 text-sm">{lojista.segmento}</span>
                  <span className="text-white/50 text-sm">·</span>
                  <span className="text-white/80 text-sm">{PISO_LABEL[lojista.piso] ?? lojista.piso} / Corredor {lojista.corredor}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-[#242938] rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider flex items-center gap-2">
                <User className="w-3.5 h-3.5" /> Dados do Responsável
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-[#F1F5F9]">{lojista.responsavel || "—"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-[#94A3B8] break-all">{lojista.email || "—"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-[#94A3B8]">{lojista.telefone || "—"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-[#94A3B8]">CNPJ: {lojista.cnpj || "—"}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-[#242938] rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" /> Localização & Métricas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-400 dark:text-[#64748B]">Piso</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{PISO_LABEL[lojista.piso] ?? lojista.piso}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-[#64748B]">Corredor</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{lojista.corredor}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-[#64748B]">Área</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{lojista.area} m²</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-[#64748B]">Fat. Médio/Mês</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{fmt(lojista.faturamentoMedio)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contrato Ativo */}
          {c && (
            <div className="border border-gray-200 dark:border-[#2E3447] rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D93030]" /> Contrato Ativo — {c.id}
                </h3>
                <div className="flex items-center gap-2">
                  {c.diasRestantes < 60 && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400">
                      ⚠ {c.diasRestantes} dias restantes
                    </span>
                  )}
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${statusContratoColors[c.status]}`}>
                    {c.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                    <p className="text-xs text-gray-400 dark:text-[#64748B] mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Vigência</p>
                    <p className="text-xs font-semibold text-gray-900 dark:text-[#F1F5F9]">{c.inicio}</p>
                    <p className="text-xs text-gray-400 dark:text-[#64748B]">até {c.fim}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                    <p className="text-xs text-gray-400 dark:text-[#64748B] mb-1">Aluguel Mensal</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{fmt(c.valorAluguel)}</p>
                    <p className="text-xs text-gray-400 dark:text-[#64748B]">{c.indiceReajuste}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                    <p className="text-xs text-gray-400 dark:text-[#64748B] mb-1">Luvas</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{fmt(c.luvas)}</p>
                    <p className="text-xs text-gray-400 dark:text-[#64748B]">{c.tipo}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Histórico de Propostas */}
          <div className="border border-gray-200 dark:border-[#2E3447] rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-gray-50 dark:bg-[#1A1F2E] flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-[#D93030]" /> Histórico de Propostas
              </h3>
              <span className="text-xs text-gray-400 dark:text-[#64748B]">{lojista.propostas.length} propostas</span>
            </div>
            <div className="p-4">
              {lojista.propostas.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-[#64748B] text-center py-4">Nenhuma proposta registrada</p>
              ) : (
                <div className="space-y-2">
                  {lojista.propostas.map((p) => (
                    <div key={p.id} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-[#242938] rounded-lg">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">{p.tipo}</span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusPropostaColors[p.status] || "bg-gray-100 text-gray-600"}`}>{p.status}</span>
                          <span className="text-xs text-gray-400 dark:text-[#475569] ml-auto flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {p.data}
                          </span>
                        </div>
                        {p.observacao && (
                          <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5 truncate">{p.observacao}</p>
                        )}
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(p.valor)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-1">
            <button className="flex-1 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" /> Nova Proposta
            </button>
            <button className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <ChevronRight className="w-4 h-4" /> Ver Contrato Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/data/comercialData.ts
````typescript
// ============================================================
// TIPOS E INTERFACES
// ============================================================
export type Segmento = 'Moda' | 'Alimentação' | 'Serviços' | 'Eletrônicos' | 'Esportes' | 'Entretenimento' | 'Outros';
export type StatusLoja = 'Ocupado' | 'Disponível';
export type StatusRelacionamento = 'Excelente' | 'Bom' | 'Regular' | 'Crítico';
export type StatusContrato = 'Ativo' | 'Em Renovação' | 'Vencendo' | 'Vencido';
export type StatusProposta =
  | 'Aguardando análise financeira'
  | 'Aguardando análise do comitê'
  | 'Aprovado'
  | 'Reprovado'
  | 'Cancelado';
export type StatusMulta = 'Paga' | 'Pendente' | 'Contestada';

export interface ContratoAtivo {
  id: string;
  inicio: string;
  fim: string;
  valorAluguel: number;
  luvas: number;
  percentualFaturamento: number;
  indiceReajuste: 'IGPM' | 'IPCA';
  tipo: 'Aluguel Fixo' | 'Aluguel + Percentual' | 'Só Percentual';
  desempenho: number;
  diasRestantes: number;
  status: StatusContrato;
}

export interface Multa {
  id: string;
  data: string;
  tipo: string;
  valor: number;
  descricao: string;
  status: StatusMulta;
}

export interface PropostaHistorico {
  id: string;
  data: string;
  tipo: 'Nova Proposta' | 'Renovação' | 'Readequação';
  valor: number;
  status: StatusProposta;
  observacao?: string;
}

export interface Lojista {
  id: string;
  nome: string;
  cnpj: string;
  segmento: Segmento;
  responsavel: string;
  email: string;
  telefone: string;
  unidade: string;
  piso: 'P' | 'S' | 'T';
  corredor: 'A' | 'B' | 'C';
  area: number;
  status: StatusLoja;
  statusRelacionamento?: StatusRelacionamento; // deprecated — kept for data compat
  faturamentoMedio: number;
  contratoAtivo?: ContratoAtivo;
  multas: Multa[];
  propostas: PropostaHistorico[];
}

export interface Proposta {
  id: string;
  lojistaId?: string;
  lojista: string;
  unidade: string;
  segmento: Segmento;
  tipo: 'Nova Instalação' | 'Renovação' | 'Readequação';
  valorProposto: number;
  area: number;
  status: StatusProposta;
  responsavel: string;
  dataCriacao: string;
  dataVencimento: string;
  observacoes?: string;
}

// ============================================================
// LOJAS CHAVE COM DADOS COMPLETOS (50 lojas)
// ============================================================
const keyStores: Lojista[] = [
  // ──── L1 CORREDOR A — MODA ÂNCORA ────
  {
    id: 'L1-001', nome: 'Renner', cnpj: '92.754.738/0001-62', segmento: 'Moda',
    responsavel: 'Marcela Fontana', email: 'marcela.fontana@renner.com.br', telefone: '(62) 3344-5566',
    unidade: 'L1-001', piso: 'P', corredor: 'A', area: 800,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1850000,
    contratoAtivo: { id: 'CTR-2024-001', inicio: '01/03/2024', fim: '28/02/2027', valorAluguel: 72000, luvas: 450000, percentualFaturamento: 3.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 95, diasRestantes: 683, status: 'Ativo' },
    multas: [
      { id: 'MUL-001', data: '15/08/2024', tipo: 'Atraso no Pagamento', valor: 3600, descricao: 'Atraso de 5 dias no pagamento de aluguel ago/2024', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-001', data: '10/01/2024', tipo: 'Renovação', valor: 72000, status: 'Aceita', observacao: 'Renovação com reajuste de 8% pelo IGPM' },
      { id: 'PROP-H-002', data: '05/02/2021', tipo: 'Nova Proposta', valor: 62000, status: 'Aceita', observacao: 'Expansão com área adicional de 200m²' },
    ],
  },
  {
    id: 'L1-002', nome: 'C&A', cnpj: '45.242.914/0001-05', segmento: 'Moda',
    responsavel: 'Roberto Siqueira', email: 'roberto.siqueira@cea.com.br', telefone: '(62) 3210-9988',
    unidade: 'L1-002', piso: 'P', corredor: 'A', area: 700,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 1420000,
    contratoAtivo: { id: 'CTR-2023-002', inicio: '01/06/2023', fim: '31/05/2026', valorAluguel: 61000, luvas: 380000, percentualFaturamento: 3.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 82, diasRestantes: 44, status: 'Vencendo' },
    multas: [
      { id: 'MUL-002', data: '10/11/2023', tipo: 'Uso indevido de área comum', valor: 5000, descricao: 'Uso de corredor externo para exposição sem autorização', status: 'Paga' },
      { id: 'MUL-003', data: '18/03/2024', tipo: 'Atraso no Pagamento', valor: 3050, descricao: 'Atraso de 4 dias no pagamento de março/2024', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-003', data: '10/04/2026', tipo: 'Renovação', valor: 66000, status: 'Em Negociação', observacao: 'Proposta de renovação com reajuste de 8%' },
      { id: 'PROP-H-004', data: '15/04/2023', tipo: 'Renovação', valor: 61000, status: 'Aceita', observacao: 'Renovação com readequação de área' },
    ],
  },
  {
    id: 'L1-003', nome: 'Riachuelo', cnpj: '33.200.056/0001-28', segmento: 'Moda',
    responsavel: 'Fernanda Leite', email: 'f.leite@riachuelo.com.br', telefone: '(62) 3344-7788',
    unidade: 'L1-003', piso: 'P', corredor: 'A', area: 650,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 1280000,
    contratoAtivo: { id: 'CTR-2024-003', inicio: '01/01/2024', fim: '31/12/2026', valorAluguel: 55000, luvas: 310000, percentualFaturamento: 3.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 79, diasRestantes: 258, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-005', data: '15/11/2023', tipo: 'Renovação', valor: 55000, status: 'Aceita', observacao: 'Negociação rápida, sem pendências' },
    ],
  },
  {
    id: 'L1-004', nome: 'Zara', cnpj: '72.700.786/0001-99', segmento: 'Moda',
    responsavel: 'Ana Paula Rocha', email: 'ana.rocha@zara.com.br', telefone: '(62) 3512-3344',
    unidade: 'L1-004', piso: 'P', corredor: 'A', area: 450,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2100000,
    contratoAtivo: { id: 'CTR-2025-004', inicio: '01/04/2025', fim: '31/03/2028', valorAluguel: 98000, luvas: 620000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 97, diasRestantes: 1079, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-006', data: '20/01/2025', tipo: 'Nova Proposta', valor: 98000, status: 'Aceita', observacao: 'Nova instalação, ponto premium' },
    ],
  },
  {
    id: 'L1-005', nome: 'H&M', cnpj: '23.613.404/0001-58', segmento: 'Moda',
    responsavel: 'Carlos Matos', email: 'c.matos@hm.com', telefone: '(62) 3212-1100',
    unidade: 'L1-005', piso: 'P', corredor: 'A', area: 500,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1950000,
    contratoAtivo: { id: 'CTR-2024-005', inicio: '01/07/2024', fim: '30/06/2027', valorAluguel: 88000, luvas: 550000, percentualFaturamento: 3.8, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 93, diasRestantes: 804, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-007', data: '01/05/2024', tipo: 'Nova Proposta', valor: 88000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-006', nome: 'Arezzo', cnpj: '16.590.234/0001-76', segmento: 'Moda',
    responsavel: 'Beatriz Cardoso', email: 'beatriz.c@arezzo.com.br', telefone: '(62) 3321-5544',
    unidade: 'L1-006', piso: 'P', corredor: 'A', area: 180,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 780000,
    contratoAtivo: { id: 'CTR-2023-006', inicio: '01/09/2023', fim: '31/08/2026', valorAluguel: 32000, luvas: 180000, percentualFaturamento: 4.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 91, diasRestantes: 136, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-008', data: '01/07/2023', tipo: 'Renovação', valor: 32000, status: 'Aceita', observacao: 'Reajuste de 7% acordado' },
    ],
  },
  {
    id: 'L1-007', nome: 'Chilli Beans', cnpj: '04.392.000/0001-22', segmento: 'Moda',
    responsavel: 'Thiago Assunção', email: 'thiago.a@chillibeans.com.br', telefone: '(62) 3301-2200',
    unidade: 'L1-007', piso: 'P', corredor: 'A', area: 80,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 390000,
    contratoAtivo: { id: 'CTR-2024-007', inicio: '01/01/2024', fim: '31/12/2025', valorAluguel: 18000, luvas: 95000, percentualFaturamento: 5.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 76, diasRestantes: 258, status: 'Vencendo' },
    multas: [
      { id: 'MUL-007', data: '20/06/2024', tipo: 'Fachada fora do padrão', valor: 2500, descricao: 'Outdoor não aprovado pelo mall instalado na fachada', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-009', data: '05/04/2026', tipo: 'Renovação', valor: 20000, status: 'Em Negociação', observacao: 'Reajuste proposto de 11%' },
      { id: 'PROP-H-010', data: '28/11/2023', tipo: 'Renovação', valor: 18000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-008', nome: 'Farm', cnpj: '03.799.255/0001-81', segmento: 'Moda',
    responsavel: 'Juliana Prado', email: 'j.prado@farm.com.br', telefone: '(62) 3456-7890',
    unidade: 'L1-008', piso: 'P', corredor: 'A', area: 190,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 920000,
    contratoAtivo: { id: 'CTR-2025-008', inicio: '01/02/2025', fim: '31/01/2028', valorAluguel: 41000, luvas: 220000, percentualFaturamento: 4.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 89, diasRestantes: 1020, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-011', data: '10/12/2024', tipo: 'Nova Proposta', valor: 41000, status: 'Aceita', observacao: 'Transferência de outra unidade' },
    ],
  },

  // ──── L1 CORREDOR B — ESPORTES ────
  {
    id: 'L1-031', nome: 'Decathlon', cnpj: '03.471.761/0001-68', segmento: 'Esportes',
    responsavel: 'Pierre Dubois', email: 'pierre.dubois@decathlon.com.br', telefone: '(62) 3600-1200',
    unidade: 'L1-031', piso: 'P', corredor: 'B', area: 1200,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 3200000,
    contratoAtivo: { id: 'CTR-2022-031', inicio: '01/08/2022', fim: '31/07/2027', valorAluguel: 95000, luvas: 700000, percentualFaturamento: 2.8, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 98, diasRestantes: 1200, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-012', data: '01/06/2022', tipo: 'Nova Proposta', valor: 95000, status: 'Aceita', observacao: 'Âncora esportiva exclusiva para o piso 1' },
    ],
  },
  {
    id: 'L1-032', nome: 'Centauro', cnpj: '42.830.506/0001-65', segmento: 'Esportes',
    responsavel: 'Márcio Silveira', email: 'm.silveira@centauro.com.br', telefone: '(62) 3412-3344',
    unidade: 'L1-032', piso: 'P', corredor: 'B', area: 400,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1350000,
    contratoAtivo: { id: 'CTR-2024-032', inicio: '01/04/2024', fim: '31/03/2027', valorAluguel: 52000, luvas: 290000, percentualFaturamento: 3.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 90, diasRestantes: 714, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-013', data: '10/02/2024', tipo: 'Renovação', valor: 52000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-033', nome: 'Nike Store', cnpj: '56.998.476/0001-10', segmento: 'Esportes',
    responsavel: 'Lucas Andrade', email: 'lucas.a@nike.com', telefone: '(62) 3400-1122',
    unidade: 'L1-033', piso: 'P', corredor: 'B', area: 250,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1100000,
    contratoAtivo: { id: 'CTR-2023-033', inicio: '01/10/2023', fim: '30/09/2026', valorAluguel: 68000, luvas: 420000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 96, diasRestantes: 166, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-014', data: '01/08/2023', tipo: 'Renovação', valor: 68000, status: 'Aceita', observacao: 'Reajuste de 9% negociado' },
    ],
  },
  {
    id: 'L1-034', nome: 'Adidas', cnpj: '61.088.094/0001-57', segmento: 'Esportes',
    responsavel: 'Claudia Becker', email: 'claudia.b@adidas.com', telefone: '(62) 3501-4455',
    unidade: 'L1-034', piso: 'P', corredor: 'B', area: 230,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 890000,
    contratoAtivo: { id: 'CTR-2024-034', inicio: '01/05/2024', fim: '30/04/2027', valorAluguel: 58000, luvas: 340000, percentualFaturamento: 3.8, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 84, diasRestantes: 744, status: 'Ativo' },
    multas: [
      { id: 'MUL-034', data: '12/09/2024', tipo: 'Obras sem aprovação', valor: 8000, descricao: 'Remodelação da fachada sem autorização prévia do mall', status: 'Contestada' },
    ],
    propostas: [
      { id: 'PROP-H-015', data: '15/03/2024', tipo: 'Nova Proposta', valor: 58000, status: 'Aceita' },
    ],
  },

  // ──── L1 CORREDOR C — SERVIÇOS ────
  {
    id: 'L1-061', nome: 'Bradesco', cnpj: '60.746.948/0001-12', segmento: 'Serviços',
    responsavel: 'Rafael Monteiro', email: 'rafael.monteiro@bradesco.com.br', telefone: '(62) 3100-5000',
    unidade: 'L1-061', piso: 'P', corredor: 'C', area: 120,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 0,
    contratoAtivo: { id: 'CTR-2021-061', inicio: '01/01/2021', fim: '31/12/2025', valorAluguel: 28000, luvas: 150000, percentualFaturamento: 0, indiceReajuste: 'IPCA', tipo: 'Aluguel Fixo', desempenho: 99, diasRestantes: 258, status: 'Vencendo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-016', data: '02/04/2026', tipo: 'Renovação', valor: 31000, status: 'Em Análise', observacao: 'Banco solicita prazo de análise interna de 30 dias' },
      { id: 'PROP-H-017', data: '20/11/2020', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'L1-062', nome: 'Itaú Uniclass', cnpj: '60.872.504/0001-23', segmento: 'Serviços',
    responsavel: 'Vanessa Torres', email: 'vanessa.torres@itau.com.br', telefone: '(62) 3300-7788',
    unidade: 'L1-062', piso: 'P', corredor: 'C', area: 100,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 0,
    contratoAtivo: { id: 'CTR-2024-062', inicio: '01/08/2024', fim: '31/07/2027', valorAluguel: 26000, luvas: 130000, percentualFaturamento: 0, indiceReajuste: 'IPCA', tipo: 'Aluguel Fixo', desempenho: 100, diasRestantes: 835, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-018', data: '01/06/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita', observacao: 'Renovação antecipada com ajuste' },
    ],
  },
  {
    id: 'L1-063', nome: 'Claro', cnpj: '40.432.544/0001-47', segmento: 'Serviços',
    responsavel: 'Diego Nascimento', email: 'd.nascimento@claro.com.br', telefone: '(62) 3400-2020',
    unidade: 'L1-063', piso: 'P', corredor: 'C', area: 70,
    status: 'Ocupado', statusRelacionamento: 'Regular', faturamentoMedio: 420000,
    contratoAtivo: { id: 'CTR-2023-063', inicio: '01/03/2023', fim: '28/02/2026', valorAluguel: 19000, luvas: 80000, percentualFaturamento: 2.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 61, diasRestantes: 47, status: 'Vencendo' },
    multas: [
      { id: 'MUL-063a', data: '10/05/2024', tipo: 'Atraso no Pagamento', valor: 950, descricao: 'Atraso de 3 dias no pagamento de maio/2024', status: 'Paga' },
      { id: 'MUL-063b', data: '12/09/2024', tipo: 'Atraso no Pagamento', valor: 950, descricao: 'Atraso de 3 dias no pagamento de setembro/2024', status: 'Paga' },
      { id: 'MUL-063c', data: '08/01/2025', tipo: 'Atraso no Pagamento', valor: 950, descricao: 'Atraso de 2 dias no pagamento de janeiro/2025', status: 'Pendente' },
    ],
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
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2800000,
    contratoAtivo: { id: 'CTR-2024-101', inicio: '01/06/2024', fim: '31/05/2027', valorAluguel: 75000, luvas: 480000, percentualFaturamento: 2.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 92, diasRestantes: 774, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-021', data: '01/04/2024', tipo: 'Renovação', valor: 75000, status: 'Aceita', observacao: 'Fidelização de lojista âncora' },
    ],
  },
  {
    id: 'L2-002', nome: 'Apple Store', cnpj: '00.015.477/0001-00', segmento: 'Eletrônicos',
    responsavel: 'Jennifer Kim', email: 'jennifer.kim@apple.com', telefone: '(62) 3700-7777',
    unidade: 'L2-002', piso: 'S', corredor: 'A', area: 280,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 5500000,
    contratoAtivo: { id: 'CTR-2023-102', inicio: '01/09/2023', fim: '31/08/2028', valorAluguel: 150000, luvas: 1200000, percentualFaturamento: 2.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 100, diasRestantes: 1231, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-022', data: '20/06/2023', tipo: 'Nova Proposta', valor: 150000, status: 'Aceita', observacao: 'Negociação estratégica com selo de loja certificada Apple' },
    ],
  },
  {
    id: 'L2-003', nome: 'Samsung Experience', cnpj: '17.901.255/0001-49', segmento: 'Eletrônicos',
    responsavel: 'Min Jun Park', email: 'minjun.park@samsung.com', telefone: '(62) 3500-5500',
    unidade: 'L2-003', piso: 'S', corredor: 'A', area: 200,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2200000,
    contratoAtivo: { id: 'CTR-2025-103', inicio: '01/01/2025', fim: '31/12/2027', valorAluguel: 82000, luvas: 500000, percentualFaturamento: 2.8, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 94, diasRestantes: 988, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-023', data: '01/11/2024', tipo: 'Nova Proposta', valor: 82000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-004', nome: 'Magazine Luiza', cnpj: '47.960.950/0001-21', segmento: 'Eletrônicos',
    responsavel: 'Priscila Madureira', email: 'p.madureira@magazineluiza.com.br', telefone: '(62) 3800-1234',
    unidade: 'L2-004', piso: 'S', corredor: 'A', area: 500,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 3100000,
    contratoAtivo: { id: 'CTR-2022-104', inicio: '01/01/2022', fim: '31/12/2026', valorAluguel: 68000, luvas: 380000, percentualFaturamento: 2.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 80, diasRestantes: 258, status: 'Ativo' },
    multas: [
      { id: 'MUL-104', data: '25/07/2023', tipo: 'Atraso no Pagamento', valor: 3400, descricao: 'Atraso de 5 dias no pagamento de julho/2023', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-024', data: '01/11/2021', tipo: 'Nova Proposta', valor: 68000, status: 'Aceita' },
    ],
  },

  // ──── L2 CORREDOR B — BELEZA / MODA ────
  {
    id: 'L2-031', nome: 'O Boticário', cnpj: '75.659.658/0001-83', segmento: 'Outros',
    responsavel: 'Ana Lima', email: 'ana.lima@boticario.com.br', telefone: '(62) 3233-4455',
    unidade: 'L2-031', piso: 'S', corredor: 'B', area: 150,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 680000,
    contratoAtivo: { id: 'CTR-2024-131', inicio: '01/03/2024', fim: '28/02/2027', valorAluguel: 34000, luvas: 180000, percentualFaturamento: 4.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 92, diasRestantes: 683, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-025', data: '10/01/2024', tipo: 'Renovação', valor: 34000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-032', nome: 'Natura', cnpj: '71.673.990/0001-77', segmento: 'Outros',
    responsavel: 'Carla Soares', email: 'carla.soares@natura.net', telefone: '(62) 3301-4488',
    unidade: 'L2-032', piso: 'S', corredor: 'B', area: 140,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 620000,
    contratoAtivo: { id: 'CTR-2025-132', inicio: '01/06/2025', fim: '31/05/2028', valorAluguel: 31000, luvas: 160000, percentualFaturamento: 4.2, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 90, diasRestantes: 1140, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-026', data: '01/04/2025', tipo: 'Renovação', valor: 31000, status: 'Aceita' },
    ],
  },
  {
    id: 'L2-033', nome: 'Starbucks Reserve', cnpj: '08.164.083/0001-48', segmento: 'Alimentação',
    responsavel: 'Rodrigo Campos', email: 'r.campos@starbucks.com.br', telefone: '(62) 3441-2200',
    unidade: 'L2-033', piso: 'S', corredor: 'B', area: 200,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1100000,
    contratoAtivo: { id: 'CTR-2024-133', inicio: '01/09/2024', fim: '31/08/2027', valorAluguel: 45000, luvas: 280000, percentualFaturamento: 5.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 95, diasRestantes: 866, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-027', data: '10/04/2026', tipo: 'Readequação', valor: 48000, status: 'Em Negociação', observacao: 'Proposta de aumento de área com novo contrato' },
      { id: 'PROP-H-028', data: '01/07/2024', tipo: 'Nova Proposta', valor: 45000, status: 'Aceita', observacao: 'Primeiro Starbucks Reserve de Goiânia' },
    ],
  },
  {
    id: 'L2-034', nome: 'Uniqlo', cnpj: '32.521.444/0001-39', segmento: 'Moda',
    responsavel: 'Yuki Tanaka', email: 'y.tanaka@uniqlo.com', telefone: '(62) 3600-4400',
    unidade: 'L2-034', piso: 'S', corredor: 'B', area: 600,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2800000,
    contratoAtivo: { id: 'CTR-2025-134', inicio: '01/03/2025', fim: '28/02/2030', valorAluguel: 110000, luvas: 800000, percentualFaturamento: 3.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 97, diasRestantes: 1777, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-029', data: '01/12/2024', tipo: 'Nova Proposta', valor: 110000, status: 'Aceita', observacao: 'Primeira loja em Goiânia — exclusividade por 5 anos' },
    ],
  },

  // ──── L2 CORREDOR C — SERVIÇOS / ENTRETENIMENTO ────
  {
    id: 'L2-061', nome: 'Smart Fit', cnpj: '21.386.077/0001-27', segmento: 'Serviços',
    responsavel: 'Felipe Gomes', email: 'felipe.gomes@smartfit.com.br', telefone: '(62) 3800-9900',
    unidade: 'L2-061', piso: 'S', corredor: 'C', area: 800,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 580000,
    contratoAtivo: { id: 'CTR-2023-161', inicio: '01/06/2023', fim: '31/05/2028', valorAluguel: 48000, luvas: 300000, percentualFaturamento: 0, indiceReajuste: 'IGPM', tipo: 'Aluguel Fixo', desempenho: 88, diasRestantes: 1140, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-030', data: '01/04/2023', tipo: 'Nova Proposta', valor: 48000, status: 'Aceita', observacao: 'Contrato longo prazo 5 anos com reajuste anual IGPM' },
    ],
  },
  {
    id: 'L2-063', nome: 'Cinemark', cnpj: '62.578.458/0001-60', segmento: 'Entretenimento',
    responsavel: 'Sandra Almeida', email: 's.almeida@cinemark.com.br', telefone: '(62) 3900-1100',
    unidade: 'L2-063', piso: 'S', corredor: 'C', area: 2500,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 4200000,
    contratoAtivo: { id: 'CTR-2019-163', inicio: '01/01/2019', fim: '31/12/2028', valorAluguel: 180000, luvas: 2000000, percentualFaturamento: 2.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 96, diasRestantes: 1719, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-031', data: '01/10/2018', tipo: 'Nova Proposta', valor: 180000, status: 'Aceita', observacao: 'Contrato âncora de entretenimento 10 anos' },
    ],
  },

  // ──── L3 CORREDOR A — PRAÇA DE ALIMENTAÇÃO ────
  {
    id: 'L3-001', nome: "McDonald's", cnpj: '47.079.633/0001-01', segmento: 'Alimentação',
    responsavel: 'Renata Freitas', email: 'renata.freitas@mcdonalds.com.br', telefone: '(62) 3312-5500',
    unidade: 'L3-001', piso: 'T', corredor: 'A', area: 320,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 2900000,
    contratoAtivo: { id: 'CTR-2022-201', inicio: '01/04/2022', fim: '31/03/2027', valorAluguel: 90000, luvas: 600000, percentualFaturamento: 3.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 99, diasRestantes: 349, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-032', data: '01/02/2022', tipo: 'Renovação', valor: 90000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-002', nome: 'Outback Steakhouse', cnpj: '15.110.258/0001-45', segmento: 'Alimentação',
    responsavel: 'George Mitchell', email: 'george.mitchell@outback.com.br', telefone: '(62) 3500-2200',
    unidade: 'L3-002', piso: 'T', corredor: 'A', area: 400,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 3500000,
    contratoAtivo: { id: 'CTR-2024-202', inicio: '01/08/2024', fim: '31/07/2027', valorAluguel: 105000, luvas: 700000, percentualFaturamento: 3.5, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 97, diasRestantes: 835, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-033', data: '01/06/2024', tipo: 'Renovação', valor: 105000, status: 'Aceita', observacao: 'Expansão de área de 350 para 400m²' },
      { id: 'PROP-H-034', data: '15/04/2026', tipo: 'Readequação', valor: 115000, status: 'Em Negociação', observacao: 'Proposta de nova expansão + reforma da cozinha' },
    ],
  },
  {
    id: 'L3-003', nome: 'Subway', cnpj: '11.080.473/0001-35', segmento: 'Alimentação',
    responsavel: 'Carlos Junior', email: 'carlosjr@subway.com.br', telefone: '(62) 3212-8899',
    unidade: 'L3-003', piso: 'T', corredor: 'A', area: 120,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 480000,
    contratoAtivo: { id: 'CTR-2024-203', inicio: '01/01/2024', fim: '31/12/2026', valorAluguel: 22000, luvas: 110000, percentualFaturamento: 5.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 74, diasRestantes: 258, status: 'Ativo' },
    multas: [
      { id: 'MUL-203', data: '02/02/2025', tipo: 'Descumprimento de horário', valor: 2000, descricao: 'Funcionamento fora do horário estabelecido sem autorização prévia', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-035', data: '20/11/2023', tipo: 'Nova Proposta', valor: 22000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-004', nome: 'Burger King', cnpj: '13.574.594/0001-96', segmento: 'Alimentação',
    responsavel: 'Marcos Tavares', email: 'marcos.tavares@burgerking.com.br', telefone: '(62) 3444-5566',
    unidade: 'L3-004', piso: 'T', corredor: 'A', area: 280,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 1800000,
    contratoAtivo: { id: 'CTR-2023-204', inicio: '01/07/2023', fim: '30/06/2026', valorAluguel: 75000, luvas: 450000, percentualFaturamento: 3.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 91, diasRestantes: 74, status: 'Vencendo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-036', data: '08/04/2026', tipo: 'Renovação', valor: 82000, status: 'Em Negociação', observacao: 'Negociação com pedido de desconto pela inflação do setor' },
      { id: 'PROP-H-037', data: '01/05/2023', tipo: 'Nova Proposta', valor: 75000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-005', nome: 'Fogo de Chão', cnpj: '09.386.049/0001-27', segmento: 'Alimentação',
    responsavel: 'Alessandro Moura', email: 'a.moura@fogodechao.com.br', telefone: '(62) 3600-8800',
    unidade: 'L3-005', piso: 'T', corredor: 'A', area: 500,
    status: 'Ocupado', statusRelacionamento: 'Excelente', faturamentoMedio: 4800000,
    contratoAtivo: { id: 'CTR-2023-205', inicio: '01/11/2023', fim: '31/10/2028', valorAluguel: 135000, luvas: 950000, percentualFaturamento: 3.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 98, diasRestantes: 1657, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-038', data: '01/09/2023', tipo: 'Nova Proposta', valor: 135000, status: 'Aceita', observacao: 'Âncora premium da praça de alimentação' },
    ],
  },
  {
    id: 'L3-006', nome: "Bob's", cnpj: '14.982.647/0001-52', segmento: 'Alimentação',
    responsavel: 'Samir Couto', email: 'samir.couto@bobs.com.br', telefone: '(62) 3200-9900',
    unidade: 'L3-006', piso: 'T', corredor: 'A', area: 140,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 560000,
    contratoAtivo: { id: 'CTR-2025-206', inicio: '01/02/2025', fim: '31/01/2028', valorAluguel: 26000, luvas: 130000, percentualFaturamento: 4.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 78, diasRestantes: 1020, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-039', data: '01/12/2024', tipo: 'Renovação', valor: 26000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-007', nome: 'Giraffas', cnpj: '52.148.007/0001-73', segmento: 'Alimentação',
    responsavel: 'Vanessa Rezende', email: 'v.rezende@giraffas.com.br', telefone: '(62) 3400-7711',
    unidade: 'L3-007', piso: 'T', corredor: 'A', area: 160,
    status: 'Ocupado', statusRelacionamento: 'Regular', faturamentoMedio: 490000,
    contratoAtivo: { id: 'CTR-2023-207', inicio: '01/04/2023', fim: '31/03/2026', valorAluguel: 20000, luvas: 90000, percentualFaturamento: 4.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 65, diasRestantes: 349, status: 'Ativo' },
    multas: [
      { id: 'MUL-207a', data: '15/07/2024', tipo: 'Atraso no Pagamento', valor: 1000, descricao: 'Atraso de 5 dias no pagamento de julho/2024', status: 'Paga' },
      { id: 'MUL-207b', data: '14/10/2024', tipo: 'Irregularidade sanitária', valor: 5000, descricao: 'Notificação da Vigilância Sanitária repercutida no mall', status: 'Contestada' },
    ],
    propostas: [
      { id: 'PROP-H-040', data: '01/02/2023', tipo: 'Nova Proposta', valor: 20000, status: 'Aceita' },
    ],
  },

  // ──── L3 CORREDOR B — ALIMENTAÇÃO / VARIEDADES ────
  {
    id: 'L3-028', nome: 'Pizza Hut', cnpj: '10.490.715/0001-01', segmento: 'Alimentação',
    responsavel: 'Paulo Mendes', email: 'paulo.mendes@pizzahut.com.br', telefone: '(62) 3512-9900',
    unidade: 'L3-028', piso: 'T', corredor: 'B', area: 200,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 820000,
    contratoAtivo: { id: 'CTR-2024-228', inicio: '01/05/2024', fim: '30/04/2027', valorAluguel: 38000, luvas: 200000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 77, diasRestantes: 743, status: 'Ativo' },
    multas: [
      { id: 'MUL-228', data: '20/11/2024', tipo: 'Atraso no Pagamento', valor: 1900, descricao: 'Atraso de 5 dias novembro/2024', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-041', data: '01/03/2024', tipo: 'Nova Proposta', valor: 38000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-029', nome: 'KFC', cnpj: '17.311.723/0001-92', segmento: 'Alimentação',
    responsavel: 'Anderson Rocha', email: 'anderson.rocha@kfc.com.br', telefone: '(62) 3312-4455',
    unidade: 'L3-029', piso: 'T', corredor: 'B', area: 180,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 750000,
    contratoAtivo: { id: 'CTR-2025-229', inicio: '01/01/2025', fim: '31/12/2027', valorAluguel: 35000, luvas: 180000, percentualFaturamento: 4.2, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 82, diasRestantes: 988, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-042', data: '01/11/2024', tipo: 'Nova Proposta', valor: 35000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-030', nome: 'Spoleto', cnpj: '05.351.939/0001-18', segmento: 'Alimentação',
    responsavel: 'Rita Cardoso', email: 'rita.cardoso@spoleto.com.br', telefone: '(62) 3400-5544',
    unidade: 'L3-030', piso: 'T', corredor: 'B', area: 130,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 540000,
    contratoAtivo: { id: 'CTR-2024-230', inicio: '01/07/2024', fim: '30/06/2027', valorAluguel: 24000, luvas: 120000, percentualFaturamento: 4.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 80, diasRestantes: 804, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-043', data: '01/05/2024', tipo: 'Renovação', valor: 24000, status: 'Aceita' },
    ],
  },

  // ──── L3 CORREDOR C — VAREJO DIVERSO ────
  {
    id: 'L3-055', nome: 'Tok&Stok', cnpj: '07.620.072/0001-61', segmento: 'Outros',
    responsavel: 'Isabella Ferreira', email: 'isabella.ferreira@tokstok.com.br', telefone: '(62) 3600-7766',
    unidade: 'L3-055', piso: 'T', corredor: 'C', area: 400,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 980000,
    contratoAtivo: { id: 'CTR-2024-255', inicio: '01/04/2024', fim: '31/03/2027', valorAluguel: 42000, luvas: 230000, percentualFaturamento: 3.0, indiceReajuste: 'IGPM', tipo: 'Aluguel + Percentual', desempenho: 81, diasRestantes: 714, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-044', data: '01/02/2024', tipo: 'Nova Proposta', valor: 42000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-056', nome: 'Livraria Cultura', cnpj: '60.665.981/0001-93', segmento: 'Outros',
    responsavel: 'Eduardo Braga', email: 'e.braga@livrariacultura.com.br', telefone: '(62) 3301-9988',
    unidade: 'L3-056', piso: 'T', corredor: 'C', area: 350,
    status: 'Ocupado', statusRelacionamento: 'Regular', faturamentoMedio: 620000,
    contratoAtivo: { id: 'CTR-2022-256', inicio: '01/06/2022', fim: '31/05/2026', valorAluguel: 28000, luvas: 150000, percentualFaturamento: 3.5, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 62, diasRestantes: 44, status: 'Vencendo' },
    multas: [
      { id: 'MUL-256', data: '05/04/2025', tipo: 'Atraso no Pagamento', valor: 1400, descricao: 'Atraso de 5 dias em abril/2025', status: 'Paga' },
    ],
    propostas: [
      { id: 'PROP-H-045', data: '05/04/2026', tipo: 'Renovação', valor: 29000, status: 'Pendente', observacao: 'Aguardando definição interna sobre fechamento de filiais' },
      { id: 'PROP-H-046', data: '01/04/2022', tipo: 'Nova Proposta', valor: 28000, status: 'Aceita' },
    ],
  },
  {
    id: 'L3-057', nome: 'CVC Viagens', cnpj: '10.760.260/0001-19', segmento: 'Serviços',
    responsavel: 'Tatiane Moreira', email: 'tatiane.moreira@cvc.com.br', telefone: '(62) 3312-3344',
    unidade: 'L3-057', piso: 'T', corredor: 'C', area: 80,
    status: 'Ocupado', statusRelacionamento: 'Bom', faturamentoMedio: 350000,
    contratoAtivo: { id: 'CTR-2025-257', inicio: '01/03/2025', fim: '28/02/2028', valorAluguel: 16000, luvas: 75000, percentualFaturamento: 4.0, indiceReajuste: 'IPCA', tipo: 'Aluguel + Percentual', desempenho: 75, diasRestantes: 1047, status: 'Ativo' },
    multas: [],
    propostas: [
      { id: 'PROP-H-047', data: '01/01/2025', tipo: 'Renovação', valor: 16000, status: 'Aceita' },
    ],
  },

  // UNIDADES DISPONÍVEIS
  {
    id: 'L1-023', nome: '', cnpj: '', segmento: 'Moda', responsavel: '', email: '', telefone: '',
    unidade: 'L1-023', piso: 'P', corredor: 'A', area: 85,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L1-047', nome: '', cnpj: '', segmento: 'Esportes', responsavel: '', email: '', telefone: '',
    unidade: 'L1-047', piso: 'P', corredor: 'B', area: 120,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L1-068', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'L1-068', piso: 'P', corredor: 'C', area: 70,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L2-015', nome: '', cnpj: '', segmento: 'Eletrônicos', responsavel: '', email: '', telefone: '',
    unidade: 'L2-015', piso: 'S', corredor: 'A', area: 100,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L2-039', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'L2-039', piso: 'S', corredor: 'B', area: 90,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L2-062', nome: '', cnpj: '', segmento: 'Serviços', responsavel: '', email: '', telefone: '',
    unidade: 'L2-062', piso: 'S', corredor: 'C', area: 95,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-008', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-008', piso: 'T', corredor: 'A', area: 100,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-031', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-031', piso: 'T', corredor: 'B', area: 90,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-054', nome: '', cnpj: '', segmento: 'Alimentação', responsavel: '', email: '', telefone: '',
    unidade: 'L3-054', piso: 'T', corredor: 'B', area: 80,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
  },
  {
    id: 'L3-072', nome: '', cnpj: '', segmento: 'Outros', responsavel: '', email: '', telefone: '',
    unidade: 'L3-072', piso: 'T', corredor: 'C', area: 85,
    status: 'Disponível', statusRelacionamento: 'Bom', faturamentoMedio: 0,
    multas: [], propostas: [],
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

const PISO_KEY_TO_DISPLAY: Record<'L1' | 'L2' | 'L3', 'P' | 'S' | 'T'> = { L1: 'P', L2: 'S', L3: 'T' };

function generateStore(pisoKey: 'L1' | 'L2' | 'L3', corredor: 'A' | 'B' | 'C', num: number, seed: number): Lojista {
  const r = (offset = 0) => seededRandom(seed * 17 + offset);
  const seg: Segmento = pisoKey === 'L3' ? 'Alimentação' : segmentos[Math.floor(r(1) * segmentos.length)];
  const brands = brandsBySegment[seg] || brandsBySegment['Outros'];
  const nome = brands[Math.floor(r(2) * brands.length)];
  const area = Math.floor(r(3) * 300) + 60;
  const aluguel = Math.floor((area * (r(4) * 150 + 100)) / 100) * 100;
  const fatur = aluguel * (Math.floor(r(5) * 15) + 5);
  const desempenho = Math.floor(r(6) * 35) + 60;
  const statusRel: StatusRelacionamento = desempenho >= 90 ? 'Excelente' : desempenho >= 75 ? 'Bom' : desempenho >= 60 ? 'Regular' : 'Crítico';
  const daysLeft = Math.floor(r(7) * 900) + 30;
  const contratoStatus: StatusContrato = daysLeft < 90 ? 'Vencendo' : 'Ativo';
  const resp = responsaveis[Math.floor(r(8) * responsaveis.length)];
  const unitStr = `${pisoKey}-${String(num).padStart(3, '0')}`;
  const cnpjNum = Math.floor(r(9) * 99999999) + 10000000;

  const multas: Multa[] = r(10) > 0.7 ? [{
    id: `MUL-GEN-${seed}`,
    data: '10/03/2024',
    tipo: 'Atraso no Pagamento',
    valor: Math.floor(r(11) * 3000) + 500,
    descricao: 'Atraso no pagamento mensal',
    status: r(12) > 0.5 ? 'Paga' : 'Pendente',
  }] : [];

  return {
    id: unitStr,
    nome,
    cnpj: `${String(cnpjNum).slice(0, 2)}.${String(cnpjNum).slice(2, 5)}.${String(cnpjNum).slice(5, 8)}/0001-${String(Math.floor(r(13) * 89) + 10)}`,
    segmento: seg,
    responsavel: resp,
    email: `${resp.toLowerCase().replace(' ', '.')}@${nome.toLowerCase().replace(/\s+/g, '')}.com.br`,
    telefone: `(62) 3${String(Math.floor(r(14) * 900) + 100)}-${String(Math.floor(r(15) * 9000) + 1000)}`,
    unidade: unitStr,
    piso: PISO_KEY_TO_DISPLAY[pisoKey],
    corredor,
    area,
    status: 'Ocupado',
    statusRelacionamento: statusRel,
    faturamentoMedio: fatur,
    contratoAtivo: {
      id: `CTR-GEN-${seed}`,
      inicio: '01/01/2024',
      fim: '31/12/2026',
      valorAluguel: aluguel,
      luvas: aluguel * 3,
      percentualFaturamento: parseFloat((r(16) * 3 + 2).toFixed(1)),
      indiceReajuste: r(17) > 0.5 ? 'IGPM' : 'IPCA',
      tipo: 'Aluguel + Percentual',
      desempenho,
      diasRestantes: daysLeft,
      status: contratoStatus,
    },
    multas,
    propostas: [{
      id: `PROP-GEN-${seed}`,
      data: '01/01/2024',
      tipo: 'Nova Proposta',
      valor: aluguel,
      status: 'Aprovado',
    }],
  };
}

// ============================================================
// MONTAR BANCO COMPLETO DE 260 UNIDADES
// ============================================================
const keyIds = new Set(keyStores.map(s => s.id));

function buildFloor(piso: 'L1' | 'L2' | 'L3', totalUnits: number): Lojista[] {
  const stores: Lojista[] = [];
  for (let i = 1; i <= totalUnits; i++) {
    const corredor: 'A' | 'B' | 'C' = i <= Math.floor(totalUnits / 3) ? 'A' : i <= Math.floor((totalUnits * 2) / 3) ? 'B' : 'C';
    const unitStr = `${piso}-${String(i).padStart(3, '0')}`;
    if (!keyIds.has(unitStr)) {
      const seedBase = (piso === 'L1' ? 1000 : piso === 'L2' ? 2000 : 3000) + i;
      stores.push(generateStore(piso, corredor, i, seedBase));
    }
  }
  return stores;
}

const generatedStores = [
  ...buildFloor('L1', 90),
  ...buildFloor('L2', 90),
  ...buildFloor('L3', 80),
];

export const allLojistas: Lojista[] = [...keyStores, ...generatedStores].sort((a, b) =>
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
export const UNIDADES_OCUPADAS = allLojistas.filter(l => l.status === 'Ocupado').length;
export const UNIDADES_DISPONIVEIS = allLojistas.filter(l => l.status === 'Disponível').length;
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

export const statusContratoCores: Record<StatusContrato, string> = {
  Ativo: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'Em Renovação': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Vencendo: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Vencido: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

export const statusPropostaCores: Record<StatusProposta, string> = {
  'Aguardando análise financeira': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Aguardando análise do comitê': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  Aprovado: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Reprovado: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  Cancelado: 'bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400',
};

export const statusRelCores: Record<StatusRelacionamento, string> = {
  Excelente: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Bom: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Regular: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  Crítico: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
````

## File: Figma/src/app/data/comercialStore.ts
````typescript
/**
 * Comercial Store — Gerenciamento de estado e operações comerciais
 * Cobre: RF-02, RF-03, RF-05, RF-07, RF-08 | RNF-04, RNF-05 | RN-01 ao RN-05
 */
import { propostasAtivas as initialPropostas } from './comercialData';
import type { Proposta, StatusProposta, Multa } from './comercialData';

// ============================================================
// TIPOS
// ============================================================

export interface AuditEntry {
  id: string;
  entityType: 'Proposta' | 'Contrato' | 'Multa';
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
  entityType: 'Proposta' | 'Contrato';
  nome: string;
  tamanho: string;
  tipo: 'PDF' | 'DOCX' | 'XLSX' | 'JPG' | 'PNG';
  dataUpload: string;
  uploadedBy: string;
}

export interface ContratoGerado {
  id: string;
  proposalId: string;
  lojistaId?: string;
  lojista: string;
  unidade: string;
  segmento: string;
  area: number;
  valorAluguel: number;
  luvas: number;
  percentualFaturamento: number;
  inicio: string; // dd/mm/yyyy
  fim: string;    // dd/mm/yyyy — RN-03: obrigatório
  status: 'Ativo' | 'Em Renovação' | 'Vencendo' | 'Vencido';
  indiceReajuste: 'IGPM' | 'IPCA';
  tipo: 'Aluguel Fixo' | 'Aluguel + Percentual' | 'Só Percentual';
  desempenho: number;
  diasRestantes: number;
  createdAt: string;
  createdBy: string;
}

export interface ProposalOverride {
  status: StatusProposta;
  observacoes?: string;
  updatedAt: string;
  updatedBy: string;
}

// ============================================================
// ESTADO GLOBAL (module-level mutable state)
// ============================================================

let proposalsState: Proposta[] = [...initialPropostas];
const proposalOverrides: Record<string, ProposalOverride> = {};
let generatedContracts: ContratoGerado[] = [];
let auditLog: AuditEntry[] = [];
let documentos: Documento[] = [];
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
    details: `Proposta ${newP.id} criada para ${p.lojista} na unidade ${p.unidade}.`,
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
  // RN-01: Gerar contrato APENAS se status = "Aprovado"
  if (newStatus === 'Aprovado') {
    const alreadyGenerated = generatedContracts.some(c => c.proposalId === id);
    if (!alreadyGenerated) generateContractFromProposal(id);
  }
  notify();
  return true;
}

// ============================================================
// CONTRATOS GERADOS (RF-03, RN-01, RN-03, RN-04, RN-05)
// ============================================================

function generateContractFromProposal(proposalId: string): ContratoGerado | null {
  const proposal = getProposalById(proposalId);
  // RN-01: Somente propostas aprovadas geram contrato
  if (!proposal || proposal.status !== 'Aprovado') return null;
  // RN-05: Contrato vinculado a lojista (lojista campo é obrigatório)
  if (!proposal.lojista) return null;
  // RN-04: Não pode ter dois contratos ativos na mesma unidade
  const existingActive = generatedContracts.find(
    c => c.unidade === proposal.unidade && c.status === 'Ativo'
  );
  if (existingActive) return null;

  const now = new Date();
  const fimDate = new Date(now);
  fimDate.setFullYear(fimDate.getFullYear() + 3);
  const fmtDate = (d: Date) => d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const diasRestantes = Math.round((fimDate.getTime() - now.getTime()) / 86400000);
  const user = getUserSession();

  // RN-03: Contrato com datas obrigatórias (início e fim)
  const contract: ContratoGerado = {
    id: `CTR-${now.getFullYear()}-GERADO-${Date.now().toString().slice(-5)}`,
    proposalId,
    lojistaId: proposal.lojistaId,
    lojista: proposal.lojista,
    unidade: proposal.unidade,
    segmento: proposal.segmento,
    area: proposal.area,
    valorAluguel: proposal.valorProposto,
    luvas: Math.round(proposal.valorProposto * 3),
    percentualFaturamento: 3.5,
    inicio: fmtDate(now),
    fim: fmtDate(fimDate), // RN-03
    status: 'Ativo',
    indiceReajuste: 'IGPM',
    tipo: 'Aluguel + Percentual',
    desempenho: 80,
    diasRestantes,
    createdAt: now.toISOString(),
    createdBy: user.name,
  };
  generatedContracts.push(contract);
  addAudit({
    entityType: 'Contrato',
    entityId: contract.id,
    action: 'Contrato gerado automaticamente',
    details: `Contrato ${contract.id} gerado a partir da proposta aceita ${proposalId} para ${proposal.lojista} — unidade ${proposal.unidade}. Vencimento: ${contract.fim}.`,
  });
  return contract;
}

export function getGeneratedContracts(): ContratoGerado[] {
  return [...generatedContracts];
}

export function getGeneratedContractByUnit(unidade: string): ContratoGerado | undefined {
  return generatedContracts.find(c => c.unidade === unidade && c.status === 'Ativo');
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

export function getAuditLog(): AuditEntry[] {
  return [...auditLog];
}

export function getAuditByEntity(entityId: string): AuditEntry[] {
  return auditLog.filter(a => a.entityId === entityId);
}

// ============================================================
// MULTAS POR LOJISTA (mutable — para botão "Adicionar Multa")
// ============================================================

const multasExtras: Record<string, Multa[]> = {}; // lojistaId → Multa[]

export function getMultasExtras(lojistaId: string): Multa[] {
  return multasExtras[lojistaId] ?? [];
}

export function addMultaToLojista(
  lojistaId: string,
  lojistaNome: string,
  multa: Omit<Multa, 'id'>
): Multa {
  if (!multasExtras[lojistaId]) multasExtras[lojistaId] = [];
  const newMulta: Multa = {
    ...multa,
    id: `MUL-NOVO-${Date.now()}`,
  };
  multasExtras[lojistaId].push(newMulta);
  addAudit({
    entityType: 'Multa',
    entityId: lojistaId,
    action: 'Multa registrada',
    details: `Multa "${multa.tipo}" de ${multa.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })} lançada para ${lojistaNome}. Motivo: ${multa.descricao}`,
  });
  notify();
  return newMulta;
}
````

## File: Figma/src/app/pages/comercial/ComercialAvailability.tsx
````typescript
import { useState, useMemo } from "react";
import {
  Building2, MapPin, Search, Eye, CheckCircle, XCircle,
  ChevronRight, Info, Layers, RefreshCw, Clock, History
} from "lucide-react";
//import { allLojistas } from "../../data/comercialData";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import { FilterSelect } from "../../components/FilterSelect";
import type { Lojista } from "../../data/comercialData";

type Piso = "P" | "S" | "T";
type Corredor = "A" | "B" | "C";

const PISO_LABELS: Record<Piso, string> = {
  P: "Primeiro Piso",
  S: "Segundo Piso",
  T: "Terceiro Piso",
};

const CORREDOR_LABELS: Record<Piso, Record<Corredor, string>> = {
  P: { A: "Corredor A", B: "Corredor B", C: "Corredor C" },
  S: { A: "Corredor A", B: "Corredor B", C: "Corredor C" },
  T: { A: "Corredor A", B: "Corredor B", C: "Corredor C" },
};

// RF-09: History of unit occupations
function UnitHistoryPanel({ lojista, onClose }: { lojista: Lojista; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-lg border border-gray-100 dark:border-[#2E3447] max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70">Histórico de Ocupações</p>
            <h3 className="text-base font-bold text-white">{lojista.unidade}</h3>
            <p className="text-sm text-white/80">{lojista.piso} · Corredor {lojista.corredor} · {lojista.area} m²</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center">
            <XCircle className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          {lojista.status === 'Disponível' && (
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/30 rounded-lg p-3 text-sm text-orange-700 dark:text-orange-400">
              Esta unidade está atualmente <strong>disponível para locação</strong>.
            </div>
          )}
          {lojista.status === 'Ocupado' && lojista.contratoAtivo && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-3">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2">Contrato Atual</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-gray-500 dark:text-[#64748B]">Lojista: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.nome}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Contrato: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.contratoAtivo.id}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Início: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.contratoAtivo.inicio}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Fim: </span><span className="font-medium text-gray-900 dark:text-[#F1F5F9]">{lojista.contratoAtivo.fim}</span></div>
                <div><span className="text-gray-500 dark:text-[#64748B]">Aluguel: </span><span className="font-semibold text-[#D93030]">{lojista.contratoAtivo.valorAluguel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}</span></div>
              </div>
            </div>
          )}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-[#64748B] uppercase tracking-wider mb-3">Propostas Históricas desta Unidade</p>
            {lojista.propostas.length === 0 ? (
              <p className="text-sm text-gray-400 dark:text-[#64748B] text-center py-4">Nenhuma proposta registrada</p>
            ) : (
              <div className="space-y-2">
                {lojista.propostas.map(p => (
                  <div key={p.id} className="flex items-center justify-between bg-gray-50 dark:bg-[#242938] rounded-lg px-3 py-2.5">
                    <div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-[#F1F5F9]">{p.tipo}</p>
                      <p className="text-xs text-gray-500 dark:text-[#64748B]">{p.data} · {p.observacao || '—'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{p.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === 'Aceita' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : p.status === 'Recusada' || p.status === 'Expirada' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function UnitBlock({
  lojista,
  onSelect,
  onProfile,
}: {
  lojista: Lojista;
  onSelect: (l: Lojista) => void;
  onProfile: (l: Lojista) => void;
}) {
  const isDisponivel = lojista.status === "Disponível";
  const contrato = lojista.contratoAtivo;
  // Orange dot: < 60 days to expire (not 90)
  const isVencendoBreve = contrato && contrato.diasRestantes < 60;

  return (
    <button
      onClick={() => onSelect(lojista)}
      className={`
        group relative text-left rounded-xl border-2 p-3 transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.99] min-w-0
        ${isDisponivel
          ? "bg-white dark:bg-[#1A1F2E] border-dashed border-[#D93030]/40 dark:border-[#D93030]/40 hover:border-[#D93030]"
          : "bg-[#D93030]/10 dark:bg-[#D93030]/15 border-[#D93030]/25 dark:border-[#D93030]/30 hover:bg-[#D93030]/15 dark:hover:bg-[#D93030]/20 hover:border-[#D93030]/50"
        }
      `}
    >
      {/* Orange alert dot: < 60 days */}
      {isVencendoBreve && !isDisponivel && (
        <div
          className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-[#1E2435] z-10"
          title={`Contrato vence em ${contrato!.diasRestantes} dias`}
        />
      )}

      <div className="flex items-start justify-between gap-1">
        <div className="min-w-0 flex-1">
          {isDisponivel ? (
            <>
              <p className="text-xs font-bold text-[#D93030]">DISPONÍVEL</p>
              <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5">{lojista.unidade}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{lojista.area} m²</p>
            </>
          ) : (
            <>
              <p className="text-xs font-bold text-[#8B1A1A] dark:text-[#F87171] truncate leading-tight">{lojista.nome || lojista.unidade}</p>
              <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-0.5">{lojista.unidade}</p>
              <p className="text-xs text-gray-400 dark:text-[#475569]">{lojista.area} m²</p>
            </>
          )}
        </div>
        {!isDisponivel && (
          <button
            onClick={e => { e.stopPropagation(); onProfile(lojista); }}
            className="w-6 h-6 rounded-md bg-white/80 dark:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-white dark:hover:bg-black/50 transition-all flex-shrink-0"
            title="Ver perfil completo"
          >
            <Eye className="w-3 h-3 text-[#D93030]" />
          </button>
        )}
      </div>
    </button>
  );
}

export function ComercialAvailability() {
  const [activePiso, setActivePiso] = useState<Piso>("P");
  const [filterSegmento, setFilterSegmento] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [search, setSearch] = useState("");
  const [selectedLojista, setSelectedLojista] = useState<Lojista | null>(null);
  const [profileLojista, setProfileLojista] = useState<Lojista | null>(null);
  const [historyLojista, setHistoryLojista] = useState<Lojista | null>(null);

  // NOVO: Estado e Chamada da API
  const [lojistasAPI, setLojistasAPI] = useState<Lojista[]>([]);

  useEffect(() => {
    fetch("http://localhost:8082/lojistas")
      .then(res => res.json())
      .then(data => {
        const formatado = data.map((l: any) => {
          let contratoFormatado = undefined;
          if (l.contratoAtivo && l.contratoAtivo.id) {
            contratoFormatado = {
              id: l.contratoAtivo.id,
              inicio: l.contratoAtivo.inicio,
              fim: l.contratoAtivo.fim,
              valorAluguel: l.contratoAtivo.valor_aluguel,
              luvas: l.contratoAtivo.luvas,
              percentualFaturamento: l.contratoAtivo.percentual_faturamento,
              indiceReajuste: l.contratoAtivo.indice_reajuste,
              tipo: l.contratoAtivo.tipo,
              desempenho: l.contratoAtivo.desempenho,
              diasRestantes: l.contratoAtivo.dias_restantes,
              status: l.contratoAtivo.status
            };
          }
          return {
            ...l,
            nome: l.nome?.String ?? "-",
            cnpj: l.cnpj?.String ?? "-",
            responsavel: l.responsavel?.String ?? "-",
            email: l.email?.String ?? "-",
            telefone: l.telefone?.String ?? "-",
            status_relacionamento: l.status_relacionamento?.String ?? "-",
            contratoAtivo: contratoFormatado
          };
        });
        setLojistasAPI(formatado);
      })
      .catch(err => console.error("Erro ao buscar lojistas:", err));
  }, []);

  const pisoData = useMemo(() => {
    const corridores: Record<Corredor, Lojista[]> = { A: [], B: [], C: [] };
    // Usando lojistasAPI no lugar de allLojistas
    lojistasAPI.filter(l => l.piso === activePiso).forEach(l => { corridores[l.corredor].push(l); });
    return corridores;
  }, [activePiso, lojistasAPI]);

  const filteredPisoData = useMemo(() => {
    const filter = (list: Lojista[]) => list.filter(l => {
      const matchSeg = filterSegmento === "Todos" || l.segmento === filterSegmento;
      const matchStatus = filterStatus === "Todos" || l.status === filterStatus;
      const matchSearch = !search || l.nome.toLowerCase().includes(search.toLowerCase()) || l.unidade.toLowerCase().includes(search.toLowerCase());
      return matchSeg && matchStatus && matchSearch;
    });
    return { A: filter(pisoData.A), B: filter(pisoData.B), C: filter(pisoData.C) };
  }, [pisoData, filterSegmento, filterStatus, search]);

  const globalStats = useMemo(() => {
    // Usando lojistasAPI no lugar de allLojistas
    const total = lojistasAPI.length;
    const disponiveis = lojistasAPI.filter(l => l.status === "Disponível").length;
    const ocupadas = total - disponiveis;
    const vencendoBreve = lojistasAPI.filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes < 60).length;
    return { total, disponiveis, ocupadas, vencendoBreve };
  }, [lojistasAPI]);

  const pisoStats = useMemo(() => {
    const s = (piso: Piso) => {
      // Usando lojistasAPI no lugar de allLojistas
      const arr = lojistasAPI.filter(l => l.piso === piso);
      return { 
        total: arr.length, 
        ocupadas: arr.filter(l => l.status === "Ocupado").length, 
        disponiveis: arr.filter(l => l.status === "Disponível").length 
      };
    };
    return { P: s("P"), S: s("S"), T: s("T") };
  }, [lojistasAPI]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-[#F1F5F9]">Disponibilidade de Unidades</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-0.5 text-sm">Planta do shopping por pisos e corredores.</p>
        </div>
        <div className="flex items-center gap-4 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#D93030]/10 border-2 border-dashed border-[#D93030]/50" />
            <span className="text-gray-600 dark:text-[#94A3B8]">Disponível ({globalStats.disponiveis})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#D93030]/10 border border-[#D93030]/25" />
            <span className="text-gray-600 dark:text-[#94A3B8]">Ocupado ({globalStats.ocupadas})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-gray-600 dark:text-[#94A3B8]">&lt;60 dias ({globalStats.vencendoBreve}) — RF-10</span>
          </div>
        </div>
      </div>

      {/* Piso summary cards */}
      <div className="grid grid-cols-3 gap-4">
        {(["P", "S", "T"] as Piso[]).map(piso => {
          const s = pisoStats[piso];
          const taxa = Math.round((s.ocupadas / s.total) * 100);
          return (
            <button
              key={piso}
              onClick={() => setActivePiso(piso)}
              className={`rounded-xl p-4 border-2 transition-all text-left ${activePiso === piso ? 'border-[#D93030] bg-[#D93030]/5 dark:bg-[#D93030]/10' : 'border-transparent bg-white dark:bg-[#242938] hover:border-gray-300 dark:hover:border-[#3E4557]'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-lg font-bold ${activePiso === piso ? 'text-[#D93030]' : 'text-gray-900 dark:text-[#F1F5F9]'}`}>{piso}</span>
                <Layers className={`w-4 h-4 ${activePiso === piso ? 'text-[#D93030]' : 'text-gray-400'}`} />
              </div>
              <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">{s.ocupadas} / {s.total} ocupadas</p>
              <div className="w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-1.5">
                <div className="bg-[#D93030] h-1.5 rounded-full" style={{ width: `${taxa}%` }} />
              </div>
              <p className="text-xs font-semibold text-gray-700 dark:text-[#94A3B8] mt-1">{taxa}% ocupado · {s.disponiveis} livres</p>
              <span className="mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 dark:bg-[#2E3447] text-gray-600 dark:text-[#94A3B8]">
                {PISO_LABELS[piso]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar lojista ou unidade..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-3 bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-700 dark:text-[#CBD5E1] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D93030]/40 focus:border-[#D93030] transition-colors"
          />
        </div>
        <FilterSelect
          value={filterStatus}
          onChange={setFilterStatus}
          options={[
            { value: "Todos", label: "Todos" },
            { value: "Disponível", label: "Disponíveis" },
            { value: "Ocupado", label: "Ocupadas" },
          ]}
        />
        <FilterSelect
          value={filterSegmento}
          onChange={setFilterSegmento}
          options={[
            { value: "Todos", label: "Todos os Segmentos" },
            ...["Moda", "Alimentação", "Serviços", "Eletrônicos", "Esportes", "Entretenimento", "Outros"].map(s => ({ value: s, label: s })),
          ]}
        />
        {(search || filterStatus !== "Todos" || filterSegmento !== "Todos") && (
          <button onClick={() => { setSearch(""); setFilterStatus("Todos"); setFilterSegmento("Todos"); }}
            className="h-9 flex items-center gap-1.5 px-3 border border-[#D93030]/25 bg-[#D93030]/5 text-[#D93030] rounded-xl text-sm hover:bg-[#D93030]/10 transition-colors">
            <RefreshCw className="w-3.5 h-3.5" /> Limpar
          </button>
        )}
      </div>

      {/* Floor plan */}
      <div className="bg-white dark:bg-[#242938] rounded-2xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-[#8B1A1A]/10 to-[#D93030]/10 dark:from-[#8B1A1A]/20 dark:to-[#D93030]/20 border-b border-gray-100 dark:border-[#2E3447]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D93030] rounded-lg flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900 dark:text-[#F1F5F9]">{PISO_LABELS[activePiso]}</h2>
                <p className="text-xs text-gray-500 dark:text-[#94A3B8]">
                  {pisoStats[activePiso].ocupadas} ocupadas · {pisoStats[activePiso].disponiveis} disponíveis
                </p>
              </div>
            </div>
            <div className="flex gap-1 bg-gray-100 dark:bg-[#1A1F2E] rounded-lg p-1">
              {(["P", "S", "T"] as Piso[]).map(p => (
                <button key={p} onClick={() => setActivePiso(p)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activePiso === p ? 'bg-[#D93030] text-white shadow-sm' : 'text-gray-600 dark:text-[#94A3B8] hover:bg-gray-200 dark:hover:bg-[#2E3447]'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {(["A", "B", "C"] as Corredor[]).map(corredor => {
            const units = filteredPisoData[corredor];
            const totalCorredor = pisoData[corredor].length;
            const availableCount = pisoData[corredor].filter(l => l.status === "Disponível").length;
            const expiringCount = pisoData[corredor].filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes < 60).length;

            return (
              <div key={corredor}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#C8A882]/30 dark:bg-[#C8A882]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#8B1A1A] dark:text-[#C8A882]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9]">
                        {CORREDOR_LABELS[activePiso][corredor]}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-[#64748B] flex-wrap">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />{totalCorredor - availableCount} ocupadas
                        </span>
                        <span className="flex items-center gap-1">
                          <XCircle className="w-3 h-3 text-[#D93030]" />{availableCount} disponíveis
                        </span>
                        {expiringCount > 0 && (
                          <span className="flex items-center gap-1 text-orange-500">
                            <Clock className="w-3 h-3" />{expiringCount} vencendo &lt;60d
                          </span>
                        )}
                        <span>({units.length} exibidas)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {units.length === 0 ? (
                  <div className="text-center py-6 text-gray-400 dark:text-[#64748B] text-sm bg-gray-50 dark:bg-[#1A1F2E] rounded-xl">
                    Nenhuma unidade encontrada com os filtros atuais
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2.5">
                    {units.map(lojista => (
                      <UnitBlock
                        key={lojista.id}
                        lojista={lojista}
                        onSelect={setSelectedLojista}
                        onProfile={setProfileLojista}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      

      {/* Unit detail modal */}
      {selectedLojista && !profileLojista && (
        <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-4 sm:p-6" onClick={() => setSelectedLojista(null)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-[#2E3447]"
            onClick={e => e.stopPropagation()}>
            <div className={`px-5 py-4 rounded-t-2xl ${selectedLojista.status === 'Disponível' ? 'bg-gradient-to-r from-gray-600 to-gray-700' : 'bg-gradient-to-r from-[#8B1A1A] to-[#D93030]'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                    {selectedLojista.status === 'Disponível' ? 'DISPONÍVEL' : 'OCUPADO'}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {selectedLojista.status === 'Disponível' ? `Unidade ${selectedLojista.unidade}` : selectedLojista.nome}
                  </h3>
                  <p className="text-sm text-white/80">{selectedLojista.unidade} · {selectedLojista.piso} / Corredor {selectedLojista.corredor}</p>
                </div>
                <button onClick={() => setSelectedLojista(null)} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Segmento</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{selectedLojista.segmento}</p>
                </div>
                <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Área</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{selectedLojista.area} m²</p>
                </div>
                <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">Corredor</p>
                  <p className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9]">{selectedLojista.corredor}</p>
                </div>
              </div>
              {selectedLojista.contratoAtivo && (
                <div className={`${selectedLojista.contratoAtivo.diasRestantes < 60 ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700/30' : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700/30'} border rounded-lg p-3 mb-4`}>
                  <p className={`text-xs font-medium mb-1 ${selectedLojista.contratoAtivo.diasRestantes < 60 ? 'text-orange-700 dark:text-orange-400' : 'text-green-700 dark:text-green-400'}`}>
                    {selectedLojista.contratoAtivo.diasRestantes < 60 ? `⚠ Contrato vence em ${selectedLojista.contratoAtivo.diasRestantes} dias` : 'Contrato Ativo'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">
                      {selectedLojista.contratoAtivo.valorAluguel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}/mês
                    </span>
                    <span className="text-xs text-gray-500 dark:text-[#94A3B8]">até {selectedLojista.contratoAtivo.fim}</span>
                  </div>
                </div>
              )}
              {selectedLojista.status === 'Disponível' && (
                <div className="bg-[#D93030]/10 border border-[#D93030]/30 rounded-lg p-3 mb-4">
                  <p className="text-xs font-medium text-[#D93030] mb-1">Unidade Livre para Locação (RF-11)</p>
                  <p className="text-xs text-gray-600 dark:text-[#94A3B8]">Unidade de {selectedLojista.area} m² disponível para novas propostas.</p>
                </div>
              )}
              <div className="flex gap-2">
                <button onClick={() => { setHistoryLojista(selectedLojista); setSelectedLojista(null); }}
                  className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-3 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <History className="w-4 h-4" /> Histórico
                </button>
                {selectedLojista.status === 'Ocupado' && (
                  <button onClick={() => { setProfileLojista(selectedLojista); setSelectedLojista(null); }}
                    className="flex-1 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" /> Ver Perfil
                  </button>
                )}
                {selectedLojista.status === 'Disponível' && (
                  <button className="flex-1 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <ChevronRight className="w-4 h-4" /> Criar Proposta
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {historyLojista && <UnitHistoryPanel lojista={historyLojista} onClose={() => setHistoryLojista(null)} />}
      {profileLojista && <LojistProfileModal lojista={profileLojista} onClose={() => setProfileLojista(null)} />}
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialContracts.tsx
````typescript
import { useState, useMemo, useEffect } from "react";
import {
  Search, Filter, ChevronRight, CheckCircle,
  Clock, RefreshCw, Eye, Download, Building2, TrendingUp,
  ArrowUpRight, ArrowDownRight, Sparkles
} from "lucide-react";
/* import { allLojistas } from "../../data/comercialData"; */
import { getGeneratedContracts, subscribe } from "../../data/comercialStore";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista, StatusContrato } from "../../data/comercialData";

const STATUS_COLORS: Record<StatusContrato, string> = {
  Ativo: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
  "Em Renovação": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
  Vencendo: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
  Vencido: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
};

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function ComercialContracts() {
  const [tick, setTick] = useState(0);
  const refresh = () => setTick(t => t + 1);

  // --- ADICIONE ESTE BLOCO AQUI ---
  const [lojistasAPI, setLojistasAPI] = useState<Lojista[]>([]);

 useEffect(() => {
    fetch("http://localhost:8082/lojistas")
      .then(res => res.json())
      .then(data => {
        const formatado = data.map((l: any) => {
          
          // Traduzindo o contrato do formato do Go para o formato do React
          let contratoFormatado = undefined;
          if (l.contratoAtivo && l.contratoAtivo.id) {
            contratoFormatado = {
              id: l.contratoAtivo.id,
              inicio: l.contratoAtivo.inicio,
              fim: l.contratoAtivo.fim,
              valorAluguel: l.contratoAtivo.valor_aluguel,             // Traduzido!
              luvas: l.contratoAtivo.luvas,
              percentualFaturamento: l.contratoAtivo.percentual_faturamento, // Traduzido!
              indiceReajuste: l.contratoAtivo.indice_reajuste,         // Traduzido!
              tipo: l.contratoAtivo.tipo,
              desempenho: l.contratoAtivo.desempenho,
              diasRestantes: l.contratoAtivo.dias_restantes,           // Traduzido!
              status: l.contratoAtivo.status
            };
          }

          return {
            ...l,
            nome: l.nome?.String ?? "-",
            cnpj: l.cnpj?.String ?? "-",
            responsavel: l.responsavel?.String ?? "-",
            email: l.email?.String ?? "-",
            telefone: l.telefone?.String ?? "-",
            status_relacionamento: l.status_relacionamento?.String ?? "-",
            contratoAtivo: contratoFormatado
          };
        });
        
        setLojistasAPI(formatado);
      })
      .catch(err => console.error("Erro ao buscar lojistas:", err));
  }, [tick]);

  useEffect(() => {
    const unsub = subscribe(refresh);
    return unsub;
  }, []);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("Todos");
  const [filterPiso, setFilterPiso] = useState<string>("Todos");
  const [filterSegmento, setFilterSegmento] = useState<string>("Todos");
  const [sortField, setSortField] = useState<"nome" | "valorAluguel" | "diasRestantes" | "desempenho">("nome");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selectedLojista, setSelectedLojista] = useState<Lojista | null>(null);

  const lojistasComContrato = useMemo(
    () => lojistasAPI.filter(l => l.status === 'Ocupado' && l.contratoAtivo),
    [lojistasAPI] // Mude a dependência aqui também!
  );

  // Include generated contracts as extra "virtual" lojistas
  const generatedContracts = useMemo(() => getGeneratedContracts(), [tick]);

  // Merge into a unified view
  const allContracts = useMemo(() => {
    // Map generated contracts back to lojista format for display
    const genItems = generatedContracts.map(gc => {
      const base = gc.lojistaId ? allLojistas.find(l => l.id === gc.lojistaId) : null;
      return {
        id: gc.id,
        nome: gc.lojista,
        unidade: gc.unidade,
        segmento: gc.segmento,
        piso: (gc.unidade.startsWith('L1') ? 'L1' : gc.unidade.startsWith('L2') ? 'L2' : 'L3') as 'L1'|'L2'|'L3',
        corredor: 'A' as 'A'|'B'|'C',
        area: gc.area,
        contratoAtivo: {
          id: gc.id,
          inicio: gc.inicio,
          fim: gc.fim,
          valorAluguel: gc.valorAluguel,
          luvas: gc.luvas,
          percentualFaturamento: gc.percentualFaturamento,
          indiceReajuste: gc.indiceReajuste,
          tipo: gc.tipo,
          desempenho: gc.desempenho,
          diasRestantes: gc.diasRestantes,
          status: gc.status,
        },
        isGenerated: true,
        lojistaRef: base,
      };
    });
    return { lojistasList: lojistasComContrato, genList: genItems };
  }, [lojistasComContrato, generatedContracts, tick]);

  const filtered = useMemo(() => {
    return allContracts.lojistasList.filter(l => {
      const matchSearch =
        l.nome.toLowerCase().includes(search.toLowerCase()) ||
        l.unidade.toLowerCase().includes(search.toLowerCase()) ||
        l.contratoAtivo!.id.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "Todos" || l.contratoAtivo!.status === filterStatus;
      const matchPiso = filterPiso === "Todos" || l.piso === filterPiso;
      const matchSeg = filterSegmento === "Todos" || l.segmento === filterSegmento;
      return matchSearch && matchStatus && matchPiso && matchSeg;
    }).sort((a, b) => {
      let av: number | string, bv: number | string;
      if (sortField === "nome") { av = a.nome; bv = b.nome; }
      else if (sortField === "valorAluguel") { av = a.contratoAtivo!.valorAluguel; bv = b.contratoAtivo!.valorAluguel; }
      else if (sortField === "diasRestantes") { av = a.contratoAtivo!.diasRestantes; bv = b.contratoAtivo!.diasRestantes; }
      else { av = a.contratoAtivo!.desempenho; bv = b.contratoAtivo!.desempenho; }
      if (typeof av === 'string') return sortDir === "asc" ? av.localeCompare(bv as string) : (bv as string).localeCompare(av);
      return sortDir === "asc" ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
  }, [allContracts, search, filterStatus, filterPiso, filterSegmento, sortField, sortDir]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { Ativo: 0, "Em Renovação": 0, Vencendo: 0, Vencido: 0 };
    allContracts.lojistasList.forEach(l => { map[l.contratoAtivo!.status] = (map[l.contratoAtivo!.status] || 0) + 1; });
    return map;
  }, [allContracts]);

  const totalReceita = useMemo(
    () => allContracts.lojistasList.reduce((s, l) => s + l.contratoAtivo!.valorAluguel, 0),
    [allContracts]
  );

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const SortIcon = ({ field }: { field: typeof sortField }) => (
    sortField === field ? (
      sortDir === "asc" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
    ) : null
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Contratos Ativos</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Gestão e monitoramento de contratos.</p>
        </div>
        <button className="inline-flex items-center gap-2 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <Download className="w-4 h-4" /> Exportar Lista
        </button>
      </div>

      {/* Generated contracts banner */}
      {generatedContracts.length > 0 && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-xl p-4 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-green-800 dark:text-green-400">
              {generatedContracts.length} contrato{generatedContracts.length > 1 ? 's' : ''} gerado{generatedContracts.length > 1 ? 's' : ''} automaticamente (RF-03)
            </p>
            <p className="text-xs text-green-700 dark:text-green-500">
              {generatedContracts.map(c => `${c.lojista} (${c.unidade})`).join(' · ')}
            </p>
          </div>
        </div>
      )}

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Ativos", value: counts["Ativo"], color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
          { label: "Em Renovação", value: counts["Em Renovação"], color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Vencendo <60d", value: counts["Vencendo"], color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/20" },
          { label: "Vencidos", value: counts["Vencido"], color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/20" },
        ].map(({ label, value, color, bg }) => (
          <div key={label} className={`${bg} rounded-xl p-4`}>
            <p className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">{label}</p>
            <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
          </div>
        ))}
        <div className="bg-[#8B1A1A]/10 dark:bg-[#8B1A1A]/20 rounded-xl p-4">
          <p className="text-xs font-medium text-gray-500 dark:text-[#94A3B8]">Receita Mensal</p>
          <p className="text-base font-bold text-[#D93030] mt-1">{fmt(totalReceita)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar lojista, unidade ou contrato..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-900 dark:text-[#F1F5F9] placeholder-gray-400 focus:outline-none focus:border-[#D93030]" />
        </div>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Em Renovação">Em Renovação</option>
          <option value="Vencendo">Vencendo</option>
          <option value="Vencido">Vencido</option>
        </select>
        <select value={filterPiso} onChange={e => setFilterPiso(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Pisos</option>
          <option value="L1">Piso L1</option>
          <option value="L2">Piso L2</option>
          <option value="L3">Piso L3</option>
        </select>
        <select value={filterSegmento} onChange={e => setFilterSegmento(e.target.value)}
          className="bg-white dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 py-2.5 text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] cursor-pointer">
          <option value="Todos">Todos os Segmentos</option>
          {["Moda","Alimentação","Serviços","Eletrônicos","Esportes","Entretenimento","Outros"].map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={() => { setSearch(""); setFilterStatus("Todos"); setFilterPiso("Todos"); setFilterSegmento("Todos"); }}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
          <RefreshCw className="w-4 h-4" /> Limpar
        </button>
      </div>

      {/* Contracts Table — RF-04, RF-07 */}
      <div className="bg-white dark:bg-[#242938] rounded-xl shadow-sm border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">{filtered.length} contratos exibidos</span>
          <Filter className="w-4 h-4 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("nome")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Lojista <SortIcon field="nome" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Contrato</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Segmento</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("valorAluguel")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Aluguel <SortIcon field="valorAluguel" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("diasRestantes")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Vencimento <SortIcon field="diasRestantes" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  <button onClick={() => handleSort("desempenho")} className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-[#F1F5F9]">
                    Desempenho <SortIcon field="desempenho" />
                  </button>
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">Ação</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {filtered.slice(0, 50).map((lojista) => {
                const c = lojista.contratoAtivo!;
                const STATUS_COLORS_MAP: Record<string, string> = {
                  Ativo: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
                  "Em Renovação": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
                  Vencendo: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
                  Vencido: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400",
                };
                return (
                  <tr key={lojista.id}
                    className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                    onClick={() => setSelectedLojista(lojista as any)}>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#D93030]/10 dark:bg-[#D93030]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-4 h-4 text-[#D93030]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{lojista.nome}</p>
                          <p className="text-xs text-gray-500 dark:text-[#64748B]">{lojista.unidade} · {lojista.piso}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-xs text-gray-500 dark:text-[#94A3B8]">{c.id}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-xs text-gray-600 dark:text-[#94A3B8]">{lojista.segmento}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{fmt(c.valorAluguel)}</td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <p className="text-xs text-gray-500 dark:text-[#94A3B8]">{c.fim}</p>
                      <p className={`text-xs font-medium ${c.diasRestantes<=30?'text-red-500':c.diasRestantes<=60?'text-orange-500':'text-gray-400 dark:text-[#475569]'}`}>
                        {c.diasRestantes} dias — RF-10
                      </p>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 dark:bg-[#2E3447] rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full ${c.desempenho>=90?'bg-green-500':c.desempenho>=75?'bg-blue-500':c.desempenho>=60?'bg-orange-500':'bg-red-500'}`}
                            style={{ width: `${c.desempenho}%` }} />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-[#94A3B8]">{c.desempenho}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS_MAP[c.status] || ''}`}>{c.status}</span>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-right">
                      <button onClick={e => { e.stopPropagation(); setSelectedLojista(lojista as any); }}
                        className="inline-flex items-center gap-1 text-[#D93030] hover:text-[#b92828] text-sm font-medium">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length > 50 && (
          <div className="px-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] text-center">
            <p className="text-xs text-gray-500 dark:text-[#64748B]">Exibindo 50 de {filtered.length} contratos.</p>
          </div>
        )}
      </div>

      {selectedLojista && <LojistProfileModal lojista={selectedLojista} onClose={() => setSelectedLojista(null)} />}
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialDashboard.tsx
````typescript
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Store, FileText, AlertCircle, Percent,
  ChevronRight, BarChart2, RefreshCw, Calendar, Info
} from "lucide-react";
import { FilterSelect } from "../../components/FilterSelect";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
//import { lojistasAPI } from "../../data/comercialData";
import { getProposals, subscribe } from "../../data/comercialStore";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista } from "../../data/comercialData";

const DS = {
  primary: "#D93030",
  dark:    "#8B1A1A",
  blue:    "#3B82F6",
  green:   "#10B981",
  amber:   "#F59E0B",
  gold:    "#C8A882",
  tick:    "#94A3B8",
  grid:    "#e5e7eb",
} as const;

const PIE_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];
const CHART_COLORS = [DS.primary, DS.gold, DS.dark, DS.amber, DS.green, DS.blue, "#8B5CF6"];

const SEGMENTOS = ["Moda", "Alimentação", "Serviços", "Eletrônicos", "Esportes", "Entretenimento", "Outros"];
const PISOS = ["P", "S", "T"] as const;
const PISO_LABELS: Record<string, string> = { P: "Primeiro Piso", S: "Segundo Piso", T: "Terceiro Piso" };

const TODAY = new Date("2026-04-23");

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function PieTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="bg-[#1E2435] text-[#F1F5F9] rounded-xl p-3 text-xs shadow-2xl border border-[#2E3447]">
      <p className="font-semibold mb-1" style={{ color: item.payload?.fill }}>{item.name}</p>
      <p className="text-[#94A3B8]">{item.value} loja{item.value !== 1 ? "s" : ""}</p>
    </div>
  );
}

function BarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1E2435] text-[#F1F5F9] rounded-xl p-3 text-xs shadow-2xl border border-[#2E3447] min-w-[120px]">
      <p className="font-semibold mb-2 pb-1.5 border-b border-[#2E3447]" style={{ color: DS.gold }}>{label}</p>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center justify-between gap-4">
          <span style={{ color: entry.color }}>{entry.name}</span>
          <span className="font-semibold">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}


export function ComercialDashboard() {
  const navigate = useNavigate();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const u = subscribe(() => setTick(t => t + 1));
    return u;
  }, []);

  // --- ADICIONE ESTE BLOCO AQUI ---
  const [lojistasAPI, setLojistasAPI] = useState<Lojista[]>([]);

  useEffect(() => {
    fetch("http://localhost:8082/lojistas")
      .then(res => res.json())
      .then(data => {
        const formatado = data.map((l: any) => {
          let contratoFormatado = undefined;
          if (l.contratoAtivo && l.contratoAtivo.id) {
            contratoFormatado = {
              id: l.contratoAtivo.id,
              inicio: l.contratoAtivo.inicio,
              fim: l.contratoAtivo.fim,
              valorAluguel: l.contratoAtivo.valor_aluguel,
              luvas: l.contratoAtivo.luvas,
              percentualFaturamento: l.contratoAtivo.percentual_faturamento,
              indiceReajuste: l.contratoAtivo.indice_reajuste,
              tipo: l.contratoAtivo.tipo,
              desempenho: l.contratoAtivo.desempenho,
              diasRestantes: l.contratoAtivo.dias_restantes,
              status: l.contratoAtivo.status
            };
          }
          return {
            ...l,
            nome: l.nome?.String ?? "-",
            cnpj: l.cnpj?.String ?? "-",
            responsavel: l.responsavel?.String ?? "-",
            email: l.email?.String ?? "-",
            telefone: l.telefone?.String ?? "-",
            status_relacionamento: l.status_relacionamento?.String ?? "-",
            contratoAtivo: contratoFormatado
          };
        });
        setLojistasAPI(formatado);
      })
      .catch(err => console.error("Erro ao buscar lojistas:", err));
  }, [tick]);
  // ---------------------------------

  const [filterSegmento, setFilterSegmento] = useState<string>("Todos");
  const [filterPiso, setFilterPiso] = useState<string>("Todos");
  const [profileLojista, setProfileLojista] = useState<Lojista | null>(null);

  const proposals = useMemo(() => getProposals(), [tick]);

  const filteredLojistas = useMemo(() =>
    lojistasAPI.filter(l => {
      if (l.status !== "Ocupado" || !l.contratoAtivo) return false;
      const mS = filterSegmento === "Todos" || l.segmento === filterSegmento;
      const mP = filterPiso === "Todos" || l.piso === filterPiso;
      return mS && mP;
    }), [filterSegmento, filterPiso]);

  const stats = useMemo(() => {
    const total = lojistasAPI.length;
    const ocupadas = lojistasAPI.filter(l => l.status === "Ocupado").length;
    const disponiveis = total - ocupadas;
    const taxa = Math.round((ocupadas / total) * 100);
    const vencendo = lojistasAPI.filter(l => l.contratoAtivo && l.contratoAtivo.diasRestantes < 60).length;
    const propostasAtv = proposals.filter(p =>
      ["Aguardando análise financeira", "Aguardando análise do comitê"].includes(p.status)
    ).length;
    return { total, ocupadas, disponiveis, taxa, vencendo, propostasAtv };
  }, [filteredLojistas, proposals, tick]);

  const segmentosChart = useMemo(() => {
    const map: Record<string, number> = {};
    filteredLojistas.forEach(l => { map[l.segmento] = (map[l.segmento] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [filteredLojistas]);

  const pieData = useMemo(() => {
    const map: Record<string, number> = {};
    filteredLojistas.forEach(l => { map[l.segmento] = (map[l.segmento] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [filteredLojistas]);

  const proposalStatusChart = useMemo(() => {
    const STATUS_LIST = [
      { key: "Aguardando análise financeira", label: "Ag. Financeiro" },
      { key: "Aguardando análise do comitê",  label: "Ag. Comitê" },
      { key: "Aprovado",  label: "Aprovado" },
      { key: "Reprovado", label: "Reprovado" },
      { key: "Cancelado", label: "Cancelado" },
    ];
    return STATUS_LIST.map(({ key, label }) => ({
      name: label,
      fullName: key,
      value: proposals.filter(p => p.status === key).length,
    })).filter(d => d.value > 0);
  }, [proposals, tick]);

  const propostasRecentes = useMemo(() => {
    let ps = proposals;
    if (filterSegmento !== "Todos") ps = ps.filter(p => p.segmento === filterSegmento);
    return ps.slice(0, 6);
  }, [proposals, filterSegmento, tick]);

  const contratosVencendo = useMemo(() =>
    lojistasAPI.filter(l => {
      if (!l.contratoAtivo || l.contratoAtivo.diasRestantes >= 60 || l.status !== "Ocupado") return false;
      const mP = filterPiso === "Todos" || l.piso === filterPiso;
      const mS = filterSegmento === "Todos" || l.segmento === filterSegmento;
      return mP && mS;
    }).sort((a, b) => a.contratoAtivo!.diasRestantes - b.contratoAtivo!.diasRestantes).slice(0, 8),
    [filterPiso, filterSegmento]);

  const resetFilters = () => { setFilterSegmento("Todos"); setFilterPiso("Todos"); };
  const hasFilters = filterSegmento !== "Todos" || filterPiso !== "Todos";

  const STATUS_BADGE: Record<string, string> = {
    "Aprovado": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    "Aguardando análise do comitê": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
    "Reprovado": "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
    "Cancelado": "bg-gray-100 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400",
  };

  return (
    <div className="space-y-6">

      {/* Cabeçalho + Filtros */}
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-[#F1F5F9] mr-auto">
          Dashboard Comercial
        </h1>

        <div className="flex items-center gap-2 flex-wrap">
          <FilterSelect
            value={filterSegmento}
            onChange={setFilterSegmento}
            options={[
              { value: "Todos", label: "Todas as Categorias" },
              ...SEGMENTOS.map(s => ({ value: s, label: s })),
            ]}
          />
          <FilterSelect
            value={filterPiso}
            onChange={setFilterPiso}
            options={[
              { value: "Todos", label: "Todos os Pisos" },
              { value: "P", label: "Primeiro Piso" },
              { value: "S", label: "Segundo Piso" },
              { value: "T", label: "Terceiro Piso" },
            ]}
          />
          {hasFilters && (
            <button onClick={resetFilters}
              className="h-9 inline-flex items-center gap-1.5 px-3 text-[#B82025] border border-[#B82025]/30 bg-[#B82025]/5 rounded-xl text-sm font-medium hover:bg-[#B82025]/10 transition-colors">
              <RefreshCw className="w-3.5 h-3.5" /> Limpar
            </button>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
            <Store className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Total de Lojas</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.ocupadas}</span>
            <span className="text-sm text-gray-400">/ {stats.total}</span>
          </div>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{stats.disponiveis} disponíveis</p>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-9 h-9 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
            <Percent className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Taxa de Ocupação</p>
          <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.taxa}%</span>
          <div className="mt-2 w-full bg-gray-200 dark:bg-[#2E3447] rounded-full h-1">
            <div className="bg-green-500 h-1 rounded-full transition-all" style={{ width: `${stats.taxa}%` }} />
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <div className="w-9 h-9 bg-[#D93030]/10 rounded-lg flex items-center justify-center mb-3">
            <FileText className="w-4 h-4 text-[#D93030]" />
          </div>
          <p className="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-1">Propostas Abertas</p>
          <span className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">{stats.propostasAtv}</span>
          <p className="text-xs text-[#D93030] mt-1">aguardando análise</p>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-orange-100 dark:border-orange-700/30 p-5">
          <div className="w-9 h-9 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-3">
            <AlertCircle className="w-4 h-4 text-orange-500 dark:text-orange-400" />
          </div>
          <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">Contratos &lt;60 dias</p>
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.vencendo}</span>
          <p className="text-xs text-gray-400 mt-1">vencimento próximo</p>
        </div>
      </div>

      {/* Gráficos — linha 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[#D93030]" />
            Ocupação por Segmento
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-4">Lojas ocupadas por categoria</p>
          {segmentosChart.length === 0 ? (
            <div className="flex items-center justify-center h-52 text-gray-400 text-xs">
              Sem dados para os filtros selecionados
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={DS.grid} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: DS.tick, fontSize: 11 }} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: DS.tick, fontSize: 11 }} />
                <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(217,48,48,0.05)" }} />
                <Bar dataKey="value" fill={DS.primary} radius={[4, 4, 0, 0]} barSize={32} name="Lojas" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[#D93030]" />
            Distribuição por Categoria
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-3">Fatia de cada segmento</p>
          {pieData.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={52} innerRadius={24}
                    dataKey="value" paddingAngle={2}>
                    {pieData.map((_, i) => (
                      <Cell key={`pie-cell-${i}`} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-3">
                {pieData.slice(0, 6).map((item, i) => (
                  <div key={`pie-leg-${item.name}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-sm flex-shrink-0"
                        style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                      <span className="text-xs text-gray-500 dark:text-[#94A3B8]">{item.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-800 dark:text-[#F1F5F9]">{item.value}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-gray-400 dark:text-[#64748B] text-xs">
              Sem dados para os filtros
            </div>
          )}
        </div>
      </div>

      {/* Gráficos — linha 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <Info className="w-4 h-4 text-[#D93030]" />
            Ocupação por Piso
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-4">Lojas ocupadas em cada piso</p>
          <div className="h-48 flex items-center justify-center gap-8">
            <ResponsiveContainer width="55%" height="100%">
              <PieChart>
                <Pie
                  data={PISOS.map(p => ({
                    name: PISO_LABELS[p],
                    value: lojistasAPI.filter(l => l.piso === p && l.status === "Ocupado" &&
                      (filterSegmento === "Todos" || l.segmento === filterSegmento)).length,
                  }))}
                  cx="50%" cy="50%" outerRadius={72} innerRadius={38}
                  dataKey="value" paddingAngle={4}
                >
                  {PISOS.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }}
                  formatter={(v: any, n: any) => [`${v} lojas`, n]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2.5">
              {PISOS.map((p, i) => {
                const count = lojistasAPI.filter(l => l.piso === p && l.status === "Ocupado" &&
                  (filterSegmento === "Todos" || l.segmento === filterSegmento)).length;
                return (
                  <div key={p} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                    <span className="text-xs text-gray-500 dark:text-[#94A3B8]">{PISO_LABELS[p]}</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-[#F1F5F9] ml-1">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-0.5 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#D93030]" />
            Status das Propostas
          </h3>
          <p className="text-xs text-gray-400 dark:text-[#64748B] mb-4">Distribuição por status atual</p>
          {proposalStatusChart.length > 0 ? (
            <div className="h-48 flex items-center justify-center gap-6">
              <ResponsiveContainer width="50%" height="100%">
                <PieChart>
                  <Pie data={proposalStatusChart} cx="50%" cy="50%" outerRadius={72} dataKey="value" paddingAngle={3}>
                    {proposalStatusChart.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }}
                    formatter={(v: any, _: any, p: any) => [v, p.payload.fullName]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {proposalStatusChart.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                    <span className="text-xs text-gray-500 dark:text-[#94A3B8] leading-tight">{item.name}</span>
                    <span className="text-xs font-bold text-gray-800 dark:text-[#F1F5F9] ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-gray-400 dark:text-[#64748B] text-xs">Sem propostas</div>
          )}
        </div>
      </div>

      {/* Propostas de Contratos */}
      <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
          <button onClick={() => navigate("/comercial/propostas")} className="flex items-center gap-2 group">
            <FileText className="w-4 h-4 text-[#D93030]" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] group-hover:text-[#D93030] transition-colors">
              Propostas de Contratos
            </h3>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#D93030] transition-colors" />
          </button>
          <span className="text-xs text-gray-400 dark:text-[#64748B]">{proposals.length} no total</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                {["Código", "Lojista", "Unidade", "Tipo", "Criação", "Valor", "Status"].map(h => (
                  <th key={h} className="px-5 py-2.5 text-left text-xs font-medium text-gray-400 dark:text-[#94A3B8] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {propostasRecentes.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-6 text-gray-400 text-sm">Nenhuma proposta encontrada</td></tr>
              ) : propostasRecentes.map(p => (
                <tr key={`prop-${p.id}`}
                  className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                  onClick={() => navigate("/comercial/propostas")}>
                  <td className="px-5 py-3 text-xs font-medium text-gray-700 dark:text-[#F1F5F9] whitespace-nowrap">{p.id}</td>
                  <td className="px-5 py-3 text-sm text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{p.lojista}</td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{p.unidade}</td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{p.tipo}</td>
                  <td className="px-5 py-3 text-xs text-gray-400 whitespace-nowrap">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.dataCriacao}</span>
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(p.valorProposto)}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 inline-flex text-xs font-medium rounded-full ${STATUS_BADGE[p.status] || "bg-gray-100 text-gray-600"}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E]">
          <button onClick={() => navigate("/comercial/propostas")}
            className="text-xs text-[#D93030] hover:text-[#b92828] font-medium flex items-center gap-1 transition-colors">
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
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                {["Lojista", "Unidade", "Piso", "Vencimento", "Dias Rest.", "Aluguel"].map(h => (
                  <th key={h} className="px-5 py-2.5 text-left text-xs font-medium text-gray-400 dark:text-[#94A3B8] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
              {contratosVencendo.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-6 text-gray-400 text-sm">Nenhum contrato vencendo no período filtrado</td></tr>
              ) : contratosVencendo.map(l => (
                <tr key={`ctr-${l.id}`}
                  className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer"
                  onClick={() => setProfileLojista(l)}>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{l.nome}</td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{l.unidade}</td>
                  <td className="px-5 py-3 text-xs whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded-full font-medium ${
                      l.piso === "T" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" :
                      l.piso === "S" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" :
                      "bg-gray-100 dark:bg-[#2E3447] text-gray-600 dark:text-[#94A3B8]"
                    }`}>{PISO_LABELS[l.piso] ?? l.piso}</span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-[#94A3B8] whitespace-nowrap">{l.contratoAtivo!.fim}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                      l.contratoAtivo!.diasRestantes <= 30
                        ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
                    }`}>{l.contratoAtivo!.diasRestantes} dias</span>
                  </td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] whitespace-nowrap">{fmt(l.contratoAtivo!.valorAluguel)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {profileLojista && (
        <LojistProfileModal lojista={profileLojista} onClose={() => setProfileLojista(null)} />
      )}
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialProposals.tsx
````typescript
import { useState, useMemo, useEffect } from "react";
import {
  Search, Filter, Plus, ChevronRight, Calendar, Eye, CheckCircle,
  XCircle, Clock, MessageSquare, RefreshCw, Send, Edit3,
  FileText, Paperclip, Upload, Trash2, Shield, History
} from "lucide-react";
import { FilterSelect } from "../../components/FilterSelect";
import {
  getProposals, updateProposalStatus, addProposal, getGeneratedContracts,
  addDocument, getDocumentsByEntity, removeDocument, getAuditByEntity,
  subscribe
} from "../../data/comercialStore";
import { allLojistas } from "../../data/comercialData";
import { LojistProfileModal } from "../../components/LojistProfileModal";
import type { Lojista, StatusProposta } from "../../data/comercialData";

const STATUS_COLORS: Record<StatusProposta, string> = {
  "Aguardando análise financeira": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700/30",
  "Aguardando análise do comitê":  "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-700/30",
  Aprovado:  "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-700/30",
  Reprovado: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-700/30",
  Cancelado: "bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600/30",
};

const TIPO_COLORS: Record<string, string> = {
  "Nova Instalação": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400",
  Renovação:         "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400",
  Readequação:       "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
};

function StatusIcon({ status }: { status: StatusProposta }) {
  switch (status) {
    case "Aguardando análise financeira": return <Clock className="w-4 h-4 text-yellow-500" />;
    case "Aguardando análise do comitê":  return <Eye className="w-4 h-4 text-purple-500" />;
    case "Aprovado":  return <CheckCircle className="w-4 h-4 text-green-500" />;
    case "Reprovado": return <XCircle className="w-4 h-4 text-red-500" />;
    case "Cancelado": return <XCircle className="w-4 h-4 text-gray-400" />;
    default: return null;
  }
}

function fmtCurrency(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
}

export function ComercialProposals() {
  const [tick, setTick] = useState(0);
  const refresh = () => setTick(t => t + 1);

  // Subscribe to store changes
  useEffect(() => {
    const unsub = subscribe(refresh);
    return unsub;
  }, []);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("Todos");
  const [filterTipo, setFilterTipo] = useState<string>("Todos");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [profileLojista, setProfileLojista] = useState<Lojista | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [newStatusTarget, setNewStatusTarget] = useState<StatusProposta>("Aguardando análise do comitê");
  const [statusObs, setStatusObs] = useState("");
  const [showAuditPanel, setShowAuditPanel] = useState(false);

  // New proposal form state
  const [newProp, setNewProp] = useState({
    lojista: '', unidade: '', tipo: 'Nova Instalação' as any, segmento: 'Moda' as any,
    valor: '', area: '', vencimento: '', observacoes: '',
  });

  // REMOVA OU COMENTE ESTA LINHA:
  // const proposals = useMemo(() => getProposals(), [tick]);

  // --- ADICIONE ESTE BLOCO NO LUGAR ---
  const [propostasAPI, setPropostasAPI] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8082/propostas")
      .then(res => res.json())
      .then(data => {
        const formatado = data.map((p: any) => ({
          ...p,
          lojista: p.lojista_nome, // Traduzindo para o React
          valorProposto: p.valor_proposto,
          area: p.area_m2,
          dataCriacao: p.data_criacao,
          dataVencimento: p.data_vencimento,
          observacoes: p.observacoes?.String ?? "",
          lojistaId: p.lojista_id?.String ?? undefined
        }));
        setPropostasAPI(formatado);
      })
      .catch(err => console.error("Erro ao buscar propostas:", err));
  }, [tick]);
  const generatedContracts = useMemo(() => getGeneratedContracts(), [tick]);

  const filtered = useMemo(() => {
    return propostasAPI.filter(p => {
      const matchSearch = p.lojista.toLowerCase().includes(search.toLowerCase()) ||
        p.unidade.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "Todos" || p.status === filterStatus;
      const matchTipo = filterTipo === "Todos" || p.tipo === filterTipo;
      let matchDate = true;
      if (dateFrom || dateTo) {
        const parts = p.dataCriacao.split('/');
        if (parts.length === 3) {
          const propDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
          if (dateFrom && propDate < dateFrom) matchDate = false;
          if (dateTo && propDate > dateTo) matchDate = false;
        }
      }
      return matchSearch && matchStatus && matchTipo && matchDate;
    });
  }, [proposals, search, filterStatus, filterTipo, dateFrom, dateTo, tick]);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    propostasAPI.forEach(p => { map[p.status] = (map[p.status] || 0) + 1; });
    return map;
  }, [proposals, tick]);

  const selected = useMemo(() => propostasAPI.find(p => p.id === selectedId), [proposals, selectedId, tick]);
  const lojistaMapped = selected?.lojistaId ? allLojistas.find(l => l.id === selected.lojistaId) : null;
  const selectedDocs = useMemo(() => selected ? getDocumentsByEntity(selected.id) : [], [selected, tick]);
  const selectedAudit = useMemo(() => selected ? getAuditByEntity(selected.id) : [], [selected, tick]);

  // Check if selected proposal has a generated contract (RF-04)
  const generatedContract = useMemo(() =>
    selected ? generatedContracts.find(c => c.proposalId === selected.id) : null,
  [selected, generatedContracts, tick]);

  const handleChangeStatus = (status: StatusProposta) => {
    if (!selected) return;
    setNewStatusTarget(status);
    setStatusObs("");
    setShowStatusModal(true);
  };

  const confirmStatusChange = () => {
    if (!selected) return;
    updateProposalStatus(selected.id, newStatusTarget, statusObs);
    setShowStatusModal(false);
    refresh();
  };

  const handleFileUpload = () => {
    if (!selected) return;
    const fakeFiles = ['Proposta_Assinada.pdf', 'Laudo_Avaliacao.pdf', 'Contrato_Minuta.docx', 'RG_Responsavel.jpg', 'CNPJ_Comprovante.pdf'];
    const randomFile = fakeFiles[Math.floor(Math.random() * fakeFiles.length)];
    const ext = randomFile.split('.').pop() as any;
    addDocument({
      entityId: selected.id,
      entityType: 'Proposta',
      nome: randomFile,
      tamanho: `${Math.floor(Math.random() * 900 + 100)} KB`,
      tipo: ext === 'jpg' ? 'JPG' : ext === 'docx' ? 'DOCX' : 'PDF',
    });
    refresh();
  };

  const handleNewProposal = () => {
    if (!newProp.lojista || !newProp.unidade || !newProp.valor) return;

    // Prepara o JSON para o Go
    const payload = {
      lojista_nome: newProp.lojista,
      unidade: newProp.unidade,
      segmento: newProp.segmento,
      tipo: newProp.tipo,
      valor_proposto: parseFloat(newProp.valor) || 0,
      area_m2: parseInt(newProp.area) || 0,
      responsavel: 'Gerência Comercial',
      data_vencimento: newProp.vencimento || '30/06/2026',
      observacoes: newProp.observacoes ? newProp.observacoes : undefined
    };

    // Dispara para a API
    fetch("http://localhost:8082/propostas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then(res => {
      if (!res.ok) throw new Error("Falha ao salvar proposta");
      return res.json();
    })
    .then(() => {
      setShowNewModal(false);
      setNewProp({ lojista:'', unidade:'', tipo:'Nova Instalação', segmento:'Moda', valor:'', area:'', vencimento:'', observacoes:'' });
      refresh(); // Atualiza a tela puxando do banco de novo
    })
    .catch(err => console.error("Erro ao criar proposta:", err));
  };

  const canChangeStatus = selected && !['Aprovado', 'Reprovado', 'Cancelado'].includes(selected.status);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Propostas Comerciais</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Cadastro, acompanhamento e gestão de propostas.</p>
        </div>
        <button onClick={() => setShowNewModal(true)}
          className="inline-flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Nova Proposta
        </button>
      </div>

      {/* Status counters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {(["Aguardando análise financeira","Aguardando análise do comitê","Aprovado","Reprovado","Cancelado"] as StatusProposta[]).map(s => (
          <button key={s} onClick={() => setFilterStatus(filterStatus === s ? "Todos" : s)}
            className={`rounded-xl p-3 text-center border transition-all ${filterStatus === s ? STATUS_COLORS[s] + ' ring-2 ring-offset-1 ring-current' : 'bg-white dark:bg-[#242938] border-gray-100 dark:border-[#2E3447] hover:border-gray-300 dark:hover:border-[#3E4557]'}`}>
            <p className="text-lg font-bold text-gray-900 dark:text-[#F1F5F9]">{counts[s] || 0}</p>
            <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-0.5 leading-tight">{s}</p>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
          <input type="text" placeholder="Buscar por lojista, unidade ou código..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-3 bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-700 dark:text-[#CBD5E1] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D93030]/40 focus:border-[#D93030] transition-colors" />
        </div>
        <FilterSelect
          value={filterTipo}
          onChange={setFilterTipo}
          options={[
            { value: "Todos", label: "Todos os Tipos" },
            { value: "Nova Instalação", label: "Nova Instalação" },
            { value: "Renovação", label: "Renovação" },
            { value: "Readequação", label: "Readequação" },
          ]}
        />
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-400 dark:text-[#64748B] whitespace-nowrap">De</span>
          <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)}
            className="h-9 bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 text-sm text-gray-700 dark:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#D93030]/40 focus:border-[#D93030] transition-colors" />
          <span className="text-xs text-gray-400 dark:text-[#64748B] whitespace-nowrap">Até</span>
          <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)}
            className="h-9 bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-xl px-3 text-sm text-gray-700 dark:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#D93030]/40 focus:border-[#D93030] transition-colors" />
        </div>
        {(search || filterStatus !== "Todos" || filterTipo !== "Todos" || dateFrom || dateTo) && (
          <button onClick={() => { setSearch(""); setFilterStatus("Todos"); setFilterTipo("Todos"); setDateFrom(""); setDateTo(""); }}
            className="h-9 flex items-center gap-1.5 px-3 border border-[#B82025]/30 bg-[#B82025]/5 text-[#B82025] rounded-xl text-sm hover:bg-[#B82025]/10 transition-colors">
            <RefreshCw className="w-3.5 h-3.5" /> Limpar
          </button>
        )}
      </div>

      {/* Content: list + detail */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Proposals list */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 dark:border-[#2E3447] bg-gray-50/50 dark:bg-[#1A1F2E] flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">{filtered.length} proposta{filtered.length !== 1 ? 's' : ''}</span>
              
            </div>
            <div className="divide-y divide-gray-100 dark:divide-[#2E3447] max-h-[600px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="text-center py-12 text-gray-400 dark:text-[#64748B]">
                  <Search className="w-10 h-10 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Nenhuma proposta encontrada</p>
                </div>
              ) : (
                filtered.map(p => (
                  <button key={p.id} onClick={() => setSelectedId(selectedId === p.id ? null : p.id)}
                    className={`w-full text-left px-5 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-[#1A1F2E] ${selectedId === p.id ? 'bg-[#D93030]/5 dark:bg-[#D93030]/10 border-l-2 border-[#D93030]' : ''}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] truncate">{p.lojista}</span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${TIPO_COLORS[p.tipo] || ''}`}>{p.tipo}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-[#64748B] flex-wrap">
                          <span>{p.id}</span><span>·</span><span>{p.unidade}</span><span>·</span><span>{p.segmento}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{fmtCurrency(p.valorProposto)}</span>
                          <span className="text-xs text-gray-400">{p.area} m²</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Criada: {p.dataCriacao}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1.5">
                          <StatusIcon status={p.status as StatusProposta} />
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${STATUS_COLORS[p.status as StatusProposta]}`}>{p.status}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" /><span>Vence {p.dataVencimento}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-2">
          {selected ? (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden sticky top-6">
              <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-5 py-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/70">{selected.id}</span>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/20 text-white">{selected.status}</span>
                </div>
                <h3 className="text-base font-bold text-white">{selected.lojista}</h3>
                <p className="text-sm text-white/80">{selected.unidade} · {selected.segmento}</p>
              </div>
              <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Valor Proposto</p>
                    <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9]">{fmtCurrency(selected.valorProposto)}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Área</p>
                    <p className="text-base font-bold text-gray-900 dark:text-[#F1F5F9]">{selected.area} m²</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Criação</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{selected.dataCriacao}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg p-3">
                    <p className="text-xs text-gray-500 dark:text-[#64748B] mb-1">Vencimento</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{selected.dataVencimento}</p>
                  </div>
                </div>
                {selected.observacoes && (
                  <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-lg p-3">
                    <p className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">Observações</p>
                    <p className="text-xs text-gray-600 dark:text-[#94A3B8] leading-relaxed">{selected.observacoes}</p>
                  </div>
                )}

                {/* Contrato gerado (RF-03) */}
                {generatedContract && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-xs font-semibold text-green-700 dark:text-green-400">Contrato Gerado — RF-03</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-[#94A3B8]">
                      {generatedContract.id} · Vigência: {generatedContract.inicio} a {generatedContract.fim}
                    </p>
                    <p className="text-xs font-semibold text-gray-800 dark:text-[#F1F5F9] mt-1">
                      {fmtCurrency(generatedContract.valorAluguel)}/mês · Criado por {generatedContract.createdBy}
                    </p>
                  </div>
                )}

                {/* Action Buttons — RF-02 */}
                <div className="border-t border-gray-100 dark:border-[#2E3447] pt-4 space-y-2">
                  {canChangeStatus && (
                    <>
                      <button onClick={() => handleChangeStatus('Aprovado')}
                        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                        <CheckCircle className="w-4 h-4" /> Aprovar Proposta
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => handleChangeStatus('Aguardando análise do comitê')}
                          className="flex items-center justify-center gap-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors">
                          <Eye className="w-3.5 h-3.5" /> Comitê
                        </button>
                        <button onClick={() => handleChangeStatus('Aguardando análise financeira')}
                          className="flex items-center justify-center gap-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl px-3 py-2.5 text-sm font-medium transition-colors">
                          <Clock className="w-3.5 h-3.5" /> Financeiro
                        </button>
                      </div>
                      <button onClick={() => handleChangeStatus('Reprovado')}
                        className="w-full flex items-center justify-center gap-2 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                        <XCircle className="w-4 h-4" /> Reprovar Proposta
                      </button>
                    </>
                  )}

                  {/* Document attachment — RF-08 */}
                  <div className="border-t border-gray-100 dark:border-[#2E3447] pt-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-gray-600 dark:text-[#94A3B8] flex items-center gap-1">
                        <Paperclip className="w-3.5 h-3.5" /> Documentos  — {selectedDocs.length}
                      </p>
                      <button onClick={handleFileUpload}
                        className="flex items-center gap-1 text-xs text-[#D93030] hover:text-[#b92828] font-medium">
                        <Upload className="w-3 h-3" /> Anexar
                      </button>
                    </div>
                    {selectedDocs.length === 0 ? (
                      <p className="text-xs text-gray-400 dark:text-[#64748B] text-center py-2">Nenhum documento anexado</p>
                    ) : (
                      <div className="space-y-1.5">
                        {selectedDocs.map(doc => (
                          <div key={doc.id} className="flex items-center gap-2 bg-gray-50 dark:bg-[#1A1F2E] rounded-lg px-3 py-2">
                            <FileText className="w-3.5 h-3.5 text-[#D93030] flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-800 dark:text-[#F1F5F9] truncate">{doc.nome}</p>
                              <p className="text-xs text-gray-400">{doc.tamanho} · {doc.dataUpload} · {doc.uploadedBy}</p>
                            </div>
                            <button onClick={() => { removeDocument(doc.id); refresh(); }} className="text-gray-400 hover:text-red-500">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Audit log toggle — RNF-04, RNF-05 */}
                  <div className="border-t border-gray-100 dark:border-[#2E3447] pt-3">
                    <button onClick={() => setShowAuditPanel(p => !p)}
                      className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-[#94A3B8] hover:text-[#D93030] transition-colors">
                      <Shield className="w-3.5 h-3.5" /> Histórico de Alterações — {selectedAudit.length} registro{selectedAudit.length !== 1 ? 's' : ''}
                    </button>
                    {showAuditPanel && selectedAudit.length > 0 && (
                      <div className="mt-2 space-y-1.5 max-h-40 overflow-y-auto">
                        {selectedAudit.map(a => (
                          <div key={a.id} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-lg px-3 py-2">
                            <p className="text-xs font-medium text-gray-800 dark:text-[#F1F5F9]">{a.action}</p>
                            <p className="text-xs text-gray-500 dark:text-[#64748B]">
                              {a.userName} · {a.sector} · {new Date(a.timestamp).toLocaleString('pt-BR')}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {lojistaMapped && (
                    <button onClick={() => setProfileLojista(lojistaMapped)}
                      className="w-full flex items-center justify-center gap-2 border border-[#D93030]/30 text-[#D93030] hover:bg-[#D93030]/5 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                      <Eye className="w-4 h-4" /> Ver Perfil do Lojista
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] flex items-center justify-center min-h-64">
              <div className="text-center p-8">
                <ChevronRight className="w-8 h-8 text-gray-300 dark:text-[#3E4557] mx-auto mb-3" />
                <p className="text-sm text-gray-400 dark:text-[#64748B]">Selecione uma proposta para ver detalhes e ações</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status change modal */}
      {showStatusModal && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowStatusModal(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-[#1E2435] rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-[#2E3447]"
            onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#8B1A1A] to-[#D93030] px-6 py-4 rounded-t-2xl">
              <h3 className="text-base font-bold text-white">Alterar Status da Proposta</h3>
              <p className="text-sm text-white/80">{selected.id} — {selected.lojista}</p>
            </div>
            <div className="p-5 space-y-4">
              <div className="bg-gray-50 dark:bg-[#242938] rounded-lg p-3">
                <p className="text-xs text-gray-500 dark:text-[#64748B]">Status atual: <span className="font-semibold text-gray-800 dark:text-[#F1F5F9]">{selected.status}</span></p>
                <p className="text-xs text-gray-500 dark:text-[#64748B] mt-0.5">Novo status: <span className={`font-semibold ${newStatusTarget === 'Aprovado' ? 'text-green-600' : newStatusTarget === 'Reprovado' ? 'text-red-600' : 'text-purple-600'}`}>{newStatusTarget}</span></p>
              </div>
              {newStatusTarget === 'Aprovado' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-3 text-xs text-green-700 dark:text-green-400">
                  <strong>RN-01:</strong> Ao aprovar, um contrato será gerado automaticamente.
                </div>
              )}
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Observação (opcional)</label>
                <textarea rows={3} value={statusObs} onChange={e => setStatusObs(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030] resize-none"
                  placeholder="Motivo da alteração, condições acordadas..." />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowStatusModal(false)}
                  className="flex-1 border border-gray-200 dark:border-[#2E3447] text-gray-700 dark:text-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-[#242938] rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  Cancelar
                </button>
                <button onClick={confirmStatusChange}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  <Send className="w-4 h-4" /> Confirmar Alteração
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  <label className="text-xs font-medium text-gray-600 dark:text-[#94A3B8] mb-1 block">Lojista / Empresa *</label>
                  <input value={newProp.lojista} onChange={e => setNewProp(p => ({...p, lojista: e.target.value}))}
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#242938] border border-gray-200 dark:border-[#2E3447] rounded-lg text-sm text-gray-900 dark:text-[#F1F5F9] focus:outline-none focus:border-[#D93030]" placeholder="Nome do lojista" />
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

      {profileLojista && <LojistProfileModal lojista={profileLojista} onClose={() => setProfileLojista(null)} />}
    </div>
  );
}
````

## File: Figma/src/app/pages/comercial/ComercialReports.tsx
````typescript
import { useState, useMemo } from "react";
import {
  Download, Filter, Calendar, CheckSquare, BarChart3,
  FileText, TrendingUp, RefreshCw, Check, ChevronDown,
  Printer, Table, FileSpreadsheet
} from "lucide-react";
import { FilterSelect } from "../../components/FilterSelect";
import { allLojistas, propostasAtivas } from "../../data/comercialData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ReportField {
  id: string;
  label: string;
  category: string;
  selected: boolean;
}

const DEFAULT_FIELDS: ReportField[] = [
  // Lojista
  { id: "nome", label: "Nome do Lojista", category: "Lojista", selected: true },
  { id: "cnpj", label: "CNPJ", category: "Lojista", selected: false },
  { id: "segmento", label: "Segmento", category: "Lojista", selected: true },
  { id: "responsavel", label: "Responsável", category: "Lojista", selected: false },
  { id: "email", label: "E-mail", category: "Lojista", selected: false },
  { id: "telefone", label: "Telefone", category: "Lojista", selected: false },
  // Unidade
  { id: "unidade", label: "Unidade", category: "Unidade", selected: true },
  { id: "piso", label: "Piso", category: "Unidade", selected: true },
  { id: "corredor", label: "Corredor", category: "Unidade", selected: false },
  { id: "area", label: "Área (m²)", category: "Unidade", selected: false },
  { id: "status", label: "Status da Unidade", category: "Unidade", selected: true },
  // Contrato
  { id: "contratoId", label: "Código do Contrato", category: "Contrato", selected: false },
  { id: "contratoInicio", label: "Início do Contrato", category: "Contrato", selected: false },
  { id: "contratoFim", label: "Fim do Contrato", category: "Contrato", selected: true },
  { id: "contratoStatus", label: "Status do Contrato", category: "Contrato", selected: true },
  { id: "valorAluguel", label: "Valor do Aluguel", category: "Contrato", selected: true },
  { id: "luvas", label: "Valor das Luvas", category: "Contrato", selected: false },
  { id: "percentualFaturamento", label: "% Faturamento", category: "Contrato", selected: false },
  { id: "indiceReajuste", label: "Índice de Reajuste", category: "Contrato", selected: false },
  { id: "diasRestantes", label: "Dias Restantes", category: "Contrato", selected: false },
  // Financeiro
  { id: "faturamentoMedio", label: "Faturamento Médio", category: "Financeiro", selected: false },
  // Relacionamento — removido
];

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${checked ? 'bg-[#D93030] border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557] hover:border-[#D93030]'}`}
    >
      {checked && <Check className="w-3 h-3 text-white" />}
    </button>
  );
}

const CHART_COLORS = ['#D93030', '#C8A882', '#8B1A1A', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'];

export function ComercialReports() {
  const [fields, setFields] = useState<ReportField[]>(DEFAULT_FIELDS);
  const [dateFrom, setDateFrom] = useState("2024-01-01");
  const [dateTo, setDateTo] = useState("2026-04-30");
  const [filterPiso, setFilterPiso] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [filterSegmento, setFilterSegmento] = useState("Todos");
  const [reportType, setReportType] = useState<"contratos" | "propostas" | "ocupacao">("contratos");
  const [showPreview, setShowPreview] = useState(false);
  const [exportFormat, setExportFormat] = useState<"csv" | "pdf" | "xlsx">("xlsx");
  const [showExportMenu, setShowExportMenu] = useState(false);

  const toggleField = (id: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, selected: !f.selected } : f));
  };

  const toggleCategory = (category: string) => {
    const catFields = fields.filter(f => f.category === category);
    const allSelected = catFields.every(f => f.selected);
    setFields(prev => prev.map(f => f.category === category ? { ...f, selected: !allSelected } : f));
  };

  const selectAll = () => setFields(prev => prev.map(f => ({ ...f, selected: true })));
  const clearAll = () => setFields(prev => prev.map(f => ({ ...f, selected: false })));

  const categories = useMemo(() => {
    const cats: Record<string, ReportField[]> = {};
    fields.forEach(f => { if (!cats[f.category]) cats[f.category] = []; cats[f.category].push(f); });
    return cats;
  }, [fields]);

  const selectedFields = fields.filter(f => f.selected);

  // Report data based on filters
  const reportData = useMemo(() => {
    return allLojistas.filter(l => {
      const matchPiso = filterPiso === "Todos" || l.piso === filterPiso;
      const matchStatus = filterStatus === "Todos" || l.status === filterStatus;
      const matchSeg = filterSegmento === "Todos" || l.segmento === filterSegmento;
      return matchPiso && matchStatus && matchSeg;
    });
  }, [filterPiso, filterStatus, filterSegmento]);

  // Charts data
  const segmentosChart = useMemo(() => {
    const map: Record<string, number> = {};
    reportData.filter(l => l.status === 'Ocupado').forEach(l => { map[l.segmento] = (map[l.segmento] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);
  }, [reportData]);

  const multasChart = useMemo(() => {
    const map: Record<string, number> = {};
    reportData.forEach(l => l.multas.forEach(m => { map[m.tipo] = (map[m.tipo] || 0) + 1; }));
    return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value).slice(0, 6);
  }, [reportData]);

  // Preview table data
  const previewRows = useMemo(() => {
    return reportData.slice(0, 15).map(l => {
      const row: Record<string, string> = {};
      selectedFields.forEach(f => {
        switch (f.id) {
          case "nome": row[f.label] = l.nome || "—"; break;
          case "cnpj": row[f.label] = l.cnpj || "—"; break;
          case "segmento": row[f.label] = l.segmento; break;
          case "responsavel": row[f.label] = l.responsavel || "—"; break;
          case "email": row[f.label] = l.email || "—"; break;
          case "telefone": row[f.label] = l.telefone || "—"; break;
          case "unidade": row[f.label] = l.unidade; break;
          case "piso": row[f.label] = l.piso; break;
          case "corredor": row[f.label] = l.corredor; break;
          case "area": row[f.label] = `${l.area} m²`; break;
          case "status": row[f.label] = l.status; break;
          case "contratoId": row[f.label] = l.contratoAtivo?.id || "—"; break;
          case "contratoInicio": row[f.label] = l.contratoAtivo?.inicio || "—"; break;
          case "contratoFim": row[f.label] = l.contratoAtivo?.fim || "—"; break;
          case "contratoStatus": row[f.label] = l.contratoAtivo?.status || "—"; break;
          case "valorAluguel": row[f.label] = l.contratoAtivo ? fmt(l.contratoAtivo.valorAluguel) : "—"; break;
          case "luvas": row[f.label] = l.contratoAtivo ? fmt(l.contratoAtivo.luvas) : "—"; break;
          case "percentualFaturamento": row[f.label] = l.contratoAtivo ? `${l.contratoAtivo.percentualFaturamento}%` : "—"; break;
          case "indiceReajuste": row[f.label] = l.contratoAtivo?.indiceReajuste || "—"; break;
          case "diasRestantes": row[f.label] = l.contratoAtivo ? `${l.contratoAtivo.diasRestantes} dias` : "—"; break;
          case "faturamentoMedio": row[f.label] = fmt(l.faturamentoMedio); break;
          default: row[f.label] = "—";
        }
      });
      return row;
    });
  }, [reportData, selectedFields]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Relatórios Comerciais</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Selecione campos, aplique filtros e exporte relatórios.</p>
        </div>
        {/* Export button */}
        <div className="relative">
          <div className="flex gap-2">
            <div className="flex border border-gray-200 dark:border-[#2E3447] rounded-xl overflow-hidden">
              {(["xlsx", "csv", "pdf"] as const).map(fmt2 => (
                <button
                  key={fmt2}
                  onClick={() => setExportFormat(fmt2)}
                  className={`px-3 py-2 text-xs font-medium transition-colors ${exportFormat === fmt2 ? 'bg-[#D93030] text-white' : 'text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E]'}`}
                >
                  {fmt2.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 bg-[#D93030] hover:bg-[#c02828] text-white rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shadow-sm">
              <Download className="w-4 h-4" /> Exportar Relatório
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Filters + Field selector */}
        <div className="lg:col-span-1 space-y-4">
          {/* Date Range */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D93030]" /> Filtro por Período
            </h3>
            <div className="space-y-2.5">
              <div>
                <label className="text-xs text-gray-400 dark:text-[#64748B] mb-1 block">Data Inicial</label>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={e => setDateFrom(e.target.value)}
                  className="w-full h-9 px-3 bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-700 dark:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#D93030]/40 focus:border-[#D93030] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 dark:text-[#64748B] mb-1 block">Data Final</label>
                <input
                  type="date"
                  value={dateTo}
                  onChange={e => setDateTo(e.target.value)}
                  className="w-full h-9 px-3 bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-[#2E3447] rounded-xl text-sm text-gray-700 dark:text-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#D93030]/40 focus:border-[#D93030] transition-colors"
                />
              </div>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                {[
                  { label: "1 mês", from: "2026-03-17" },
                  { label: "3 meses", from: "2026-01-17" },
                  { label: "6 meses", from: "2025-10-17" },
                  { label: "1 ano", from: "2025-04-17" },
                  { label: "2 anos", from: "2024-04-17" },
                  { label: "Tudo", from: "2019-01-01" },
                ].map(q => (
                  <button
                    key={q.label}
                    onClick={() => { setDateFrom(q.from); setDateTo("2026-04-17"); }}
                    className="h-7 px-1 text-xs border border-gray-200 dark:border-[#2E3447] rounded-xl text-gray-500 dark:text-[#94A3B8] bg-white dark:bg-[#1A1F2E] hover:border-[#D93030]/50 hover:text-[#D93030] transition-colors"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#D93030]" /> Filtros do Relatório
            </h3>
            <div className="space-y-2.5">
              <div>
                <label className="text-xs text-gray-400 dark:text-[#64748B] mb-1 block">Piso</label>
                <FilterSelect
                  value={filterPiso}
                  onChange={setFilterPiso}
                  options={[
                    { value: "Todos", label: "Todos os Pisos" },
                    { value: "P", label: "Primeiro Piso" },
                    { value: "S", label: "Segundo Piso" },
                    { value: "T", label: "Terceiro Piso" },
                  ]}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 dark:text-[#64748B] mb-1 block">Status</label>
                <FilterSelect
                  value={filterStatus}
                  onChange={setFilterStatus}
                  options={[
                    { value: "Todos", label: "Todos" },
                    { value: "Ocupado", label: "Ocupados" },
                    { value: "Disponível", label: "Disponíveis" },
                  ]}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 dark:text-[#64748B] mb-1 block">Segmento</label>
                <FilterSelect
                  value={filterSegmento}
                  onChange={setFilterSegmento}
                  options={[
                    { value: "Todos", label: "Todos" },
                    ...["Moda", "Alimentação", "Serviços", "Eletrônicos", "Esportes", "Entretenimento", "Outros"].map(s => ({ value: s, label: s })),
                  ]}
                />
              </div>
              <button
                onClick={() => { setFilterPiso("Todos"); setFilterStatus("Todos"); setFilterSegmento("Todos"); }}
                className="w-full h-9 flex items-center justify-center gap-2 border border-[#D93030]/25 bg-[#D93030]/5 text-[#D93030] rounded-xl text-sm hover:bg-[#D93030]/10 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Limpar Filtros
              </button>
            </div>
          </div>

          {/* Field selector */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#D93030]" /> Campos a Exportar
              </h3>
              <div className="flex gap-2">
                <button onClick={selectAll} className="text-xs text-[#D93030] hover:underline">Todos</button>
                <span className="text-gray-300 dark:text-[#3E4557]">|</span>
                <button onClick={clearAll} className="text-xs text-gray-500 hover:underline">Nenhum</button>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-[#64748B] mb-4">{selectedFields.length} de {fields.length} campos selecionados</p>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {Object.entries(categories).map(([category, catFields]) => {
                const allSel = catFields.every(f => f.selected);
                const someSel = catFields.some(f => f.selected);
                return (
                  <div key={category}>
                    <button
                      onClick={() => toggleCategory(category)}
                      className="flex items-center gap-2 mb-2 w-full text-left group"
                    >
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${allSel ? 'bg-[#D93030] border-[#D93030]' : someSel ? 'bg-[#D93030]/30 border-[#D93030]' : 'border-gray-300 dark:border-[#3E4557]'}`}>
                        {allSel && <Check className="w-2.5 h-2.5 text-white" />}
                        {someSel && !allSel && <div className="w-2 h-0.5 bg-[#D93030] rounded" />}
                      </div>
                      <span className="text-xs font-semibold text-gray-700 dark:text-[#94A3B8] uppercase tracking-wider">{category}</span>
                    </button>
                    <div className="ml-2 space-y-1.5">
                      {catFields.map(field => (
                        <label key={field.id} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox checked={field.selected} onChange={() => toggleField(field.id)} />
                          <span className="text-sm text-gray-700 dark:text-[#F1F5F9] group-hover:text-[#D93030] transition-colors">{field.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Charts + Preview */}
        <div className="lg:col-span-2 space-y-5">
          {/* Report type tabs */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-1 flex gap-1">
            {[
              { id: "contratos", label: "Contratos", icon: FileText },
              { id: "ocupacao", label: "Ocupação", icon: BarChart3 },
              { id: "propostas", label: "Propostas", icon: TrendingUp },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setReportType(id as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${reportType === id ? 'bg-[#D93030] text-white shadow-sm' : 'text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E]'}`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:block">{label}</span>
              </button>
            ))}
          </div>

          {/* Charts */}
          {reportType === "contratos" && (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Distribuição por Segmento</h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={segmentosChart} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 11 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 11 }} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }} />
                    <Bar dataKey="value" fill="#D93030" radius={[4, 4, 0, 0]} barSize={36} name="Lojas" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {reportType === "ocupacao" && (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Ocupação por Piso</h3>
              <div className="h-56 flex items-center justify-center">
                <ResponsiveContainer width="60%" height="100%">
                  <PieChart>
                    <Pie
                      data={["P", "S", "T"].map(p => ({
                        name: p,
                        value: allLojistas.filter(l => l.piso === p && l.status === "Ocupado").length,
                      }))}
                      cx="50%" cy="50%" outerRadius={80} innerRadius={45}
                      dataKey="value" paddingAngle={4}
                    >
                      {["P", "S", "T"].map((_, i) => (
                        <Cell key={i} fill={CHART_COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }} formatter={(v, n) => [`${v} lojas`, n]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {["P", "S", "T"].map((p, i) => {
                    const count = allLojistas.filter(l => l.piso === p && l.status === "Ocupado").length;
                    return (
                      <div key={p} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                        <span className="text-sm text-gray-600 dark:text-[#94A3B8]">{p}</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-[#F1F5F9]">{count} lojas</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {reportType === "propostas" && (
            <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9] mb-4">Status das Propostas</h3>
              <div className="h-56 flex items-center justify-center">
                <ResponsiveContainer width="60%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Ag. Financeiro", value: propostasAtivas.filter(p => p.status === "Aguardando análise financeira").length },
                        { name: "Ag. Comitê", value: propostasAtivas.filter(p => p.status === "Aguardando análise do comitê").length },
                        { name: "Aprovado", value: propostasAtivas.filter(p => p.status === "Aprovado").length },
                        { name: "Reprovado", value: propostasAtivas.filter(p => p.status === "Reprovado").length },
                        { name: "Cancelado", value: propostasAtivas.filter(p => p.status === "Cancelado").length },
                      ]}
                      cx="50%" cy="50%" outerRadius={80} dataKey="value" paddingAngle={3}
                    >
                      {CHART_COLORS.map((c, i) => <Cell key={i} fill={c} />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1E2435', color: '#F1F5F9' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2">
                  {[
                    "Aguardando análise financeira",
                    "Aguardando análise do comitê",
                    "Aprovado",
                    "Reprovado",
                    "Cancelado",
                  ].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: CHART_COLORS[i] }} />
                      <span className="text-xs text-gray-600 dark:text-[#94A3B8] max-w-[120px] leading-tight">{s}</span>
                      <span className="text-xs font-bold text-gray-900 dark:text-[#F1F5F9] ml-auto">{propostasAtivas.filter(p => p.status === s).length}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Preview toggle */}
          <div className="bg-white dark:bg-[#242938] rounded-xl border border-gray-100 dark:border-[#2E3447] overflow-hidden">
            <button
              onClick={() => setShowPreview(p => !p)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-[#D93030]" />
                <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">
                  Pré-visualização da Tabela ({selectedFields.length} colunas · {reportData.length} linhas)
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showPreview ? 'rotate-180' : ''}`} />
            </button>

            {showPreview && selectedFields.length > 0 && (
              <div className="border-t border-gray-100 dark:border-[#2E3447] overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100 dark:divide-[#2E3447] text-xs">
                  <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
                    <tr>
                      {selectedFields.map(f => (
                        <th key={f.id} className="px-4 py-2.5 text-left font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider whitespace-nowrap">
                          {f.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-100 dark:divide-[#2E3447]">
                    {previewRows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors">
                        {selectedFields.map(f => (
                          <td key={f.id} className="px-4 py-2.5 whitespace-nowrap text-gray-700 dark:text-[#94A3B8]">
                            {row[f.label]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-3 bg-gray-50/50 dark:bg-[#1A1F2E] border-t border-gray-100 dark:border-[#2E3447] flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-[#64748B]">
                    Exibindo prévia de 15 de {reportData.length} registros
                  </p>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 bg-[#D93030] hover:bg-[#c02828] text-white rounded-lg px-4 py-2 text-xs font-medium transition-colors">
                      <Download className="w-3.5 h-3.5" /> Exportar {exportFormat.toUpperCase()} ({reportData.length} registros)
                    </button>
                    <button className="flex items-center gap-1.5 border border-gray-200 dark:border-[#2E3447] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-50 dark:hover:bg-[#1A1F2E] rounded-lg px-3 py-2 text-xs font-medium transition-colors">
                      <Printer className="w-3.5 h-3.5" /> Imprimir
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showPreview && selectedFields.length === 0 && (
              <div className="border-t border-gray-100 dark:border-[#2E3447] p-8 text-center text-gray-400 dark:text-[#64748B]">
                <CheckSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Selecione ao menos um campo para pré-visualizar</p>
              </div>
            )}
          </div>

          {/* Export actions */}
          
        </div>
      </div>
    </div>
  );
}
````

## File: Figma/src/app/pages/Login.tsx
````typescript
import { useState } from "react";
import { useNavigate } from "react-router";
import { Building2, Lock, Mail, ShieldAlert, Briefcase } from "lucide-react";
import { setUserSession } from "../data/comercialStore";

const SECTORS = [
  "Comercial", "Sinistros", "Manutenção", "Seguros",
  "Marketing", "Lojistas", "Treinamentos", "Institucional",
  "Relatórios", "TI / Administração",
];

export function Login() {
  const navigate = useNavigate();
  const [sector, setSector] = useState("Comercial");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || 'gerente@jpmall.com.br';
    setUserSession({ email, name: 'Gerente JP Mall', sector });
    navigate("/comercial/dashboard");
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
            Gestão Integrada de Ocorrências e Sinistros
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-[#242938] py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border-t-4 border-[#8B1A1A] dark:border-[#E04444]">
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-400 rounded-lg p-4 mb-6 flex items-start">
            <ShieldAlert className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-yellow-600 dark:text-yellow-500" />
            <div className="text-sm font-medium">
              Acesso restrito. Este sistema destina-se apenas a gerentes e administradores autorizados do JP Mall.
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#94A3B8]">
                E-mail ou Usuário
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
                  defaultValue="gerente@jpmall.com.br"
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
                  defaultValue="••••••••"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] rounded-md focus:outline-none focus:ring-[#D93030] focus:border-[#D93030] sm:text-sm transition-colors"
                />
              </div>
            </div>

            {/* Setor — RNF-02 */}
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700 dark:text-[#94A3B8]">
                Setor / Módulo de Acesso
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400 dark:text-[#64748B]" />
                </div>
                <select
                  id="sector"
                  value={sector}
                  onChange={e => setSector(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] rounded-md focus:outline-none focus:ring-[#D93030] focus:border-[#D93030] sm:text-sm transition-colors cursor-pointer"
                >
                  {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-[#64748B]">Selecione o setor principal de atuação.</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#D93030] focus:ring-[#D93030] border-gray-300 dark:border-[#2E3447] rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-[#F1F5F9] cursor-pointer">
                  Lembrar acesso
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#D93030] hover:text-[#b92828] transition-colors">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#D93030] hover:bg-[#b92828] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D93030] transition-colors duration-200"
              >
                Entrar no Sistema
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
import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { ComercialDashboard } from "./pages/comercial/ComercialDashboard";
import { ComercialProposals } from "./pages/comercial/ComercialProposals";
import { ComercialAvailability } from "./pages/comercial/ComercialAvailability";
import { ComercialReports } from "./pages/comercial/ComercialReports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "comercial/dashboard", Component: ComercialDashboard },
      { path: "comercial/propostas", Component: ComercialProposals },
      { path: "comercial/disponibilidade", Component: ComercialAvailability },
      { path: "comercial/relatorios", Component: ComercialReports },
      { path: "dashboard", loader: () => redirect("/comercial/dashboard") },
      { path: "*", loader: () => redirect("/comercial/dashboard") },
    ],
  },
]);
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
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "canvas-confetti": "1.9.4",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "3.6.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
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
    "vaul": "1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  },
  "peerDependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
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
  User
} from "lucide-react";
import logoFlamboyant from "../../imports/logo_2024.png";
import { getUserSession } from "../data/comercialStore";

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

  const handleLogout = () => {
    sessionStorage.removeItem('jp-mall-session');
    navigate("/");
  };

  const handleComercialClick = (e: React.MouseEvent) => {
    const saved = sessionStorage.getItem('jp-mall-comercial-last-tab');
    if (saved) {
      e.preventDefault();
      navigate(saved);
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors">

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

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-[#8B1A1A] text-white flex flex-col flex-shrink-0 transition-all duration-80 ease-in-out overflow-hidden`}
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
        <header className={`h-16 bg-white dark:bg-[#242938] border-b border-gray-200 dark:border-[#2E3447] flex items-center justify-between z-10 transition-all duration-300 ${sidebarOpen ? 'px-6' : 'pl-[7.5rem] pr-6'}`}>
          <div className="flex items-center gap-3" />

          <div className="flex items-center gap-2 ml-auto">
            

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-400 dark:text-[#94A3B8] hover:text-gray-600 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            
          </div>
        </header>

        {/* Sub-header with tabs */}
        {currentSection?.subTabs && currentSection.subTabs.length > 0 && (
          <div className="bg-white dark:bg-[#242938] border-b border-gray-200 dark:border-[#2E3447] px-6 transition-colors">
            <div className="flex gap-1">
              {currentSection.subTabs.map((tab) => {
                const isActiveTab = location.pathname === tab.path;
                return (
                  <NavLink
                    key={tab.path}
                    to={tab.path}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      isActiveTab
                        ? 'border-[#D93030] dark:border-[#E04444] text-[#D93030] dark:text-[#E04444]'
                        : 'border-transparent text-gray-500 dark:text-[#94A3B8] hover:text-gray-800 dark:hover:text-[#F1F5F9] hover:border-gray-300 dark:hover:border-[#2E3447]'
                    }`}
                  >
                    {tab.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
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
