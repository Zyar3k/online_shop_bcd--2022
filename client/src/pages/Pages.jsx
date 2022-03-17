import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage/CartPage";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetailsContainer";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Pages;
