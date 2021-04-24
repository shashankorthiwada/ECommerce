import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./Contexts/cart-context";
import { ThemeProvider } from "./Contexts/theme-context";
import { DataProvider } from "./Contexts/data-context";
import { BrowserRouter as Router } from "react-router-dom";
export { Home } from "./components/Home";
export { WishList } from "./components/WishList";
export { Navigation } from "./components/Navigation";
export { ProductListing } from "./components/ProductListing";
export { Cart } from "./components/Cart";
export { ProductDetails } from "./components/ProductDetails";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <DataProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </DataProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
