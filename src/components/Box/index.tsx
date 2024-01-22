// funções e tipagens
import { ReactElement } from 'react'

// componentes
import { StyledDiv } from './styles'
import Title from '../Title'

// tipagem dos props
interface CalcsProps {
    title: ReactElement | string,
    children: ReactElement | ReactElement[] | string
}

const Box = ({ title, children }: CalcsProps) => {
    return (
        <StyledDiv>
            <Title fontSize='1.5rem'>
                {title}
            </Title>
            {children}
        </StyledDiv>
    )
}

export default Box