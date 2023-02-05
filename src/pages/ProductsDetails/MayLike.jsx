import React from "react";
import { H6 } from "../../components/Typography";
import { MayLikeStyled } from "./style";

import data from "../../mock/mayLike";

const MayLike = () => {
  return (
    <MayLikeStyled>
      <H6>You may like</H6>
      <div className="products">
        {
            data.map((product) => (
            <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
            />
            ))
        }
      </div>
    </MayLikeStyled>
  );
};

const ProductCard = ({ image, name, price, id }) => (
  <div className="product-box">
    <div className="image">
      <img src={image} alt="product" />
    </div>
    <div className="text">
      <p className="name">{name}</p>
      <p className="price">{price}</p>
    </div>
  </div>
);

export default MayLike;
