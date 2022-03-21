import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, img, price, tag } = product;
  return (
    <li className="card">
      {tag && <h2 className="card__tag">{tag}</h2>}
      <h3 className="card__name">{name}</h3>
      <img className="card__img" src={img} alt="" />
      <h4 className="card__price">{price}$</h4>
    </li>
  );
};

export default ProductCard;
