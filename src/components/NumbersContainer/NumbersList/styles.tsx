// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

// tipagens
interface PProps {
    readonly $width: string
}

const list = `
    margin-top: 2rem;
    list-style: none;
    display: grid;
    gap: .5rem;
`

const height = `
    max-height: 200px;
    overflow-y: auto;
`

const StyledUniqueDiv = styled.div`
    ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.colors.secondaryBgColor};
    }

    .unique__clear-all {
        ${flex('row', 'flex-end')}
        margin-top: .5rem;
    }

    .unique-list {
        ${list}
        ${height}
        grid-template-columns: auto auto auto auto;
    }

    @media (max-width: ${variables.tablet}) {
        .unique-list {
            grid-template-columns: auto auto auto;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        .unique-list {
            grid-template-columns: auto auto;
        }
    }
`

const StyledCompostDiv = styled.div`
    ${flex('row', 'space-between', 'flex-start', '1.5rem')}

    ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.colors.secondaryBgColor};
    }

    p {
        display: none;
        margin-top: 1rem;
    }

    .compost-list {
        ${list}
        width: 50%;
        ${height}
    }

    @media (max-width: ${variables.tablet}) {
        ${flex('column', 'auto', 'center', '0')}

        p {
            display: block;
        }

        .compost-list {
            width: 100%;
            margin-top: 0.5rem;
        }
    }
`

const StyledP = styled.p<PProps>`
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.2rem;
    width: ${(props) => props.$width};

    @media (max-width: ${variables.smartphone}) {
        font-size: 1.1rem;
    }
`

export { StyledUniqueDiv, StyledCompostDiv, StyledP }
