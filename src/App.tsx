// funções
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useAppSelector } from './features/hooks'
import { useEffect } from 'react'

// componentes
import { GlobalStyles } from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Theme'

// pages
import DefaultPage from './pages/DefaultPage'
import Home from './pages/Home'
import OneSetCalculator from './pages/OneSetCalculator'
import TwoSetCalculator from './pages/TwoSetCalculator'
import Results from './pages/Results'
import NotFound from './pages/NotFound'

const App = () => {
    // states globais
    const theme = useAppSelector((state) => state.calc.theme)

    // salva o tema no localstorage quando for alterado
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <GlobalStyles />
                <Routes>
                    <Route path='/' element={<DefaultPage />}>
                        <Route index element={<Home />} />
                        <Route
                            path='conjunto-unico'
                            element={<OneSetCalculator />}
                        />
                        <Route
                            path='conjunto-composto'
                            element={<TwoSetCalculator />}
                        />
                        <Route path='resultados' element={<Results />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
