import type { Metadata } from "next";
import { Inter, Instrument_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const script = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AirWhisper — Your Words. Your Way.",
  description:
    "AirWhisper transforms wrist movements into speech and text, giving you a voice without touch, grip, or sound.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${inter.variable} ${script.variable}`}
    >
      <body className="antialiased bg-[#fafaf9] text-[#1a1a1a]">{children}</body>
    </html>
  );
}
