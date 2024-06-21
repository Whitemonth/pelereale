import "./Button.css";

export default function Button(props) {
  return (
    <div className="button-container">
      <button className="button-main" onClick={() => props.clicker(props.id)}>
        {props.title}{" "}
      </button>
    </div>
  );
}
