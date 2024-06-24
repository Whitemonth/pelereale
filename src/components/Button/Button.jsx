import "./Button.css";
import useCart from "../../hooks/useCart";

export default function Button(props) {
  const { handleAddToCart } = useCart();
  return (
    <div className="button-container">
      <button
        className="button-main"
        onClick={() => props.handleAddToCart(props.id)}
      >
        {props.title}{" "}
      </button>
    </div>
  );
}
