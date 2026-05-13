import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Jonas Weko — Risque politique et monétaire en Afrique de l’Ouest",
  description: "Analyse indépendante pour investisseurs, banques et institutions exposées à la zone franc, à l’Eco et aux dynamiques de l’AES.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {plausibleDomain ? (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        ) : null}
        {children}
      </body>
    </html>
  );
}
