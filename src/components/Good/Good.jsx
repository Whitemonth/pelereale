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
      <Button title={"Купить"} id={props.id} price={props.price} />
    </div>
  );
}
