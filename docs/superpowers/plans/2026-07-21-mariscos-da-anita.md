# Mariscos da Anita Implementation Plan

> **For agentic workers:** Implementação feita em sessão inline após aprovação do design.

**Goal:** Landing HORECA Next.js com formulário Resend + WhatsApp, deploy Docker na VPS.

**Architecture:** One-page App Router; API route envia email; sem DB.

**Tech Stack:** Next.js 16, TypeScript, Tailwind 4, Resend, Zod, Docker

---

## Tasks

- [x] Scaffold Next.js em `~/Desktop/mariscos-da-anita`
- [x] Design system + componentes de secção
- [x] API `/api/contact` + validação + rate limit
- [x] Docker + README + env example
- [x] Spec em `docs/superpowers/specs/`
