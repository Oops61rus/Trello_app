import { isCreatedUser } from "../../../api/userApi";
import { useHistory } from "react-router-dom";

export const CHECK_USER = "CHECK_USER";
export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";

export const checkUser = (data) => async (dispatch) => {
  const history = useHistory();
  console.log(2);
  try {
    const response = await isCreatedUser(data);
    dispatch({ type: CHECK_USER, payload: response.data });
    history.push("/login");
  } catch (err) {
    console.log(err);
    history.push("/registration");
  }
};
