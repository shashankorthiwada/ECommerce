import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../components/products-reducer";

const ProductsContext = createContext();

export function ProductProvider({ children }) {
  const [{ sortBy, showFastDelivery, showAllInventory }, dispatch] = useReducer(
    productReducer,
    {
      sortBy: null,
      showAllInventory: true,
      showFastDelivery: false,
    }
  );

  return (
    <ProductsContext.Provider
      value={{ sortBy, showFastDelivery, showAllInventory, dispatch }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
