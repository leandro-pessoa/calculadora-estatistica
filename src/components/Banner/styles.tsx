// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledSection = styled.section`
    ${flex('row-reverse', 'space-between', 'center', '1.5rem')}
    height: 300px;
    padding: 2rem;

    .banner__txt-container {
        ${flex('row', 'center', 'center')}
        width: 40%;
        height: 100%;
        border-radius: 8px;

        h2 {
            font-weight: 200;
            font-size: 2rem;
            text-align: center;
        }
    }

    @media (max-width: ${variables.smartphone}) {
        ${flex('column')}
        padding: 1rem;

        .banner__txt-container {
            ${flex('row', 'auto', 'auto')}
            width: 80%;
            height: auto;
            h2 {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: ${variables.smallSmartphone}) {
        .banner__txt-container {
            h2 {
                font-size: 1.3rem;
            }
        }
    }
`

const StyledDiv = styled.div`
    background: url(${props  => props.theme.images.bannerImg}) no-repeat center top;
    background-size: cover;
    height: 100%;
    width: 60%;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.15);

    @media (max-width: ${variables.smartphone}) {
        width: 100%;
    }
`

export { StyledSection, StyledDiv }