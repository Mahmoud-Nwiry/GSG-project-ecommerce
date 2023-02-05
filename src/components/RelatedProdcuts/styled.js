import styled from "styled-components";

export const RelatedProductStyled = styled.section`
    ${props => `
        background-color: ${props.theme.palette.background};
        border: 1px solid ${props.theme.palette.gray300};
        border-radius: 6px;
        padding : 20px 20px 30px;
        margin-bottom: 20px;

        & .products {
            display: grid;
            grid-template-columns: repeat(6, 172px);
            gap: 20px;
            margin-top: 15px;
        }
    `}
`

export const ProductCardStyled = styled.div`
        ${props =>  `
        
            & .image {
                background: #EEEEEE;
                border-radius: 6px;
                width: 172px;
                height: 172px;
                padding : 20px;
                display: flex;
                align-items : center;
                justify-content : center;
            }

            & .image img {
                max-width : 100%
            }

            & h6 {
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: ${props.theme.palette.gray600};
                margin: 15px 0 10px;
                padding-right: 10px;
            }

            & p {
                letter-spacing: .2px;
            }

        `}
`