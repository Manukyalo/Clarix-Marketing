import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clarix | The Intelligence Layer for Global Logistics",
  description: "Next-generation enterprise port logistics and batch management platform. Scale your operations with AI-powered data extraction and real-time auditing.",
  keywords: ["logistics", "port management", "batch management", "AI logistics", "supply chain technology"],
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.variable} ${inter.variable} font-sans`}>
        <Toaster position="bottom-right" theme="dark" richColors />
        {children}
      </body>
    </html>
  );
}
