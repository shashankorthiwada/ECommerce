import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./Contexts/cart-context";
import { ThemeProvider } from "./Contexts/theme-context";
import { RouteProvider } from "./Contexts/route-context";
import { DataProvider } from "./Contexts/data-context";

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider>
      <ThemeProvider>
        <DataProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </DataProvider>
      </ThemeProvider>
    </RouteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
