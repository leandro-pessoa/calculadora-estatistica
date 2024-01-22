// funções e tipagens
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { INumber } from "@/shared/interfaces/INumber"
import { IResults } from "@/shared/interfaces/IResults"
import selectUniqueCalc from "@/utils/selectUniqueCalc"
import { edit, removeNumber, toggleCalc } from "@/utils/numbersActions"
import { numberOnly } from "@/utils/calcsUtils"
import selectCompostCalc from "@/utils/selectCompostCalcs"

// tipagem dos states
interface CalcState {
    theme: string,
    headerDisplay: boolean,
    uniqueCalcs: string[],
    compostCalcs: string[],
    inputUniqueValue: number | string,
    inputXValue: number | string,
    inputYValue: number | string
    uniqueNumbers: INumber[],
    xNumbers: INumber[],
    yNumbers: INumber[],
    uniqueResults: IResults
    compostResults: IResults,
    decimalPlaces: string,
}

// obtenção do localStorage para verificação no state 'theme'
const getTheme = localStorage.getItem('theme')

// valor inicial de cada state
const initialState: CalcState = {
    theme: getTheme !== null ? JSON.parse(getTheme) : 'light',
    headerDisplay: true,
    uniqueCalcs: [],
    compostCalcs: [],
    inputUniqueValue: '',
    inputXValue: '',
    inputYValue: '',
    uniqueNumbers: [],
    xNumbers: [],
    yNumbers: [],
    uniqueResults: {
        numbers: []
    },
    compostResults: {
        numbers: []
    },
    decimalPlaces: '2',
}

// slice
const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        // alterna entre os temas
        toggleTheme: state => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
        },

        // alterna o display do header
        swapHeader: state => {
            state.headerDisplay = !state.headerDisplay
        },

        // alterna os cálculos que serão realizados
        toggleUniqueCalc: (state, action: PayloadAction<string>) => {
            state.uniqueCalcs = toggleCalc(state.uniqueCalcs, action.payload)
        },
        toggleCompostCalc: (state, action: PayloadAction<string>) => {
            state.compostCalcs = toggleCalc(state.compostCalcs, action.payload)
        },

        // alteram os valores de seus states
        inputUniqueHandle: (state, action: PayloadAction<number | string>) => {
            state.inputUniqueValue = action.payload
        },
        inputXHandle: (state, action: PayloadAction<number | string>) => {
            state.inputXValue = action.payload
        },
        inputYHandle: (state, action: PayloadAction<number | string>) => {
            state.inputYValue = action.payload
        },

        // adiciona um número aos arrays especificados e depois apaga o valor do input
        addUniqueNumber: (state, action: PayloadAction<INumber>) => {
            if (state.inputUniqueValue && state.inputUniqueValue !== '') {
                state.uniqueNumbers = [...state.uniqueNumbers, action.payload]
            }
            state.inputUniqueValue = ''
        },
        addXNumber: (state, action: PayloadAction<INumber>) => {
            if (state.inputXValue && state.inputXValue !== '') {
                state.xNumbers = [...state.xNumbers, action.payload]
            }
            state.inputXValue = ''
        },
        addYNumber: (state, action: PayloadAction<INumber>) => {
            if (state.inputYValue && state.inputYValue !== '') {
                state.yNumbers = [...state.yNumbers, action.payload]
            }
            state.inputYValue = ''
        },
       
        // remove um número do array especificado
        removeUniqueNumber: (state, action: PayloadAction<string>) => {
            state.uniqueNumbers = removeNumber(state.uniqueNumbers, action.payload)
        },
        removeXNumber: (state, action: PayloadAction<string>) => {
            state.xNumbers = removeNumber(state.xNumbers, action.payload)
        },
        removeYNumber: (state, action: PayloadAction<string>) => {
            state.yNumbers = removeNumber(state.yNumbers, action.payload)
        },

        // remove todos os números de um array
        removeAllNumbers: (state, action: PayloadAction<string>) => {
            if (action.payload === 'unique') {
                state.uniqueNumbers = []
            }
            if (action.payload === 'x') {
                state.xNumbers = []
            }
            if (action.payload === 'y') {
                state.yNumbers = []
            }
        },

        // realiza os cálculos de acordo com o que foi selecionado nas checkboxes
        calculateUnique: state => {
            state.uniqueResults.numbers = selectUniqueCalc(state.uniqueCalcs, state.uniqueNumbers)   
            state.uniqueResults.rol = numberOnly(state.uniqueNumbers)
        },
        calculateCompost: state => {
            state.compostResults.rolX = numberOnly(state.xNumbers)
            state.compostResults.rolY = numberOnly(state.yNumbers)
            state.compostResults.numbers = selectCompostCalc(state.compostCalcs, state.xNumbers, state.yNumbers)
        },

        decimalPlacesHandle: (state, action: PayloadAction<string>) => {
            state.decimalPlaces = action.payload
        },

        // action voltada à alteração de números da lista  
        editNumber: (state, action: PayloadAction<{id: string, value: string, array: string}>) => {
            if(action.payload.array === 'unique'){
                edit(state.uniqueNumbers, action.payload.id, action.payload.value)
            }
            if(action.payload.array === 'x'){
                edit(state.xNumbers, action.payload.id, action.payload.value)
            }
            if(action.payload.array === 'y'){
                edit(state.yNumbers, action.payload.id, action.payload.value)
            }
        }
    }
})

// exports das actions e do reducer
export const {
    toggleTheme,
    swapHeader,
    toggleUniqueCalc,
    toggleCompostCalc,
    inputUniqueHandle,
    inputXHandle,
    inputYHandle,
    addUniqueNumber,
    addXNumber,
    addYNumber,
    removeUniqueNumber,
    removeXNumber,
    removeYNumber,
    removeAllNumbers,
    calculateUnique,
    calculateCompost,
    decimalPlacesHandle,
    editNumber
} = calcSlice.actions
export const CalcReducer = calcSlice.reducer

