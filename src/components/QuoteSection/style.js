import styled from "styled-components";

import background from '../../assets/images/qouteBg.png'

export const QuoteSectionStyled = styled.section`
    padding : 30px 30px 30px 40px;
    background-image: linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%)
                      ,url(${background});
    border: 1px solid ${props => props.theme.palette.gray200};
    border-radius: 6px;
    display : flex;
    justify-content: space-between;
    
    & .text {
        width : 390px;
    }

    & .text  h3 {
        color : #fff;
        margin-bottom : 13px;
    }

    & .text  p {
        color: #FFFFFF;
    }


    & form h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
        color : ${props => props.theme.palette.contentColor};
        margin-bottom: 18px;
    }

    & form .quantity select{
        width: 110px;
        background: ${props => props.theme.palette.background};
        border: 1px solid ${props => props.theme.palette.gray300};
        border-radius: 6px;
        padding: 10px;
        font-weight: 400;
        font-size: 16px;
        color: ${props => props.theme.palette.contentColor};
        margin-left: 10px;

    }
`