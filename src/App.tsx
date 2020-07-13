import React from "react";
import logo from "./logo.svg";
import "./App.css";
import View from "./View";
import { observer } from "mobx-react-lite";

import State from "./store/RootStore";

const Pluss5View = observer(() => <div>{State.pluss5}</div>);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <View />
        <br />
        <Pluss5View />
      </header>
    </div>
  );
}

export default App;
