import React from "react";
import { Grid } from "@mui/material";
import { logout } from "./helpers";
import "./NavBar.css";
import LinkButton from "../linkButton";

function NavBar() {
  return (
    <div className="nav-bar">
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
            <LinkButton text="mail" path="instagram.com" emoji={"🤔"} />
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
