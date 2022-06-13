import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { Grid, Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, ErrorHandler } from "./components";
import Restaurants from "./components/pages/restaurants";
import RestaurantModal from "./components/pages/restaurantModal/RestaurantModal";
import Login from "./components/pages/login";
import { theme, token } from "./utils";

function App() {
  const { getAccessToken, getRefreshToken } = token();

  console.log(getRefreshToken());

  const loggedIn = getAccessToken() !== null;
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Router>
            <ErrorHandler />
            {!loggedIn && <Login />}
            {loggedIn && (
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
                            <Restaurants />
                          </>
                        }
                      ></Route>
                    </Routes>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Router>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
