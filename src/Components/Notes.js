import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const Move = (key) => {
    props.update("Completed", key);
  };
  return (
    <div className="Notes">
      <ul>
        {props.Notes.filter(
          (note) => props.state === "All" || note.state === props.state
        ).map((note) => (
          <li key={note.Id}>
            <Note
              Note={note.note}
              title={note.title}
              MarkComplete={props.update}
              Remove={props.Remove}
              id={note.Id}
              state={note.state}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
