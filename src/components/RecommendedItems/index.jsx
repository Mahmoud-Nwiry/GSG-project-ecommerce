import React from "react";
import data from "../../mock/recommendedItems";
import { H4 } from "../Typography";
import Product from "./Product";
import { MainSection, ProductsBoxStyled } from "./style";

const RecommendedItems = () => {
  return (
    <MainSection>
      <H4>Recommended items</H4>
      <ProductsBoxStyled>
        {data.map((product) => (
          <Product
            key={product.id}
            image={product.img}
            price={product.price}
            name={product.name}
          />
        ))}
      </ProductsBoxStyled>
    </MainSection>
  );
};

export default RecommendedItems;
