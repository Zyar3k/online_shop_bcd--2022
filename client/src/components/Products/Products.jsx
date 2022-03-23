import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";
import PendingInfo from "../../components/common/PendingInfo/PendingInfo";
import PageTitle from "../common/PageTitle/PageTitle";
import ProductCard from "../ProductCard/ProductCard";
import ProductsAmount from "../ProductsAmount/ProductsAmountContainer";
import Search from "../Search/SearchContainer";
import "./Products.scss";

const Products = (props) => {
  const { loadProducts, products, request, searchedProducts } = props;
  const [displayProducts, setDisplayProducts] = useState(products);

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
    if (searchedProducts !== 0) {
      setDisplayProducts(searchedProducts);
    }
  }, [searchedProducts]);

  useEffect(() => {
    loadProducts();

    if (success) {
      setDisplayProducts(products);
    }
  }, [loadProducts, success]);

  return (
    <>
      <div className="container">
        <div className="componentsWrapper">
          <ProductsAmount />
          <Search />
        </div>
      </div>
      {loading && <Loader />}
      {pending && <PendingInfo />}
      {success && (
        <>
          <PageTitle>Our products</PageTitle>
          <ul className="productList">
            {displayProducts.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <ProductCard product={product} />
              </Link>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Products;
