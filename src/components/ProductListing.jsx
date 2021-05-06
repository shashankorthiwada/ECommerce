import { items } from "../reducers/products-reducer.js";
import { Filters } from "./Filters";
import { useData } from "../Contexts/data-context";
import { Products } from "./Products";
import { Toast } from "./Toast";

export const ProductListing = () => {
  const {
    state: { sortBy, showAllInventory, showFastDelivery, toastMessage },
  } = useData();

  const getSortedData = (items, sortBy) => {
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return items.sort((a, b) => a.price - b.price);
    }
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return items.sort((a, b) => b.price - a.price);
    }
    return items;
  };

  const getFilteredData = (data, { showAllInventory }) =>
    data
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(({ inStock }) => (showAllInventory ? true : inStock));

  const sortedData = getSortedData(items, sortBy);
  const filteredData = getFilteredData(sortedData, { showAllInventory });

  return (
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
