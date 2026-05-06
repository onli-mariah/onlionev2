import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimationsWrapper from "@/components/AnimationsWrapper";
import { ViewportProvider } from "@/context/ViewportContext";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "onli.one | Ownership Technology",
  description: "Possession without ledgers, control without consensus. Onli creates a secure, zero-config private network for possession-native transfer.",
  keywords: ["onli", "ownership", "digital assets", "blockchain alternative", "possession", "transfer", "vault", "secure"],
  authors: [{ name: "The Onli Corporation" }],
  creator: "The Onli Corporation",
  publisher: "The Onli Corporation",
  metadataBase: new URL("https://onli.one"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onli.one",
    siteName: "onli.one",
    title: "onli.one | Ownership Technology",
    description: "Possession without ledgers, control without consensus. Onli creates a secure, zero-config private network for possession-native transfer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "onli.one | Ownership Technology",
    description: "Possession without ledgers, control without consensus.",
  },
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f6" },
    { media: "(prefers-color-scheme: dark)", color: "#f6f6f6" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${montserrat.variable} ${geistMono.variable} antialiased`}>
        <ViewportProvider>
          <AnimationsWrapper>
            <Navigation />
            {children}
            <Footer />
          </AnimationsWrapper>
        </ViewportProvider>
      </body>
    </html>
  );
}
