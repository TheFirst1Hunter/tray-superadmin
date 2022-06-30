import { atom } from "recoil";
import { RecoilState } from "recoil";
import { keys } from "../utils/atoms";

export const errorState: RecoilState<string> = atom({
  key: keys.error,
  default: "", // Work around a recoil problem
});
