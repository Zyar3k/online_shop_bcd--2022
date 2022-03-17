import { connect } from "react-redux";
import { getCart, removeProductFromCart } from "../../redux/productRedux";

import Cart from "./Cart";

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (payload) => dispatch(removeProductFromCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
