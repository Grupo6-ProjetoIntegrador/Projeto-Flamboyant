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

// REMOVIDO: const tokenDuration = time.Hour (Agora vem do config)

type Claims struct {
	UserID string `json:"user_id"`
	Email  string `json:"email"`
	Nome   string `json:"nome"`
	Setor  string `json:"setor"`
	jwt.RegisteredClaims
}

type AuthHandler struct {
	db            *pgxpool.Pool
	jwtSecret     []byte
	tokenDuration time.Duration // <-- ADICIONADO: Guarda a duração configurável
}

// Atualizado para receber a duration do config.go no momento da inicialização
func NewAuthHandler(db *pgxpool.Pool, jwtSecret string, tokenDuration time.Duration) *AuthHandler {
	return &AuthHandler{
		db:            db,
		jwtSecret:     []byte(jwtSecret),
		tokenDuration: tokenDuration, // <-- ADICIONADO
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

	setor := ""
	if setorPtr != nil {
		setor = *setorPtr
	}

	if err := bcrypt.CompareHashAndPassword([]byte(senhaHash), []byte(req.Senha)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Credenciais invalidas"})
		return
	}

	// MODIFICADO: Agora usa a duração dinâmica injetada na struct do handler
	expiracao := time.Now().Add(h.tokenDuration)
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
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Erro ao registrar sessao"})
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
