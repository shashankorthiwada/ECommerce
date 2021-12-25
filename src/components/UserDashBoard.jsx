import { useState } from "react";
import { useAuthContext } from "../Contexts/auth-context";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export const UserDashBoard = () => {
  const [loader, showLoader] = useState(false);
  const {
    userDetails: { username, email, phonenumber },
    logOutUser,
  } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    showLoader(true);
    setTimeout(() => {
      logOutUser();
      showLoader(false);
    }, 2000);
  };

  return (
    <>
      <div style={{ maxWidth: "40rem" }}>
        <div
          style={{
            border: "1px solid black",
            margin: "1rem",
            padding: "1rem",
            width: "100%",
            marginLeft: "60%",
          }}
        >
          <p style={{ padding: "0.3rem" }}>
            Hello <b>{username}</b>
          </p>
          <small style={{ padding: "0.3rem" }}>{email}</small>
          <small style={{ padding: "0.3rem" }}>{phonenumber}</small>
        </div>

        <div style={{ display: "flex", width: "100%", marginLeft: "80%" }}>
          <div
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem",
              cursor: "pointer",
            }}
          >
            <p>Orders</p>
          </div>
          <div
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            <p>Wishlist</p>
          </div>
          <div
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <p>Cart</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "40rem" }}>
        <button
          className="button primary-button"
          style={{
            width: "100%",
            marginLeft: "60%",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#5A4041",
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
      {loader && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
          <Loader type="Oval" color="#5A4041" height={80} width={80} />
        </div>
      )}
    </>
  );
};
