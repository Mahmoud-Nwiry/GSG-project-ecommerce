import styled from "styled-components";

export const CartGridStyled = styled.div`
    ${props => `
        display: grid;
        grid-template-columns: 880px 280px;
        gap: 20px;
        align-items: start;

        & .card {
            padding : 20px;
            background-color: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
        }

        & .card .main-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        & .card .main-buttons a {
            background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
            border: 1px solid #0D6EFD;
            border-radius: 6px;
            padding : 10px 18px;
            display: flex;
            align-items : center;
            gap: 12px;
            text-decoration: none;
            color: #fff;
            font-weight: 500;
            font-size: 16px;
        }
        & .card .main-buttons button {
            background-color: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
            padding : 10px 18px;
            text-decoration: none;
            color: ${props.theme.palette.primary};
            font-weight: 500;
            font-size: 16px;
        }


        & .right-side .coupon {
            background-color: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
            padding : 20px 16px;
            margin-bottom: 20px;
        }
        & .right-side .coupon p {
            font-weight: 400;
            font-size: 16px;
            color: ${props.theme.palette.gray600};
            margin-bottom: 10px;
        }

        & .right-side .coupon .inputs {
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr 85px;
        }

        & .right-side .coupon .inputs input{
            width: 165px;
            padding: 10px;
            font-weight: 400;
            font-size: 16px;
            color: ${props.theme.palette.contentColor};
            background: ${props.theme.palette.background};
            border: none;
            outline: none;
        }

        & .right-side .coupon .inputs input::placeholder{
            color: ${props.theme.palette.gray500};
        }

        & .right-side .coupon .inputs button {
            padding: 10px 0;
            background-color: ${props.theme.palette.background};
            border: none;
            border-left: 1px solid ${props.theme.palette.gray300};
            font-weight: 400;
            font-size: 16px;
            color: ${props.theme.palette.primary};
        }

        & .right-side .checkout {
            background-color: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
            padding : 20px 18px;
        }
    `}
`

export const ProductCartStyled = styled.div`
    ${props => `
        display: grid;
        grid-template-columns: 80px 1fr 120px;
        gap: 20px;
        padding-bottom : 20px;
        margin-bottom : 20px;
        border-bottom : 1px solid ${props.theme.palette.gray300};

        & .image {
            width : 80px;
            height: 80px;
            padding : 10px;
            background-color: #F7F7F7;
            border: 1px solid ${props.theme.palette.gray200};
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .image img {
            max-width: 100%;
        }

        & .details h6 {
            font-weight: 500;
            font-size: 16px;
            color: ${props.theme.palette.contentColor};
            margin-bottom: 5px;
        }

        & .details p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.gray500};
        }

        & .details .buttons {
            margin-top: 10px;
        }

        & .details .buttons button {
            background: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
            box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
            border-radius: 6px;
            font-weight: 500;
            font-size: 13px;
            padding: 7px 10px;
            margin-right : 5px;
        }

        & .details .buttons .remove {
            color: #FA3434;
        }
        & .details .buttons .save {
            color: #0D6EFD;
        }

        & .cost {
            text-align: right;
        }

        & .cost .price {
            font-weight: 500;
            font-size: 16px;
            color: ${props.theme.palette.contentColor};
            margin-bottom: 10px;
        }

        & .cost .quantity {
            font-weight: 500;
            font-size: 16px;
            color: ${props.theme.palette.contentColor};
            margin-bottom: 10px;
            background: ${props.theme.palette.background};
            border: 1px solid ${props.theme.palette.gray300};
            border-radius: 6px;
            padding : 10px;
            width : 100%;
        }
    `}
`

export const CheckoutStyled = styled.div`
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
        box-shadow: 0px 4px 10px rgba(56, 56, 56, 0.1);
        border-radius: 6px;
        padding : 20px 18px;

        & .details {
            padding-bottom: 10px;
            border-bottom: 1px solid #E4E4E4;
        }

        & .details li {
            font-weight: 400;
            font-size: 16px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.gray600};
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        & .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 15px 0 20px;
            color: ${props.theme.palette.contentColor};
            font-weight: 600;
        }

        & .total .text {
            font-size: 16px;
        }

        & .total .price {
            font-size: 20px;
            letter-spacing: -0.2px;
        }

        & button {
            background: ${props.theme.palette.green};
            border: 1px solid ${props.theme.palette.green};
        }

        & .payment {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 18px;
        }

        & .payment .image {
            width: 34px;
            height: 22px;
            border: 1px solid ${props.theme.palette.gray100};
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .payment .image img {
            max-width: 100%;
        }
    `}
`

export const ServicesStyled = styled.section`
    ${props => `
        display : flex;
        align-items: center;
        gap: 55px;
        margin: 30px 0;

        & .service {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        & .service .icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: ${props.theme.palette.gray300};
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .service .icon svg {
            color : ${props.theme.palette.gray500};
            font-size: 22px;
        }
    `}
`

export const SavedStyled = styled.section`
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
        box-shadow: 0px 4px 10px rgba(56, 56, 56, 0.1);
        border-radius: 6px;
        padding : 20px 18px;
        margin-bottom: 20px;

        & .products {
            display: grid;
            grid-template-columns: repeat(4, 270px);
            gap: 20px;
            margin-top: 20px;
        }

        & .products .product .image {
            background: #EEEEEE;
            border-radius: 6px;
            width : 270px;
            height: 240px;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        & .products .product .image img {
            max-width: 100%;
        }

        & .products .product .price {
            margin: 10px 0;
            font-weight: 600;
            font-size: 18px;
            color: ${props.theme.palette.contentColor};
        }
        & .products .product .name {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.gray800};
            padding-right: 40px;
            margin-bottom: 12px;
        }

        & .products .product button {
            color: ${props.theme.palette.primary};
            background: ${props.theme.palette.background};
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 10px;
            padding : 10px;
            padding-right : 20px;
        }
    `}
`