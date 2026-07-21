# Mariscos da Anita

Landing page HORECA para distribuição de marisco fresco a partir de **Olhão** (Algarve e Alentejo).

- Next.js (App Router) + TypeScript + Tailwind
- Formulário de contacto → email via **Resend** (grátis)
- Pedidos reais via **WhatsApp** (`wa.me`)
- Deploy na VPS com **Docker + GitHub Actions (ghcr.io)**

## Desenvolvimento local

```bash
cd ~/Desktop/mariscos-da-anita
cp .env.example .env
# edita .env com as tuas chaves
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

| Variável | Descrição |
|----------|-----------|
| `RESEND_API_KEY` | API key do [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Email da Anita (destino) |
| `CONTACT_FROM_EMAIL` | Remetente verificado no Resend |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número internacional sem `+` (ex: `351912345678`) |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site |

**Resend em testes:** podes usar `CONTACT_FROM_EMAIL=Mariscos da Anita <onboarding@resend.dev>` e só enviar para o email da conta Resend até verificares o domínio.

## Produção na VPS

### Setup inicial

1. **Criar repo no GitHub** e fazer push do código
2. **DNS:** Criar registo `A` para `mariscosdaanita.webfusionlab.pt` → IP da VPS
3. **Instalar self-hosted runner:**
   ```bash
   # Ir a Settings → Actions → Runners → New self-hosted runner
   # Copiar e executar os comandos de download + config
   sudo ./svc.sh install
   sudo ./svc.sh start
   ```
4. **Configurar .env na VPS:**
   ```bash
   cd /opt/mariscos-da-anita
   cp .env.example .env
   nano .env  # preencher valores reais
   ```
5. **Correr o setup:**
   ```bash
   chmod +x setup-vps.sh
   ./setup-vps.sh
   ```

### Deploy automático

Cada push ao branch `master`:
1. GitHub Actions constrói a imagem Docker → push para `ghcr.io`
2. Self-hosted runner na VPS faz pull + restart automático

### Deploy manual

```bash
cd /opt/mariscos-da-anita
chmod +x deploy.sh
./deploy.sh
```

### Ver logs

```bash
docker compose -f docker-compose.production.yml logs -f web
```

### Rollback

```bash
# Na VPS, voltar à imagem anterior
docker compose -f docker-compose.production.yml up -d web --no-deps
```

## Estrutura

```
src/app/                 # páginas e API
src/app/api/contact/     # POST formulário → Resend
src/components/          # secções da landing
src/lib/                 # validação, email, whatsapp, rate-limit
```

## Conteúdo a personalizar

1. Número WhatsApp e emails no `.env`
2. Textos em `src/components/*` (copy placeholder)
3. Fotos reais da Anita (substituir URLs Unsplash no Hero/About)
4. Domínio no DNS + nginx.conf

## Scripts

| Comando | Função |
|---------|--------|
| `npm run dev` | Desenvolvimento |
| `npm run build` | Build produção |
| `npm start` | Servir build local |
| `npm run lint` | ESLint |
