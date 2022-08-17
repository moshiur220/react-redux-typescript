import axios from "axios";
import { baseUrl, getAuthUser } from "./url";
const token = getAuthUser();
export const instance = axios.create({
  //   validateStatus: function (status) {
  //     return status >= 200 && status < 399;
  //   },
  //   baseURL: baseUrl,
  //   headers: { "Access-Control-Allow-Origin": "*" },
});

if (token) {
  instance.defaults.headers.common[
    "authorization"
  ] = `Bearer ${token.access_token}`;
}

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 402) {
      localStorage.clear();
      window.location.href = window.location.origin + "/login";
    }
    return Promise.reject(error);
  }
);
export default instance;
