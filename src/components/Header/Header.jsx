import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import cart from "../../images/cart-ico.svg";

export default function Header() {
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
          <img className="cart-img" src={cart} alt="cart"></img>
        </div>
      </div>
    </section>
  );
}
