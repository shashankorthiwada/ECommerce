import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Cart,
  ProductListing,
  Navigation,
  Home,
  WishList,
  ProductDetails,
  PrivateRoute,
  SignUp,
  Login,
} from "./index";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
