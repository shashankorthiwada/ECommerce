import "./App.css";
import { useTheme } from "./Contexts/theme-context";
import { Routes, Route } from "react-router-dom";
import { useData } from "./Contexts/data-context";
import {
  Cart,
  ProductListing,
  Navigation,
  Home,
  WishList,
  ProductDetails,
  PrivateRoute,
  SignUp,
  Login
} from "./index";

function App() {
  const { theme, changeTheme } = useTheme();
  const {
    state: { toastMessage },
  } = useData();
  return (
    <div
      className="App"
      style={{
        ...theme,
      }}
    >
      <Navigation />
      {/* <div style={{ position: "relative" }}>
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
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* {route === "products" && <ProductListing />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <WishList />}
      {route === "cart" && <WishList />} */}
    </div>
  );
}

export default App;
