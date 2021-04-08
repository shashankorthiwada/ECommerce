import { useCart } from "../Contexts/cart-context";
import { useTheme } from "../Contexts/theme-context";
import { useData } from "../Contexts/data-context";

export const Cart = () => {
  const {
    state: { itemsInCart },
    dispatch,
  } = useData();
  const { theme } = useTheme();

  const cartTotal = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      {itemsInCart.length > 0 ? (
        itemsInCart.map((item) => (
          <>
            <h1>{cartTotal}</h1>
            <div
              className="product-card-div m-1rem"
              style={{
                border: `1px solid ${theme.color}`,
                height: "29rem",
              }}
            >
              <div className="product-image-div">
                <img
                  className="item-image"
                  style={{ width: "15.1rem" }}
                  src={item.image}
                />
              </div>
              <div style={{ margin: "1rem" }}>
                <h4>{item.name}</h4>
                <p style={{ padding: "0.3rem" }}>Rs. {item.price}</p>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: item })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                  style={{
                    width: "7rem",
                    marginLeft: "3rem",
                    marginTop: "1rem",
                    color: "#fff",
                    borderRadius: "0.25rem",
                    backgroundColor: "#5A4041",
                    border: "1px solid #fff",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                >
                  Remove From Cart
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE_QTY", payload: item })
                  }
                >
                  -
                </button>
              </div>
            </div>
          </>
        ))
      ) : (
        <p>Cart is Empty</p>
      )}
    </div>
  );
};
