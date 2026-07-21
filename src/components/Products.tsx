import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const products = [
  {
    title: "Camarões & gambas",
    desc: "Vários calibres para grelha, arroz e petiscos de serviço.",
    tag: "Clássico",
    img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=75",
    alt: "Camarão fresco",
  },
  {
    title: "Moluscos",
    desc: "Amêijoa, berbigão, mexilhão e o que a maré e a época dão.",
    tag: "Ria",
    img: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=75",
    alt: "Ostras e moluscos",
  },
  {
    title: "Marisco vivo",
    desc: "Para quem serve à mesa com frescura que se vê e se sente.",
    tag: "Premium",
    img: "https://images.unsplash.com/photo-1553659971-f01207815844?auto=format&fit=crop&w=800&q=75",
    alt: "Sapateira",
  },
  {
    title: "Peixe do dia",
    desc: "Selecção conforme disponibilidade — pergunta no WhatsApp.",
    tag: "Sazonal",
    img: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=800&q=75",
    alt: "Peixe fresco do dia",
  },
  {
    title: "Polvo & cefalópodes",
    desc: "Para lagareiro, à lagareiro da casa ou petiscos de partilha.",
    tag: "Carta",
    img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=75",
    alt: "Prato de marisco",
  },
  {
    title: "Encomendas especiais",
    desc: "Eventos, menus degustação ou quantidades para fim-de-semana.",
    tag: "Sob consulta",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=75",
    alt: "Mesa de restaurante",
  },
];

export function Products() {
  return (
    <section id="produtos" className="bg-sand/40 py-20 md:py-28">
      <div className="container-narrow section-pad">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral">
            O que fornecemos
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-atlantic md:text-5xl">
            Produto de mar, sem lista rígida de supermercado
          </h2>
          <p className="mt-4 text-lg text-muted">
            Os preços e a disponibilidade mudam com a maré e a época. Diz-nos o que
            precisas — fechamos quantidades e condições no WhatsApp.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ScrollReveal key={product.title} delay={(i % 3) * 90} as="article">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-atlantic-deep/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sand backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-atlantic">{product.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{product.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
