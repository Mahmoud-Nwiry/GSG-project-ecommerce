import React from 'react'
import Countainer from '../Container'
import { CopyrightStyled } from './style'

const Copyright = () => {
  return (
    <CopyrightStyled>
        <Countainer>
            <div className="content-copyright">
                <p>© 2023 Ecommerce.</p>
                <p>English</p>
            </div>
        </Countainer>
    </CopyrightStyled>
  )
}

export default Copyright