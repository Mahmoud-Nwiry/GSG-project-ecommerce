import React from 'react'
import { CardStyled } from './style'

const Card = ({children, background}) => {
  return (
    <CardStyled background={background}>{children}</CardStyled>
  )
}

export default Card