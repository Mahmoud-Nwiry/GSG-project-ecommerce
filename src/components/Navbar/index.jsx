import React from 'react'
import { NavStyled } from './style'

const Navbar = ({children, ...other}) => {
  return (
    <NavStyled {...(other)}>{children}</NavStyled>
  )
}

export default Navbar