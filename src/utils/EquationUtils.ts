import { RecoilValueReadOnly } from "recoil";
import { EvaluatedCellValueState } from "../store/EvaluatedCellValueState";
import { CellProps } from "../compenents/Cell/Cell";

export const evaluateEquation = (
  get: (s: RecoilValueReadOnly<CellProps>) => CellProps,
  equation: string
): any => {
  // Replace CellIds with their corresponding values
  const equationWithCellValues = getCellValueFromCellId(get, equation);

  // Check if the equation starts with "AddString"
  if (equationWithCellValues.startsWith("AddString")) {
    const paramsRegex = /\((.*?)\)/;
    const paramsMatch = paramsRegex.exec(equationWithCellValues);

    // Extract the parameters from the equation
    if (paramsMatch && paramsMatch[1]) {
      const [param1, param2] = paramsMatch[1]
        .split(",")
        .map((param) => param.trim());

      // Get the values of the parameters from cell values
      const value1 = getCellValueFromCellId(get, param1);
      const value2 = getCellValueFromCellId(get, param2);

      // Concatenate the values together
      let result = value1 + " " + value2;

      return result;
    } else {
      return "Error! Invalid parameters";
    }
  }

  let result;
  try {
    result = eval(equationWithCellValues);
  } catch {
    return "Error!";
  }

  if (Number.isNaN(result)) {
    return "Error!";
  } else {
    return result;
  }
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
