import styled from "styled-components";

const AuthFooterStyled = styled.footer`
    ${props => `
        background-color : ${props.theme.palette.background};
        padding : 26px 120px;
        position : absolute;
        bottom : 0;
        left : 0;
        width : 100%;
        display: flex;
        align-items : center;
        justify-content : space-between;

        & .payment {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
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


        & .links {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 30px;
        }

        & .links a{
            text-decoration: none;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: -0.2px;
            color: ${props.theme.palette.gray800};
            opacity: 0.6;
        }
    `}
`

export default  AuthFooterStyled