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
`