// tipagens externas
import { IButtonAction } from '@/shared/interfaces/IButtonAction'

// componentes
import { StyledDiv } from './styles'
import Button from '@/components/Button'

// variáveis
import { variables } from '@/variables'

// tipagem dos props
interface ClearAllProps {
    action: IButtonAction['action']
}

const ClearAll = ({ action }: ClearAllProps) => {
    return (
        <StyledDiv>
            <Button
                action={action}
                bgColor={variables.lightRed}
                padding='.5rem'
            >
                Limpar tudo
            </Button>
        </StyledDiv>
    )
}

export default ClearAll
