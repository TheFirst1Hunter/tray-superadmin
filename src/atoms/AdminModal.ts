import { atom } from "recoil";
import { RecoilState } from "recoil";
import { keys } from "@utils";

export const AdminModalState: RecoilState<boolean> = atom({
  key: keys.AdminModal,
  default: false as boolean,
});
