import React, { ComponentType, FunctionComponent } from "react";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Cell from "../Cell/Cell";

export type SheetProps = {};

const Sheet: FunctionComponent<SheetProps> = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <Row>
            <Column>
              <Cell cellid="Test">Hello</Cell>
              <Cell cellid="Test2">Hellos</Cell>
            </Column>
          </Row>
        </tbody>
      </table>
    </div>
  );
};

export default Sheet;
