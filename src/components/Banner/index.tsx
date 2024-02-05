// componentes
import { StyledSection, StyledDiv } from './styles'

const Banner = () => {
    return (
        <StyledSection>
            <StyledDiv className='banner__img-container'></StyledDiv>
            <div className='banner__txt-container'>
                <h2>
                    Aplicação criada para facilitar os seus cálculos durante
                    estudos e/ou trabalho.
                </h2>
            </div>
        </StyledSection>
    )
}

export default Banner
