// funções
import styled from "styled-components"

// variáveis
import { variables } from "@/variables"

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: ${variables.tablet}) {
        grid-template-columns: 50% 50%;
    }
    @media (max-width: ${variables.smallSmartphone}) {
        grid-template-columns: auto;
    }
`

export { StyledDiv }