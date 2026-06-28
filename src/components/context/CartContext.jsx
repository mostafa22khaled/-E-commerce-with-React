import React, { createContext, useEffect } from "react";
import { Children } from "react";
import { useState } from "react";

export const CartContext = createContext();
export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saveItems = localStorage.getItem("cartItem");
    return saveItems ? JSON.parse(saveItems) : [];
  });
  const addCartItems = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div>
      <CartContext.Provider value={{ cartItems, addCartItems }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}
