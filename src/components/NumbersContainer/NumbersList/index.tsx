// funções
import { useAppSelector, useAppDispatch } from '@/features/hooks'

// componentes
import { StyledUniqueDiv, StyledCompostDiv, StyledP } from './styles'
import NumberItem from './NumberItem'
import ClearAll from '../ClearAll'

// actions
import {
    removeAllNumbers,
    removeUniqueNumber,
    removeXNumber,
    removeYNumber,
} from '@/features/reducers'

// tipagem dos props
interface NumbersListProps {
    mode: string
}

const NumbersList = ({ mode }: NumbersListProps) => {
    // states globais
    const uniqueNumbers = useAppSelector((state) => state.calc.uniqueNumbers)
    const xNumbers = useAppSelector((state) => state.calc.xNumbers)
    const yNumbers = useAppSelector((state) => state.calc.yNumbers)
    const dispatch = useAppDispatch()

    return (
        <>
            {mode === 'compost' ? (
                <StyledCompostDiv>
                    {xNumbers.length >= 1 ? (
                        <>
                            <p>Valores de X</p>
                            <ul className='compost-list x-list'>
                                <ClearAll
                                    action={() =>
                                        dispatch(removeAllNumbers('x'))
                                    }
                                />
                                {xNumbers.map((num) => (
                                    <NumberItem
                                        num={num.num}
                                        key={num.id}
                                        action={() =>
                                            dispatch(removeXNumber(num.id))
                                        }
                                        id={num.id}
                                        array='x'
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <StyledP $width='50%'>Não há valores em X</StyledP>
                    )}
                    {yNumbers.length >= 1 ? (
                        <>
                            <p>Valores de Y</p>
                            <ul className='compost-list y-list'>
                                <ClearAll
                                    action={() =>
                                        dispatch(removeAllNumbers('y'))
                                    }
                                />

                                {yNumbers.map((num) => (
                                    <NumberItem
                                        num={num.num}
                                        key={num.id}
                                        action={() =>
                                            dispatch(removeYNumber(num.id))
                                        }
                                        id={num.id}
                                        array='y'
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <StyledP $width='50%'>Não há valores em Y</StyledP>
                    )}
                </StyledCompostDiv>
            ) : (
                <StyledUniqueDiv>
                    <div className='unique__clear-all'>
                        {uniqueNumbers.length >= 1 && (
                            <ClearAll
                                action={() =>
                                    dispatch(removeAllNumbers('unique'))
                                }
                            />
                        )}
                    </div>
                    <div className='unique__list-container'>
                        {uniqueNumbers.length >= 1 ? (
                            <ul className='unique-list list'>
                                {uniqueNumbers.map((num) => (
                                    <NumberItem
                                        num={num.num}
                                        key={num.id}
                                        action={() =>
                                            dispatch(removeUniqueNumber(num.id))
                                        }
                                        id={num.id}
                                        array='unique'
                                    />
                                ))}
                            </ul>
                        ) : (
                            <StyledP $width='100%'>
                                Não há valores na lista
                            </StyledP>
                        )}
                    </div>
                </StyledUniqueDiv>
            )}
        </>
    )
}

export default NumbersList
