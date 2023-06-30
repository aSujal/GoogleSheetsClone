import {
  ChangeEvent,
  Children,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import style from "./Cell.module.css";
import { CellValueState } from "../../store/CellValueState";
import { ActiveCellState } from "../../store/ActiveCellState";
import { EvaluatedCellValueState } from "../../store/EvaluatedCellValueState";

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 20;

export type CellProps = {
  children?: string;
  cellid: string;
};
const Cell: FunctionComponent<CellProps> = (props) => {
  const [cellValue, setCellValue] = useRecoilState<string>(
    CellValueState(props.cellid)
  );

  const evaluatedCellValueState = useRecoilValue<string>(
    EvaluatedCellValueState(props.cellid)
  );

  //called on text change updates the state of the cell
  const updateCellValueState = (event: ChangeEvent<HTMLInputElement>) =>
    setCellValue(event.target.value);

  const [isEditMode, setIsEditMode] = useState(false);
  //to set the reference using ref={inputRef} to this input object this allows for direct access to dom properties
  const inputRef = useRef(null);

  const [act, setActiveCell] = useRecoilState(ActiveCellState);

  //functions to change from input to label and label to input
  const changeLabelToInput = () => {
    setIsEditMode(true);
    setActiveCell(props.cellid); //active cell to highlight ColumnHeader and RowNumber
  };
  const changeInputToLabel = () => setIsEditMode(false);

  /*It checks if the clicked element's 
    dataset.cellId is different from the current cellid prop value. If they are different,
    it calls changeInputToLabel to switch the component to "label" mode.*/
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId === props.cellid) {
    } else {
      changeInputToLabel();
    }
  };

  //If Enter Pressed
  const onDefocusInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditMode(false);
    }
  };

  //the useEffect hook is called, and it adds an event listener for the "click" event on the entire web page
  useEffect(() => {
    return document.addEventListener("click", onClickOutsideInputHandler);
  });

  return isEditMode ? (
    <input
      className={style.CellInput}
      ref={inputRef}
      data-cell-id={props.cellid}
      value={cellValue}
      onChange={updateCellValueState}
      onKeyDown={onDefocusInputHandler}
    />
  ) : (
    <div
      className={style.CellLabel}
      data-cell-id={props.cellid}
      onClick={changeLabelToInput}
    >
      {evaluatedCellValueState} {/* value */}
    </div>
  );
};

export default Cell;
