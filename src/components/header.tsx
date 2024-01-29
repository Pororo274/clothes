import logo from "../assets/img/logo/logo.svg";
import cart from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";
import like from "../assets/icons/like.svg";
import LiLink from "./ui/links/li-link";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <Link to={"/"} className="header-logo">
            <img src={logo} alt="" className="header-logo__img" />
          </Link>
          <nav className="header-nav">
            <ul className="header-nav__ul">
              <div className="wrapper header-nav__wrapper">
                <LiLink to={"/catalog"}>Каталог</LiLink>
                <LiLink to={"/catalog"}>Популярные товары</LiLink>
                <LiLink to={"/"}>Главная</LiLink>
              </div>
            </ul>
          </nav>
          <div className="header-second-nav">
            <ul className="header-second-nav__ul">
              <div className="wrapper header-second-nav__wrapper">
                <li className="header-second-nav__li">
                  <a href="" className="header-second-nav__a">
                    <img src={cart} alt="" className="header-second-nav__img" />
                  </a>
                </li>
                <li className="header-second-nav__li">
                  <a href="" className="header-second-nav__a">
                    <img src={user} alt="" className="header-second-nav__img" />
                  </a>
                </li>
                <li className="header-second-nav__li">
                  <a href="" className="header-second-nav__a">
                    <img src={like} alt="" className="header-second-nav__img" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
