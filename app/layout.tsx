import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
