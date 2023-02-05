import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: ${props=>props.theme.palette.background};
    
    & h6 {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: ${props=>props.theme.palette.contentColor};
        margin-bottom: 15px;
    }
    
    & .content {
        padding: 40px 0 60px;
        display : flex;
        justify-content: space-between;
    }
    

    & .info {
        width : 270px;
    }
    & .info p {
        margin-top: 18px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: ${props=>props.theme.palette.gray600};
    }

    & .info .social-links {
        display : flex;
        align-items : center;
        justify-content: flex-start;
        gap : 10px;
        margin-top: 16px;
    }

    & .info .social-links a{
        width : 33px;
        height : 33px;
        border-radius : 50%;
        background-color: ${props=>props.theme.palette.gray500};
        display : flex;
        align-items : center;
        justify-content : center;
    }

    & .lists {
        display : flex;
        gap : 64px;
    }

    & .lists li {
        list-style : none;
        margin-bottom: 3px;
    }
    & .lists li a {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: ${props=>props.theme.palette.gray500};
        text-decoration: none;
    }
`

export const CopyrightStyled = styled.div`
    padding : 23px 0 21px;
    background-color: ${props=>props.theme.palette.gray200};

    & .content-copyright {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .content-copyright p {
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${props=>props.theme.palette.contentColor}
    }
`