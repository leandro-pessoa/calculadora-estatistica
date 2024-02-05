// componentes
import Container from '@/components/Container'
import NumbersContainer from '@/components/NumbersContainer'
import Box from '@/components/Box'
import CheckboxContainer from '@/components/CheckboxContainer'
import Checkbox from '@/components/CheckboxContainer/Checkbox'
import CalculateButton from '@/components/CalculateButton'

const TwoSetCalculator = () => {
    // modo que será utilizado na checkbox
    const mode = 'compost'

    return (
        <Container>
            <NumbersContainer mode={mode} />
            <Box title={'Cálculos de dois conjuntos'}>
                <CheckboxContainer>
                    <Checkbox calc='Covariância' mode={mode} />
                    <Checkbox calc='Correlação' mode={mode} />
                    <Checkbox calc='Regressão linear' mode={mode} />
                </CheckboxContainer>
            </Box>
            <CalculateButton mode={mode} />
        </Container>
    )
}

export default TwoSetCalculator
