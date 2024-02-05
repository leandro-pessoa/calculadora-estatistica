// funções
import { styled } from 'styled-components'

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    transition: ease 0.2s;

    &:hover {
        cursor: pointer;
        transform: translate(0.5px, 0.5px);
    }
    &:active {
        transform: translate(-0.5px, -0.5px);
    }
`

export { StyledButton }
