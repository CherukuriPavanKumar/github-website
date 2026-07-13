import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitHub Community GITAM — Build. Learn. Ship.",
  description:
    "A premier collective of open-source contributors, builders, and designers at GITAM University — unlocking potential through collaboration and code.",
  keywords: [
    "GitHub",
    "GITAM",
    "open source",
    "community",
    "developers",
    "hackathon",
    "coding",
    "student community",
  ],
  openGraph: {
    title: "GitHub Community GITAM — Build. Learn. Ship.",
    description:
      "A premier collective of open-source contributors, builders, and designers at GITAM University.",
    url: "https://githubcommunitygitam.in",
    siteName: "GitHub Community GITAM",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Community GITAM — Build. Learn. Ship.",
    description:
      "A premier collective of open-source contributors, builders, and designers at GITAM University.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <SpeedInsights />
        {children}</body>
    </html>
  );
}
