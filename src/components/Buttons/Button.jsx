import React from 'react'
import { ButtonStyled } from './style'

const Button = ({onClick, children, ...other}) => {
  return (
    <ButtonStyled onClick={onClick} {...(other)}>{children}</ButtonStyled>
  )
}

export default Button
