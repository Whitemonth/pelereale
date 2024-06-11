import Good from "../components/Good/Good";
import "./Goods.css";
import { GOODSDATA } from "../data.js";

export default function Goods() {
  function componentByGroup(group) {
    return GOODSDATA.map(function (data) {
      if (data.group === group) {
        return (
          <Good
            key={data.id}
            imgUrl={data.imgurl}
            imgAlt={data.imgalt}
            title={data.name}
            caption={data.description}
            price={data.price}
          />
        );
      }
    });
  }

  return (
    <section className="goods-section">
      <div className="group-title">
        <p>Сыворотки</p>
      </div>
      <div className="goods-container">{componentByGroup("serums")}</div>
      <div className="group-title">
        <p>Крема</p>
      </div>
      <div className="goods-container">{componentByGroup("creams")}</div>
      <div className="group-title">
        <p>Маски</p>
      </div>
      <div className="goods-container">{componentByGroup("masks")}</div>
      <div className="group-title">
        <p>Средства для очищения кожи и тонизации</p>
      </div>
      <div className="goods-container">{componentByGroup("skinclear")}</div>
      <div className="group-title">
        <p>Уход за кожей вокруг глаз</p>
      </div>
      <div className="goods-container">{componentByGroup("eyecare")}</div>
      <div className="group-title">
        <p>Уход за кожей тела</p>
      </div>
      <div className="goods-container">{componentByGroup("skincare")}</div>
      <div className="group-title">
        <p>Макияж</p>
      </div>
      <div className="goods-container">{componentByGroup("makeup")}</div>
    </section>
  );
}
