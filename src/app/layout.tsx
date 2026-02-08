import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import { AppModeProvider } from "@/context/AppModeContext";
import { SkipLink } from "@/components/shared/SkipLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Dev Backend",
  description:
    "Portfólio em formato de terminal e interface macOS. Navegue por about, career, skills, projects e contact.",
  openGraph: {
    title: "Portfolio | Dev Backend",
    description:
      "Portfólio em formato de terminal e interface macOS. Navegue por about, career, skills, projects e contact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider>
          <SkipLink />
          <AppModeProvider>{children}</AppModeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
