import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage/CartPage";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Pages;
