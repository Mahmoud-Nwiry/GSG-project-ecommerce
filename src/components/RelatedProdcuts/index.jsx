import React from "react";
import { H5 } from "../Typography";
import { RelatedProductStyled } from "./styled";

import data from "../../mock/related";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <RelatedProductStyled>
      <H5>Related products</H5>
      <div className="products">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </RelatedProductStyled>
  );
};

export default RelatedProducts;
