 // funções
 import { ReactElement } from "react"

// componentes
import { StyledDiv } from "./styles"

// tipagem dos props
interface CheckboxContainerProps {
    children: ReactElement | ReactElement[] | string
}

const CheckboxContainer = ({ children }: CheckboxContainerProps) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}

export default CheckboxContainer