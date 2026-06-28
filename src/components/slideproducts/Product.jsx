import React, { useContext } from "react";
import { FaStar, FaCartArrowDown } from "react-icons/fa6";
import { FaShare, FaRegHeart, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";

const Product = ({ item }) => {
  const { cartItems, addCartItems } = useContext(CartContext);
  const IsInCart = cartItems.some((i) => i.id == item.id);
  return (
    <div className={`product ${IsInCart ? "in_cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status_cart">
          <FaCheck /> in Cart
        </span>
        <div className="img_product">
          <img src={item.images[0]}></img>
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="price">
          <span>4 {item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn_cart" onClick={() => addCartItems(item)}>
          <FaCartArrowDown />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Product;
