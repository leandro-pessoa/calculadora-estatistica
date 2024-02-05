// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledLi = styled.li`
    ${flex('row', 'space-between', 'center', '.5rem')}
    background-color: ${(props) => props.theme.colors.bgColor};
    padding: 0.3rem 0.6rem;
    height: 30px;

    input {
        background-color: transparent;
        border: none;
        font-family: ${variables.primaryFont};
        color: ${(props) => props.theme.colors.primaryFontColor};
        font-size: 1.1rem;
        width: 100%;

        &:focus {
            outline: 2px solid ${variables.lightBlue};
        }
    }

    @media (max-width: ${variables.tablet}) {
        font-size: 0.9rem;
    }

    @media (max-width: ${variables.smartphone}) {
        font-size: 0.8rem;
        input {
            font-size: 0.9rem;
        }
    }
`

export { StyledLi }
