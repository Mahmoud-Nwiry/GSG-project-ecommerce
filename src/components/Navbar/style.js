import styled from "styled-components";

export const NavStyled = styled.nav`
    display : flex;
    align-items : center;
    justify-content : space-between;
`

export const AuthLinksStyled = styled.ul`
    list-style: none;
    display : flex;
    align-items : center;
    gap : 20px;
    
    & li {
        text-align: center;
    }

    & li a,
    & li span {
        color : ${props => props.theme.palette.gray500};
        text-decoration : none;
        cursor: pointer;
    }

    & li a svg,
    & li span svg {
        font-size : 20px;
    }

    & li a p,
    & li span p {
        font-weight: 400;
        font-size: 13px;
        padding-top: 5px;
        letter-spacing: .5px;
    }
`