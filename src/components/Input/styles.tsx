// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

// tipagens
interface InputProps {
    readonly $margin?: string
}

const StyledInput = styled.input<InputProps>`
    background-color: ${(props) => props.theme.colors.bgColor};
    border: none;
    width: calc(100% - 2rem);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.primaryFontColor};
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.05);
    font-family: ${variables.primaryFont};
    margin: ${(props) => props.$margin};

    &:focus {
        outline: 2px solid ${variables.lightBlue};
    }

    @media (max-width: ${variables.smartphone}) {
        font-size: 0.9rem;
    }
`

export { StyledInput }
