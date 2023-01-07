import { connect } from "react-redux";
import {
  getCart,
  removeProductFromCart,
  plusProductInCart,
  minusProductFromCart,
  getTotal,
  calculateCartTotal,
} from "../../redux/productRedux";

import Cart from "./Cart";

const mapStateToProps = (state) => ({
  cart: getCart(state),
  total: getTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (payload) => dispatch(removeProductFromCart(payload)),
  plusProductInCart: (payload) => dispatch(plusProductInCart(payload)),
  minusProductFromCart: (payload) => dispatch(minusProductFromCart(payload)),
  calculateCartTotal: (payload) => dispatch(calculateCartTotal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
