import React, { useState, useContext } from "react";
import According from "../../components/According";
import Checkbox from "../../components/inputs/Checkbox";
import Radios from "../../components/inputs/Radios";
import { brands, category, condition, features, rating } from "./data";
import { FilterContext } from "./FilterContext";

const Sidebar = ({ addItem }) => {
  return (
    <div>
      <According title="Category" content={<Catigories addItem={addItem} />} />
      <According title="Brands" content={<Brands addItem={addItem} />} />
      <According title="Features" content={<Features addItem={addItem} />} />
      <According
        title="Price range"
        content={<Catigories addItem={addItem} />}
      />
      <According title="Condition" content={<Condition addItem={addItem} />} />
      <According title="Ratings" content={<Rating addItem={addItem} />} />
    </div>
  );
};

const Catigories = () => {
  const [numOfShow, setNumOfShow] = useState(4);
  const { setFilter } = useContext(FilterContext);

  return (
    <ul>
      {category.map((item, index) => {
        if (index >= numOfShow) return "";
        return (
          <li
            key={item.id}
            onClick={() =>
              setFilter((prev) => ({ ...prev, category: item.value }))
            }
          >
            {item.name}
          </li>
        );
      })}
      {category.length > numOfShow ? (
        <li className="see-all" onClick={() => setNumOfShow(category.length)}>
          See all
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

const Brands = () => {
  const [numOfShow, setNumOfShow] = useState(5);
  const { setFilter } = useContext(FilterContext);

  const handelFilter = (value, checked) => {
    if (checked) {
      setFilter(prev => ({...prev, brands : [...prev.brands, value]}));
    }
    else {
      setFilter(prev => ({...prev, brands : prev.brands.filter(item => item !== value)}))
    }
  }

  return (
    <ul>
      {brands.map((item, index) => {
        if (index >= numOfShow) return "";
        return (
          <li key={item.id}>
            <Checkbox label={item.name} onClick={(e) => handelFilter(item.value ,e.target.checked)} />
          </li>
        );
      })}
      {brands.length > numOfShow ? (
        <li className="see-all" onClick={() => setNumOfShow(brands.length)}>
          See all
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

const Features = () => {
  const [numOfShow, setNumOfShow] = useState(5);

  const { setFilter } = useContext(FilterContext);

  const handelFilter = (value, checked) => {
    if (checked) {
      setFilter(prev => ({...prev, features : [...prev.features, value]}));
    }
    else {
      setFilter(prev => ({...prev, features : prev.features.filter(item => item !== value)}))
    }
  }

  return (
    <ul>
      {features.map((item, index) => {
        if (index >= numOfShow) return "";
        return (
          <li key={item.id}>
            <Checkbox label={item.name} onClick={(e) => handelFilter(item.value ,e.target.checked)} />
          </li>
        );
      })}
      {features.length > numOfShow ? (
        <li className="see-all" onClick={() => setNumOfShow(features.length)}>
          See all
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

const Condition = () => {

  const { setFilter } = useContext(FilterContext);

  return (
    <ul>
      {condition.map((item, index) => {
        return (
          <li key={item.id}>
            <Radios name={"condition"} label={item.name} onClick={(e) => setFilter(prev => ({...prev, condition : item.value}))} />
          </li>
        );
      })}
    </ul>
  );
};

const Rating = () => {

  const { setFilter } = useContext(FilterContext);

  const handelFilter = (value, checked) => {
    if (checked) {
      setFilter(prev => ({...prev, rate : [...prev.rate, value]}));
    }
    else {
      setFilter(prev => ({...prev, rate : prev.rate.filter(item => item !== value)}))
    }
  }

  return (
    <ul>
      {rating.map((item, index) => {
        return (
          <li key={item.id}>
            <Checkbox label={item.name} onClick={(e) => handelFilter(item.value ,e.target.checked)}  />
          </li>
        );
      })}
    </ul>
  );
};
export default Sidebar;
