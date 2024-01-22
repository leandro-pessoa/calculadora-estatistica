// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from "@/variables"

// tipagens
interface HeaderProps {
    readonly $display: boolean
}

const StyledHeader = styled.header<HeaderProps>`
    position: relative;
    padding: ${props => props.$display ? '2rem' : '0'} 3rem;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 3rem;
    height: ${props => props.$display ? 'auto' : '0px'};
    transition: ease .3s;
    
    .container {
        ${flex('row', 'space-between', 'center')}
        display: ${props => props.$display ? 'flex' : 'none'};
        .container__title {
            ${flex('row', 'flex-start', 'center', '1rem')}
            font-size: 3rem;

            h1 {
                font-size: 2rem;
                font-weight: 400;

                span {
                    color: ${variables.green};
                }
            }
        }
    }

    @media (max-width: ${variables.notebook}) {
        padding: ${props => props.$display ? '2rem' : '0'} 1rem;
        .container {
            .container__title {
                font-size: 2.5rem;
                h1 {
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media (max-width: ${variables.smartphone}) {
        .container {
            .container__title {
                font-size: 2rem;
                h1 {
                    font-size: 1.3rem;
                }
            }
        }
    }

    @media (max-width: ${variables.smallSmartphone}) {
        padding: ${props => props.$display ? '1rem' : '0'} 1rem;

        .container {
            div {
                h1 {
                    font-size: 1.1rem;
                }
            }
        }
    }
`

export { StyledHeader }