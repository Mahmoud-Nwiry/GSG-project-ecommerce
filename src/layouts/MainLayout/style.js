import styled from "styled-components";

export const LinksListStyled = styled.ul`
    list-style : none;
    display: flex;
    align-items : center;
    gap: 28px;
    
    & li a {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: ${props => props.theme.palette.contentColor};
        text-decoration: none;
    }
    & li a.category {
        display: flex;
        align-items : center;
        gap : 10px;
    }
    & li a.select {
        display: flex;
        align-items : center;
        gap : 7px;
    }
    & li a.select svg {
        display: flex;
        align-items : center;
        gap : 7px;
        color : ${props => props.theme.palette.gray500}
    }
`;


export const SearchBoxStyled = styled.div`
    ${props => `
        width : 600px;
        background : red;
        display: grid;
        grid-template-columns: 1fr 150px 100px;
        border-radius : 6px;
        overflow: hidden;
        border: 2px solid ${props.theme.theme === 'light' ? props.theme.palette.primary : props.theme.palette.gray300};
        
        
        & input, & select {
            border : none;
            padding : 10px;
            font-weight: 400;
            font-size: 16px;
            color : ${props.theme.palette.contentColor};
            background-color : ${props.theme.palette.background};
        }

        & input::placeholder {
            color : ${props.theme.palette.gray500};
        }

        & select {
            border-left : 1px solid ${props.theme.theme === 'light' ? props.theme.palette.primary : props.theme.palette.gray300};
        }
        
        & button{
            border: none;
            background-color : ${props.theme.theme === 'light' ? props.theme.palette.primary : props.theme.palette.gray300};
            color : #fff;
            font-weight: 500;
            font-size: 16px;
        }
    `}
`