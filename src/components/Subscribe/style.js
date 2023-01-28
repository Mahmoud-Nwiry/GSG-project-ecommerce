import styled from "styled-components";

export const SubscribeBoxStyled = styled.section`
    background-color: ${props => props.theme.palette.gray200};
    padding: 38px 0;
    text-align: center;

    & h4 {
        font-size : 20px;
    }
    & p {
        color: ${props => props.theme.palette.gray800};
    }

    & .inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        gap : 10px;
        margin-top: 20px;
    }
`