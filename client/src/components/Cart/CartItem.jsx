import "./Cart.scss";

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
    <div className="cartItem">
      <img className="cartItem__img" src={product.img} alt={product.name} />
      <p className="cartItem__name">{product.name}</p>
      <h4 className="cartItem__price">{product.price}$</h4>
      <div className="cartItem__actions">
        <button className="btn btn__back" onClick={plusProductInCart}>
          +
        </button>
        <h4>{product.quantity}</h4>
        <button className="btn btn__back" onClick={minusProductInCart}>
          -
        </button>
        <button className="btn btn__warn" onClick={() => deleteProduct()}>
          <i className="fa-solid fa-trash-can" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
