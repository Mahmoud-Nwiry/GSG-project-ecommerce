import React, { useState } from "react";
import { AccordingStyled } from "./style";

import { MdExpandMore } from "react-icons/md";

const s = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
veritatis animi distinctio, voluptatum tempore cum vel doloribus
tenetur, dolorum, quibusdam suscipit. Ipsam veritatis libero dolorum,
tempore consectetur totam reiciendis porro!`

const According = ({ title, content = s}) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <AccordingStyled active={isActive}>
      <div className="title">
        <h5>{title}</h5>
        <MdExpandMore onClick={() => setIsActive(prev => !prev)} />
      </div>
      <div className="content">
        {content}
      </div>
    </AccordingStyled>
  );
};

export default According;
