import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuthContext } from "./auth-context";
import axios from "axios";
import { cartReducer } from "../reducers/cart-reducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    itemsInCart: [],
    cartToastMessage: "",
    visibleCartItems: "hidden",
  });

  const { userData } = useAuthContext();

  useEffect(() => {
    if (userData && userData._id) {
      // console.log("userData from cart context: ", userData);
      (async () => {
        const {
          data: { data: cartItems },
        } = await axios.get(
          `https://halwaai-ecommerce-backend.herokuapp.com/cart/${userData._id}`
        );
        // console.log(cartItems);
        dispatch({
          type: "SHOW_CART_ITEMS",
          payload: cartItems,
        });
      })();
    }
  }, [userData]);

  const addItemsToCart = async ({ product }) => {
    if (userData) {
      const { data } = await axios.post(
        `https://halwaai-ecommerce-backend.herokuapp.com/cart/${userData._id}`,
        {
          ...product,
          action: "ADD",
        }
      );
      if (data) {
        dispatch({ type: "ADD_TO_CART", payload: product });
      }
    }
  };

  const removeItemFromCart = async ({ product }) => {
    if (userData) {
      const { status } = await axios.delete(
        `https://halwaai-ecommerce-backend.herokuapp.com/cart/${userData._id}`,
        {
          data: {
            ...product,
          },
        }
      );
      if (status === 200) {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
      }
    }
  };

  const decreaseQty = async ({ product }) => {
    if (userData) {
      const { data } = await axios.post(
        `https://halwaai-ecommerce-backend.herokuapp.com/cart/${userData._id}`,
        {
          ...product,
          action: "REMOVE",
        }
      );
      if (data) {
        dispatch({ type: "DECREASE_QTY", payload: null });
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItemsToCart,
        removeItemFromCart,
        decreaseQty,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
