// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledSection = styled.section`
    margin: 3rem 10rem;

    h3 {
        font-size: 1.5rem;
        margin: 2rem 0 2rem 2rem;
        font-weight: 500;
    }

    p {
        font-size: 1.2rem;
        line-height: 2rem;
        text-indent: 2rem;
        margin-bottom: 1rem;
        text-align: justify;
    }

    @media (max-width: ${variables.tablet}) {
        margin: 3rem 2rem;
        margin-bottom: 5rem;
    }
    @media (max-width: ${variables.smartphone}) {
        margin: 3rem 1rem;
        margin-bottom: 5rem;
        h3 {
            font-size: 1.2rem;
        }
        p {
            font-size: 1rem;
        }
    }
`

export { StyledSection }