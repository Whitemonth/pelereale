import "./Button.css";
import { useContext } from "react";
import Context from "../../Context";

export default function Button(props) {
  const value = useContext(Context);

  //Получаем counter для каждого товара
  let goodCounter = value.cart.map(function (element) {
    if (element.good === props.id) {
      return element.counter;
    }
  });

  const isAddedToCart = value.cart.some((item) => item.good === props.id);

  return (
    <div className="button-container">
      {isAddedToCart ? (
        <div className="button__buttons_block">
          <div className="button__counter_buttons">
            <button
              onClick={() => value.handleRemoveFromCart(props.id, props.price)}
            >
              -
            </button>
            <p>{goodCounter}</p>
            <button
              onClick={() => value.handleAddToCart(props.id, props.price)}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <button
          className="button-main"
          onClick={() => value.handleAddToCart(props.id, props.price)}
        >
          {props.title}{" "}
        </button>
      )}
    </div>
  );
}
