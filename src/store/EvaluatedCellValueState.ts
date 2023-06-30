import {selector } from "recoil";
import { CellValueState } from "./CellValueState";
import { memoize } from "../utils/memoize";
import { evaluate } from "mathjs";

export const EvaluatedCellValueState = (cellId: string) => 
    memoize(`evaluatedCell_${cellId}`, () =>
    selector({
        key: `evaluatedCell_${cellId}`,
        get: ({ get }) => {
            const value = get(CellValueState(cellId)) as string;
            if(value.startsWith('=')){
                try{
                    return evaluate(value.substring(1, value.length));
                }catch{
                    return value;
                }
            }
            return value;
        },
    })
);
