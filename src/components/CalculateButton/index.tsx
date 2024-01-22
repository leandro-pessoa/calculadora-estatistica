// funções
import { useAppDispatch, useAppSelector } from "@/features/hooks"
import { useNavigate } from "react-router-dom"
import { numberOnly } from "@/utils/calcsUtils"

// actions
import { calculateCompost, calculateUnique } from "@/features/reducer"

// componentes
import Button from "../Button"

// variáveis
import { variables } from "@/variables"

// tipagem dos props
interface CalculateButtonProps {
    mode: string
}

const CalculateButton = ({ mode }: CalculateButtonProps) => {
    // states globais
    const dispatch = useAppDispatch()
    const uniqueNumbers = useAppSelector(state => state.calc.uniqueNumbers)
    const xNumbers = useAppSelector(state => state.calc.xNumbers)
    const yNumbers = useAppSelector(state => state.calc.yNumbers)
    const uniqueCalcs = useAppSelector(state => state.calc.uniqueCalcs)
    const compostCalcs = useAppSelector(state => state.calc.compostCalcs)

    // função redirecionadora
    const navigate = useNavigate()

    // executa os cálculos e o redirecionamento caso os valores de 'numbers' e 'calcs' sejam válidos 
    const calcUniqueHandle = () => {
        if(uniqueNumbers.length >= 1 && uniqueCalcs.length >= 1){
            dispatch(calculateUnique())
            navigate('/resultados')
        }
    }
    // executa os cálculos e o redirecionamento caso os valores de 'numbers' e 'calcs' sejam válidos 
    const calcCompostHandle = () => {
        if(
            numberOnly(xNumbers).length === numberOnly(yNumbers).length &&
            numberOnly(xNumbers).length >= 1 && numberOnly(yNumbers).length >= 1 &&
            compostCalcs.length >= 1
        ){
            dispatch(calculateCompost())
            navigate('/resultados')
        }
    }

    return (
        <>
            <Button
                bgColor={variables.green}
                padding=".5rem 1rem"
                action={
                    mode === 'unique' ?
                        ()=>calcUniqueHandle()
                    :
                        ()=>calcCompostHandle()
                }
            >
                Calcular
            </Button>
        </>
    )
}

export default CalculateButton