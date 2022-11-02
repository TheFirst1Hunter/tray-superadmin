import React from "react";
import { RecoilRoot } from "recoil";
import { Grid, Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, ErrorHandler } from "@components";
import { Restaurants } from "./components/pages";
import RestaurantModal from "./components/pages/RestaurantModal";
import { Login } from "./components/pages";
import { theme, token } from "@utils";
import { UsersPage, AdminModal } from "@components/pages";
import Form from "./components/forms/Admin-form";

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
                            {/* <Form /> */}
                            <RestaurantModal />
                            <Restaurants />
                          </>
                        }
                      ></Route>
                      <Route
                        path="/admins"
                        element={
                          <>
                            <UsersPage /> <AdminModal />
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
