import React from "react";
import { H4 } from "../Typography";
import { MainBox, RegionsContainerStyled } from "./style";

import data from "../../mock/regions";
import Region from "./Region";

const SuppliersRegion = (props) => {
  return (
    <MainBox>
      <H4>Suppliers by region</H4>
      <RegionsContainerStyled>
        {data.map((item) => (
          <Region
            key={item.id}
            region={item.region}
            flag={item.flag}
            domain={item.domain}
          />
        ))}
      </RegionsContainerStyled>
    </MainBox>
  );
};

export default SuppliersRegion;
