import styled from "styled-components";

const AuthFooterStyled = styled.footer`
    background-color : ${props => props.theme.palette.background};
    padding : 26px 120px;
    position : absolute;
    bottom : 0;
    left : 0;
    width : 100%
`

export default  AuthFooterStyled