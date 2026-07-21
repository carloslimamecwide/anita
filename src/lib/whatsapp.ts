import type { ContactInput } from "./validations";

export function getWhatsAppNumber(): string {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
}

export function buildWhatsAppUrl(prefill?: Partial<ContactInput>): string {
  const number = getWhatsAppNumber();
  const lines = [
    "Olá! Sou de um restaurante e gostava de encomendar marisco.",
    prefill?.name ? `Nome: ${prefill.name}` : null,
    prefill?.restaurant ? `Restaurante: ${prefill.restaurant}` : null,
    prefill?.zone ? `Zona: ${prefill.zone}` : null,
    prefill?.phone ? `Tel: ${prefill.phone}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  if (!number) {
    return `https://wa.me/?text=${text}`;
  }
  return `https://wa.me/${number}?text=${text}`;
}
