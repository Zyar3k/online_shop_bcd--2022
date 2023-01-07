import { connect } from "react-redux";
import {
  getProduct,
  loadProductRequest,
  getRequest,
  getCart,
  addProductToCart,
  calculateCartTotal,
} from "../../redux/productRedux";
import ProductDetails from "./ProductDetails";

const mapStateToProps = (state) => ({
  product: getProduct(state),
  request: getRequest(state),
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProduct: (id) => dispatch(loadProductRequest(id)),
  addProductToCart: (payload) => dispatch(addProductToCart(payload)),
  calculateCartTotal: (payload) => dispatch(calculateCartTotal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
