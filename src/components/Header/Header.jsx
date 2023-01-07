import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const headerItems = [
  {
    name: "Home",
    path: "/",
    exact: true,
  },
  {
    name: "Contact",
    path: "/contact",
    exact: false,
  },
  {
    name: "Cart",
    path: "/cart",
    exact: false,
    icon: "fa-solid fa-cart-shopping",
    isCart: true,
  },
];

const Header = (props) => {
  const { cart } = props;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <NavLink to="/">
            B<span>C</span>D
          </NavLink>
        </div>
        <nav className={isOpenMenu ? "header__nav open" : "header__nav"}>
          {headerItems.map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setIsOpenMenu(false)}
              to={item.path}
              exact={item.exact.toString()}
              className="header__nav__item"
            >
              {item.name}
              {cart.length !== 0 && (
                <>
                  <i className={item.icon}></i>
                  {item.isCart && <sup>{cart.length}</sup>}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <span
          className="header__menuToggle"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <i className={isOpenMenu ? "fas fa-times" : "fas fa-bars"} />
        </span>
      </div>
    </header>
  );
};

export default Header;
