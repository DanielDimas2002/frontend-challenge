"use client" 
// 🔹 Informa ao Next.js que este é um Client Component.
// Isso permite o uso de hooks (useState, useEffect, etc.), context API e bibliotecas que dependem do ambiente cliente,
// como styled-components.

// Importa a função styled para criar componentes estilizados com CSS-in-JS
import styled from "styled-components"

// Importa a fonte Saira Stencil One do Google Fonts usando o recurso de otimização do Next.js
import { Saira_Stencil_One } from "next/font/google";

// Importa componentes reutilizáveis do projeto
import { PrimaryInputWSearchIcon } from "./primary-input"; 
import { CartControl } from "./cart-control";

// Interface para tipar as propriedades recebidas pelo Header
// Aqui está vazia, mas é útil para evoluir no futuro (ex.: receber logo dinâmico, cores, etc.)
interface HeaderProps { }

// Configuração da fonte Saira Stencil One
// - weight: define os pesos disponíveis (nesse caso, só 400).
// - subsets: define quais caracteres serão carregados (ex.: "latin" cobre português, inglês, espanhol).
// - display: "swap" garante que o texto apareça com uma fonte fallback até a fonte carregar.
const sairaStencil = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
});

// Estilo do container <header>
// - Flexbox usado para alinhar logo e barra de busca
// - Espaçamento interno definido para criar respiro entre os elementos
const TagHeader = styled.header`
    display: flex;
    align-items: center;      
    justify-content: space-between;
    padding: 20px 160px;


    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

// Estilo do logo
// - Usa variável CSS global (--logo-color), definida provavelmente no :root do projeto
// - Fonte personalizada será aplicada via className gerada pelo Next.js
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

// Componente principal do Header
// - Renderiza o logo com a fonte customizada
// - Renderiza campo de busca + controle do carrinho no lado direito
export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            {/* Logo com fonte personalizada */}
            <Logo className={sairaStencil.className}>Capputeeno</Logo>

            {/* Agrupando input de busca e controle do carrinho */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <PrimaryInputWSearchIcon
                    placeholder="Procurando por algo em específico?"
                />
                <CartControl />
            </div>
        </TagHeader>
    )
}
