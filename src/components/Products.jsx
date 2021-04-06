import { useCart } from "../Contexts/cart-context";
import { useTheme } from "../Contexts/theme-context";

export const Products = ({ product }) => {
  const { saveItemsToCart } = useCart();
  const { theme } = useTheme();

  const { name, image, price } = product;

  return (
    <div
      className="product-card-div m-1rem"
      style={{
        border: `1px solid ${theme.color}`,
        height: "29rem",
      }}
    >
      <div className="product-image-div">
        <img className="item-image" style={{ width: "15.1rem" }} src={image} />
      </div>
      <div style={{ margin: "1rem" }}>
        <h4>{name}</h4>
        <p style={{ padding: "0.3rem" }}>Rs. {price}</p>

        <button
          onClick={() => {
            saveItemsToCart(product);
          }}
          style={{
            width: "7rem",
            marginLeft: "3rem",
            marginTop: "1rem",
            color: "#fff",
            borderRadius: "0.25rem",
            backgroundColor: "#5A4041",
            border: "1px solid #fff",
            height: "2rem",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
