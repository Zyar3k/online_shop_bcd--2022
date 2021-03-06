import { connect } from "react-redux";
import {
  getProducts,
  loadProductsRequest,
  getRequest,
  getSearchedProducts,
} from "../../redux/productRedux";
import Products from "./Products";

const mapStateToProps = (state) => ({
  products: getProducts(state),
  request: getRequest(state),
  searchedProducts: getSearchedProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
