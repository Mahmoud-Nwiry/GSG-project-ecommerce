import styled from "styled-components";

export const CategoryShowStyled = styled.div`
    ${props => `
    background: ${props.theme.palette.background};
    border: 1px solid ${props.theme.palette.gray300};
    `}
    border-radius: 6px;
    display : grid;
    grid-template-columns:280px 1fr;
    display : grid;
    margin: 20px 0;
`

export const CategoryInfo = styled.div`
    background-image: url(${props => props.background});
    padding : 20px;
    color: ${props => props.theme.palette.contentColor};

    & h3 {
        width : 155px;
        font-weight: 600;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: -0.2px;
        margin-bottom: 18px;
    }

    & button {
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
        border-radius: 6px;
        font-weight: 500;
        font-size: 16px;
        padding : 10px 12px;
    }
`

export const ProductsContainerStyled = styled.div`
    display : grid;
    grid-template-columns:repeat(4 , 225px);
`

export const ProductStyled = styled.div`
    padding: 20px 0 19px 16px;
    border-left: 1px solid ${props => props.theme.palette.gray300};
    border-bottom: 1px solid ${props => props.theme.palette.gray300};
    display: flex;
    justify-content: space-between;

    & h4{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.palette.contentColor};
    }

    & p {
        margin-top : 9px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: ${props => props.theme.palette.gray500};
    }

    & .image {
        width : 82px;
        height : 82px;
        margin-top: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .image img {
        max-width : 100%;
    }
`