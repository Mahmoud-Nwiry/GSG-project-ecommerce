import React, { useState } from "react";
import { PaginationBoxStyled } from "./style";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Pagination = ({ number }) => {
  const [active, setActive] = useState(1);

  const decress = () => setActive(prev => prev > 1 ? prev - 1 : prev);
  const incress = () => setActive(prev => prev < number ? prev + 1 : prev);

  return (
    <PaginationBoxStyled>
      <button className={active === 1? 'disable' : ''} onClick={decress}>
        <MdOutlineChevronLeft fontSize={20} />
      </button>
      {
        Array.from(Array(number)).map((number, index) => (
            <button
                onClick={() => setActive(index + 1)}
                className={active === index + 1 ? "active" : ""}
            >
                {index + 1}
            </button>
        ))
      }
      <button className={active === number? 'disable' : ''} onClick={incress}>
        <MdOutlineChevronRight fontSize={20} />
      </button>
    </PaginationBoxStyled>
  );
};

export default Pagination;
