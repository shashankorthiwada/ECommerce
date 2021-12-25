import { NavLink } from "react-router-dom";
import { useCart } from "../Contexts/cart-context";
import { useWishlist } from "../Contexts/wishlist-context";

export const Navigation = () => {
  const {
    state: { itemsInCart, visibleCartItems },
  } = useCart();
  const {
    state: { itemsInWishList, visibleWishListItems },
  } = useWishlist();

  const cartQuantity = itemsInCart.length;

  const wishListQuantity = itemsInWishList.length;

  return (
    <nav
      style={{
        backgroundColor: "#5A4041",
        height: "4.5rem",
        paddingLeft: "1.5rem",
      }}
    >
      <NavLink to="/">
        <div>
          <i
            className="fas fa-h-square fa-3x"
            style={{
              color: "whitesmoke",
              float: "left",
              paddingRight: "0.3rem",
              marginTop: "0rem",
            }}
          >
            alwaai
          </i>
        </div>
      </NavLink>
      <div
        style={{
          // margin: "0rem 0.1rem auto 65rem",
          float: "right",
          display: "flex",
          paddingRight: "2rem",
        }}
      >
        <NavLink to="/products">
          <span
            style={{
              display: "block",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: "normal",
              marginTop: "0rem",
              paddingRight: "1rem",
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
              marginTop: "0rem",
              paddingRight: "1rem",
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
              marginTop: "0rem",
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
        <NavLink to="/dashboard">
          <span
            style={{
              display: "block",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: "normal",
              marginTop: "0.1rem",
            }}
          >
            <i
              className="fas fa-user fa-lg"
              style={{
                display: "block",
                color: "whitesmoke",
                cursor: "pointer",
                marginLeft: "1rem",
                padding: "0.2rem 0.2rem 0.3rem 0.2rem",
              }}
            ></i>
            <p style={{ marginLeft: "0.7rem" }}>Profile</p>
          </span>
        </NavLink>
      </div>
    </nav>
  );
};
