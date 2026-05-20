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
