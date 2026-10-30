import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Norc Technology — Technology that moves business forward",
  description:
    "We design, build, and scale software products and AI-powered systems that help ambitious companies work smarter, move faster, and create lasting impact.",
  icons: {
    icon: [
      { url: "/images/favicon_io%20(4)/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon_io%20(4)/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io%20(4)/favicon.ico" },
    ],
    apple: "/images/favicon_io%20(4)/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/images/favicon_io%20(4)/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/images/favicon_io%20(4)/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
