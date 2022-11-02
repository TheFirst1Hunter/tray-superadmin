import React, { ChangeEvent, MouseEvent } from "react";
import { User as UserType } from "@types";
import {
  userState,
  errorState,
  restaurantState,
  AdminModalState,
} from "@atoms";
import { TextField, Box, Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { addOrUpdateUser } from "@API";

const container: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: " 50%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  border: " 2px solid #ff0000",
  borderRadius: " 25px",
  padding: " 80px 20px 80px 20px",
  backgroundColor: "white",
  zIndex: 10000,
};

const AdminForm = () => {
  const [user, setUser] = useRecoilState<UserType>(userState);
  const [err, setErr] = useRecoilState(errorState);
  const [AdminModal, setAdminModal] = useRecoilState(AdminModalState);
  const restaurant = useRecoilValue(restaurantState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await addOrUpdateUser(user, user.id, restaurant.id);
    } catch (error: any) {
      setAdminModal(false);
      setErr(error);
    }
  };

  return (
    <Box style={container}>
      Admin-data
      <TextField
        defaultValue={user.username}
        placeholder={"username"}
        onChange={onChange}
        name="username"
      />
      <TextField
        defaultValue={user.phoneNumber}
        placeholder={"phoneNumber"}
        onChange={onChange}
        name="phoneNumber"
      />
      <TextField
        defaultValue={"password"}
        placeholder={"password"}
        onChange={onChange}
        name="password"
      />
      <Button onClick={onClick}>
        {user.id === "" ? "add user" : "update user"}
      </Button>
    </Box>
  );
};

export default AdminForm;
