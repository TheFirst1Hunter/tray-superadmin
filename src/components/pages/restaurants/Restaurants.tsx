import React from "react";
import { Box, Grid } from "@mui/material";
import { MediaCard } from "../..";

function Restaurants(props: any) {
  const { restaurants } = props;
  return (
    <div
      style={{
        padding: "20px 20px 20px 20px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {restaurants.map((restaurant: any) => (
            <Grid item xs={4}>
              <MediaCard
                key={restaurant.id}
                img={restaurant.img}
                description={restaurant.description}
                title={restaurant.name}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Restaurants;
