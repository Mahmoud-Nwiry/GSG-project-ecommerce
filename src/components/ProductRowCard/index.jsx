import React from "react";
import { ProductRowCardStyled } from "./style";

import Rating from '../../assets/images/rating.png'

import { RxDotFilled, RxHeart, RxHeartFilled } from 'react-icons/rx'
import { Link } from "react-router-dom";

const ProductRowCard = ({
  image,
  name,
  price,
  rating,
  offer,
  orders,
  shipping,
  description,
}) => {
  return (
    <ProductRowCardStyled>

      <div className="image">
        <img src={image} alt="product" />
      </div>

      <div className="details">

        <h3>{name}</h3>
        
        <div className="price">
          <p className="main">${price}</p>
          {offer ? <p className="offer">${parseFloat(offer).toFixed(2)}</p> : ""}
        </div>

        <div className="storage">

          <div className="rating">
            <img src={Rating} alt="rating" />
            <p>{rating}</p>
          </div>
          <RxDotFilled />
          <p className="orders">{orders} orders</p>
          <RxDotFilled />
          <p className="shipping">
            {
              shipping !== null ? shipping : 'Free shipping'
            }
          </p>

        </div>

        <p className="description">{description}</p>
        <Link className="view" to='#'>View details</Link>
      </div>

      <div className="fav">
            <RxHeart />
      </div>
    </ProductRowCardStyled>
  );
};

export default ProductRowCard;
