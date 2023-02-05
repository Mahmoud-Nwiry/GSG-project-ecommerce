import styled from "styled-components";

export const MainBoxStyled = styled.section`
    padding : 20px;
    margin: 20px 0;
    border-radius: 6px;
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
    `}
    display : grid;
    grid-template-columns: calc(23% - 20px) 55% calc(22% - 20px);
    gap : 10px 20px;
`

export const CategoryListStyled = styled.ul`
    list-style: none;

    & li{
        border-radius: 6px;
        padding : 10px;
        background-color : transparent;
        color : ${props => props.theme.palette.gray600};
        font-size : 16px;
        font-weight: 400;
        cursor : pointer;
    }

    & li.active{
        ${props => `
            background-color: ${props.theme.palette.primaryLight};
            color : ${props.theme.theme === 'light' ? props.theme.palette.contentColor : props.theme.palette.background};
            font-weight: 500;
        `}
    }
`

export const ImageSectionStyled = styled.div`

    overflow : hidden;
    height : 100%;
    padding : 50px 44px;
    background-image : url(${props => props.image});


    & .text p{
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        color: ${props => props.theme.palette.contentColor};
    }
    & .text h2{
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: ${props => props.theme.palette.contentColor};
    }
    & button{
        background: ${props => props.theme.palette.background};
        border-radius: 6px;
        border : 0;
        margin-top: 20px;
        padding : 10px 12px;
        font-weight: 500;
        font-size: 16px;
        color: ${props => props.theme.palette.contentColor};
    }

` 


export const AuthCardStyled = styled.div`
    padding : 14px 10px 12px;
    background: #E3F0FF;
    border-radius: 6px;

    & .info {
        display : flex;
        align-items : center;
        gap : 10px;
        margin-bottom : 15px;
    }

    & .info .image{
        width : 44px;
        height : 44px;
        overflow: hidden;
        border-radius: 50%;
    }

    & .info .image img{
        max-width : 100%
    }

    & .info p {
        line-height : 19px
    }

    & button {
        padding : 7px;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #FFFFFF;
    }

    & button.white {
        background-color: #FFFFFF;
        color: ${props => props.theme.palette.primary};
        border: 1px solid ${props => props.theme.palette.gray300};
        margin-top : 5px;
    }
`

export const CardStyled = styled.div`
    padding : 16px 90px 16px 16px;
    border-radius: 6px;
    color : #ffffff;
    margin-top: 10px;
    background-color : ${props => props.background || '#ccc'};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`
