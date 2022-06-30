import { httpClient } from "../../../utils";
import {
  Restaurant,
  RegisterRestaurant,
  UpdateRestaurant,
} from "../../../types";

export const getRestaurant = async (): Promise<{
  success: boolean;
  data: Restaurant[];
}> => {
  try {
    const result = await httpClient.get("/restaurant");

    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleRestaurant = async (
  id: string
): Promise<{
  success: boolean;
  data: Restaurant;
}> => {
  try {
    const result = await httpClient.get(`/restaurant/${id}`);

    return result.data;
  } catch (error) {
    throw error;
  }
};

export const registerRestaurant = async ({
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
  groupName,
}: RegisterRestaurant) => {
  const restaurant = {
    name: restaurantName,
    description: restaurantDescription,
    description_ar: restaurantDescriptionAr,
    address: restaurantAddress,
    address_ar: restaurantAddressAr,
    addressLink: restaurantAddressLink,
    colors: [restaurantColor],
    groupName,
  };

  const formData = new FormData();

  formData.append("username", username);
  formData.append("phoneNumber", phoneNumber);
  formData.append("password", password);
  formData.append("restaurant", JSON.stringify(restaurant));
  formData.append("image", restaurantImage);

  try {
    await httpClient.post(`/users/register`, formData);
  } catch (err: any) {
    throw err.response.data.detail;
  }
};

export const updateRestaurant = async ({
  id,
  restaurantName,
  restaurantDescription,
  restaurantDescriptionAr,
  restaurantAddress,
  restaurantAddressAr,
  restaurantAddressLink,
  restaurantColor,
  restaurantImage,
  groupName,
}: UpdateRestaurant) => {
  const formData = new FormData();

  formData.append("name", restaurantName);
  formData.append("description", restaurantDescription);
  formData.append("description_ar", restaurantDescriptionAr);
  formData.append("address", restaurantAddress);
  formData.append("address_ar", restaurantAddressAr);
  formData.append("addressLink", restaurantAddressLink);
  // formData.append("colors", `[${restaurantColor[0]},${restaurantColor[1]}]`);
  formData.append("groupName", groupName);
  console.log(restaurantImage);

  formData.append("image", restaurantImage);

  console.log("update");

  try {
    const result = await httpClient.put(`/restaurant/${id}`, formData);

    console.log(result);
  } catch (err: any) {
    throw err.response.data.detail;
  }
};
