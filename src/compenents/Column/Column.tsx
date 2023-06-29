import React, { ComponentType, FunctionComponent } from "react";
export type ColumnProps = {
  children: React.ReactNode;
};

const Column: FunctionComponent<ColumnProps> = (props) => {
  return <td>{props.children}</td>;
};

export default Column;
