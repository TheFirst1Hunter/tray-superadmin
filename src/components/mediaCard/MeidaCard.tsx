import React from "react";
import { useRecoilState } from "recoil";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MediaCard as MediaCardType } from "./types";
import { modalState } from "../pages/restaurantModal/atom";
import { restaurantState } from "./atom";

function MediaCard(props: MediaCardType) {
  const [modalStateValue, setModalStateValue] =
    useRecoilState<boolean>(modalState);

  const [restaurantData, setRestaurantData] = useRecoilState(restaurantState);

  const handleClick = (event: React.MouseEvent) => {
    setModalStateValue(!modalStateValue);
    setRestaurantData(props);
  };

  return (
    <div onClick={handleClick}>
      <Card>
        <CardMedia
          component="img"
          height="100%"
          image={props.img}
          alt="green iguana"
          sx={{ backgroundColor: props.color }}
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
    </div>
  );
}

export default MediaCard;
