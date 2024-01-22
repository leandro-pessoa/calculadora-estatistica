// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledDiv = styled.div`
    label {
        display: flex;
        align-items: center;
        position: relative;
        padding-left: 35px;
        height: 25px;
        cursor: pointer;
        font-size: 1.2rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        input {
            display: none;
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        span {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: ${props => props.theme.colors.terciaryBgColor};

            &::after {
                content: '';
                position: absolute;
                display: none;
                left: 9px;
                top: 5px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }

        &:hover input ~ span {
            background-color: ${props => props.theme.colors.bgColor};
        }

        input:checked ~ span {
            background-color: ${variables.green};
        }  

        input:checked ~ span:after {
            display: block;
        }
    }

    @media (max-width: ${variables.tablet}) {
        label {
            font-size: 1rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        label {
            font-size: .9rem;
            height: 20px;

            span {
                width: 20px;
                height: 20px;

                &::after {
                    left: 6px;
                    top: 2px;
                }
            }
        }
    }
`

export { StyledDiv }