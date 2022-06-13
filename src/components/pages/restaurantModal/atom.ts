import { atom } from "recoil";
import { RecoilState } from "recoil";
import { keys } from "../../../utils/atoms";

export const modalState: RecoilState<boolean> = atom({
  key: keys.modal,
  default: false as boolean, // Work around a recoil problem
});
