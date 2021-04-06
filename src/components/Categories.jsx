import { useRoute } from "../Contexts/route-context";
import mainImage from "../images/main-image.svg";

export const Categories = () => {
  const { setRoute } = useRoute();
  return (
    <div style={{ position: "relative", height: "83.2vh" }}>
      <img
        src={mainImage}
        style={{
          width: "30rem",
          height: "30rem",
          display: "block",
          margin: "auto",
          borderRadius: "0.25rem",
        }}
      />
      <button
        className="button primary-button"
        style={{
          position: "absolute",
          top: "27rem",
          right: "35rem",
          border: "none",
          cursor: "pointer",
          backgroundColor:"#5A4041"
        }}
        onClick={() => setRoute("products")}
      >
        Show Products
      </button>
    </div>
  );
};
