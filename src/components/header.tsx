import logo from '../assets/img/logo/logo.svg'
import cart from '../assets/icons/cart.svg'
import user from '../assets/icons/user.svg'
import like from '../assets/icons/like.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="wrapper">
                    <a href="" className="header-logo">
                        <img src={logo} alt="" className="header-logo__img" />
                    </a>
                    <nav className="header-nav">
                        <ul className="header-nav__ul">
                            <div className="wrapper header-nav__wrapper">
                                <li className="header-nav__li"><a href="" className="header-nav__a">Каталог</a></li>
                                <li className="header-nav__li"><a href="" className="header-nav__a">Популярные товары</a></li>
                                <li className="header-nav__li"><a href="" className="header-nav__a">Главная</a></li>
                            </div>
                        </ul>
                    </nav>
                    <div className="header-second-nav">
                        <ul className="header-second-nav__ul">
                            <div className="wrapper header-second-nav__wrapper">
                                <li className="header-second-nav__li"><a href="" className="header-second-nav__a"><img src={cart} alt="" className="header-second-nav__img" /></a></li>
                                <li className="header-second-nav__li"><a href="" className="header-second-nav__a"><img src={user} alt="" className="header-second-nav__img" /></a></li>
                                <li className="header-second-nav__li"><a href="" className="header-second-nav__a"><img src={like} alt="" className="header-second-nav__img" /></a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
} 