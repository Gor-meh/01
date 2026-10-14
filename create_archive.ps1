# PowerShell скрипт для создания архива проекта ВЦ-25М
# Запуск: правый клик -> "Выполнить с помощью PowerShell"

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Создание архива проекта ВЦ-25М" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$archiveName = "project-vc25m.zip"
$tempFolder = "archive_temp"

# Удаляем старые файлы если есть
if (Test-Path $archiveName) { Remove-Item $archiveName -Force }
if (Test-Path $tempFolder) { Remove-Item $tempFolder -Recurse -Force }

# Создаём временную папку
New-Item -ItemType Directory -Path $tempFolder | Out-Null

# Копируем файлы
Copy-Item -Path "src" -Destination "$tempFolder\src" -Recurse
Copy-Item -Path "index.html" -Destination $tempFolder
Copy-Item -Path "package.json" -Destination $tempFolder
Copy-Item -Path "package-lock.json" -Destination $tempFolder
Copy-Item -Path "vite.config.js" -Destination $tempFolder
Copy-Item -Path "tsconfig.json" -Destination $tempFolder
Copy-Item -Path "README.md" -Destination $tempFolder
Copy-Item -Path ".gitignore" -Destination $tempFolder

# Создаём ZIP
Compress-Archive -Path "$tempFolder\*" -DestinationPath $archiveName

# Удаляем временную папку
Remove-Item $tempFolder -Recurse -Force

Write-Host ""
Write-Host "✅ Архив создан: $archiveName" -ForegroundColor Green
Write-Host ""
Write-Host "Содержимое архива:" -ForegroundColor Yellow
Write-Host "  📁 src/" -ForegroundColor White
Write-Host "  📄 index.html" -ForegroundColor White
Write-Host "  📄 package.json" -ForegroundColor White
Write-Host "  📄 package-lock.json" -ForegroundColor White
Write-Host "  📄 vite.config.js" -ForegroundColor White
Write-Host "  📄 tsconfig.json" -ForegroundColor White
Write-Host "  📄 README.md" -ForegroundColor White
Write-Host "  📄 .gitignore" -ForegroundColor White
Write-Host ""
Write-Host "Для загрузки в репозиторий:" -ForegroundColor Cyan
Write-Host "  1. Распакуйте архив" -ForegroundColor White
Write-Host "  2. Откройте терминал в папке проекта" -ForegroundColor White
Write-Host "  3. Выполните: git init && git add . && git commit -m 'init'" -ForegroundColor White
Write-Host "  4. git remote add origin https://github.com/USERNAME/01.git" -ForegroundColor White
Write-Host "  5. git push -u origin main" -ForegroundColor White
Write-Host ""
