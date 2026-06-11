package main

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5"
)

func main() {
	conn, _ := pgx.Connect(context.Background(), "host=localhost port=5432 user=postgres password=postgres dbname=jp-mall sslmode=disable")
	defer conn.Close(context.Background())
	conn.Exec(context.Background(), `UPDATE "Usuario" SET senha_hash_u = $1 WHERE email_u = $2`,
		"$2a$10$On6FHl5UWmSYh4kCdkv.V.YkB5kYXOwJAuA8BaDOFRT/oPkrq7YT2", "admin@flamboyant.com.br")
	fmt.Println("Senha atualizada!")
}
