// funções
import { useAppSelector } from '@/features/hooks'

// variáveis
import { variables } from '@/variables'

const iconsParams = (size: number) => {
    // states globais
    const actualTheme = useAppSelector((state) => state.calc.theme)

    return {
        size: size,
        color: actualTheme === 'dark' ? variables.white : variables.darkGray,
    }
}

export default iconsParams
