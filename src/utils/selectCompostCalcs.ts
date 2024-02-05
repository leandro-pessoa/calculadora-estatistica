// funções
import { covariancia, correlacao, regressaoLinear } from '@/utils/compostCalcs'
import { obj } from './calcsUtils'

// tipagens externas
import { INumber } from '@/shared/interfaces/INumber'
import { IResults } from '@/shared/interfaces/IResults'

const selectCompostCalc = (calcs: string[], x: INumber[], y: INumber[]) => {
    // resultados que serão retornados pela função
    const results: IResults['numbers'] = []

    // arrays com somente os números (sem id)
    const xOnly = x.map((num) => Number(num.num))
    const yOnly = y.map((num) => Number(num.num))

    calcs.forEach((calc) => {
        if (calc === 'Covariância') {
            results.push(obj('Covariância', covariancia(xOnly, yOnly)))
        }
        if (calc === 'Correlação') {
            results.push(obj('Correlação', correlacao(xOnly, yOnly)))
        }
        if (calc === 'Regressão linear') {
            results.push({
                calcName: 'Regressão linear',
                regressao: regressaoLinear(xOnly, yOnly),
            })
        }
    })

    return results
}

export default selectCompostCalc
