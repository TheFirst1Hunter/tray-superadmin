import React, { useState, useEffect } from "react";
import { Box, Grid, CircularProgress, IconButton } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { getRestaurant } from "@API/restaurant";
import { Restaurant } from "@types";
import { MediaCard } from "..";
import {
  errorState,
  restaurantsArrayState,
  restaurantState,
  modalState,
} from "@atoms";
import { defaultRestaurant } from "../../atoms/Restaurant";

function Restaurants() {
  const [error, setError] = useRecoilState<string>(errorState);
  // const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [restaurantData, setRestaurantData] = useRecoilState(restaurantState);
  const [modalStateVisibility, setModalVisibility] =
    useRecoilState<boolean>(modalState);
  const [restaurants, setRestaurant] = useRecoilState(restaurantsArrayState);

  useEffect(() => {
    try {
      (async () => {
        const result = await getRestaurant();

        setRestaurant(result.data);
      })();
    } catch (error: any) {
      setError(error.response.data.detail);
    }
  }, []);

  return (
    <>
      <div style={{ position: "absolute", top: "45%", left: "45%" }}>
        {restaurants.length === 0 && <CircularProgress />}
      </div>

      <div
        style={{
          padding: "20px 20px 20px 20px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {restaurants.map((restaurant: Restaurant, index) => (
              <Grid item xs={4}>
                <MediaCard key={`${index}`} {...restaurant} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <IconButton
          aria-label="delete"
          size="large"
          color="error"
          sx={{
            position: "fixed",
            right: "6%",
            bottom: "10%",
            width: "60px",
            border: "1px solid red",
            backgroundColor: "white",
          }}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            setRestaurantData(defaultRestaurant);
            setModalVisibility(true);
          }}
        >
          +
        </IconButton>
      </div>
    </>
  );
}

export default Restaurants;
