import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";
import PendingInfo from "../../components/common/PendingInfo/PendingInfo";
import PageTitle from "../common/PageTitle/PageTitle";
import ProductCard from "../ProductCard/ProductCard";
import ProductsAmount from "../ProductsAmount/ProductsAmountContainer";
import "./Products.scss";

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
      <div className="container">
        <PageTitle>Our products</PageTitle>
        <ProductsAmount />
        <ul className="productList">
          {products.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </ul>
      </div>
    );
  } else if (loading) {
    return <Loader />;
  } else if (pending) {
    return <PendingInfo />;
  }
};

export default Products;
