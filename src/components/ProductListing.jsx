import { Filters } from "./Filters";
import { useData } from "../Contexts/data-context";
import { Products } from "./Products";
import { Toast } from "./Toast";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export const ProductListing = () => {
  const [loader, showLoader] = useState(false);
  const {
    state: { sortBy, inStock, fastDelivery, toastMessage, products },
    dispatch,
  } = useData();

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
          "https://halwaai-ecommerce-backend.herokuapp.com/products"
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
        {toastMessage && <Toast />}
        {filteredData.map((product) => (
          <div key={product.id}>
            <Products product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
