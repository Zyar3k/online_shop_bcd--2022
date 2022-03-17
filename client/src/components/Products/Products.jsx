import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { loadProducts, products } = props;

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            <p>{product.name}</p>
            <img src={product.img} alt={product.name} />
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
