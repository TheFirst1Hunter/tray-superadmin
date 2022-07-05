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
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import Restaurants from "./Restaurants";
import { modalState, restaurantState } from "@atoms";
import "./style.css";

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
  const [modalVisibility, setModalVisibility] = useRecoilState(modalState);
  const restaurant = useRecoilValue(restaurantState);

  const onClose = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <div style={container}>
      <Restaurants />
      <Modal open={modalVisibility} onClose={onClose}>
        <div>{restaurant.Users[0].password}</div>
      </Modal>
    </div>
  );
}

export default UsersPage;
