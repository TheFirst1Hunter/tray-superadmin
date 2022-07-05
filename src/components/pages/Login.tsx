import React, { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { login } from "@API/login";
import { errorState } from "@atoms";
import { token } from "@utils";
import trayLogo from "../../TrayLogo-01.png";

const container: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: " 50%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  border: " 5px solid #ff0000",
  borderRadius: " 25px",
  padding: " 80px 20px 80px 20px",
};

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>("0");
  const [password, setPassword] = useState<string>("0");
  const [error, setError] = useRecoilState<string>(errorState);
  const { setAccessToken, setRefreshToken } = token();

  const onClick = async () => {
    try {
      const result = await login(phoneNumber, password);

      setAccessToken(result.tokens.access);
      setRefreshToken(result.tokens.refresh);

      window.location.reload();
    } catch (err: any) {
      setError(err.response.data.detail);
    }
  };

  return (
    <div style={container}>
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
            src={trayLogo}
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
