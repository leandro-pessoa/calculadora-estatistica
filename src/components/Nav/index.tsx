// componentes
import { StyledNav } from "./styles"
import ListItem from "../Header/ListItem"
import { useLocation } from "react-router-dom"

// ícones
import { PiHouseLight } from "react-icons/pi"
import { PiHouseFill } from "react-icons/pi"
import { PiNumberCircleOneLight } from "react-icons/pi"
import { PiNumberCircleOneFill } from "react-icons/pi"
import { PiNumberCircleTwoLight } from "react-icons/pi"
import { PiNumberCircleTwoFill } from "react-icons/pi"
import { PiCardsLight } from "react-icons/pi"
import { PiCardsFill } from "react-icons/pi"

// tipagem dos props
interface NavProps {
    position: string
}

const Nav = ({ position }: NavProps) => {
    // parâmetros dos ícones
    const iconsParams = {
        size: 24
    }

    // nome da url
    const location = useLocation()

    return (
        <StyledNav $position={position}>
            <ul>
                <ListItem to="/">
                    <span className="txt">Home</span>
                    <span className="icon">
                        {
                            location.pathname === '/' ?
                                <PiHouseFill {...iconsParams}/>
                            :
                                <PiHouseLight {...iconsParams}/>
                        }
                    </span>
                </ListItem>
                <ListItem to="/conjunto-unico">
                    <span className="txt">Simples</span>
                    <span className="icon">
                        {
                            location.pathname === '/conjunto-unico' ?
                                <PiNumberCircleOneFill {...iconsParams}/>
                            :
                                <PiNumberCircleOneLight {...iconsParams}/>
                        }
                    </span>
                </ListItem>
                <ListItem to="/conjunto-composto">
                    <span className="txt">Composto</span>
                    <span className="icon">
                        {
                            location.pathname === '/conjunto-composto' ?
                                <PiNumberCircleTwoFill {...iconsParams}/>
                            :
                                <PiNumberCircleTwoLight {...iconsParams}/>
                        }
                    </span>
                </ListItem>
                <ListItem to="/resultados">
                    <span className="txt">Resultados</span>
                    <span className="icon">
                        {
                            location.pathname === '/resultados' ?
                                <PiCardsFill {...iconsParams}/>
                            :
                                <PiCardsLight {...iconsParams}/>
                        }
                    </span>
                </ListItem>
            </ul>
        </StyledNav>
    )
}

export default Nav