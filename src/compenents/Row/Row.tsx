import React, { ComponentType, FunctionComponent } from "react";

export type RowProps = {
  children: React.ReactNode;
};

const Row: FunctionComponent<RowProps> = (props) => {
  return <tr>{props.children}</tr>;
};

export default Row;
