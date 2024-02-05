const variables = {
    // fontes
    primaryFont: '"Montserrat", sans-serif',
    secondaryFont: '"Roboto", sans-serif',

    // cores
    black: '#000',
    white: '#fff',
    green: '#9CCC65',
    lightGreen: '#bae786',
    lightBlue: '#3aa5fcd5',
    lightRed: '#fa7171',

    darkGray: '#15151b',
    regularGray: '#38383a',
    extraRegularGray: '#464649',
    xxRegularGray: '#707075',
    lightGray: '#dededf',
    extraLightGray: '#EFEFEF',

    // breakpoints
    desktop: '1440px',
    notebook: '1024px',
    tablet: '869px',
    smartphone: '669px',
    smallSmartphone: '400px',
}

const flex = (
    direction?: string,
    justify?: string,
    align?: string,
    gap?: string,
): string => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `
}

export { variables, flex }
