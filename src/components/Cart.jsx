import { useData } from "../Contexts/data-context";
import { useTheme } from "../Contexts/theme-context";

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
      <div
        style={{
          margin: "1rem auto auto 3rem",
        }}
      >
        <h1>Order Total: {cartTotal}</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {itemsInCart.length > 0 ? (
          itemsInCart.map((item) => (
            <div
              className="product-card-div m-1rem"
              style={{
                border: `1px solid ${theme.color}`,
                height: "30rem",
                width: "17rem",
              }}
            >
              <div
                className="product-image-div"
                style={{
                  position: "relative",
                }}
              >
                <img
                  className="item-image"
                  style={{ width: "16.9rem" }}
                  src={item.image}
                />
                <button
                  style={{ display: "inline-block" }}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                  style={{
                    position: "absolute",
                    top: 0,
                    cursor: "pointer",
                    right: 0,
                    backgroundColor: "transparent",
                    color: "#fff",
                    borderRadius: ".25rem",
                    border: "1px solid white",
                  }}
                >
                  X
                </button>
              </div>
              <div style={{ padding: "0.4rem", marginLeft: "2rem" }}>
                <h4>{item.name}</h4>
                <p style={{ padding: "0.3rem" }}>Rs. {item.price}</p>
              </div>
              <div
                style={{
                  marginRight: "2rem",
                  marginTop: "0.4rem",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: item })
                  }
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE_QTY", payload: item })
                  }
                >
                  -
                </button>

                <button
                  style={{ display: "inline-block" }}
                  onClick={() =>
                    dispatch({ type: "ADD_TO_WISH_LIST", payload: item })
                  }
                  style={{
                    width: "10rem",
                    marginLeft: "2rem",
                    color: "#fff",
                    borderRadius: "0.25rem",
                    backgroundColor: "#5A4041",
                    border: "1px solid #fff",
                    height: "2rem",
                    cursor: "pointer",
                    margin: "1rem",
                  }}
                >
                  Move To WishList
                </button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ margin: "1rem auto auto 3rem" }}>
            <p>Cart is Empty</p>
          </div>
        )}
      </div>
    </div>
  );
};
