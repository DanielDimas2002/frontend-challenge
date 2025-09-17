"use client" // 🔹 Indica que este componente é um Client Component no Next.js, permitindo hooks e interatividade

import { useFilter } from "@/contexts/useFilter"
import { FilterType } from "@/types/filter-types"
import { styled } from "styled-components"

// 🔹 Define as props esperadas pelo FilterItem
// Aqui usamos TypeScript para garantir que a prop 'selected' seja obrigatoriamente um boolean
interface FilterItemProps {
    selected: boolean
}

// 🔹 Lista que vai conter os filtros (ul)
// Usamos styled-components para criar o elemento <ul> estilizado
const FilterList = styled.ul`
    display: flex;               /* organiza os itens em linha (horizontal) */
    align-items: center;         /* alinha verticalmente os itens ao centro */
    justify-content: center;     /* centraliza os itens horizontalmente */
    gap: 40px;                   /* espaçamento entre cada item da lista */
    list-style: none;            /* remove os marcadores padrão da lista */
`

// 🔹 Item individual da lista (li) que muda estilo com base na prop 'selected'
const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;                             /* herda a fonte global do layout */
    font-weight: ${props => props.selected ? "600" : "400"};  /* mais grosso se selecionado */
    font-size: 16px;                                  /* tamanho do texto */
    line-height: 22px;                                /* altura da linha */
    text-align: center;                               /* centraliza o texto */
    text-transform: uppercase;                        /* transforma o texto em maiúsculo */
    cursor: pointer;                                  /* muda o cursor para indicar que é clicável */

    color: var(--text-dark);                          /* cor do texto definida por variável global */

    /* linha inferior destacando o item selecionado */
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
`

// 🔹 Componente funcional que renderiza os filtros
export function FilterByType() {
    const { types, setTypes } = useFilter()

    const handleChangeType = (value: FilterType) => {
        setTypes(value)
    }
    return (
        <FilterList>
            {/* Cada FilterItem recebe a prop 'selected' para determinar seu estilo */}
            <FilterItem
                selected={types === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}>
                Todos os Produtos
            </FilterItem>
            <FilterItem
                selected={types === FilterType.SHIRT}
                onClick={() => handleChangeType(FilterType.SHIRT)}>
                Camisetas
            </FilterItem>
            <FilterItem
                selected={types === FilterType.MUG}
                onClick={() => handleChangeType(FilterType.MUG)}>
                Canecas
            </FilterItem>
        </FilterList>
    )
}
