import axiosInstance from "utils/axiosInstance";

import { IFormInputs, IFormOneInput } from 'interfaces';

export const isCreatedUser = (data: IFormOneInput) => axiosInstance.post("/auth/", data);
export const registerUser = (data: IFormInputs) =>
  axiosInstance.post("/auth/registration", data);
export const loginUser = (data: IFormInputs) => axiosInstance.post("/auth/login", data);
export const initialize = (data: string) => axiosInstance.post("/auth/init", data)