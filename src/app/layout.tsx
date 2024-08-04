import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utripx - Explore Local Travel",
  description:
    "Utripx is coming soon! Explore local travel guides and affordable itineraries to make the most of your trips. Sign up to be the first to know when we launch.",
  keywords:
    "Utripx, local travel, travel guides, affordable itineraries, budget travel",
  authors: [
    {
      name: "Utripx",
      url: "https://utripx.com",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Utripx - Explore Local Travel",
    description:
      "Utripx is coming soon! Explore local travel guides and affordable itineraries to make the most of your trips. Sign up to be the first to know when we launch.",
    url: "https://utripx.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utripx - Explore Local Travel",
    description:
      "Utripx is coming soon! Explore local travel guides and affordable itineraries to make the most of your trips. Sign up to be the first to know when we launch.",
    site: "@utripx",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
