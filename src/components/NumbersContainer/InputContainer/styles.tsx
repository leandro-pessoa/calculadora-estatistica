// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'auto', 'auto', '.5rem')}

    @media (max-width: ${variables.tablet}) {
        ${flex('column', 'center', 'center', '.5rem')}
    }
`

export { StyledDiv }
