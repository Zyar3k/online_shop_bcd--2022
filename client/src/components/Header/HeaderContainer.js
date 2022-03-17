import { connect } from "react-redux";
import { getCart } from "../../redux/productRedux";
import Header from "./Header";

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

export default connect(mapStateToProps)(Header);
