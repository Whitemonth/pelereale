import "./CartGood.css";
import { useContext } from "react";
import Context from "../../Context";

export default function CartGood(props) {
  const value = useContext(Context);

  return (
    <div className="cart__good-container">
      <div className="cart__good-img-block">
        <img src={props.imgUrl} alt={props.imgAlt}></img>
      </div>
      <div className="cart__caption_block">
        <div className="cart__goodTitle">{props.title}</div>
      </div>
      <div className="cart__buttons_block">
        <div className="cart__priceLabel">{`${
          props.price * props.count
        } ₽`}</div>
        <div className="cart__counter_buttons">
          <button
            onClick={() => value.handleRemoveFromCart(props.id, props.price)}
          >
            -
          </button>
          <p>{props.count}</p>
          <button onClick={() => value.handleAddToCart(props.id, props.price)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
