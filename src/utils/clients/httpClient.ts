import axios from "axios";
import token from "../token";
import { LoginResponse } from "../../components/pages/login/types";

const { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken } =
  token();

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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
          console.log(res);
          setAccessToken(result.tokens.access);
          setRefreshToken(result.tokens.refresh);
        })
        .catch((err) => {
          localStorage.clear();
          window.location.reload();
        });

      //
    }
  }
);
