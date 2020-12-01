import { push } from "connected-react-router";
import { Dispatch } from 'redux';

import { isCreatedUser } from "api/userApi";
import { IFormOneInput } from 'types';

export const CHECK_USER: string = "CHECK_USER";
export const AUTH_USER_SUCCESS: string = "AUTH_USER_SUCCESS";

export const checkUser = (data: IFormOneInput) => async (dispatch: Dispatch) => {
  try {
    console.log(data)
    const response = await isCreatedUser(data);
    dispatch({ type: CHECK_USER, payload: response.data });
    console.log(response)
    // dispatch(push("/login"));
  } catch (err) {
    console.log(err);
    dispatch(push("/registration"));
  }
};
