import styled from "styled-components";

export const H1Styled = styled.h1`
    font-weight: 600;
    font-size: 72px;
    letter-spacing: -1.6px;
    color: ${props => props.theme.palette.contentColor};
`
export const H2Styled = styled.h2`
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -1px;
    color: ${props => props.theme.palette.contentColor};
`
export const H3Styled = styled.h3`
    font-weight: 600;
    font-size: 32px;
    letter-spacing: -0.2px;
    color: ${props => props.theme.palette.contentColor};
`
export const H4Styled = styled.h4`
    font-weight: 600;
    font-size: 24px;
    letter-spacing: -0.2px;
    color: ${props => props.theme.palette.contentColor};
`
export const H5Styled = styled.h5`
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.2px;
    color: ${props => props.theme.palette.contentColor};
`
export const H6Styled = styled.h6`
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.1px;
    color: ${props => props.theme.palette.contentColor};
`
export const Body1Styled = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.muted ? props.theme.palette.gray500 : props.theme.palette.gray600};
`
export const Body2Styled = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${props => props.muted ? props.theme.palette.gray500 : props.theme.palette.gray600};
`

export const LabelStyled = styled.label`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.2px;
    color: ${props => props.theme.palette.contentColor};
`

