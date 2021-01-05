import { push } from "connected-react-router";
import { Dispatch } from 'redux';

import { initialize, isCreatedUser, loginUser, registerUser } from "api/userApi";
import { IFormInputs, IFormOneInput, IServerResponse } from 'interfaces';

export const CHECK_USER: string = "CHECK_USER";
export const AUTH_USER_SUCCESS: string = "AUTH_USER_SUCCESS";
export const INVALID_TOKEN: string = "INVALID_TOKEN";

export const checkUser = (data: IFormOneInput) => async (dispatch: Dispatch) => {
  try {
    const response = await isCreatedUser(data);
    dispatch({ type: CHECK_USER, payload: response.data });
    dispatch(push("/login"));
  } catch (error) {
    dispatch({ type: CHECK_USER, payload: error.response.data });
    dispatch(push("/registration"));
  }
};

export const signUp = (data: IFormInputs) => async (dispatch: Dispatch) => {
  try {
    const response = await registerUser(data);
    console.log(response)
    dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
    setDataInLocalStorage(response.data)
  } catch (err) {
    console.log(err)
  }
}

export const signIn = (data: IFormInputs) => async (dispatch: Dispatch) => {
  try {
    const response = await loginUser(data)
    console.log(response)
    dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
    setDataInLocalStorage(response.data)
  } catch (err) {
    console.log(err)
  }
}

export const initialRequest = () => async (dispatch: Dispatch) => {
  console.log(222)
  try {
    const token: string | null = localStorage.getItem('token');
    if (!token) throw new Error('Token not found');
    const res = await initialize(token)
    console.log(res)
  } catch (error) {
    console.log(1, error)
    clearStorage();
    dispatch({ type: INVALID_TOKEN })
  }
} 

export const setDataInLocalStorage = (data: IServerResponse) => {
  localStorage.setItem('token', data.token);
  localStorage.setItem('profileEmail', data.email);
  localStorage.setItem('profileName', data.name);
  localStorage.setItem('profileId', data.id);
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