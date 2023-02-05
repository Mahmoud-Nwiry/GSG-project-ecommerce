import styled from "styled-components";

export const BadgetStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding : 6px 10px;
    border-radius: 5px;
    ${props => `
        color : ${props.theme.palette.contentColor};
        border: 1px solid ${props.theme.palette.primary};
        background-color : ${props.theme.palette.background};
    `}
`