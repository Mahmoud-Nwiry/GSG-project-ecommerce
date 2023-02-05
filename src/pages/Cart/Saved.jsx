import React from 'react'
import Button from '../../components/Buttons/Button'
import { Body1, H5 } from '../../components/Typography'
import { SavedStyled } from './style'

import { MdOutlineShoppingCart } from 'react-icons/md'
import data from '../../mock/saved'

const Saved = () => {
  return (
    <SavedStyled>
        <H5>Saved for later</H5>
        <div className="products">
            {
                data.map(item => <ProductCart key={item.id} image={item.image} price={item.price} name={item.name} />)
            }
        </div>
    </SavedStyled>
  )
}


const ProductCart = ({image, price, name}) => {

    return (
        <div className='product'>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <p className="price">${price}</p>
            <Body1 className="name">{name}</Body1>
            <Button><MdOutlineShoppingCart /> Move to cart</Button>
        </div>
    )
}

export default Saved