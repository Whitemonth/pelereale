import "./Button.css";

export default function Button(props) {
  return (
    <div className="button-container">
      <button className="button-main">{props.title}</button>
    </div>
  );
}
