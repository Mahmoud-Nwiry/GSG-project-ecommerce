import styled from "styled-components";

export const FormLayoutStyled = styled.section`
    min-height : 100vh;
    background-color : ${props => props.theme.palette.gray300};
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    position : relative;
`