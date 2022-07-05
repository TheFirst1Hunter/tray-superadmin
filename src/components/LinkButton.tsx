import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { LinkButtonProps } from "@types";

const container: React.CSSProperties = {
  padding: "10px 10px 10px 10px",
  backgroundColor: "white",
  border: "1px",
  borderStyle: "solid",
  borderColor: "black",
  borderRadius: "50px",
  height: "50px",
};

function LinkButton(props: LinkButtonProps) {
  const { emoji, text, path } = props;

  return (
    <Link to={path}>
      <div style={container}>
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
