import styled from "styled-components";

export const DetailsBoxStyled = styled.div`
    padding : 20px;
    display: grid;
    grid-template-columns : 380px 1fr 280px;
    gap : 22px;
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
    `}
    border-radius: 6px;
    margin-bottom: 20px;
`

export const ImagesStyled = styled.div`
    & .active-image{
        ${props => `
            background: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
        `}
        border-radius: 6px;
        padding : 18px;
        display: flex;
        align-items : center;
        justify-content : center;
        width : 380px;
        height : 380px;
    }

    & .active-image img {
        max-width : 100%;
    }

    & .images-row{
        display : flex;
        gap : 9px;
        margin-top: 20px;
    }

    & .images-row .image-container {
        width : 56px;
        height: 56px;
        padding : 4px;
        border: 1px solid ${props => props.theme.palette.gray300};
        border-radius: 4px;
        overflow: hidden;
    }
    & .images-row .image-container.active {
        border: 1px solid ${props => props.theme.palette.gray600};
    }

    & .images-row img {
        max-width: 100%;
    }
`

export const DetailsStyled = styled.div`
${props => `
    & .stock{
        display: flex;
        align-items: center;
        gap: 5px;
        color : ${props.theme.palette.green};
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.2px;
    }

    & h5 {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
        color: ${props.theme.palette.contentColor};
        padding-right : 40px;
        margin-top : 5px;
    }

    & .storage {
        display: flex;
        align-items: center;
        gap : 9px;
        margin-top: 10px;
    }

    & .storage .rating {
        display: flex;
        align-items: center;
        gap : 6px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props.theme.palette.orange};
    }

    & .storage svg {
        color: ${props.theme.palette.gray300};
    }

    & .storage .reviews,
    & .storage .sold {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${props.theme.palette.gray500};
        display: flex;
        align-items: center;
        gap: 10px;
    }

    & .storage .reviews svg,
    & .storage .sold svg {
        color: ${props.theme.palette.gray500};
    }

    & .quantity {
        padding: 16px;
        background: #FFF0DF;
        display: flex;
        align-items: center;
        gap: 40px;
        margin-top: 10px;
    }

    & .quantity .item h6 {
        font-weight: 600;
        font-size: 18px;
        color: ${props.theme.palette.contentColor};
        margin-bottom: 4px;
    }
    & .quantity .item p {
        font-weight: 400;
        font-size: 13px;
        color: ${props.theme.palette.gray800};
    }


    & .quantity .item:not(:first-child) {
        border-left: 2px solid ${props.theme.palette.gray400};
        padding-left : 10px; 
    }
    & .quantity .item:first-child h6 {
        color: #FA3434;
    }

    & .more-info .box {
        border-bottom : 1px solid ${props.theme.palette.gray300};
    }
    & .more-info .box .item {
        display: grid;
        grid-template-columns : 140px 1fr;
        margin: 16px 0;
        font-weight: 400;
        font-size: 16px;
    }
    & .more-info .box .item .name {
        color: ${props.theme.palette.gray500};
    }
    & .more-info .box .item .value {
        color: ${props.theme.palette.gray600};
    }
`}
`


export const SellerStyled = styled.div`
    ${props => `
        padding-left: 5px;

        & .seller-box {
            border: 1px solid #E3E8EE;
            box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
            border-radius: 6px;
            padding : 20px 16px;
            margin-bottom: 20px;
        }

        & .seller-box .info {
            display: flex;
            align-items : center;
            gap: 20px;
            padding-bottom: 20px;
            border-bottom : 1px solid ${props.theme.palette.gray300};
        }

        & .extra-info{
            margin: 18px 0;
            list-style: none;
        }

        & .extra-info li {
            display : grid;
            grid-template-columns : 1fr 200px;
            align-items: center;
            margin-bottom: 8px;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.gray500};
        }

        & .extra-info .icon {
            width: 35px;
        }
        & .extra-info .icon img,
        & .extra-info .icon svg {
            max-width: 100%;
        }

        & button.white {
            background-color: ${props.theme.palette.background};
            color: ${props.theme.palette.primary};
            border: 1px solid ${props.theme.palette.gray300};
            margin-top : 5px;
        }

        & .save {
            font-weight: 500;
            font-size: 16px;
            letter-spacing: -0.1px;
            color: ${props.theme.palette.primary};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
    `}
`

export const GridStyled = styled.div`
    display : grid;
    grid-template-columns : 880px 280px;
    gap: 20px;
    margin-bottom : 20px;  
    align-items: start;
`

export const TabsStyled = styled.div`
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
        box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
        border-radius: 6px;

        & .header {
            display: flex;
            list-style: none;
            border-bottom: 1px solid ${props.theme.palette.gray300};
            padding: 0 8px;
        }
        & .header li {
            padding : 16px 16px 13px;
            font-weight: 500;
            font-size: 16px;
            color: ${props.theme.palette.gray500};
            position : relative;
            cursor: pointer;
        }

        & .header li.active {
            color: ${props.theme.palette.primary};
        }
        & .header li.active::after {
            content : '';
            width : 100%;
            height : 2px;
            position: absolute;
            left : 0;
            bottom : -1px;
            background-color: ${props.theme.palette.primary};
        }

        & .content {
            padding : 20px;
        }
    `}
`


export const DescriptionStyled = styled.section`
    ${props => `
        padding-right: 40px;

        & .tabel,
        & .tabel tr,
        & .tabel td {
            border-collapse: collapse;
            border: 1px solid #E0E7E9;
        }

        & .tabel {
            margin 20px 0 26px;
        }

        & .tabel td {
            padding : 10px;
            font-weight: 400;
            font-size: 16px;
            color: ${props.theme.palette.gray600};
        }

        & .tabel td:first-child {
            background: ${props.theme.palette.gray200};
            width: 200px;
        }
        & .tabel td:last-child {
            width: 360px;
        }

        & .list li {
            margin-bottom: 10px;
            list-style: none;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.gray600};
        }
    `}
`

export const MayLikeStyled = styled.section`
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
        border-radius: 6px;
        padding: 20px 20px 20px 16px;

        & h6 {
            margin-bottom: 5px;
        }

        & .product-box {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 16px;
        }

        & .product-box .image {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
        }
        & .product-box .image img {
            max-width : 100%;
        }
        & .product-box .name {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.contentColor};
            margin-bottom: 3px;
        }
        & .product-box .price {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.gray500};
        }
    `}
`
