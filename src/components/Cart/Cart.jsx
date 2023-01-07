import { useNavigate } from "react-router-dom";
import PageTitle from "../common/PageTitle/PageTitle";
import CartItem from "./CartItem";

import "./Cart.scss";

const Cart = (props) => {
  const {
    cart,
    total,
    removeProductFromCart,
    plusProductInCart,
    minusProductFromCart,
    calculateCartTotal,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/summary");
  };

  const removeProduct = (id) => {
    removeProductFromCart(id);
    calculateCartTotal();
  };

  const plusProduct = (id) => {
    plusProductInCart(id);
    calculateCartTotal();
  };
  const minusProduct = (id) => {
    minusProductFromCart(id);
    calculateCartTotal();
  };

  return (
    <section className="container">
      <PageTitle>
        Your cart
        {cart.length === 0 && " is empty"}
      </PageTitle>
      <div>
        {cart.map((product) => (
          <CartItem
            key={product._id}
            product={product}
            removeProduct={removeProduct}
            plusProduct={plusProduct}
            minusProduct={minusProduct}
          />
        ))}
        {cart.length !== 0 && (
          <section className="cartTotal">
            <h3 className="cartTotal__total">TOTAL: {total.toFixed(2)} $ </h3>
            <button className="btn btn__success" onClick={handleClick}>
              Summary
            </button>
          </section>
        )}
      </div>
    </section>
  );
};

export default Cart;
