import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";
import PendingInfo from "../../components/common/PendingInfo/PendingInfo";

import "./ProductDetails.scss";

const ProductDetails = (props) => {
  const {
    loadProduct,
    request,
    product,
    addProductToCart,
    cart,
    calculateCartTotal,
  } = props;
  const params = useParams();
  const navigate = useNavigate();
  const currentProductId = params.id;
  let image;
  if (product.img) image = product.img.slice(1);

  // TODO: move it
  const success =
    request.success === true &&
    request.pending === false &&
    product._id === currentProductId;
  const loading = request.pending === true || request.success === null;
  const pending =
    request.pending === false &&
    request.success === true &&
    product._id !== currentProductId;

  const addProductCart = () => {
    const check = cart.find((product) => product._id === currentProductId);

    if (check) {
      return console.warn("Product already in cart");
    }
    addProductToCart(product);
    calculateCartTotal();
  };

  useEffect(() => {
    loadProduct(currentProductId);
  }, [currentProductId, loadProduct]);

  if (success) {
    return (
      <article className="product container">
        <div className="product__info">
          {product.tag && <h5 className="product__tag">{product.tag}</h5>}
          <h1
            className={product.tag ? "product__name " : "product__name noTag"}
          >
            {product.name}
          </h1>
          <div className="product__image">
            <img src={image} alt={product.name} />
          </div>
          <div className="product__details">
            <p className="product__desc">{product.description}</p>
            <p className="product__price">Price: {product.price}$</p>
            <div className="product__actions">
              <button className="btn btn__success" onClick={addProductCart}>
                ADD TO CART
              </button>
              <button className="btn btn__back" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  } else if (loading) {
    return <Loader />;
  } else if (pending) {
    return <PendingInfo />;
  }
};

export default ProductDetails;
