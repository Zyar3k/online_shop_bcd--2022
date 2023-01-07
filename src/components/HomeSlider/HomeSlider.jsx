import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.scss";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const sliderItems = [
  {
    img: img1,
    text: "Free UK Shipping",
  },
  {
    img: img2,
    text: "Personalized orders especially for you",
    isButton: true,
    buttonText: "Contact",
    buttonPath: "/contact",
  },
  {
    img: img3,
    text: "We organize crafting workshops... and many, many other things...",
    isButton: true,
    buttonText: "Contact",
    buttonPath: "/contact",
  },
];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      {sliderItems.map((item, index) => (
        <div key={index} className="slide">
          <div className="slide__imgWrapper">
            <img className="slide__image" src={item.img} alt="" />
          </div>
          <h1 className="slide__text">{item.text}</h1>
          {item.isButton && (
            <button className="btn btn__success">
              <Link to={item.buttonPath}>{item.buttonText}</Link>
            </button>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
