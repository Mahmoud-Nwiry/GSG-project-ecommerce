import React from "react";
import {
  Body1Styled,
  Body2Styled,
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  H6Styled,
  LabelStyled,
} from "./style";

export const H1 = ({ children, style }) => {
  return (
    <H1Styled {...(style ? (style = { style }) : "")}>{children}</H1Styled>
  );
};
export const H2 = ({ children, style }) => {
  return (
    <H2Styled {...(style ? (style = { style }) : "")}>{children}</H2Styled>
  );
};
export const H3 = ({ children }) => {
  return <H3Styled>{children}</H3Styled>;
};
export const H4 = ({ children, style }) => {
  return (
    <H4Styled {...(style ? (style = { style }) : "")}>{children}</H4Styled>
  );
};
export const H5 = ({ children, style }) => {
  return (
    <H5Styled {...(style ? (style = { style }) : "")}>{children}</H5Styled>
  );
};
export const H6 = ({ children, style }) => {
  return (
    <H6Styled {...(style ? (style = { style }) : "")}>{children}</H6Styled>
  );
};
export const Body1 = ({ children, ...other }) => {
  return (
    <Body1Styled {...(other)}>
      {children}
    </Body1Styled>
  );
};
export const Body2 = ({ children, style }) => {
  return (
    <Body2Styled {...(style ? (style = { style }) : "")}>
      {children}
    </Body2Styled>
  );
};

export const Label = ({ children, style }) => {
  return (
    <LabelStyled {...(style ? (style = { style }) : "")}>
      {children}
    </LabelStyled>
  );
};

