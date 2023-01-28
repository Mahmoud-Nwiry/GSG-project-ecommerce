import styled from "styled-components";

export const MainBox = styled.section`
    margin : 35px 0 40px;
`

export const RegionsContainerStyled = styled.div`
    margin-top : 20px;
    display : grid;
    grid-template-columns : repeat(5, 221px);
    gap : 10px 18px;
`

export const RegionStyled = styled.div`
    display: flex;
    align-items : center;
    gap : 10px;

    & .image {
        width : 28px;
        height : 20px;
    }
    & .image img {
        max-width : 100%;
    }

    & .text h6 {
        font-weight: 400;
    }

    & .text p {
        color: ${props => props.theme.palette.gray500};
    }
`