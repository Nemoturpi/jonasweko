"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function LeadMagnetForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      const data = (await response.json()) as { message?: string; error?: string; hasPdf?: boolean };

      if (!response.ok) {
        throw new Error(data.error ?? "Impossible d’envoyer la note.");
      }

      trackEvent("lead_magnet_submit", { has_pdf: Boolean(data.hasPdf) });
      setStatus("success");
      setMessage(data.message ?? "Votre demande a bien été enregistrée.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
      <input
        name="email"
        type="email"
        required
        inputMode="email"
        placeholder="Email professionnel"
        className="min-h-12 flex-1 rounded-full border border-white/10 bg-night/80 px-5 text-ink outline-none transition placeholder:text-ink/40 focus:border-gold"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-12 rounded-full bg-gold px-7 font-medium text-night transition hover:bg-[#d8ba67] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi…" : "Recevoir la note"}
      </button>
      {message && <p className={`sm:basis-full text-sm ${status === "error" ? "text-red-300" : "text-gold"}`}>{message}</p>}
    </form>
  );
}
