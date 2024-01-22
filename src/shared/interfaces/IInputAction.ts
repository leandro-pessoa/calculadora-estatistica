// tipagens externas
import { INumber } from "./INumber";

export interface IInputAction {
    action: 
        ({payload: INumber; type: "calc/addUniqueNumber";}) |
        ({payload: INumber; type: "calc/addXNumber";}) |
        ({payload: INumber; type: "calc/addYNumber";})
}