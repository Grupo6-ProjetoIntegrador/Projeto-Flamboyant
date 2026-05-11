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
	SegmentoModa          Segmento = "Moda"
	SegmentoAlimentacao   Segmento = "Alimentação"
	SegmentoServicos      Segmento = "Serviços"
	SegmentoEletronicos   Segmento = "Eletrônicos"
	SegmentoEsportes      Segmento = "Esportes"
	SegmentoEntretenimento Segmento = "Entretenimento"
	SegmentoOutros        Segmento = "Outros"
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
	TipoAluguelFixo          TipoContrato = "Aluguel Fixo"
	TipoAluguelMaisPercentual TipoContrato = "Aluguel + Percentual"
	TipoSoPercentual         TipoContrato = "Só Percentual"
)

type StatusContrato string

const (
	StatusContratoAtivo      StatusContrato = "Ativo"
	StatusContratoEmRenovacao StatusContrato = "Em Renovação"
	StatusContratoVencendo   StatusContrato = "Vencendo"
	StatusContratoVencido    StatusContrato = "Vencido"
)

type StatusMulta string

const (
	StatusMultaPaga      StatusMulta = "Paga"
	StatusMultaPendente  StatusMulta = "Pendente"
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
	StatusPropostaPendente      StatusProposta = "Pendente"
	StatusPropostaEmAnalise     StatusProposta = "Em Análise"
	StatusPropostaEmNegociacao  StatusProposta = "Em Negociação"
	StatusPropostaAceita        StatusProposta = "Aceita"
	StatusPropostaRecusada      StatusProposta = "Recusada"
	StatusPropostaExpirada      StatusProposta = "Expirada"
)

type SeveridadeSinistro string

const (
	SeveridadeBaixa  SeveridadeSinistro = "Baixa"
	SeveridadeMedia  SeveridadeSinistro = "Média"
	SeveridadeAlta   SeveridadeSinistro = "Alta"
)

type StatusSinistro string

const (
	StatusSinistroAberto             StatusSinistro = "Aberto"
	StatusSinistroAguardandoRegulador StatusSinistro = "Aguardando Regulador"
	StatusSinistroEmAnalise          StatusSinistro = "Em Análise"
	StatusSinistroAprovado           StatusSinistro = "Aprovado"
	StatusSinistroPago               StatusSinistro = "Pago"
)

// ============================================================
// Lojista
// Tabela: lojistas
// ============================================================

type Lojista struct {
	ID                  string               `db:"id"                   json:"id"`
	Nome                sql.NullString       `db:"nome"                 json:"nome"`
	CNPJ                sql.NullString       `db:"cnpj"                 json:"cnpj"`
	Segmento            Segmento             `db:"segmento"             json:"segmento"`
	Responsavel         sql.NullString       `db:"responsavel"          json:"responsavel"`
	Email               sql.NullString       `db:"email"                json:"email"`
	Telefone            sql.NullString       `db:"telefone"             json:"telefone"`
	Unidade             string               `db:"unidade"              json:"unidade"`
	Piso                Piso                 `db:"piso"                 json:"piso"`
	Corredor            Corredor             `db:"corredor"             json:"corredor"`
	AreaM2              int                  `db:"area_m2"              json:"area_m2"`
	Status              StatusLoja           `db:"status"               json:"status"`
	StatusRelacionamento sql.NullString      `db:"status_relacionamento" json:"status_relacionamento"`
	FaturamentoMedio    int64                `db:"faturamento_medio"    json:"faturamento_medio"`
}

// LojistaComRelacoes é usado em consultas que fazem JOIN com
// as tabelas dependentes, retornando dados completos do lojista.
type LojistaComRelacoes struct {
	Lojista
	Contrato  *Contrato           `json:"contrato,omitempty"`
	Multas    []Multa             `json:"multas,omitempty"`
	Propostas []PropostaHistorico `json:"propostas_historico,omitempty"`
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
	ID        string         `db:"id"         json:"id"`
	LojistaID string         `db:"lojista_id" json:"lojista_id"`
	Data      string         `db:"data"       json:"data"`
	Tipo      TipoProposta   `db:"tipo"       json:"tipo"`
	Valor     float64        `db:"valor"      json:"valor"`
	Status    StatusProposta `db:"status"     json:"status"`
	Observacao sql.NullString `db:"observacao" json:"observacao"`
}

// ============================================================
// Proposta
// Tabela: propostas
// Propostas ativas em aberto ou recentes (aba Propostas).
// ============================================================

type Proposta struct {
	ID            string         `db:"id"             json:"id"`
	LojistaID     sql.NullString `db:"lojista_id"     json:"lojista_id"`
	LojistaNome   string         `db:"lojista_nome"   json:"lojista_nome"`
	Unidade       string         `db:"unidade"        json:"unidade"`
	Segmento      Segmento       `db:"segmento"       json:"segmento"`
	Tipo          TipoProposta   `db:"tipo"           json:"tipo"`
	ValorProposto float64        `db:"valor_proposto" json:"valor_proposto"`
	AreaM2        int            `db:"area_m2"        json:"area_m2"`
	Status        StatusProposta `db:"status"         json:"status"`
	Responsavel   string         `db:"responsavel"    json:"responsavel"`
	DataCriacao   string         `db:"data_criacao"   json:"data_criacao"`
	DataVencimento string        `db:"data_vencimento" json:"data_vencimento"`
	Observacoes   sql.NullString `db:"observacoes"    json:"observacoes"`
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
	Nome      string     `json:"nome"      validate:"required,max=100"`
	CNPJ      string     `json:"cnpj"      validate:"required,max=20"`
	Segmento  Segmento   `json:"segmento"  validate:"required"`
	Responsavel string   `json:"responsavel" validate:"required,max=100"`
	Email     string     `json:"email"     validate:"required,email,max=150"`
	Telefone  string     `json:"telefone"  validate:"max=20"`
	Unidade   string     `json:"unidade"   validate:"required,max=10"`
	Piso      Piso       `json:"piso"      validate:"required"`
	Corredor  Corredor   `json:"corredor"  validate:"required"`
	AreaM2    int        `json:"area_m2"   validate:"required,gt=0"`
}

// AtualizarLojistaRequest é o payload para PUT /lojistas/:id
type AtualizarLojistaRequest struct {
	Nome      string     `json:"nome"        validate:"omitempty,max=100"`
	Segmento  Segmento   `json:"segmento"    validate:"omitempty"`
	Responsavel string   `json:"responsavel" validate:"omitempty,max=100"`
	Email     string     `json:"email"       validate:"omitempty,email,max=150"`
	Telefone  string     `json:"telefone"    validate:"omitempty,max=20"`
	Status    StatusLoja `json:"status"      validate:"omitempty"`
}

// CriarPropostaRequest é o payload para POST /propostas
type CriarPropostaRequest struct {
	LojistaID     *string      `json:"lojista_id"`
	LojistaNome   string       `json:"lojista_nome"   validate:"required,max=100"`
	Unidade       string       `json:"unidade"        validate:"required,max=10"`
	Segmento      Segmento     `json:"segmento"       validate:"required"`
	Tipo          TipoProposta `json:"tipo"           validate:"required"`
	ValorProposto float64      `json:"valor_proposto" validate:"required,gt=0"`
	AreaM2        int          `json:"area_m2"        validate:"required,gt=0"`
	Responsavel   string       `json:"responsavel"    validate:"required,max=100"`
	DataVencimento string      `json:"data_vencimento" validate:"required"`
	Observacoes   *string      `json:"observacoes"`
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
	Status           StatusSinistro  `json:"status"             validate:"omitempty"`
	Regulador        *string         `json:"regulador"`
	ValorIndenizacao *float64        `json:"valor_indenizacao"  validate:"omitempty,gte=0"`
	ValorFranquia    *float64        `json:"valor_franquia"     validate:"omitempty,gte=0"`
	AlertaFraude     *bool           `json:"alerta_fraude"`
}

// CriarMultaRequest é o payload para POST /lojistas/:id/multas
type CriarMultaRequest struct {
	Data      string  `json:"data"      validate:"required"`
	Tipo      string  `json:"tipo"      validate:"required,max=80"`
	Valor     float64 `json:"valor"     validate:"required,gt=0"`
	Descricao string  `json:"descricao" validate:"required"`
}
