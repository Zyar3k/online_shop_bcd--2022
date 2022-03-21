import { useNavigate } from "react-router-dom";

const Totals = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque alias
        aspernatur mollitia doloremque earum commodi culpa, provident omnis
        maxime tempora voluptatibus veniam ipsa in consectetur quas rem vero
        esse repudiandae?
      </p>
      <button onClick={() => navigate("/")}>Back to shop</button>
    </>
  );
};

export default Totals;
