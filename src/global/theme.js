const palette = {
    primary : '#0D6EFD',
    primaryLight : '#E3F0FF',
    orange : '#FF9017',
    orangeLight : '#FFE6BF',
    green : '#00B517',
    greenLight : '#C4FFCB',
    red : '#FA3434'
}

const lightPalette = {
    background : '#FFFFFF',
    pageBackground : '#F7FAFC',
    contentColor : '#1C1C1C',
    gray100 : '#F7FAFC',
    gray200 : '#EFF2F4',
    gray300 : '#E3E8EE',
    gray400 : '#BBBCBE',
    gray500 : '#8B96A5',
    gray600 : '#505050',
    gray800 : '#606060',
}

export const lightTheme = {
    theme : 'light',
    palette : {
        ...lightPalette,
        ...palette
    }
}

export const darkTheme = {
    theme : 'dark',
    palette,
}
