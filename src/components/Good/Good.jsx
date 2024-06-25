import Button from "../Button/Button";
import { useContext } from "react";
import Context from "../../Context";

import "./Good.css";
export default function Good(props) {
  const value = useContext(Context);
  return (
    <div className="good-container">
      <div className="good-img-block">
        <img src={props.imgUrl} alt={props.imgAlt}></img>
      </div>
      <div className="goodTitle">{props.title}</div>
      <div className="goodCaption">{props.caption}</div>
      <div className="priceLabel">{`${props.price}₽`}</div>
      {value.cart.findIndex((item) => item.good === props.id) ? (
        <p>нет такого</p>
      ) : (
        <p>есть</p>
      )}
      <Button title={"Купить"} id={props.id} />
    </div>
  );
}
