import React from 'react'
import { Link } from 'react-router-dom'
import { LinksListStyled } from './style'

import { HiMenu } from 'react-icons/hi'
import { MdExpandMore } from 'react-icons/md'

const Links = () => {
  return (
    <LinksListStyled>
        <li><Link to="#" className='category'><HiMenu fontSize={20} /> All category</Link></li>
        <li><Link to="#">Hot offers</Link></li>
        <li><Link to="#">Gift boxes</Link></li>
        <li><Link to="#">Projects</Link></li>
        <li><Link to="#">Menu item</Link></li>
        <li><Link to="#" className='select'>Help <MdExpandMore /></Link></li>
    </LinksListStyled>
  )
}

export default Links