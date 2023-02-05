import React from 'react'
import Countainer from '../Container'
import { CopyrightStyled } from './style'

import { MdExpandLess } from 'react-icons/md'
import USAFlag from '../../assets/images/flags/US@2x.png'

const Copyright = () => {
  return (
    <CopyrightStyled>
        <Countainer>
            <div className="content-copyright">
                <p>© 2023 Ecommerce.</p>
                <p><img src={USAFlag} alt="flag" /> English <MdExpandLess fontSize={20} /></p>
            </div>
        </Countainer>
    </CopyrightStyled>
  )
}

export default Copyright