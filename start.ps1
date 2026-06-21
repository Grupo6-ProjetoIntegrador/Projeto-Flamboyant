# ============================================================
# BES-2026 — Script de inicialização (PowerShell)
# Uso: .\start.ps1
# ============================================================

$ErrorActionPreference = "Stop"

function Log  { Write-Host "[BES-2026] $args" -ForegroundColor Green }
function Warn { Write-Host "[AVISO] $args" -ForegroundColor Yellow }
function Err  { Write-Host "[ERRO] $args" -ForegroundColor Red; Read-Host "Pressione Enter para sair"; exit 1 }

Write-Host ""
Log "Iniciando verificacao..."
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

# ── Verificar pnpm ─────────────────────────────────
if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
    Err "pnpm nao encontrado. Instale em: https://pnpm.io/installation"
}
Log "pnpm: $(pnpm --version)"

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
    pnpm install
    if ($LASTEXITCODE -ne 0) { Err "Falha ao instalar dependencias Node" }
    Pop-Location
} else {
    Log "Dependencias Node ja instaladas."
}

# ── Arquivo .env do frontend ─────────────────────────────────
if (-not (Test-Path "Figma\.env")) {
    $apiPortDefault = $env:SERVER_PORT
    if (-not $apiPortDefault) { $apiPortDefault = '8080' }
    Warn ".env nao encontrado no Figma - criando com valores padrao..."
    "VITE_API_URL=http://localhost:$apiPortDefault/api/v1" | Out-File -FilePath "Figma\.env" -Encoding utf8
}

# ── Carregar variáveis de ambiente da API da API\.env ────────
if (Test-Path "API\.env") {
    Log "Carregando variáveis de ambiente da API de API\.env..."
    Get-Content "API\.env" | ForEach-Object {
        if (-not [string]::IsNullOrWhiteSpace($_) -and -not $_.TrimStart().StartsWith('#')) {
            $parts = $_ -split '=', 2
            if ($parts.Length -eq 2) {
                $name = $parts[0].Trim()
                $value = $parts[1].Trim()
                if ($name) { Set-Item -Path Env:\$name -Value $value }
            }
        }
    }
}

$apiPort = $env:SERVER_PORT
if (-not $apiPort) { $apiPort = '8080' }

Write-Host ""

# ── Iniciar API e Frontend em janelas separadas ──────────────
Log "Iniciando API na porta $apiPort..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location API; go run ./cmd/main.go" -WindowStyle Normal

Log "Iniciando Frontend na porta 5173..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location Figma; pnpm run dev" -WindowStyle Normal

Write-Host ""
Log "----------------------------------------------"
Log "  API:      http://localhost:8080"
Log "  Frontend: http://localhost:5173"
Log "  Feche as janelas abertas para encerrar"
Log "----------------------------------------------"
Write-Host ""
