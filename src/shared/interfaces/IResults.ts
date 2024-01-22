
export interface IResults {
    rol?: number[],
    rolX?: number[],
    rolY?: number[],
    numbers: {
        calcName: string,
        number?: number,
        moda?: number[] | string,
        regressao?: number[]
    }[]
}
