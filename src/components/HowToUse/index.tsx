// componentes
import { StyledSection } from './styles'
import Title from '../Title'

// ícones
import { MdOutlineDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { PiHouseLight } from 'react-icons/pi'
import { PiNumberCircleOneLight } from 'react-icons/pi'
import { PiNumberCircleTwoLight } from 'react-icons/pi'
import { PiCardsLight } from 'react-icons/pi'

const HowToUse = () => {
    return (
        <StyledSection>
            <Title fontSize='2rem'>Como utilizar ?</Title>

            <h3>Tema</h3>
            <p>
                O site contém dois temas, o claro e o escuro, sendo que os dois
                podem ser alternados clicando no botão (<MdOutlineDarkMode />
                ou
                <MdOutlineLightMode />) que está na parte superior direita do
                site.
            </p>

            <h3>Navegação</h3>
            <p>
                Para navegar entre as telas é bem simples, basta ir ao topo da
                página e selecionar entre home, simples, composto ou resultados
                ou os ícones (<PiHouseLight />
                <PiNumberCircleOneLight />
                <PiNumberCircleTwoLight />
                <PiCardsLight />) . Já para usuários de tablet ou mobile, os
                ícones aparecerão na parte inferior da tela.
            </p>
            <p>
                Também há a opção de esconder o cabeçalho da página, que pode
                ser feita clicando na seta no canto superior esquerdo. Isso para
                diminuir a quantidade de elementos na tela e melhorar a
                concentração.
            </p>

            <h3>Páginas de cálculos</h3>
            <p>
                As páginas são compostas por duas seções e, no fim, o botão para
                calcular.
            </p>
            <p>
                Na primeira seção, há o(s) campo(s) para adicionar os números,
                que devem ser inseridos um de cada vez. Ao adicionar um número,
                uma lista aparecerá, mostrando os números inseridos. Em cada
                número, haverá um botão com um 'x', que é utilizado para apagar
                aquele número em específico. Caso queira apagar todos os
                números, o botão 'Limpar tudo' faz esse trabalho. No caso em que
                há duas listas, há um botão 'Limpar tudo' para cada uma.
            </p>
            <p>
                Ao clicar em um número que está na lista, um campo aparecerá
                para alterar o valor do item, possibilitando a troca do valor,
                caso tenha inserido um valor incorreto. Quando o usuário apaga
                tudo, o item é deletado da lista.
            </p>
            <p>
                Na segunda seção, são exibidos os cálculos que podem ser
                realizados pelo site. Para selecionar um cálculo, basta clicar
                nele e ele será selecionado.
            </p>
            <p>
                Vale lembrar que os cálculos de dois conjuntos necessitam ter a
                mesma quantidade de números para que o cálculo seja realizado.
            </p>
            <p>
                Por fim, caso haja números na lista e tenha algum cálculo
                selecionado, o usuário será redirecionado para a tela de
                resultados.
            </p>

            <h3>Página de resultados</h3>
            <p>
                Primeiramente, aparecerá uma seção que te possibilita alterar as
                casas decimais dos resultados (de 0 a 6) e para usar é
                necessário arrastar a bola para um lado ou outro.
            </p>
            <p>
                Já na seções de cálculos, há o(s) rol(s) e, abaixo, os
                resultados dos cálculos selecionados.
            </p>
            <p>
                Caso vá fazer outro cálculo, basta voltar à página de cálculos
                (simples ou composto), adicionar novos números, adicionar ou
                remover cálculos e clicar em calcular novamente.
            </p>
        </StyledSection>
    )
}

export default HowToUse
