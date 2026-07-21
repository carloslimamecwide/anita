#!/bin/bash
set -e

# === Setup Mariscos da Anita na VPS ===
# Executar uma vez na VPS (Ubuntu 22.04/24.04)
# Requisitos: Docker + Docker Compose ja instalados

DOMAIN="mariscosdaanita.webfusionlab.pt"
EMAIL="admin@webfusionlab.pt"
APP_DIR="/opt/mariscos-da-anita"

echo "=== 1. Criar directorio do projecto ==="
sudo mkdir -p "$APP_DIR"
sudo chown "$USER:$USER" "$APP_DIR"

echo "=== 2. Copiar ficheiros do repo ==="
# Se ainda nao tens o repo na VPS:
# git clone <repo-url> "$APP_DIR"
# OU copiar manualmente os ficheiros de producao

echo "=== 3. Configurar .env ==="
if [ ! -f "$APP_DIR/.env" ]; then
  cp "$APP_DIR/.env.example" "$APP_DIR/.env"
  echo "Editar $APP_DIR/.env com os valores reais!"
  echo "Variaveis obrigatorias:"
  echo "  RESEND_API_KEY"
  echo "  CONTACT_TO_EMAIL"
  echo "  CONTACT_FROM_EMAIL"
  echo "  NEXT_PUBLIC_WHATSAPP_NUMBER"
  echo "  NEXT_PUBLIC_SITE_URL=https://$DOMAIN"
fi

echo "=== 4. Configurar self-hosted runner GitHub Actions ==="
# Ir a: https://github.com/<user>/<repo>/settings/actions/runners
# Clicar em "New self-hosted runner"
# Copiar e executar os comandos de setup
# Depois instalar como servico:
# sudo ./svc.sh install
# sudo ./svc.sh start

echo "=== 5. Criar nginx.conf ==="
# Copiar nginx.conf do repo para $APP_DIR/nginx.conf

echo "=== 6. Build e levantar containers ==="
cd "$APP_DIR"
docker compose -f docker-compose.production.yml up -d nginx
sleep 3

echo "=== 7. Certbot (HTTPS) ==="
sudo apt-get update && sudo apt-get install -y certbot
sudo certbot certonly --webroot \
  -w /var/lib/letsencrypt \
  -d "$DOMAIN" \
  --email "$EMAIL" \
  --agree-tos \
  --non-interactive

echo "=== 8. Ativar nginx com SSL ==="
# Atualizar nginx.conf para incluir listener 443 + cert paths
# Depois reiniciar:
docker compose -f docker-compose.production.yml up -d

echo "=== 9. Configurar DNS ==="
echo "Assegurar que $DOMAIN aponta para o IP desta VPS"
echo "  Tipo: A Record"
echo "  Valor: $(curl -s ifconfig.me)"

echo "=== Setup concluido! ==="
echo "Site: https://$DOMAIN"
echo "Logs: docker compose -f docker-compose.production.yml logs -f"
