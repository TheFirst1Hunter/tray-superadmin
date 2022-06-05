import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { LinkButtonProps } from "./types";
import "./style.css";

function LinkButton(props: LinkButtonProps) {
  const { emoji, text, path } = props;

  return (
    <div className="container">
      <Link to={path}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <p
              style={{
                textAlign: "center",
              }}
            >
              {text}
            </p>
          </Grid>

          <Grid item xs={6}>
            <p>{emoji}</p>
          </Grid>
        </Grid>
      </Link>
    </div>
  );
}

export default LinkButton;
