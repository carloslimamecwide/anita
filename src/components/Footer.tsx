import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();
  const wa = buildWhatsAppUrl();

  return (
    <footer className="relative bg-atlantic-deep text-foam">
      <svg
        className="wave-divider -mt-px text-sand"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,20 C1200,44 960,4 720,20 C480,36 240,44 0,24 Z"
        />
      </svg>

      <div className="container-narrow section-pad flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-cream">Mariscos da Anita</p>
          <p className="mt-2 max-w-sm text-foam/70">
            Distribuição de marisco fresco a partir de Olhão — Algarve e Alentejo.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#sobre" className="text-foam/80 no-underline hover:text-cream">
            Sobre
          </a>
          <a href="#produtos" className="text-foam/80 no-underline hover:text-cream">
            Produtos
          </a>
          <a href="#contacto" className="text-foam/80 no-underline hover:text-cream">
            Contacto
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foam/80 no-underline hover:text-cream"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-foam/10">
        <div className="container-narrow section-pad flex flex-col gap-2 py-5 text-xs text-foam/50 sm:flex-row sm:justify-between">
          <p>© {year} Mariscos da Anita. Todos os direitos reservados.</p>
          <p>Site informativo — encomendas via WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
