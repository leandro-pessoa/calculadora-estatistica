// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'

// componentes
import { StyledRangeInput } from './styles'

// actions
import { decimalPlacesHandle } from '@/features/reducers'

const DecimalPlaces = () => {
    // states globais
    const decimal = useAppSelector((state) => state.calc.decimalPlaces)
    const dispatch = useAppDispatch()

    return (
        <>
            <StyledRangeInput
                placeholder='0 a 6'
                type='range'
                value={decimal}
                onChange={(e) => dispatch(decimalPlacesHandle(e.target.value))}
                min={0}
                max={6}
            />
        </>
    )
}

export default DecimalPlaces
