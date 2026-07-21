import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ContactForm } from "./ContactForm";
import { ScrollReveal } from "./ScrollReveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact() {
  const wa = buildWhatsAppUrl();
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const displayPhone = number
    ? number.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "+$1 $2 $3 $4")
    : "Definir em .env";

  return (
    <section id="contacto" className="relative bg-sand pb-20 pt-0 md:pb-28">
      <svg
        className="wave-divider -mt-px text-foam"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,16 C1200,48 960,0 720,24 C480,48 240,16 0,32 Z"
        />
      </svg>

      <div className="container-narrow section-pad grid gap-12 pt-14 md:pt-20 lg:grid-cols-5 lg:gap-16">
        <ScrollReveal className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral">
            Contacto
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-atlantic md:text-5xl">
            Vamos falar do teu serviço
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Preenche o formulário ou manda mensagem directa. Respondemos o mais
            depressa possível — especialmente em horário comercial.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-line bg-cream p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Base
              </p>
              <p className="mt-1 font-display text-xl text-atlantic">Olhão, Algarve</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                WhatsApp
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 font-display text-xl text-sea no-underline hover:underline"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {displayPhone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Ideal para
              </p>
              <p className="mt-1 text-ink">Restaurantes, marisqueiras e HORECA</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} className="lg:col-span-3">
          <div className="relative rounded-[1.75rem] border border-line bg-cream p-6 shadow-sm md:p-8">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
