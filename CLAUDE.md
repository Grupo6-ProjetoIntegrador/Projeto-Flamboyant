# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Projeto-Flamboyant** is a business proposal management system (BES-2026) with three Docker services:
- `api` — Go 1.25 + Gin, port 8080
- `frontend` — React 18 + Vite + TypeScript + Tailwind CSS 4, served via nginx on port 80
- `postgres` — PostgreSQL 16, database `jp-mall`

## Common Commands

### Docker (primary workflow)
```bash
cp .env.example .env          # first time only — fill JWT_SECRET, DB_PASSWORD
docker compose up --build     # build and start all services
docker compose up -d          # start already-built services
docker compose logs -f api    # tail API logs
```

### Backend (API/)
```bash
cd API
go mod tidy
go run cmd/main.go            # starts on :8080, runs migrations automatically
go test ./...
```

### Frontend (Figma/)
```bash
cd Figma
pnpm install
pnpm dev                      # starts on :5173, proxies /api → :8080
pnpm build
pnpm lint
```

### Codegen (after adding/changing migrations)
```powershell
.\ajustar entidades via migration.ps1
```
This reads `API/migrations/*.up.sql` and regenerates Go structs in `API/internal/entities/` and TypeScript interfaces in `Figma/src/app/entities/`. **Never manually edit those files** — they have `// Code generated — DO NOT EDIT` headers.

## Architecture

### Backend (API/)

```
cmd/main.go          → config → database → routes → start server
internal/
  config/            env vars (JWT_SECRET, DB_*, SERVER_PORT, GIN_MODE)
  database/          pgxpool connection; auto-creates DB if missing
  migrations/        auto-run on startup via golang-migrate
  middleware/        JWT auth (extracts claims, injects into context)
  routes/            all route registration (v1 group, auth vs protected)
  handlers/          one file per resource (auth, propostas, unidades)
  entities/          ← GENERATED from SQL migrations, do not edit
migrations/          SQL files — single source of truth for schema
codegen/             reads migrations, generates entities
```

Routes follow `/api/v1/` prefix. Protected routes require `Authorization: Bearer <token>`.

### Frontend (Figma/src/app/)

Strict MVVM separation:
- **View** — `pages/comercial/*.tsx` + `components/` (no business logic)
- **ViewModel** — `viewmodels/use*.ts` (React hooks with all state/logic)
- **Service** — `services/*.service.ts` (business transforms on top of API data)
- **HTTP** — `data/apiClient.ts` (typed fetch wrapper, single place for all API calls)

`AuthContext.tsx` provides auth state globally; `data/useApi.ts` manages token in sessionStorage.

### Entity Codegen Flow

```
API/migrations/*.up.sql  →  codegen/generate.go  →  entities/*.go + entities/*.ts
                                                    ↓ copied to
                                   API/internal/entities/   Figma/src/app/entities/
```

## Current Auth State (Prototype Mode)

Both layers have hardcoded auth to allow UI development without a running auth service:
- Frontend `AuthContext.tsx` returns a hardcoded `USUARIO_PROTOTIPO` user
- Backend middleware injects a fixed `proto-001` user ID instead of validating JWT

The real JWT login flow (`POST /api/v1/auth/login` → bcrypt + HS256 JWT) is implemented and can be re-enabled by uncommenting the relevant sections.

## Adding a New Resource

1. Create `API/migrations/NNNNNN_name.up.sql` with the table definition
2. Run `.\ajustar entidades via migration.ps1` to regenerate entities
3. Add `API/internal/handlers/name.go` with handler methods
4. Register routes in `API/internal/routes/routes.go`
5. Add API calls to `Figma/src/app/data/apiClient.ts`
6. Create `Figma/src/app/services/name.service.ts`
7. Create `Figma/src/app/viewmodels/useName.ts`
8. Build the page/component

## Key Environment Variables

| Variable | Purpose |
|---|---|
| `JWT_SECRET` | Token signing key — must be set for production |
| `JWT_DURATION` | Token expiry duration (e.g. `24h`) |
| `DB_HOST/PORT/USER/PASSWORD/NAME` | PostgreSQL connection |
| `SERVER_PORT` | Go server port (default `8080`) |
| `GIN_MODE` | `debug` or `release` |
| `VITE_API_URL` | Frontend API base URL (baked into build) |
| `ALLOWED_ORIGIN` | CORS allowed origin |
