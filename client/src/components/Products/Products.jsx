import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";
import PendingInfo from "../../components/common/PendingInfo/PendingInfo";
import ProductsAmount from "../ProductsAmount/ProductsAmountContainer";

const Products = (props) => {
  const { loadProducts, products, request } = props;

  // TODO: move it
  const success =
    request.success === true &&
    request.pending === false &&
    products.length > 0;
  const loading = request.pending === true || request.success === null;
  const pending =
    request.pending === false &&
    request.success === true &&
    products.length === 0;

  useEffect(() => {
    loadProducts();
  }, []);

  if (success) {
    return (
      <div>
        <ProductsAmount />
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
  } else if (loading) {
    return <Loader />;
  } else if (pending) {
    return <PendingInfo />;
  }
};

export default Products;
