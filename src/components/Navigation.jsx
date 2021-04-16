import { useData } from "../Contexts/data-context";
import { useRoute } from "../Contexts/route-context";

export const Navigation = () => {
  const { setRoute } = useRoute();
  const {
    state: { itemsInCart, itemsInWishList },
  } = useData();

  const cartQuantity = itemsInCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav style={{ backgroundColor: "#5A4041" }}>
      <div
        style={{
          display: "flex",
          padding: "0rem 0.5rem",
          flexWrap: "wrap",
          marginLeft: "71rem",
        }}
      >
        <div></div>
        <div>
          <span>
            <i
              className="fas fa-heart"
              style={{
                color: "whitesmoke",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => setRoute("wishlist")}
            ></i>
          </span>
          <span></span>
          <span style={{ display: "block", color: "#fff" }}>WishList</span>
        </div>
        <div style={{ position: "relative", padding: "1rem" }}>
          <span>
            <i
              className="fas fa-shopping-bag"
              style={{ color: "whitesmoke", cursor: "pointer" }}
              onClick={() => setRoute("cart")}
            ></i>
          </span>

          <span
            style={{
              position: "absolute",
              fontSize: "0.8rem",
              border: "1px solid #5A4041",
              borderRadius: "50%",
              top: 0,
              right: 0,
              color: "#fff",
              backgroundColor: "#5A4041",
            }}
          >
            {cartQuantity}
          </span>
          <span
            style={{
              textAlign: "center",
              display: "block",
              color: "#fff",
              fontSize: "0.8rem",
            }}
          >
            Cart
          </span>
        </div>
      </div>
    </nav>
  );
};
