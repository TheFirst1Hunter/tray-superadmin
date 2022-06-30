import { RecoilState, atom } from "recoil";
import { Restaurant } from "../types/Restaurant";
import { keys } from "../utils/atoms";

export const defaultRestaurant: Restaurant = {
  id: "",
  description: {
    ar: "",
    en: "",
  },
  address: {
    ar: "",
    en: "",
  },
  addressLink: "",
  active: true,
  colors: [""],
  groupName: "",
  image: "",
  name: "",
  Users: [{ phoneNumber: "", password: "", active: true, username: "" }],
};

export const restaurantState: RecoilState<Restaurant> = atom({
  key: keys.restaurant,
  default: defaultRestaurant,
});

export const restaurantsArrayState: RecoilState<Restaurant[]> = atom({
  key: keys.restaurants,
  default: [defaultRestaurant],
});
