import { Resend } from "resend";
import type { ContactInput } from "./validations";

export async function sendContactEmail(data: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Mariscos da Anita <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY em falta");
  }
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL em falta");
  }

  const resend = new Resend(apiKey);
  const subject = `Novo contacto HORECA — ${data.restaurant} (${data.zone})`;

  const html = `
    <div style="font-family: Georgia, serif; color: #0c2a3a; max-width: 560px;">
      <h1 style="font-size: 20px; margin-bottom: 8px;">Novo contacto do site</h1>
      <p style="color: #5a6f7a; margin-top: 0;">Mariscos da Anita — formulário HORECA</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;"><strong>Nome</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;"><strong>Restaurante</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;">${escapeHtml(data.restaurant)}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;"><strong>Telefone</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;"><strong>Email</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;"><strong>Zona</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;">${escapeHtml(data.zone)}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;"><strong>Melhor horário</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e8e2d6;">${escapeHtml(data.preferredTime)}</td></tr>
        <tr><td style="padding: 8px 0; vertical-align: top;"><strong>Mensagem</strong></td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(data.message)}</td></tr>
      </table>
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message || "Falha ao enviar email");
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
