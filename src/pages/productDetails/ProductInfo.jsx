import React, { useContext } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  const { cartItems, addCartItems, addToFavorite, removeFormFav, favorite } =
    useContext(CartContext);
  const IsInCart = cartItems.some((i) => i.id == product.id);
  const handelAddToCart = () => {
    addCartItems(product);
    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} />
        <div className="toast-content">
          <strong>{product.title}</strong>
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
  const IsInFav = favorite.some((i) => i.id == product.id);
  const handleAddFavorite = () => {
    if (IsInFav) {
      removeFormFav(product.id);
      toast.error(`${product.title} remove from favorite`);
    } else {
      addToFavorite(product);
      toast.success(`${product.title} add to favorite`);
    }
  };
  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className="price">{product.price}</p>
      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="description">{product.description}</p>
      <h5 className="stock">
        <span> Hurry UP! Only {product.stock} products left in stock</span>
      </h5>
      <button
        onClick={handelAddToCart}
        className={`btn ${IsInCart ? "in_cart" : ""}`}
      >
        {IsInCart ? "item in Cart" : "Add To Cart"}
        <TiShoppingCart />
      </button>
      <div className="icons">
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

export default ProductInfo;
