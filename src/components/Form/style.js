import styled from "styled-components";

export const FormStyled = styled.form`
    background-color: ${props => props.theme.palette.background};
    width : ${props => props.width || '400px'}};
    padding : 30px;
    box-shadow: 0px 3px 10px 0px #2020201A;
    border-radius : 6px;
`