// funções e tipagens
import { useAppDispatch } from "@/features/hooks"
import { ReactElement } from "react"
import iconsParams from "@/utils/iconsParams"
import { IInputAction } from "@/shared/interfaces/IInputAction"
import { IInputChange } from "@/shared/interfaces/IInputChange"

// componentes
import { StyledDiv } from "./styles"
import Input from "@/components/Input"
import Button from "@/components/Button"

// ícones
import { IoIosAdd } from "react-icons/io"

// variáveis
import { variables } from "@/variables"

// tipagem dos props
interface InputAddProps {
    label: ReactElement | ReactElement[] | string,
    placeholder: string,
    type: string,
    id: string,
    action: IInputAction['action'],
    onChange: IInputChange['change'],
    value: string | number
}

const InputAdd = ({ label, placeholder, type, id, action, onChange, value }: InputAddProps) => {
    // states globais
    const dispatch = useAppDispatch()

    // adiciona um número à lista caso o usuário tecle 'Enter'
    const keyHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            dispatch(action)
        }
    } 

    return (
        <StyledDiv>
            <label htmlFor={id}>
                {label}
            </label>
            <div>
                <Input
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onKeyDown={(e)=>keyHandle(e)}
                    id={id}
                />
                <Button bgColor={variables.green} action={()=>dispatch(action)}>
                    <IoIosAdd
                        {...iconsParams(26)}
                    />
                </Button>
            </div>
        </StyledDiv>
    )
}

export default InputAdd