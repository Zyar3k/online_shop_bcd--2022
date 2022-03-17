import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart, removeProductFromCart } = props;
  console.log(cart);

  const removeProduct = (id) => {
    removeProductFromCart(id);
  };

  if (cart.length === 0) return <p>Your cart is empty</p>;
  return (
    <div>
      {cart.map((product) => (
        <CartItem
          key={product._id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default Cart;
