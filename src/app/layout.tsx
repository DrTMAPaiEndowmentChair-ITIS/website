import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientCookiesProvider } from "@/components/cookies-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. TMA Pai Endowment Chair",
  description: "Research projects in collaboration with industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientCookiesProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClientCookiesProvider>
      </body>
    </html>
  );
}
