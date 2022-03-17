import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">LOGO</NavLink>
      </div>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
};

export default Header;
