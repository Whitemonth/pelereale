import "./Cart.css";
import { useContext } from "react";
import Context from "../Context";
import { GOODSDATA } from "../data";
import Good from "../components/Good/Good";
import CartGood from "../components/CartGood/CartGood";

export default function Cart() {
  const value = useContext(Context);

  function showAddedToCart() {
    if (value.cart.length === 0) {
      return (
        <div className="cart__empty_block">
          <p>Корзина пуста</p>
        </div>
      );
    } else {
      return value.cart.map((e) => (
        <CartGood
          key={GOODSDATA[e.good - 1].id}
          imgUrl={GOODSDATA[e.good - 1].imgurl}
          imgAlt={GOODSDATA[e.good - 1].imgalt}
          title={GOODSDATA[e.good - 1].name}
          caption={GOODSDATA[e.good - 1].description}
          price={GOODSDATA[e.good - 1].price}
          id={GOODSDATA[e.good - 1].id}
          count={e.counter}
        />
      ));
    }
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
        <div className="cart__total_block">
          {value.cart.length !== 0 ? <p>Итого: {}</p> : <></>}
          <p>{}</p>
        </div>
      </div>
    </section>
  );
}
