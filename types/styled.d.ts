import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgColor: string,
      secondaryBgColor: string,
      terciaryBgColor: string,
      primaryFontColor: string,
      borderColor: string
    },
    images: {
      bannerImg: string
    }
  }
}