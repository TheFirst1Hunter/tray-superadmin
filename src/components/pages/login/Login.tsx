import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { useRecoilState } from "recoil";
import "./style.css";
import { login } from "./helpers";
import { errorState } from "../../error/atom";
import { useToken } from "../../../utils";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>("0");
  const [password, setPassword] = useState<string>("0");
  const [error, setError] = useRecoilState<string>(errorState);
  const { setAccessToken, setRefreshToken } = useToken();

  const onClick = async () => {
    try {
      const result = await login(phoneNumber, password);

      setAccessToken(result.tokens.access);
      setRefreshToken(result.tokens.refresh);
    } catch (err: any) {
      setError(err.response.data.detail);
    }
  };

  return (
    <div className="login-container">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width="100%"
      >
        <Grid item xs={3}>
          <img
            src={require("../../../Tray-Logo.png")}
            style={{ width: "15%", marginLeft: "42%" }}
            alt=""
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            placeholder="07707176675"
            label="phone number"
            error={false}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            placeholder="12345678"
            label="password"
            error={false}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" sx={{ width: "100%" }} onClick={onClick}>
            login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
