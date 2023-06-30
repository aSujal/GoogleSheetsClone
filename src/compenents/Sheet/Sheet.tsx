import React, { ComponentType, FunctionComponent, useState } from "react";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import style from "./Sheet.module.css";
import { useRecoilValue } from "recoil";
import { ActiveCellState } from "../../store/ActiveCellState";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props) => {
  const numberOfColumns = 26;
  const numberOfRows = 30;
  const alphabeticalIndices = Array.from(
    { length: numberOfColumns },
    (_, index) => String.fromCharCode(65 + index)
  );
  const numericalIndices = Array.from({ length: numberOfRows }, (_, index) =>
    (index + 1).toString()
  );
  const activeCell = useRecoilValue(ActiveCellState);
  return (
    <div className={style.SheetWrapper}>
      <table className={style.Sheet}>
        <thead>
          <tr>
            {/* Render alphabetical indices */}
            <th></th> {/* Empty cell in top-left corner */}
            {alphabeticalIndices.map((letter) => (
              <th
                key={letter}
                className={
                  activeCell.charAt(0) === letter //only checks the letter
                    ? style.ColumnHeaderActive
                    : style.ColumnHeader
                }
              >
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {numericalIndices.map((rowIndex) => (
            <Row key={rowIndex}>
              <td
                className={
                  activeCell.substring(1, activeCell.length) === rowIndex // only checks for row
                    ? style.RowNumberActive
                    : style.RowNumber
                }
              >
                {rowIndex}
              </td>{" "}
              {/* Render numerical indices */}
              {alphabeticalIndices.map((columnIndex) => (
                <Column key={columnIndex}>
                  <Cell cellid={`${columnIndex}${rowIndex}`}></Cell>
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
