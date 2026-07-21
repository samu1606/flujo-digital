import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "FlujoDigital";
const SITE_DESCRIPTION =
  "Agencia de desarrollo web, apps móviles, bots de WhatsApp con IA y automatizaciones. Páginas profesionales, RAG Privado y CRM. Pereira, Colombia.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://flujodigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Desarrollo Web, Apps & IA`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "desarrollo web",
    "apps móviles",
    "bot WhatsApp",
    "inteligencia artificial",
    "automatización",
    "RAG privado",
    "CRM",
    "páginas web Colombia",
    "agencia digital Pereira",
  ],
  authors: [{ name: "FlujoDigital" }],
  creator: "FlujoDigital",
  publisher: "FlujoDigital",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Desarrollo Web, Apps & IA`,
    description: SITE_DESCRIPTION,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME + " \u2014 Desarrollo Web, Apps & IA",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
