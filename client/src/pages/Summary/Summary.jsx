import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle/PageTitle";

import "./Summary.scss";

const exampleArray = [
  {
    _id: "5e66549d1c9d440000b4c793",
    tag: "",
    name: "Handmade New Baby Boy Card",
    description:
      "Handmade It’s a Boy card. Each item attached on the card is hand cut, also “IT’S A Boy” is hand stamped. Card is finished with glitter washi tape. Left blank inside for your own personal message. Beautiful gift for a little Boy!",
    price: 6.5,
    img: "./images/img07.jpg",
    quantity: 3,
  },
  {
    _id: "5e6654551c9d440000b4c791",
    tag: "last one",
    name: "Handmade New Home Card",
    description:
      "Handmade New Home card with wooden house embellishment and ribbon. “New Home” and “congratulations” is hand stamped. Left blank inside for your own personal message. Perfect card for a friends and family!",
    price: 8.5,
    img: "./images/img05.jpg",
    quantity: 2,
  },
  {
    _id: "5e66547b1c9d440000b4c792",
    tag: "last one",
    name: "Handmade Birthday Card",
    description:
      "Handmade Birthday Card. Each letter is hand cut, glued on rectangle and attached by foam pads on cute pattern base. Finished with a small button. The cards size is 4inch x 4inch (Each card come with matching envelope and envelope cello bag)",
    price: 4.5,
    img: "./images/img06.jpg",
    quantity: 5,
  },
];

const Summary = (props) => {
  const { cart, total, clearCart } = props;
  const navigate = useNavigate();

  const handleOrder = () => {
    clearCart();
    navigate("/totals");
  };

  return (
    <section className="container">
      <PageTitle>Your order</PageTitle>
      <div className="table-container" role="table" aria-label="Destinations">
        <div className="flex-table " role="rowgroup">
          <div className="flex-row first" role="columnheader">
            Name:
          </div>
          <div className="flex-row" role="columnheader">
            Price:
          </div>
          <div className="flex-row" role="columnheader">
            Quantity:
          </div>
          <div className="flex-row" role="columnheader">
            Product total:
          </div>
        </div>
        {exampleArray.map((product) => (
          <div key={product._id} className="flex-table " role="rowgroup">
            <div className="flex-row rowspan first" role="cell">
              {product.name}
            </div>
            <div className="flex-row" role="cell">
              {product.price} $
            </div>
            <div className="flex-row" role="cell">
              {product.quantity}
            </div>
            <div className="flex-row" role="cell">
              {product.price * product.quantity} $
            </div>
          </div>
        ))}
        <div className="flex-table" role="rowgroup">
          <div className="flex-row" role="cell"></div>
          <div className="flex-row" role="cell"></div>
          <div className="flex-row" role="cell">
            Total:
          </div>
          <div className="flex-row" role="cell">
            {total} $
          </div>
        </div>
      </div>
      <div className="summaryActions">
        <button className="btn btn__success" onClick={handleOrder}>
          Order
        </button>
      </div>
    </section>
  );
};

export default Summary;
