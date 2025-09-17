"use client"

import { FilterType } from "@/types/filter-types"
import { createContext, useState, ReactNode } from "react"

// 🔹 Interface do contexto
interface FilterContextType {
  search: string
  pages: number
  types: FilterType
  setSearch: (value: string) => void
  setPages: (value: number) => void
  setTypes: (value: FilterType) => void
}

// 🔹 Cria o contexto com valores iniciais
export const FilterContext = createContext<FilterContextType>({
  search: "",
  pages: 0,
  types: FilterType.ALL,
  setSearch: () => {},
  setPages: () => {},
  setTypes: () => {},
})

// 🔹 Props do Provider
interface FilterContextProviderProps {
  children: ReactNode
}

// 🔹 Componente Provider que encapsula toda a aplicação ou parte dela
export function FilterContextProvider({ children }: FilterContextProviderProps) {
  const [search, setSearch] = useState("")
  const [pages, setPages] = useState(0)
  const [types, setTypes] = useState(FilterType.ALL)

  return (
    <FilterContext.Provider value={{ search, pages, types, setPages, setSearch, setTypes }}>
      {children} {/* 🔹 Renderiza os elementos filhos */}
    </FilterContext.Provider>
  )
}
