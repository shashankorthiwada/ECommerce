import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/products-reducer";
import kalakandImage from "../images/kalakand.jpg";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null,
    showAllInventory: false,
    showFastDelivery: false,
    itemsInCart: [],
    itemsInWishList: [],
    visibleCartItems: "hidden",
    toastMessage: "",
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
