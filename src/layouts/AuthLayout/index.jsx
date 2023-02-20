import React from 'react'
import AuthFooter from '../../components/AuthFooter'
import { FormLayoutStyled } from './style'

const AuthLayout = ({children}) => {
  return (
    <FormLayoutStyled>
          {children}
        <AuthFooter />
    </FormLayoutStyled>
  )
}

export default AuthLayout
