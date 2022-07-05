import React from "react";
import { Grid } from "@mui/material";
import { logout } from "@utils";
import LinkButton from "./LinkButton";

const container: React.CSSProperties = {
  height: "100vh",
  width: "15vw",
  backgroundColor: "#ff0000",
  overflow: "auto",
  border: "1px",
  borderStyle: "solid",
  borderColor: "black",
  borderRadius: "0px 30px 30px 0px",
  zIndex: 1000,
  padding: "10px",
  position: "fixed",
};

function NavBar() {
  return (
    <div style={container}>
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={3}>
          <div
            style={{
              padding: "10px 10px 10px 10px",
            }}
          >
            <LinkButton text="restaurants" path="/" emoji={"🍽️"} />
          </div>
        </Grid>

        <Grid item xs={3}>
          <div
            style={{
              padding: "10px 10px 10px 10px",
            }}
          >
            <LinkButton text="admins" path="/admins" emoji={"🤔"} />
          </div>
        </Grid>

        <Grid item xs={3}>
          <button onClick={logout}>logout</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavBar;
