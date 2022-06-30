import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { Grid, Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, ErrorHandler } from "@components";
import Restaurants from "./components/pages/restaurants";
import RestaurantModal from "./components/pages/restaurantModal/RestaurantModal";
import Login from "./components/pages/login";
import { theme, token } from "@utils";
import UsersPage from "./components/pages/usersPageModal/UsersPage";

function App() {
  const { getAccessToken, getRefreshToken } = token();

  const loggedIn = getAccessToken() !== null;
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Router>
            {!loggedIn && <Login />}
            {loggedIn && (
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <NavBar />
                  </Grid>
                  <Grid item xs={10}>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <>
                            {/* <UsersPage /> */}
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
            <ErrorHandler />
          </Router>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
