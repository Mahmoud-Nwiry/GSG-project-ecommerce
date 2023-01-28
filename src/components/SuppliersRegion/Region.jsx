import React from 'react'

import { H6, Body2 } from '../Typography'
import { RegionStyled } from './style'

const Region = ({region, flag, domain}) => {
  return (
    <RegionStyled>
        <div className="flag">
            <img src={flag} alt={region} />
        </div>
        <div className="text">
            <H6>{region}</H6>
            <Body2>{domain}</Body2>
        </div>
    </RegionStyled>
  )
}

export default Region