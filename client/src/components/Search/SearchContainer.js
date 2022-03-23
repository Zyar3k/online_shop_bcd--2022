import { connect } from "react-redux";
import { getProducts, searchProductsAction } from "../../redux/productRedux";

import Search from "./Search.jsx";

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchProducts: (payload) => dispatch(searchProductsAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
