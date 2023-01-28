import React from 'react'
import AuthFooter from '../../components/AuthFooter'
import { Form } from '../../components/Form'
import { FormLayoutStyled } from './style'

const AuthLayout = ({children}) => {
  return (
    <FormLayoutStyled>
          <Form>{children}</Form>
        <AuthFooter />
    </FormLayoutStyled>
  )
}

export default AuthLayout
