import React, { createContext, useEffect } from "react";
import { Children } from "react";
import { useState } from "react";

export const CartContext = createContext();
export default function CartProvider({ children }) {
  //favorite
  const [favorite, setFavorite] = useState(() => {
    const saveFav = localStorage.getItem("favorites");

    return saveFav ? JSON.parse(saveFav) : [];
  });
  const addToFavorite = (item) => {
    setFavorite((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };
  const removeFormFav = (id) => {
    setFavorite((prev) => prev.filter((i) => i.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);
  //cart
  const [cartItems, setCartItems] = useState(() => {
    const saveItems = localStorage.getItem("cartItem");

    return saveItems ? JSON.parse(saveItems) : [];
  });
  //increaseQuantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  //decreaseQuantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  //removeFormCart
  const removeFormCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addCartItems = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div>
      <CartContext.Provider
        value={{
          cartItems,
          addCartItems,
          increaseQuantity,
          decreaseQuantity,
          removeFormCart,
          addToFavorite,
          favorite,
          removeFormFav,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}
