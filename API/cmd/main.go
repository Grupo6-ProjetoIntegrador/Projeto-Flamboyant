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
