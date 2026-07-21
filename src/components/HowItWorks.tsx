import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "./ScrollReveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

const steps = [
  {
    n: "01",
    title: "Contactas",
    text: "WhatsApp ou formulário no site. Diz o restaurante, a zona e o que precisas.",
  },
  {
    n: "02",
    title: "Orçamento e disponibilidade",
    text: "Confirmamos produto, quantidades e condições — de forma directa, sem rodeios.",
  },
  {
    n: "03",
    title: "Entrega na tua zona",
    text: "Distribuímos no Algarve e Alentejo, alinhados com o ritmo do teu serviço.",
  },
];

export function HowItWorks() {
  const wa = buildWhatsAppUrl();

  return (
    <section id="como-funciona" className="bg-atlantic py-20 text-foam md:py-28">
      <div className="container-narrow section-pad">
        <ScrollReveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-dark">
              Processo simples
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-cream md:text-5xl">
              Do contacto ao prato, em três passos
            </h2>
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0">
            <WhatsAppIcon />
            Começar no WhatsApp
          </a>
        </ScrollReveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 110} as="li">
              <div className="h-full rounded-2xl border border-foam/10 bg-atlantic-deep/40 p-7">
                <span className="font-display text-5xl text-sea/80">{step.n}</span>
                <h3 className="mt-4 font-display text-2xl text-cream">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-foam/75">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
