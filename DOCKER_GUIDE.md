# Docker — Guia de Implementação
## Projeto Flamboyant (Go API + React/Vite + PostgreSQL)

---

## Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                  docker-compose                      │
│                                                     │
│  ┌─────────────┐   ┌──────────────┐   ┌──────────┐ │
│  │  frontend   │──▶│     api      │──▶│ postgres │ │
│  │  nginx:80   │   │  go:8080     │   │  pg:5432 │ │
│  └─────────────┘   └──────────────┘   └──────────┘ │
│                         flamboyant-network           │
└─────────────────────────────────────────────────────┘
```

- **postgres** sobe primeiro (healthcheck garante prontidão)
- **api** espera o postgres estar saudável, roda as migrations automaticamente
- **frontend** espera a api estar saudável, serve o build Vite via nginx

---

## Passo 1 — Instalar o Docker

Baixe e instale o **Docker Desktop** (Windows/Mac) ou **Docker Engine** (Linux):
- https://docs.docker.com/get-docker/

Verifique a instalação:
```bash
docker --version
docker compose version
```

---

## Passo 2 — Copiar os arquivos para o projeto

Copie os arquivos gerados para o seu repositório seguindo a estrutura:

```
Projeto-Flamboyant/          ← raiz do repositório
├── docker-compose.yml       ← NOVO
├── .env.example             ← NOVO (modelo)
├── .env                     ← NOVO (sua cópia preenchida, não commitada)
│
├── API/
│   ├── Dockerfile           ← NOVO
│   ├── .dockerignore        ← NOVO
│   ├── cmd/main.go
│   ├── migrations/
│   └── ...
│
└── Figma/
    ├── Dockerfile           ← NOVO
    ├── .dockerignore        ← NOVO
    ├── nginx.conf           ← NOVO
    └── ...
```

---

## Passo 3 — Criar o arquivo .env

Na raiz do projeto, copie o exemplo e preencha:

```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Linux / Mac
cp .env.example .env
```

Abra o `.env` e preencha obrigatoriamente:

```env
JWT_SECRET=uma-frase-longa-e-segura-para-producao
DB_PASSWORD=sua-senha-do-banco
```

> ⚠️ **NUNCA** commite o `.env` no git. Adicione ao `.gitignore`:
> ```
> .env
> ```

---

## Passo 4 — Adicionar .env ao .gitignore

No `.gitignore` da raiz do projeto, adicione:

```gitignore
# Docker
.env
```

---

## Passo 5 — Fazer o build e subir os containers

Na **raiz do projeto** (onde está o `docker-compose.yml`):

```bash
# Build das imagens e sobe em background
docker compose up --build -d
```

Na primeira execução, o Docker vai:
1. Baixar as imagens base (postgres, golang, node, nginx)
2. Compilar a API Go (multi-stage build)
3. Fazer o build do React (npm run build)
4. Subir os 3 containers

Acompanhe os logs em tempo real:
```bash
docker compose logs -f
```

---

## Passo 6 — Verificar se está funcionando

```bash
# Ver status dos containers
docker compose ps

# Resultado esperado:
# NAME                    STATUS          PORTS
# flamboyant-postgres     healthy         0.0.0.0:5432->5432/tcp
# flamboyant-api          healthy         0.0.0.0:8080->8080/tcp
# flamboyant-frontend     running         0.0.0.0:80->80/tcp
```

Teste o health check da API:
```bash
curl http://localhost:8080/health
# Esperado: {"status":"ok","database":"conectado"}
```

Acesse o frontend: http://localhost

---

## Comandos do dia a dia

```bash
# Subir tudo (sem rebuild)
docker compose up -d

# Subir com rebuild (após alterar código)
docker compose up --build -d

# Parar tudo (mantém os dados do banco)
docker compose down

# Parar e apagar o volume do banco (CUIDADO — apaga os dados!)
docker compose down -v

# Ver logs de um serviço específico
docker compose logs -f api
docker compose logs -f frontend
docker compose logs -f postgres

# Acessar o terminal de um container
docker compose exec api sh
docker compose exec postgres psql -U postgres -d jp-mall

# Restart de um serviço específico após mudança de código
docker compose up --build -d api
```

---

## Rebuild seletivo (fluxo de desenvolvimento)

Durante o desenvolvimento, você vai rebuildar serviços individualmente:

```bash
# Só alterou código da API Go?
docker compose up --build -d api

# Só alterou o frontend?
docker compose up --build -d frontend

# Alterou variáveis de ambiente no .env?
docker compose down && docker compose up --build -d
```

---

## Escalando horizontalmente (múltiplas instâncias da API)

Para escalar a API para múltiplas instâncias:

```bash
# Sobe 3 instâncias da API
docker compose up -d --scale api=3
```

> ⚠️ Para usar `--scale`, remova o `container_name` do serviço `api` no `docker-compose.yml` e adicione um **load balancer** (nginx ou Traefik) na frente.

---

## Troubleshooting comum

### API não conecta ao banco
```bash
# Verifique se o postgres está healthy
docker compose ps
# Se não estiver healthy, veja os logs:
docker compose logs postgres
```

### Migrations falhando
```bash
# Acesse o container da API e rode manualmente
docker compose exec api sh
# Dentro do container — verifique a variável DB_HOST
env | grep DB_
```

### Frontend não acessa a API (CORS / VITE_API_URL)
O `VITE_API_URL` é **injetado no build**. Se mudar, precisa rebuildar:
```bash
docker compose up --build -d frontend
```

### Porta já em uso
```bash
# Verificar o que está usando a porta
# Windows:
netstat -ano | findstr :8080
# Linux/Mac:
lsof -i :8080
```

---

## Para produção (observações importantes)

Antes de ir para produção, ajuste no `.env`:

```env
GIN_MODE=release
JWT_SECRET=string-muito-longa-e-aleatoria-gerada-com-openssl
DB_PASSWORD=senha-forte-do-banco
ALLOWED_ORIGIN=https://seu-dominio.com.br
VITE_API_URL=https://api.seu-dominio.com.br/api/v1
DB_SSLMODE=require   # habilitar SSL no banco em produção
```

E considere:
- Usar um serviço de banco gerenciado (RDS, Supabase, Neon) em vez do postgres no compose
- Configurar HTTPS com certificado SSL (Let's Encrypt via Traefik ou Caddy)
- Guardar segredos em um vault (ex: Docker Secrets, AWS Secrets Manager)
