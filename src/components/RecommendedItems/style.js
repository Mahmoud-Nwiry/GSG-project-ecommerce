import styled from "styled-components";

export const MainSection = styled.section`
    margin-top: 30px;
`

export const ProductStyled = styled.div`
    width : 220px;
    border-radius: 6px;
    padding : 10px;
    ${props => `
        border: 1px solid ${props.theme.palette.gray200};
        background: ${props.theme.palette.background};
    `}

    & .image {
        width : 200px;
        height : 200px;
        display : flex;
        align-items : center;
        justify-content : center;
    }

    & .image img {
        max-width : 100%;
    }

    & .text {
        margin-left : 6px;
        margin-right : 6px;
        margin-top : 14px;
    }

    & .text .price {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: ${props => props.theme.palette.contentColor};
    }

    & .text .name {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: ${props => props.theme.palette.gray500};
    }
`

export const ProductsBoxStyled = styled.div`
    margin-top : 20px;
    display : grid;
    grid-template-columns : repeat(5, 220px);
    gap : 20px;
`