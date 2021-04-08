import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setCart] = useState([]);

  const saveItemsToCart = (item) => {
    console.log("Saving to Server...");
    // let cartItem = itemsInCart.find((cartItem) => cartItem.id === item.id);
    // if (cartItem) {
    //   setCart((items) => [...items, { cartItem, quantity: cartItem.quantity + 1 }]);
    // } else {
    //   setCart((items) => [...items, item]);
    //   // setCart((items) => [itemsInCart]);
    // }

    setCart((items) =>
      items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : item
      )
    );

    console.log(itemsInCart);
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
