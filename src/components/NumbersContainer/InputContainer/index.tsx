// funções
import { useAppSelector, useAppDispatch } from '@/features/hooks'
import { v4 as uuidv4 } from 'uuid'

// componentes
import { StyledDiv } from './styles'
import InputAdd from '../InputAdd'

// actions
import {
    addUniqueNumber,
    addXNumber,
    addYNumber,
    inputUniqueHandle,
    inputXHandle,
    inputYHandle,
} from '@/features/reducers'

// tipagem dos props
interface InputContainerProps {
    mode: string
}

const InputContainer = ({ mode }: InputContainerProps) => {
    // states globais
    const inputUniqueValue = useAppSelector(
        (state) => state.calc.inputUniqueValue,
    )
    const inputXValue = useAppSelector((state) => state.calc.inputXValue)
    const inputYValue = useAppSelector((state) => state.calc.inputYValue)
    const dispatch = useAppDispatch()

    // objeto que será adicionado à lista única de números
    const number = (value: number | string) => {
        return {
            id: uuidv4(),
            num: Number(value),
        }
    }

    return (
        <StyledDiv>
            {mode === 'compost' ? (
                <>
                    <InputAdd
                        type='number'
                        placeholder='Insira o valor de X'
                        label='Valor de X'
                        id='x'
                        action={addXNumber(number(inputXValue))}
                        onChange={(e) => dispatch(inputXHandle(e.target.value))}
                        value={inputXValue}
                    />
                    <InputAdd
                        type='number'
                        placeholder='Insira o valor de Y'
                        label='Valor de Y'
                        id='y'
                        action={addYNumber(number(inputYValue))}
                        onChange={(e) => dispatch(inputYHandle(e.target.value))}
                        value={inputYValue}
                    />
                </>
            ) : (
                <>
                    <InputAdd
                        type='number'
                        placeholder='Insira um número aqui'
                        label="Insira um número e tecle 'Enter' ou aperte o botão para adicionar"
                        id='unico'
                        action={addUniqueNumber(number(inputUniqueValue))}
                        onChange={(e) =>
                            dispatch(inputUniqueHandle(e.target.value))
                        }
                        value={inputUniqueValue}
                    />
                </>
            )}
        </StyledDiv>
    )
}

export default InputContainer
