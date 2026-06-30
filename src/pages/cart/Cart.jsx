import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFormCart } =
    useContext(CartContext);
  console.log(cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div>
      <div className="checkout">
        <div className="ordersummary">
          <h1>order Summary</h1>
          <div className="items">
            {cartItems.length === 0 ? (
              <p>Your Cart Is Empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="item-cart" key={index}>
                  <div className="image-name">
                    <div className="img-item">
                      {" "}
                      <img src={item.images[0]}></img>
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="price-item">$ {item.price}</p>
                      <div className="quantity-control">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="delete-item"
                    onClick={() => removeFormCart(item.id)}
                  >
                    <FaTrashAlt />
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bottom-summary">
            <div className="shop-table">
              <p>Total:</p>
              <span className="total-checkout">${total.toFixed(2)}</span>
            </div>
            <div className="btn-div">
              <button type="submit">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
