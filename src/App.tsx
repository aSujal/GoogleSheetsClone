import React from "react";
import { RecoilRoot } from "recoil";
import logo from "./logo.svg";
import "./App.css";
import Cell from "./compenents/Cell/Cell";
import SheetsContainer from "./containers/SheetsContainer/SheetsContainer";
import FormattingMenu from "./containers/FormatingMenu/FormatingMenu";
import TitleMenu from "./containers/TitleMenu/TitleMenu";

function App() {
  return (
    <RecoilRoot>
      <TitleMenu />
      <div className="parent">
        <FormattingMenu />
      </div>
      <SheetsContainer />
    </RecoilRoot>
  );
}

export default App;
