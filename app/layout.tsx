import type { Metadata } from "next";
import { Nunito, Great_Vibes } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ninartcrochê | Peças de Crochê Artesanais",
  description:
    "Peças de crochê feitas à mão com amor e carinho. Especializada em tapetes, roupas de praia, souplats, chaveiros e bolsas. Entregamos para todo o Brasil!",
  keywords:
    "crochê artesanal, bolsas de crochê, tapetes crochê, roupas de praia crochê, souplats crochê, Brasília, peças artesanais",
  authors: [{ name: "Ninartcrochê" }],
  openGraph: {
    title: "Ninartcrochê | Peças de Crochê Artesanais",
    description:
      "Peças de crochê feitas à mão com amor. Tapetes, roupas de praia, souplats, chaveiros e bolsas. Entregamos para todo o Brasil!",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninartcrochê | Peças de Crochê Artesanais",
    description: "Peças de crochê artesanais feitas à mão com amor. Entregamos para todo o Brasil!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${greatVibes.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://ninartecroche.vercel.app" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
