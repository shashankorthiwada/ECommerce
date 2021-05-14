import { useCart } from "../Contexts/cart-context";

export const Cart = () => {
  const {
    state: { itemsInCart },
    addItemsToCart,
    removeItemFromCart,
    decreaseQty,
    dispatch,
  } = useCart();

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
          itemsInCart.map((product) => (
            <div
              className="product-card-div m-1rem"
              style={{
                border: "1px solid black",
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
                  src={product.image}
                  alt="item"
                />
                <button
                  className="cursor  remove-btn"
                  style={{ display: "inline-block" }}
                  onClick={() => removeItemFromCart({ product })}
                >
                  X
                </button>
              </div>
              <div style={{ padding: "0.4rem", marginLeft: "2rem" }}>
                <h4>{product.name}</h4>
                <p style={{ padding: "0.3rem" }}>Rs. {product.price}</p>
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
                <button onClick={() => addItemsToCart({ product })}>+</button>
                <p>{product.quantity}</p>
                <button onClick={() => decreaseQty({ product })}>-</button>

                <button
                  className="cursor btn-color add-btn"
                  style={{ display: "inline-block" }}
                  onClick={() =>
                    dispatch({ type: "ADD_TO_WISH_LIST", payload: product })
                  }
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
