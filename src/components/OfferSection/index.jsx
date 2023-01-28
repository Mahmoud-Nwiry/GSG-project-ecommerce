import React from "react";
import Product from "./Product";
import { OfferSectionStyled } from "./style";
import Timer from "./Timer";

import offers from "../../mock/offers";

const OfferSection = () => {
  return (
    <OfferSectionStyled>
      <Timer />
      {offers.map((offer) => (
        <Product
          key={offer.id}
          image={offer.image}
          name={offer.name}
          discount={offer.discount}
        />
      ))}
    </OfferSectionStyled>
  );
};

export default OfferSection;
