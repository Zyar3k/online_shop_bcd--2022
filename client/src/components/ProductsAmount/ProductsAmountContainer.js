import { connect } from "react-redux";
import { getAmountOfProducts } from "../../redux/productRedux";
import ProductsAmount from "./ProductsAmount";

const mapStateToProps = (state) => ({
  amount: getAmountOfProducts(state),
});

export default connect(mapStateToProps)(ProductsAmount);
