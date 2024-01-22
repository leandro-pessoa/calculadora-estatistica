// funções
import styled from "styled-components"

// variáveis
import { flex, variables } from "@/variables"

// tipagens
interface NavProps {
    readonly $position: string
}

const StyledNav = styled.nav<NavProps>`
    ul {
        ${flex('row', 'center', 'center', '3rem')}
    }

    @media (max-width: ${variables.notebook}) {
        display: ${props => props.$position === 'header' ? 'block' : 'none'};
    }

    @media (max-width: ${variables.tablet}) {
        display: ${props => props.$position === 'header' ? 'none' : 'block'};
    }
`

export { StyledNav }