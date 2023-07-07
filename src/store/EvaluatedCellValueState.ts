import { selector } from "recoil";
import { CellValueState } from "./CellValueState";
import { memoize } from "../utils/memoize";
import { evaluateEquation } from "../utils/EquationUtils";
import { useState } from "react";

export const EvaluatedCellValueState = (cellId: string) =>
  memoize(`evaluatedCell_${cellId}`, () =>
    selector({
      key: `evaluatedCell_${cellId}`,
      get: ({ get }) => {
        const value = get(CellValueState(cellId)) as string;
        if (value.startsWith("=")) {
          try {
            const equation = value.substring(1);
            const evaluatedExpression = evaluateEquation(get, equation);
            return evaluatedExpression;
          } catch {
            return value;
          }
        }
        return value;
      },
    })
  );
