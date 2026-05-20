# ============================================================
# ajustar entidades via migration.ps1
# Regenera todas as entidades a partir das migrations SQL.
#
# Uso: rodar na raiz do projeto (Projeto-Flamboyant/)
# ============================================================

$Root = $PSScriptRoot

Write-Host ""
Write-Host "Atualizando entidades a partir das migrations..." -ForegroundColor Cyan
Write-Host "Raiz: $Root" -ForegroundColor Gray
Write-Host ""

Set-Location -Path "$Root\codegen"
go run generate.go $Root

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Entidades atualizadas com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Arquivos gerados:" -ForegroundColor Gray
    Write-Host "  $Root\entities\*.go e *.ts" -ForegroundColor Gray
    Write-Host "  $Root\API\internal\entities\*.go" -ForegroundColor Gray
    Write-Host "  $Root\Figma\src\app\entities\*.ts" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Erro ao atualizar entidades." -ForegroundColor Red
    Write-Host "Verifique se o Go esta instalado e a pasta migrations/ existe." -ForegroundColor Red
    exit 1
}
