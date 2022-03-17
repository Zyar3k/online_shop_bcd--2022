const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  const removeProduct = () => {
    console.log("remove");
  };

  if (cart.length === 0) return <p>Your cart is empty</p>;
  return (
    <div>
      {cart.map((product) => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <button onClick={removeProduct}>REMOVE FROM CART</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
