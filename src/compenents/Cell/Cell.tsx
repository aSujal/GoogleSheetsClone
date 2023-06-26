import React, {
  ComponentType,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./Cell.module.css";
export type CellProps = {
  children: string;
  cellid: string;
};
const Cell: FunctionComponent<CellProps> = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null); //to set the reference using ref={inputRef} to this input object

  //functions to change from input to label and label to input
  const changeLabelToInput = () => setIsEditMode(true);
  const changeInputToLabel = () => setIsEditMode(false);

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
    <input ref={inputRef} data-cell-id={props.cellid} />
  ) : (
    <div data-cell-id={props.cellid} onClick={changeLabelToInput}>
      {props.children}
    </div>
  );
};

export default Cell;
