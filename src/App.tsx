import React from "react";
import { RecoilRoot } from "recoil";
import logo from "./logo.svg";
import "./App.css";
import Cell from "./compenents/Cell/Cell";
import SheetsContainer from "./containers/SheetsContainer";

function App() {
  return (
    <RecoilRoot>
      <SheetsContainer />
    </RecoilRoot>
  );
}

export default App;
