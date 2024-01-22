// funções
import styled from "styled-components"

// variáveis
import { flex, variables } from "@/variables"

// tipagens
interface ButtonProps {
    readonly $bgColor: string,
    readonly $padding?: string
}

const StyledButton = styled.button<ButtonProps>`
    ${flex('column', 'center')}
    background-color: ${props => props.$bgColor};
    border: none;
    font-size: 1rem;
    font-family: ${variables.primaryFont};
    color: ${props => props.theme.colors.primaryFontColor};
    padding: ${props => props.$padding};

    &:hover {
        cursor: pointer;
        background-color: ${props => props.$bgColor + 'ba'};
    }

    @media (max-width: ${variables.smartphone}) {
        font-size: .9rem;
    }
`

export { StyledButton }