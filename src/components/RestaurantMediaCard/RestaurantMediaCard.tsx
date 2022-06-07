import React from "react";
import { useRecoilState } from "recoil";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Restaurant } from "./types";
import { modalState } from "../restaurantModal/atom";
import { restaurantState } from "./atom";

function RestaurantMediaCard(props: Restaurant) {
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
    </div>
  );
}

export default RestaurantMediaCard;
