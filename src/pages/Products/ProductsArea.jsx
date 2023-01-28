import React, { useState } from "react";
import {
  AreaHeaderStyled,
  ProductsAreaRowStyled,
  ProductsAreaGridStyled,
} from "./style";

import CheckBox from "../../components/inputs/Checkbox";
import Input from "../../components/inputs/Input";

import { MdTableRows } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import ProductRowCard from "../../components/ProductRowCard";

import products from "../../mock/products";
import ProductGridCard from "../../components/ProductsGridCard";

const ProductsArea = ({ catigory }) => {
  const [showWay, setShowWay] = useState("row");

  return (
    <div>
      <AreaHeaderStyled>
        <div className="info">
          <p>
            12,911 items in <h6>Mobile accessory</h6>
          </p>
        </div>
        <div className="controllers">
          <CheckBox label="Verified only" />
          <Input style={{ width: 170 }} />
          <div className="btns">
            <button
              className={showWay === "grid" ? "active" : ""}
              style={{ borderRadius: "5px 0 0 5px" }}
              onClick={() => setShowWay("grid")}
            >
              <IoGridSharp />
            </button>
            <button
              className={showWay === "row" ? "active" : ""}
              style={{ borderRadius: "0 5px 5px 0" }}
              onClick={() => setShowWay("row")}
            >
              <MdTableRows />
            </button>
          </div>
        </div>
      </AreaHeaderStyled>

      {showWay === "row" ? (
        <ProductsAreaRowStyled>
          {products.map((product) => (
            <ProductRowCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              offer={product.offer}
              rating={product.rating}
              description={product.description}
              shipping={product.shipping}
              orders={product.orders}
            />
          ))}
        </ProductsAreaRowStyled>
      ) : (
        ""
      )}

      {showWay === "grid" ? (
        <ProductsAreaGridStyled>
          {products.map((product) => (
            <ProductGridCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              offer={product.offer}
              rating={product.rating}
            />
          ))}
        </ProductsAreaGridStyled>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductsArea;
