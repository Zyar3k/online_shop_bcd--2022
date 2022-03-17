const CartItem = ({ product, removeProduct }) => {
  const deleteProduct = () => {
    removeProduct(product._id);
  };
  return (
    <div>
      <h1>{product.name}</h1>
      <button onClick={() => deleteProduct()}>DELETE</button>
    </div>
  );
};

export default CartItem;
