// funções
import { useAppSelector } from '@/features/hooks'

// componentes
import { StyledHeader } from './styles'
import ThemeButton from '../ThemeButton'
import HeaderSwapButton from '../HeaderSwapButton'
import Nav from '../Nav'

// ícones
import { FcCalculator } from 'react-icons/fc'

const Header = () => {
    // states globais
    const headerDisplay = useAppSelector((state) => state.calc.headerDisplay)

    return (
        <StyledHeader $display={headerDisplay}>
            <div className='container'>
                <div className='container__title'>
                    <FcCalculator />
                    <h1>
                        Calculadora <span>estatística</span>
                    </h1>
                </div>
                <Nav position='header' />
                <div>
                    <ThemeButton />
                </div>
            </div>
            <HeaderSwapButton />
        </StyledHeader>
    )
}

export default Header
