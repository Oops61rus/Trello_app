import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "http://localhost:4000/api/v1",  // убрать в переменную
  
});

export default axiosInstance;
