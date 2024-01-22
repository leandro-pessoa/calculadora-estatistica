// funções
import { mediaAritmetica } from "./uniqueCalcs"
import { somatorio, produtos } from "./calcsUtils"

const covariancia = (x: number[], y: number[]) => {
    // média dos conjuntos
    const xMedia = mediaAritmetica(x)
    const yMedia = mediaAritmetica(y)

    // somatórios
    const somatorioX = x.map((value) => (value - xMedia))
    const somatorioY = y.map((value) => (value - yMedia))

    // soma todos os produtos
    const produtoSomatorio = produtos(somatorioX, somatorioY).reduce((acc, value) => value + acc)    

    // valor final
    return produtoSomatorio / (x.length - 1)
}

const correlacao = (x: number[], y: number[]) => {

    // cálculos no numerador
    const produtosXY = produtos(x, y)
    const numerador = (x.length * somatorio(produtosXY)) - (somatorio(x) * somatorio(y))

    // cálculos no denominador
    const xQuadrados = x.map(num => num ** 2)
    const yQuadrados = y.map(num => num ** 2)
    const calcsX = Math.sqrt((x.length * somatorio(xQuadrados)) - (Math.pow(somatorio(x), 2)))
    const calcsY = Math.sqrt((y.length * somatorio(yQuadrados)) - (Math.pow(somatorio(y), 2)))
    const denominador = calcsX * calcsY

    // resultado final
    return numerador / denominador
}

const regressaoLinear = (x: number[], y: number[]) => {
    // coeficiente angular
    const produtosXY = produtos(x, y)
    const xQuadrados = x.map(num => num ** 2)

    const numeradorCA = (x.length * somatorio(produtosXY)) - (somatorio(x) * somatorio(y))
    const denominadorCA = (x.length  * somatorio(xQuadrados)) - (somatorio(x) ** 2)

    const coeficienteAngular = numeradorCA / denominadorCA

    // intercepto
    const numeradorI = (somatorio(y)) - (coeficienteAngular * somatorio(x))
    const denominadorI = x.length

    const intercepto = numeradorI / denominadorI

    // resultado
    return [intercepto, coeficienteAngular]
}

export {
    covariancia,
    correlacao,
    regressaoLinear
}