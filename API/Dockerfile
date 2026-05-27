# ============================================================
# Dockerfile — API Go (Projeto Flamboyant)
# Multi-stage: builder separa o build do runtime final
# ============================================================

# ── Stage 1: Build ───────────────────────────────────────────
FROM golang:1.23-alpine AS builder

RUN apk add --no-cache git ca-certificates tzdata

WORKDIR /app

ENV GOTOOLCHAIN=auto

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
    go build -ldflags="-w -s" -o /app/server ./cmd/main.go

# ── Stage 2: Runtime ─────────────────────────────────────────
FROM alpine:3.20

# Certificados SSL e timezone
RUN apk add --no-cache ca-certificates tzdata

WORKDIR /app

# Copiar apenas o binário compilado
COPY --from=builder /app/server .

# Copiar as migrations (lidas em runtime pelo golang-migrate)
COPY --from=builder /app/migrations ./migrations

# Usuário não-root por segurança
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8080

CMD ["./server"]
