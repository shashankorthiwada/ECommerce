import { Filters } from "./Filters";
import { useData } from "../Contexts/data-context";
import { Products } from "./Products";
import { CartToast } from "./CartToast";
import { WishlistToast } from "./WishlistToast";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useCart } from "../Contexts/cart-context";
import { useWishlist } from "../Contexts/wishlist-context";

export const ProductListing = () => {
  const [loader, showLoader] = useState(false);
  const {
    state: { sortBy, inStock, fastDelivery, products },
    dispatch,
  } = useData();
  const {
    state: { cartToastMessage },
  } = useCart();
  const {
    state: { wishlistToastMessage },
  } = useWishlist();

  const getSortedData = (products, sortBy) => {
    const productList = [...products];
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return productList.sort((a, b) => a.price - b.price);
    }
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return productList.sort((a, b) => b.price - a.price);
    }
    return productList;
  };

  const getFilteredData = (sortedData, isInStock, isFastDelivery) => {
    sortedData = sortedData
      .filter((product) => (isInStock ? product.inStock : true))
      .filter((product) => (isFastDelivery ? product.fastDelivery : true));
    return sortedData;
  };

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, inStock, fastDelivery);

  useEffect(() => {
    async function fetchData() {
      try {
        showLoader(true);
        const {
          data: { products },
        } = await axios.get(
          "https://halwaai-backend.onrender.com/products"
        );
        dispatch({ type: "SHOW_PRODUCTS", payload: products });
        showLoader(false);
      } catch (error) {
        console.error("error fetching products in Product Listing");
      }
    }
    fetchData();
  }, [dispatch]);

  return loader ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <Loader type="Oval" color="#5A4041" height={80} width={80} />
    </div>
  ) : (
    <section className="container">
      <Filters />
      <div className="content" style={{ display: "flex", flexWrap: "wrap" }}>
        {cartToastMessage && <CartToast />}
        {wishlistToastMessage && <WishlistToast />}
        {filteredData.map((product) => (
          <div key={product._id}>
            <Products product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
