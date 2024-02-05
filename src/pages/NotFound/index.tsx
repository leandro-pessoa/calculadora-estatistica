// componentes
import { StyledSection } from './styles'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    // função de redirecionamento
    const navigate = useNavigate()

    return (
        <StyledSection>
            <h2>Página não encontrada</h2>
            <button onClick={() => navigate(-1)}>
                Voltar para aonde estava
            </button>
        </StyledSection>
    )
}

export default NotFound
