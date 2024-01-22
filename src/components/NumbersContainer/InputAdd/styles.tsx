// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    ${flex('column')}
    width: 100%;

    label {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    div {
        ${flex('row', 'auto', 'auto', '.5rem')}
    }

    @media (max-width: ${variables.smartphone}) {
        label {
            font-size: .9rem;
        }
    }
`

export { StyledDiv }