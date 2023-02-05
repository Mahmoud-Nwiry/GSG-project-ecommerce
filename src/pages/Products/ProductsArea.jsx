import React, { useState, useContext } from "react";
import {
  AreaHeaderStyled,
  ProductsAreaRowStyled,
  ProductsAreaGridStyled,
  ControlStyled,
  FilterKeyWordsStyled,
} from "./style";

import CheckBox from "../../components/inputs/Checkbox";

import { MdTableRows } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import ProductRowCard from "../../components/ProductRowCard";

import products from "../../mock/products";
import ProductGridCard from "../../components/ProductsGridCard";
import Pagination from "../../components/Pagination";
import { FilterContext } from "./FilterContext";
import { category } from "./data";
import Badget from "../../components/Badget";

const ProductsArea = () => {
  const [showWay, setShowWay] = useState("row");
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div>
      <AreaHeaderStyled>
        <div className="info">
          <p>
            12,911 items in <h6>{filter.category || category[0].name}</h6>
          </p>
        </div>
        <div className="controllers">
          <CheckBox label="Verified only" />
          <select>
            <option value="">Featured</option>
          </select>
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

      {filter.brands.length > 0 ||
      filter.features.length > 0 ||
      filter.rate.length > 0 ? (
        <FilterKeyWordsStyled>
          {filter.brands.map((item) => (
            <Badget
              value={item}
              deleteFunc={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  brands: prev.brands.filter((value) => value !== item),
                }))
              }
            />
          ))}
          {filter.features.map((item) => (
            <Badget
              value={item}
              deleteFunc={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  brands: prev.features.filter((value) => value !== item),
                }))
              }
            />
          ))}
          {filter.rate.map((item) => (
            <Badget
              value={item}
              deleteFunc={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  brands: prev.rate.filter((value) => value !== item),
                }))
              }
            />
          ))}
          <p
            className="clear"
            onClick={() =>
              setFilter((prev) => ({
                ...prev,
                brands: [],
                features: [],
                price: { min: 0, max: 9999 },
                condition: "",
                rate: [],
              }))
            }
          >
            Clear all filter
          </p>
        </FilterKeyWordsStyled>
      ) : (
        ""
      )}

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
      <ControlStyled>
        <select>
          <option value="10">Show 10</option>
        </select>
        <Pagination number={3} />
      </ControlStyled>
    </div>
  );
};

export default ProductsArea;
