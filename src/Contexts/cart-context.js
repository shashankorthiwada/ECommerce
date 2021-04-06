import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setCart] = useState([]);

  const saveItemsToCart = (item) => {
    console.log("Saving to Server...");
    setCart((items) => [...items, item]);
  };

  return (
    <CartContext.Provider value={{ itemsInCart, saveItemsToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
