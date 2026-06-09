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

func (h *PropostasHandler) PlaceholderOK(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "ok"})
}

func (h *PropostasHandler) PlaceholderList(c *gin.Context) {
	c.JSON(http.StatusOK, []any{})
}
