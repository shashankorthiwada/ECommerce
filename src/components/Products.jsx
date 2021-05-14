import { Link } from "react-router-dom";
import { useCart } from "../Contexts/cart-context";

export const Products = ({ product }) => {
  const { addItemsToCart } = useCart();

  const { name, image, _id, price } = product;

  return (
    <div
      className="product-card-div m-1rem"
      style={{
        border: "1px solid black",
        height: "32rem",
        width: "17rem",
      }}
    >
      <div className="product-image-div">
        <img
          className="item-image"
          style={{ width: "16.9rem" }}
          src={image}
          alt="item"
        />
      </div>

      <div style={{ margin: "1rem" }}>
        <h4>{name}</h4>
        <p style={{ padding: "0.3rem" }}>Rs. {price}</p>

        <button
          onClick={() => addItemsToCart({ product })}
          style={{
            width: "9rem",
            marginLeft: "3rem",
            marginTop: "1rem",
            marginBottom: "1rem",
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

        <div>
          <Link
            to={`/product/${_id}`}
            style={{ color: "#5A4041", padding: "3rem" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
