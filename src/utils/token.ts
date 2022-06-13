export default function useToken() {
  const getAccessToken = (): string | null => {
    const tokenString = localStorage.getItem("access-token");
    return tokenString;
  };

  const getRefreshToken = (): string | null => {
    const tokenString = localStorage.getItem("refresh-token");
    return tokenString;
  };

  const saveAccessToken = (userToken: string) => {
    localStorage.setItem("token-access", userToken);
  };

  const saveRefreshToken = (userToken: string) => {
    localStorage.setItem("token-refresh", userToken);
  };

  return {
    setAccessToken: saveAccessToken,
    setRefreshToken: saveRefreshToken,
    getAccessToken,
    getRefreshToken,
  };
}
