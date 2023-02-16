import { useState } from "react";
import "./Nav.css";

const Nav = (props) => {
  const [state, updateState] = useState("Active");
  return (
    <header className="Head">
      <img className="logo" src={require("../imgs/todo.png")} alt="logo" />
      <select
        value={state}
        onChange={(e) => {
          updateState(() => e.target.value);
          props.changeState(e.target.value);
        }}
      >
        <option>Active</option>
        <option>Completed</option>
        <option>All</option>
      </select>
    </header>
  );
};

export default Nav;
