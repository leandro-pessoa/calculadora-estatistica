// funções
import { useAppDispatch, useAppSelector } from "@/features/hooks"

// actions
import { toggleUniqueCalc, toggleCompostCalc } from "@/features/reducer"

// componentes
import { StyledDiv } from "./styles"

// tipagem dos props
interface CheckboxProps {
    calc: string,
    mode: string
}

const Checkbox = ({ calc, mode }: CheckboxProps) => {
    const dispatch = useAppDispatch()
    const uniqueCalcs = useAppSelector(state => state.calc.uniqueCalcs)
    const compostCalcs = useAppSelector(state => state.calc.compostCalcs)

    // verifica se o cálculo está inserido na lista de cálculos
    // se sim, retorna true
    // se não, false
    const checked = (calc: string): boolean => {
        if(uniqueCalcs.includes(calc) || compostCalcs.includes(calc)){
            return true
        }
        return false
    }   

    return (
        <StyledDiv>
            <label htmlFor={calc}>{calc}
                <input 
                    type="checkbox" 
                    id={calc} 
                    onChange={
                        mode === 'unique' ?
                        ()=>dispatch(toggleUniqueCalc(calc))
                        :
                        ()=>dispatch(toggleCompostCalc(calc))
                    }
                    checked={checked(calc)}
                />
                <span></span>
            </label>
        </StyledDiv>
    )
}

export default Checkbox