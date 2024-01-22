// funções e tipagens
import { ReactElement } from "react"
import { IButtonAction } from "@/shared/interfaces/IButtonAction"

// componentes
import { StyledButton } from "./styles"

// tipagem dos props
interface ButtonProps {
    children: ReactElement | ReactElement[] | string,
    bgColor: string,
    padding?: string,
    action: IButtonAction['action']
}

const Button = ({ children, bgColor, padding, action }: ButtonProps) => {
    return (
        <StyledButton 
            onClick={action} 
            $bgColor={bgColor} 
            $padding={padding}
        >
            {children}
        </StyledButton>
    )
}

export default Button