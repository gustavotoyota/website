import "modern-normalize/modern-normalize.css";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Toyota",
  description: "Site pessoal de Gustavo Toyota",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
