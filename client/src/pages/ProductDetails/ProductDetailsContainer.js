import { connect } from "react-redux";
import {
  getProduct,
  loadProductRequest,
  getRequest,
} from "../../redux/productRedux";
import ProductDetails from "./ProductDetails";

const mapStateToProps = (state) => ({
  product: getProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProduct: (id) => dispatch(loadProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
