import React from "react";
import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import Restaurants from "./Restaurants";
import {
  modalState,
  restaurantState,
  userState,
  userModalState,
  AdminModalState,
} from "@atoms";
import { User } from "@types";
import { defaultUser } from "../../atoms/User";

const container: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  backgroundColor: "white",
  border: "2px solid black",
  borderRadius: "10px",
  zIndex: 1000,
  height: "60vh",
  overflowY: "scroll",
  padding: "20px",
};

function UsersPage() {
  const [user, setUser] = useRecoilState(userState);
  const [userModalVisibility, setUserModalVisibility] =
    useRecoilState(userModalState);
  const [modalVisibility, setModalVisibility] = useRecoilState(modalState);
  const restaurant = useRecoilValue(restaurantState);
  const [AdminModal, setAdminModal] = useRecoilState<boolean>(AdminModalState);

  const onClose = () => {
    setModalVisibility(!modalVisibility);
    setUser(defaultUser);

    console.log(restaurant.Users);
  };

  const onClick = (user: User) => {
    setUser(user);
    console.log(user);
    // setUserModalVisibility(true);
    setAdminModal(true);
  };

  return (
    <Box>
      <Restaurants />
      <Modal open={modalVisibility} onClose={onClose}>
        <Box style={container}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="center">username</TableCell>
                  <TableCell align="center">active status</TableCell>
                  <TableCell align="left">phone number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {restaurant.Users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={(e) => onClick(user)}
                    >
                      {user.id}
                    </TableCell>
                    <TableCell align="center">{user.username}</TableCell>
                    <TableCell align="center">{`${user.active}`}</TableCell>
                    <TableCell align="left">{user.phoneNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

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
            onClick={(e) => onClick(defaultUser)}
          >
            +
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}

export default UsersPage;
