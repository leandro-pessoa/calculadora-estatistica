// funções
import { variables } from '@/variables'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: none;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.bgColor};
    border-top: 1px solid ${(props) => props.theme.colors.borderColor};
    padding: 1rem 0;

    @media (max-width: ${variables.tablet}) {
        display: block;
    }
`

export { StyledDiv }
