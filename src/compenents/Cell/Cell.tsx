import React, {
  ChangeEvent,
  ComponentType,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { atom, useRecoilState } from "recoil";
import classes from "./Cell.module.css";
import { CellValueState } from "../../store/CellValueState";

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

export type CellProps = {
  children?: string;
  cellid: string;
};
const Cell: FunctionComponent<CellProps> = (props) => {
  const [cellValue, setCellValue] = useRecoilState<string>(
    CellValueState(props.cellid)
  );

  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null); //to set the reference using ref={inputRef} to this input object this allows for direct access to dom properties

  //functions to change from input to label and label to input
  const changeLabelToInput = () => setIsEditMode(true);
  const changeInputToLabel = () => setIsEditMode(false);

  const updateCellValueState = (event: ChangeEvent<HTMLInputElement>) =>
    setCellValue(event.target.value);

  /*It checks if the clicked element's 
    dataset.cellId is different from the current cellid prop value. If they are different,
    it calls changeInputToLabel to switch the component to "label" mode.*/
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== props.cellid) {
      changeInputToLabel();
    }
  };
  //the useEffect hook is called, and it adds an event listener for the "click" event on the entire web page
  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);

    return document.addEventListener("click", onClickOutsideInputHandler);
  });

  return isEditMode ? (
    <input
      ref={inputRef}
      data-cell-id={props.cellid}
      value={cellValue}
      onChange={updateCellValueState}
    />
  ) : (
    <div data-cell-id={props.cellid} onClick={changeLabelToInput}>
      {cellValue} {/* value */}
    </div>
  );
};

export default Cell;
