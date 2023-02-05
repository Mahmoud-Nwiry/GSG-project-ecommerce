import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import AuthLinks from '../../components/Navbar/AuthLinks'

import MainLogo from '../../assets/images/logo.png'
import { HomeStyled } from '../Home/style'
import Footer from '../../components/Footer'
import SuperDiscount from '../../components/SuperDiscount'
import Countainer from '../../components/Container'
import { Body1, H4 } from '../../components/Typography'
import { CartGridStyled } from './style'
import data from '../../mock/cart'
import ProductCart from './ProductCart'
import { Link } from 'react-router-dom'

import { MdArrowBack } from 'react-icons/md'
import Checkout from './Checkout'
import Services from './Services'
import Saved from './Saved'

const Cart = () => {
  return (
    <HomeStyled>
        <Header>
            <Navbar>
                <img src={MainLogo} alt="logo" />
                <AuthLinks />
            </Navbar>
        </Header>

        <Countainer>

            <H4 style={{margin : '25px 0'}}>My cart (3)</H4>

            <CartGridStyled>
                <div className="card">
                    {
                        data.map(item => <ProductCart key={item.id} data={item} />)
                    }
                    <div className="main-buttons">
                        <Link to="/"><MdArrowBack fontSize={20} /> Back to home</Link>
                        <button>Remove all</button>
                    </div>
                </div>
                <div className="right-side">
                    <div className="coupon">
                        <Body1>Have a coupon?</Body1>
                        <div className="inputs">
                            <input type="text" placeholder='Add coupon' />
                            <button>Apply</button>
                        </div>
                    </div>
                    <Checkout subtotal='1403.97' discount="60.00" tax="14.00" />
                </div>
            </CartGridStyled>

            <Services />
            <Saved />

            <SuperDiscount style={{marginBottom : 44}} />
        </Countainer>
        
        <Footer />
    </HomeStyled>
  )
}

export default Cart