// funções
import styled from "styled-components"

// variáveis
import { flex, variables } from "@/variables"

const StyledFooter = styled.footer`
    ${flex('row', 'space-around', 'center')}
    padding-bottom: 2rem;

    div {
        span {
            color: ${variables.green};
            font-weight: 600;
        }
    }

    @media (max-width: ${variables.tablet}) {
        margin-bottom: 3rem;
    }
`

export { StyledFooter }