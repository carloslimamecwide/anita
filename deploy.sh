#!/bin/bash
set -e

cd /opt/mariscos-da-anita

echo "=== Deploy Mariscos da Anita ==="
echo "A fazer pull da imagem mais recente..."
docker compose -f docker-compose.production.yml pull
docker compose -f docker-compose.production.yml up -d --remove-orphans
docker image prune -f
echo "Deploy concluido em $(date)"
