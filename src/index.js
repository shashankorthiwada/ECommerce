import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./Contexts/data-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Contexts/auth-context";
export { Home } from "./components/Home";
export { WishList } from "./components/WishList";
export { Navigation } from "./components/Navigation";
export { ProductListing } from "./components/ProductListing";
export { Cart } from "./components/Cart";
export { ProductDetails } from "./components/ProductDetails";
export { PrivateRoute } from "./components/PrivateRoute";
export { Login } from "./components/Login";
export { SignUp } from "./components/SignUp";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
