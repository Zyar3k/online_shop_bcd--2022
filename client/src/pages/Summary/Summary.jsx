import { useNavigate } from "react-router-dom";

const Summary = (props) => {
  const { cart, total, clearCart } = props;
  const navigate = useNavigate();

  const handleOrder = () => {
    clearCart();
    navigate("/totals");
  };

  return (
    <div>
      <h1>Your order</h1>
      {cart.map((product) => (
        <li key={product._id}>
          <span>{product.name}</span>
          <span> - {product.quantity}</span>
        </li>
      ))}
      <h4>{total} $</h4>
      <button onClick={handleOrder}>Order</button>
    </div>
  );
};

export default Summary;
