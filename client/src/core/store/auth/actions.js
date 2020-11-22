import { isCreatedUser } from "../../../api/userApi";
// import history from "../../../utils/history";
// import { history } from "../index";
import { push } from "connected-react-router";

export const CHECK_USER = "CHECK_USER";
export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";

export const checkUser = (data) => async (dispatch) => {
  try {
    const response = await isCreatedUser(data);
    dispatch({ type: CHECK_USER, payload: response.data });
    // history.push("/login");
    dispatch(push("/login"));
  } catch (err) {
    console.log(err);
    // history.push("/registration");
    dispatch(push("/registration"));
  }
};
