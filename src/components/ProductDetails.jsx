import { useParams } from "react-router";
import { items } from "../reducers/products-reducer.js";
import { useTheme } from "../Contexts/theme-context";
import { useData } from "../Contexts/data-context";
import { Toast } from "./Toast";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { theme } = useTheme();
  const {
    state: { toastMessage },
    dispatch,
  } = useData();

  const getProductDetails = (products, productId) => {
    return products.find((product) => product.id === productId);
  };

  const product = getProductDetails(items, productId);

  const { name, image, price, description } = product;

  return (
    <>
      {toastMessage && <Toast />}
      <div
        className="product-card-div m-1rem"
        style={{
          border: `1px solid ${theme.color}`,
          height: "25rem",
          width: "30rem",
          cursor: "pointer",
          marginLeft: "2.5rem",
        }}
      >
        <div className="product-image-div">
          <img
            className="item-image"
            style={{ width: "29.9rem", height: "10rem" }}
            src={image}
          />
        </div>
        <div className="product-description-div">
          <p>{description}</p>
        </div>
        <div style={{ margin: "1rem" }}>
          <h4>{name}</h4>
          <p style={{}}>Rs. {price}</p>

          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            style={{
              width: "9rem",
              marginLeft: "5rem",
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
              marginLeft: "3rem",
              color: "#5A4041",
              borderRadius: "0.25rem",
              border: "1px solid #5A4041",
              height: "2rem",
              cursor: "pointer",
            }}
          >
            Add To Wish List
          </button>
        </div>
      </div>
    </>
  );
};
