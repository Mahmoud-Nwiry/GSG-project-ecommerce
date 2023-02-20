import React from 'react'
import { FormStyled } from './style'

export const Form = ({onSubmit, children, ...other}) => {
  return (
    <FormStyled onSubmit={onSubmit} {...(other)}>
        {children}
    </FormStyled>
  )
}
