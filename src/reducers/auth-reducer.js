import { initialUserState } from "../Contexts/auth-context";

export const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };

    case "SET_PASSWORD":
      return { ...state, password: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "SET_PHONE":
      return { ...state, phonenumber: action.payload };

    default:
      return { initialUserState };
  }
};
