import { ScrollReveal } from "./ScrollReveal";

const algarve = [
  "Olhão",
  "Faro",
  "Loulé",
  "Tavira",
  "Albufeira",
  "Portimão",
  "Lagos",
  "e arredores",
];

const alentejo = [
  "Évora",
  "Beja",
  "Sines",
  "Costa Alentejana",
  "e outras zonas sob consulta",
];

export function Zones() {
  return (
    <section id="zonas" className="bg-foam py-20 md:py-28">
      <div className="container-narrow section-pad">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral">
            Distribuição
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-atlantic md:text-5xl">
            Algarve e Alentejo
          </h2>
          <p className="mt-4 text-lg text-muted">
            Partimos de Olhão e cobrimos a costa e o interior onde os nossos clientes
            HORECA precisam de nós. A tua cidade não está na lista? Pergunta — muitas
            vezes dá.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-[1.75rem] border border-line bg-gradient-to-br from-cream to-sand/50 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sea text-sm font-bold text-cream">
                  AG
                </span>
                <h3 className="font-display text-3xl text-atlantic">Algarve</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {algarve.map((z) => (
                  <li
                    key={z}
                    className="rounded-full border border-line bg-foam px-3.5 py-1.5 text-sm font-medium text-ink"
                  >
                    {z}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="h-full rounded-[1.75rem] border border-line bg-gradient-to-br from-atlantic to-sea p-8 text-foam md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-sm font-bold text-cream">
                  AL
                </span>
                <h3 className="font-display text-3xl text-cream">Alentejo</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {alentejo.map((z) => (
                  <li
                    key={z}
                    className="rounded-full border border-foam/20 bg-atlantic-deep/30 px-3.5 py-1.5 text-sm font-medium text-foam"
                  >
                    {z}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
