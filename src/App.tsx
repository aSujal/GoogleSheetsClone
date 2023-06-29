import React from "react";
import { RecoilRoot } from "recoil";
import logo from "./logo.svg";
import "./App.css";
import Cell from "./compenents/Cell/Cell";

function App() {
  return (
    <RecoilRoot>
      <Cell cellid="A1">A1</Cell>
      <Cell cellid="B2">B2</Cell>
    </RecoilRoot>
  );
}

export default App;
