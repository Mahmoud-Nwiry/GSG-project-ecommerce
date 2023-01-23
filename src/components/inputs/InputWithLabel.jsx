import React from 'react'
import { LabelStyled } from '../Typography/style'
import Input from './Input'

const InputWithLabel = ({label,style,...other}) => {
  return (
    <div {...(style) ? style={style} : ''}>
      <LabelStyled style={{marginButtom : 3}}>{label}</LabelStyled>
      <Input 
        {...(other)}
      />
    </div>
  )
}

export default InputWithLabel
