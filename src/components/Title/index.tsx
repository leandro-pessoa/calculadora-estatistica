// tipagens 
import { ReactElement } from "react"

// componentes
import { StyledH2 } from "./styles"

// tipagem dos props
interface TitleProps {
    children: ReactElement | string,
    fontSize: string
}

const Title = ({ children, fontSize }: TitleProps) => {
    return (
        <StyledH2 $fontSize={fontSize}>
            {children}
        </StyledH2>
    )
}

export default Title