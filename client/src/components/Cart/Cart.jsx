import CartItem from "./CartItem";

const Cart = (props) => {
  const {
    cart,
    removeProductFromCart,
    plusProductInCart,
    minusProductFromCart,
  } = props;

  const removeProduct = (id) => {
    removeProductFromCart(id);
  };

  const plusProduct = (id) => {
    plusProductInCart(id);
  };
  const minusProduct = (id) => {
    minusProductFromCart(id);
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
    </div>
  );
};

export default Cart;
