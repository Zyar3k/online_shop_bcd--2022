const CartItem = ({ product, removeProduct, plusProduct, minusProduct }) => {
  const deleteProduct = () => {
    removeProduct(product._id);
  };
  const plusProductInCart = () => {
    plusProduct(product._id);
  };
  const minusProductInCart = () => {
    minusProduct(product._id);
  };
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.price}$</h3>
      <button onClick={plusProductInCart}>+</button>
      <button onClick={minusProductInCart}>-</button>
      <h4>{product.quantity}</h4>
      <button onClick={() => deleteProduct()}>DELETE</button>
    </div>
  );
};

export default CartItem;
