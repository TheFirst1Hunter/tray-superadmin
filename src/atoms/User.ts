import { atom } from "recoil";
import { RecoilState } from "recoil";
import { keys } from "@utils";
import { User } from "@types";

export const defaultUser: User = {
  id: "",
  username: "",
  active: true,
  phoneNumber: "",
  password: "",
  restaurantId: "",
};

export const userState: RecoilState<User> = atom({
  key: keys.user,
  default: defaultUser, // Work around a recoil problem
});
