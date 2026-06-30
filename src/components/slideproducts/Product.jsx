import React, { useContext } from "react";
import { FaStar, FaCartArrowDown } from "react-icons/fa6";
import { FaShare, FaRegHeart, FaStarHalfAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const { cartItems, addCartItems, favorite, addToFavorite, removeFormFav } =
    useContext(CartContext);
  const IsInCart = cartItems.some((i) => i.id == item.id);
  const handelAddToCart = () => {
    addCartItems(item);
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} />
        <div className="toast-content">
          <strong>{item.title}</strong>
          add to cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };
  //favorite
  const IsInFav = favorite.some((i) => i.id == item.id);
  const handleAddFavorite = () => {
    if (IsInFav) {
      removeFormFav(item.id);
      toast.error(`${item.title} remove from favorite`);
    } else {
      addToFavorite(item);
      toast.success(`${item.title} add to favorite`);
    }
  };
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
        <span className="btn_cart" onClick={handelAddToCart}>
          <FaCartArrowDown />
        </span>
        <span
          className={`${IsInFav ? "in-fav" : ""}`}
          onClick={handleAddFavorite}
        >
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
