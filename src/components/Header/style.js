import styled from "styled-components";

export const HeaderStyled = styled.header`
    padding : 20px;
    background-color : ${props => props.theme.palette.background};
    border: 1px solid ${props => props.theme.palette.gray200};
`