// tipagens externas
import { ReactElement } from 'react'

// componentes
import { StyledLi, StyledNavLink } from './styles'

// tipagem dos props
interface ListItemProps {
    to: string
    children: ReactElement | string | ReactElement[]
}

const ListItem = ({ to, children }: ListItemProps) => {
    return (
        <StyledLi>
            <StyledNavLink
                to={to}
                className={({ isActive }) => `${isActive ? 'active' : ''}`}
            >
                {children}
            </StyledNavLink>
        </StyledLi>
    )
}

export default ListItem
