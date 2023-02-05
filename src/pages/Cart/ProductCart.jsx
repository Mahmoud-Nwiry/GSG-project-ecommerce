import React from "react";
import { Body1, H6 } from "../../components/Typography";
import { ProductCartStyled } from "./style";

const ProductCart = ({data}) => {
  const { image, name, size, color, material, seller, price, quantity } = data;

  return <ProductCartStyled>
    <div className="image">
        <img src={image} alt="product" />
    </div>
    <div className="details">
        <H6>{name}</H6>
        <Body1>Size: {size}, Color: {color}, Material: {material}</Body1>
        <Body1>Seller: {seller}</Body1>
        <div className="buttons">
            <button className="remove">Remove</button>
            <button className="save">Save for later</button>
        </div>
    </div>
    <div className="cost">
        <div className="price">{price}</div>
        <select className="quantity">
            <option value={quantity}>Qty: {quantity}</option>
        </select>
    </div>
  </ProductCartStyled>;
};

export default ProductCart;
