import { RecoilState, atom } from "recoil";
import { Restaurant } from "./types";
import { keys } from "../../utils/atoms";

const defaultRestaurant: Restaurant = {
  title: "",
  description: "",
  img: "",
  key: "",
};

export const restaurantState: RecoilState<Restaurant> = atom({
  key: keys.restaurant,
  default: defaultRestaurant,
});
