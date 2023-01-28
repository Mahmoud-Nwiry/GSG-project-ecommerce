import React from 'react'
import { ProductStyled } from './style'

const Product = ({image, price, name}) => {
  return (
    <ProductStyled>
        <div className="image">
            <img src={image} alt="product" />
        </div>
        <div className="text">
            <p className='price'>${price}</p>
            <p className='name'>{name}</p>
        </div>
    </ProductStyled>
  )
}

export default Product