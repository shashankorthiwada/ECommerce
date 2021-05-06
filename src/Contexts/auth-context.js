import { createContext, useContext, useReducer, useState } from "react";
import { userDetailsReducer } from "../reducers/auth-reducer";
import axios from "axios";

export const AuthContext = createContext();

export const initialUserState = {
  username: "",
  password: "",
  email: "",
  phonenumber: "",
};

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(localStorage.getItem("login") || false);
  const [userDetails, userDetailsDispatch] = useReducer(
    userDetailsReducer,
    initialUserState
  );
  const [userData, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );
  const [loader, showLoader] = useState(false);

  const loginUser = async (username, password) => {
    try {
      const { data } = await axios.post("http://localhost:3001/users/login", {
        username: username.toLowerCase(),
        password: password,
      });
      // if (user) {
      setLogin(true);
      localStorage.setItem("login", login);
      setUser(data.user);
      localStorage.setItem("userData", JSON.stringify(data.user));
      return data;
      // }
    } catch (error) {
      const errorResponse = JSON.stringify(error.response.data);
      console.error(errorResponse);
      return error.response.data;
    }
  };

  const logOutUser = () => {
    setLogin(false);
    setUser("");
    localStorage.removeItem("login");
    localStorage.removeItem("userData");
  };

  const signUpNewUser = async (username, password, email, phonenumber) => {
    try {
      const { data } = await axios.post("http://localhost:3001/users/signup", {
        username: username.toLowerCase(),
        password,
        email: email.toLowerCase(),
        phonenumber,
      });
      setLogin(true);
      localStorage.setItem("login", login);
      setUser(data.user);
      localStorage.setItem("userData", JSON.stringify(data.user));
      return data;
    } catch (error) {
      const errorResponse = JSON.stringify(error.response.data);
      console.error(errorResponse);
      return error.response.data;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        loginUser,
        logOutUser,
        signUpNewUser,
        userDetails,
        userDetailsDispatch,
        userData,
        loader,
        showLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
