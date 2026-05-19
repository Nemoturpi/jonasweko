import { access } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { getMailConfig, getResendClient, isValidProfessionalEmail } from "@/lib/resend";

type LeadRequest = {
  email?: unknown;
};

async function noteExists() {
  try {
    await access(path.join(process.cwd(), "public", "note-ouverture.pdf"));
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadRequest;
    const email = String(body.email ?? "").trim().toLowerCase();

    if (!isValidProfessionalEmail(email)) {
      return NextResponse.json({ error: "Veuillez saisir un email professionnel valide." }, { status: 400 });
    }

    const hasPdf = await noteExists();
    const resend = getResendClient();
    const { from, contactTo } = getMailConfig();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
    const pdfUrl = `${siteUrl}/note-ouverture.pdf`;

    await Promise.all([
      resend.emails.send({
        from,
        to: email,
        subject: hasPdf ? "Votre note d’ouverture Jonas Weko" : "Votre demande de note est enregistrée",
        text: hasPdf
          ? `Bonjour,\n\nVous pouvez télécharger la note d’ouverture ici : ${pdfUrl}\n\nBien cordialement,\nJonas Weko`
          : "Bonjour,\n\nVous recevrez la note dès sa publication.\n\nBien cordialement,\nJonas Weko",
      }),
      resend.emails.send({
        from,
        to: contactTo,
        replyTo: email,
        subject: "Nouveau lead — note d’ouverture",
        text: [`Email : ${email}`, `PDF disponible : ${hasPdf ? "oui" : "non"}`].join("\n"),
      }),
    ]);

    return NextResponse.json({
      ok: true,
      hasPdf,
      message: hasPdf ? "Un email contenant le lien de téléchargement vient de vous être envoyé." : "Votre demande est enregistrée. Vous recevrez la note dès sa publication.",
    });
  } catch (error) {
    console.error("lead_form_error", error);
    return NextResponse.json({ error: "La demande n’a pas pu être envoyée pour le moment." }, { status: 500 });
  }
}
