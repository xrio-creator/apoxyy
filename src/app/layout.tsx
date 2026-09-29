import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apoxyy Phantom Ultra — Titanium AI Flagship Smartphone",
  description:
    "Forged in Grade 5 Aerospace Titanium. Powered by the 3nm Neural Core, 200MP Periscope Optics, and 144Hz Quantum AMOLED display.",
  keywords: [
    "Apoxyy Phantom Ultra",
    "Titanium Smartphone",
    "200MP Periscope Camera",
    "3nm Neural Chip",
    "Flagship Mobile Phone",
    "AMOLED 144Hz",
  ],
  authors: [{ name: "Apoxyy Mobile Technologies" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
