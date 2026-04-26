import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700", "800", "900"],
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
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://dwcompany.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
