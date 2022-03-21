import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

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
          <NavLink
            onClick={() => setIsOpenMenu(false)}
            to="/"
            exact="true"
            className="header__nav__item"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpenMenu(false)}
            className="header__nav__item"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setIsOpenMenu(false)}
            className="header__nav__item"
            to="/cart"
          >
            Cart
            {cart.length !== 0 && (
              <>
                <i className="fa-solid fa-cart-shopping"></i>
                <sup>{cart.length}</sup>
              </>
            )}
          </NavLink>
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
