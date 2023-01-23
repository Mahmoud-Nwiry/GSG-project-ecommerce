import React from 'react'
import { Label } from '../Typography'
import { CheckboxStyled, LabelCheckboxStyled } from './style'


const Checkbox = ({value, onClick, label, style}) => {
  return (
    <LabelCheckboxStyled {...style ? style={style} : ''}>
        <CheckboxStyled type="checkbox" checked={value} onClick={onClick} />
        <Label>{label}</Label>
    </LabelCheckboxStyled>
  )
}

export default Checkbox