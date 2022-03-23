import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.scss";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="slide">
        <div className="slide__imgWrapper">
          <img className="slide__image" src={img1} alt="" />
        </div>
        <h1 className="slide__text">Free UK Shipping</h1>
      </div>
      <div className="slide">
        <div className="slide__imgWrapper">
          <img className="slide__image" src={img2} alt="" />
        </div>
        <h1 className="slide__text">Personalized orders especially for you</h1>
        <button className="btn btn__success">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
      <div className="slide">
        <div className="slide__imgWrapper">
          <img className="slide__image" src={img3} alt="" />
        </div>
        <h1 className="slide__text">
          We organize crafting workshops... and many, many other things...
        </h1>
        <button className="btn btn__success">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </Slider>
  );
};

export default HomeSlider;
