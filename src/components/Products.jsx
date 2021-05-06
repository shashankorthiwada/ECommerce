import { useTheme } from "../Contexts/theme-context";
import { useData } from "../Contexts/data-context";
import { Link } from "react-router-dom";

export const Products = ({ product }) => {
  const { theme } = useTheme();
  const { dispatch } = useData();

  const { name, image, _id, price } = product;

  return (
    <div
      className="product-card-div m-1rem"
      style={{
        border: `1px solid ${theme.color}`,
        height: "32rem",
        width: "17rem",
        cursor: "pointer",
      }}
    >
      <div className="product-image-div">
        <img className="item-image" style={{ width: "16.9rem" }} src={image} />
      </div>

      <div style={{ margin: "1rem" }}>
        <h4>{name}</h4>
        <p style={{ padding: "0.3rem" }}>Rs. {price}</p>

        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          style={{
            width: "9rem",
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

        <button
          onClick={() =>
            dispatch({ type: "ADD_TO_WISH_LIST", payload: product })
          }
          style={{
            width: "9rem",
            margin: "0.2rem auto 0.7rem 3rem",
            color: "#5A4041",
            borderRadius: "0.25rem",
            border: "1px solid #5A4041",
            height: "2rem",
            cursor: "pointer",
          }}
        >
          Add To Wish List
        </button>
        <Link
          to={`/product/${_id}`}
          style={{ color: "#5A4041", padding: "3rem" }}
        >
          Details
        </Link>
      </div>
    </div>
  );
};
