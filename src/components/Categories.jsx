import { useRoute } from "../Contexts/route-context";
import mainImage from "../images/main-image.svg";
import { useTheme } from "../Contexts/theme-context";
import "../App.css";

export const Categories = () => {
  const { setRoute } = useRoute();
  const { theme } = useTheme();
  return (
    <>
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
            backgroundColor: "#5A4041",
          }}
          onClick={() => setRoute("products")}
        >
          Show Products
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "6rem" }}>
        <div className="category-container">
          {" "}
          <img
            src={mainImage}
            className="category-image"
            style={{
              border: `1px solid ${theme.color}`,
            }}
          />
          <div className="category-text-container">
            <div>Category 1</div>
          </div>
        </div>
        <div className="category-container">
          {" "}
          <img
            src={mainImage}
            className="category-image"
            style={{
              border: `1px solid ${theme.color}`,
            }}
          />
          <div className="category-text-container">
            <div>Category 2</div>
          </div>
        </div>
        <div className="category-container">
          {" "}
          <img
            src={mainImage}
            className="category-image"
            style={{
              border: `1px solid ${theme.color}`,
            }}
          />
          <div className="category-text-container">
            <div>Category 3</div>
          </div>
        </div>
        <div className="category-container">
          {" "}
          <img
            src={mainImage}
            className="category-image"
            style={{
              border: `1px solid ${theme.color}`,
            }}
          />
          <div className="category-text-container">
            <div>Category 4</div>
          </div>
        </div>
      </div>
    </>
  );
};
