import React from 'react'
import { TextareaStyled } from './style'

const Textarea = ({value, placeholder, onChange, ...other}) => {
  return (
    <TextareaStyled
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...(other)}
    ></TextareaStyled>
  )
}

export default Textarea