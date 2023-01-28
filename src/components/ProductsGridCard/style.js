import styled from "styled-components";

export const ProductGridCardStyled = styled.div`
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
        border-radius: 6px;
    `}

    & .image {
        padding : 5px;
        border-bottom: 1px solid ${props => props.theme.palette.gray300};
    }

    & .image .image-container {
        width: 230px;
        height : 230px;
        margin: 0 auto;
        display : flex;
        align-items : center;
        justify-content : center;
    }
    & .image .image-container img {
        max-width : 100%;
    }

    & .info {
        padding : 17px 20px 20px;
        position: relative;
    }

    & .info .price {
        display: flex;
        align-items: center;
        gap : 8px;
        margin-bottom: 9px;
    }

    & .info .price .main {
        font-weight: 600;
        font-size: 18px;
        color: ${props => props.theme.palette.contentColor};
    }

    & .info .price .offer {
        font-weight: 400;
        font-size: 15px;
        text-decoration-line: line-through;
        color: ${props => props.theme.palette.gray500};
    }

    & .info .rating {
        display: flex;
        align-items: center;
        gap : 6px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.palette.orange};
    }

    & .info svg {
        color: ${props => props.theme.palette.gray300};
    }

    & .info h3 {
        width: 220px;
        margin-top: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: ${props => props.theme.palette.gray800};
    }

    & .fav {
        ${props => `
        background: ${props => props.theme.palette.background};
        border: 1px solid ${props => props.theme.palette.gray300};
        `}
        width: 40px;
        height: 40px;
        box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.2);
        border-radius: 6px;
        position : absolute;
        top: 20px;
        right: 20px;
        display : flex;
        align-items : center;
        justify-content : center;
    }

    & .fav svg {
        font-size : 25px;
        color : ${props => props.theme.palette.primary}
    }

`