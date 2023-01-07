import { connect } from "react-redux";
import { getCart, getTotal, clearCart } from "../../redux/productRedux";

import Summary from "./Summary";

const mapStateToProps = (state) => ({
  cart: getCart(state),
  total: getTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
