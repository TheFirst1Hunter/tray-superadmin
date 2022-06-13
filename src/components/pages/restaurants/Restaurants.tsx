import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { getRestaurant } from "./helpers";
import { Restaurant } from "./types";
import { MediaCard } from "../..";
import { errorState } from "../../error/atom";

function Restaurants() {
  const [error, setError] = useRecoilState<string>(errorState);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    try {
      (async () => {
        const result = await getRestaurant();

        setRestaurants(result.data);
      })();
    } catch (error: any) {
      setError(error.response.data.detail);
    }
  }, []);

  return (
    <div
      style={{
        padding: "20px 20px 20px 20px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {restaurants.map((restaurant: Restaurant) => (
            <Grid item xs={4}>
              <MediaCard
                key={restaurant.id}
                img={restaurant.image}
                description={restaurant.description.en}
                title={restaurant.name}
                color={restaurant.colors[0]}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Restaurants;
