import Products from "../../components/Products/ProductsContainer";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
  return (
    <main className="container">
      <HomeSlider />
      <Products />
    </main>
  );
};

export default Home;
