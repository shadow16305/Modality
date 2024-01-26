import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/MainNavigation";

export const metadata: Metadata = {
  title: "Modality",
  description: "Specialized IT support for Diagnostic Clinics in Toronto & GTA!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-blue">
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
