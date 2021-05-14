import { useData } from "../Contexts/data-context";
import { useWishlist } from "../Contexts/wishlist-context";

export const WishList = () => {
  const { dispatch } = useData();

  const {
    state: { itemsInWishList },
    removeItemsFromWishlist,
  } = useWishlist();

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {itemsInWishList.length > 0 ? (
        itemsInWishList.map((product) => (
          <div
            className="product-card-div m-1rem"
            style={{
              border: "1px solid black",
              height: "30rem",
              width: "17rem",
            }}
          >
            <div className="product-image-div" style={{ position: "relative" }}>
              <img
                className="item-image"
                style={{ width: "16.9rem" }}
                src={product.image}
                alt="item"
              />
              <button
                className="cursor  remove-btn"
                style={{ display: "inline-block" }}
                onClick={() => removeItemsFromWishlist({ product })}
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
              <button
                className="add-btn cursor btn-color"
                style={{ display: "inline-block" }}
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                Move To Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div style={{ margin: "1rem auto auto 3rem" }}>
          <p>WishList is Empty</p>
        </div>
      )}
    </div>
  );
};
