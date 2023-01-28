import React from 'react'
import { FormStyled } from './style'

export const Form = ({children, ...other}) => {
  return (
    <FormStyled {...(other)}>
        {children}
    </FormStyled>
  )
}
