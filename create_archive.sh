#!/bin/bash
echo "============================================"
echo "  Создание архива проекта ВЦ-25М"
echo "============================================"
echo ""

# Создаём папку для архива
mkdir -p archive

# Копируем все файлы проекта
cp -r src archive/
cp index.html archive/
cp package.json archive/
cp package-lock.json archive/
cp vite.config.js archive/
cp tsconfig.json archive/
cp README.md archive/
cp .gitignore archive/

echo ""
echo "============================================"
echo "  Создание ZIP-архива..."
echo "============================================"

# Создаём ZIP архив
cd archive && zip -r ../project-vc25m.zip . && cd ..

echo ""
echo "✅ Архив создан: project-vc25m.zip"
echo ""
echo "Теперь вы можете:"
echo "  1. Загрузить project-vc25m.zip на GitHub"
echo "  2. Распаковать и выполнить: git init && git add . && git commit -m 'init' && git push"
echo ""
