import React from 'react'
import AuthFooterStyled from './style'

import Pay1 from '../../assets/images/payment/pay1.png';
import Pay2 from '../../assets/images/payment/pay2.png';
import Pay3 from '../../assets/images/payment/pay3.png';
import Pay4 from '../../assets/images/payment/pay4.png';
import { Link } from 'react-router-dom';

const AuthFooter = () => {
  return (
    <AuthFooterStyled>
      <div className="payment">
            <div className="image">
                <img src={Pay1} alt="payment icon" />
            </div>
            <div className="image">
                <img src={Pay2} alt="payment icon" />
            </div>
            <div className="image">
                <img src={Pay3} alt="payment icon" />
            </div>
            <div className="image">
                <img src={Pay4} alt="payment icon" />
            </div>
        </div>

        <ul className="links">
          <li><Link to='/'>Support</Link></li>
          <li><Link to='/'>Privacy & Cookies</Link></li>
          <li><Link to='/'>Accessibility</Link></li>
        </ul>
    </AuthFooterStyled>      
  )
}


export default AuthFooter