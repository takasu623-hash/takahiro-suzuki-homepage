import type { Metadata } from "next";
import { Archivo, Noto_Sans_JP, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://takahiro-suzuki-md.vercel.app";
const SITE_TITLE = "Takahiro Suzuki, MD, MPH | Cardiovascular Researcher";
const SITE_DESCRIPTION =
  "Cardiovascular medicine physician at St. Luke's International Hospital. Research on preventive cardiology, PCI outcomes, and social determinants of health.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Takahiro Suzuki" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Takahiro Suzuki, MD, MPH",
    images: [
      {
        url: "/profile.png",
        alt: "Takahiro Suzuki, MD, MPH",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/profile.png"],
    creator: "@SuzukiTtweet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${archivo.variable} ${notoSansJP.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
