import React from 'react'
import { ButtonStyled } from './style'

const Button = ({onClick, children, type = "button", ...other}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} {...(other)}>{children}</ButtonStyled>
  )
}

export default Button
