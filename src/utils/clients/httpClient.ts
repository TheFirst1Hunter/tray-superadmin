import axios from "axios";
import token from "../token";
import { LoginResponse } from "../../types/Login";

const { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken } =
  token();

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    authorization: `Bearer ${getAccessToken()}`,
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      httpClient
        .post("/users/refresh-tokens", {
          refreshToken: getRefreshToken(),
        })
        .then((res) => {
          const result: LoginResponse = res.data;
          setAccessToken(result.tokens.access);
          setRefreshToken(result.tokens.refresh);
        })
        .catch((err) => {
          localStorage.clear();
          window.location.reload();
        });

      //
    }
    return Promise.reject(error);
  }
);
