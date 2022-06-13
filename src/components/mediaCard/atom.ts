import { RecoilState, atom } from "recoil";
import { MediaCard } from "./types";
import { keys } from "../../utils/atoms";

const defaultRestaurant: MediaCard = {
  title: "",
  description: "",
  img: "",
  key: "",
};

export const restaurantState: RecoilState<MediaCard> = atom({
  key: keys.restaurant,
  default: defaultRestaurant,
});
