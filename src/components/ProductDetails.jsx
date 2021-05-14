import { useParams } from "react-router";
import { CartToast } from "./CartToast";
import { WishlistToast } from "./WishlistToast";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../Contexts/cart-context";
import { useWishlist } from "../Contexts/wishlist-context";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({});
  console.log(productId);

  const {
    state: { cartToastMessage },
    addItemsToCart,
  } = useCart();

  const {
    state: { wishlistToastMessage },
    addItemsToWishlist,
  } = useWishlist();

  useEffect(() => {
    async function fetchData() {
      const {
        data: { product },
      } = await axios.get(
        `https://halwaai-ecommerce-backend.herokuapp.com/products/${productId}`
      );
      setProductDetails(product);
    }
    fetchData();
  }, [productId]);

  const product = productDetails;

  const { name, image, price, description } = product;

  return (
    <>
      {cartToastMessage && <CartToast />}
      {wishlistToastMessage && <WishlistToast />}
      <div
        className="product-card-div m-1rem"
        style={{
          border: "1px solid black",
          height: "30rem",
          width: "30rem",
          cursor: "pointer",
          marginLeft: "2.5rem",
        }}
      >
        <div className="product-image-div">
          <img
            className="item-image"
            style={{ width: "29.9rem", height: "18rem" }}
            src={image}
            alt="item"
          />
        </div>
        <div className="product-description-div">
          <p>{description}</p>
        </div>
        <div style={{ margin: "1rem" }}>
          <h4>{name}</h4>
          <p style={{}}>Rs. {price}</p>

          <button
            onClick={() => addItemsToCart({ product })}
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
            onClick={() => addItemsToWishlist({ product })}
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
