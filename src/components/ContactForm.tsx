"use client";

import { FormEvent, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { PREFERRED_TIMES, ZONES, type ContactInput } from "@/lib/validations";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Status = "idle" | "loading" | "success" | "error";

const initial: ContactInput = {
  name: "",
  restaurant: "",
  phone: "",
  email: "",
  zone: "",
  preferredTime: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactInput>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof ContactInput>(key: K, value: ContactInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Algo correu mal. Tenta o WhatsApp.");
        return;
      }

      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
      setError("Sem ligação ao servidor. Contacta-nos no WhatsApp.");
    }
  }

  const wa = buildWhatsAppUrl(form);

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sea/20 bg-sea/5 p-8 text-center">
        <p className="font-display text-3xl text-atlantic">Mensagem enviada</p>
        <p className="mt-3 text-muted">
          Obrigado. A Anita recebe o teu contacto por email. Se quiseres acelerar o
          pedido, continua no WhatsApp.
        </p>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6"
        >
          <WhatsAppIcon />
          Continuar no WhatsApp
        </a>
        <button
          type="button"
          className="mt-4 block w-full text-sm font-medium text-sea underline-offset-2 hover:underline"
          onClick={() => setStatus("idle")}
        >
          Enviar outro contacto
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" htmlFor="name">
          <input
            id="name"
            name="name"
            className="input-field"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="O teu nome"
          />
        </Field>
        <Field label="Restaurante" htmlFor="restaurant">
          <input
            id="restaurant"
            name="restaurant"
            className="input-field"
            required
            value={form.restaurant}
            onChange={(e) => update("restaurant", e.target.value)}
            placeholder="Nome do estabelecimento"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className="input-field"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="9xx xxx xxx"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="email@restaurante.pt"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Zona / cidade" htmlFor="zone">
          <select
            id="zone"
            name="zone"
            className="input-field"
            required
            value={form.zone}
            onChange={(e) => update("zone", e.target.value)}
          >
            <option value="">Selecciona…</option>
            {ZONES.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Melhor horário" htmlFor="preferredTime">
          <select
            id="preferredTime"
            name="preferredTime"
            className="input-field"
            required
            value={form.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
          >
            <option value="">Selecciona…</option>
            {PREFERRED_TIMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensagem" htmlFor="message">
        <textarea
          id="message"
          name="message"
          className="input-field min-h-[120px] resize-y"
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Ex.: precisamos de camarão e amêijoa 2x por semana…"
        />
      </Field>

      {/* Honeypot anti-spam */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website || ""}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {error && (
        <p className="rounded-lg border border-coral/30 bg-coral/10 px-4 py-3 text-sm text-coral" role="alert">
          {error}{" "}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Abrir WhatsApp
          </a>
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "A enviar…" : "Enviar contacto"}
        </button>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <WhatsAppIcon />
          Ou no WhatsApp
        </a>
      </div>

      <p className="text-sm text-muted">
        O pedido em si trata-se por WhatsApp. Este formulário serve para a Anita te
        contactar com calma.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label-field" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}
