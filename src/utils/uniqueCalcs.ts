import { somatorio } from "./calcsUtils"

const mediaAritmetica = (array: number[]) => {
    return somatorio(array) / array.length
}

const mediaGeometrica = (array: number[]) => {
    const multiply = array.reduce((acc, value) => acc * Math.abs(value), 1)
    return Math.pow(multiply, 1 / array.length)
}

const mediana = (array: number[]) => {
    if (array.length % 2 == 0) {
        const value1 = array[array.length / 2 - 1]
        const value2 = array[array.length / 2]
        const values = [value1, value2]
        return mediaAritmetica(values)
    }
    else {
        const value = array[Math.floor(array.length / 2)]
        return value
    }
}

const amplitude = (array: number[]) => {
    const first = array[0]
    const last = (array.reverse())[0]
    return last - first
}

const variancia = (array: number[]) => {
    const n = array.length
    const media = mediaAritmetica(array)
    const somatorio = array.reduce((acc, value) => Math.abs(Math.pow(value - media, 2)) + acc, 0)
    return somatorio / n
}

const desvioPadrao = (array: number[]) => {
    return Math.sqrt(variancia(array))
}

const moda = (array: number[]) => {
    // referências utilizadas
    const freq: number[] = []
    let maxFreq = 0
    const result = []

    // encontrando a moda
    for(let i in array) {
        freq[array[i]] = (freq[array[i]] || 0) + 1
        if(freq[array[i]] > maxFreq) {
            maxFreq = freq[array[i]]
        }
    }
    for(let j in freq) {
        if(freq[j] == maxFreq && maxFreq > 1) {
            result.push(Number(j))
        }
    }
    if(!result[0]) {
        return 'inexistente'
    }

    return result
}   

export {
    mediaAritmetica,
    mediaGeometrica,
    mediana,
    amplitude,
    variancia,
    desvioPadrao,
    moda
}