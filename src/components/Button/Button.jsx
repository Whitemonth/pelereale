import "./Button.css";
import { useContext } from "react";
import Context from "../../Context";

export default function Button(props) {
  const value = useContext(Context);
  return (
    <div className="button-container">
      <button
        className="button-main"
        onClick={() => value.handleAddToCart(props.id)}
      >
        {props.title}{" "}
      </button>
    </div>
  );
}
