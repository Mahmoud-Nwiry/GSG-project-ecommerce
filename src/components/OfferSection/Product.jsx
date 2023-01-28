import React from "react";
import { ProductStyled } from "./style";

const Product = ({ image, name, discount }) => {
  return (
    <ProductStyled>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
      <div className="discount">
        <span>-</span>
        <span>{discount}</span>
        <span>%</span>
      </div>
    </ProductStyled>
  );
};

export default Product;
