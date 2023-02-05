import styled from "styled-components"

export const OfferSectionStyled = styled.section`
    margin: 30px 0 20px;
    border-radius: 6px;
    padding : 3px;
    ${props => `
        background: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
    `}
    display : grid;
    grid-template-columns: 282px repeat(5, 178px);
`

export const TimerStyled = styled.div`
    padding : 20px;

    & .text h4 {
        font-size: 20px;
        letter-spacing: -0.2px;
    }
    & .text p {
        font-weight: 400;
        font-size: 17px;
        color: ${props => props.theme.palette.gray500};
        letter-spacing: 0;
    }
`

export const CountdownStyled = styled.div`
    display : flex;
    align-items : center;
    gap : 6px;
    margin-top : 20px;
`

export const TimePartStyled = styled.div`
    width : 45px;
    height : 50px;
    background-color: ${props => props.theme.palette.gray800};
    border-radius: 4px;
    color : ${props => props.theme.palette.background};
    text-align : center;
    padding-top: 8px;

    & .num {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.2px;
    }

    & .text {
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
    }
`

export const ProductStyled = styled.div`
    border-left: 1px solid ${props => props.theme.palette.gray300};
    text-align: center;
    padding : 8px 19px 17px;

    & .image {
        width: 140px;
        height: 140px;
        margin : 0 auto;
        text-align:center;
        line-height : 140px;
    }

    & .image img {
        max-width : 100%;
    }

    & p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: ${props => props.theme.palette.contentColor};
        margin-top: 10px;
    }

    & .discount {
        padding: 3px 13px 4px;
        background: #FFE3E3;
        border-radius: 29px;
        width: fit-content;
        margin : 7px auto;
        letter-spacing: -0.2px;
        color: #EB001B;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1px;
    }

`