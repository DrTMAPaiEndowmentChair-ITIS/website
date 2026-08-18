import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SiteBackground } from "@/components/layout/site-background";
import { ThemeProvider, ThemeScript } from "@/components/theme-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  // 300 is never applied to a mono element (the one `font-light` in the app is
  // on body copy, which is the variable DM Sans), so shipping it is dead weight.
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Dr. TMA Pai Endowment Chair | MAHE, Manipal",
  description:
    "Intelligent Technologies, Industry 4.0 & Sustainability - Dr. TMA Pai Endowment Chair at Manipal Academy of Higher Education",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#252525" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeScript />
        <ThemeProvider>
          <SiteBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
