import styled from 'styled-components'

export const SuperDiscountStyled = styled.section`
    ${props => `
        background-color: #005ADE;
        border-radius: 8px;
        position: relative;
        padding: 30px;
        overflow: hidden;

        & .background {
            width : 745px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color : #237CFF;
            z-index: 1;
            clip-path: polygon(0 0, 93% 0, 99% 100%, 0 100%);
        }

        & .content {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        & .content .text h4 {
            color : #fff;
            margin-bottom: 3px;
        }

        & .content .text p {
            letter-spacing: 0.2px;
            color : #fff;
            opacity: 0.7;
        }

        & .content button {
            width : fit-content;
            background-color: ${props.theme.palette.orange};
        }
    `}
`