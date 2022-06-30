import React from "react";
import { Alert } from "@mui/material";
import { useRecoilState } from "recoil";
import { errorState } from "@atoms";

function ErrorHandler() {
  const [error, setError] = useRecoilState<string>(errorState);

  if (error !== "") {
    setTimeout(() => {
      setError("");
    }, 5000);
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0%",
        width: "100%",
        zIndex: 1000,
      }}
    >
      {error !== "" && <Alert severity="error">{error}</Alert>}
    </div>
  );
}

export default ErrorHandler;
