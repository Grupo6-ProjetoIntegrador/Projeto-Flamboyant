# Rodando com Docker

## Subir o projeto

Na raiz do projeto, rode:

```powershell
docker compose up --build
```

Servicos:

- Frontend: http://localhost
- API: http://localhost:8080
- Health da API: http://localhost:8080/health
- Postgres: localhost:5432

## Variaveis principais

O `docker-compose.yml` usa o arquivo `.env` da raiz. As principais variaveis sao:

```env
SERVER_PORT=8080
FRONTEND_PORT=80
ALLOWED_ORIGIN=http://localhost

DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=jp-mall
DB_SSLMODE=disable

VITE_API_URL=/api/v1
```

Observacao: a API em Go le a porta pela variavel `PORT`; o Compose usa `SERVER_PORT` do `.env` e repassa como `PORT` para o container.

## Parar e remover containers

```powershell
docker compose down
```

Para apagar tambem os dados do banco:

```powershell
docker compose down -v
```
