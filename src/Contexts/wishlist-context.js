import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuthContext } from "./auth-context";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    itemsInWishList: [],
    wishlistToastMessage: "",
    visibleWishListItems: "hidden",
  });

  const { userData } = useAuthContext();

  useEffect(() => {
    (async () => {
      const {
        data: { data: wishlistItems },
      } = await axios.get(`https://halwaai-ecommerce-backend.herokuapp.com/wishlist/${userData._id}`);
      console.log(wishlistItems);
      dispatch({ type: "SHOW_WISHLIST_ITEMS", payload: wishlistItems });
    })();
  }, [userData]);

  const addItemsToWishlist = async ({ product }) => {
    const { data } = await axios.post(
      `https://halwaai-ecommerce-backend.herokuapp.com/wishlist/${userData._id}`,
      {
        ...product,
      }
    );

    if (data) {
      dispatch({ type: "ADD_TO_WISH_LIST", payload: product });
    }
  };

  const removeItemsFromWishlist = async ({ product }) => {
    if (userData) {
      const { status } = await axios.delete(
        `https://halwaai-ecommerce-backend.herokuapp.com/wishlist/${userData._id}`,
        {
          data: {
            ...product,
          },
        }
      );

      if (status === 200) {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
      }
    }
  };

  return (
    <WishListContext.Provider
      value={{ state, dispatch, addItemsToWishlist, removeItemsFromWishlist }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishListContext);
};
