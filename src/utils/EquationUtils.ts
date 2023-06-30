import { RecoilValueReadOnly } from "recoil";
import { evaluate } from "mathjs";
import { EvaluatedCellValueState } from "../store/EvaluatedCellValueState";
import { CellProps } from "../compenents/Cell/Cell";

export const evaluateEquation = (
  get: (s: RecoilValueReadOnly<CellProps>) => CellProps,
  equation: string
): any => {
  // Replace CellIds with their corresponding values
  const equationWithCellValues = getCellValueFromCellId(get, equation);

  const result = evaluate(equationWithCellValues);

  return result;
};

export const getCellValueFromCellId = (
  get: (s: RecoilValueReadOnly<CellProps>) => CellProps,
  equation: string
): string => {
  const cellRegex = /[A-Z]+\d+/g; // Matches a cell identifier (e.g., A1, B2, etc.)

  // Replace cellId with its value in the equation
  const equationWithCellValues = equation.replace(cellRegex, (cellId) => {
    // Get the cell value from Recoil state
    const cellValue = get(EvaluatedCellValueState(cellId));
    return String(cellValue);
  });

  return equationWithCellValues;
};
