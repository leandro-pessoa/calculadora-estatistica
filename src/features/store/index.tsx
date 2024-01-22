// funções
import { configureStore } from "@reduxjs/toolkit"

// reducer
import { CalcReducer } from "../reducer"

// declaração da store
export const store = configureStore({
    reducer: {
        calc: CalcReducer
    }
})

// export de tipos referentes à store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch