import { createContext, useContext } from "react";
import { useState } from "react";

export const RouteContext = createContext();

export function RouteProvider({ children }) {
  const [route, setRoute] = useState("products");
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useRoute() {
  return useContext(RouteContext);
}
