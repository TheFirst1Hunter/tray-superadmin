import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { LinkButtonProps } from "../../types/LinkButton";
import "./style.css";

function LinkButton(props: LinkButtonProps) {
  const { emoji, text, path } = props;

  return (
    <Link to={path}>
      <div className="link-button">
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <p
              style={{
                textAlign: "center",
                color: "black",
              }}
            >
              {text}
            </p>
          </Grid>

          <Grid item xs={6}>
            <p>{emoji}</p>
          </Grid>
        </Grid>
      </div>
    </Link>
  );
}

export default LinkButton;
