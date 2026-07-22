import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Guilherme Maciel Martins Cruz | Direito, Tecnologia e Inovação",
  description: "Portfólio profissional de Guilherme Maciel Martins Cruz, estudante de Direito na PUC-Campinas com experiência em operações, tecnologia, administração e IA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
