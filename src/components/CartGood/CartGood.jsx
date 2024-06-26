import Button from "../Button/Button";

import "./CartGood.css";
export default function CartGood(props) {
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
        <div className="cart__priceLabel">{`${props.price}₽`}</div>
        <Button title={"Купить"} id={props.id} />
      </div>
    </div>
  );
}
