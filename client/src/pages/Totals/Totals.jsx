import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle/PageTitle";

import "./Totals.scss";

const Totals = () => {
  const navigate = useNavigate();
  return (
    <section className="totals container">
      <PageTitle>Thank you!</PageTitle>
      <h2 className="totals__thanks">
        Thank you. We hope your experience was awesome and we can’t wait to see
        you again soon.
      </h2>
      <button className="btn btn__back" onClick={() => navigate("/")}>
        Back to shop
      </button>
    </section>
  );
};

export default Totals;
