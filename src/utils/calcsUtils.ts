// tipagens externas
import { INumber } from "@/shared/interfaces/INumber"

// retorna os números de um array 'INumber' em um rol
const numberOnly = (array: INumber[]) => {
    const only = array.map((num) => Number(num.num))
    return only.sort((a, b) => a - b)
}

// retorna o objeto INumber
const obj = (name: string, num: number) => {
    return { calcName: name, number: num }
}

// soma todos os números do array
const somatorio = (array: number[]) => {
    return array.reduce((acc, value) => value + acc)
}

// retorna os produtos das multiplicações de dois arrays
const produtos = (a: number[], b: number[]) => {
    const produto = []
    for(let i in a) {
        produto.push(a[i] * b[i])
    }
    return produto
}

export {
    numberOnly,
    obj,
    somatorio,
    produtos
} 