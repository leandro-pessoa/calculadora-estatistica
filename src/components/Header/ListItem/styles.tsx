// funções
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledLi = styled.li`
    transition: ease .2s;
    &:hover {
        cursor: pointer;
        transform: translate(1px, 1px);
    }

    .icon {
        display: none;
    }

    @media (max-width: ${variables.notebook}) {
        .txt {
            display: none;
        }

        .icon {
            display: block;
        }
    }
`

const StyledNavLink = styled(NavLink)`
    color: ${props => props.theme.colors.primaryFontColor};
    text-decoration: none;
    font-weight: 400;
    
    &.active {
        font-weight: 600;
        color: ${variables.green};
    }
`

export { StyledLi, StyledNavLink }