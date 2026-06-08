// ============================================================
// handlers/propostas.go — Handlers HTTP para o recurso Proposta
// ============================================================
//
// Listar (GET /api/v1/propostas):
//
//	JOIN com Unidade para trazer piso/corredor/código.
//	JOIN com Usuario para trazer nome do responsável.
//	Filtros: id_unidade, status, segmento, piso, data_from, data_to.
//	Campos 'unidade' e 'tipo' são aliases de codigoUnidade e tipoOperacao
//	mantidos por compatibilidade com o frontend legado.
//
// Detalhe (GET /api/v1/propostas/:id):
//
//	Mesma query do Listar mas filtrada por ID.
//
// Criar (POST /api/v1/propostas):
//
//	Insere nova proposta. user_id vem do contexto Gin (injetado pelo middleware).
//	Retorna 201 Created com o ID gerado.
//
// AtualizarStatus (PATCH /api/v1/propostas/:id/status):
//
//	Atualiza status_p e opcionalmente observacoes_p.
//	Registra atualizado_em_p com time.Now().
//
// Historico, PlaceholderOK:
//
//	Historico carrega PropostaHistorico por id da proposta.
//	PlaceholderOK retorna 200 OK para sub-recursos ainda não implementados.
//
// ============================================================
package handlers

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"time"

	"go-api/internal/entities"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
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
		query += fmt.Sprintf(" AND p.id_unidade_p = $%d", i)
		args = append(args, v)
		i++
	}
	if v := c.Query("status"); v != "" {
		query += fmt.Sprintf(" AND p.status_p = $%d", i)
		args = append(args, v)
		i++
	}
	if v := c.Query("segmento"); v != "" {
		query += fmt.Sprintf(" AND p.segmento_p = $%d", i)
		args = append(args, v)
		i++
	}
	if v := c.Query("piso"); v != "" {
		query += fmt.Sprintf(" AND u.piso_un = $%d", i)
		args = append(args, v)
		i++
	}
	if v := c.Query("data_from"); v != "" {
		query += fmt.Sprintf(" AND p.data_criacao_p >= $%d", i)
		args = append(args, v)
		i++
	}
	if v := c.Query("data_to"); v != "" {
		query += fmt.Sprintf(" AND p.data_criacao_p <= $%d", i)
		args = append(args, v)
		i++
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
		IDUnidade      string  `json:"idUnidade"`
		Segmento       string  `json:"segmento"`
		TipoOperacao   string  `json:"tipoOperacao"`
		ValorProposto  float64 `json:"valorProposto"`
		Area           float64 `json:"area"`
		NomeFantasia   string  `json:"nomeFantasia"`
		DataVencimento *string `json:"dataVencimento"`
		Observacoes    string  `json:"observacoes"`
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
	ctx := context.Background()
	id := c.Param("id")

	var propostaID string
	if err := h.db.QueryRow(ctx, `
		SELECT id_p
		FROM "Proposta"
		WHERE id_p = $1
	`, id).Scan(&propostaID); err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao consultar proposta"})
		return
	}

	rows, err := h.db.Query(ctx, `
		SELECT
			id_ph, id_proposta_ph, id_usuario_ph, editado_em_ph,
			codigo_unidade_ph, segmento_ph, tipo_operacao_ph, valor_proposto_ph,
			area_ph, abl_ph, status_ph, data_criacao_ph, data_vencimento_ph,
			nome_fantasia_ph, aluguel_percent_ph, prazo_locacao_meses_ph,
			aluguel_por_m2_ph, condominio_aprox_ph, fpp_aprox_ph,
			inicio_contrato_ph, fim_contrato_ph, data_inauguracao_ph,
			observacoes_ph, atualizado_em_snapshot_ph
		FROM "PropostaHistorico"
		WHERE id_proposta_ph = $1
		ORDER BY editado_em_ph DESC
	`, propostaID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao consultar historico"})
		return
	}
	defer rows.Close()

	historicos, err := pgx.CollectRows(rows, pgx.RowToStructByName[entities.PropostaHistorico])
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao processar historico"})
		return
	}
	if historicos == nil {
		historicos = []entities.PropostaHistorico{}
	}

	c.JSON(http.StatusOK, historicos)
}

func (h *PropostasHandler) PlaceholderOK(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ok"})
}

func (h *PropostasHandler) PlaceholderList(c *gin.Context) {
	c.JSON(http.StatusOK, []any{})
}
