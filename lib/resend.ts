import { Resend } from "resend";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(apiKey);
}

export function getMailConfig() {
  const from = process.env.RESEND_FROM;
  const contactTo = process.env.CONTACT_TO;

  if (!from || !contactTo) {
    throw new Error("RESEND_FROM and CONTACT_TO must be configured");
  }

  return { from, contactTo };
}

export function isValidProfessionalEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
}
