import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { cart } = props;
  return (
    <header>
      <div>
        <NavLink to="/">LOGO</NavLink>
      </div>
      <nav>
        <NavLink to="/" exact="true">
          Home
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart{cart.length !== 0 && cart.length}</NavLink>
      </nav>
    </header>
  );
};

export default Header;
