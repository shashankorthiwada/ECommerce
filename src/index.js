import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./Contexts/data-context";
import { CartProvider } from "./Contexts/cart-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Contexts/auth-context";
import { WishListProvider } from "./Contexts/wishlist-context";
export { Home } from "./components/Home";
export { WishList } from "./components/WishList";
export { Navigation } from "./components/Navigation";
export { ProductListing } from "./components/ProductListing";
export { Cart } from "./components/Cart";
export { ProductDetails } from "./components/ProductDetails";
export { PrivateRoute } from "./components/PrivateRoute";
export { Login } from "./components/Login";
export { SignUp } from "./components/SignUp";
export { UserDashBoard } from "./components/UserDashBoard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <CartProvider>
            <WishListProvider>
              <App />
            </WishListProvider>
          </CartProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
