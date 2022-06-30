import React from "react";
import { useRecoilState } from "recoil";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MediaCard as MediaCardType } from "../../types/MediaCard";
import { modalState } from "../../atoms/Modal";
import { restaurantState } from "../../atoms";
import { Restaurant } from "../../types/Restaurant";

function MediaCard(props: Restaurant) {
  const [modalStateValue, setModalStateValue] =
    useRecoilState<boolean>(modalState);

  const [restaurantData, setRestaurantData] = useRecoilState(restaurantState);

  const handleClick = (event: React.MouseEvent) => {
    setModalStateValue(!modalStateValue);

    // (async () => {
    // const result = await getSingleRestaurant(props.id as string);

    setRestaurantData(props);

    // })();
  };

  return (
    <div onClick={handleClick}>
      <Card>
        <CardMedia
          component="img"
          height="100%"
          image={props.image}
          alt="green iguana"
          sx={{ backgroundColor: props.colors[0] }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description.en}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default MediaCard;
