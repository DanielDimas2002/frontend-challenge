import { useContext } from "react";
import { FilterContext } from "@/contexts/filetr-context";

export function useFilter(){
    return useContext(FilterContext)
}