import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppSticky() {
  const wa = buildWhatsAppUrl();

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp fixed bottom-5 right-5 z-50 shadow-lg shadow-black/20 md:bottom-8 md:right-8"
      aria-label="Contactar no WhatsApp"
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
