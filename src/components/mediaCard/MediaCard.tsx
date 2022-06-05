import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardProp } from "./types";

function MediaCard(props: CardProp) {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default MediaCard;
