# Mariscos da Anita — Design Spec

**Data:** 2026-07-21  
**Estado:** Aprovado na sessão de brainstorming

## Objectivo

Landing one-page para a empresa de distribuição de marisco **Mariscos da Anita** (Olhão), dirigida a restaurantes/HORECA no Algarve e Alentejo.

## Âmbito v1

### Inclui
- Landing moderna estilo costa portuguesa
- CTA WhatsApp (`wa.me`) para o pedido real
- Formulário de contacto → email via Resend
- Deploy Docker na VPS do dono do site

### Exclui
- Catálogo com preços / checkout
- Base de dados / painel de leads
- WhatsApp Business API paga
- Multi-idioma, blog, faturação

## Utilizadores

- **Primário:** gestores/chefs de restaurantes (B2B)
- **Operador:** Anita (recebe emails e mensagens WhatsApp)

## Arquitectura

```
Browser → Next.js landing
       → CTA WhatsApp (wa.me)
       → POST /api/contact → Resend → email Anita
```

Sem base de dados. Rate limit em memória + honeypot.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS v4
- Resend + Zod
- Docker standalone output
- Imagens: Unsplash (licença livre) até fotos reais

## Formulário

Campos: nome, restaurante, telefone, email, zona/cidade, melhor horário, mensagem, honeypot.

## Visual

- Cores: atlântico profundo, foam/areia, accent coral
- Tipografia: Fraunces (display) + Source Sans 3 (body)
- Tom: peixaria moderna de lota + produtor local (não SaaS)

## Secções

Header · Hero · Sobre · Produtos · Como funciona · Zonas · Contacto · Footer · WhatsApp sticky

## Deploy

VPS: Docker Compose na porta 3000; HTTPS via Caddy/nginx opcional.
