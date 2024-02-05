// funções
import { useAppDispatch } from '@/features/hooks'

// componentes
import { StyledLi } from './styles'
import Button from '@/components/Button'

// variáveis
import { variables } from '@/variables'

// ícones
import { IoIosClose } from 'react-icons/io'
import { IButtonAction } from '@/shared/interfaces/IButtonAction'

// actions
import {
    editNumber,
    removeUniqueNumber,
    removeXNumber,
    removeYNumber,
} from '@/features/reducers'

// tipagem dos props
interface NumberItemProps {
    num: number | string
    action: IButtonAction['action']
    id: string
    array: string
}

const NumberItem = ({ num, action, id, array }: NumberItemProps) => {
    // states globais
    const dispatch = useAppDispatch()

    // remove o número caso o usuário deixe o input com um tipo incorreto (não número)
    const blurHandle = () => {
        if (!num) {
            if (array === 'x') {
                dispatch(removeXNumber(id))
            }
            if (array === 'y') {
                dispatch(removeYNumber(id))
            }
            if (array === 'unique') {
                dispatch(removeUniqueNumber(id))
            }
        }
    }

    return (
        <StyledLi>
            <input
                type='number'
                value={num}
                onChange={(e) =>
                    dispatch(
                        editNumber({
                            id: id,
                            value: e.target.value,
                            array: array,
                        }),
                    )
                }
                onBlur={() => blurHandle()}
            />
            <Button bgColor={variables.lightRed} action={action}>
                <IoIosClose />
            </Button>
        </StyledLi>
    )
}

export default NumberItem
