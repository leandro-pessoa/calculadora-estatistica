// funções
import { useAppSelector } from '@/features/hooks'
import { v4 as uuidv4 } from 'uuid'

// componentes
import Container from '@/components/Container'
import Title from '@/components/Title'
import { StyledDiv, StyledRolUl, StyledCalcsUl, StyledP } from './styles'
import Box from '@/components/Box'
import DecimalPlaces from '@/components/DecimalPlaces'

// ícones
import { PiEquals } from 'react-icons/pi'
import { PiPlus } from 'react-icons/pi'
import { PiMinus } from 'react-icons/pi'

const Results = () => {
    // states globais
    const decimalPlaces = useAppSelector((state) => state.calc.decimalPlaces)
    const uniqueResults = useAppSelector((state) => state.calc.uniqueResults)
    const compostResults = useAppSelector((state) => state.calc.compostResults)

    return (
        <Container>
            <Title fontSize='2rem'>Resultados</Title>
            {uniqueResults.rol ||
            (compostResults.rolX && compostResults.rolY) ? (
                <>
                    <Box title='Número de casas decimais'>
                        <DecimalPlaces />
                    </Box>
                    <StyledDiv>
                        {uniqueResults.numbers.length >= 1 &&
                            uniqueResults.rol && (
                                <Box title='Cálculos de conjunto único'>
                                    <h3>Rol</h3>
                                    <StyledRolUl>
                                        {uniqueResults.rol.map((num) => (
                                            <li key={uuidv4()}>{num}</li>
                                        ))}
                                    </StyledRolUl>
                                    <h3>Cálculos</h3>
                                    <StyledCalcsUl>
                                        {uniqueResults.numbers.map((calc) => {
                                            if (calc.moda) {
                                                return (
                                                    <li key={uuidv4()}>
                                                        <span>
                                                            {calc.calcName}:
                                                        </span>
                                                        {typeof calc.moda ===
                                                        'string' ? (
                                                            <>inexistente</>
                                                        ) : (
                                                            calc.moda.map(
                                                                (num) => (
                                                                    <p>{num}</p>
                                                                ),
                                                            )
                                                        )}
                                                    </li>
                                                )
                                            }
                                            return (
                                                <li key={uuidv4()}>
                                                    <span>
                                                        {calc.calcName}:
                                                    </span>
                                                    {calc.number?.toFixed(
                                                        Number(decimalPlaces),
                                                    )}
                                                </li>
                                            )
                                        })}
                                    </StyledCalcsUl>
                                </Box>
                            )}
                    </StyledDiv>
                    <StyledDiv>
                        {compostResults.numbers.length >= 1 &&
                            compostResults.rolX &&
                            compostResults.rolY && (
                                <Box title='Cálculos de dois conjuntos'>
                                    <h3>Rol X</h3>
                                    <StyledRolUl>
                                        {compostResults.rolX.map((num) => (
                                            <li key={uuidv4()}>{num}</li>
                                        ))}
                                    </StyledRolUl>
                                    <h3>Rol Y</h3>
                                    <StyledRolUl>
                                        {compostResults.rolY.map((num) => (
                                            <li key={uuidv4()}>{num}</li>
                                        ))}
                                    </StyledRolUl>
                                    <h3>Cálculos</h3>
                                    <StyledCalcsUl>
                                        {compostResults.numbers.map((calc) => {
                                            if (calc.regressao) {
                                                const regressaoSimbol =
                                                    calc.regressao[1] >= 0 ? (
                                                        <PiPlus />
                                                    ) : (
                                                        <PiMinus />
                                                    )

                                                return (
                                                    <li key={uuidv4()}>
                                                        <span>
                                                            {calc.calcName}:
                                                        </span>
                                                        y <PiEquals />
                                                        {calc.regressao[0].toFixed(
                                                            Number(
                                                                decimalPlaces,
                                                            ),
                                                        )}
                                                        {regressaoSimbol}
                                                        {Math.abs(
                                                            calc.regressao[1],
                                                        ).toFixed(
                                                            Number(
                                                                decimalPlaces,
                                                            ),
                                                        )}
                                                        x
                                                    </li>
                                                )
                                            }
                                            return (
                                                <li key={uuidv4()}>
                                                    <span>
                                                        {calc.calcName}:
                                                    </span>{' '}
                                                    {calc.number?.toFixed(
                                                        Number(decimalPlaces),
                                                    )}
                                                </li>
                                            )
                                        })}
                                    </StyledCalcsUl>
                                </Box>
                            )}
                    </StyledDiv>
                </>
            ) : (
                <StyledP>Nenhum cálculo foi realizado</StyledP>
            )}
        </Container>
    )
}

export default Results
