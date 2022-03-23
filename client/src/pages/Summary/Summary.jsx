import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle/PageTitle";

import "./Summary.scss";

const Summary = (props) => {
  const { cart, total, clearCart } = props;
  const navigate = useNavigate();

  const handleOrder = () => {
    clearCart();
    navigate("/totals");
  };

  return (
    <section className="container">
      <PageTitle>Your order</PageTitle>
      <div className="table-container" role="table" aria-label="Destinations">
        <div className="flex-table " role="rowgroup">
          <div className="flex-row first" role="columnheader">
            Name:
          </div>
          <div className="flex-row" role="columnheader">
            Price:
          </div>
          <div className="flex-row" role="columnheader">
            Quantity:
          </div>
          <div className="flex-row" role="columnheader">
            Product total:
          </div>
        </div>
        {cart.map((product) => (
          <div key={product._id} className="flex-table " role="rowgroup">
            <div className="flex-row rowspan first" role="cell">
              {product.name}
            </div>
            <div className="flex-row" role="cell">
              {product.price} $
            </div>
            <div className="flex-row" role="cell">
              {product.quantity}
            </div>
            <div className="flex-row" role="cell">
              {(product.price * product.quantity).toFixed(2)} $
            </div>
          </div>
        ))}
        <div className="flex-table" role="rowgroup">
          <div className="flex-row" role="cell"></div>
          <div className="flex-row" role="cell"></div>
          <div className="flex-row" role="cell">
            Total:
          </div>
          <div className="flex-row" role="cell">
            {total.toFixed(2)} $
          </div>
        </div>
      </div>
      <div className="summaryActions">
        <button className="btn btn__success" onClick={handleOrder}>
          Order
        </button>
      </div>
    </section>
  );
};

export default Summary;
