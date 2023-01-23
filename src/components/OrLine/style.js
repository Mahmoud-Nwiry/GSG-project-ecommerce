import styled from "styled-components";

export const OrBoxStyled = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 25px;
` 
export const OrLineStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.palette.gray200};
    z-index: 1;
` 
export const OrTextStyled = styled.p`
    margin: 0 auto;
    width: 36px;
    background-color: ${props => props.theme.palette.background};
    color: #BABABA;
    font-size: 13px;
    position: relative;
    z-index: 2;
    text-align: center;
    letter-spacing: -0.2px;
` 