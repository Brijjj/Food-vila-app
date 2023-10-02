import React from "react";
import Logo from "../assets/food vila logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="header-section">
      <div className="header">
        <Link to={"/"}>
          <img src={Logo} alt="this is an img" />
        </Link>

        <Link className="cart_text" to={"/"}>
          <span>Home</span>
          <Link to="/cart" className="cart-btn">
            {Object.keys(cartItems).length}
            <BsFillCartFill />
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default Header;
