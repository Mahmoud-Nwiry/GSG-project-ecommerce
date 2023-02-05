import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthLinksStyled } from "./style";

import { FaUserAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

import ThemeContext from "../../ThemeContext";

import { BsSunFill, BsMoonFill } from "react-icons/bs";

const AuthLinks = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <AuthLinksStyled>
      <li>
        <Link to="/">
          <FaUserAlt />
          <p>Profile</p>
        </Link>
      </li>
      <li>
        <Link to="/">
          <MdMessage />
          <p>Message</p>
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaHeart />
          <p>Orders</p>
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <FaShoppingCart />
          <p>My cart</p>
        </Link>
      </li>
      <li>
        <span
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
        </span>
      </li>
    </AuthLinksStyled>
  );
};

export default AuthLinks;
