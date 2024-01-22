// funções
import { styled } from 'styled-components'

// variáveis
import { variables } from '@/variables'

// tipagens
interface H2Props {
    readonly $fontSize: string
}

const StyledH2 = styled.h2<H2Props>`
    padding-bottom: 1rem;
    width: 50%;
    font-size: ${props => props.$fontSize};
    font-weight: 600;
    border-bottom: 2px solid ${variables.green};

    @media (max-width: ${variables.tablet}) {
        font-size: 1.5rem;
        width: 90%;
    }
    @media (max-width: ${variables.smartphone}) {
        font-size: 1.3rem;
    }
    @media (max-width: ${variables.smallSmartphone}) {
        font-size: 1.2rem;
    }
`

export { StyledH2 } 