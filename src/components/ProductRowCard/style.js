import styled from "styled-components";

export const ProductRowCardStyled = styled.div`
    width: 100%;
    display : flex;
    border-radius: 6px;
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid  ${props.theme.palette.gray300};
    `}
    padding : 8px;
    position: relative;


    & .image {
        width: 210px;
        height: 210px;
        padding : 10px;
    }

    & .image img {
        max-width: 100%;
    }

    & .details {
        padding-top : 23px; 
    }

    & .details h3 {
        font-weight: 500;
        font-size: 16px;
        color: ${props => props.theme.palette.contentColor};
        margin-bottom: 16px;
    }
    & .details .price {
        display: flex;
        align-items: center;
        gap : 8px;
        margin-bottom: 5px;
    }

    & .details .price .main {
        font-weight: 600;
        font-size: 20px;
        letter-spacing: -0.2px;
        color: ${props => props.theme.palette.contentColor};
    }

    & .details .price .offer {
        font-weight: 600;
        font-size: 15px;
        text-decoration-line: line-through;
        color: ${props => props.theme.palette.gray500};
    }

    & .details .storage {
        display: flex;
        align-items: center;
        gap : 9px;
    }

    & .details .storage .rating {
        display: flex;
        align-items: center;
        gap : 6px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.palette.orange};
    }

    & .details .storage svg {
        color: ${props => props.theme.palette.gray300};
    }

    & .details .storage .orders {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.palette.gray500};
    }

    & .details .storage .shipping {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.palette.green};
    }
    
    & .details .description {
        width : 600px;
        margin-top : 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: ${props => props.theme.palette.gray600};
    }

    & .details .view {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.theme.palette.primary};
        text-decoration: none;
        display: block;
        margin-top: 8px;
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