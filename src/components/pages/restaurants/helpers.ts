import { httpClient } from "utils";
import { Restaurant } from "./types";

export const getRestaurant = async (): Promise<{
  success: boolean;
  data: Restaurant[];
}> => {
  try {
    const result = await httpClient.get("/restaurant");

    console.log(result);

    return result.data;
  } catch (error) {
    throw error;
  }
};
