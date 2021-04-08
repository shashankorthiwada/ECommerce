import { useCart } from "../Contexts/cart-context";
import { useTheme } from "../Contexts/theme-context";
import { useData } from "../Contexts/data-context";

export const Products = ({ product }) => {
  // const { saveItemsToCart } = useCart();
  const { theme } = useTheme();
  const { dispatch, itemsInCart } = useData();

  const { name, image, price } = product;

  const AddItemsToCartHandler = (product) => {
    console.log(product);
  };

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
          // onClick={() => AddItemsToCartHandler(product)}

          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
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
          Add To Cart
        </button>
      </div>
    </div>
  );
};
