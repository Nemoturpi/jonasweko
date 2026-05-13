"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const subjects = [
  "Briefing dirigeants",
  "Demande de note d’analyse",
  "Mission / retainer",
  "Prise de contact générale",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Impossible d’envoyer la demande.");
      }

      trackEvent("contact_form_submit", { subject: String(formData.get("subject") ?? "") });
      setStatus("success");
      form.reset();
    } catch (caughtError) {
      setStatus("error");
      setError(caughtError instanceof Error ? caughtError.message : "Une erreur est survenue.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-7">
      <label className="block text-sm text-ink/80">
        Nom / Organisation
        <input name="name" required className="mt-2 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-ink outline-none transition focus:border-gold" />
      </label>
      <label className="block text-sm text-ink/80">
        Email professionnel
        <input name="email" type="email" required inputMode="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-ink outline-none transition focus:border-gold" />
      </label>
      <label className="block text-sm text-ink/80">
        Objet de la demande
        <select name="subject" required className="mt-2 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-ink outline-none transition focus:border-gold">
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-gold px-6 py-3 font-medium text-night transition hover:bg-[#d8ba67] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer la demande"}
      </button>
      {status === "success" && <p className="text-sm text-gold">Votre demande a bien été transmise. Vous recevrez une réponse rapidement.</p>}
      {status === "error" && <p className="text-sm text-red-300">{error}</p>}
    </form>
  );
}
