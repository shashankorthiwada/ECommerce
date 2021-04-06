import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./Contexts/cart-context";
import { ThemeProvider } from "./Contexts/theme-context";
import { RouteProvider } from "./Contexts/route-context";
import { ProductProvider } from "./Contexts/products-context";

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider>
      <ThemeProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </ThemeProvider>
    </RouteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
