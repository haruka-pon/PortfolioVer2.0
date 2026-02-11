import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Geist_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/lib/constants";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { BackgroundCanvas } from "@/components/shared/background-canvas";
import { DogProvider } from "@/context/dog-context";
import { DogCursor } from "@/components/ui/dog-cursor";
import "./globals.css";

const mplus = M_PLUS_Rounded_1c({
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-mplus",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${mplus.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <DogProvider>
          <DogCursor />
          <BackgroundCanvas />
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </DogProvider>
      </body>
    </html>
  );
}
