import logo from "../assets/img/logo/logo.svg";
import FooterNav from "./lists/footer-nav";
import LiLink from "./ui/links/li-link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <figure className="footer-logo">
            <img src={logo} alt="" className="footer-logo__img" />
          </figure>
          <FooterNav header="Навигация по сайту">
            <LiLink to="/catalog">Каталог</LiLink>
            <LiLink to="/">Популярные товары</LiLink>
            <LiLink to="/">Главная</LiLink>
          </FooterNav>
          <FooterNav header="Помощь">
            <LiLink to="/catalog">Договор публичной оферты</LiLink>
            <LiLink to="/catalog">Поддержка</LiLink>
            <LiLink to="/catalog">Возврат товара</LiLink>
          </FooterNav>
          <FooterNav header="Контакты">
            <LiLink to="/catalog">+7 956 758 65 65</LiLink>
            <LiLink to="/catalog">clothes@gmail.com</LiLink>
            <LiLink to="/catalog">
              улица Мусы Джалиля, 14/10, Казань, Республика Татарстан
            </LiLink>
          </FooterNav>
        </div>
      </div>
    </footer>
  );
}
