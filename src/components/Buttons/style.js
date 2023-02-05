import styled from "styled-components";

export const ButtonStyled = styled.button`
    ${props => `
        width : ${props.width || '100%'};
        background-color : ${props.theme.palette.primary};
        padding : ${props.padding || '10px 20px'};
        color : ${props.color || '#ffffff'};
        font-weight: ${props.fontWight || '500'};
        font-size: ${props.fontSize || '16px'};
        border : 1px solid ${props.border || props.theme.palette.primary};
        border-radius: 6px;
        cursor: pointer;
    `}
`

export const ButtonIconStyled = styled(ButtonStyled)`
    position : relative;
    box-shadow: 0px 1px 3px 0px #3838381A;

    & .icon {
        width : 22px;
        height : 22px;
        position absolute;
        top : 50%;
        left : 10px;
        transform : translateY(-50%);
    }
`