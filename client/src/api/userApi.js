import axiosInstance from "../utils/axiosInstance";

export const isCreatedUser = ({ data }) => axiosInstance.post("/auth/", { data });
export const registerUser = ({ data }) => axiosInstance.post("/auth/registration", { data });
export const loginUser = ({ data }) => axiosInstance.post("/auth/login", { data });
