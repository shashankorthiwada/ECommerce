import { useData } from "../Contexts/data-context";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const {
    state: {
      itemsInCart,
      visibleCartItems,
      toastMessage,
      itemsInWishList,
      visibleWishListItems,
    },
  } = useData();

  const cartQuantity = itemsInCart.length;

  const wishListQuantity = itemsInWishList.length;

  return (
    <nav
      style={{
        backgroundColor: "#5A4041",
        height: "3rem",
      }}
    >
      <div
        style={{
          margin: "0rem 0.1rem auto 65rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink to="/products">
          <span
            style={{
              display: "block",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: "normal",
              marginTop: "0.3rem",
            }}
          >
            <i
              className="fas fa-store fa-lg"
              style={{
                color: "whitesmoke",
                cursor: "pointer",
                display: "block",
                marginLeft: "1rem",
                padding: "0.2rem",
                position: "relative",
              }}
            ></i>
            Products
          </span>
        </NavLink>
        <NavLink to="/wishlist">
          <span
            style={{
              display: "block",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: "normal",
              marginTop: "0.3rem",
            }}
          >
            <i
              className="fas fa-heart fa-lg"
              style={{
                color: "whitesmoke",
                cursor: "pointer",
                display: "block",
                marginLeft: "1rem",
                padding: "0.2rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: 10,
                  fontWeight: "normal",
                  borderRadius: "0.25rem",
                  fontSize: "0.9rem",
                  backgroundColor: "#5A4041",
                  visibility: visibleWishListItems,
                }}
              >
                {wishListQuantity}
              </span>
            </i>
            Wishlist
          </span>
        </NavLink>
        <NavLink to="/cart">
          <span
            style={{
              display: "block",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: "normal",
              marginTop: "0.3rem",
            }}
          >
            <i
              className="fas fa-shopping-bag fa-lg"
              style={{
                color: "whitesmoke",
                cursor: "pointer",
                display: "block",
                marginLeft: "0.2rem",
                padding: "0.2rem",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: 10,
                  fontWeight: "normal",
                  borderRadius: "0.25rem",
                  fontSize: "0.9rem",
                  backgroundColor: "#5A4041",
                  visibility: visibleCartItems,
                }}
              >
                {cartQuantity}
              </span>
            </i>
            Bag
          </span>
        </NavLink>
      </div>
    </nav>
  );
};
