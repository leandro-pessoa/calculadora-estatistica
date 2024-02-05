// funções e tipagens
import styled from 'styled-components'
import { ReactElement } from 'react'

// variáveis
import { flex, variables } from '@/variables'

const StyledSection = styled.section`
    ${flex('column', 'center', 'center', '1.5rem')}
    width: 100%;
    margin-bottom: 2rem;

    @media (max-width: ${variables.tablet}) {
        margin-bottom: 5rem;
    }
`

// tipagem dos props
interface ContainerProps {
    children: ReactElement | ReactElement[] | string
}

const Container = ({ children }: ContainerProps) => {
    return <StyledSection>{children}</StyledSection>
}

export default Container
