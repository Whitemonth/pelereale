import Button from "../Button/Button";

import "./Good.css";
export default function Good(props) {
  return (
    <div className="good-container">
      <div className="good-img-block">
        <img src={props.imgUrl} alt={props.imgAlt}></img>
      </div>

      <div className="goodTitle">{props.title}</div>
      <div className="good__lablel_block">
        <div className="good__brand_title">{props.brand}</div>
        <div className="good__weight">{`${props.weight}/${props.weightType}`}</div>
      </div>

      <div className="goodCaption">{props.caption}</div>

      <div className="priceLabel">{`${props.price}₽ `}</div>

      <Button title={"В корзину"} id={props.id} price={props.price} />
    </div>
  );
}
