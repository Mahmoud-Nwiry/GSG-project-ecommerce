import React from 'react'

import { Link, Outlet } from 'react-router-dom' 

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

import MainLogo from '../../assets/images/logo.png'
import AuthLinks from '../../components/Navbar/AuthLinks'
import Links from './Links'
import { MdExpandMore } from 'react-icons/md'
import { LinksListStyled } from './style'

import DeFlag from '../../assets/images/flags/DE@2x.png'
import Search from './Search'

const index = ({children}) => {
  return (
    <div>
        <Header>
            <Navbar>
                <img src={MainLogo} alt="logo" />
                <Search />
                <AuthLinks />
            </Navbar>
        </Header>
        <Header style={{padding: '17px 0'}}>
            <Navbar>
                <Links />
                <LinksListStyled>
                  <li><Link to="#" className='select'>English, USD <MdExpandMore /></Link></li>
                  <li><Link to="#" className='select'>Ship to <img src={DeFlag} alt="flag" /> <MdExpandMore /></Link></li>
                </LinksListStyled>
            </Navbar>
        </Header>

        <Outlet />
        {children}
        <Footer />
    </div>
  )
}

export default index