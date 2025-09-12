import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";


const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Meu Projeto Next",
  description: "Aplicação criada com Next.js e fonte Saira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
