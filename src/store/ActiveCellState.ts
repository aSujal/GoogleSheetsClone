import { atom } from "recoil";

export const ActiveCellState = atom<string>({
  key: "activeCellState",
  default: "",
});
