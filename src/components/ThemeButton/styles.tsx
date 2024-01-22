// funções
import { styled } from 'styled-components'

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    transition: ease .2s;

    &:hover {
        cursor: pointer;
        transform: translate(.5px, .5px);
    }
    &:active {
        transform: translate(-.5px, -.5px);
    }
`

export { StyledButton }