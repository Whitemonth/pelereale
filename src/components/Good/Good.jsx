// props: imgUrl, imgAlt, titile, caption
import Button from "../Button/Button";
import { setItemInCart } from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";
import "./Good.css";
export default function Good(props) {
  const dispatch = useDispatch();

  const handleCartClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(Good));
  };
  return (
    <div className="good-container">
      <div className="good-img-block">
        <img src={props.imgUrl} alt={props.imgAlt}></img>
      </div>
      <div className="goodTitle">{props.title}</div>
      <div className="goodCaption">{props.caption}</div>
      <div className="priceLabel">{`${props.price}₽`}</div>
      <Button title={"Купить"} onClick={handleCartClick} />
    </div>
  );
}
