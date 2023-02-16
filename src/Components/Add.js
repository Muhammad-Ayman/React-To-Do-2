import "./Add.css";

const Add = (props) => {
  return (
    <div className="addform">
      <button className="addBtn" onClick={props.HandleAdd}>
        +
      </button>
    </div>
  );
};

export default Add;
