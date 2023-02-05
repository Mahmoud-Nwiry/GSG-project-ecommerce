import styled from "styled-components";

export const PhoneStyled = styled.div`
    ${props => `
        display: grid;
        grid-template-columns: 120px 1fr;
        border-radius: 6px;
        border: 1px solid ${props.theme.palette.gray300};
        overflow: hidden;

        
        & input, & select {
            padding : 10px;
            border: none;
            color : ${props.theme.palette.contentColor};
            background-color : ${props.theme.palette.background};
            opacity: 0.8;
            font-weight: 400;
            font-size: 16px;
            outline: none;
        }
        
        & select {
            border-right: 1px solid ${props.theme.palette.gray300};
        }

        & input::placeholder {
            color: ${props.theme.palette.gray400};
        }
    `}
`