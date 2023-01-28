import styled from "styled-components";

export const BreadcrumbStyled = styled.div`
    padding : 20px 0;
    display : flex;
    align-items: center;
    gap : 10px;
    color: ${props => props.theme.palette.gray500};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;

    & a {
        color: inherit;
        text-decoration: none;
    }
`