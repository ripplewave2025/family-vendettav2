import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Family Vendetta | Archive Evidence",
  description:
    "Offline evidence site organizing the NB Bishwakarma property-dispute record in dated order with supporting letters. Available in English, Nepali, and Hindi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#050505] text-[#ededed]">
        <div className="noise-bg" />
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
