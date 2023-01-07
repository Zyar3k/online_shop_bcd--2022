import Products from "../../components/Products/ProductsContainer";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import ScrollToTop from "../../components/common/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <main className="container">
      <HomeSlider />
      <Products />
      <ScrollToTop />
    </main>
  );
};

export default Home;
