import "./Note.css";
import { HiOutlineCheck } from "react-icons/hi2";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { AiOutlineBackward } from "react-icons/ai";
const Note = (props) => {
  return (
    <div className="Note">
      <h3
        className="title"
        style={props.edit ? { opacity: ".3" } : {}}
        onChange={(e) => console.log(e)}
      >
        {props.title}
      </h3>
      <div className="content" style={props.edit ? { opacity: ".3" } : {}}>
        {props.Note}
      </div>
      <button
        className="Btn Done"
        onClick={() => props.MarkComplete(props.state, props.id)}
      >
        {props.state === "Active" ? (
          <HiOutlineCheck size={20} color={"red"} />
        ) : (
          <AiOutlineBackward />
        )}
      </button>
      <button className="Btn Remove" onClick={() => props.Remove(props.id)}>
        <HiArchiveBoxXMark size={20} color={"red"} />
      </button>
    </div>
  );
};

export default Note;
