import { useState } from "react";
import { useAuthContext } from "../Contexts/auth-context";
import { NavLink } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [ErrorMsg, setErrorMsg] = useState("");
  const [showMsg, setShowMsg] = useState(true);
  const {
    userDetailsDispatch,
    userDetails: { username, password, email, phonenumber },
    loader,
    showLoader,
    signUpNewUser,
    userData,
  } = useAuthContext();
  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    showLoader(true);
    e.preventDefault();
    const res = await signUpNewUser(username, password, email, phonenumber);
    showLoader(false);
    if (!res.success) {
      setErrorMsg(res.message);
    } else {
      setShowMsg(true);
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
      <h2 style={{ marginLeft: "4rem" }}>Sign Up</h2>
      {!showMsg && (
        <>
          <form
            className="content-div width-fit m-1rem"
            onSubmit={signUpHandler}
          >
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
            <div className="input-div m-1rem">
              <i className="fas fa-envelope"></i>
              <input
                className="input"
                style={{ marginLeft: "1rem" }}
                type="text"
                value={email}
                onChange={(e) =>
                  userDetailsDispatch({
                    type: "SET_EMAIL",
                    payload: e.target.value,
                  })
                }
                placeholder="Email"
              />
            </div>
            <div className="input-div m-1rem">
              <i className="fas fa-mobile"></i>
              <input
                className="input"
                style={{ marginLeft: "1rem" }}
                type="text"
                value={phonenumber}
                onChange={(e) =>
                  userDetailsDispatch({
                    type: "SET_PHONE",
                    payload: e.target.value,
                  })
                }
                placeholder="Phone Number"
              />
            </div>
            <div className="input-div m-1rem">
              <i className="fas fa-lock"></i>
              <input
                className="input"
                style={{ marginLeft: "1rem" }}
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
              Register
            </button>
            {ErrorMsg && <p>{ErrorMsg}</p>}
          </form>
          <b>
            Already a member?{" "}
            <NavLink to="/login">
              <button
                className="button primary-button"
                style={{
                  top: "27rem",
                  width: "5rem",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#5A4041",
                }}
              >
                Login
              </button>
            </NavLink>
          </b>
        </>
      )}
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
      {showMsg && (
        <div style={{ padding: "1rem" }}>
          <p style={{ padding: "1rem" }}>
            Hi <b>{userData.name}</b>, thank you for signing up
          </p>
          <button
            className="button primary-button"
            style={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "#5A4041",
              marginLeft: "20%",
            }}
            onClick={() => navigate("/products")}
          >
            Show Products
          </button>
        </div>
      )}
    </div>
  );
};
