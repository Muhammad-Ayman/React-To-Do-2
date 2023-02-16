import { useState } from "react";
import "./App.css";
import Add from "./Components/Add";
import Form from "./Components/Form";
import Nav from "./Components/Nav";
import Notes from "./Components/Notes";

let IDS = 0;

function App() {
  const [NotesArr, updateArr] = useState([]);
  const [show, updateShow] = useState(false);
  const [state, updateState] = useState("Active");

  const chaneState = (state) => {
    updateState(state);
  };

  const Show = (e) => {
    if (e.target.innerText === "close") {
      updateShow(false);
    } else updateShow(true);
  };

  const update = (state, key) => {
    updateArr((prev) =>
      prev.map((note) =>
        note.Id !== key
          ? note
          : { ...note, state: state === "Active" ? "Completed" : "Active" }
      )
    );
  };

  const Remove = (key) => {
    updateArr((prev) => prev.filter((note) => note.Id !== key));
  };

  const Push = (title, task) => {
    updateArr((prev) => {
      return prev.concat({
        note: task,
        title: title,
        Id: IDS++,
        state: "Active",
      });
    });
    updateShow(false);
  };
  return (
    <div className="Grid">
      <Nav changeState={chaneState} />
      <div className="Card">
        <Notes Notes={NotesArr} update={update} Remove={Remove} state={state} />
        <Form show={show} cancel={Show} onSubmit={Push} />
        <Add title="Add New To-Do...." HandleAdd={Show} />
      </div>
    </div>
  );
}

export default App;
/*{
  note: e.target[1].value,
  title: e.target[0].value.trim(),
}*/
