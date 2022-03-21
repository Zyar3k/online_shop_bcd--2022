import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage/CartPage";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetailsContainer";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
import Summary from "./Summary/SummaryContainer";
import Totals from "./Totals/Totals";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/shipping" element={<ShippingInfo />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/totals" element={<Totals />} />
    </Routes>
  );
};

export default Pages;
