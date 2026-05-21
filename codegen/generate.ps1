# generate.ps1 — Regenera as entidades a partir das migrations
# Uso: .\codegen\generate.ps1
# Rodar da raiz do projeto (Projeto-Flamboyant/)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

Write-Host "Gerando entidades a partir das migrations..." -ForegroundColor Cyan
Write-Host "Raiz do projeto: $Root" -ForegroundColor Gray

# Rodar o codegen apontando para a raiz do projeto
Set-Location -Path "$PSScriptRoot"
go run generate.go $Root

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Entidades geradas com sucesso!" -ForegroundColor Green
    Write-Host "  - entities/*.go (structs Go)" -ForegroundColor Gray
    Write-Host "  - entities/*.ts (interfaces TypeScript)" -ForegroundColor Gray
    Write-Host "  - Figma/src/app/entities/*.ts" -ForegroundColor Gray
    Write-Host "  - API/internal/entities/*.go" -ForegroundColor Gray
} else {
    Write-Host "Erro ao gerar entidades." -ForegroundColor Red
    exit 1
}
