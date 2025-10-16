# Cleanup script to remove old Next.js files after migration
# Run this after confirming the new React + Vite app works correctly

Write-Host "Cleaning up old Next.js files..." -ForegroundColor Green

# Remove Next.js specific files
$filesToRemove = @(
    "next.config.mjs",
    "next-env.d.ts",
    "postcss.config.mjs"
)

foreach ($file in $filesToRemove) {
    $path = Join-Path $PSScriptRoot $file
    if (Test-Path $path) {
        Remove-Item $path -Force
        Write-Host "Removed: $file" -ForegroundColor Yellow
    }
}

# Remove old directories (that have been moved to src/)
$dirsToRemove = @(
    "app",
    "components",
    "lib", 
    "hooks",
    "styles"
)

foreach ($dir in $dirsToRemove) {
    $path = Join-Path $PSScriptRoot $dir
    if (Test-Path $path) {
        Remove-Item $path -Recurse -Force
        Write-Host "Removed directory: $dir" -ForegroundColor Yellow
    }
}

Write-Host "`nCleanup complete! Old Next.js files have been removed." -ForegroundColor Green
Write-Host "Your React + Vite app is now clean and ready to use." -ForegroundColor Cyan
