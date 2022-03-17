const CartItem = ({ product, removeProduct, plusProduct, minusProduct }) => {
  const deleteProduct = () => {
    removeProduct(product._id);
  };
  const plusProductInCart = () => {
    // console.log("plus");
    plusProduct(product._id);
  };
  const minusProductInCart = () => {
    // console.log("minus");
    minusProduct(product._id);
  };
  return (
    <div>
      <h1>{product.name}</h1>
      <button onClick={plusProductInCart}>+</button>
      <button onClick={minusProductInCart}>-</button>
      <h4>{product.quantity}</h4>
      <button onClick={() => deleteProduct()}>DELETE</button>
    </div>
  );
};

export default CartItem;
