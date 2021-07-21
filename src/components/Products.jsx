import { Link } from "react-router-dom";

export const Products = ({ product }) => {
  const { name, image, _id, price } = product;

  return (
    <div
      className="product-card-div m-1rem"
      style={{
        border: "1px solid black",
        height: "28rem",
        width: "17rem",
      }}
    >
      <Link to={`/product/${_id}`} style={{ color: "#5A4041", margin: 0 }}>
        <div className="product-image-div">
          <img
            className="item-image"
            style={{ width: "16.9rem" }}
            src={image}
            alt="item"
          />
        </div>
          
        <div style={{ marginLeft: "4rem" }}>
          <h4>{name}</h4>
          <p style={{ padding: "0.3rem" }}>Rs. {price}</p>
        </div>
      </Link>
    </div>
  );
};
