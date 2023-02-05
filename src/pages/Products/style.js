import styled from "styled-components";

export const ProductsStyled = styled.main`
    display : grid;
    grid-template-columns : 240px 920px;
    gap: 20px;
    margin-bottom: 30px;
`

export const AreaHeaderStyled = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding: 11px 10px 11px 20px;
    border-radius: 6px;
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
    `}

    & .info {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        color: ${props => props.theme.palette.contentColor};
    }

    & .info h6 {
        display: inline-block;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0px;
        font-weight: 600;
    }

    & .controllers {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    & .controllers .btns {
        display : flex;
        border-radius: 3px;
    }

    & .controllers select {
        ${props => `
            width: 125px;
            padding: 10px;
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
            color: ${props.theme.palette.contentColor};
            background: ${props.theme.palette.background};
            font-weight: 400;
            font-size: 16px;
        `}
    }
    & .controllers .btns button {
        ${props => `
            background: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
            color : ${props.theme.palette.gray500};
            padding : 10px;
            display: flex;
            align-items : center;
            justify-content : center;
        `}
    }
    & .controllers .btns button.active{
        background: ${props => props.theme.palette.gray200};
    }
    & .controllers .btns button svg {
        width :18px;
        height : 18px;
    }
`

export const ProductsAreaRowStyled = styled.div`
    margin: 20px 0;
    display : flex;
    flex-direction: column;
    gap : 10px;
`

export const ProductsAreaGridStyled = styled.div`
    margin: 20px 0;
    display : grid;
    grid-template-columns: repeat(3, 293px);
    gap : 20px;
`

export const ControlStyled = styled.div`
    ${props => `
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap : 10px;

        & select {
            width: 125px;
            padding: 10px;
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
            color: ${props.theme.palette.contentColor};
            background: ${props.theme.palette.background};
            font-weight: 400;
            font-size: 16px;
        }
    `}
`

export const FilterKeyWordsStyled = styled.div`
    display: flex;
    align-items : center;
    gap: 8px;
    margin: 20px 0;

    & .clear {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.palette.primary};
        cursor: pointer;
    }
`