import { useData } from "../Contexts/data-context";

export const Filters = () => {
  const {
    state: { sortBy, inStock, fastDelivery },
    dispatch,
  } = useData();
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <nav>
          <ul className="component-nav-list">
            <fieldset>
              <legend>Sort By</legend>
              <li className="list-item">
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                  }
                  checked={sortBy && sortBy === "LOW_TO_HIGH"}
                  style={{ color: "#5A4041" }}
                />{" "}
                Show Low To High
              </li>
              <li className="list-item">
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                  }
                  checked={sortBy && sortBy === "HIGH_TO_LOW"}
                />{" "}
                Show High To High
              </li>
            </fieldset>

            <fieldset>
              <legend>Filters</legend>
              <li className="list-item">
                <input
                  type="checkbox"
                  name="sort"
                  checked={inStock}
                  onChange={() => dispatch({ type: "TOGGLE_INV" })}
                />{" "}
                Include Out Of Stock
              </li>
              <li className="list-item">
                <input
                  type="checkbox"
                  name="sort"
                  checked={fastDelivery}
                  onChange={() => dispatch({ type: "TOGGLE_FAST_DELIVERY" })}
                />{" "}
                Show Only Fast Delivery
              </li>
            </fieldset>
          </ul>
        </nav>
      </div>
    </nav>
  );
};
