// componentes
import { StyledInput } from './styles'

// tipagens externas
import { IInputChange } from '@/shared/interfaces/IInputChange'

// tipagem dos props
interface InputProps {
    placeholder: string
    type?: string
    value: string | number
    onChange: IInputChange['change']
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    id?: string
    margin?: string
    min?: number
    max?: number
    maxLength?: number
}

const Input = ({
    placeholder,
    type,
    value,
    onChange,
    onKeyDown,
    id,
    margin,
    min,
    max,
}: InputProps) => {
    return (
        <StyledInput
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            id={id}
            $margin={margin}
            min={min}
            max={max}
        />
    )
}

export default Input
