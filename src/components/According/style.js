import styled from "styled-components";

export const AccordingStyled = styled.div`
    border-top: 1px solid ${props => props.theme.palette.gray300};
    padding-top: 14px;

    & .title {
        display : flex;
        align-items : center;
        justify-content : space-between;
        color: ${props => props.theme.palette.contentColor};
        padding: 0 5px;
        padding-bottom: 20px;
    }

    & .title h5 {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }

    & .title svg {
        ${props => `
            color: ${props.theme.palette.gray500};
            rotate : ${props.active ? '-180deg' : '0deg'};
            transition: rotate 0.1s;
            cursor: pointer;
        `}
    }

    & .content {
        ${props => `
            max-height : ${props.active ? '250px' : '0px'};
            padding-bottom: ${props.active ? '20px' : '0px'};
            overflow: hidden;
            transition: max-height 0.3s, padding-bottom 0.3s;
        `}
    }

    & .content ul li {
        font-weight: 400;
        font-size: 16px;
        color: ${props => props.theme.palette.contentColor};
        margin-bottom: 18px;
    }

    & .content ul li.see-all {
        color: ${props => props.theme.palette.primary};
    }
`