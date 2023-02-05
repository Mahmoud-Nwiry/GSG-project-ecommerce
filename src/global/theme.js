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


const darkPalette = {
    background : '#111',
    pageBackground : '#151719',
    contentColor : '#FFFFFF',
    gray100 : '#151719',
    gray200 : '#212529',
    gray300 : '#292b2e',
    gray400 : '#3b3d41',
    gray500 : '#747679',
    gray600 : '#ced4da',
    gray800 : '#F7FAFC',
}

export const darkTheme = {
    theme : 'dark',
    palette : {
        ...darkPalette,
        ...palette
    }
}
