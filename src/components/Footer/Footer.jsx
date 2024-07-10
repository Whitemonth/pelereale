import "./Footer.css";
import logoTwo from "../../images/logo2.png";

export default function Footer() {
  let year = new Date();

  return (
    <footer className="footer__section">
      <div className="footer__container">
        <img className="footer__logo" src={logoTwo} alt="Pellereale_logo"></img>
        <div className="footer__copyright_cont">
          <p className="footer__copyright">©</p>
        </div>
        <div className="footer__year_label">{`${year.getFullYear()} г.`}</div>
      </div>
    </footer>
  );
}
