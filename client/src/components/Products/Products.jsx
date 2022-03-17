import { useEffect } from "react";

const Products = (props) => {
  const { loadProducts, products } = props;

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default Products;
