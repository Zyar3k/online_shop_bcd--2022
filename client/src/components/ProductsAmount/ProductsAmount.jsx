const ProductsAmount = ({ amount }) => {
  return <h3>Products available: {amount > 0 ? amount : 0}</h3>;
};

export default ProductsAmount;
