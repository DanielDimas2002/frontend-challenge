"use client"

import { FilterType } from "@/types/filter-types"
import { PriorityTypes } from "@/types/priority-types"
import { createContext, useState, ReactNode } from "react"

// 🔹 Interface do contexto
interface FilterContextType {
  search: string,
  pages: number,
  types: FilterType,
  priority: PriorityTypes,
  setPriority: (value: PriorityTypes) => void,
  setSearch: (value: string) => void
  setPages: (value: number) => void
  setTypes: (value: FilterType) => void
}

// 🔹 Cria o contexto com valores iniciais
export const FilterContext = createContext<FilterContextType>({
  search: "",
  pages: 0,
  types: FilterType.ALL,
  priority: PriorityTypes.NEWS, 
  setSearch: () => {},
  setPages: () => {},
  setTypes: () => {},
  setPriority: () => {},
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
  const [priority, setPriority] = useState(PriorityTypes.NEWS)


  return (
    <FilterContext.Provider value={{
      search,
      pages,
      types,
      setPages,
      setSearch,
      setTypes,
      priority,
      setPriority
    }}>
      {children} {/* 🔹 Renderiza os elementos filhos */}
    </FilterContext.Provider>
  )
}
