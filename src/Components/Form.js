import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [title, updateTitle] = useState("");
  const [task, updateTask] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      props.onSubmit(title, task);
    }
    updateTask("");
    updateTitle("");
  };
  return (
    <div
      className="form"
      style={props.show ? { display: "block" } : { display: "none" }}
    >
      <form onSubmit={handleChange}>
        <input
          placeholder="title..."
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
        ></input>
        <textarea
          placeholder="Add new task..."
          value={task}
          onChange={(e) => updateTask(e.target.value)}
        ></textarea>
        <button className="btn" type="submit">
          Add
        </button>
        <button className="btn" type="button" onClick={props.cancel}>
          close
        </button>
      </form>
    </div>
  );
};

export default Form;
