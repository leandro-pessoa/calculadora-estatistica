// componentes
import Box from "../Box"
import NumbersList from "./NumbersList"
import InputContainer from "./InputContainer"

// tipagem dos props
interface NumbersContainerProps {
    mode: string
}

const NumbersContainer = ({ mode }: NumbersContainerProps) => {
    return (
        <Box title='Números'>
            <NumbersList mode={mode}/>
            <InputContainer mode={mode}/>
        </Box>
    )
}

export default NumbersContainer