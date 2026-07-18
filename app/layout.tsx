import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "KE Dev Studio | Desenvolvimento de Sites Profissionais",
    template: "%s | KE Dev Studio",
  },

  description:
    "A KE Dev Studio desenvolve sites modernos, rápidos, responsivos e otimizados para empresas, profissionais e negócios que desejam crescer na internet.",

  keywords: [
    "Desenvolvimento de Sites",
    "Criação de Sites",
    "Landing Page",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Website",
    "Site Responsivo",
    "Desenvolvedor Web",
    "KE Dev Studio",
    "Kaio Eduardo",
    "Maranhão",
  ],

  authors: [
    {
      name: "Kaio Eduardo",
    },
  ],

  creator: "Kaio Eduardo",

  publisher: "KE Dev Studio",

  metadataBase: new URL("https://ke-dev-studio.vercel.app"),

  verification: {
    google: "Te7kSI9M_ajlfQmMhUG7MrFQC5pKNLTaz_pUCJjRitU",
  },

  openGraph: {
    title: "KE Dev Studio",
    description:
      "Sites profissionais, rápidos e modernos para empresas e negócios.",

    url: "https://ke-dev-studio.vercel.app",

    siteName: "KE Dev Studio",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KE Dev Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KE Dev Studio",
    description:
      "Sites modernos, rápidos e profissionais.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}