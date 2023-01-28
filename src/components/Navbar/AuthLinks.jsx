import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLinksStyled } from './style'

import {FaUserAlt, FaHeart, FaShoppingCart} from 'react-icons/fa'
import {MdMessage} from 'react-icons/md'


const AuthLinks = () => {
  return (
    <AuthLinksStyled>
        <li>
            <Link to='/'><FaUserAlt /><p>Profile</p></Link>
        </li>
        <li>
            <Link to='/'><MdMessage /><p>Message</p></Link>
        </li>
        <li>
            <Link to='/'><FaHeart /><p>Orders</p></Link>
        </li>
        <li>
            <Link to='/'><FaShoppingCart /><p>My cart</p></Link>
        </li>
    </AuthLinksStyled>
  )
}

export default AuthLinks