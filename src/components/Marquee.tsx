const items = [
  "Camarão",
  "Amêijoa",
  "Sapateira",
  "Polvo",
  "Ostras",
  "Peixe do dia",
  "Berbigão",
  "Marisco vivo",
  "Mexilhão",
  "Percebes",
];

export function Marquee() {
  const row = items.map((i) => `${i} · `).join("");

  return (
    <div className="marquee overflow-hidden bg-coral py-3.5 md:py-4" aria-hidden="true">
      <div className="marquee-track flex w-max whitespace-nowrap">
        <span className="marquee-row font-display text-lg italic text-cream md:text-2xl">
          {row}
        </span>
        <span className="marquee-row font-display text-lg italic text-cream md:text-2xl">
          {row}
        </span>
      </div>
    </div>
  );
}
