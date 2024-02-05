// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledSection = styled.section`
    ${flex('column', 'center', 'center', '2rem')}
    margin: 5rem 0;
    width: 100%;
    height: 50vh;
    text-align: center;

    h2 {
        font-size: 2rem;
    }

    button {
        width: max-content;
        background-color: ${variables.green};
        border: none;
        font-size: 1.2rem;
        color: ${variables.white};
        font-family: ${variables.primaryFont};
        padding: 0.5rem 1rem;
        transition: ease 0.2s;

        &:hover {
            cursor: pointer;
            background-color: ${variables.green + 'd0'};
        }
    }

    @media (max-width: ${variables.smartphone}) {
        h2 {
            font-size: 1.5rem;
        }
        button {
            font-size: 1rem;
        }
    }
`

export { StyledSection }
