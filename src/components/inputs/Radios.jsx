import React from 'react'
import { Label } from '../Typography'
import { LabelCheckboxStyled, RadioStyled } from './style'


const Radios = ({value, onClick, label, style, name}) => {
  return (
    <LabelCheckboxStyled {...style ? style={style} : ''}>
        <RadioStyled type="radio" checked={value} onClick={onClick} name={name} />
        <Label>{label}</Label>
    </LabelCheckboxStyled>
  )
}

export default Radios