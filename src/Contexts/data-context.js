import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/products-reducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null,
    showAllInventory: false,
    showFastDelivery: false,
    products: [],
  });

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
