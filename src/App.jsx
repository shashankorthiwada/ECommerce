import { useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart.jsx";
import { ProductListing } from "./components/ProductListing.jsx";
import { Checkout } from "./components/Checkout.jsx";
import { CartHeader } from "./components/CartHeader.jsx";
import { buttons } from "./dto/buttons.js";
import { useTheme } from "./Contexts/theme-context";
import { Navigation } from "./components/Navigation.jsx";
import { Categories } from "./components/Categories.jsx";
import { useRoute } from "./Contexts/route-context";
import { WishList } from "./components/WishList.jsx";

function App() {
  // const [route, setRoute] = useState("products");
  const { theme, changeTheme } = useTheme();
  const { route, setRoute } = useRoute();
  return (
    <div
      className="App"
      style={{
        ...theme,
      }}
    >
      {/* <CartHeader />
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => {
            setRoute(button.route);
          }}
        >
          {button.name}
        </button>
      ))}
      {route === "products" && <ProductListing />}
      {route === "cart" && <Cart />}
      {route === "checkout" && <Checkout />} */}
      <Navigation />
      <div style={{ position: "relative" }}>
        <button
          className="darkmode-btn"
          onClick={() => {
            if (theme.color === "black") {
              changeTheme("dark");
            } else if (theme.color === "white") {
              changeTheme("light");
            }
          }}
        >
          Dark Mode
        </button>
      </div>

      {route === "categories" && <Categories />}
      {route === "products" && <ProductListing />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <WishList />}
      {/* {route === "cart" && <WishList />} */}
    </div>
  );
}

export default App;
