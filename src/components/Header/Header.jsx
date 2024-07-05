import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import menuImg from "../../images/menu-icon.png";
import cartImg from "../../images/cart-ico.svg";
import { useContext, useEffect, useState } from "react";
import Context from "../../Context";

export default function Header() {
  const [isHidden, setHidden] = useState(true);
  const toggleMenuVisibility = () => {
    setHidden(!isHidden);
  };
  const value = useContext(Context);

  const sumCounts = (cart) => {
    let sum = 0;
    for (let item of cart) {
      sum += item.counter;
    }
    return sum;
  };

  return (
    <section className="header-sec">
      <div className="logo-block">
        <div
          onClick={toggleMenuVisibility}
          className="menu-mobile"
          id="menu_mobile"
        >
          <button className="menu_mobile_button">
            <img src={menuImg}></img>
          </button>
          <div
            style={{ visibility: isHidden ? "hidden" : "visible" }}
            className="menu_drop_down"
          >
            <Link className="menu_mob_item" to="/goods">
              Магазин
            </Link>
            <Link className="menu_mob_item" to="/cart">
              Корзина
            </Link>
            <Link className="menu_mob_item" to="/about">
              О нас
            </Link>
          </div>
        </div>
        <table className="menu-table">
          <tbody>
            <tr className="menu">
              <td>
                <Link to="/goods">Магазин</Link>
              </td>
              <td>
                <Link to="/cart">Корзина</Link>
              </td>
              <td>
                <Link to="/about">О нас</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/">
          <img src={logo} className="logo-img" alt="logo"></img>
        </Link>

        <div className="cart-block">
          <Link to="/cart">
            <img className="cart-img" src={cartImg} alt="cart"></img>
          </Link>

          <p style={{ marginLeft: "5px" }}> {sumCounts(value.cart)}</p>
        </div>
      </div>
    </section>
  );
}
