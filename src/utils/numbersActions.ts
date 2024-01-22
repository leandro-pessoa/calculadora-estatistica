// tipagens externas
import { INumber } from "@/shared/interfaces/INumber"

const removeNumber = (numbers: INumber[], action: string) => {
    return numbers.filter(num => num.id !== action)
}

const toggleCalc = (calcs: string[], action: string) => {
    if (calcs.includes(action)) {
        return calcs.filter(calc => calc !== action)
    }
    return [...calcs, action]
}

const edit = (array: INumber[], id: string, value: string | number) => {
    let arrayValue = array.find(num => num.id === id)
    if(arrayValue) {
        arrayValue.num = value
    }
}


export {
    removeNumber,
    toggleCalc,
    edit
}