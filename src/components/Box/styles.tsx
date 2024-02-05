// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledDiv = styled.div`
    width: 60%;
    background-color: ${(props) => props.theme.colors.secondaryBgColor};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;

    @media (max-width: ${variables.notebook}) {
        width: 75%;
    }
    @media (max-width: ${variables.tablet}) {
        width: 80%;
    }
    @media (max-width: ${variables.smartphone}) {
        padding: 1.5rem 1rem;
    }
    @media (max-width: ${variables.smallSmartphone}) {
        width: calc(100% - 2rem);
    }
`

export { StyledDiv }
