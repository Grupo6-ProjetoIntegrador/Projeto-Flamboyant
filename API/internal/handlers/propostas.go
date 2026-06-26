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
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"log"

	"go-api/internal/config"
	"go-api/internal/entities"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type PropostasHandler struct {
	db  *pgxpool.Pool
	cfg config.ServerConfig
}

func NewPropostasHandler(db *pgxpool.Pool, cfg config.ServerConfig) *PropostasHandler {
	return &PropostasHandler{db: db, cfg: cfg}
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

	if body.IDUnidade == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "É necessário informar idUnidade"})
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
		c.JSON(http.StatusInternalServerError, gin.H{"message": fmt.Sprintf("Erro ao criar proposta: %v", err)})
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

// === PASSO 3: DTO do Histórico ===
type PropostaHistoricoResponse struct {
	entities.PropostaHistorico
	NomeUsuario *string `json:"nomeUsuario"`
}

// === PASSO 4: Função Historico Atualizada ===
func (h *PropostasHandler) Historico(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var propostaID string
	if err := h.db.QueryRow(ctx, `SELECT id_p FROM "Proposta" WHERE id_p = $1`, id).Scan(&propostaID); err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao consultar proposta"})
		return
	}

	rows, err := h.db.Query(ctx, `
		SELECT
			ph.id_ph, ph.id_proposta_ph, ph.id_usuario_ph, u.nome_u,
			TO_CHAR(ph.editado_em_ph, 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
			ph.codigo_unidade_ph, ph.segmento_ph, ph.tipo_operacao_ph, ph.valor_proposto_ph,
			ph.area_ph, ph.abl_ph, ph.status_ph,
			TO_CHAR(ph.data_criacao_ph, 'YYYY-MM-DD'),
			TO_CHAR(ph.data_vencimento_ph, 'YYYY-MM-DD'),
			ph.nome_fantasia_ph, ph.aluguel_percent_ph, ph.prazo_locacao_meses_ph,
			ph.aluguel_por_m2_ph, ph.condominio_aprox_ph, ph.fpp_aprox_ph,
			TO_CHAR(ph.inicio_contrato_ph, 'YYYY-MM-DD'),
			TO_CHAR(ph.fim_contrato_ph, 'YYYY-MM-DD'),
			TO_CHAR(ph.data_inauguracao_ph, 'YYYY-MM-DD'),
			ph.observacoes_ph,
			TO_CHAR(ph.atualizado_em_snapshot_ph, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "PropostaHistorico" ph
		JOIN "Usuario" u ON u.id_u = ph.id_usuario_ph
		WHERE ph.id_proposta_ph = $1
		ORDER BY ph.editado_em_ph DESC
	`, propostaID)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar histórico"})
		return
	}
	defer rows.Close()

	var result []PropostaHistoricoResponse
	for rows.Next() {
		var item PropostaHistoricoResponse
		err := rows.Scan(
			&item.Id, &item.IdProposta, &item.IdUsuario, &item.NomeUsuario,
			&item.EditadoEm,
			&item.CodigoUnidade, &item.Segmento, &item.TipoOperacao, &item.ValorProposto,
			&item.Area, &item.Abl, &item.Status, &item.DataCriacao, &item.DataVencimento,
			&item.NomeFantasia, &item.AluguelPercent, &item.PrazoLocacaoMeses,
			&item.AluguelPorM2, &item.CondominioAprox, &item.FppAprox,
			&item.InicioContrato, &item.FimContrato, &item.DataInauguracao,
			&item.Observacoes, &item.AtualizadoEmSnapshot,
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao ler histórico"})
			return
		}
		result = append(result, item)
	}

	// Se for nil (vazio), retorna um array vazio ao invés de null para o frontend
	if result == nil {
		result = []PropostaHistoricoResponse{}
	}

	c.JSON(http.StatusOK, result)
}

func (h *PropostasHandler) GetLojaAnterior(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var exists bool
	if err := h.db.QueryRow(ctx,
		`SELECT EXISTS(SELECT 1 FROM "Proposta" WHERE id_p = $1)`, id,
	).Scan(&exists); err != nil || !exists {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}

	var la entities.PropostaLojaAnterior
	err := h.db.QueryRow(ctx, `
		SELECT id_proposta_pla, nome_fantasia_pla, segmento_pla, tipo_operacao_pla,
		       cto_pla, abl_pla, amm_pla,
		       divida_amm_pla, divida_negociada_pla, divida_condominio_pla, divida_fpp_pla,
		       forma_pagamento_pla
		FROM "PropostaLojaAnterior"
		WHERE id_proposta_pla = $1
	`, id).Scan(
		&la.IdProposta, &la.NomeFantasia, &la.Segmento, &la.TipoOperacao,
		&la.Cto, &la.Abl, &la.Amm,
		&la.DividaAmm, &la.DividaNegociada, &la.DividaCondominio, &la.DividaFpp,
		&la.FormaPagamento,
	)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusOK, nil)
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar loja anterior"})
		return
	}

	c.JSON(http.StatusOK, la)
}

func (h *PropostasHandler) SalvarLojaAnterior(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")
	userID := c.GetString("user_id")

	type propostaSnap struct {
		codigoUnidade   string
		segmento        string
		tipoOperacao    string
		valorProposto   float64
		area            float64
		abl             *float64
		status          string
		dataCriacao     string
		dataVencimento  *string
		nomeFantasia    *string
		aluguelPercent  *float64
		prazoLocacao    *int
		aluguelPorM2    *float64
		condominioAprox *float64
		fppAprox        *float64
		inicioContrato  *string
		fimContrato     *string
		dataInauguracao *string
		observacoes     *string
		atualizadoEm    *string
	}

	var snap propostaSnap
	err := h.db.QueryRow(ctx, `
		SELECT
			u.codigo_un,
			p.segmento_p, p.tipo_operacao_p,
			p.valor_proposto_p, p.area_p, p.abl_p, p.status_p,
			TO_CHAR(p.data_criacao_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_vencimento_p, 'YYYY-MM-DD'),
			p.nome_fantasia_p, p.aluguel_percent_p, p.prazo_locacao_meses_p,
			p.aluguel_por_m2_p, p.condominio_aprox_p, p.fpp_aprox_p,
			TO_CHAR(p.inicio_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.fim_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_inauguracao_p, 'YYYY-MM-DD'),
			p.observacoes_p,
			TO_CHAR(p.atualizado_em_p, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "Proposta" p
		JOIN "Unidade" u ON u.id_un = p.id_unidade_p
		WHERE p.id_p = $1
	`, id).Scan(
		&snap.codigoUnidade, &snap.segmento, &snap.tipoOperacao,
		&snap.valorProposto, &snap.area, &snap.abl, &snap.status,
		&snap.dataCriacao, &snap.dataVencimento, &snap.nomeFantasia,
		&snap.aluguelPercent, &snap.prazoLocacao, &snap.aluguelPorM2,
		&snap.condominioAprox, &snap.fppAprox,
		&snap.inicioContrato, &snap.fimContrato, &snap.dataInauguracao,
		&snap.observacoes, &snap.atualizadoEm,
	)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}

	var body struct {
		NomeFantasia     *string  `json:"nomeFantasia"`
		Segmento         *string  `json:"segmento"`
		TipoOperacao     *string  `json:"tipoOperacao"`
		Cto              *float64 `json:"cto"`
		Abl              *float64 `json:"abl"`
		Amm              *float64 `json:"amm"`
		DividaAmm        *float64 `json:"dividaAmm"`
		DividaNegociada  *float64 `json:"dividaNegociada"`
		DividaCondominio *float64 `json:"dividaCondominio"`
		DividaFpp        *float64 `json:"dividaFpp"`
		FormaPagamento   *string  `json:"formaPagamento"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados inválidos"})
		return
	}

	tx, err := h.db.Begin(ctx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao iniciar transação"})
		return
	}
	defer tx.Rollback(ctx)

	var idPH string
	err = tx.QueryRow(ctx, `
		INSERT INTO "PropostaHistorico" (
			id_proposta_ph, id_usuario_ph, editado_em_ph,
			codigo_unidade_ph, segmento_ph, tipo_operacao_ph,
			valor_proposto_ph, area_ph, abl_ph, status_ph,
			data_criacao_ph, data_vencimento_ph, nome_fantasia_ph,
			aluguel_percent_ph, prazo_locacao_meses_ph, aluguel_por_m2_ph,
			condominio_aprox_ph, fpp_aprox_ph,
			inicio_contrato_ph, fim_contrato_ph, data_inauguracao_ph,
			observacoes_ph, atualizado_em_snapshot_ph
		) VALUES (
			$1,$2,NOW(),$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22
		) RETURNING id_ph
	`,
		id, userID,
		snap.codigoUnidade, snap.segmento, snap.tipoOperacao,
		snap.valorProposto, snap.area, snap.abl, snap.status,
		snap.dataCriacao, snap.dataVencimento, snap.nomeFantasia,
		snap.aluguelPercent, snap.prazoLocacao, snap.aluguelPorM2,
		snap.condominioAprox, snap.fppAprox,
		snap.inicioContrato, snap.fimContrato, snap.dataInauguracao,
		snap.observacoes, snap.atualizadoEm,
	).Scan(&idPH)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaLojaAnterior" (
			id_proposta_pla, nome_fantasia_pla, segmento_pla, tipo_operacao_pla,
			cto_pla, abl_pla, amm_pla,
			divida_amm_pla, divida_negociada_pla, divida_condominio_pla, divida_fpp_pla,
			forma_pagamento_pla
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
		ON CONFLICT (id_proposta_pla) DO UPDATE SET
			nome_fantasia_pla     = EXCLUDED.nome_fantasia_pla,
			segmento_pla          = EXCLUDED.segmento_pla,
			tipo_operacao_pla     = EXCLUDED.tipo_operacao_pla,
			cto_pla               = EXCLUDED.cto_pla,
			abl_pla               = EXCLUDED.abl_pla,
			amm_pla               = EXCLUDED.amm_pla,
			divida_amm_pla        = EXCLUDED.divida_amm_pla,
			divida_negociada_pla  = EXCLUDED.divida_negociada_pla,
			divida_condominio_pla = EXCLUDED.divida_condominio_pla,
			divida_fpp_pla        = EXCLUDED.divida_fpp_pla,
			forma_pagamento_pla   = EXCLUDED.forma_pagamento_pla
	`,
		id,
		body.NomeFantasia, body.Segmento, body.TipoOperacao,
		body.Cto, body.Abl, body.Amm,
		body.DividaAmm, body.DividaNegociada, body.DividaCondominio, body.DividaFpp,
		body.FormaPagamento,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao salvar loja anterior"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaLojaAnteriorHistorico" (
			id_historico_plah,
			nome_fantasia_plah, segmento_plah, tipo_operacao_plah,
			cto_plah, abl_plah, amm_plah,
			divida_amm_plah, divida_negociada_plah, divida_condominio_plah, divida_fpp_plah,
			forma_pagamento_plah
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
	`,
		idPH,
		body.NomeFantasia, body.Segmento, body.TipoOperacao,
		body.Cto, body.Abl, body.Amm,
		body.DividaAmm, body.DividaNegociada, body.DividaCondominio, body.DividaFpp,
		body.FormaPagamento,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico da loja anterior"})
		return
	}

	if err := tx.Commit(ctx); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao confirmar transação"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Loja anterior salva com sucesso"})
}

func (h *PropostasHandler) GetNecessidadesTecnicas(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var exists bool
	if err := h.db.QueryRow(ctx,
		`SELECT EXISTS(SELECT 1 FROM "Proposta" WHERE id_p = $1)`, id,
	).Scan(&exists); err != nil || !exists {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}

	var nt entities.PropostaNecessidadesTecnicas
	err := h.db.QueryRow(ctx, `
		SELECT id_proposta_pnt,
		       demanda_eletrica_kva_pnt, tensao_necessaria_pnt, circuitos_especiais_pnt, obs_eletrica_pnt,
		       ponto_agua_pnt, quantidade_pontos_agua_pnt, ponto_esgoto_pnt, vazao_necessaria_lmin_pnt,
		       caixa_gordura_pnt, obs_hidraulica_pnt,
		       necessita_gas_pnt, tipo_gas_pnt, consumo_gas_m3h_pnt, obs_gas_pnt,
		       necessita_exaustao_pnt, vazao_exaustao_m3h_pnt, necessita_make_up_ar_pnt, obs_ventilacao_pnt,
		       area_minima_m2_pnt, area_maxima_m2_pnt, pe_direito_minimo_m_pnt,
		       carga_piso_kgm2_pnt, necessita_mezanino_pnt, obs_estrutura_pnt,
		       frente_minima_m_pnt, tipo_fachada_pnt, comunicacao_visual_led_pnt, obs_fachada_pnt,
		       pontos_dados_pnt, necessita_fibra_pnt, obs_telecom_pnt,
		       status_pnt, id_usuario_responsavel_pnt::text,
		       TO_CHAR(criado_em_pnt, 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
		       TO_CHAR(atualizado_em_pnt, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "PropostaNecessidadesTecnicas"
		WHERE id_proposta_pnt = $1
	`, id).Scan(
		&nt.IdProposta,
		&nt.DemandaEletricaKva, &nt.TensaoNecessaria, &nt.CircuitosEspeciais, &nt.ObsEletrica,
		&nt.PontoAgua, &nt.QuantidadePontosAgua, &nt.PontoEsgoto, &nt.VazaoNecessariaLmin,
		&nt.CaixaGordura, &nt.ObsHidraulica,
		&nt.NecessitaGas, &nt.TipoGas, &nt.ConsumoGasM3h, &nt.ObsGas,
		&nt.NecessitaExaustao, &nt.VazaoExaustaoM3h, &nt.NecessitaMakeUpAr, &nt.ObsVentilacao,
		&nt.AreaMinimaM2, &nt.AreaMaximaM2, &nt.PeDireitoMinimoM,
		&nt.CargaPisoKgm2, &nt.NecessitaMezanino, &nt.ObsEstrutura,
		&nt.FrenteMinimaM, &nt.TipoFachada, &nt.ComunicacaoVisualLed, &nt.ObsFachada,
		&nt.PontosDados, &nt.NecessitaFibra, &nt.ObsTelecom,
		&nt.Status, &nt.IdUsuarioResponsavel,
		&nt.CriadoEm, &nt.AtualizadoEm,
	)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusOK, nil)
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar necessidades técnicas"})
		return
	}

	c.JSON(http.StatusOK, nt)
}

func (h *PropostasHandler) SalvarNecessidadesTecnicas(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")
	userID := c.GetString("user_id")

	type propostaSnap struct {
		codigoUnidade   string
		segmento        string
		tipoOperacao    string
		valorProposto   float64
		area            float64
		abl             *float64
		status          string
		dataCriacao     string
		dataVencimento  *string
		nomeFantasia    *string
		aluguelPercent  *float64
		prazoLocacao    *int
		aluguelPorM2    *float64
		condominioAprox *float64
		fppAprox        *float64
		inicioContrato  *string
		fimContrato     *string
		dataInauguracao *string
		observacoes     *string
		atualizadoEm    *string
	}

	var snap propostaSnap
	err := h.db.QueryRow(ctx, `
		SELECT
			u.codigo_un,
			p.segmento_p, p.tipo_operacao_p,
			p.valor_proposto_p, p.area_p, p.abl_p, p.status_p,
			TO_CHAR(p.data_criacao_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_vencimento_p, 'YYYY-MM-DD'),
			p.nome_fantasia_p, p.aluguel_percent_p, p.prazo_locacao_meses_p,
			p.aluguel_por_m2_p, p.condominio_aprox_p, p.fpp_aprox_p,
			TO_CHAR(p.inicio_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.fim_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_inauguracao_p, 'YYYY-MM-DD'),
			p.observacoes_p,
			TO_CHAR(p.atualizado_em_p, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "Proposta" p
		JOIN "Unidade" u ON u.id_un = p.id_unidade_p
		WHERE p.id_p = $1
	`, id).Scan(
		&snap.codigoUnidade, &snap.segmento, &snap.tipoOperacao,
		&snap.valorProposto, &snap.area, &snap.abl, &snap.status,
		&snap.dataCriacao, &snap.dataVencimento, &snap.nomeFantasia,
		&snap.aluguelPercent, &snap.prazoLocacao, &snap.aluguelPorM2,
		&snap.condominioAprox, &snap.fppAprox,
		&snap.inicioContrato, &snap.fimContrato, &snap.dataInauguracao,
		&snap.observacoes, &snap.atualizadoEm,
	)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}

	var body struct {
		DemandaEletricaKva   *float64 `json:"demandaEletricaKva"`
		TensaoNecessaria     *string  `json:"tensaoNecessaria"`
		CircuitosEspeciais   *bool    `json:"circuitosEspeciais"`
		ObsEletrica          *string  `json:"obsEletrica"`
		PontoAgua            *bool    `json:"pontoAgua"`
		QuantidadePontosAgua *int     `json:"quantidadePontosAgua"`
		PontoEsgoto          *bool    `json:"pontoEsgoto"`
		VazaoNecessariaLmin  *float64 `json:"vazaoNecessariaLmin"`
		CaixaGordura         *bool    `json:"caixaGordura"`
		ObsHidraulica        *string  `json:"obsHidraulica"`
		NecessitaGas         *bool    `json:"necessitaGas"`
		TipoGas              *string  `json:"tipoGas"`
		ConsumoGasM3h        *float64 `json:"consumoGasM3h"`
		ObsGas               *string  `json:"obsGas"`
		NecessitaExaustao    *bool    `json:"necessitaExaustao"`
		VazaoExaustaoM3h     *float64 `json:"vazaoExaustaoM3h"`
		NecessitaMakeUpAr    *bool    `json:"necessitaMakeUpAr"`
		ObsVentilacao        *string  `json:"obsVentilacao"`
		AreaMinimaM2         *float64 `json:"areaMinimaM2"`
		AreaMaximaM2         *float64 `json:"areaMaximaM2"`
		PeDireitoMinimoM     *float64 `json:"peDireitoMinimoM"`
		CargaPisoKgm2        *float64 `json:"cargaPisoKgm2"`
		NecessitaMezanino    *bool    `json:"necessitaMezanino"`
		ObsEstrutura         *string  `json:"obsEstrutura"`
		FrenteMinimaM        *float64 `json:"frenteMinimaM"`
		TipoFachada          *string  `json:"tipoFachada"`
		ComunicacaoVisualLed *bool    `json:"comunicacaoVisualLed"`
		ObsFachada           *string  `json:"obsFachada"`
		PontosDados          *int     `json:"pontosDados"`
		NecessitaFibra       *bool    `json:"necessitaFibra"`
		ObsTelecom           *string  `json:"obsTelecom"`
		Status               *string  `json:"status"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados inválidos"})
		return
	}

	boolVal := func(p *bool) bool {
		if p == nil {
			return false
		}
		return *p
	}

	circuitosEspeciais := boolVal(body.CircuitosEspeciais)
	pontoAgua := boolVal(body.PontoAgua)
	pontoEsgoto := boolVal(body.PontoEsgoto)
	caixaGordura := boolVal(body.CaixaGordura)
	necessitaGas := boolVal(body.NecessitaGas)
	necessitaExaustao := boolVal(body.NecessitaExaustao)
	necessitaMakeUpAr := boolVal(body.NecessitaMakeUpAr)
	necessitaMezanino := boolVal(body.NecessitaMezanino)
	comunicacaoVisualLed := boolVal(body.ComunicacaoVisualLed)
	necessitaFibra := boolVal(body.NecessitaFibra)

	tx, err := h.db.Begin(ctx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao iniciar transação"})
		return
	}
	defer tx.Rollback(ctx)

	var idPH string
	err = tx.QueryRow(ctx, `
		INSERT INTO "PropostaHistorico" (
			id_proposta_ph, id_usuario_ph, editado_em_ph,
			codigo_unidade_ph, segmento_ph, tipo_operacao_ph,
			valor_proposto_ph, area_ph, abl_ph, status_ph,
			data_criacao_ph, data_vencimento_ph, nome_fantasia_ph,
			aluguel_percent_ph, prazo_locacao_meses_ph, aluguel_por_m2_ph,
			condominio_aprox_ph, fpp_aprox_ph,
			inicio_contrato_ph, fim_contrato_ph, data_inauguracao_ph,
			observacoes_ph, atualizado_em_snapshot_ph
		) VALUES (
			$1,$2,NOW(),$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22
		) RETURNING id_ph
	`,
		id, userID,
		snap.codigoUnidade, snap.segmento, snap.tipoOperacao,
		snap.valorProposto, snap.area, snap.abl, snap.status,
		snap.dataCriacao, snap.dataVencimento, snap.nomeFantasia,
		snap.aluguelPercent, snap.prazoLocacao, snap.aluguelPorM2,
		snap.condominioAprox, snap.fppAprox,
		snap.inicioContrato, snap.fimContrato, snap.dataInauguracao,
		snap.observacoes, snap.atualizadoEm,
	).Scan(&idPH)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaNecessidadesTecnicas" (
			id_proposta_pnt,
			demanda_eletrica_kva_pnt, tensao_necessaria_pnt, circuitos_especiais_pnt, obs_eletrica_pnt,
			ponto_agua_pnt, quantidade_pontos_agua_pnt, ponto_esgoto_pnt, vazao_necessaria_lmin_pnt,
			caixa_gordura_pnt, obs_hidraulica_pnt,
			necessita_gas_pnt, tipo_gas_pnt, consumo_gas_m3h_pnt, obs_gas_pnt,
			necessita_exaustao_pnt, vazao_exaustao_m3h_pnt, necessita_make_up_ar_pnt, obs_ventilacao_pnt,
			area_minima_m2_pnt, area_maxima_m2_pnt, pe_direito_minimo_m_pnt,
			carga_piso_kgm2_pnt, necessita_mezanino_pnt, obs_estrutura_pnt,
			frente_minima_m_pnt, tipo_fachada_pnt, comunicacao_visual_led_pnt, obs_fachada_pnt,
			pontos_dados_pnt, necessita_fibra_pnt, obs_telecom_pnt,
			status_pnt, id_usuario_responsavel_pnt,
			criado_em_pnt
		) VALUES (
			$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,NOW()
		) ON CONFLICT (id_proposta_pnt) DO UPDATE SET
			demanda_eletrica_kva_pnt   = EXCLUDED.demanda_eletrica_kva_pnt,
			tensao_necessaria_pnt      = EXCLUDED.tensao_necessaria_pnt,
			circuitos_especiais_pnt    = EXCLUDED.circuitos_especiais_pnt,
			obs_eletrica_pnt           = EXCLUDED.obs_eletrica_pnt,
			ponto_agua_pnt             = EXCLUDED.ponto_agua_pnt,
			quantidade_pontos_agua_pnt = EXCLUDED.quantidade_pontos_agua_pnt,
			ponto_esgoto_pnt           = EXCLUDED.ponto_esgoto_pnt,
			vazao_necessaria_lmin_pnt  = EXCLUDED.vazao_necessaria_lmin_pnt,
			caixa_gordura_pnt          = EXCLUDED.caixa_gordura_pnt,
			obs_hidraulica_pnt         = EXCLUDED.obs_hidraulica_pnt,
			necessita_gas_pnt          = EXCLUDED.necessita_gas_pnt,
			tipo_gas_pnt               = EXCLUDED.tipo_gas_pnt,
			consumo_gas_m3h_pnt        = EXCLUDED.consumo_gas_m3h_pnt,
			obs_gas_pnt                = EXCLUDED.obs_gas_pnt,
			necessita_exaustao_pnt     = EXCLUDED.necessita_exaustao_pnt,
			vazao_exaustao_m3h_pnt     = EXCLUDED.vazao_exaustao_m3h_pnt,
			necessita_make_up_ar_pnt   = EXCLUDED.necessita_make_up_ar_pnt,
			obs_ventilacao_pnt         = EXCLUDED.obs_ventilacao_pnt,
			area_minima_m2_pnt         = EXCLUDED.area_minima_m2_pnt,
			area_maxima_m2_pnt         = EXCLUDED.area_maxima_m2_pnt,
			pe_direito_minimo_m_pnt    = EXCLUDED.pe_direito_minimo_m_pnt,
			carga_piso_kgm2_pnt        = EXCLUDED.carga_piso_kgm2_pnt,
			necessita_mezanino_pnt     = EXCLUDED.necessita_mezanino_pnt,
			obs_estrutura_pnt          = EXCLUDED.obs_estrutura_pnt,
			frente_minima_m_pnt        = EXCLUDED.frente_minima_m_pnt,
			tipo_fachada_pnt           = EXCLUDED.tipo_fachada_pnt,
			comunicacao_visual_led_pnt = EXCLUDED.comunicacao_visual_led_pnt,
			obs_fachada_pnt            = EXCLUDED.obs_fachada_pnt,
			pontos_dados_pnt           = EXCLUDED.pontos_dados_pnt,
			necessita_fibra_pnt        = EXCLUDED.necessita_fibra_pnt,
			obs_telecom_pnt            = EXCLUDED.obs_telecom_pnt,
			status_pnt                 = EXCLUDED.status_pnt,
			id_usuario_responsavel_pnt = EXCLUDED.id_usuario_responsavel_pnt,
			atualizado_em_pnt          = NOW()
	`,
		id,
		body.DemandaEletricaKva, body.TensaoNecessaria, circuitosEspeciais, body.ObsEletrica,
		pontoAgua, body.QuantidadePontosAgua, pontoEsgoto, body.VazaoNecessariaLmin,
		caixaGordura, body.ObsHidraulica,
		necessitaGas, body.TipoGas, body.ConsumoGasM3h, body.ObsGas,
		necessitaExaustao, body.VazaoExaustaoM3h, necessitaMakeUpAr, body.ObsVentilacao,
		body.AreaMinimaM2, body.AreaMaximaM2, body.PeDireitoMinimoM,
		body.CargaPisoKgm2, necessitaMezanino, body.ObsEstrutura,
		body.FrenteMinimaM, body.TipoFachada, comunicacaoVisualLed, body.ObsFachada,
		body.PontosDados, necessitaFibra, body.ObsTelecom,
		body.Status, userID,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao salvar necessidades técnicas"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaNecessidadesTecnicasHistorico" (
			id_historico_pnth,
			demanda_eletrica_kva_pnth, tensao_necessaria_pnth, circuitos_especiais_pnth, obs_eletrica_pnth,
			ponto_agua_pnth, quantidade_pontos_agua_pnth, ponto_esgoto_pnth, vazao_necessaria_lmin_pnth,
			caixa_gordura_pnth, obs_hidraulica_pnth,
			necessita_gas_pnth, tipo_gas_pnth, consumo_gas_m3h_pnth, obs_gas_pnth,
			necessita_exaustao_pnth, vazao_exaustao_m3h_pnth, necessita_make_up_ar_pnth, obs_ventilacao_pnth,
			area_minima_m2_pnth, area_maxima_m2_pnth, pe_direito_minimo_m_pnth,
			carga_piso_kgm2_pnth, necessita_mezanino_pnth, obs_estrutura_pnth,
			frente_minima_m_pnth, tipo_fachada_pnth, comunicacao_visual_led_pnth, obs_fachada_pnth,
			pontos_dados_pnth, necessita_fibra_pnth, obs_telecom_pnth,
			status_pnth, id_usuario_responsavel_pnth,
			criado_em_pnth, atualizado_em_pnth
		) VALUES (
			$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,NOW(),NOW()
		)
	`,
		idPH,
		body.DemandaEletricaKva, body.TensaoNecessaria, circuitosEspeciais, body.ObsEletrica,
		pontoAgua, body.QuantidadePontosAgua, pontoEsgoto, body.VazaoNecessariaLmin,
		caixaGordura, body.ObsHidraulica,
		necessitaGas, body.TipoGas, body.ConsumoGasM3h, body.ObsGas,
		necessitaExaustao, body.VazaoExaustaoM3h, necessitaMakeUpAr, body.ObsVentilacao,
		body.AreaMinimaM2, body.AreaMaximaM2, body.PeDireitoMinimoM,
		body.CargaPisoKgm2, necessitaMezanino, body.ObsEstrutura,
		body.FrenteMinimaM, body.TipoFachada, comunicacaoVisualLed, body.ObsFachada,
		body.PontosDados, necessitaFibra, body.ObsTelecom,
		body.Status, userID,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico de necessidades técnicas"})
		return
	}

	if err := tx.Commit(ctx); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao confirmar transação"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Necessidades técnicas salvas com sucesso"})
}

func (h *PropostasHandler) GetCessaoDireitos(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var tipoOperacao string
	err := h.db.QueryRow(ctx,
		`SELECT tipo_operacao_p FROM "Proposta" WHERE id_p = $1`, id,
	).Scan(&tipoOperacao)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar proposta"})
		return
	}

	if tipoOperacao != "Cessão" && tipoOperacao != "Transferência" {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"message": "Operação não permite cessão de direitos"})
		return
	}

	var cd entities.PropostaCessaoDireitos
	err = h.db.QueryRow(ctx, `
		SELECT id_proposta_pcd,
		       res_sperata_proposta_pcd, referencia_mercado_por_m2_pcd,
		       sinal_res_sperata_pcd, forma_pagamento_saldo_pcd, num_parcelas_pcd,
		       status_res_sperata_pcd, observacoes_pcd
		FROM "PropostaCessaoDireitos"
		WHERE id_proposta_pcd = $1
	`, id).Scan(
		&cd.IdProposta,
		&cd.ResSperataProposta, &cd.ReferenciaMercadoPorM2,
		&cd.SinalResSperata, &cd.FormaPagamentoSaldo, &cd.NumParcelas,
		&cd.StatusResSperata, &cd.Observacoes,
	)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusOK, nil)
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar cessão de direitos"})
		return
	}

	c.JSON(http.StatusOK, cd)
}

func (h *PropostasHandler) SalvarCessaoDireitos(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")
	userID := c.GetString("user_id")

	type propostaSnap struct {
		codigoUnidade   string
		segmento        string
		tipoOperacao    string
		valorProposto   float64
		area            float64
		abl             *float64
		status          string
		dataCriacao     string
		dataVencimento  *string
		nomeFantasia    *string
		aluguelPercent  *float64
		prazoLocacao    *int
		aluguelPorM2    *float64
		condominioAprox *float64
		fppAprox        *float64
		inicioContrato  *string
		fimContrato     *string
		dataInauguracao *string
		observacoes     *string
		atualizadoEm    *string
	}

	var snap propostaSnap
	err := h.db.QueryRow(ctx, `
		SELECT
			u.codigo_un,
			p.segmento_p, p.tipo_operacao_p,
			p.valor_proposto_p, p.area_p, p.abl_p, p.status_p,
			TO_CHAR(p.data_criacao_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_vencimento_p, 'YYYY-MM-DD'),
			p.nome_fantasia_p, p.aluguel_percent_p, p.prazo_locacao_meses_p,
			p.aluguel_por_m2_p, p.condominio_aprox_p, p.fpp_aprox_p,
			TO_CHAR(p.inicio_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.fim_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_inauguracao_p, 'YYYY-MM-DD'),
			p.observacoes_p,
			TO_CHAR(p.atualizado_em_p, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "Proposta" p
		JOIN "Unidade" u ON u.id_un = p.id_unidade_p
		WHERE p.id_p = $1
	`, id).Scan(
		&snap.codigoUnidade, &snap.segmento, &snap.tipoOperacao,
		&snap.valorProposto, &snap.area, &snap.abl, &snap.status,
		&snap.dataCriacao, &snap.dataVencimento, &snap.nomeFantasia,
		&snap.aluguelPercent, &snap.prazoLocacao, &snap.aluguelPorM2,
		&snap.condominioAprox, &snap.fppAprox,
		&snap.inicioContrato, &snap.fimContrato, &snap.dataInauguracao,
		&snap.observacoes, &snap.atualizadoEm,
	)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}

	if snap.tipoOperacao != "Cessão" && snap.tipoOperacao != "Transferência" {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"message": "Operação não permite cessão de direitos"})
		return
	}

	var body struct {
		ResSperataProposta     *float64 `json:"resSperataProposta"`
		ReferenciaMercadoPorM2 *float64 `json:"referenciaMercadoPorM2"`
		SinalResSperata        *float64 `json:"sinalResSperata"`
		FormaPagamentoSaldo    *string  `json:"formaPagamentoSaldo"`
		NumParcelas            *int     `json:"numParcelas"`
		StatusResSperata       *string  `json:"statusResSperata"`
		Observacoes            *string  `json:"observacoes"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados inválidos"})
		return
	}

	tx, err := h.db.Begin(ctx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao iniciar transação"})
		return
	}
	defer tx.Rollback(ctx)

	var idPH string
	err = tx.QueryRow(ctx, `
		INSERT INTO "PropostaHistorico" (
			id_proposta_ph, id_usuario_ph, editado_em_ph,
			codigo_unidade_ph, segmento_ph, tipo_operacao_ph,
			valor_proposto_ph, area_ph, abl_ph, status_ph,
			data_criacao_ph, data_vencimento_ph, nome_fantasia_ph,
			aluguel_percent_ph, prazo_locacao_meses_ph, aluguel_por_m2_ph,
			condominio_aprox_ph, fpp_aprox_ph,
			inicio_contrato_ph, fim_contrato_ph, data_inauguracao_ph,
			observacoes_ph, atualizado_em_snapshot_ph
		) VALUES (
			$1,$2,NOW(),$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22
		) RETURNING id_ph
	`,
		id, userID,
		snap.codigoUnidade, snap.segmento, snap.tipoOperacao,
		snap.valorProposto, snap.area, snap.abl, snap.status,
		snap.dataCriacao, snap.dataVencimento, snap.nomeFantasia,
		snap.aluguelPercent, snap.prazoLocacao, snap.aluguelPorM2,
		snap.condominioAprox, snap.fppAprox,
		snap.inicioContrato, snap.fimContrato, snap.dataInauguracao,
		snap.observacoes, snap.atualizadoEm,
	).Scan(&idPH)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaCessaoDireitos" (
			id_proposta_pcd,
			res_sperata_proposta_pcd, referencia_mercado_por_m2_pcd,
			sinal_res_sperata_pcd, forma_pagamento_saldo_pcd, num_parcelas_pcd,
			status_res_sperata_pcd, observacoes_pcd
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
		ON CONFLICT (id_proposta_pcd) DO UPDATE SET
			res_sperata_proposta_pcd      = EXCLUDED.res_sperata_proposta_pcd,
			referencia_mercado_por_m2_pcd = EXCLUDED.referencia_mercado_por_m2_pcd,
			sinal_res_sperata_pcd         = EXCLUDED.sinal_res_sperata_pcd,
			forma_pagamento_saldo_pcd     = EXCLUDED.forma_pagamento_saldo_pcd,
			num_parcelas_pcd              = EXCLUDED.num_parcelas_pcd,
			status_res_sperata_pcd        = EXCLUDED.status_res_sperata_pcd,
			observacoes_pcd               = EXCLUDED.observacoes_pcd
	`,
		id,
		body.ResSperataProposta, body.ReferenciaMercadoPorM2,
		body.SinalResSperata, body.FormaPagamentoSaldo, body.NumParcelas,
		body.StatusResSperata, body.Observacoes,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao salvar cessão de direitos"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaCessaoDireitosHistorico" (
			id_historico_pcdh,
			res_sperata_proposta_pcdh, referencia_mercado_por_m2_pcdh,
			sinal_res_sperata_pcdh, forma_pagamento_saldo_pcdh, num_parcelas_pcdh,
			status_res_sperata_pcdh, observacoes_pcdh
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
	`,
		idPH,
		body.ResSperataProposta, body.ReferenciaMercadoPorM2,
		body.SinalResSperata, body.FormaPagamentoSaldo, body.NumParcelas,
		body.StatusResSperata, body.Observacoes,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico da cessão de direitos"})
		return
	}

	if err := tx.Commit(ctx); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao confirmar transação"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Cessão de direitos salva com sucesso"})
}

func (h *PropostasHandler) GetParecerComite(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var status string
	err := h.db.QueryRow(ctx,
		`SELECT status_p FROM "Proposta" WHERE id_p = $1`, id,
	).Scan(&status)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar proposta"})
		return
	}

	if status != "Aguardando análise do comitê" {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"message": "Parecer disponível apenas para propostas aguardando análise do comitê"})
		return
	}

	var pc entities.PropostaParecerComite
	err = h.db.QueryRow(ctx, `
		SELECT id_proposta_ppc,
		       presidente_ppc, presidente_data_ppc,
		       diretoria_comp1_ppc, diretoria_comp1_data_ppc,
		       diretoria_comp2_ppc, diretoria_comp2_data_ppc,
		       superintendente_ppc, superintendente_data_ppc,
		       in_networking_ppc, in_networking_data_ppc
		FROM "PropostaParecerComite"
		WHERE id_proposta_ppc = $1
	`, id).Scan(
		&pc.IdProposta,
		&pc.Presidente, &pc.PresidenteData,
		&pc.DiretoriaComp1, &pc.DiretoriaComp1Data,
		&pc.DiretoriaComp2, &pc.DiretoriaComp2Data,
		&pc.Superintendente, &pc.SuperintendenteData,
		&pc.InNetworking, &pc.InNetworkingData,
	)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusOK, nil)
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar parecer do comitê"})
		return
	}

	c.JSON(http.StatusOK, pc)
}

func (h *PropostasHandler) SalvarParecerComite(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")
	userID := c.GetString("user_id")

	type propostaSnap struct {
		codigoUnidade   string
		segmento        string
		tipoOperacao    string
		valorProposto   float64
		area            float64
		abl             *float64
		status          string
		dataCriacao     string
		dataVencimento  *string
		nomeFantasia    *string
		aluguelPercent  *float64
		prazoLocacao    *int
		aluguelPorM2    *float64
		condominioAprox *float64
		fppAprox        *float64
		inicioContrato  *string
		fimContrato     *string
		dataInauguracao *string
		observacoes     *string
		atualizadoEm    *string
	}

	var snap propostaSnap
	err := h.db.QueryRow(ctx, `
		SELECT
			u.codigo_un,
			p.segmento_p, p.tipo_operacao_p,
			p.valor_proposto_p, p.area_p, p.abl_p, p.status_p,
			TO_CHAR(p.data_criacao_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_vencimento_p, 'YYYY-MM-DD'),
			p.nome_fantasia_p, p.aluguel_percent_p, p.prazo_locacao_meses_p,
			p.aluguel_por_m2_p, p.condominio_aprox_p, p.fpp_aprox_p,
			TO_CHAR(p.inicio_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.fim_contrato_p, 'YYYY-MM-DD'),
			TO_CHAR(p.data_inauguracao_p, 'YYYY-MM-DD'),
			p.observacoes_p,
			TO_CHAR(p.atualizado_em_p, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "Proposta" p
		JOIN "Unidade" u ON u.id_un = p.id_unidade_p
		WHERE p.id_p = $1
	`, id).Scan(
		&snap.codigoUnidade, &snap.segmento, &snap.tipoOperacao,
		&snap.valorProposto, &snap.area, &snap.abl, &snap.status,
		&snap.dataCriacao, &snap.dataVencimento, &snap.nomeFantasia,
		&snap.aluguelPercent, &snap.prazoLocacao, &snap.aluguelPorM2,
		&snap.condominioAprox, &snap.fppAprox,
		&snap.inicioContrato, &snap.fimContrato, &snap.dataInauguracao,
		&snap.observacoes, &snap.atualizadoEm,
	)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}

	if snap.status != "Aguardando análise do comitê" {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"message": "Parecer disponível apenas para propostas aguardando análise do comitê"})
		return
	}

	var body struct {
		Presidente          *bool   `json:"presidente"`
		PresidenteData      *string `json:"presidenteData"`
		DiretoriaComp1      *bool   `json:"diretoriaComp1"`
		DiretoriaComp1Data  *string `json:"diretoriaComp1Data"`
		DiretoriaComp2      *bool   `json:"diretoriaComp2"`
		DiretoriaComp2Data  *string `json:"diretoriaComp2Data"`
		Superintendente     *bool   `json:"superintendente"`
		SuperintendenteData *string `json:"superintendenteData"`
		InNetworking        *bool   `json:"inNetworking"`
		InNetworkingData    *string `json:"inNetworkingData"`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados inválidos"})
		return
	}

	boolVal := func(p *bool) bool {
		if p == nil {
			return false
		}
		return *p
	}

	presidente := boolVal(body.Presidente)
	diretoriaComp1 := boolVal(body.DiretoriaComp1)
	diretoriaComp2 := boolVal(body.DiretoriaComp2)
	superintendente := boolVal(body.Superintendente)
	inNetworking := boolVal(body.InNetworking)

	tx, err := h.db.Begin(ctx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao iniciar transação"})
		return
	}
	defer tx.Rollback(ctx)

	var idPH string
	err = tx.QueryRow(ctx, `
		INSERT INTO "PropostaHistorico" (
			id_proposta_ph, id_usuario_ph, editado_em_ph,
			codigo_unidade_ph, segmento_ph, tipo_operacao_ph,
			valor_proposto_ph, area_ph, abl_ph, status_ph,
			data_criacao_ph, data_vencimento_ph, nome_fantasia_ph,
			aluguel_percent_ph, prazo_locacao_meses_ph, aluguel_por_m2_ph,
			condominio_aprox_ph, fpp_aprox_ph,
			inicio_contrato_ph, fim_contrato_ph, data_inauguracao_ph,
			observacoes_ph, atualizado_em_snapshot_ph
		) VALUES (
			$1,$2,NOW(),$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22
		) RETURNING id_ph
	`,
		id, userID,
		snap.codigoUnidade, snap.segmento, snap.tipoOperacao,
		snap.valorProposto, snap.area, snap.abl, snap.status,
		snap.dataCriacao, snap.dataVencimento, snap.nomeFantasia,
		snap.aluguelPercent, snap.prazoLocacao, snap.aluguelPorM2,
		snap.condominioAprox, snap.fppAprox,
		snap.inicioContrato, snap.fimContrato, snap.dataInauguracao,
		snap.observacoes, snap.atualizadoEm,
	).Scan(&idPH)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaParecerComite" (
			id_proposta_ppc,
			presidente_ppc, presidente_data_ppc,
			diretoria_comp1_ppc, diretoria_comp1_data_ppc,
			diretoria_comp2_ppc, diretoria_comp2_data_ppc,
			superintendente_ppc, superintendente_data_ppc,
			in_networking_ppc, in_networking_data_ppc
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
		ON CONFLICT (id_proposta_ppc) DO UPDATE SET
			presidente_ppc           = EXCLUDED.presidente_ppc,
			presidente_data_ppc      = EXCLUDED.presidente_data_ppc,
			diretoria_comp1_ppc      = EXCLUDED.diretoria_comp1_ppc,
			diretoria_comp1_data_ppc = EXCLUDED.diretoria_comp1_data_ppc,
			diretoria_comp2_ppc      = EXCLUDED.diretoria_comp2_ppc,
			diretoria_comp2_data_ppc = EXCLUDED.diretoria_comp2_data_ppc,
			superintendente_ppc      = EXCLUDED.superintendente_ppc,
			superintendente_data_ppc = EXCLUDED.superintendente_data_ppc,
			in_networking_ppc        = EXCLUDED.in_networking_ppc,
			in_networking_data_ppc   = EXCLUDED.in_networking_data_ppc
	`,
		id,
		presidente, body.PresidenteData,
		diretoriaComp1, body.DiretoriaComp1Data,
		diretoriaComp2, body.DiretoriaComp2Data,
		superintendente, body.SuperintendenteData,
		inNetworking, body.InNetworkingData,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao salvar parecer do comitê"})
		return
	}

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaParecerComiteHistorico" (
			id_historico_ppch,
			presidente_ppch, presidente_data_ppch,
			diretoria_comp1_ppch, diretoria_comp1_data_ppch,
			diretoria_comp2_ppch, diretoria_comp2_data_ppch,
			superintendente_ppch, superintendente_data_ppch,
			in_networking_ppch, in_networking_data_ppch
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
	`,
		idPH,
		presidente, body.PresidenteData,
		diretoriaComp1, body.DiretoriaComp1Data,
		diretoriaComp2, body.DiretoriaComp2Data,
		superintendente, body.SuperintendenteData,
		inNetworking, body.InNetworkingData,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico do parecer do comitê"})
		return
	}

	if presidente && diretoriaComp1 && diretoriaComp2 && superintendente && inNetworking {
		_, err = tx.Exec(ctx,
			`UPDATE "Proposta" SET status_p = 'Aprovado', atualizado_em_p = NOW() WHERE id_p = $1`, id,
		)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao atualizar status da proposta"})
			return
		}
	}

	if err := tx.Commit(ctx); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao confirmar transação"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Parecer do comitê salvo com sucesso"})
}

func (h *PropostasHandler) ListarDocumentos(c *gin.Context) {
	ctx := context.Background()
	idProposta := strings.TrimSpace(c.Query("id_proposta"))
	if idProposta == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "E necessario informar id_proposta"})
		return
	}

	rows, err := h.db.Query(ctx, `
		SELECT id_pd::text, id_proposta_pd::text, id_usuario_pd::text, codigo_pd, nome_original_pd,
		       CASE tipo_pd
		           WHEN 'PDF' THEN 'application/pdf'
		           WHEN 'JPG' THEN 'image/jpeg'
		           WHEN 'PNG' THEN 'image/png'
		           WHEN 'DOCX' THEN 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
		           ELSE tipo_pd
		       END,
		       tamanho_pd, url_storage_pd,
		       TO_CHAR(data_upload_pd, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "PropostaDocumento"
		WHERE id_proposta_pd = $1
		ORDER BY data_upload_pd DESC
	`, idProposta)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao listar documentos"})
		return
	}
	defer rows.Close()

	result := []entities.PropostaDocumento{}
	for rows.Next() {
		var doc entities.PropostaDocumento
		if err := rows.Scan(
			&doc.Id, &doc.IdProposta, &doc.IdUsuario, &doc.Codigo, &doc.NomeOriginal,
			&doc.Tipo, &doc.Tamanho, &doc.UrlStorage, &doc.DataUpload,
		); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao ler documentos"})
			return
		}
		result = append(result, doc)
	}
	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao listar documentos"})
		return
	}

	c.JSON(http.StatusOK, result)
}

func (h *PropostasHandler) UploadDocumento(c *gin.Context) {
	ctx := context.Background()
	userID := c.GetString("user_id")

	maxBytes := h.cfg.DocumentMaxUploadBytes
	if maxBytes <= 0 {
		maxBytes = 10 * 1024 * 1024
	}
	c.Request.Body = http.MaxBytesReader(c.Writer, c.Request.Body, maxBytes+1024*1024)

	idProposta := strings.TrimSpace(c.PostForm("id_proposta"))
	if idProposta == "" {
		c.JSON(http.StatusBadRequest, gin.H{"message": "E necessario informar id_proposta"})
		return
	}

	var exists bool
	if err := h.db.QueryRow(ctx, `SELECT EXISTS(SELECT 1 FROM "Proposta" WHERE id_p = $1)`, idProposta).Scan(&exists); err != nil || !exists {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta nao encontrada"})
		return
	}

	file, header, err := c.Request.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Arquivo nao informado"})
		return
	}
	defer file.Close()

	mimeType, err := validateDocumentoUpload(file, header, maxBytes)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	var id string
	if err := h.db.QueryRow(ctx, `SELECT gen_random_uuid()::text`).Scan(&id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gerar id do documento"})
		return
	}

	originalName := filepath.Base(header.Filename)
	ext := strings.ToLower(filepath.Ext(originalName))
	destDir := filepath.Join(h.cfg.DocumentUploadDir, idProposta)
	storagePath := filepath.Join(destDir, id+ext)
	if err := os.MkdirAll(destDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao preparar diretorio de upload"})
		return
	}

	if _, err := file.Seek(0, io.SeekStart); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao processar arquivo"})
		return
	}
	if err := saveUploadedDocumento(file, storagePath, maxBytes); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	codigo := fmt.Sprintf("DOC-%s", shortID(id))
	tamanho := formatBytes(header.Size)
	urlStorage := filepath.ToSlash(storagePath)

	var doc entities.PropostaDocumento
	err = h.db.QueryRow(ctx, `
		INSERT INTO "PropostaDocumento" (
			id_pd, id_proposta_pd, id_usuario_pd, codigo_pd, nome_original_pd,
			tipo_pd, tamanho_pd, url_storage_pd, data_upload_pd
		) VALUES ($1::uuid, $2::uuid, $3::uuid, $4, $5, $6, $7, $8, NOW())
		RETURNING id_pd::text, id_proposta_pd::text, id_usuario_pd::text, codigo_pd, nome_original_pd,
		          tipo_pd, tamanho_pd, url_storage_pd,
		          TO_CHAR(data_upload_pd, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
	`, id, idProposta, userID, codigo, originalName, mimeType, tamanho, urlStorage).Scan(
		&doc.Id, &doc.IdProposta, &doc.IdUsuario, &doc.Codigo, &doc.NomeOriginal,
		&doc.Tipo, &doc.Tamanho, &doc.UrlStorage, &doc.DataUpload,
	)
	if err != nil {
		log.Printf("UploadDocumento: db insert error (proposta=%s user=%s mime=%s): %v", idProposta, userID, mimeType, err)
		tipoLegado := documentoTipoLegado(originalName)
		err = h.db.QueryRow(ctx, `
			INSERT INTO "PropostaDocumento" (
				id_pd, id_proposta_pd, id_usuario_pd, codigo_pd, nome_original_pd,
				tipo_pd, tamanho_pd, url_storage_pd, data_upload_pd
			) VALUES ($1::uuid, $2::uuid, $3::uuid, $4, $5, $6, $7, $8, NOW())
			RETURNING id_pd::text, id_proposta_pd::text, id_usuario_pd::text, codigo_pd, nome_original_pd,
			          tipo_pd, tamanho_pd, url_storage_pd,
			          TO_CHAR(data_upload_pd, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		`, id, idProposta, userID, codigo, originalName, tipoLegado, tamanho, urlStorage).Scan(
			&doc.Id, &doc.IdProposta, &doc.IdUsuario, &doc.Codigo, &doc.NomeOriginal,
			&doc.Tipo, &doc.Tamanho, &doc.UrlStorage, &doc.DataUpload,
		)
		if err != nil {
			log.Printf("UploadDocumento: legacy db insert error (proposta=%s user=%s tipo=%s): %v", idProposta, userID, tipoLegado, err)
			_ = os.Remove(storagePath)
			c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao salvar metadados do documento"})
			return
		}
	}

	c.JSON(http.StatusCreated, doc)
}

func (h *PropostasHandler) RemoverDocumento(c *gin.Context) {
	ctx := context.Background()
	id := strings.TrimSpace(c.Param("id"))
	userID := c.GetString("user_id")

	var doc struct {
		id           string
		idProposta   string
		idUsuario    string
		codigo       string
		nomeOriginal string
		tipo         string
		tamanho      string
		storagePath  *string
		dataUpload   *time.Time
	}

	err := h.db.QueryRow(ctx, `
		SELECT id_pd::text, id_proposta_pd::text, id_usuario_pd::text, codigo_pd,
		       nome_original_pd, tipo_pd, tamanho_pd, url_storage_pd, data_upload_pd
		FROM "PropostaDocumento"
		WHERE id_pd = $1
	`, id).Scan(
		&doc.id, &doc.idProposta, &doc.idUsuario, &doc.codigo,
		&doc.nomeOriginal, &doc.tipo, &doc.tamanho, &doc.storagePath, &doc.dataUpload,
	)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusNotFound, gin.H{"message": "Documento nao encontrado"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar documento"})
		return
	}

	tx, err := h.db.Begin(ctx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao iniciar transacao"})
		return
	}
	defer tx.Rollback(ctx)

	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaDocumentoHistorico" (
			id_documento_pdh, id_proposta_pdh, id_usuario_pdh, codigo_pdh,
			nome_original_pdh, tipo_pdh, tamanho_pdh, url_storage_pdh,
			data_upload_pdh, acao_pdh, excluido_em_pdh
		) VALUES ($1::uuid,$2::uuid,$3::uuid,$4,$5,$6,$7,$8,$9,'EXCLUSAO',NOW())
	`, doc.id, doc.idProposta, userID, doc.codigo,
		doc.nomeOriginal, doc.tipo, doc.tamanho, doc.storagePath, doc.dataUpload,
	)
	if err != nil {
		log.Printf("RemoverDocumento: erro ao gravar historico (documento=%s usuario=%s): %v", id, userID, err)
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar historico do documento"})
		return
	}

	tag, err := tx.Exec(ctx, `DELETE FROM "PropostaDocumento" WHERE id_pd = $1`, id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao remover documento"})
		return
	}
	if tag.RowsAffected() == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "Documento nao encontrado"})
		return
	}

	if err := tx.Commit(ctx); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao confirmar remocao do documento"})
		return
	}

	if doc.storagePath != nil && *doc.storagePath != "" {
		if err := os.Remove(filepath.Clean(*doc.storagePath)); err != nil && !errors.Is(err, os.ErrNotExist) {
			log.Printf("RemoverDocumento: documento removido do banco, mas falhou ao remover arquivo %s: %v", *doc.storagePath, err)
		}
	}

	c.Status(http.StatusNoContent)
}

func validateDocumentoUpload(file multipart.File, header *multipart.FileHeader, maxBytes int64) (string, error) {
	if header == nil || strings.TrimSpace(header.Filename) == "" {
		return "", errors.New("Arquivo nao informado")
	}
	if header.Size <= 0 {
		return "", errors.New("Arquivo vazio nao e permitido")
	}
	if header.Size > maxBytes {
		return "", fmt.Errorf("Arquivo excede o limite de %s", formatBytes(maxBytes))
	}

	ext := strings.ToLower(filepath.Ext(header.Filename))
	allowedByExt := map[string]string{
		".pdf":  "application/pdf",
		".jpg":  "image/jpeg",
		".jpeg": "image/jpeg",
		".png":  "image/png",
		".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	}
	canonicalMime, ok := allowedByExt[ext]
	if !ok {
		return "", errors.New("Tipo de arquivo nao permitido. Envie PDF, JPG, PNG ou DOCX")
	}

	buffer := make([]byte, 512)
	n, err := file.Read(buffer)
	if err != nil && err != io.EOF {
		return "", errors.New("Erro ao ler arquivo")
	}
	if _, err := file.Seek(0, io.SeekStart); err != nil {
		return "", errors.New("Erro ao processar arquivo")
	}

	detected := http.DetectContentType(buffer[:n])
	switch ext {
	case ".pdf":
		if detected != "application/pdf" {
			return "", errors.New("Conteudo do arquivo nao corresponde a PDF")
		}
	case ".jpg", ".jpeg":
		if detected != "image/jpeg" {
			return "", errors.New("Conteudo do arquivo nao corresponde a JPG")
		}
	case ".png":
		if detected != "image/png" {
			return "", errors.New("Conteudo do arquivo nao corresponde a PNG")
		}
	case ".docx":
		if n < 4 || string(buffer[:2]) != "PK" {
			return "", errors.New("Conteudo do arquivo nao corresponde a DOCX")
		}
	}

	return canonicalMime, nil
}

func documentoTipoLegado(nome string) string {
	switch strings.ToLower(filepath.Ext(nome)) {
	case ".pdf":
		return "PDF"
	case ".jpg", ".jpeg":
		return "JPG"
	case ".png":
		return "PNG"
	case ".docx":
		return "DOCX"
	default:
		return "PDF"
	}
}

func saveUploadedDocumento(file multipart.File, path string, maxBytes int64) error {
	dst, err := os.Create(path)
	if err != nil {
		return errors.New("Erro ao salvar arquivo")
	}
	defer dst.Close()

	limited := &io.LimitedReader{R: file, N: maxBytes + 1}
	written, err := io.Copy(dst, limited)
	if err != nil {
		_ = os.Remove(path)
		return errors.New("Erro ao salvar arquivo")
	}
	if written > maxBytes {
		_ = os.Remove(path)
		return fmt.Errorf("Arquivo excede o limite de %s", formatBytes(maxBytes))
	}
	return nil
}

func formatBytes(size int64) string {
	const unit = 1024
	if size < unit {
		return fmt.Sprintf("%d B", size)
	}
	value := float64(size)
	for _, suffix := range []string{"KB", "MB", "GB"} {
		value = value / unit
		if value < unit {
			return fmt.Sprintf("%.1f %s", value, suffix)
		}
	}
	return fmt.Sprintf("%.1f TB", value/unit)
}

func shortID(id string) string {
	clean := strings.ReplaceAll(id, "-", "")
	if len(clean) <= 8 {
		return clean
	}
	return clean[:8]
}

func (h *PropostasHandler) PlaceholderOK(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ok"})
}

func (h *PropostasHandler) PlaceholderList(c *gin.Context) {
	c.JSON(http.StatusOK, []any{})
}
func (h *PropostasHandler) GetTaxaTransferencia(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")

	var tipoOperacao string
	err := h.db.QueryRow(ctx, `SELECT tipo_operacao_p FROM "Proposta" WHERE id_p = $1`, id).Scan(&tipoOperacao)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar proposta"})
		return
	}

	if tipoOperacao != "Transferência" {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"message": "Operação não permite taxa de transferência"})
		return
	}

	var tt entities.PropostaTaxaTransferencia
	err = h.db.QueryRow(ctx, `
		SELECT id_proposta_ptt,
		       tt_contratual_ptt, tt_proposta_ptt, tt_proposta_num_amm_ptt,
		       sinal_tt_ptt, forma_pagamento_tt_ptt, justificativa_tt_ptt, status_tt_ptt
		FROM "PropostaTaxaTransferencia"
		WHERE id_proposta_ptt = $1
	`, id).Scan(
		&tt.IdProposta,
		&tt.TtContratual, &tt.TtProposta, &tt.TtPropostaNumAmm,
		&tt.SinalTt, &tt.FormaPagamentoTt, &tt.JustificativaTt, &tt.StatusTt,
	)

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			c.JSON(http.StatusOK, nil)
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao buscar taxa de transferência"})
		return
	}

	c.JSON(http.StatusOK, tt)
}

func (h *PropostasHandler) SalvarTaxaTransferencia(c *gin.Context) {
	ctx := context.Background()
	id := c.Param("id")
	userID := c.GetString("user_id")

	// 1. Snapshot da proposta atual
	type propostaSnap struct {
		codigoUnidade   string
		segmento        string
		tipoOperacao    string
		valorProposto   float64
		area            float64
		abl             *float64
		status          string
		dataCriacao     string
		dataVencimento  *string
		nomeFantasia    *string
		aluguelPercent  *float64
		prazoLocacao    *int
		aluguelPorM2    *float64
		condominioAprox *float64
		fppAprox        *float64
		inicioContrato  *string
		fimContrato     *string
		dataInauguracao *string
		observacoes     *string
		atualizadoEm    *string
	}
	var snap propostaSnap
	err := h.db.QueryRow(ctx, `
		SELECT
			u.codigo_un, p.segmento_p, p.tipo_operacao_p, p.valor_proposto_p, p.area_p, p.abl_p, p.status_p,
			TO_CHAR(p.data_criacao_p, 'YYYY-MM-DD'), TO_CHAR(p.data_vencimento_p, 'YYYY-MM-DD'),
			p.nome_fantasia_p, p.aluguel_percent_p, p.prazo_locacao_meses_p, p.aluguel_por_m2_p, p.condominio_aprox_p, p.fpp_aprox_p,
			TO_CHAR(p.inicio_contrato_p, 'YYYY-MM-DD'), TO_CHAR(p.fim_contrato_p, 'YYYY-MM-DD'), TO_CHAR(p.data_inauguracao_p, 'YYYY-MM-DD'),
			p.observacoes_p, TO_CHAR(p.atualizado_em_p, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
		FROM "Proposta" p
		JOIN "Unidade" u ON u.id_un = p.id_unidade_p
		WHERE p.id_p = $1
	`, id).Scan(
		&snap.codigoUnidade, &snap.segmento, &snap.tipoOperacao, &snap.valorProposto, &snap.area, &snap.abl, &snap.status,
		&snap.dataCriacao, &snap.dataVencimento, &snap.nomeFantasia, &snap.aluguelPercent, &snap.prazoLocacao, &snap.aluguelPorM2,
		&snap.condominioAprox, &snap.fppAprox, &snap.inicioContrato, &snap.fimContrato, &snap.dataInauguracao,
		&snap.observacoes, &snap.atualizadoEm,
	)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "Proposta não encontrada"})
		return
	}

	// Proteção principal: Retornar 422 se não for Transferência
	if snap.tipoOperacao != "Transferência" {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"message": "Operação não permite taxa de transferência"})
		return
	}

	var body struct {
		TtContratual     *float64 `json:"ttContratual"`
		TtProposta       *float64 `json:"ttProposta"`
		TtPropostaNumAmm *float64 `json:"ttPropostaNumAmm"`
		SinalTt          *float64 `json:"sinalTt"`
		FormaPagamentoTt *string  `json:"formaPagamentoTt"`
		JustificativaTt  *string  `json:"justificativaTt"`
		StatusTt         *string  `json:"statusTt"`
	}

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Dados inválidos"})
		return
	}

	tx, err := h.db.Begin(ctx)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao iniciar transação"})
		return
	}
	defer tx.Rollback(ctx)

	// 2. Gravar snapshot principal no Histórico
	var idPH string
	err = tx.QueryRow(ctx, `
		INSERT INTO "PropostaHistorico" (
			id_proposta_ph, id_usuario_ph, editado_em_ph,
			codigo_unidade_ph, segmento_ph, tipo_operacao_ph, valor_proposto_ph, area_ph, abl_ph, status_ph,
			data_criacao_ph, data_vencimento_ph, nome_fantasia_ph, aluguel_percent_ph, prazo_locacao_meses_ph,
			aluguel_por_m2_ph, condominio_aprox_ph, fpp_aprox_ph, inicio_contrato_ph, fim_contrato_ph,
			data_inauguracao_ph, observacoes_ph, atualizado_em_snapshot_ph
		) VALUES ($1,$2,NOW(),$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)
		RETURNING id_ph
	`,
		id, userID, snap.codigoUnidade, snap.segmento, snap.tipoOperacao, snap.valorProposto, snap.area, snap.abl, snap.status,
		snap.dataCriacao, snap.dataVencimento, snap.nomeFantasia, snap.aluguelPercent, snap.prazoLocacao,
		snap.aluguelPorM2, snap.condominioAprox, snap.fppAprox, snap.inicioContrato, snap.fimContrato,
		snap.dataInauguracao, snap.observacoes, snap.atualizadoEm,
	).Scan(&idPH)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico"})
		return
	}

	// 3. Criar ou Atualizar a Taxa de Transferência
	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaTaxaTransferencia" (
			id_proposta_ptt, tt_contratual_ptt, tt_proposta_ptt, tt_proposta_num_amm_ptt,
			sinal_tt_ptt, forma_pagamento_tt_ptt, justificativa_tt_ptt, status_tt_ptt
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
		ON CONFLICT (id_proposta_ptt) DO UPDATE SET
			tt_contratual_ptt        = EXCLUDED.tt_contratual_ptt,
			tt_proposta_ptt          = EXCLUDED.tt_proposta_ptt,
			tt_proposta_num_amm_ptt  = EXCLUDED.tt_proposta_num_amm_ptt,
			sinal_tt_ptt             = EXCLUDED.sinal_tt_ptt,
			forma_pagamento_tt_ptt   = EXCLUDED.forma_pagamento_tt_ptt,
			justificativa_tt_ptt     = EXCLUDED.justificativa_tt_ptt,
			status_tt_ptt            = EXCLUDED.status_tt_ptt
	`,
		id, body.TtContratual, body.TtProposta, body.TtPropostaNumAmm,
		body.SinalTt, body.FormaPagamentoTt, body.JustificativaTt, body.StatusTt,
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao salvar taxa de transferência"})
		return
	}

	// 4. Salvar os mesmos dados na tabela de Histórico (PropostaTaxaTransferenciaHistorico)
	_, err = tx.Exec(ctx, `
		INSERT INTO "PropostaTaxaTransferenciaHistorico" (
			id_historico_ptth, tt_contratual_ptth, tt_proposta_ptth, tt_proposta_num_amm_ptth,
			sinal_tt_ptth, forma_pagamento_tt_ptth, justificativa_tt_ptth, status_tt_ptth
		) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
	`,
		idPH, body.TtContratual, body.TtProposta, body.TtPropostaNumAmm,
		body.SinalTt, body.FormaPagamentoTt, body.JustificativaTt, body.StatusTt,
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao gravar histórico da taxa"})
		return
	}

	// 5. ATUALIZAR METADADOS DA PROPOSTA PRINCIPAL (CORREÇÃO FUNDAMENTAL)
	_, err = tx.Exec(ctx, `
		UPDATE "Proposta" 
		SET atualizado_em_p = NOW(), id_usuario_ultima_alt_p = $1 
		WHERE id_p = $2
	`, userID, id)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao atualizar metadados da proposta"})
		return
	}

	if err := tx.Commit(ctx); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao confirmar transação"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Taxa de transferência salva com sucesso"})
}
