import { useEffect } from "react";
import { useCart } from "../Contexts/cart-context";

export const CartToast = () => {
  const {
    state: { cartToastMessage },
    dispatch,
  } = useCart();

  const closeToastHandler = () => {
    dispatch({ type: "CLOSE_TOAST", payload: null });
  };

  useEffect(() => {
    const timer = setTimeout(closeToastHandler, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "1rem",
        borderRadius: "0.3rem",
        width: "15rem",
        height: "4rem",
        padding: "1rem",
        backgroundColor: "#5A4041",
        color: "#fff",
        position: "relative",
        marginLeft: "43rem",
      }}
    >
      <h5>{cartToastMessage}</h5>
      <button
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "#fff",
          background: "transparent",
          border: "1px solid #5A4041",
          cursor: "pointer",
        }}
        onClick={closeToastHandler}
      >
        X
      </button>
    </div>
  );
};
