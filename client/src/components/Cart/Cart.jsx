import { useNavigate } from "react-router-dom";
import PageTitle from "../common/PageTitle/PageTitle";
import CartItem from "./CartItem";

import "./Cart.scss";

const exampleArray = [
  {
    _id: "5e66549d1c9d440000b4c793",
    tag: "",
    name: "Handmade New Baby Boy Card",
    description:
      "Handmade It’s a Boy card. Each item attached on the card is hand cut, also “IT’S A Boy” is hand stamped. Card is finished with glitter washi tape. Left blank inside for your own personal message. Beautiful gift for a little Boy!",
    price: 6.5,
    img: "./images/img07.jpg",
    quantity: 0,
  },
  {
    _id: "5e6654551c9d440000b4c791",
    tag: "last one",
    name: "Handmade New Home Card",
    description:
      "Handmade New Home card with wooden house embellishment and ribbon. “New Home” and “congratulations” is hand stamped. Left blank inside for your own personal message. Perfect card for a friends and family!",
    price: 8.5,
    img: "./images/img05.jpg",
    quantity: 0,
  },
  {
    _id: "5e66547b1c9d440000b4c792",
    tag: "last one",
    name: "Handmade Birthday Card",
    description:
      "Handmade Birthday Card. Each letter is hand cut, glued on rectangle and attached by foam pads on cute pattern base. Finished with a small button. The cards size is 4inch x 4inch (Each card come with matching envelope and envelope cello bag)",
    price: 4.5,
    img: "./images/img06.jpg",
    quantity: 0,
  },
];

const Cart = (props) => {
  const {
    cart,
    total,
    removeProductFromCart,
    plusProductInCart,
    minusProductFromCart,
    calculateCartTotal,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/summary");
  };

  const removeProduct = (id) => {
    removeProductFromCart(id);
    calculateCartTotal();
  };

  const plusProduct = (id) => {
    plusProductInCart(id);
    calculateCartTotal();
  };
  const minusProduct = (id) => {
    minusProductFromCart(id);
    calculateCartTotal();
  };

  return (
    <section className="container">
      <PageTitle>
        Your cart
        {cart.length === 0 && " is empty"}
      </PageTitle>
      <div>
        {cart.map((product) => (
          <CartItem
            key={product._id}
            product={product}
            removeProduct={removeProduct}
            plusProduct={plusProduct}
            minusProduct={minusProduct}
          />
        ))}
        <h1>TOTAL:{total.toFixed(2)} $ </h1>
        <button className="btn btn__success" onClick={handleClick}>
          Summary
        </button>
      </div>
    </section>
  );
};

export default Cart;
