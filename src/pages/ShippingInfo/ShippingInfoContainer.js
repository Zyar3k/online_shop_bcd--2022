import { connect } from "react-redux";
import { getAddress } from "../../redux/productRedux";

import Summary from "./Summary";

const mapStateToProps = (state) => ({
  address: getAddress(state),
});

export default connect(mapStateToProps)(Summary);
