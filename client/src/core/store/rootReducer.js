import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "../store/auth/reducer";

const rootReducer = (history) =>
  combineReducers({
    authReducer,
    router: connectRouter(history),
  });

export default rootReducer;
