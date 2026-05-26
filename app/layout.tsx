import type { Metadata } from "next";
import { Hanken_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientEffects from "@/components/ClientEffects";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--hanken-font",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--inter-font",
});

export const metadata: Metadata = {
  title: "Toni Grunwald | Product Strategist & Startup Operator",
  description:
    "German-born product strategist, startup operator, and AI-focused builder helping companies move from scattered ideas to real execution.",
  openGraph: {
    title: "Toni Grunwald | Product Strategist & Startup Operator",
    description:
      "I build, launch, and improve digital products by combining strategy, operations, AI, marketing, and execution.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toni Grunwald | Product Strategist & Startup Operator",
    description:
      "German-born product strategist, startup operator, and AI-focused builder helping companies move from scattered ideas to real execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary selection:text-white overflow-x-hidden">
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
