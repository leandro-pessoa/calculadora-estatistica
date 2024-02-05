// funções
import {
    mediaAritmetica,
    mediaGeometrica,
    mediana,
    amplitude,
    variancia,
    desvioPadrao,
    moda,
} from '@/utils/uniqueCalcs'
import { numberOnly, obj, somatorio } from './calcsUtils'

// tipagens externas
import { INumber } from '@/shared/interfaces/INumber'
import { IResults } from '@/shared/interfaces/IResults'

const selectUniqueCalc = (calcs: string[], numbers: INumber[]) => {
    // filtragem e organização dos números em um rol
    const numbersOnly = numberOnly(numbers)

    // array com os resultados
    const results: IResults['numbers'] = []

    calcs.forEach((calc) => {
        if (calc === 'Média aritmética') {
            results.push(obj('Média aritmética', mediaAritmetica(numbersOnly)))
        }
        if (calc === 'Média geométrica') {
            results.push(obj('Média geométrica', mediaGeometrica(numbersOnly)))
        }
        if (calc === 'Soma total') {
            results.push(obj('Soma total', somatorio(numbersOnly)))
        }
        if (calc === 'Mediana') {
            results.push(obj('Mediana', mediana(numbersOnly)))
        }
        if (calc === 'Amplitude') {
            results.push(obj('Amplitude', amplitude(numbersOnly)))
        }
        if (calc === 'Variância') {
            results.push(obj('Variância', variancia(numbersOnly)))
        }
        if (calc === 'Desvio padrão') {
            results.push(obj('Desvio padrão', desvioPadrao(numbersOnly)))
        }
        if (calc === 'Moda') {
            const plural =
                moda(numbersOnly).length > 1 &&
                typeof moda(numbersOnly) !== 'string'
                    ? 's'
                    : ''
            results.push({ calcName: `Moda${plural}`, moda: moda(numbersOnly) })
        }
    })

    return results
}

export default selectUniqueCalc
