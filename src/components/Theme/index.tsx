// funções
import { DefaultTheme } from 'styled-components'

// variáveis
import { variables } from '@/variables'

// imagens
import bannerLight from '/imagens/estatistica-banner-light.jpg'
import bannerDark from '/imagens/estatistica-banner-dark.jpg'

const lightTheme: DefaultTheme = {
    colors: {
        bgColor: variables.extraLightGray,
        secondaryBgColor: variables.white,
        terciaryBgColor: variables.lightGray,
        primaryFontColor: variables.darkGray,
        borderColor: variables.lightGray,
    },
    images: {
        bannerImg: bannerLight,
    },
}

const darkTheme: DefaultTheme = {
    colors: {
        bgColor: variables.darkGray,
        secondaryBgColor: variables.extraRegularGray,
        terciaryBgColor: variables.xxRegularGray,
        primaryFontColor: variables.extraLightGray,
        borderColor: variables.regularGray,
    },
    images: {
        bannerImg: bannerDark,
    },
}

export { darkTheme, lightTheme }
