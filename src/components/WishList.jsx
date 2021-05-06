import { useData } from "../Contexts/data-context";

export const WishList = () => {
  const {
    state: { itemsInWishList },
    dispatch,
  } = useData();
  return (
    <>
      {itemsInWishList.length > 0 ? (
        itemsInWishList.map((item) => (
          <div style={{ margin: "1rem auto auto 3rem" }}>
            <div
              className="product-card-div m-1rem"
              style={{
                border: "1px solid black",
                height: "28rem",
              }}
            >
              <div
                className="product-image-div"
                style={{ position: "relative" }}
              >
                <img
                  className="item-image"
                  style={{ width: "15.1rem" }}
                  src={item.image}
                />
                <button
                  style={{ display: "inline-block" }}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
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
                  style={{ display: "inline-block" }}
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: item })
                  }
                  style={{
                    width: "10rem",
                    marginLeft: "1rem",
                    color: "#fff",
                    borderRadius: "0.25rem",
                    backgroundColor: "#5A4041",
                    border: "1px solid #fff",
                    height: "2rem",
                    cursor: "pointer",
                  }}
                >
                  Move To Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ margin: "1rem auto auto 3rem" }}>
          <p>WishList is Empty</p>
        </div>
      )}
    </>
  );
};
