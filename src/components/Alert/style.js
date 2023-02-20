import styled from "styled-components";

export const AlertStyled = styled.div`
    ${props => `
        background-color: ${props.background};
        color : ${props.color};
        border: 1px solid ${props.color};
        padding : 10px;
        border-radius : 5px;
        position : absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: ${props.isOpen ? "block" : "none"};
        z-index: 99999;
    `}
`;