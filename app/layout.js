import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: "Notexa - Buy Handwritten Notes",
  description: "Notexa is a platform where you can find high-quality handwritten or hand-typed notes across different subjects and courses.",
  keywords: ["notes", "buy notes", "sell notes", "Notexa", "college notes", "study material", "handwritten notes", "handtyped notes"],
  icons: {
    icon: "/NotexaLogo.svg",
  },
  openGraph: {
    title: "Notexa - Handwritten Notes",
    description: "A platform to buy and sell handwritten or handtyped notes easily.",
    url: "https://notexahub.vercel.app",
    siteName: "Notexa",
    images: [
      {
        url: "/NotexaLogo.svg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <Toaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
