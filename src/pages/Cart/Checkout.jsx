import React from 'react'
import Button from '../../components/Buttons/Button'
import { CheckoutStyled } from './style'

import Pay1 from '../../assets/images/payment/pay1.png';
import Pay2 from '../../assets/images/payment/pay2.png';
import Pay3 from '../../assets/images/payment/pay3.png';
import Pay4 from '../../assets/images/payment/pay4.png';
import Pay5 from '../../assets/images/payment/pay5.png';

const Checkout = ({subtotal, tax, discount}) => {
  return (
    <CheckoutStyled>
        <ul className="details">
            <li>
                <span>Subtotal:</span>
                <span>${subtotal}</span>
            </li>
            <li>
                <span>Discount:</span>
                <span style={{color : '#FA3434'}}>- ${discount}</span>
            </li>
            <li>
                <span>Tax:</span>
                <span style={{color : '#00B517'}}>+ ${tax}</span>
            </li>
        </ul>

        <div className="total">
            <p className='text'>Total:</p>
            <p className='price'>${+subtotal - +discount + +tax}</p>
        </div>

        <Button>Checkout</Button>
        
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
            <div className="image">
                <img src={Pay5} alt="payment icon" />
            </div>
        </div>
    </CheckoutStyled>
  )
}

export default Checkout