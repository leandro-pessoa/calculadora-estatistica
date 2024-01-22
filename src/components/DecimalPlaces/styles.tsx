// funções
import styled from "styled-components"

const StyledRangeInput = styled.input`
    width: 50%;
    margin-top: 2rem;
    -webkit-appearance: none; 
    border-radius: 32px;
    background-color: ${props => props.theme.colors.bgColor};

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px; 
        height: 20px; 
        background: #04AA6D; 
        cursor: pointer;
        border-radius: 50%;
    }

    &::-moz-range-thumb {
        width: 20px; 
        height: 20px; 
        background: #04AA6D; 
        cursor: pointer;
    }
`

export { StyledRangeInput }