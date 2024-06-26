import "./Cart.css";
import { useContext } from "react";
import Context from "../Context";
import { GOODSDATA } from "../data";
import Good from "../components/Good/Good";
import CartGood from "../components/CartGood/CartGood";

export default function Cart() {
  const value = useContext(Context);

  function showAddedToCart() {
    return value.cart.map((e) => (
      <CartGood
        key={GOODSDATA[e.good].id}
        imgUrl={GOODSDATA[e.good].imgurl}
        imgAlt={GOODSDATA[e.good].imgalt}
        title={GOODSDATA[e.good].name}
        caption={GOODSDATA[e.good].description}
        price={GOODSDATA[e.good].price}
        id={GOODSDATA[e.good].id}
      />
    ));
  }
  {
  }
  return (
    <section className="cart__section">
      <div className="cart__container">
        <div className="cart__page_title">
          <h2>Корзина</h2>
        </div>
        <div className="cart__goods_block">{showAddedToCart()}</div>
      </div>
    </section>
  );
}
