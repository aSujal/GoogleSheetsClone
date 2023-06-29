import React, { ComponentType, FunctionComponent } from "react";
import style from "./Column.module.css";
export type ColumnProps = {
  children: React.ReactNode;
};

const Column: FunctionComponent<ColumnProps> = (props) => {
  return <td className={style.Column}>{props.children}</td>;
};

export default Column;
