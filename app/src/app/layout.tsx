import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Family Vendetta | Archive Evidence",
  description: "Offline evidence site organizing the NB Bishwakarma property-dispute record in dated order with supporting letters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#050505] text-[#ededed]">
        <div className="noise-bg"></div>
        {children}
      </body>
    </html>
  );
}
