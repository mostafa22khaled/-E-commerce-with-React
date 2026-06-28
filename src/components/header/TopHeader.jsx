import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../context/CartContext";

const TopHeader = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo"></img>
        </Link>
        <form className="search_box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Products"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="header_icons">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <TiShoppingCart />

            <span className="count">{cartItems.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
