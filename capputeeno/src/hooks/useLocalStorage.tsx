"use client"; 
// 🔹 Marca o hook como Client Component, necessário para usar hooks e acessar o localStorage

import { useState, useEffect } from "react";

/**
 * Hook personalizado para sincronizar um valor com o localStorage
 * @param item - chave usada no localStorage
 * @param initialValue - valor inicial caso não haja nada no localStorage
 * @returns { value, updateLocalStorage } - estado atual e função para atualizar
 */
export function useLocalStorage<T>(item: string, initialValue: T) {
  // 🔹 Estado do hook. Inicialmente recebe o valor seguro (para SSR)
  const [value, setValue] = useState<T>(initialValue);

  // 🔹 useEffect só roda no cliente (browser), garantindo que localStorage exista
  useEffect(() => {
    const stored = localStorage.getItem(item);
    if (stored) {
      // 🔹 Se houver valor salvo, atualiza o estado
      setValue(JSON.parse(stored));
    }
  }, [item]); // 🔹 Executa apenas quando a chave 'item' muda

  // 🔹 Função para atualizar o valor do estado e do localStorage
  const updateLocalStorage = (newValue: T) => {
    setValue(newValue); // atualiza o estado local
    localStorage.setItem(item, JSON.stringify(newValue)); // salva no localStorage
  };

  // 🔹 Retorna o estado e a função de atualização
  return { value, updateLocalStorage };
}
