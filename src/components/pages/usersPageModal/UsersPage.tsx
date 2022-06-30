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
import Restaurants from "../restaurants";
import { modalState, restaurantState } from "@atoms";
import "./style.css";

function UsersPage() {
  const [modalVisibility, setModalVisibility] = useRecoilState(modalState);
  const restaurant = useRecoilValue(restaurantState);

  const onClose = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <div>
      <Restaurants />
      <Modal open={modalVisibility} onClose={onClose} className="user-modal">
        <div>{restaurant.Users[0].password}</div>
      </Modal>
    </div>
  );
}

export default UsersPage;
