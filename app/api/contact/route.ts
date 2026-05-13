import { NextResponse } from "next/server";
import { getMailConfig, getResendClient, isValidProfessionalEmail } from "@/lib/resend";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
};

const allowedSubjects = new Set([
  "Briefing dirigeants",
  "Demande de note d’analyse",
  "Mission / retainer",
  "Prise de contact générale",
]);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const subject = String(body.subject ?? "").trim();

    if (!name || !isValidProfessionalEmail(email) || !allowedSubjects.has(subject)) {
      return NextResponse.json({ error: "Veuillez vérifier les informations saisies." }, { status: 400 });
    }

    const resend = getResendClient();
    const { from, contactTo } = getMailConfig();

    await resend.emails.send({
      from,
      to: contactTo,
      replyTo: email,
      subject: `Nouvelle demande — ${subject}`,
      text: [`Nom / Organisation : ${name}`, `Email : ${email}`, `Objet : ${subject}`].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact_form_error", error);
    return NextResponse.json({ error: "Le message n’a pas pu être envoyé pour le moment." }, { status: 500 });
  }
}
