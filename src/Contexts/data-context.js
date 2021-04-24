import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../components/products-reducer";
import kalakandImage from "../images/kalakand.jpg";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null,
    showAllInventory: false,
    showFastDelivery: false,
    itemsInCart: [
      // {
      //   id: 1,
      //   name: "Ajmeri Kalakand",
      //   price: 2000,
      //   image: kalakandImage,
      //   quantity: 1
      // }
    ],
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
