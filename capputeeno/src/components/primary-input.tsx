// Importa o styled-components para criar componentes estilizados com CSS-in-JS
import { styled } from "styled-components"

// Importa o componente do ícone de busca (provavelmente um SVG encapsulado em React)
import { SearchIcon } from "./search-icon"

// Importa os tipos de atributos nativos de <input> do React para tipar corretamente as props
import { InputHTMLAttributes } from "react"



// Cria um input estilizado usando styled-components
export const PrimaryInput = styled.input`
    width: 352px;             /* largura fixa do input */
    border-radius: 8px;       /* cantos arredondados */
    padding: 10px 16px;       /* espaçamento interno */
    border: none;             /* remove a borda padrão */

    background-color: var(--bg-secondary); /* usa variável CSS definida globalmente */

    font-family: inherit;     /* herda a fonte definida no body/layout */
    font-weight: 400;         /* peso da fonte */
    font-size: 14px;          /* tamanho da fonte */
    line-height: 22px;        /* altura da linha */
    color: var(--text-dark);  /* cor do texto (também variável global) */
`



// Cria um container para o input + ícone
const InputContainer = styled.div`
    position: relative;   /* necessário para posicionar o ícone de forma absoluta */
    width: 352px;         /* mantém a mesma largura do input */
    
    svg {
        position: absolute;        /* posiciona o ícone dentro do container */
        right: 20px;               /* afasta da direita */
        top: 50%;                  /* centraliza verticalmente */
        transform: translateY(-50%); /* corrige o alinhamento para ficar bem no centro */
    }
`



// Define uma interface para as props do componente
// Ela estende os atributos padrão de um <input>, como "placeholder", "onChange", etc.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}



// Cria o componente funcional que renderiza o input com o ícone
export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            {/* Espalha todas as props recebidas no <PrimaryInput> */}
            <PrimaryInput {...props} />
            {/* Renderiza o ícone de busca ao lado direito */}
            <SearchIcon />
        </InputContainer>
    )
}
