import styled from 'styled-components'

export const PaginationBoxStyled = styled.div`
    ${props => `
        display: flex;
        border-radius: 6px;
        border: 1px solid ${props.theme.palette.gray300};
        overflow: hidden;

        & button {
            width : 44px;
            height: 40px;
            border: none;
            border-left: 1px solid ${props.theme.palette.gray300};
            background-color: ${props.theme.palette.background};
            font-weight: 500;
            font-size: 16px;
            color : ${props.theme.palette.contentColor};
            cursor: pointer;
        }
        & button.active {
            background-color: ${props.theme.palette.gray200};
            color: ${props.theme.palette.gray500};
        }

        & button.disable {
            color: ${props.theme.palette.gray500};
        }
    `}
`