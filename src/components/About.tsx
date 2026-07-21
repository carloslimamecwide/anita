import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="sobre" className="bg-foam py-20 md:py-28">
      <div className="container-narrow section-pad grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <ScrollReveal className="relative">
          <div className="absolute -left-3 -top-3 h-24 w-24 rounded-full bg-sand/80 md:-left-6 md:-top-6" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] shadow-xl shadow-atlantic/10">
            <Image
              src="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=1200&q=80"
              alt="Barcos de pesca no Algarve"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 max-w-[14rem] rounded-xl border border-line bg-cream p-4 shadow-lg md:-right-6">
            <p className="font-display text-lg leading-snug text-atlantic">
              Base em Olhão, coração da Ria Formosa.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral">
            A empresa
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-atlantic md:text-5xl">
            Marisco com nome e com rosto
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              A <strong className="font-semibold text-ink">Mariscos da Anita</strong> nasce
              em Olhão para servir quem vive da cozinha todos os dias: restaurantes,
              marisqueiras e equipas HORECA que precisam de produto fiável, fresco e
              com conversa directa.
            </p>
            <p>
              Sem intermediários desnecessários. Sabemos o que a lota dá, o que o
              cliente pede e o ritmo de uma serviço de almoço ou jantar no Algarve.
            </p>
            <p>
              Trabalhamos com regularidade e proximidade — porque confiar no fornecedor
              é metade do prato.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Produto fresco e seleccionado",
              "Relação directa com a Anita",
              "Entregas no Algarve e Alentejo",
              "Flexibilidade para o teu serviço",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-lg border border-line/80 bg-cream/60 px-3.5 py-3 text-sm font-medium text-ink"
              >
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-sea" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
