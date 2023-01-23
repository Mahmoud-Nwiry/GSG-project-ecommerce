import React from 'react'
import { ButtonIconStyled } from './style'

const ButtonWithIcon = ({icon, children, ...other}) => {
  return (
    <ButtonIconStyled {...(other)}>
        <img src={icon} alt="icon" className='icon' />
        {children}
    </ButtonIconStyled>
  )
}

export default ButtonWithIcon