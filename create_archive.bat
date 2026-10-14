@echo off
echo ============================================
echo   Создание архива проекта ВЦ-25М
echo ============================================
echo.

:: Создаём папку для архива
if not exist "archive" mkdir archive

:: Копируем все файлы проекта в папку archive
xcopy /E /I /Y "src" "archive\src"
copy /Y "index.html" "archive\"
copy /Y "package.json" "archive\"
copy /Y "package-lock.json" "archive\"
copy /Y "vite.config.js" "archive\"
copy /Y "tsconfig.json" "archive\"
copy /Y "README.md" "archive\"
copy /Y ".gitignore" "archive\"

echo.
echo ============================================
echo   Файлы скопированы в папку "archive"
echo ============================================
echo.
echo Теперь вы можете:
echo   1. Открыть папку "archive"
echo   2. Заархивировать её в ZIP
echo   3. Загрузить в репозиторий на GitHub
echo.
echo Или выполните команду для создания ZIP:
echo   powershell Compress-Archive -Path archive\* -DestinationPath project-vc25m.zip
echo.
pause
