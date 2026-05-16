#Requires -Version 5.1
<#
  Copia as fotos do WhatsApp (15/05/2026) para os nomes usados no site.
  
  Uso (na raiz do projeto):
    .\scripts\sync-obra-fotos.ps1
  
  Origem padrão: pasta de assets do Cursor (quando os arquivos existirem no disco).
  Alternativa: defina -SourceDir para uma pasta onde você colocou as exportações
  (ex.: Downloads), mantendo os nomes originais do WhatsApp.

  Sobrescreve PNGs em src/assets/images (serviços, hero "severino-oficina-*", etc.).
#>
param(
  [string] $SourceDir = "",
  [switch] $WhatIf
)

$ErrorActionPreference = "Stop"
$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
if (-not (Test-Path (Join-Path $ProjectRoot "astro.config.mjs"))) {
  Write-Error "Execute este script a partir da pasta do projeto (deve existir astro.config.mjs). Raiz atual: $ProjectRoot"
  exit 1
}

$DefaultCursorAssets = Join-Path $env:USERPROFILE ".cursor\projects\c-Users-Jo-o-Desktop-vibe-serralheria-botucatu-astro\assets"
if (-not $SourceDir) { $SourceDir = $DefaultCursorAssets }

$DestDir = Join-Path $ProjectRoot "src\assets\images"
if (-not (Test-Path -LiteralPath $DestDir)) {
  Write-Error "Pasta de destino não encontrada: $DestDir"
}

function Copy-IfExists {
  param([string]$UuidPart, [string]$DestBaseName)
  $hits = Get-ChildItem -LiteralPath $SourceDir -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "*.png" -and $_.Name -match [regex]::Escape($UuidPart) }
  if (-not $hits) {
    Write-Warning "Não achado (UUID $UuidPart) em $SourceDir"
    return
  }
  $src = $hits[0].FullName
  if (-not (Test-Path -LiteralPath $src)) {
    Write-Warning "Arquivo inacessível (só na nuvem Cursor?): $src"
    return
  }
  $dest = Join-Path $DestDir "$DestBaseName.png"
  if ($WhatIf) {
    Write-Host "WhatIf: $src -> $dest"
  } else {
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK $DestBaseName.png <- $($hits[0].Name.Substring(0, [Math]::Min(56, $hits[0].Name.Length)))..."
  }
}

function Copy-FirstMatchTimestamp {
  param([string]$TimestampSubstring, [string]$DestBaseName)
  $hits = Get-ChildItem -LiteralPath $SourceDir -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "*.png" -and $_.Name -match [regex]::Escape($TimestampSubstring) } |
    Sort-Object Name
  if (-not $hits) {
    Write-Warning "Nenhum PNG com '$TimestampSubstring' em $SourceDir"
    return
  }
  $src = $hits[0].FullName
  if (-not (Test-Path -LiteralPath $src)) {
    Write-Warning "Inacessível: $src"
    return
  }
  $dest = Join-Path $DestDir "$DestBaseName.png"
  if ($WhatIf) {
    Write-Host "WhatIf: $src -> $dest"
  } else {
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK $DestBaseName.png (extra $TimestampSubstring)"
  }
}

Write-Host "Origem: $SourceDir"
Write-Host "Destino: $DestDir"
Write-Host ""

# 13 serviços (image keys em src/data/services.ts)
Copy-IfExists "0325bfa9" "cobertura-metalica"
Copy-IfExists "c69e333f" "manutencao-de-grades"
Copy-IfExists "d53fc5ae" "portoes-de-ferro"
Copy-IfExists "c7fa3ea9" "fabricacao-de-tela"
Copy-IfExists "63c003c9" "manutencao-de-serralheria"
Copy-IfExists "d7b340ba" "corte-e-dobra"
Copy-IfExists "5b364267" "portao-em-aco"
Copy-IfExists "4d14c902" "portoes-basculante"
Copy-IfExists "1cfdbcea" "portoes-deslizante"
Copy-IfExists "f8396ceb" "portoes-gradil"
Copy-IfExists "fdd8c30a" "toldo-em-policarbonato"
Copy-IfExists "a6c7d2f8" "portoes-pivotante"
Copy-IfExists "7330a1ab" "manutencao-de-piscina"

# Landing / institucional (mesmos imports em Hero.astro, AboutSection, contato, sobre-nos)
Copy-IfExists "49d2c843" "severino-oficina-2"
Copy-IfExists "12994863" "severino-oficina-1"

# Fotos extras do mesmo lote (timestamps 10:47.*) -> contato + sobre-nos
Copy-FirstMatchTimestamp "10.47.46" "severino-oficina-3"
Copy-FirstMatchTimestamp "10.47.47" "severino-fachada"

Write-Host ""
Write-Host "Concluído. Rode 'bun run build' para validar."
