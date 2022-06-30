import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  modalState,
  restaurantState,
  restaurantsArrayState,
  errorState,
} from "@atoms";
import {
  registerRestaurant,
  getRestaurant,
  updateRestaurant,
} from "../restaurants/helpers";
import "./style.css";

function RestaurantModal() {
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [restaurantName, setRestaurantName] = useState<string>("");
  const [restaurantDescription, setRestaurantDescription] =
    useState<string>("");
  const [restaurantDescriptionAr, setRestaurantDescriptionAr] =
    useState<string>("");
  const [restaurantAddress, setRestaurantAddress] = useState<string>("");
  const [restaurantAddressAr, setRestaurantAddressAr] = useState<string>("");
  const [restaurantAddressLink, setRestaurantAddressLink] =
    useState<string>("");
  const [restaurantColor, setRestaurantColor] = useState<string>("");
  const [restaurantImage, setRestaurantImage] = useState<string>("");
  const [restaurantGroupName, setRestaurantGroupName] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const onClose = () => {
    setModalVisibility(!modalVisibility);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (restaurantData.id === "") {
        await registerRestaurant({
          username,
          phoneNumber,
          password,
          restaurantName,
          restaurantDescription,
          restaurantDescriptionAr,
          restaurantAddress,
          restaurantAddressAr,
          restaurantAddressLink,
          restaurantColor,
          restaurantImage,
          groupName: restaurantGroupName,
        });

        setLoading(false);
        setModalVisibility(false);
        getRestaurant().then((res) => {
          setRestaurantArray(res.data);
        });
      }

      if (restaurantData.id !== "") {
        await updateRestaurant({
          id: restaurantData.id,
          restaurantName,
          restaurantDescription,
          restaurantDescriptionAr,
          restaurantAddress,
          restaurantAddressAr,
          restaurantAddressLink,
          restaurantColor,
          restaurantImage,
          groupName: restaurantGroupName,
        });

        setLoading(false);
        setModalVisibility(false);
        getRestaurant().then((res) => {
          setRestaurantArray(res.data);
        });
      }
    } catch (error: any) {
      setError(error);
      setLoading(false);
      setModalVisibility(false);
    }
  };

  const [restaurantData, setRestaurantData] = useRecoilState(restaurantState);
  const [restaurantArray, setRestaurantArray] = useRecoilState(
    restaurantsArrayState
  );

  const [modalVisibility, setModalVisibility] =
    useRecoilState<boolean>(modalState);

  const [error, setError] = useRecoilState(errorState);

  return (
    <Modal open={modalVisibility} onClose={onClose}>
      <Box className="modal">
        <form onSubmit={handleSubmit} style={{ marginLeft: "%" }}>
          <TextField
            disabled={loading}
            name="upload-photo"
            type="file"
            onChange={(e: any) => {
              setRestaurantImage(e.target.files[0]);
            }}
            sx={{ width: "77%", marginTop: "1vh" }}
          />

          {restaurantData.id === "" && (
            <>
              <TextField
                disabled={loading}
                id="outlined-basic"
                label="phone number"
                variant="outlined"
                defaultValue={`${Math.random()}`}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{ width: "90%", marginTop: "1vh" }}
              />

              <TextField
                disabled={loading}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                defaultValue={"******"}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: "90%", marginTop: "1vh" }}
              />

              <TextField
                disabled={loading}
                id="outlined-basic"
                label="username"
                variant="outlined"
                defaultValue={"restaurant owner"}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ width: "90%", marginTop: "1vh" }}
              />
            </>
          )}

          <TextField
            disabled={loading}
            id="outlined-basic"
            label="english restaurant address"
            variant="outlined"
            defaultValue={restaurantData.address.en}
            onChange={(e) => setRestaurantAddress(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />
          <TextField
            disabled={loading}
            id="outlined-basic"
            label="arabic restaurant address"
            variant="outlined"
            defaultValue={restaurantData.address.ar}
            onChange={(e) => setRestaurantAddressAr(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />
          <TextField
            disabled={loading}
            id="outlined-basic"
            label="address link"
            variant="outlined"
            defaultValue={restaurantData.addressLink}
            onChange={(e) => setRestaurantAddressLink(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />
          <TextField
            disabled={loading}
            id="outlined-basic"
            label="english restaurant description"
            variant="outlined"
            defaultValue={restaurantData.description.en}
            onChange={(e) => setRestaurantDescription(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />
          <TextField
            disabled={loading}
            id="outlined-basic"
            label="arabic restaurant description"
            variant="outlined"
            defaultValue={restaurantData.address.ar}
            onChange={(e) => setRestaurantDescriptionAr(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />
          <TextField
            disabled={loading}
            id="outlined-basic"
            label="restaurant name"
            variant="outlined"
            defaultValue={restaurantData.name}
            onChange={(e) => setRestaurantName(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />
          <TextField
            disabled={loading}
            id="outlined-basic"
            label="restaurant colors"
            variant="outlined"
            defaultValue={restaurantData.colors}
            onChange={(e) => setRestaurantColor(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />

          <TextField
            disabled={loading}
            id="outlined-basic"
            label="group name"
            variant="outlined"
            defaultValue={restaurantData.groupName}
            onChange={(e) => setRestaurantGroupName(e.target.value)}
            sx={{ width: "90%", marginTop: "1vh" }}
          />

          <br />
          <Button variant="outlined" type="submit" sx={{ marginTop: "1vh" }}>
            {restaurantData.id === "" ? "register" : "update"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default RestaurantModal;
