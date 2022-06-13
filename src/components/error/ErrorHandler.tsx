import React from "react";
import { Alert } from "@mui/material";
import { useRecoilState } from "recoil";
import { errorState } from "./atom";

function ErrorHandler() {
  const [error, setError] = useRecoilState<string>(errorState);

  if (error !== "") {
    setTimeout(() => {
      setError("");
    }, 5000);
  }

  return (
    <div style={{ position: "absolute", bottom: "0%", width: "100%" }}>
      {error !== "" && <Alert severity="error">{error}</Alert>}
    </div>
  );
}

export default ErrorHandler;
