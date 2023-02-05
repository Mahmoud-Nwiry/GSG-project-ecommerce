import React from 'react'

import {MdClose} from 'react-icons/md'
import { BadgetStyled } from './style'

const Badget = ({value, deleteFunc}) => {
  return (
    <BadgetStyled>
        {value} <MdClose onClick={deleteFunc} />
    </BadgetStyled>
  )
}

export default Badget