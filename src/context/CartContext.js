import React, { useState, createContext, useEffect } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [lan, setLan] = useState("ENG");
  return (
    <CartContext.Provider value={{ lan, setLan }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
