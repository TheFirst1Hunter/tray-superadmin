import React from "react";
import { Modal, Box } from "@mui/material";
import { useRecoilValue, useRecoilState } from "recoil";
import { modalState } from "./atom";
import { restaurantState } from "../RestaurantMediaCard/atom";
import "./style.css";

function RestaurantModal() {
  const onClose = () => {
    setModalVisibility(!modalVisibility);
  };

  const restaurantData = useRecoilValue(restaurantState);

  const [modalVisibility, setModalVisibility] =
    useRecoilState<boolean>(modalState);

  return (
    <Modal open={modalVisibility} onClose={onClose}>
      <Box className="modal">
        <p>name: {restaurantData.title}</p>
        <p>img: {restaurantData.img}</p>
        <p>description:{restaurantData.description}</p>
      </Box>
    </Modal>
  );
}

RestaurantModal.propTypes = {};

export default RestaurantModal;
