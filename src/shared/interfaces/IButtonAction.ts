// tipagens externas
import { INumber } from "./INumber";

export interface IButtonAction {
    action:
        (()=>{ payload: INumber; type: "calc/addNumber"; }) |
        (()=>{ payload: string; type: "calc/removeNumber"; }) |
        (()=>{ payload: string; type: "calc/removeAllNumbers"; }) |
        (()=>{ payload: string; type: "calc/removeUniqueNumber"; }) |
        (()=>{ payload: string; type: "calc/removeXNumber"; }) |
        (()=>{ payload: string; type: "calc/removeYNumber"; }) |
        (()=>{ type: "calc/swapHeader"; }) |
        (()=>{ type: "calc/calculateUnique"; }) | 
        (()=>{ type: "calc/calculateCompost"; }) | 
        (()=>void)
}