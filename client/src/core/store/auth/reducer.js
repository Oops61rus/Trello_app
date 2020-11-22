import { CHECK_USER, AUTH_USER_SUCCESS } from "./actions";

const initialState = {
  email: "",
  name: "",
  id: "",
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHECK_USER:
      return {
        ...state,
        email: payload.email,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        email: payload.email,
        name: payload.name,
        id: payload.id,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
