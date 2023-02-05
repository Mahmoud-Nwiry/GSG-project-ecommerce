import React from 'react'
import { Body1, H6 } from '../Typography'
import { ProductCardStyled } from './styled'

const ProductCard = ({image, name, price, id}) => {
  return (
    <ProductCardStyled>
        <div className="image">
            <img src={image} alt={name} />
        </div>
        <H6>{name}</H6>
        <Body1 muted={true}>{price}</Body1>
    </ProductCardStyled>
  )
}

export default ProductCard