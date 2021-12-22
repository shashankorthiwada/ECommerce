import { useState } from "react";
import { useAuthContext } from "../Contexts/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";

export const Login = () => {
  const [ErrorMsg, setErrorMsg] = useState("");
  const {
    loginUserWithCredentials,
    userDetailsDispatch,
    userDetails: { username, password },
    loader,
    showLoader,
  } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    showLoader(true);
    const res = await loginUserWithCredentials(username, password, state);
    showLoader(false);
    if (!res.success) {
      setErrorMsg(res.message);
    } else {
      navigate(state?.from ? state.from : "/products");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <h2 style={{ marginLeft: "4rem" }}>Login to continue!</h2>
      <form className="content-div width-fit m-1rem" onSubmit={loginHandler}>
        <div className="input-div m-1rem">
          <i className="fas fa-user"></i>
          <input
            className="input"
            style={{ marginLeft: "1rem" }}
            type="text"
            value={username}
            onChange={(e) =>
              userDetailsDispatch({
                type: "SET_USERNAME",
                payload: e.target.value,
              })
            }
            placeholder="Username"
          />
        </div>
        <div className="input-div" style={{ marginLeft: "1rem" }}>
          <i className="fas fa-lock"></i>
          <input
            className="input"
            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
            type="password"
            value={password}
            onChange={(e) =>
              userDetailsDispatch({
                type: "SET_PASSWORD",
                payload: e.target.value,
              })
            }
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="button primary-button"
          style={{
            top: "27rem",
            width: "5rem",
            marginLeft: "6rem",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#5A4041",
          }}
        >
          Login
        </button>
        {ErrorMsg && <p>{ErrorMsg}</p>}
      </form>

      <div className="signup-container">
        <b style={{ marginLeft: "4rem" }}>Not a member? </b>
        <button
          className="button primary-button"
          style={{
            top: "27rem",
            width: "5rem",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#5A4041",
          }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
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
    </div>
  );
};
