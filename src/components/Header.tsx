"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#zonas", label: "Zonas" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = buildWhatsAppUrl();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/60 bg-foam/90 backdrop-blur-md">
        <div className="container-narrow section-pad flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <a href="#topo" className="flex items-center no-underline" onClick={() => setOpen(false)} aria-label="Mariscos da Anita — início">
            <Image
              src="/logo-full-t.png"
              alt="Mariscos da Anita — Olhão"
              width={180}
              height={44}
              priority
              className="h-9 w-auto md:h-11"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/80 no-underline transition-colors hover:text-sea"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-3.5 !py-2 text-sm md:!px-4">
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-5" aria-hidden>
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-5 bg-atlantic transition-all duration-200 ${
                    open ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-atlantic transition-opacity duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 block h-0.5 w-5 bg-atlantic transition-all duration-200 ${
                    open ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 bg-atlantic-deep pt-20 lg:hidden" role="dialog" aria-modal="true">
          <nav className="section-pad flex h-full flex-col gap-1 pt-4" aria-label="Menu móvel">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-foam/10 py-4 font-display text-3xl text-cream no-underline transition-colors hover:text-sand"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 self-start"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon />
              Pedir no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
