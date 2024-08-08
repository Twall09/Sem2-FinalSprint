import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { SiPetsathome } from "react-icons/si"; // Researched how to import these different icons
import CartContext from "../context/CartContext";

const Header = () => {
  const { cartCount } = useContext(CartContext); // cart count shows the number of items in the cart right next to the icon in the top right corner. (I researched this)
  return (
    <header className="header">
      <h1>
        Pet Paradise <SiPetsathome />
      </h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">
        <FaCartShopping />{" "}
        {cartCount > 0 && <span className="counter">{cartCount}</span>}
      </Link>
    </header>
  );
};

export default Header;
