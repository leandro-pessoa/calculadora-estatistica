// funções
import styled from "styled-components"

// variáveis
import { flex, variables } from "@/variables"

const StyledDiv = styled.div`
    ${flex('column', 'center', 'center')}
    width: 100%;

    h3 {
        font-size: 1.5rem;
        margin: 1.5rem 0;
        margin-left: 1rem;
        font-weight: 600;
    }

    @media (max-width: ${variables.tablet}) {
        h3 {
            font-size: 1.3rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        h3 {
            font-size: 1.1rem;
        }
    }
`

const StyledRolUl = styled.ul`
    ${flex('row', 'center', 'center', '1rem')}
    flex-wrap: wrap;
    list-style: none;
    border: 2px solid ${variables.green};
    padding: 0.5rem 0;

    li {
        font-size: 1.2rem;
    }

    @media (max-width: ${variables.smartphone}) {
        li {
            font-size: 1rem;
        }
    }
`

const StyledCalcsUl = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 1rem;

    li {
        ${flex('row', 'auto', 'center', '.3rem')}
        font-size: 1.2rem;

        span {
            color: ${variables.green};
            margin-right: .5rem;
            font-weight: 600;
        }

        p {
            display: inline;
            margin-right: .5rem;

            &::after {
                content: ',';
            }

            &:last-child::after {
                content: '';
            }
        }
    }

    @media (max-width: ${variables.tablet}) {
        li {
            font-size: 1rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        grid-template-columns: auto;
        li {
            font-size: 1rem;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        li {
            font-size: .8rem;
        }
    }
`

const StyledP = styled.p`
    margin: 3rem 0;
    font-size: 1.2rem;

    @media (max-width: ${variables.smartphone}) {
        font-size: 1rem;
    }
`

export {
    StyledDiv,
    StyledRolUl,
    StyledCalcsUl,
    StyledP
}