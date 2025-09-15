"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components";

// 🔹 Contador do carrinho (bolinha vermelha com número de itens)
const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background-color: var(--delete-color);
    color: white;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
`;

// 🔹 Container que envolve ícone e contador
const Container = styled.div`
    position: relative;
`;

interface CartItem {
    // 🔹 Estrutura de um item do carrinho (ajuste conforme seu projeto)
    id: string;
    name: string;
    quantity: number;
}

export function CartControl() {
    // 🔹 Pega o array de itens do carrinho do localStorage
    const { value: cartItems } = useLocalStorage<CartItem[]>('cart-items', []);

    return (
        <Container>
            <CartIcon />
            {/* 🔹 Mostra contador apenas se houver itens */}
            {cartItems.length > 0 && <CartCount>{cartItems.length}</CartCount>}
        </Container>
    )
}
