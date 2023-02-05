import React from 'react'

import Button from '../Buttons/Button'
import { Body1, H4 } from '../Typography'
import { SuperDiscountStyled } from './style'

const SuperDiscount = ({...other}) => {
  return (
    <SuperDiscountStyled {...(other)}>
        <div className="background"></div>
        <div className="content">
            <div className="text">
              <H4>Super discount on more than 100 USD</H4>
              <Body1>Have you ever finally just write dummy info</Body1>
            </div>
            <Button>Shop now</Button>
        </div>
    </SuperDiscountStyled>
  )
}

export default SuperDiscount