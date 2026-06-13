# NJ Global Skill Pack Installer (Windows)

$sourceDir = Join-Path $PSScriptRoot "skills"
$geminiDir = Join-Path $HOME ".gemini\config\skills"
$codexDir = Join-Path $HOME ".codex\skills"

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Installing NJ Global Skill Pack... " -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

# Create target directories if they don't exist
if (!(Test-Path $geminiDir)) {
    New-Item -ItemType Directory -Force -Path $geminiDir | Out-Null
    Write-Host "[+] Created Gemini skills directory" -ForegroundColor Green
}
if (!(Test-Path $codexDir)) {
    New-Item -ItemType Directory -Force -Path $codexDir | Out-Null
    Write-Host "[+] Created Codex skills directory" -ForegroundColor Green
}

# Copy skills
Write-Host "[*] Copying skills to $geminiDir..." -ForegroundColor Yellow
Copy-Item -Path "$sourceDir\*" -Destination $geminiDir -Recurse -Force

Write-Host "[*] Copying skills to $codexDir..." -ForegroundColor Yellow
Copy-Item -Path "$sourceDir\*" -Destination $codexDir -Recurse -Force

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Installation Complete! " -ForegroundColor Green
Write-Host " Please restart your AI Assistant (Codex/Gemini) to load the new skills." -ForegroundColor White
Write-Host "=========================================" -ForegroundColor Cyan
