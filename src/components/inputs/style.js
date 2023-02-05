import styled from "styled-components";
import { LabelStyled } from "../Typography/style";

import checkedIcon from '../../assets/images/checked.svg'

export const InputStyled = styled.input`
    ${props => `
        background-color : ${props.theme.palette.background};
        border : 1px solid ${props.theme.palette.gray300};
        width : ${props.width || '100%'};
        color : ${props.theme.palette.contentColor};
    `}
    border-radius: 6px;
    padding : 10px;
    outline : none;
    font-size : 16px;
    position : relative;

    &::placeholder {
        color: ${props => props.theme.palette.gray500};
    }

    &:focus {
        border : 1px solid ${props => props.theme.palette.primary};
    }
`

export const LabelCheckboxStyled = styled(LabelStyled)`
    display : flex;
    width : 100%;
    align-items : center;
    gap : 10px;
`

export const CheckboxStyled = styled.input`
    &[type="checkbox"]{
        appearance: none;
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #D3D3D3;
        border-radius: 5px;
        background-color : transparent;
        cursor: pointer;
        position: relative;
        background-color : ${props => props.theme.palette.background};
    }

    &[type="checkbox"]:checked {
        border: 2px solid ${props => props.theme.palette.primary};
        background-color : ${props => props.theme.palette.primary};
        text-align: center;
        line-height: 20px;
    }

    &[type="checkbox"]:checked:after {
        content: url(${checkedIcon});
    }
`

export const TextareaStyled = styled.textarea`
    ${props => `
        background-color : ${props.theme.palette.background};
        border : 1px solid ${props.theme.palette.gray300};
        width : ${props.width || '100%'};
        color : ${props.theme.palette.contentColor};
    `}
    border-radius: 6px;
    padding : 10px;
    outline : none;
    font-size : 16px;
    position : relative;

    &::placeholder {
        color: ${props => props.theme.palette.gray400};
        opacity: 0.8;
    }

    &:focus {
        border : 1px solid ${props => props.theme.palette.primary};
    }
`

export const RadioStyled = styled.input`
    &[type="radio"]{
        appearance: none;
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #D3D3D3;
        border-radius: 50%;
        background-color : transparent;
        cursor: pointer;
        position: relative;
        background-color : ${props => props.theme.palette.background};
    }

    &[type="radio"]:checked {
        border: 3px solid ${props => props.theme.palette.primary};
        text-align: center;
        line-height: 20px;
    }

    &[type="radio"]:checked:after {
        content: '';
        width : 10px;
        height: 10px;
        background-color : ${props => props.theme.palette.primary};
        border-radius : 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`