// funções
import iconsParams from '@/utils/iconsParams'

// componentes
import { StyledFooter } from './styles'

// ícones
import { FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <span>Desenvolvido por Leandro Pessoa</span>
            </div>
            <div>
                <a href="https://github.com/leandro-pessoa" target='_blank' rel='external'>
                    <FaGithub {...iconsParams(24)}/>
                </a>
            </div>
        </StyledFooter>
    )
}

export default Footer