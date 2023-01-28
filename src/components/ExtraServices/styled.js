import styled from "styled-components";

export const MainBox = styled.section`
    margin-top : 35px;
`

export const ServicesContainerStyled = styled.div`
    margin-top : 25px;
    display : grid;
    grid-template-columns : repeat(4, 280px);
    gap : 20px;
`

export const ServiceBoxStyled = styled.div`
    ${props => `
        background-color : ${props.theme.palette.background};
        border : 1px solid ${props.theme.palette.gray200};
        border-radius: 6px;
        position : relative;
    `}

    & .image {
        height : 120px;
        background-image: url(${props => props.background});
    }

    & .text {
        margin : 16px 45px 20px 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: ${props => props.theme.palette.contentColor};
    }
    & .text p {
        width : 145px;
    }

    .icon {
        position : absolute;
        top : 92px;
        right : 20px;
        width : 55px;
        height : 55px;
        border : 2px solid #fff;
        background: #D1E7FF;
        border-radius : 50%;
        display: flex;
        align-items : center;
        justify-content : center;
    }
`