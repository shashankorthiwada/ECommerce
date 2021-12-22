import {
  createContext,
  useContext,
  // useEffect,
  useReducer,
  useState,
} from "react";
import { userDetailsReducer } from "../reducers/auth-reducer";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const initialUserState = {
  username: "",
  password: "",
  email: "",
  phonenumber: "",
};

export function AuthProvider({ children }) {
  const { isUserLoggedIn, token } = JSON.parse(
    localStorage?.getItem("login")
  ) || { isUserLoggedIn: false, token: null };

  const [login, setLogin] = useState(isUserLoggedIn);
  const [userDetails, userDetailsDispatch] = useReducer(
    userDetailsReducer,
    initialUserState
  );
  const [userData, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );
  const [loader, showLoader] = useState(false);

  const setUpAuthHeaderForServiceCalls = (token) => {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  };

  token && setUpAuthHeaderForServiceCalls(token);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setupAuthExceptionHandler();
  // }, [token]);

  // function setupAuthExceptionHandler() {
  //   console.log("ostundi");
  //   const UNAUTHORIZED = 401;
  //   axios.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error?.response?.status === UNAUTHORIZED) {
  //         logOutUser();
  //         navigate("login");
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }

  const loginUserWithCredentials = async (username, password) => {
    try {
      const { data } = await axios.post(
        "https://halwaai-ecommerce-backend.herokuapp.com/users/login",
        {
          username: username.toLowerCase(),
          password: password,
        }
      );
      if (data) {
        loginUser(data);
      }

      return data;
    } catch (error) {
      const errorResponse = JSON.stringify(error.response.data);
      console.error(errorResponse);
      return error.response.data;
    }
  };

  const signUpNewUser = async (username, password, email, phonenumber) => {
    try {
      const { data } = await axios.post(
        "https://halwaai-ecommerce-backend.herokuapp.com/users/signup",
        {
          username: username.toLowerCase(),
          password,
          email: email.toLowerCase(),
          phonenumber,
        }
      );
      // console.log("data from signup: ", data);
      if (data) {
        loginUser(data);
      }
      return data;
    } catch (error) {
      const errorResponse = JSON.stringify(error);
      console.error(errorResponse);
      return error;
    }
  };

  const loginUser = ({ token, user }) => {
    setLogin(true);
    localStorage?.setItem(
      "login",
      JSON.stringify({ isUserLoggedIn: true, token })
    );
    setUpAuthHeaderForServiceCalls(token);
    setUser(user);
    localStorage.setItem("userData", JSON.stringify(user));
  };

  const logOutUser = () => {
    setLogin(false);
    setUser("");
    setUpAuthHeaderForServiceCalls(null);
    localStorage.removeItem("login");
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        loginUserWithCredentials,
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
