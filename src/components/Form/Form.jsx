import React from 'react'
import { FormStyled } from './style'

export const Form = ({children}) => {
  return (
    <FormStyled>
        {children}
    </FormStyled>
  )
}
