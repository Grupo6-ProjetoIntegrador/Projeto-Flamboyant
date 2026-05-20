# ============================================================
# BES-2026 — Script de debug (PowerShell)
# Uso: .\debug.ps1
# ============================================================

$ErrorActionPreference = "Stop"

function Log  { Write-Host "[BES-2026] $args" -ForegroundColor Cyan }
function Warn { Write-Host "[AVISO] $args" -ForegroundColor Yellow }
function Err  { Write-Host "[ERRO] $args" -ForegroundColor Red; Read-Host "Pressione Enter para sair"; exit 1 }

Write-Host ""
Log "Iniciando em modo DEBUG..."
Write-Host ""

# ── Verificar Go ─────────────────────────────────────────────
if (-not (Get-Command go -ErrorAction SilentlyContinue)) {
    Err "Go nao encontrado. Instale em https://go.dev/dl/"
}
Log "Go: $(go version)"

# ── Verificar Node ───────────────────────────────────────────
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Err "Node.js nao encontrado. Instale em https://nodejs.org/"
}
Log "Node: $(node --version)"

# ── Verificar npm ────────────────────────────────────────────
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Err "npm nao encontrado."
}
Log "npm: $(npm --version)"

Write-Host ""

# ── Dependências da API ──────────────────────────────────────
Log "Verificando dependencias da API..."
Push-Location API
go mod tidy
if ($LASTEXITCODE -ne 0) { Err "Falha ao atualizar dependencias Go" }
Pop-Location
Log "Dependencias Go OK."

# ── Dependências do Frontend ─────────────────────────────────
Log "Verificando dependencias do Frontend..."
if (-not (Test-Path "Figma\node_modules")) {
    Log "Instalando dependencias Node..."
    Push-Location Figma
    npm install
    if ($LASTEXITCODE -ne 0) { Err "Falha ao instalar dependencias Node" }
    Pop-Location
} else {
    Log "Dependencias Node ja instaladas."
}

# ── Arquivo .env do frontend ─────────────────────────────────
if (-not (Test-Path "Figma\.env")) {
    Warn ".env nao encontrado no Figma - criando com valores padrao..."
    "VITE_API_URL=http://localhost:8080/api/v1" | Out-File -FilePath "Figma\.env" -Encoding utf8
}

Write-Host ""

# ── Iniciar API em modo debug (Delve) ────────────────────────
Log "Verificando Delve (debugger Go)..."
if (-not (Get-Command dlv -ErrorAction SilentlyContinue)) {
    Warn "Delve nao encontrado. Instalando..."
    go install github.com/go-delve/delve/cmd/dlv@latest
    if ($LASTEXITCODE -ne 0) { Err "Falha ao instalar Delve" }
    Log "Delve instalado com sucesso."
}
Log "Delve: $(dlv version | Select-Object -First 1)"

Log "Iniciando API em modo debug na porta 8080 (Delve em :2345)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", `
    "Set-Location API; `$env:GIN_MODE='debug'; `$env:LOG_LEVEL='debug'; dlv debug ./cmd/main.go --headless --listen=:2345 --api-version=2 --accept-multiclient" `
    -WindowStyle Normal

# ── Iniciar Frontend em modo debug ───────────────────────────
Log "Iniciando Frontend em modo debug na porta 5173..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", `
    "Set-Location Figma; `$env:NODE_ENV='development'; npm run dev" `
    -WindowStyle Normal

Write-Host ""
Log "----------------------------------------------"
Log "  API:        http://localhost:8080"
Log "  Frontend:   http://localhost:5173"
Log "  Delve DAP:  localhost:2345"
Log ""
Log "  Para conectar o debugger Go no VS Code,"
Log "  use launch.json com type 'go' e mode 'remote'."
Log "  Feche as janelas abertas para encerrar."
Log "----------------------------------------------"
Write-Host ""
