// Importa o componente Header que você criou dentro da pasta components
import { Header } from "@/components/header";

// Importa o tipo Metadata do Next, usado para definir metadados da aplicação
import type { Metadata } from "next";

// Importa a fonte Saira diretamente do Google Fonts via next/font
import { Saira } from "next/font/google";

// Importa os estilos globais da aplicação (CSS aplicado em todas as páginas)
import "./globals.css";


// Configura a fonte Saira
const saira = Saira({
  weight: ["300", "400", "500", "600"], // variações de peso que serão carregadas
  subsets: ["latin"], // suporte de caracteres (latin = português, inglês, etc)
  display: "swap",    // garante que o texto apareça mesmo se a fonte demorar a carregar
});


// Define os metadados globais da aplicação
// Isso preenche automaticamente a tag <head> do HTML
export const metadata: Metadata = {
  title: "Meu Projeto Next", // título que aparece no navegador
  description: "Aplicação criada com Next.js e fonte Saira", // descrição da aplicação
};


// RootLayout é o layout global da aplicação
// Ele envolve todas as páginas renderizadas dentro de <html> e <body>
export default function RootLayout({
  children, // children representa o conteúdo específico de cada página
}: Readonly<{
  children: React.ReactNode; // garante tipagem segura no TS
}>) {
  return (
    <html lang="pt-BR"> {/* Define idioma padrão da página como português-BR */}
      {/* 
        Aplica a fonte Saira em todo o conteúdo do body
        className={saira.className} adiciona dinamicamente a classe da fonte
      */}
      <body className={saira.className}>
        {/* Header fixo em todas as páginas */}
        <Header />
        {/* Renderiza o conteúdo da página atual */}
        {children}
      </body>
    </html>
  );
}
