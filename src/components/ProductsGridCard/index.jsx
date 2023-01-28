import React from "react";
import { ProductGridCardStyled } from "./style";


import Rating from '../../assets/images/rating.png'

import { RxDotFilled, RxHeart, RxHeartFilled } from 'react-icons/rx'


const ProductGridCard = ({ image, name, rating, price, offer }) => {
  return <ProductGridCardStyled>
    <div className="image">
        <div className="image-container">
            <img src={image} alt={name} />
        </div>
    </div>
    <div className="info">

        <div className="price">
          <p className="main">${price}</p>
          {offer ? <p className="offer">${parseFloat(offer).toFixed(2)}</p> : ""}
        </div>

        <div className="rating">
            <img src={Rating} alt="rating" />
            <p>{rating}</p>
        </div>

        <h3>{name}</h3>

        <div className="fav">
            <RxHeart />
      </div>
      
    </div>
  </ProductGridCardStyled>;
};

export default ProductGridCard;
