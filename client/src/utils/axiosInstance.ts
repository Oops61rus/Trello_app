import axios from "axios";
import { logOut } from 'core/store/auth/actions';

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1",  // убрать в переменную
});

const CancelToken = axios.CancelToken;
let cancel: Function;

axiosInstance.interceptors.request.use(
  (config) => {
    if(cancel) {
      cancel();
    }

    config.cancelToken = new CancelToken(function executor(c) {
      cancel = c;
    });

    config.headers.authorization = localStorage.getItem('token')

    return config;
  },
  function (error) {
    return Promise.reject(error)
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.status)
    if(error.response.status === 401) {
      logOut();
    } else {
      return Promise.reject(error)
    }
  }
)


export default axiosInstance;
