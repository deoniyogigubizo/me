import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deo NIYOGISUBIZO | Full Stack Developer & UI/UX Enthusiast",
  description: "Full Stack Developer specializing in Next.js, React, Python, and modern web technologies. Based in Kigali, Rwanda. Transforming complex problems into beautiful, functional solutions.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Python", "Web Development", "UI/UX", "Kigali", "Rwanda", "Embedded Systems", "IoT"],
  authors: [{ name: "Deo NIYOGISUBIZO" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Deo NIYOGISUBIZO | Full Stack Developer & UI/UX Enthusiast",
    description: "Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_RW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deo NIYOGISUBIZO | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
