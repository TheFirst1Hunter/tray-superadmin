import { httpClient } from "@utils";
import { User } from "@types";

export const addOrUpdateUser = async (
  user: User,
  userId: string,
  restaurantId?: string
) => {
  console.log(import.meta.env.VITE_BASE_URL);
  try {
    if (userId !== "") {
      const result = await httpClient.put(`users/updateUser/${userId}`, user);
      return result.data;
    }

    let newUser: User = user;

    if (restaurantId) newUser = { ...user, restaurantId };

    const result = await httpClient.post(`users/createUser`, newUser);
    return result.data;
  } catch (err: any) {
    console.log(err);
    throw err.response.data.detail;
  }
};
