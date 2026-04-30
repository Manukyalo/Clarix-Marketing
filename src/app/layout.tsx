import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clarix | Global Logistics Intelligence Platform",
  description:
    "Clarix powers the world's most resilient logistics networks with AI-driven precision, real-time batch auditing, and enterprise-grade security. Built for global trade at scale.",
  keywords: [
    "logistics intelligence",
    "port management",
    "supply chain AI",
    "batch auditing",
    "enterprise logistics",
    "global trade platform",
  ],
  openGraph: {
    title: "Clarix | Global Logistics Intelligence Platform",
    description:
      "Unifying complex supply chain data into a single, immutable source of truth.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcf8f8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} ${inter.variable}`}>
        <Toaster position="bottom-right" richColors />
        {children}
      </body>
    </html>
  );
}
