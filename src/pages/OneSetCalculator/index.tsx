// componentes
import NumbersContainer from '@/components/NumbersContainer'
import Container from '@/components/Container'
import Box from '@/components/Box'
import CheckboxContainer from '@/components/CheckboxContainer'
import Checkbox from '@/components/CheckboxContainer/Checkbox'
import CalculateButton from '@/components/CalculateButton'

const OneSetCalculator = () => {
    // modo que será utilizado na checkbox
    const mode = 'unique'

    return (
        <Container>
            <NumbersContainer mode={mode} />
            <Box title='Cálculos de único conjunto'>
                <CheckboxContainer>
                    <Checkbox calc={'Moda'} mode={mode} />
                    <Checkbox calc={'Média aritmética'} mode={mode} />
                    <Checkbox calc={'Soma total'} mode={mode} />
                    <Checkbox calc={'Média geométrica'} mode={mode} />
                    <Checkbox calc={'Amplitude'} mode={mode} />
                    <Checkbox calc={'Variância'} mode={mode} />
                    <Checkbox calc={'Mediana'} mode={mode} />
                    <Checkbox calc={'Desvio padrão'} mode={mode} />
                </CheckboxContainer>
            </Box>
            <CalculateButton mode={mode} />
        </Container>
    )
}

export default OneSetCalculator
