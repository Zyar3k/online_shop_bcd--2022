import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";
import PendingInfo from "../../components/common/PendingInfo/PendingInfo";

const ProductDetails = (props) => {
  const { loadProduct, request, product } = props;
  const params = useParams();
  const currentProductId = params.id;

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

  useEffect(() => {
    loadProduct(currentProductId);
  }, [currentProductId, loadProduct]);

  if (success) {
    return (
      <div>
        <h5>{product.name}</h5>
        <h5>{product.tag}</h5>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <img src={product.img} alt={product.name} />
      </div>
    );
  } else if (loading) {
    return <Loader />;
  } else if (pending) {
    return <PendingInfo />;
  }
};

export default ProductDetails;
