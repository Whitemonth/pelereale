import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import cartImg from "../../images/cart-ico.svg";
import useCart from "../../hooks/useCart";
import { useEffect } from "react";

export default function Header() {
  const { counter } = useCart();
  

  return (
    <section className="header-sec">
      <div className="logo-block">
        <table className="menu-table">
          <tbody>
            <tr className="menu">
              <td>
                <Link to="/goods">Магазин</Link>
              </td>
              <td>
                <Link to="/about">О нас</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <img src={logo} className="logo-img" alt="logo"></img>

        <div className="cart-block">
          <img className="cart-img" src={cartImg} alt="cart"></img>
          <p>1</p>
        </div>
      </div>
    </section>
  );
}
