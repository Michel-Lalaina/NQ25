// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard NQ25",
  description: "Interface de gestion des tournois - NQ25",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#0d0f14] text-white">
        {children}
      </body>
    </html>
  );
}
