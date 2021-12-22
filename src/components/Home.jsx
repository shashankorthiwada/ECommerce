import mainImage from "../images/main-image.svg";
import { NavLink } from "react-router-dom";
import "../App.css";

export const Home = () => {
  return (
    <>
      <div style={{ position: "relative", height: "83.2vh" }}>
        <NavLink to="/products">
          <img
            src={mainImage}
            alt="item"
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
              top: "88%",
              left:"45%",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#5A4041",
            }}
          >
            Show Products
          </button>
        </NavLink>
      </div>
    </>
  );
};
