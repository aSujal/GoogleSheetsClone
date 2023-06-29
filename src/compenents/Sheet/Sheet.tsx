import React, { ComponentType, FunctionComponent } from "react";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import style from "./Sheet.module.css";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props) => {
  const sheetSize = useRecoilValue(SheetSizeState);
  const numberOfColumns = sheetSize.width / CELL_WIDTH;
  const numberOfRows = sheetSize.height / CELL_HEIGHT;
  return (
    <div>
      <table className={style.Sheet}>
        <tbody>
          {[...Array(numberOfRows)].map((row, rowIndex) => (
            <Row key={rowIndex}>
              {[...Array(numberOfColumns)].map((column, columnIndex) => (
                <Column key={columnIndex}>
                  <Cell cellid={`${rowIndex},${columnIndex}`} />
                </Column>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sheet;
