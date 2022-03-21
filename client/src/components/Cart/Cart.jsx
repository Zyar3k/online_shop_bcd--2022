import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

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

  if (cart.length === 0) return <p>Your cart is empty</p>;
  return (
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
      <h1>TOTAL:{total} $ </h1>
      <button onClick={handleClick}>Summary</button>
    </div>
  );
};

export default Cart;
