"use client" // 🔹 Marca este componente como Client Component no Next.js, permitindo uso de hooks e interatividade

import { FilterByPriority } from "./filter-by-priority"
import { FilterByType } from "./filter-by-type" // 🔹 Importa o componente de filtros que criamos anteriormente
import styled from "styled-components"              // 🔹 Importa styled-components para criar estilos CSS-in-JS

// 🔹 Define a interface das props do componente (aqui está vazia, mas pode ser estendida futuramente)
interface FilterBarProps {}

// 🔹 Container que envolve toda a barra de filtros
const FilterContainer = styled.div`
    display: flex;       /* organiza os elementos em linha (horizontal) */
    width: 100%;         /* ocupa toda a largura disponível do pai */
    align-items: start;  /* alinha os filhos no início do eixo vertical */
    justify-content: space-between;
`

// 🔹 Componente funcional que renderiza a barra de filtros
export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            {/* Renderiza o componente de filtros */}
            <FilterByType />
            <FilterByPriority/>
        </FilterContainer>
    )
}
