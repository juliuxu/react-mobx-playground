import React from "react";
import { observer } from "mobx-react-lite";
import State from "./store/RootStore";

State.count = 1337;
const View = observer(() => {
  return (
    <div>
      Hello, World {State.pluss5}
      <button onClick={() => State.setCount(State.count + 40)}>
        Inc count
      </button>
    </div>
  );
});

export default View;
