import React, { useState, useEffect } from "react";
import { RecoilRoot } from "recoil";
import { Grid, Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import Restaurants from "./components/pages/restaurants";
import RestaurantModal from "./components/restaurantModal/RestaurantModal";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <NavBar />
              </Grid>
              <Grid item xs={9}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <RestaurantModal />
                        <Restaurants
                          restaurants={[
                            {
                              id: "1",
                              name: "f",
                              description: "Ffe",
                              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.YYi9Wm-SiOrunvCAf2IXXQHaHa%26pid%3DApi&f=1",
                            },
                            {
                              id: "2",
                              name: "fd",
                              description: "Fddfe",
                              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.YYi9Wm-SiOrunvCAf2IXXQHaHa%26pid%3DApi&f=1",
                            },
                            {
                              id: "2",
                              name: "fd",
                              description: "Fddfe",
                              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.YYi9Wm-SiOrunvCAf2IXXQHaHa%26pid%3DApi&f=1",
                            },
                            {
                              id: "2",
                              name: "fd",
                              description: "Fddfe",
                              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.YYi9Wm-SiOrunvCAf2IXXQHaHa%26pid%3DApi&f=1",
                            },
                            {
                              id: "2",
                              name: "fd",
                              description: "Fddfe",
                              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.YYi9Wm-SiOrunvCAf2IXXQHaHa%26pid%3DApi&f=1",
                            },
                          ]}
                        ></Restaurants>
                      </>
                    }
                  ></Route>
                </Routes>
              </Grid>
            </Grid>
          </Box>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
