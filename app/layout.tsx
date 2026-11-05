import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://airwhisper.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AirWhisper",
    template: "%s — AirWhisper",
  },
  description:
    "AirWhisper turns wrist movement into speech and text on Apple Watch. Assistive communication with no touch, grip, or voice required.",
  keywords: [
    "AirWhisper",
    "assistive technology",
    "communication",
    "wrist gestures",
    "speech",
    "accessibility",
    "Apple Watch",
    "air writing",
    "gesture recognition",
    "AAC",
  ],
  authors: [{ name: "AirWhisper" }],
  creator: "AirWhisper",
  publisher: "AirWhisper",
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
  openGraph: {
    title: "AirWhisper — Your words. Your way.",
    description:
      "Wrist movement becomes speech and text on Apple Watch. No touch, no grip, no voice required.",
    url: siteUrl,
    siteName: "AirWhisper",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "AirWhisper app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirWhisper — Your words. Your way.",
    description:
      "Wrist movement becomes speech and text on Apple Watch. No touch, no grip, no voice required.",
    images: ["/app-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/app-icon.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#eef0ea",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#org`,
      name: "AirWhisper",
      url: siteUrl,
      logo: `${siteUrl}/app-icon.png`,
      description:
        "Accessibility technology that turns wrist movement into communication.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AirWhisper",
      publisher: { "@id": `${siteUrl}/#org` },
    },
    {
      "@type": "SoftwareApplication",
      name: "AirWhisper",
      operatingSystem: "watchOS, iOS",
      applicationCategory: "HealthApplication",
      description:
        "AirWhisper turns wrist movement into speech and text on Apple Watch. Assistive communication with no touch, grip, or voice required.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
