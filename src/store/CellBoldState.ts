import { atom, RecoilState } from "recoil";

const cellBoldAtomCache: { [key: string]: RecoilState<boolean> } = {};

export const CellBoldState = (cellId: string): RecoilState<boolean> => {
  if (!cellBoldAtomCache[cellId]) {
    const atomKey = `cellBoldState_${cellId}`;
    cellBoldAtomCache[cellId] = atom<boolean>({
      key: atomKey,
      default: false,
    });
  }
  return cellBoldAtomCache[cellId];
};
