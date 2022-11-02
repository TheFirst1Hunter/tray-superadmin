import { atom } from "recoil";
import { RecoilState } from "recoil";
import { keys } from "@utils";

export const userModalState: RecoilState<boolean> = atom({
  key: keys.userModal,
  default: false as boolean, // Work around a recoil problem
});
