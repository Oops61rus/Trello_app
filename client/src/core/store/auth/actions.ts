import { push } from "connected-react-router";
import { Dispatch } from 'redux';

import { isCreatedUser, registerUser } from "api/userApi";
import { IFormInputs, IFormOneInput } from 'types';

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

export const signUp = (data: IFormInputs) => async (dispatch: Dispatch) => {
  try {
    console.log(data)
    const response = await registerUser(data);
    dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
    setToken(response.data)
  } catch (err) {
    console.log(err)
  }
}


export const setToken = (data: {token: string}) => {
  localStorage.setItem('token', data.token)
}

export const logOut = () => {
  clearStorage();
  push("/");
}

export const clearStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("profileId");
  localStorage.removeItem("profileName");
  localStorage.removeItem("profileEmail");
}