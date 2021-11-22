import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    config.headers = { Authorization: user?.token };
  },
  (error) => {
    return Promise.reject(error);
  }
);
