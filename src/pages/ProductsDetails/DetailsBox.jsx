import React, { useState } from "react";
import { H5, H6 } from "../../components/Typography";

import Rating from "../../assets/images/rating.png";
import De from "../../assets/images/flags/DE@2x.png";

import data from "../../mock/productDetails";

import {
  MdCheck,
  MdOutlineMessage,
  MdOutlineShoppingBasket,
  MdOutlineVerifiedUser,
  MdLanguage
} from "react-icons/md";
import { RxDotFilled, RxHeart, RxHeartFilled } from "react-icons/rx";


import {
  DetailsBoxStyled,
  DetailsStyled,
  ImagesStyled,
  SellerStyled,
} from "./style";
import Button from "../../components/Buttons/Button";

const DetailsBox = () => {
  const [activeImg, setActiveImg] = useState(0);

  const handelActiveImg = (index) => {
    setActiveImg(index);
  };

  const Images = () => (
    <ImagesStyled>
      <div className="active-image">
        <img src={data.images[activeImg]} alt={data.name} />
      </div>

      <div className="images-row">
        {data.images.map((img, index) => (
          <div
            className={`image-container ${index === activeImg ? "active" : ""}`}
            key={index}
          >
            <img
              onClick={() => handelActiveImg(index)}
              src={img}
              alt="product"
            />
          </div>
        ))}
      </div>
    </ImagesStyled>
  );

  const Details = () => (
    <DetailsStyled>
      <p className="stock">
        {data.stock ? (
          <>
            <MdCheck fontSize={20} /> In Stock
          </>
        ) : (
          ""
        )}
      </p>
      <H5>{data.name}</H5>

      <div className="storage">
        <div className="rating">
          <img src={Rating} alt="rating" />
          <p>{data.rating}</p>
        </div>
        <RxDotFilled />
        <p className="reviews">
          <MdOutlineMessage fontSize={20} /> {data.reviews} reviews
        </p>
        <RxDotFilled />
        <p className="sold">
          <MdOutlineShoppingBasket fontSize={20} /> {data.sold} sold
        </p>
      </div>

      <div className="quantity">
        {data.quantity.map((item, index) => (
          <div className="item" key={index}>
            <H6>${item.price}</H6>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="more-info">
        <div className="box">
          <div className="item">
            <p className="name">Price:</p>
            <p className="value">{data.price}</p>
          </div>
        </div>
        <div className="box">
          <div className="item">
            <p className="name">Type:</p>
            <p className="value">{data.type}</p>
          </div>
          <div className="item">
            <p className="name">Material:</p>
            <p className="value">{data.material}</p>
          </div>
          <div className="item">
            <p className="name">Design:</p>
            <p className="value">{data.design}</p>
          </div>
        </div>
        <div className="box">
          <div className="item">
            <p className="name">Customization:</p>
            <p className="value">{data.customization}</p>
          </div>
          <div className="item">
            <p className="name">Protection:</p>
            <p className="value">{data.protection}</p>
          </div>
          <div className="item">
            <p className="name">Warranty:</p>
            <p className="value">{data.warranty}</p>
          </div>
        </div>
      </div>
    </DetailsStyled>
  );

  const Seller = () => (
    <SellerStyled>
      <div className="seller-box">
        <div className="info">
          <div className="image">
            <img src={data.seller.image} alt="seller avatar" />
          </div>
          <div className="text">
            <p className="name">{data.seller.name}</p>
            <p className="company">{data.seller.company}</p>
          </div>
        </div>
        <ul className="extra-info">
          <li>
            <div className="icon">
              <img src={De} alt="flag" />
            </div>
            <p className="text">{data.seller.from}</p>
          </li>
          <li>
            <div className="icon">
              <MdOutlineVerifiedUser fontSize={18} />
            </div>
            <p className="text">{data.seller.verified}</p>
          </li>
          <li>
            <div className="icon">
              <MdLanguage fontSize={18} />
            </div>
            <p className="text">{data.seller.shipping}</p>
          </li>
        </ul>
        <Button>Send inquiry</Button>
        <Button className="white">Seller’s profile</Button>
      </div>

        <p className="save"><RxHeart fontSize={20} /> Save for later</p>
    </SellerStyled>
  );

  return (
    <DetailsBoxStyled>
      <Images />
      <Details />
      <Seller />
    </DetailsBoxStyled>
  );
};

export default DetailsBox;
