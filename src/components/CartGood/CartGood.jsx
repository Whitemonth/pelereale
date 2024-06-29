import "./CartGood.css";
import { useContext, useEffect } from "react";
import Context from "../../Context";

export default function CartGood(props) {
  const value = useContext(Context);
  let goodPrice = props.price * props.count;
  console.log(goodPrice);
  return (
    <div className="cart__good-container">
      <div className="cart__good-img-block">
        <img src={props.imgUrl} alt={props.imgAlt}></img>
      </div>
      <div className="cart__caption_block">
        <div className="cart__goodTitle">{props.title}</div>
        <div className="cart__goodCaption">{props.caption}</div>
      </div>
      <div className="cart__buttons_block">
        <div className="cart__priceLabel">{`${goodPrice} ₽`}</div>
        <div className="cart__counter_buttons">
          <button onClick={() => value.handleRemoveFromCart(props.id)}>
            -
          </button>
          <p>{props.count}</p>
          <button onClick={() => value.handleAddToCart(props.id)}>+</button>
        </div>
      </div>
    </div>
  );
}
