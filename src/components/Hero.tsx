import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  const wa = buildWhatsAppUrl();

  return (
    <section
      id="topo"
      className="grain relative overflow-hidden bg-atlantic-deep text-foam"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80"
          alt="Marisco fresco em mesa de madeira"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-atlantic-deep via-atlantic-deep/85 to-atlantic/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-atlantic-deep via-transparent to-atlantic-deep/30" />
      </div>

      <div className="container-narrow section-pad relative grid min-h-[88vh] items-end gap-10 pb-16 pt-24 md:grid-cols-12 md:items-center md:pb-24 md:pt-28">
        <div className="reveal md:col-span-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sand">
            Distribuição HORECA · Desde Olhão
          </p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[1.05] tracking-tight text-cream">
            Marisco fresco da ria
            <span className="block text-sand-dark">para a tua cozinha.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foam/85 md:text-xl">
            Fornecemos restaurantes no Algarve e Alentejo com produto de qualidade,
            trato directo e entregas regulares. Fala connosco — o pedido faz-se no WhatsApp.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon />
              Pedir no WhatsApp
            </a>
            <a href="#contacto" className="btn-secondary">
              Pedir contacto
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-foam/15 pt-8">
            {[
              { k: "Origem", v: "Olhão" },
              { k: "Clientes", v: "HORECA" },
              { k: "Zonas", v: "Algarve & Alentejo" },
            ].map((item) => (
              <div key={item.k}>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sand-dark">
                  {item.k}
                </dt>
                <dd className="mt-1.5 font-display text-xl text-cream md:text-2xl">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="reveal relative md:col-span-5 md:col-start-8" style={{ animationDelay: "120ms" }}>
          <div className="relative ml-auto w-full max-w-md overflow-hidden rounded-2xl border border-foam/15 bg-foam/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=900&q=80"
                alt="Gambas grelhadas com lima"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 380px"
              />
              <span className="absolute left-3 top-3 rounded-full bg-coral px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cream shadow">
                Hoje na lota
              </span>
            </div>
            <p className="mt-3 px-1 font-display text-sm italic text-sand">
              “Da lota à mesa do teu restaurante — com a frescura que o Algarve exige.”
            </p>
          </div>
        </aside>
      </div>

      <svg
        className="wave-divider relative -mb-px text-coral"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,32 C240,48 480,0 720,16 C960,32 1200,48 1440,24 L1440,48 L0,48 Z"
        />
      </svg>
    </section>
  );
}
