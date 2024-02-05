// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'
import iconsParams from '@/utils/iconsParams'

// componentes
import { StyledDiv } from './styles'
import Button from '../Button'

// actions
import { swapHeader } from '@/features/reducers'

// ícones
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

// variáveis
import { variables } from '@/variables'

const HeaderSwapButton = () => {
    // states globais
    const headerDisplay = useAppSelector((state) => state.calc.headerDisplay)
    const theme = useAppSelector((state) => state.calc.theme)
    const dispatch = useAppDispatch()

    return (
        <StyledDiv>
            <Button
                bgColor={
                    theme === 'dark'
                        ? variables.regularGray
                        : variables.lightGray
                }
                action={() => dispatch(swapHeader())}
            >
                {headerDisplay ? (
                    <IoIosArrowUp {...iconsParams(24)} />
                ) : (
                    <IoIosArrowDown {...iconsParams(24)} />
                )}
            </Button>
        </StyledDiv>
    )
}

export default HeaderSwapButton
