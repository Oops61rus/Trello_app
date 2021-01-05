import axios from "axios";
import { logOut } from 'core/store/auth/actions';
import { baseURL } from './variables';

const axiosInstance = axios.create({
  baseURL: baseURL + 'api/v1'
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

    if(localStorage.getItem('token')) {
      config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }

    return config;
  },
  function (error) {
    return Promise.reject(error)
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response.status === 401) {
      logOut();
    } else {
      return Promise.reject(error)
    }
  }
)

export default axiosInstance;
