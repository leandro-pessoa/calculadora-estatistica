// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'
import iconsParams from '@/utils/iconsParams'

// componentes
import { StyledButton } from './styles'
import { MdOutlineDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'

// actions
import { toggleTheme } from '@/features/reducers'

const ThemeButton = () => {
    // states globais
    const actualTheme = useAppSelector((state) => state.calc.theme)
    const dispatch = useAppDispatch()

    return (
        <StyledButton onClick={() => dispatch(toggleTheme())}>
            {actualTheme === 'dark' ? (
                <MdOutlineDarkMode {...iconsParams(26)} />
            ) : (
                <MdOutlineLightMode {...iconsParams(26)} />
            )}
        </StyledButton>
    )
}

export default ThemeButton
